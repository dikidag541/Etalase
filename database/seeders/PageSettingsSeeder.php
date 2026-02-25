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
            ['page' => 'home', 'key' => 'hero_banner_text', 'value' => 'UKM Kesenian Etalase • 2026', 'type' => 'text', 'label' => 'Hero Upper Banner', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_1', 'value' => 'UKMK', 'type' => 'text', 'label' => 'Hero Title Top', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_title_2', 'value' => 'ETALASE', 'type' => 'text', 'label' => 'Hero Title Bottom (Gold)', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'hero_subtitle', 'value' => 'Sebuah wahana transformasi eksplorasi estetika maksimalis dalam kedaulatan seni.', 'type' => 'textarea', 'label' => 'Hero Subtitle', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_year', 'value' => '2026', 'type' => 'text', 'label' => 'Side Badge Year', 'group' => 'Hero Section'],
            ['page' => 'home', 'key' => 'side_badge_text', 'value' => 'SOVEREIGN SOVEREIGN SOVEREIGN', 'type' => 'text', 'label' => 'Side Badge Text', 'group' => 'Hero Section'],
            
            ['page' => 'home', 'key' => 'parade_badge', 'value' => 'Dynamic Parade', 'type' => 'text', 'label' => 'Parade Badge', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'manifesto_title_1', 'value' => 'The Grand', 'type' => 'text', 'label' => 'Manifesto Title Line 1', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'manifesto_title_2', 'value' => 'Etalase', 'type' => 'text', 'label' => 'Manifesto Title Line 2 (Gold)', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'manifesto_desc', 'value' => 'Setiap langkah adalah narasi, setiap kostum adalah prasasti. Kita tidak hanya melintas, kita meninggalkan jejak rupa yang abadi.', 'type' => 'textarea', 'label' => 'Manifesto Description', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_stat_1_val', 'value' => '12+', 'type' => 'text', 'label' => 'Stat 1 Value', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_stat_1_label', 'value' => 'Fase', 'type' => 'text', 'label' => 'Stat 1 Label', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_stat_2_val', 'value' => '150+', 'type' => 'text', 'label' => 'Stat 2 Value', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_stat_2_label', 'value' => 'Kolektif', 'type' => 'text', 'label' => 'Stat 2 Label', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_image_1', 'value' => '/images/Salinan Ave 4 cymk.webp', 'type' => 'image', 'label' => 'Parade Image 1', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_image_2', 'value' => '/images/IMG_6046.JPG', 'type' => 'image', 'label' => 'Parade Image 2', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_image_3', 'value' => '/images/Salinan Ave 4 cymk.webp', 'type' => 'image', 'label' => 'Parade Image 3', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'parade_image_4', 'value' => '/images/IMG_6046.JPG', 'type' => 'image', 'label' => 'Parade Image 4', 'group' => 'Parade Section'],
            ['page' => 'home', 'key' => 'manifesto_scroll_text', 'value' => 'MANIFESTO MANIFESTO MANIFESTO', 'type' => 'text', 'label' => 'Manifesto Scrolling Text', 'group' => 'Parade Section'],

            ['page' => 'home', 'key' => 'masterpiece_image', 'value' => '/images/hero_carnival.png', 'type' => 'image', 'label' => 'Masterpiece Background', 'group' => 'Masterpiece Section'],
            ['page' => 'home', 'key' => 'masterpiece_quote', 'value' => 'Setiap helai kain adalah doa, setiap gerak adalah revolusi rupa raga.', 'type' => 'textarea', 'label' => 'Masterpiece Quote', 'group' => 'Masterpiece Section'],

            ['page' => 'home', 'key' => 'faset_badge', 'value' => 'Faset Kesenian', 'type' => 'text', 'label' => 'Faset Badge', 'group' => 'Faset Section'],
            ['page' => 'home', 'key' => 'faset_title', 'value' => 'Diverse Expression', 'type' => 'text', 'label' => 'Faset Title', 'group' => 'Faset Section'],
            ['page' => 'home', 'key' => 'faset_scroll_text', 'value' => 'FASET', 'type' => 'text', 'label' => 'Faset Background Text', 'group' => 'Faset Section'],
            
            // --- ABOUT PAGE ---
            ['page' => 'about', 'key' => 'about_hero_image', 'value' => '/images/Salinan Ave 4 cymk.webp', 'type' => 'image', 'label' => 'About Hero Background', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'concept_badge', 'value' => 'CONCEPT', 'type' => 'text', 'label' => 'Concept Badge', 'group' => 'Hero Section'],
            ['page' => 'about', 'key' => 'concept_title', 'value' => 'The Sovereign Manifesto', 'type' => 'text', 'label' => 'Concept Page Subtitle', 'group' => 'Hero Section'],
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
     
            // --- GALLERY PAGE ---
            ['page' => 'gallery', 'key' => 'gallery_hero_image', 'value' => '/images/assets/statues/statue_bust.png', 'type' => 'image', 'label' => 'Gallery Hero Image (Statue)', 'group' => 'Hero Section'],
            ['page' => 'gallery', 'key' => 'gallery_hero_headline', 'value' => 'Museum', 'type' => 'text', 'label' => 'Gallery Hero Headline', 'group' => 'Hero Section'],
            ['page' => 'gallery', 'key' => 'gallery_hero_highlight', 'value' => 'of Ancient Art', 'type' => 'text', 'label' => 'Gallery Hero Highlight', 'group' => 'Hero Section'],
            ['page' => 'gallery', 'key' => 'gallery_history_badge', 'value' => 'CHRONICLES', 'type' => 'text', 'label' => 'History Section Badge', 'group' => 'History Section'],
            ['page' => 'gallery', 'key' => 'gallery_history_title_1', 'value' => 'The Path of', 'type' => 'text', 'label' => 'History Section Title (Part 1)', 'group' => 'History Section'],
            ['page' => 'gallery', 'key' => 'gallery_history_title_2', 'value' => 'Sovereignty', 'type' => 'text', 'label' => 'History Section Title (Part 2 - Gold)', 'group' => 'History Section'],
            ['page' => 'gallery', 'key' => 'gallery_history_desc', 'value' => 'Setiap maha karya memiliki awal. Menelusuri jejak transformasi dari sekadar mimpi menjadi kedaulatan seni yang mutlak.', 'type' => 'textarea', 'label' => 'History Section Description', 'group' => 'History Section'],
            
            ['page' => 'gallery', 'key' => 'gallery_timeline_1_year', 'value' => '2010', 'type' => 'text', 'label' => 'Timeline 1 Year', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_1_title', 'value' => 'The Genesis', 'type' => 'text', 'label' => 'Timeline 1 Title', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_1_desc', 'value' => 'Initial collective of artists seeking sovereignty in expression.', 'type' => 'textarea', 'label' => 'Timeline 1 Description', 'group' => 'Timeline'],
            
            ['page' => 'gallery', 'key' => 'gallery_timeline_2_year', 'value' => '2015', 'type' => 'text', 'label' => 'Timeline 2 Year', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_2_title', 'value' => 'Regency Ascent', 'type' => 'text', 'label' => 'Timeline 2 Title', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_2_desc', 'value' => 'Cultural breakthrough as the leading artistic hub of the region.', 'type' => 'textarea', 'label' => 'Timeline 2 Description', 'group' => 'Timeline'],
            
            ['page' => 'gallery', 'key' => 'gallery_timeline_3_year', 'value' => '2020', 'type' => 'text', 'label' => 'Timeline 3 Year', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_3_title', 'value' => 'Maximalist Shift', 'type' => 'text', 'label' => 'Timeline 3 Title', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_3_desc', 'value' => 'Adopting the Sovereign Maximalist philosophy for all performances.', 'type' => 'textarea', 'label' => 'Timeline 3 Description', 'group' => 'Timeline'],
            
            ['page' => 'gallery', 'key' => 'gallery_timeline_4_year', 'value' => '2024', 'type' => 'text', 'label' => 'Timeline 4 Year', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_4_title', 'value' => 'Digital Monolith', 'type' => 'text', 'label' => 'Timeline 4 Title', 'group' => 'Timeline'],
            ['page' => 'gallery', 'key' => 'gallery_timeline_4_desc', 'value' => 'Transforming the archive into an immersive digital museum experience.', 'type' => 'textarea', 'label' => 'Timeline 4 Description', 'group' => 'Timeline'],

            ['page' => 'gallery', 'key' => 'gallery_archive_badge', 'value' => 'MASTERPIECES', 'type' => 'text', 'label' => 'Archive Section Badge', 'group' => 'Archive Section'],
            ['page' => 'gallery', 'key' => 'gallery_archive_title', 'value' => 'The Archive', 'type' => 'text', 'label' => 'Archive Section Title', 'group' => 'Archive Section'],
     
            // --- ARTICLES PAGE ---
            ['page' => 'articles', 'key' => 'articles_hero_image', 'value' => '/images/hero_carnival.png', 'type' => 'image', 'label' => 'Articles Hero Background', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_badge', 'value' => 'Official Publication • Perspectives', 'type' => 'text', 'label' => 'Articles Header Badge', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_title_1', 'value' => 'Esensi', 'type' => 'text', 'label' => 'Articles Title Line 1', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_title_2', 'value' => 'Kesenian', 'type' => 'text', 'label' => 'Articles Title Line 2 (Gold)', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_bg_text', 'value' => 'EDITORIAL', 'type' => 'text', 'label' => 'Articles Background Text', 'group' => 'Header'],
            ['page' => 'articles', 'key' => 'articles_cta_text', 'value' => 'Read Manifest', 'type' => 'text', 'label' => 'Read Article CTA', 'group' => 'Interaction'],
    
            // --- ARTICLE DETAIL PAGE ---
            ['page' => 'articles', 'key' => 'article_detail_back_text', 'value' => '← Kembali ke Editorial', 'type' => 'text', 'label' => 'Back to Index Text', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_share_text', 'value' => 'Bagikan', 'type' => 'text', 'label' => 'Share Label', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_author_role', 'value' => 'Penulis Konten', 'type' => 'text', 'label' => 'Author Role Text', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_author_desc', 'value' => 'Berkontribusi dalam mendokumentasikan setiap denyut kesenian di Etalase. Sebuah narasi yang dibangun dari kegelisahan dan kreativitas tanpa batas.', 'type' => 'textarea', 'label' => 'Author Bio Placeholder', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_next_label', 'value' => 'Selanjutnya', 'type' => 'text', 'label' => 'Next Article Label', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_next_title', 'value' => 'Membangun Ekosistem Kesenian Mahasiswa', 'type' => 'text', 'label' => 'Next Article Placeholder Title', 'group' => 'Detail UI'],
            ['page' => 'articles', 'key' => 'article_detail_next_cta', 'value' => 'Baca Artikel Ini', 'type' => 'text', 'label' => 'Next Article CTA', 'group' => 'Detail UI'],
            ['page' => 'team', 'key' => 'team_hero_image', 'value' => '/images/costume_detail.png', 'type' => 'image', 'label' => 'Hero Background Image', 'group' => 'Hero Section'],
            ['page' => 'team', 'key' => 'team_badge_text', 'value' => 'UKM KESENIAN ETALASE', 'type' => 'text', 'label' => 'Header Badge Text', 'group' => 'Hero Section'],
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
            [
                'title' => "The Eternal Goddess",
                'category' => "OBSIDIAN",
                'description' => "A monumental obsidian sculpture representing the sovereign power of the artistic spirit.",
                'image_url' => "/images/assets/statues/hero.png"
            ],
            [
                'title' => "Philosopher of Tradition",
                'category' => "MARBLE",
                'description' => "Marble bust with kintsugi-inspired gold veins, symbolizing the beauty of ancestral wisdom.",
                'image_url' => "/images/assets/statues/bust.png"
            ],
            [
                'title' => "Guardian of the Stage",
                'category' => "BRONZE",
                'description' => "Ancient bronze warrior capturing the fierce discipline and heritage of the performing arts.",
                'image_url' => "/images/assets/statues/warrior.png"
            ],
            [
                'title' => "The Sculptor's Hand",
                'category' => "CRAFT",
                'description' => "A meticulous study of form and intention, holding the golden promise of creative mastery.",
                'image_url' => "/images/assets/statues/hand.png"
            ],
            [
                'title' => 'Grand Finale Performance', 
                'category' => 'PERFORMANCE', 
                'description' => 'The peak of artistic expression captured in a single monumental moment.',
                'image_url' => '/images/hero_carnival.png'
            ],
            [
                'title' => 'The Sovereign Mask', 
                'category' => 'COSTUME', 
                'description' => 'A symbol of ritual and identity, crafted with golden precision.',
                'image_url' => '/images/costume_detail.png'
            ],
        ];
        foreach ($gallery as $item) {
            GalleryItem::updateOrCreate(['title' => $item['title']], $item);
        }
    }
}
