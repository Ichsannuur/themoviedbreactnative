export const TMDB_CONFIG = {
	BASE_URL: "https://api.themoviedb.org/3",
	API_KEY: process.env.TMDB_API_KEY,
	IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
	},
};

export const fetchMovies = async (endpoint: string) => {
	try {
		const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
			method: "GET",
			headers: TMDB_CONFIG.headers,
		});

		console.log(response);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Error fetching movies: ${errorText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
