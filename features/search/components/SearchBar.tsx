import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

// SearchBar component
const SearchBar = () => {
	const router = useRouter();
	return (
		<TouchableOpacity
			onPress={() => router.push("/search")}
			activeOpacity={0.7}
			className="flex flex-row bg-gray-200 items-center p-4 mx-6 mt-0 rounded-lg"
		>
			<MaterialIcons
				name="search"
				size={16}
			/>
			<Text className="ml-2 text-gray-800">Search Movie</Text>
		</TouchableOpacity>
	);
};

export default SearchBar;
