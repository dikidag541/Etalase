<?php

namespace Database\Seeders;

use App\Models\PageSetting;
use App\Models\TeamMember;
use App\Models\Article;
use App\Models\GalleryItem;
use Illuminate\Database\Seeder;

class PageSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['page' => 'home', 'key' => 'hero_video', 'value' => '/videos/Trailer.mp4', 'type' => 'video', 'label' => 'Hero Background Video', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_1', 'value' => 'UKMK', 'type' => 'text', 'label' => 'Hero Title Top', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_2', 'value' => 'ETALASE', 'type' => 'text', 'label' => 'Hero Title Bottom (Gold)', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_banner_text', 'value' => 'Sovereign Edition • 2026', 'type' => 'text', 'label' => 'Hero Upper Banner', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_subtitle', 'value' => 'Eksplorasi estetika maksimalis dalam kedaulatan seni.', 'type' => 'textarea', 'label' => 'Hero Subtitle', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_year', 'value' => '2026', 'type' => 'text', 'label' => 'Side Badge Year', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_text', 'value' => 'SOVEREIGN MAXIMALIST', 'type' => 'text', 'label' => 'Side Badge Text', 'group' => 'Hero Section'],
            
            ['page' => 'home', 'key' => 'manifesto_scroll_text', 'value' => 'MANIFESTO MANIFESTO MANIFESTO', 'type' => 'text', 'label' => 'Manifesto Scrolling Text', 'group' => 'Manifesto'],
            ['page' => 'home', 'key' => 'faset_scroll_text', 'value' => 'FASET', 'type' => 'text', 'label' => 'Faset Background Text', 'group' => 'Faset Section'],
            
            // --- ABOUT PAGE ---
            ['page' => 'about', 'key' => 'about_hero_image', 'value' => '/images/Salinan Ave 4 cymk.webp', 'type' => 'image', 'label' => 'About Hero Background', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'concept_badge', 'value' => 'CONCEPT', 'type' => 'text', 'label' => 'Concept Badge', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'concept_title', 'value' => 'Living the Legacy', 'type' => 'text', 'label' => 'Concept Page Subtitle', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'philosophy_badge', 'value' => 'Misi & Filosofi', 'type' => 'text', 'label' => 'Philosophy Badge', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'philosophy_title_1', 'value' => 'Lahir Dari', 'type' => 'text', 'label' => 'Philosophy Title line 1', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'philosophy_title_2', 'value' => 'Api Tradisi', 'type' => 'text', 'label' => 'Philosophy Title line 2 (Gold)', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'mission_text', 'value' => 'Berdiri sebagai garda terdepan kreativitas Universitas Jember, Etalase mengadopsi prinsip kedaulatan dalam setiap ekspresi.', 'type' => 'textarea', 'label' => 'Mission Paragraph 1', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'mission_text_2', 'value' => 'Terinspirasi oleh kemegahan JFC, kami menciptakan panggung di mana seni tidak hanya disaksikan, tapi dirasakan sebagai identitas.', 'type' => 'textarea', 'label' => 'Mission Paragraph 2', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'about_quote', 'value' => 'Jadilah bagian dari revolusi rupa dan raga di panggung Etalase.', 'type' => 'textarea', 'label' => 'Join the Parade Quote', 'group' => 'Call to Action'],
            ['page' => 'about', 'key' => 'identity_image', 'value' => '/images/theater_scene.png', 'type' => 'image', 'label' => 'Identity Main Image', 'group' => 'Visual Section'],
            ['page' => 'about', 'key' => 'pillar_1_title', 'value' => 'Majesty', 'type' => 'text', 'label' => 'Pillar 1 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_1_desc', 'value' => 'Menghadirkan kualitas visual dan performa yang agung.', 'type' => 'textarea', 'label' => 'Pillar 1 Desc', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_2_title', 'value' => 'Unity', 'type' => 'text', 'label' => 'Pillar 2 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_2_desc', 'value' => 'Sinergi antar faset yang menciptakan harmoni sempurna.', 'type' => 'textarea', 'label' => 'Pillar 2 Desc', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_3_title', 'value' => 'Sovereignty', 'type' => 'text', 'label' => 'Pillar 3 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_3_desc', 'value' => 'Kebebasan penuh dalam bereksperimen dengan bahasa rupa.', 'type' => 'textarea', 'label' => 'Pillar 3 Desc', 'group' => 'Pillars'],
 
            // --- GALLERY HEADER ---
            ['page' => 'gallery', 'key' => 'gallery_badge', 'value' => 'Archive & Documentation', 'type' => 'text', 'label' => 'Gallery Header Badge', 'group' => 'Header'],
            ['page' => 'gallery', 'key' => 'gallery_title_1', 'value' => 'Visionary', 'type' => 'text', 'label' => 'Gallery Title 1', 'group' => 'Header'],
            ['page' => 'gallery', 'key' => 'gallery_title_2', 'value' => 'Archive', 'type' => 'text', 'label' => 'Gallery Title 2', 'group' => 'Header'],
 
            // --- ARTICLES PAGE ---
            ['page' => 'articles', 'key' => 'articles_badge', 'value' => 'Official Publication • Perspectives', 'type' => 'text', 'label' => 'Articles Header Badge', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_title_1', 'value' => 'Esensi', 'type' => 'text', 'label' => 'Articles Title Line 1', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_title_2', 'value' => 'Kesenian', 'type' => 'text', 'label' => 'Articles Title Line 2 (Gold)', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_bg_text', 'value' => 'EDITORIAL', 'type' => 'text', 'label' => 'Articles Background Text', 'group' => 'Header'],

            // --- TEAM PAGE ---
            ['page' => 'team', 'key' => 'team_hero_image', 'value' => '/images/costume_detail.png', 'type' => 'image', 'label' => 'Hero Background Image', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_badge_text', 'value' => 'CORE COLLECTIVE', 'type' => 'text', 'label' => 'Header Badge Text', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line1', 'value' => 'THE', 'type' => 'text', 'label' => 'Title Line 1', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line2', 'value' => 'ARTISTIC', 'type' => 'text', 'label' => 'Title Line 2', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line3', 'value' => 'SOVEREIGNTY', 'type' => 'text', 'label' => 'Title Line 3', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line4', 'value' => 'BEHIND', 'type' => 'text', 'label' => 'Title Line 4 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line5', 'value' => 'THE', 'type' => 'text', 'label' => 'Title Line 5 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line6', 'value' => 'SCENES', 'type' => 'text', 'label' => 'Title Line 6 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line7', 'value' => 'EXPRESSION', 'type' => 'text', 'label' => 'Title Line 7 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_vision_quote', 'value' => '"Mengawal imajinasi menjadi realitas yang megah."', 'type' => 'textarea', 'label' => 'Vision Quote', 'group' => 'Vision Section'],
        ];

        foreach ($settings as $setting) {
            PageSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }

        // --- SEED TEAM ---
        $team = [
           ['name' => 'DIKI FERDIANTO', 'role' => 'Chairman / Creative Director', 'image_url' => '/images/dance_performance.png', 'order' => 1],
           ['name' => 'SARI PUSPITA', 'role' => 'Vice Chairman', 'image_url' => '/images/hero_carnival.png', 'order' => 2],
           ['name' => 'ADITYA PUTRA', 'role' => 'Head of Production', 'image_url' => '/images/theater_scene.png', 'order' => 3],
           ['name' => 'MAWAR JINGGA', 'role' => 'Artistic Lead', 'image_url' => '/images/costume_detail.png', 'order' => 4],
        ];
        foreach ($team as $member) {
            TeamMember::updateOrCreate(['name' => $member['name']], $member);
        }

        // --- SEED ARTICLES ---
        $articles = [
            ['title' => 'Simfoni Raga: Dekonstruksi Tradisi', 'slug' => 'simfoni-raga-dekonstruksi-tradisi', 'category' => 'THEATER', 'image_url' => '/images/theater_scene.png', 'excerpt' => 'Menjelajahi batas antara teater kontemporer dan tarian tradisional dalam pementasan terbaru.'],
            ['title' => 'Estetika Maksimalis Jember', 'slug' => 'estetika-maksimalis-jember', 'category' => 'PERFORMANCE', 'image_url' => '/images/hero_carnival.png', 'excerpt' => 'Mengapa "More is More" menjadi mantra baru dalam desain kostum karnaval modern.'],
            ['title' => 'Kedaulatan Seniman Universitas', 'slug' => 'kedaulatan-seniman-universitas', 'category' => 'EDITORIAL', 'image_url' => '/images/costume_detail.png', 'excerpt' => 'Esai tentang pentingnya ruang kreatif bebas bagi mahasiswa untuk bereksperimen dengan rupa.'],
        ];
        foreach ($articles as $article) {
            Article::updateOrCreate(['slug' => $article['slug']], $article);
        }

        // --- SEED GALLERY ---
        $gallery = [
            ['title' => 'Grand Finale Performance', 'category' => 'PERFORMANCE', 'image_url' => '/images/hero_carnival.png'],
            ['title' => 'The Sovereign Mask', 'category' => 'COSTUME', 'image_url' => '/images/costume_detail.png'],
            ['title' => 'Ethereal Dance Movement', 'category' => 'DANCE', 'image_url' => '/images/dance_performance.png'],
            ['title' => 'Dramatic Stage Shadow', 'category' => 'THEATER', 'image_url' => '/images/theater_scene.png'],
            ['title' => 'Majestic Red Aura', 'category' => 'PERFORMANCE', 'image_url' => '/images/hero_carnival.png'],
            ['title' => 'Avant-Garde Craftsmanship', 'category' => 'COSTUME', 'image_url' => '/images/costume_detail.png'],
        ];
        foreach ($gallery as $item) {
            GalleryItem::updateOrCreate(['title' => $item['title']], $item);
        }
    }
}
