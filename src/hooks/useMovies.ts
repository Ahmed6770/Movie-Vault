import { useQuery } from "@tanstack/react-query";

/* fetching movies */
export function useMovies<T>(key: string, queryFn: () => Promise<T>) {
  return useQuery<T>({
    queryKey: [key],
    queryFn: () => queryFn(),
    staleTime: 1000 * 60 * 5,
  });
}
