<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Artwork;

/**
 * Health Check
 */
Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});

/**
 * Public API Routes
 */
Route::get('/artworks', function () {
    return response()->json([
        'data' => Artwork::all(),
    ]);
});

Route::get('/artworks/{id}', function ($id) {
    $artwork = Artwork::find($id);

    if (!$artwork) {
        return response()->json(['message' => 'Not found'], 404);
    }

    return response()->json(['data' => $artwork]);
});

/**
 * Protected API Routes (require authentication)
 */
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return response()->json(['data' => $request->user()]);
    });
});
