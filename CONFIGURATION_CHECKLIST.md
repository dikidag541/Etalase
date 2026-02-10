# ✅ Configuration Checklist

## Pre-Setup Requirements
- [ ] PHP 8.2+ installed
- [ ] Node.js 18+ installed
- [ ] Composer installed
- [ ] MySQL 8.0+ running

## Installation Steps

### 1. Dependencies Installation
- [ ] Run `composer install`
- [ ] Run `npm install`
- [ ] Verify all packages installed without errors

### 2. Environment Configuration
- [ ] Copy `.env.example` to `.env`
- [ ] Update `APP_NAME=Etalase` in `.env`
- [ ] Update `DB_DATABASE=etalase` in `.env`
- [ ] Update `DB_USERNAME` and `DB_PASSWORD` in `.env`
- [ ] Set `APP_KEY` by running `php artisan key:generate`

### 3. Database Setup
- [ ] Create MySQL database: `CREATE DATABASE etalase;`
- [ ] Run migrations: `php artisan migrate`
- [ ] (Optional) Run seeders: `php artisan db:seed`

### 4. Vite Configuration
- [ ] Verify `vite.config.js` has correct paths
- [ ] Check `@` alias points to `resources/js`
- [ ] Confirm Tailwind plugin is installed

### 5. Tailwind CSS
- [ ] Verify `tailwind.config.js` content paths
- [ ] Check `resources/css/app.css` has Tailwind directives
- [ ] Confirm `postcss.config.js` includes Tailwind

## Development Server Setup

### Terminal 1 - Backend
```bash
php artisan serve
# ✅ Should output: Laravel development server started...
# ✅ Access at: http://localhost:8000
```

### Terminal 2 - Frontend
```bash
npm run dev
# ✅ Should output: VITE v6.x.x ready in Xs
# ✅ Access at: http://localhost:5173
```

## Feature Verification

### Core Features to Test
- [ ] Home page loads at `/`
- [ ] Navigation bar displays correctly
- [ ] Dashboard route is protected
- [ ] Responsive design works on mobile
- [ ] Tailwind CSS styles are applied

### API Endpoints to Test
```bash
# Test health check
curl http://localhost:8000/api/health

# Get artworks
curl http://localhost:8000/api/artworks

# Get single artwork
curl http://localhost:8000/api/artworks/1
```

### Components Verification
- [ ] Button component with variants working
- [ ] Card component rendering correctly
- [ ] Form inputs displaying properly
- [ ] Alert notifications displaying
- [ ] Icons from Heroicons loading

### Hot Reload Verification
- [ ] Edit a component file
- [ ] Browser automatically refreshes
- [ ] Changes appear without page reload

## Production Readiness

### Before Deploying
- [ ] Run `npm run build` (verify build succeeds)
- [ ] Check `public/build/manifest.json` exists
- [ ] Test with `npm run preview`
- [ ] Run `php artisan config:cache`
- [ ] Set `APP_DEBUG=false` in production `.env`
- [ ] Update `APP_URL` to production domain
- [ ] Set up HTTPS/SSL certificate

### Build Artifacts
- [ ] `public/build/` directory created
- [ ] All assets properly bundled
- [ ] No console errors in production build
- [ ] CSS properly minified
- [ ] JavaScript properly minified

## Common Issues Resolution

### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json composer.lock
composer install
npm install
```

### Issue: Database connection error
- [ ] Verify MySQL is running
- [ ] Check `.env` credentials
- [ ] Test with: `php artisan tinker` then `DB::connection()->getPdo()`

### Issue: Hot reload not working
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: Tailwind CSS not applying
- [ ] Verify `tailwind.config.js` content paths
- [ ] Check `resources/css/app.css` has directives
- [ ] Rebuild: `npm run dev` (restart)

### Issue: Inertia components not loading
- [ ] Check page file exists in `resources/js/pages/`
- [ ] Verify component name matches route name
- [ ] Check browser console for errors

## Security Checklist

Before going to production:
- [ ] Generate new `APP_KEY`: `php artisan key:generate`
- [ ] Set `APP_ENV=production`
- [ ] Set `APP_DEBUG=false`
- [ ] Configure proper database credentials
- [ ] Set up CSRF protection
- [ ] Configure CORS properly
- [ ] Set up proper file permissions
- [ ] Configure environment variables securely
- [ ] Set up SSL/TLS certificate
- [ ] Configure error logging

## Performance Optimization

### Frontend Optimization
- [ ] Code splitting configured
- [ ] Lazy loading for routes
- [ ] Image optimization
- [ ] CSS minification
- [ ] JavaScript minification

### Backend Optimization
- [ ] Database indexing
- [ ] Query optimization
- [ ] Caching strategy
- [ ] API rate limiting
- [ ] Compression enabled

## Monitoring & Maintenance

- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure logging
- [ ] Set up monitoring alerts
- [ ] Plan backup strategy
- [ ] Schedule regular updates

---

## Quick Reference Commands

```bash
# Development
php artisan serve                    # Start Laravel server
npm run dev                          # Start Vite dev server

# Database
php artisan migrate                  # Run migrations
php artisan migrate:fresh --seed    # Reset & seed database

# Cache
php artisan cache:clear             # Clear all cache
php artisan config:cache            # Cache configuration

# Testing
php artisan test                     # Run tests

# Build
npm run build                        # Build for production
npm run preview                      # Preview production build

# Debugging
php artisan tinker                   # Open PHP shell
php artisan pail                     # Real-time logs
```

---

## Documentation Links

- [QUICKSTART.md](./QUICKSTART.md) - Get started in 5 minutes
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Full architecture guide
- [Laravel Docs](https://laravel.com/docs) - Laravel documentation
- [React Docs](https://react.dev) - React documentation
- [Inertia Docs](https://inertiajs.com) - Inertia.js guide
- [Tailwind Docs](https://tailwindcss.com) - Tailwind CSS docs

---

## Support Resources

For common issues, refer to:
1. QUICKSTART.md troubleshooting section
2. ARCHITECTURE.md troubleshooting section
3. Official documentation of respective frameworks
4. GitHub issues of projects

---

**✅ Once all items are checked, your project is ready for development!**
