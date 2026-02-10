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
        $divisions = [
            [
                'short_name' => 'DANCE',
                'title' => 'The Movement',
                'image_path' => '/images/dance_performance.png',
                'order' => 1
            ],
            [
                'short_name' => 'THEATER',
                'title' => 'The Narrative',
                'image_path' => '/images/theater_scene.png',
                'order' => 2
            ],
            [
                'short_name' => 'MUSIC',
                'title' => 'The Harmony',
                'image_path' => '/images/hero_carnival.png',
                'order' => 3
            ],
            [
                'short_name' => 'COSTUME',
                'title' => 'The Armor',
                'image_path' => '/images/costume_detail.png',
                'order' => 4
            ],
            [
                'short_name' => 'FILM',
                'title' => 'The Vision',
                'image_path' => '/images/theater_scene.png',
                'order' => 5
            ],
            [
                'short_name' => 'FINE ART',
                'title' => 'The Canvas',
                'image_path' => '/images/costume_detail.png',
                'order' => 6
            ],
        ];

        foreach ($divisions as $division) {
            Division::updateOrCreate(
                ['short_name' => $division['short_name']],
                $division
            );
        }
    }
}
