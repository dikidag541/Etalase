<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'UKMK ETALASE') }} — Sovereign Maximalism in Art</title>
    <meta name="description" content="UKMK Etalase — Sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik. Eksplorasi estetika maksimalis dalam kedaulatan seni.">
    <meta name="keywords" content="UKMK Etalase, Kesenian, Sovereign Studio, Art Collective, Jember Fashion Carnaval, Digital Archive">
    <meta property="og:title" content="UKMK ETALASE — Sovereign Maximalism in Art">
    <meta property="og:description" content="Transformasi kesenian tradisional melalui ambisi futuristik.">
    <meta property="og:image" content="/images/Logo UKMK Etalase.png">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
