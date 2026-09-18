import { useQuery } from "@tanstack/react-query";

/* fetching movies */
export function useMovies(key: string, queryFn: any) {
  return useQuery<any>({
    queryKey: [key],
    queryFn: () => queryFn(),
    staleTime: 1000 * 60 * 5,
  });
}
