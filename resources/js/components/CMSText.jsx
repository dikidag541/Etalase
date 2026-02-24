import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '@/lib/LangContext';

/**
 * CMSText - Auto-translates dynamic CMS content to the active language.
 * In ID mode, renders text as-is.
 * In JV mode, calls MyMemory API and renders translated text.
 *
 * Usage:
 *   <CMSText>{cms.hero_title || 'Default Title'}</CMSText>
 *   <CMSText as="h1" className="text-4xl">{cms.description}</CMSText>
 */
export default function CMSText({ children, as: Tag = 'span', className = '', ...props }) {
    const { lang, translateText } = useLang();
    const [translated, setTranslated] = useState(children);
    const prevLang = useRef(lang);
    const prevText = useRef(children);

    useEffect(() => {
        // Always re-run when the text or lang changes
        if (!children) { setTranslated(children); return; }
        if (lang === 'ID') { setTranslated(children); return; }

        let cancelled = false;
        translateText(String(children)).then((result) => {
            if (!cancelled) setTranslated(result);
        });
        return () => { cancelled = true; };
    }, [children, lang]);

    return <Tag className={className} {...props}>{translated}</Tag>;
}
