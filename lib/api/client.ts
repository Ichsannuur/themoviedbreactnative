export const TMDB_CONFIG = {
	BASE_URL: "https://api.themoviedb.org/3",
	IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
	},
};

export const apiClient = {
	get: async <T>(
		endpoint: string,
		params?: Record<string, any>
	): Promise<T> => {
		const url = new URL(`${TMDB_CONFIG.BASE_URL}${endpoint}`);
		if (params) {
			Object.keys(params).forEach((key) =>
				url.searchParams.append(key, params[key])
			);
		}
		const res = await fetch(url.toString(), {
			method: "GET",
			headers: TMDB_CONFIG.headers,
		});

		console.log("Fetching URL:", url.toString());

		if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
		return res.json();
	},

	post: async <T>(endpoint: string, body: any): Promise<T> => {
		const res = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
			method: "POST",
			headers: TMDB_CONFIG.headers,
			body: JSON.stringify(body),
		});
		if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
		return res.json();
	},
};
