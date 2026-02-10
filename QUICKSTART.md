# 🚀 Quick Start Guide - Etalase

## Installation & Setup (< 5 minutes)

### Step 1: Install Dependencies

```bash
# Install PHP packages
composer install

# Install Node packages
npm install
```

### Step 2: Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Generate app key
php artisan key:generate

# Update database connection in .env
# DB_DATABASE=etalase
# DB_USERNAME=root
# DB_PASSWORD=
```

### Step 3: Database Setup

```bash
# Create database (if not exists)
mysql -u root -p -e "CREATE DATABASE etalase;"

# Run migrations
php artisan migrate

# (Optional) Seed with sample data
php artisan db:seed
```

### Step 4: Start Development

**Terminal 1 - Backend:**
```bash
php artisan serve
# Server running at http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Vite dev server at http://localhost:5173
```

**Visit:** http://localhost:8000 ✨

---

## Project Structure Quick Reference

```
📁 Project Root
├── 📁 app/
│   ├── Models/              → Database models
│   ├── Http/Controllers/    → API controllers
│   └── Providers/           → Service configuration
├── 📁 resources/js/
│   ├── pages/               → Page components (auto-routed)
│   ├── Layouts/             → Layout components
│   ├── components/          → Reusable components
│   └── hooks/               → Custom React hooks
├── 📁 database/
│   ├── migrations/          → Database schema
│   ├── factories/           → Model factories
│   └── seeders/             → Sample data
├── 📁 routes/
│   ├── web.php              → Web routes (Inertia)
│   └── api.php              → API endpoints
└── 📄 vite.config.js        → Build configuration
```

---

## Common Tasks

### Create a New Page

```bash
# Create page component
touch resources/js/pages/MyPage.jsx
```

```jsx
import MainLayout from '@/Layouts/MainLayout'

export default function MyPage() {
  return (
    <MainLayout>
      <h1>My Page</h1>
    </MainLayout>
  )
}
```

Add route in `routes/web.php`:
```php
Route::get('/my-page', fn() => Inertia::render('MyPage'));
```

---

### Create a Database Model

```bash
php artisan make:model ModelName -m
```

Then create your migration in `database/migrations/`.

---

### Create an API Controller

```bash
php artisan make:controller NameController
```

Add routes in `routes/api.php`:
```php
Route::get('/names', [NameController::class, 'index']);
Route::post('/names', [NameController::class, 'store']);
```

---

### Add a Component

```jsx
// resources/js/components/MyComponent.jsx
export default function MyComponent({ prop1, prop2 }) {
  return <div>{prop1} - {prop2}</div>
}
```

Use it in pages:
```jsx
import MyComponent from '@/components/MyComponent'

export default function Page() {
  return <MyComponent prop1="Hello" prop2="World" />
}
```

---

## Useful Commands

```bash
# Clear all caches
php artisan cache:clear && php artisan config:clear

# Watch logs in real-time
php artisan pail

# Open Tinker shell (PHP REPL)
php artisan tinker

# Generate API documentation
php artisan scribe:generate

# Run tests
php artisan test
```

---

## File You'll Edit Most

1. **`resources/js/pages/`** - Create new pages
2. **`resources/js/components/`** - Create new components
3. **`routes/web.php`** - Define routes
4. **`app/Http/Controllers/`** - Add business logic
5. **`app/Models/`** - Define data models

---

## Tips & Tricks

### 1. Use @inertiaHead for dynamic page titles
```jsx
import { Head } from '@inertiajs/react'

export default function Page() {
  return (
    <>
      <Head title="My Page" />
      <MainLayout>...</MainLayout>
    </>
  )
}
```

### 2. Pass data from controller to page
```php
// Controller
return Inertia::render('Home', [
  'items' => Item::all(),
  'count' => Item::count(),
]);

// Page
export default function Home({ items, count }) {
  return <p>Found {count} items</p>
}
```

### 3. Use Inertia link for navigation
```jsx
import { Link } from '@inertiajs/react'

<Link href="/dashboard">Go to Dashboard</Link>
```

### 4. Access authenticated user
```jsx
import { usePage } from '@inertiajs/react'

export default function Component() {
  const { auth } = usePage().props
  return <p>Welcome, {auth.user?.name}</p>
}
```

---

## Troubleshooting

### Hot reload not working?
```bash
rm -rf node_modules/.vite
npm run dev
```

### Database connection error?
- Check `.env` file
- Verify MySQL is running
- Ensure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Module not found errors?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port already in use?
```bash
# Change port in .env
VITE_PORT=3000
```

---

## Next Steps

1. ✅ Check [ARCHITECTURE.md](./ARCHITECTURE.md) for full documentation
2. 📚 Read the [Laravel Docs](https://laravel.com/docs)
3. ⚛️ Learn [React 19](https://react.dev)
4. 🎨 Style with [Tailwind CSS](https://tailwindcss.com)
5. 🧩 Use [Headless UI](https://headlessui.com) components

---

**Happy Building! 🎨✨**
