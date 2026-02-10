<?php

namespace App\Http\Controllers;

use App\Models\GalleryItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryItemController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'required|image|max:10240',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        GalleryItem::create($validated);

        return back()->with('success', 'Item added to gallery.');
    }

    public function update(Request $request, GalleryItem $galleryItem)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('image')) {
            if ($galleryItem->image_url && str_contains($galleryItem->image_url, '/storage/gallery/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $galleryItem->image_url));
            }
            $path = $request->file('image')->store('gallery', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        $galleryItem->update($validated);

        return back()->with('success', 'Gallery item updated.');
    }

    public function destroy(GalleryItem $galleryItem)
    {
        if ($galleryItem->image_url && str_contains($galleryItem->image_url, '/storage/gallery/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $galleryItem->image_url));
        }

        $galleryItem->delete();

        session()->flash('success', 'Item removed from gallery.');
        return Inertia::location(route('admin.cms'));
    }
}
