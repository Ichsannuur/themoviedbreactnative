import { ActivityIndicator, Text, View } from "react-native";
import { useTrendingMovies } from "../hooks/useMovie";
import CardMovie from "./CardMovie";

const TrendingMovieSection = () => {
	const { data, isLoading, error } = useTrendingMovies();

	if (isLoading) {
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
				<Text className="text-red-500">Error: {error.message}</Text>
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

export default TrendingMovieSection;
