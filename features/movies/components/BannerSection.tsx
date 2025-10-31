import { useFetch } from "@/features/movies/hooks/useFetch";
import { MovieResponse } from "@/features/movies/types/Movie";
import { ActivityIndicator, Text, View } from "react-native";
import CardMovie from "./CardMovie";

const BannerSection = () => {
	const { data, loading, error } = useFetch<MovieResponse>(
		"/discover/movie?sort_by=popularity.desc"
	);

	if (loading) {
		return (
			<View className="px-6 py-10">
				<ActivityIndicator
					size="large"
					color="#1E40AF"
				/>
			</View>
		);
	}

	if (error) {
		return (
			<View className="px-6">
				<Text className="text-red-500">Error: {error}</Text>
			</View>
		);
	}

	return (
		<View className="flex-row flex-wrap justify-between px-6">
			{data?.results.map((movie) => (
				<CardMovie
					key={movie.id}
					movie={movie}
				/>
			))}
		</View>
	);
};

export default BannerSection;
