import TrendingMovieSection from "@/features/movies/components/TrendingMovieSection";
import SearchBar from "@/features/search/components/SearchBar";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const queryClient = useQueryClient();
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		await queryClient.invalidateQueries({
			queryKey: ["trending-movies"],
		});
		setRefreshing(false);
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-white dark:bg-black">
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<Text className="font-bold text-3xl my-4 ml-6 text-primary">
					NETPLIK
				</Text>
				{/* Search */}
				<SearchBar />

				{/* Banner Section */}
				<Text className="font-bold text-lg mt-8 my-4 ml-6 text-gray-950">
					Trending Movies
				</Text>
				<TrendingMovieSection />
			</ScrollView>
		</SafeAreaView>
	);
}
