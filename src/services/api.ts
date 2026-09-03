import axios from "axios";

// base config
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

/* Fetch trending movies */
export async function getTrending() {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
}

/* Fetch top rated movies */
export async function getTopRated() {
  const response = await api.get("/movie/top_rated");
  return response.data.results;
}

/* Fetch popular movies */
export async function getPopular() {
  const response = await api.get("/movie/popular");
  return response.data.results;
}

/* Fetch now playing movies */
export async function getNowPlaying() {
  const response = await api.get("/movie/now_playing");
  return response.data.results;
}

/* Fetch upcoming movies */
export async function getUpcoming() {
  const response = await api.get("/movie/upcoming");
  return response.data.results;
}

/* Fetch action movies */
export async function getAction() {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 28 },
  });
  return response.data.results;
}

/* Fetch comedy movies */
export async function getComedy() {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 35 },
  });
  return response.data.results;
}

/* Fetch animation movies */
export async function getAnimation() {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 16 },
  });
  return response.data.results;
}

/* Fetch sci-fi movies */
export async function getSciFi() {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 878 },
  });
  return response.data.results;
}

/* Fetch horror movies */
export async function getHorror() {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 27 },
  });
  return response.data.results;
}
