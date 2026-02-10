<?php

namespace App\Http\Controllers;

use App\Models\PageSetting;
use App\Models\TeamMember;
use App\Models\Article;
use App\Models\GalleryItem;
use App\Models\Division;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PageSettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/CMS', [
            'settings' => PageSetting::all()->groupBy('page'),
            'team' => TeamMember::orderBy('order')->get(),
            'articles' => Article::orderBy('created_at', 'desc')->get(),
            'gallery' => GalleryItem::orderBy('created_at', 'desc')->get(),
            'divisions' => Division::orderBy('order')->get(),
        ]);
    }

    public function update(Request $request)
    {
        // Handle Global Page Settings (Text, Image Paths, etc.)
        if ($request->has('settings')) {
            foreach ($request->settings as $key => $value) {
                // If it's a file, upload it
                if ($request->hasFile("settings.$key")) {
                    $file = $request->file("settings.$key");
                    $path = $file->store('cms', 'public');
                    $value = '/storage/' . $path;
                }

                PageSetting::where('key', $key)->update(['value' => $value]);
            }
        }

        // Handle Team (Simplistic edit for now, could be expanded to CRUD)
        if ($request->has('team')) {
           // Team logic here if needed
        }

        return back()->with('success', 'Content updated successfully.');
    }

    /**
     * Specialized Single Setting Update (for file uploads via AJAX/Inertia)
     */
    public function updateSingle(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:page_settings,id',
            'value' => 'nullable'
        ]);

        $setting = PageSetting::find($request->id);

        if ($request->hasFile('value')) {
            $file = $request->file('value');
            $path = $file->store('cms', 'public');
            $setting->update(['value' => '/storage/' . $path]);
        } else {
            $setting->update(['value' => $request->value]);
        }

        return back()->with('success', 'Setting updated.');
    }
}
