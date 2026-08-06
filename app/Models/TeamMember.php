<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = ['name', 'role', 'image_url', 'order', 'facebook_url', 'instagram_url', 'tiktok_url', 'youtube_url'];
}
