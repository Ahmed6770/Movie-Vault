# 🎬 Movie Vault

Movie Vault is a movie and TV show discovery app built with React and TypeScript.

The idea behind the project was to build a complete frontend experience where you can discover movies and TV shows, search for something specific, view detailed information, and keep track of the movies and series you want to watch or have already watched.

This is currently the **frontend version** of the project, with the backend being added as the next stage using **Supabase**.

## Features

- Browse movies and TV shows
- Discover trending, popular, top-rated, upcoming, and currently playing titles
- Universal multi-search for movies and TV shows
- View detailed movie and TV show information
- Watch official trailers (YouTube embed)
- View cast and crew information
- View similar recommendations for movies and TV shows
- Check streaming providers (Where to Watch)
- Add titles to your Watchlist
- Mark titles as Watched
- Add titles to Favorites
- Dedicated subpages for Watchlist, Watched, and Favorites
- Comprehensive Library overview with live statistics
- Fully responsive design across mobile, tablet, and desktop
- Custom empty states and 404 Not Found page
- Scroll-to-top behavior on route navigation
- Persistent library data using `localStorage`

## 🛠️ Built With

- **React 19**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **TanStack React Query**
- **Axios**
- **Lucide React**
- **Swiper**
- **Vite**
- **TMDB API**

##  API

Movie and TV show data comes from **The Movie Database (TMDB)**.

The frontend communicates with TMDB through a dedicated API service, while TanStack React Query handles caching and state management.

The current version communicates with TMDB directly from the frontend.

As part of the backend stage, TMDB requests will be handled through Supabase Edge Functions, keeping the TMDB API key securely on the server side instead of exposing it in the client.


## What's Next?

The next stage is turning Movie Vault into a full-stack application using Supabase.

Planned backend features:

- User authentication with Supabase Auth
- PostgreSQL database
- User-specific Watchlists
- User-specific Watched titles
- User-specific Favorites
- Row Level Security (RLS) policies
- Supabase Edge Functions
- Secure TMDB API proxy access

Supabase Auth will handle user authentication, PostgreSQL will store application data, RLS will control access to each user's data, and Edge Functions will handle server-side logic such as secure communication with TMDB.

The goal is to keep the current frontend experience while replacing the local-only library with real user accounts and persistent cloud data.

