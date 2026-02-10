<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Division;
use App\Models\GalleryItem;
use App\Models\TeamMember;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CrudCheckTest extends TestCase
{
    use DatabaseTransactions;
    use WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Run migrations for in-memory SQLite database
        $this->artisan('migrate');
    }

    /**
     * Test Division CRUD
     */
    public function test_division_crud_flows_correctly()
    {
        Storage::fake('public');

        // 1. Create
        $image = UploadedFile::fake()->image('division.jpg');
        $data = [
            'short_name' => 'IT',
            'title' => 'Information Technology',
            'order' => 1,
            'image' => $image,
        ];

        $response = $this->post(route('admin.divisions.store'), $data);
        $response->assertSessionHasNoErrors();
        $response->assertRedirect();
        
        $this->assertDatabaseHas('divisions', [
            'short_name' => 'IT',
            'title' => 'Information Technology',
        ]);

        $division = Division::where('short_name', 'IT')->first();
        $this->assertNotNull($division->image_path);
        Storage::disk('public')->assertExists(str_replace('/storage/', '', $division->image_path));

        // 2. Update
        $newImage = UploadedFile::fake()->image('division_v2.jpg');
        $updateData = [
            'short_name' => 'Tech',
            'title' => 'Technology Dept',
            'order' => 2,
            'image' => $newImage,
        ];

        $response = $this->post(route('admin.divisions.update', $division), $updateData);
        $response->assertSessionHasNoErrors();
        
        $this->assertDatabaseHas('divisions', [
            'id' => $division->id,
            'short_name' => 'Tech',
            'title' => 'Technology Dept',
        ]);
        
        $division->refresh();
        Storage::disk('public')->assertExists(str_replace('/storage/', '', $division->image_path));

        // 3. Delete
        $response = $this->delete(route('admin.divisions.destroy', $division));
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseMissing('divisions', ['id' => $division->id]);
    }

    /**
     * Test TeamMember CRUD
     */
    public function test_team_member_crud_flows_correctly()
    {
        Storage::fake('public');

        // 1. Create
        $image = UploadedFile::fake()->image('avatar.jpg');
        $data = [
            'name' => 'John Doe',
            'role' => 'Developer',
            'order' => 1,
            'image' => $image,
        ];

        $response = $this->post(route('admin.team.store'), $data);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('team_members', [
            'name' => 'John Doe',
            'role' => 'Developer',
        ]);

        $member = TeamMember::where('name', 'John Doe')->first();
        $this->assertNotNull($member->image_url);

        // 2. Update
        $updateData = [
            'name' => 'Jane Doe',
            'role' => 'Lead Developer',
            'order' => 2,
            // Not updating image this time to test retaining old image is allowed if nullable (controller logic check)
            // But wait, validation says 'image' is nullable on update.
        ];

        $response = $this->post(route('admin.team.update', $member), $updateData);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('team_members', [
            'id' => $member->id,
            'name' => 'Jane Doe',
            'role' => 'Lead Developer',
        ]);

        // 3. Delete
        $response = $this->delete(route('admin.team.destroy', $member));
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseMissing('team_members', ['id' => $member->id]);
    }

    /**
     * Test Article CRUD
     */
    public function test_article_crud_flows_correctly()
    {
        Storage::fake('public');

        // 1. Create
        $image = UploadedFile::fake()->image('news.jpg');
        $data = [
            'title' => 'Breaking News',
            'category' => 'General',
            'excerpt' => 'This is an excerpt.',
            'content' => 'Full content here.',
            'author' => 'Admin',
            'image' => $image,
        ];

        $response = $this->post(route('admin.articles.store'), $data);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('articles', [
            'title' => 'Breaking News',
            'slug' => 'breaking-news', // Check slug generation
        ]);

        $article = Article::where('title', 'Breaking News')->first();

        // 2. Update
        $updateData = [
            'title' => 'Updated News',
            'category' => 'Tech',
            'excerpt' => 'Updated excerpt.',
            'content' => 'Updated content.',
            'author' => 'Editor',
            // No image update
        ];

        $response = $this->post(route('admin.articles.update', $article), $updateData);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('articles', [
            'id' => $article->id,
            'title' => 'Updated News',
            'slug' => 'updated-news', // Check slug update
        ]);

        // 3. Delete
        $response = $this->delete(route('admin.articles.destroy', $article));
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseMissing('articles', ['id' => $article->id]);
    }

    /**
     * Test GalleryItem CRUD
     */
    public function test_gallery_item_crud_flows_correctly()
    {
        Storage::fake('public');

        // 1. Create
        $image = UploadedFile::fake()->image('photo.jpg');
        $data = [
            'title' => 'Sunset',
            'category' => 'Nature',
            'image' => $image,
        ];

        $response = $this->post(route('admin.gallery.store'), $data);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('gallery_items', [
            'title' => 'Sunset',
            'category' => 'Nature',
        ]);

        $item = GalleryItem::where('title', 'Sunset')->first();

        // 2. Update
        $updateData = [
            'title' => 'Sunrise',
            'category' => 'Landscape',
        ];

        $response = $this->post(route('admin.gallery.update', $item), $updateData);
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('gallery_items', [
            'id' => $item->id,
            'title' => 'Sunrise',
            'category' => 'Landscape',
        ]);

        // 3. Delete
        $response = $this->delete(route('admin.gallery.destroy', $item));
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseMissing('gallery_items', ['id' => $item->id]);
    }
}
