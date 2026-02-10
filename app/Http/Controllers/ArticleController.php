<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'nullable|string',
            'image' => 'required|image|max:10240',
            'author' => 'required|string|max:255',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('articles', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        $validated['slug'] = Str::slug($validated['title']);

        Article::create($validated);

        return back()->with('success', 'Article published successfully.');
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:10240',
            'author' => 'required|string|max:255',
        ]);

        if ($request->hasFile('image')) {
            if ($article->image_url && str_contains($article->image_url, '/storage/articles/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $article->image_url));
            }
            $path = $request->file('image')->store('articles', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        $validated['slug'] = Str::slug($validated['title']);

        $article->update($validated);

        return back()->with('success', 'Article updated.');
    }

    public function destroy(Article $article)
    {
        if ($article->image_url && str_contains($article->image_url, '/storage/articles/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $article->image_url));
        }

        $article->delete();

        session()->flash('success', 'Article deleted.');
        return Inertia::location(route('admin.cms'));
    }
}
