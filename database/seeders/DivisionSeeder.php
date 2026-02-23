<?php

namespace Database\Seeders;

use App\Models\Division;
use Illuminate\Database\Seeder;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing divisions
        Division::truncate();

        $divisions = [
            [
                'short_name' => 'TARI',
                'title' => 'Traditional & Modern',
                'image_path' => '/images/dance_performance.png',
                'order' => 1
            ],
            [
                'short_name' => 'MUSIK',
                'title' => 'Harmonious Rhythm',
                'image_path' => '/images/hero_carnival.png',
                'order' => 2
            ],
            [
                'short_name' => 'FOTOGRAFI',
                'title' => 'Visual Archive',
                'image_path' => '/images/costume_detail.png',
                'order' => 3
            ],
            [
                'short_name' => 'THEATER',
                'title' => 'Dramatic Narrative',
                'image_path' => '/images/theater_scene.png',
                'order' => 4
            ],
            [
                'short_name' => 'PSM',
                'title' => 'Padusan Suara Mahasiswa',
                'image_path' => '/images/hero_carnival.png',
                'order' => 5
            ],
        ];

        foreach ($divisions as $division) {
            Division::create($division);
        }
    }
}
