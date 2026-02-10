<?php

namespace App\Http\Controllers;

use App\Models\Division;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DivisionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'short_name' => 'required|string|max:20',
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
            'order' => 'nullable|integer',
        ]);

        $data = $request->only(['short_name', 'title']);
        $data['order'] = $request->input('order') ?? 0;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('divisions', 'public');
            $data['image_path'] = '/storage/' . $path;
        }

        Division::create($data);

        return back()->with('success', 'Division created successfully.');
    }

    public function update(Request $request, Division $division)
    {
        $request->validate([
            'short_name' => 'required|string|max:20',
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
            'order' => 'nullable|integer',
        ]);

        $data = $request->only(['short_name', 'title']);
        $data['order'] = $request->input('order') ?? $division->order;

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($division->image_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $division->image_path));
            }
            $path = $request->file('image')->store('divisions', 'public');
            $data['image_path'] = '/storage/' . $path;
        }

        $division->update($data);

        return back()->with('success', 'Division updated successfully.');
    }

    public function destroy(Division $division)
    {
        if ($division->image_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $division->image_path));
        }
        $division->delete();

        session()->flash('success', 'Division deleted successfully.');
        return Inertia::location(route('admin.cms'));
    }
}
