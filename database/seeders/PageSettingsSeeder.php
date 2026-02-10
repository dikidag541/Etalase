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
            // --- HOME PAGE ---
            ['page' => 'home', 'key' => 'hero_video', 'value' => '/videos/Trailer.mp4', 'type' => 'video', 'label' => 'Hero Background Video', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_1', 'value' => 'GRAND', 'type' => 'text', 'label' => 'Hero Title Top', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_2', 'value' => 'ETALASE', 'type' => 'text', 'label' => 'Hero Title Bottom (Gold)', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_banner_text', 'value' => 'Jember Fashion Carnaval • 2026 Edition', 'type' => 'text', 'label' => 'Hero Upper Banner', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_subtitle', 'value' => 'Sebuah manifesto kebudayaan yang melampaui imajinasi rupa dan raga.', 'type' => 'textarea', 'label' => 'Hero Subtitle', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_year', 'value' => '2026', 'type' => 'text', 'label' => 'Side Badge Year', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_text', 'value' => 'REDEFINING THE CARNIVAL', 'type' => 'text', 'label' => 'Side Badge Text', 'group' => 'Hero Section'],
            
            ['page' => 'home', 'key' => 'masterpiece_image', 'value' => '/images/Salinan Ave 4 cymk.jpg', 'type' => 'image', 'label' => 'Masterpiece Main Image', 'group' => 'Masterpiece Section'],
            ['page' => 'home', 'key' => 'masterpiece_quote', 'value' => '"Kami mengambil api dari masa lalu untuk menerangi panggung masa depan. Setiap helai kain adalah doa, setiap gerak adalah revolusi."', 'type' => 'textarea', 'label' => 'Masterpiece Quote', 'group' => 'Masterpiece Section'],
            
            ['page' => 'home', 'key' => 'manifesto_title_1', 'value' => 'Eksplorasi', 'type' => 'text', 'label' => 'Manifesto title 1', 'group' => 'Manifesto'],
            ['page' => 'home', 'key' => 'manifesto_title_2', 'value' => 'Tanpa Batas', 'type' => 'text', 'label' => 'Manifesto title 2', 'group' => 'Manifesto'],
            ['page' => 'home', 'key' => 'manifesto_desc', 'value' => 'Etalase merepresentasikan keterbukaan. Sebuah ruang di mana keberagaman budaya Jember bertransformasi menjadi bahasa universal. Kami tidak sekadar menari, kami merayakan keberadaan.', 'type' => 'textarea', 'label' => 'Manifesto Description', 'group' => 'Manifesto'],

            // --- ABOUT PAGE ---
            ['page' => 'about', 'key' => 'concept_title', 'value' => 'The Sovereign Manifesto', 'type' => 'text', 'label' => 'Concept Page Subtitle', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'mission_text_1', 'value' => 'UKM Kesenian Etalase Universitas Jember bukan sekadar wadah organisasi, melainkan sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik.', 'type' => 'textarea', 'label' => 'Mission Paragraph 1', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'mission_text_2', 'value' => 'Terinspirasi oleh semangat Jember Fashion Carnaval, kami mengadopsi prinsip Sovereign Maximalist—di mana setiap detail adalah pernyataan, dan setiap panggung adalah kedaulatan seni.', 'type' => 'textarea', 'label' => 'Mission Paragraph 2', 'group' => 'Philosophy Section'],
            ['page' => 'about', 'key' => 'identity_image', 'value' => '/images/IMG_6046 (1).JPG', 'type' => 'image', 'label' => 'Identity Main Image', 'group' => 'Visual Section'],
            ['page' => 'about', 'key' => 'pillar_1_title', 'value' => 'Inovasi', 'type' => 'text', 'label' => 'Pillar 1 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_1_desc', 'value' => 'Mendobrak batas kreativitas tanpa melupakan akar budaya.', 'type' => 'textarea', 'label' => 'Pillar 1 Desc', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_2_title', 'value' => 'Kolaborasi', 'type' => 'text', 'label' => 'Pillar 2 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_2_desc', 'value' => 'Sinergi lintas faset seni untuk menciptakan pengalaman imersif.', 'type' => 'textarea', 'label' => 'Pillar 2 Desc', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_3_title', 'value' => 'Kedaulatan', 'type' => 'text', 'label' => 'Pillar 3 Title', 'group' => 'Pillars'],
            ['page' => 'about', 'key' => 'pillar_3_desc', 'value' => 'Memberikan ruang bagi setiap seniman untuk menguasai panggungnya.', 'type' => 'textarea', 'label' => 'Pillar 3 Desc', 'group' => 'Pillars'],

            // --- GALLERY HEADER ---
            ['page' => 'gallery', 'key' => 'gallery_title_1', 'value' => 'Grand', 'type' => 'text', 'label' => 'Gallery Title 1', 'group' => 'Header'],
            ['page' => 'gallery', 'key' => 'gallery_title_2', 'value' => 'Gallery', 'type' => 'text', 'label' => 'Gallery Title 2', 'group' => 'Header'],

            // --- TEAM PAGE ---
            ['page' => 'team', 'key' => 'team_hero_image', 'value' => '/images/IMG_6046 (1).JPG', 'type' => 'image', 'label' => 'Hero Background Image', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_badge_text', 'value' => 'UKM KESENIAN ETALASE', 'type' => 'text', 'label' => 'Header Badge Text', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line1', 'value' => 'PANDAWA', 'type' => 'text', 'label' => 'Title Line 1', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line2', 'value' => 'LIMO', 'type' => 'text', 'label' => 'Title Line 2', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line3', 'value' => 'LEGACY OF', 'type' => 'text', 'label' => 'Title Line 3', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line4', 'value' => 'MEMBAWA', 'type' => 'text', 'label' => 'Title Line 4 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line5', 'value' => 'KEMBALI', 'type' => 'text', 'label' => 'Title Line 5 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line6', 'value' => 'BARA API', 'type' => 'text', 'label' => 'Title Line 6 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_title_line7', 'value' => 'EXPRESSION', 'type' => 'text', 'label' => 'Title Line 7 (Red)', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_vision_quote', 'value' => '"Kami bekerja dalam bayang-bayang untuk memastikan cahaya panggung mendarat dengan sempurna."', 'type' => 'textarea', 'label' => 'Vision Quote', 'group' => 'Vision Section'],
        ];

        foreach ($settings as $setting) {
            PageSetting::firstOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }

        // --- SEED TEAM ---
        $team = [
           ['name' => 'DIKI FERDIANTO', 'role' => 'Chairman / Creative Director', 'image_url' => '/images/hero_etalase_dramatic_1770456936209.png', 'order' => 1],
           ['name' => 'SARI PUSPITA', 'role' => 'Vice Chairman', 'image_url' => '/images/gallery_dance_performance_1770456952698.png', 'order' => 2],
           ['name' => 'ADITYA PUTRA', 'role' => 'Head of Production', 'image_url' => '/images/IMG_6046 (1).JPG', 'order' => 3],
           ['name' => 'MAWAR JINGGA', 'role' => 'Artistic Lead', 'image_url' => '/images/Salinan Ave 4 cymk.jpg', 'order' => 4],
        ];
        foreach ($team as $member) {
            TeamMember::updateOrCreate(['name' => $member['name']], $member);
        }

        // --- SEED ARTICLES ---
        $articles = [
            ['title' => 'Simfoni Raga Jember', 'slug' => 'simfoni-raga-jember', 'category' => 'THEATER', 'image_url' => '/images/division_theater_bg_1770456969474.png', 'excerpt' => 'Membahas dekonstruksi gerak dalam pertunjukan teater modern yang baru saja dipentaskan.'],
            ['title' => 'Estetika Karnaval', 'slug' => 'estetika-karnaval', 'category' => 'PERFORMANCE', 'image_url' => '/images/Salinan Ave 4 cymk.jpg', 'excerpt' => 'Menyelami kaitan antara tradisi kostum Jember dengan tren haute couture masa kini.'],
            ['title' => 'Nadi Seni Budaya', 'slug' => 'nadi-seni-budaya', 'category' => 'EDITORIAL', 'image_url' => '/images/IMG_6046 (1).JPG', 'excerpt' => 'Sebuah opini kritis tentang keberlanjutan regenerasi seniman muda di universitas.'],
        ];
        foreach ($articles as $article) {
            Article::updateOrCreate(['slug' => $article['slug']], $article);
        }

        // --- SEED GALLERY ---
        $gallery = [
            ['title' => 'Dramatic Finale', 'category' => 'PERFORMANCE', 'image_url' => '/images/Salinan Ave 4 cymk.jpg'],
            ['title' => 'The Royal Mask', 'category' => 'COSTUME', 'image_url' => '/images/artistic_mask.png'],
            ['title' => 'Ritual of Rhythms', 'category' => 'DANCE', 'image_url' => '/images/gallery_dance_performance_1770456952698.png'],
            ['title' => 'Golden Spectacle', 'category' => 'PERFORMANCE', 'image_url' => '/images/hero_etalase_dramatic_1770456936209.png'],
            ['title' => 'The Avant Garde', 'category' => 'COSTUME', 'image_url' => '/images/IMG_6046 (1).JPG'],
            ['title' => 'Theater of Shadows', 'category' => 'THEATER', 'image_url' => '/images/division_theater_bg_1770456969474.png'],
        ];
        foreach ($gallery as $item) {
            GalleryItem::updateOrCreate(['title' => $item['title']], $item);
        }
    }
}
