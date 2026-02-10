<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

/**
 * Public Routes
 */
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/articles', [HomeController::class, 'articles'])->name('articles');
Route::get('/articles/{slug}', [HomeController::class, 'articleDetail'])->name('articles.show');
Route::get('/team', [HomeController::class, 'team'])->name('team');
Route::get('/gallery', [HomeController::class, 'gallery'])->name('gallery');

/**
 * Authentication Routes
 */
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

/**
 * Authenticated Routes
 */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return redirect()->route('admin.cms');
    })->name('dashboard');

    // Admin CMS Routes
    Route::get('/admin/cms', [App\Http\Controllers\PageSettingsController::class, 'index'])->name('admin.cms');
    Route::post('/admin/cms/update', [App\Http\Controllers\PageSettingsController::class, 'updateSingle'])->name('admin.cms.update');

    // Article Management
    Route::post('/admin/articles', [App\Http\Controllers\ArticleController::class, 'store'])->name('admin.articles.store');
    Route::post('/admin/articles/{article}', [App\Http\Controllers\ArticleController::class, 'update'])->name('admin.articles.update');
    Route::delete('/admin/articles/{article}', [App\Http\Controllers\ArticleController::class, 'destroy'])->name('admin.articles.destroy');

    // Gallery Management
    Route::post('/admin/gallery', [App\Http\Controllers\GalleryItemController::class, 'store'])->name('admin.gallery.store');
    Route::post('/admin/gallery/{galleryItem}', [App\Http\Controllers\GalleryItemController::class, 'update'])->name('admin.gallery.update');
    Route::delete('/admin/gallery/{galleryItem}', [App\Http\Controllers\GalleryItemController::class, 'destroy'])->name('admin.gallery.destroy');

    // Team Management
    Route::post('/admin/team', [App\Http\Controllers\TeamMemberController::class, 'store'])->name('admin.team.store');
    Route::post('/admin/team/{teamMember}', [App\Http\Controllers\TeamMemberController::class, 'update'])->name('admin.team.update');
    Route::delete('/admin/team/{teamMember}', [App\Http\Controllers\TeamMemberController::class, 'destroy'])->name('admin.team.destroy');

    // Division Management
    Route::post('/admin/divisions', [App\Http\Controllers\DivisionController::class, 'store'])->name('admin.divisions.store');
    Route::post('/admin/divisions/{division}', [App\Http\Controllers\DivisionController::class, 'update'])->name('admin.divisions.update');
    Route::delete('/admin/divisions/{division}', [App\Http\Controllers\DivisionController::class, 'destroy'])->name('admin.divisions.destroy');
});
