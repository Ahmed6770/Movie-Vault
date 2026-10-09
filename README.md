# 🎬 Movie Vault

Movie Vault is a movie and TV show discovery app built with React and TypeScript.

The idea behind the project was to build a complete frontend experience where you can discover movies and TV shows, search for something specific, view detailed information, and keep track of the movies and series you want to watch or have already watched.

This is currently the frontend version of the project, with the backend being added as the future improvement using Supabase.

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

## Built With

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

## Future Improvements

The next stage is turning Movie Vault into a full-stack application using Supabase.

Planned backend features:

- User authentication with Supabase Auth
- PostgreSQL database persistence
- Cloud-synced user libraries (Watchlist, Watched, Favorites)
- Row Level Security (RLS) policies for user data isolation