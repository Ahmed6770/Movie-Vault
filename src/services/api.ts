import type { Movie } from "../types/movie";
import axios from "axios";

// base config
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    include_adult: false,
    certification_country: "US",
    "certification.lte": "PG-13",
  },
});

/* Fetch trending movies */
export async function getTrending(page: number = 1) {
  const response = await api.get("/trending/movie/day", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch top rated movies */
export async function getTopRated(page: number = 1) {
  const response = await api.get("/movie/top_rated", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch popular movies */
export async function getPopular(page: number = 1) {
  const response = await api.get("/movie/popular", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch now playing movies */
export async function getNowPlaying(page: number = 1) {
  const response = await api.get("/movie/now_playing", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch upcoming movies */
export async function getUpcoming(page: number = 1) {
  const response = await api.get("/movie/upcoming", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch action movies */
export async function getAction(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 28, page },
  });
  return response.data.results;
}

/* Fetch comedy movies */
export async function getComedy(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 35, page },
  });
  return response.data.results;
}

/* Fetch animation movies */
export async function getAnimation(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 16, page },
  });
  return response.data.results;
}

/* Fetch sci-fi movies */
export async function getSciFi(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 878, page },
  });
  return response.data.results;
}

/* Fetch horror movies */
export async function getHorror(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 27, page },
  });
  return response.data.results;
}
/* Fetch drama movies */
export async function getDrama(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 18, page },
  });
  return response.data.results;
}

/* Fetch romance movies */
export async function getRomance(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 10749, page },
  });
  return response.data.results;
}

/* Fetch thriller movies */
export async function getThriller(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 53, page },
  });
  return response.data.results;
}

/* Fetch adventure movies */
export async function getAdventure(page: number = 1) {
  const response = await api.get("/discover/movie", {
    params: { with_genres: 12, page },
  });
  return response.data.results;
}

/* Fetch movie details */
export async function getMovieDetails(id: string) {
  const response = await api.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,videos,watch/providers",
    },
  });
  return response.data;
}

/* Fetch similar movies */
export async function getSimilarMovies(id: string) {
  const response = await api.get(`/movie/${id}/similar`);
  return response.data.results;
}

/* Fetch search */
export async function searchMovies(text: string){
  if (!text) return []; 
  const response = await api.get("/search/multi", {
    params: {
      query: text
    }
  });
  return response.data.results.filter((item: Movie) => item.media_type !== "person");
}

/* Fetch trending movies & series */
export async function getTrendingAll(page: number = 1) {
  const response = await api.get("/trending/all/day", {
    params: { page },
  });
  return response.data.results.filter((item: Movie) => item.media_type !== "person");
}

/////////////////////// series ////////////////////

/* Fetch trending series */
export async function getTrendingTV(page: number = 1) {
  const response = await api.get("/trending/tv/day", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch top rated series */
export async function getTopRatedTV(page: number = 1) {
  const response = await api.get("/tv/top_rated", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch popular series */
export async function getPopularTV(page: number = 1) {
  const response = await api.get("/tv/popular", {
    params: { page },
  });
  return response.data.results;
}

/* Fetch animation series */
export async function getTVAnimation(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 16, page },
  });
  return response.data.results;
}

/* Fetch comedy series */
export async function getTVComedy(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 35, page },
  });
  return response.data.results;
}

/* Fetch crime series */
export async function getTVCrime(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 80, page },
  });
  return response.data.results;
}

/* Fetch drama series */
export async function getTVDrama(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 18, page },
  });
  return response.data.results;
}

/* Fetch sci-fi series */
export async function getTVSciFi(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 10765, page },
  });
  return response.data.results;
}

/* Fetch action series */
export async function getTVAction(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 10759, page },
  });
  return response.data.results;
}

/* Fetch mystery series */
export async function getTVMystery(page: number = 1) {
  const response = await api.get("/discover/tv", {
    params: { with_genres: 9648, page },
  });
  return response.data.results;
}

/* Fetch TV details */
export async function getTVDetails(id: string) {
  const response = await api.get(`/tv/${id}`, {
    params: {
      append_to_response: "credits,videos,watch/providers",
    },
  });
  return response.data;
}

/* Fetch similar series */
export async function getSimilarTV(id: string) {
  const response = await api.get(`/tv/${id}/similar`);
  return response.data.results;
}
