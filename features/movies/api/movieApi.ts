export const TMDB_CONFIG = {
	BASE_URL: "https://api.themoviedb.org/3",
	API_KEY: process.env.TMDB_API_KEY,
	IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
	},
};

const getTrendingMovies = async () => {
	const response = await fetch(
		`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`,
		{
			method: "GET",
			headers: TMDB_CONFIG.headers,
		}
	);

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`Error fetching movies: ${errorText}`);
	}

	return response.json();
};

export const movieApi = {
	getTrendingMovies,
};
