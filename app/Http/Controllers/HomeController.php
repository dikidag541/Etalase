<?php

namespace App\Http\Controllers;

use App\Models\PageSetting;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $cms = PageSetting::where('page', 'home')
            ->get()
            ->pluck('value', 'key');

        $divisions = \App\Models\Division::orderBy('order')->get();

        return Inertia::render('Home', [
            'cms' => $cms,
            'divisions' => $divisions
        ]);
    }

    public function about()
    {
        $cms = PageSetting::where('page', 'about')
            ->get()
            ->pluck('value', 'key');

        $divisions = \App\Models\Division::orderBy('order')->get();

        return Inertia::render('About', [
            'cms' => $cms,
            'divisions' => $divisions
        ]);
    }

    public function articles()
    {
        $articles = \App\Models\Article::latest()->get();

        return Inertia::render('Articles', [
            'articles' => $articles
        ]);
    }

    public function articleDetail($slug)
    {
        $article = \App\Models\Article::where('slug', $slug)->firstOrFail();

        return Inertia::render('ArticleDetail', [
            'article' => $article
        ]);
    }

    public function team()
    {
        $cms = PageSetting::where('page', 'team')
            ->get()
            ->pluck('value', 'key');

        $members = \App\Models\TeamMember::orderBy('order')->get();

        return Inertia::render('Team', [
            'cms' => $cms,
            'members' => $members
        ]);
    }

    public function gallery()
    {
        $cms = PageSetting::where('page', 'gallery')
            ->get()
            ->pluck('value', 'key');

        $initialItems = \App\Models\GalleryItem::orderBy('created_at', 'desc')->get();

        return Inertia::render('Gallery', [
            'cms' => $cms,
            'initialItems' => $initialItems
        ]);
    }
}
