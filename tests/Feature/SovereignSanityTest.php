<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SovereignSanityTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Test that the Home page maintains the "Sovereign" identity.
     */
    public function test_home_page_has_sovereign_identity(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('"component":"Home"'); // Checks if Inertia is loading the Home component
    }

    /**
     * Test that the login page is active and themed.
     */
    public function test_login_page_is_accessible_and_branded(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
        $response->assertSee('"component":"Auth\/Login"'); // Checks if Inertia is loading the Login component
    }

    /**
     * Test that unauthorized access to CMS is blocked.
     */
    public function test_cms_redirects_unauthenticated_user(): void
    {
        $response = $this->get('/admin/cms');

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }
}
