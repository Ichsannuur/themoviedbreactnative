import { fetchMovies } from "@/features/movies/api/api";
import { useEffect, useState } from "react";

export const useFetch = <T>(endpoint: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				const result = await fetchMovies(endpoint);
				setData(result);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [endpoint]);

	return { data, loading, error };
};
