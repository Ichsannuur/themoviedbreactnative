import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../api/movieApi";
import { MovieResponse } from "../types/Movie";

export const useTrendingMovies = () => {
	return useQuery<MovieResponse>({
		queryKey: ["trending-movies"],
		queryFn: () => movieApi.getTrendingMovies(),
	});
};
