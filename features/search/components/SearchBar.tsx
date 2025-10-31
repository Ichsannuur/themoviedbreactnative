import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Text, View } from "react-native";

// SearchBar component
const SearchBar = () => {
	return (
		<View className="flex flex-row bg-gray-200 items-center p-4 mx-6 mt-0 rounded-lg">
			<MaterialIcons
				name="search"
				size={16}
			/>
			<Text className="ml-2 text-gray-800">Search Movie</Text>
		</View>
	);
};

export default SearchBar;
