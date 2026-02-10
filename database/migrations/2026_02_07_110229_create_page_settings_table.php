<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_settings', function (Blueprint $table) {
            $table->id();
            $table->string('page'); // 'home', 'about', etc.
            $table->string('key');  // 'hero_title', 'mission_text'
            $table->text('value')->nullable();
            $table->string('type')->default('text'); // 'text', 'textarea', 'image'
            $table->string('label'); // 'Hero Title'
            $table->string('group')->nullable(); // 'Hero', 'Mission'
            $table->timestamps();

            $table->unique(['page', 'key']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_settings');
    }
};
