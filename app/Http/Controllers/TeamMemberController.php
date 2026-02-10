<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'required|image|max:10240',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('team', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        TeamMember::create($validated);

        return back()->with('success', 'Team member added successfully.');
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists and is in storage
            if ($teamMember->image_url && str_contains($teamMember->image_url, '/storage/team/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $teamMember->image_url));
            }
            $path = $request->file('image')->store('team', 'public');
            $validated['image_url'] = '/storage/' . $path;
        }

        $teamMember->update($validated);

        return back()->with('success', 'Team member updated successfully.');
    }

    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->image_url && str_contains($teamMember->image_url, '/storage/team/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $teamMember->image_url));
        }

        $teamMember->delete();

        session()->flash('success', 'Team member removed.');
        return Inertia::location(route('admin.cms'));
    }
}
