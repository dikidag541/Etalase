<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artwork>
 */
class ArtworkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $titles = [
            'Batik Kawung Tradisional',
            'Ukiran Kayu Jepara',
            'Wayang Kulit Klasik',
            'Tembikar Lombok Merah',
            'Kain Tenun Ikat',
            'Patung Batu Vulkanik',
            'Lukisan Tradisional Bali',
            'Keramik Raku Jepang',
        ];

        $artists = [
            'Siti Nur Azizah',
            'Budi Santoso',
            'Dewi Lestari',
            'Hendra Wijaya',
            'Rina Suryanto',
        ];

        return [
            'title' => $this->faker->randomElement($titles),
            'description' => $this->faker->sentence(10),
            'artist' => $this->faker->randomElement($artists),
            'image_url' => 'https://via.placeholder.com/400x300?text=Artwork',
            'price' => $this->faker->numberBetween(500000, 10000000),
            'status' => $this->faker->randomElement(['active', 'sold', 'archived']),
        ];
    }
}
