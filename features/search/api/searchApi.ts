import { MovieResponse } from "@/features/movies/types/Movie";
import { apiClient } from "@/lib/api/client";

const searchMovies = async (query: string) => {
	const params = {
		query: query,
	};

	return apiClient.get<MovieResponse>(`/search/movie`, params);
};

export const searchApi = {
	searchMovies,
};
