import tailwindConfig from "@/tailwind.config.js";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors as any;

const _Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.gray[500],
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: "Home",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					tabBarLabel: "Saved",
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="bookmark"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default _Layout;
