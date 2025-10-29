import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Index = () => {
	const router = useRouter();

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		router.replace("/(tabs)");
	// 	}, 2000);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<View className="flex-1">
			<Image
				source={require("../assets/splashscreen/splashscreen.png")}
				className="w-full h-full"
				resizeMode="cover"
			/>
			<LinearGradient
				colors={["transparent", "rgba(0,0,0,0.9)"]}
				style={{
					position: "absolute",
					bottom: 0,
					width: "100%",
					height: "80%",
				}}
			/>
			<View className="absolute left-8 right-8 bottom-20">
				<Text className="text-white font-bold text-5xl mb-3">The Movie DB</Text>
				<Text className="text-white font-medium mb-5 leading-6">
					Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
					dolor sit amet
				</Text>
				<Pressable
					onPress={() => router.replace("/(tabs)")}
					className="bg-primary py-4 rounded-full items-center justify-center"
				>
					<Text className="text-white font-semibold text-base">
						GET STARTED
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Index;
