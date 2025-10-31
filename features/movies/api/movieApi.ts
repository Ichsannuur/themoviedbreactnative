import { apiClient } from "@/lib/api/client";
import { MovieResponse } from "../types/Movie";

const getTrendingMovies = async () => {
	return apiClient.get<MovieResponse>(
		"/discover/movie?sort_by=popularity.desc"
	);
};

export const movieApi = {
	getTrendingMovies,
};
