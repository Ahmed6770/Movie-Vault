export type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string | null;
  backdrop_path?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  overview?: string;
  genres?: { id: number; name: string }[];
  media_type?: string;
  number_of_seasons?: number;
};
