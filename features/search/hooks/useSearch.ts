import { MovieResponse } from "@/features/movies/types/Movie";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/searchApi";

export const useSearch = (query: string) => {
	return useQuery<MovieResponse>({
		queryKey: ["search-movies", query],
		queryFn: () => searchApi.searchMovies(query),
		enabled: query.length > 3,
	});
};
