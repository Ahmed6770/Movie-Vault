import { useQuery } from "@tanstack/react-query";

/* fetching movies */
export function useMovies(key: string, queryFn: any) {
  return useQuery({
    queryKey: [key],
    queryFn,
  });
}
