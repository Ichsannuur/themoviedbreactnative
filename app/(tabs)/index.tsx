import BannerSection from "@/features/movies/components/BannerSection";
import SearchBar from "@/features/search/components/SearchBar";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		// Add your refresh logic here
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
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
				<BannerSection />
			</ScrollView>
		</SafeAreaView>
	);
}
