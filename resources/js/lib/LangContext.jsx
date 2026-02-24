import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/lib/translations';

const LangContext = createContext({ lang: 'ID', t: (key) => key, setLang: () => { }, translateText: async (text) => text });

// Shared in-memory cache for translated strings (persists for the page session)
const translationCache = new Map();

async function fetchTranslation(text, targetLang) {
    if (!text || !text.trim() || targetLang === 'ID') return text;
    const cacheKey = `${targetLang}::${text}`;
    if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

    try {
        // Using Google Translate unofficial endpoint (no API key needed)
        // jw = Javanese language code on Google Translate
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=id&tl=jw&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        // Response is nested arrays: [[["translated","original",...],...],...]
        const translated = data?.[0]?.map(chunk => chunk?.[0]).join('') || text;
        translationCache.set(cacheKey, translated);
        return translated;
    } catch (e) {
        return text; // Graceful fallback to original text
    }
}

export function LangProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        // Read persisted language from localStorage on first render
        return localStorage.getItem('lang') || 'ID';
    });

    const setLang = (newLang) => {
        setLangState(newLang);
        localStorage.setItem('lang', newLang);
    };

    const t = (key, ...args) => {
        const val = translations[lang]?.[key] ?? translations['ID']?.[key] ?? key;
        return typeof val === 'function' ? val(...args) : val;
    };

    const translateText = (text) => fetchTranslation(text, lang);

    return (
        <LangContext.Provider value={{ lang, setLang, t, translateText }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
