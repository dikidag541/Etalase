/**
 * Etalase Website Translations
 * Bahasa Indonesia (ID) and Boso Jowo (JV)
 */
const translations = {
    ID: {
        // --- NAVIGATION ---
        nav_home: 'Home',
        nav_about: 'About',
        nav_articles: 'Articles',
        nav_gallery: 'Gallery',
        nav_team: 'Pengurus',

        // --- HOME PAGE ---
        home_expand_vision: 'Expand Vision',
        home_the_essence: 'The Essence',
        home_explore_faset: 'Explore Faset',
        home_division_caption: (name) => `Menyelami kedalaman estetika ${(name || 'seni').toLowerCase()} etalase yang monumental.`,

        // --- ABOUT PAGE ---
        about_join_parade: 'Join The Parade',
        about_contact_us: 'Contact Us',

        // --- ARTICLES PAGE ---
        articles_read_more: 'Baca',
        articles_empty: 'Belum ada artikel.',
        articles_load_more: 'SEMUA ARTIKEL',
        articles_subscribe_label: 'Berlangganan Jurnal',
        articles_subscribe_placeholder: 'Alamat Email',
        articles_subscribe_btn: 'BERLANGANAN',
        articles_subscribe_badge: 'BULETIN EDITORIAL',

        // --- GALLERY PAGE ---
        gallery_enter_archive: 'ENTER ARCHIVE',
        gallery_masterpieces_badge: 'MASTERPIECES',
        gallery_view: 'LIHAT',

        // --- FOOTER ---
        footer_tagline: 'Sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik.',
        footer_nav_title: 'Navigasi',
        footer_connect_title: 'Terhubung',
        footer_rights: 'UKM Kesenian Etalase. All rights reserved.',

        // --- LANGUAGE SELECTOR ---
        lang_id: 'Bahasa',
        lang_jv: 'Boso Jowo',
    },
    JV: {
        // --- NAVIGATION ---
        nav_home: 'Ngarep',
        nav_about: 'Bab Kita',
        nav_articles: 'Tulisan',
        nav_gallery: 'Galeri',
        nav_team: 'Pengurus',

        // --- HOME PAGE ---
        home_expand_vision: 'Wiyarake Visi',
        home_the_essence: 'Sarine',
        home_explore_faset: 'Njelajah Faset',
        home_division_caption: (name) => `Nlesih jero estetika ${(name || 'seni').toLowerCase()} etalase kang agung.`,

        // --- ABOUT PAGE ---
        about_join_parade: 'Melu Iring-Iringan',
        about_contact_us: 'Hubungi Kita',

        // --- ARTICLES PAGE ---
        articles_read_more: 'Waca',
        articles_empty: 'Durung ana artikel.',
        articles_load_more: 'KABEH ARTIKEL',
        articles_subscribe_label: 'Langganan Jurnal',
        articles_subscribe_placeholder: 'Alamat Email',
        articles_subscribe_btn: 'LANGGANAN',
        articles_subscribe_badge: 'BULETIN EDITORIAL',

        // --- GALLERY PAGE ---
        gallery_enter_archive: 'MLEBU ARSIP',
        gallery_masterpieces_badge: 'KARYA AGUNG',
        gallery_view: 'DELOK',

        // --- FOOTER ---
        footer_tagline: 'Wahana transformasi ing ngendi kesenian tradhisional ketemu karo gegayuhan futuristik.',
        footer_nav_title: 'Navigasi',
        footer_connect_title: 'Nyambung',
        footer_rights: 'UKM Kesenian Etalase. Hak cipta dilindungi.',

        // --- LANGUAGE SELECTOR ---
        lang_id: 'Bahasa',
        lang_jv: 'Boso Jowo',
    }
};

export default translations;
