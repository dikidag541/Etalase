<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Artwork;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed divisions
        $this->call([
            DivisionSeeder::class,
            PageSettingsSeeder::class,
        ]);

        // Create 12 artworks
        Artwork::factory(12)->create();
    }
}
