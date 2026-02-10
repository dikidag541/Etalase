<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'slug', 'category', 'author', 'excerpt', 'content', 'image_url', 'published_at'];
}
