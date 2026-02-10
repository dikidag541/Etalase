# 🎨 Etalase - Art & Design Marketplace

A modern full-stack application for showcasing and trading artworks. Built with Laravel 11, React 19, and Inertia.js.

## 🏗️ Architecture

### Backend Stack
- **Framework**: Laravel 11 (PHP 8.2+)
- **Database**: MySQL with Eloquent ORM
- **API Bridge**: Inertia.js
- **Authentication**: Laravel Auth with Sanctum

### Frontend Stack
- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI + Heroicons
- **Routing**: Inertia.js (server-driven routing)

## 📁 Project Structure

```
etalase/
├── app/
│   ├── Http/
│   │   ├── Controllers/     # API & Page Controllers
│   │   └── Middleware/      # Custom Middleware
│   ├── Models/              # Eloquent Models
│   │   ├── User.php
│   │   └── Artwork.php
│   └── Providers/           # Service Providers
├── database/
│   ├── migrations/          # Database Migrations
│   ├── factories/           # Model Factories
│   └── seeders/             # Database Seeders
├── resources/
│   ├── js/
│   │   ├── pages/           # Inertia Pages (auto-routed)
│   │   ├── Layouts/         # Layout Components
│   │   ├── components/      # Reusable Components
│   │   │   └── UI/          # UI Component Library
│   │   ├── lib/             # Utility Functions
│   │   ├── app.jsx          # App Entry Point
│   │   └── bootstrap.js     # Bootstrap Configuration
│   ├── css/
│   │   └── app.css          # Tailwind Directives
│   └── views/
│       └── app.blade.php    # Blade Template
├── routes/
│   ├── web.php              # Web Routes (Inertia)
│   ├── api.php              # API Routes
│   └── console.php          # Artisan Commands
├── tests/                   # Test Suite
├── vite.config.js           # Vite Configuration
├── tailwind.config.js       # Tailwind Configuration
├── postcss.config.js        # PostCSS Configuration
└── composer.json            # PHP Dependencies
```

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+
- Node.js 18+
- Composer
- MySQL 8.0+

### Installation

1. **Clone and Install Dependencies**
```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install
```

2. **Environment Setup**
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Create database
mysql -u root -p -e "CREATE DATABASE etalase;"

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed
```

3. **Start Development Server**
```bash
# Terminal 1: Laravel Server
php artisan serve

# Terminal 2: Vite Dev Server
npm run dev
```

Visit `http://localhost:8000`

## 🛠️ Development Commands

### Laravel Commands
```bash
# Create a new model with migration
php artisan make:model ModelName -m

# Create a controller
php artisan make:controller ControllerName

# Run migrations
php artisan migrate

# Run seeders
php artisan db:seed

# Clear cache
php artisan cache:clear

# Tinker shell
php artisan tinker
```

### Frontend Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📦 Key Dependencies

### Backend
- `inertiajs/inertia-laravel` - Server adapter
- `laravel/framework:^11.0` - Framework
- `laravel/tinker:^2.10` - REPL

### Frontend
- `@inertiajs/react:^2.3` - React adapter
- `react:^19.2` - UI framework
- `@tailwindcss/postcss:^4.1` - Styling engine
- `@headlessui/react:^2.2` - Headless components
- `heroicons:^2.2` - Icon library
- `axios:^1.13` - HTTP client

## 🎯 Core Concepts

### Pages & Routing
- Pages are stored in `resources/js/pages/`
- Named with PascalCase matching route names
- Automatically converted to routes via Laravel's route helper
- Example: `Home.jsx` → Route: `home`

### Layouts
- Layouts wrap page content for consistent structure
- Available layouts:
  - `MainLayout` - Public pages
  - `AuthLayout` - Authentication pages
  - `DashboardLayout` - Protected pages

### Components
- Located in `resources/js/components/`
- UI components in `components/UI/` (reusable, standalone)
- Feature components in `components/` (specific functionality)

### State Management
- Use React hooks (useState, useContext) for local state
- Use Inertia's props for server-side state
- Leverage `usePage()` hook for shared data

## 🔐 Authentication Flow

1. User submits login form
2. Laravel validates credentials
3. Session is created
4. Inertia redirects to dashboard
5. `auth.user` is available in all pages via `usePage().props`

## 📝 API Structure

```
/api/health          - Health check
/api/artworks        - List all artworks
/api/artworks/{id}   - Get specific artwork
/api/user           - Get authenticated user (protected)
```

## 🎨 Styling Guidelines

### Color Palette
- Primary: Indigo-600 (`#0284c7`)
- Secondary: Gray-100 to Gray-900
- Success: Green
- Warning: Yellow
- Error: Red

### Spacing
- Use Tailwind's spacing scale (4px increments)
- Common: `px-4 py-2`, `px-6 py-3`, `px-8 py-4`

### Typography
- Font: Figtree (system-ui fallback)
- Headlines: Bold
- Body: Regular
- Small: 14px (text-sm)

## 🧪 Testing

```bash
# Run PHPUnit tests
php artisan test

# Run with coverage
php artisan test --coverage
```

## 📚 Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Headless UI](https://headlessui.com)
- [Heroicons](https://heroicons.com)

## 🐛 Troubleshooting

### Hot Reload Not Working
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

### Database Issues
```bash
# Reset database
php artisan migrate:refresh

# Seed fresh data
php artisan migrate:fresh --seed
```

### Cache Issues
```bash
# Clear all cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
```

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

---

**Happy Coding! 🎨**
