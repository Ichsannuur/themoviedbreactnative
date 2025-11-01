import CardMovie from "@/features/movies/components/CardMovie";
import { useSearch } from "@/features/search/hooks/useSearch";
import { useDebounce } from "@/shared/hooks/useDebounce";
import React, { useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
	const [query, setQuery] = useState("");
	const debounceQuery = useDebounce(query, 1000);
	const { data, isLoading, error } = useSearch(debounceQuery);

	return (
		<SafeAreaView>
			<View>
				<TextInput
					placeholder="Search movies..."
					value={query}
					onChangeText={setQuery}
					className="border border-gray-300 rounded-md p-4 m-4"
				/>

				{isLoading && (
					<View className="mt-6">
						<ActivityIndicator
							size="large"
							color="#1E40AF"
						/>
					</View>
				)}
			</View>

			{error && (
				<View className="flex-1 justify-center items-center px-6">
					<Text className="text-red-500 text-center">
						Error: {error.message}
					</Text>
				</View>
			)}

			{data && (
				<FlatList
					data={data?.results}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					contentContainerClassName="px-4"
					columnWrapperStyle={{ gap: 8 }}
					renderItem={({ item }) => <CardMovie movie={item} />}
					ListEmptyComponent={
						query.length > 0 ? (
							<Text className="text-center text-gray-500 mt-10">
								No movies found
							</Text>
						) : null
					}
				/>
			)}
		</SafeAreaView>
	);
};

export default SearchScreen;
