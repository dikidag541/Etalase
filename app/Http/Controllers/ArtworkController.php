<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ArtworkController extends Controller
{
    /**
     * Get all artworks
     */
    public function index(): JsonResponse
    {
        $artworks = Artwork::paginate(12);

        return response()->json([
            'data' => $artworks->items(),
            'pagination' => [
                'total' => $artworks->total(),
                'per_page' => $artworks->perPage(),
                'current_page' => $artworks->currentPage(),
                'last_page' => $artworks->lastPage(),
            ],
        ]);
    }

    /**
     * Get single artwork
     */
    public function show(Artwork $artwork): JsonResponse
    {
        return response()->json(['data' => $artwork]);
    }

    /**
     * Create new artwork (protected)
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image_url' => 'nullable|url',
            'status' => 'required|in:draft,active,archived',
        ]);

        $artwork = Artwork::create($validated);

        return response()->json(['data' => $artwork], 201);
    }

    /**
     * Update artwork (protected)
     */
    public function update(Request $request, Artwork $artwork): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'category' => 'string',
            'price' => 'numeric|min:0',
            'image_url' => 'nullable|url',
            'status' => 'in:draft,active,archived',
        ]);

        $artwork->update($validated);

        return response()->json(['data' => $artwork]);
    }

    /**
     * Delete artwork (protected)
     */
    public function destroy(Artwork $artwork): JsonResponse
    {
        $artwork->delete();

        return response()->json(['message' => 'Artwork deleted successfully']);
    }
}
