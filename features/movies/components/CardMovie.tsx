import { Movie } from "@/features/movies/types/Movie";
import { TMDB_CONFIG } from "@/lib/api/client";
import { Image, View } from "react-native";

const CardMovie = ({ movie }: { movie: Movie }) => {
	return (
		<View
			key={movie.id}
			className="w-[48%] h-72 rounded-lg overflow-hidden my-2"
		>
			{movie.poster_path === null ? (
				<View className="bg-slate-400 w-full h-full" />
			) : (
				<Image
					source={{
						uri: `${TMDB_CONFIG.IMAGE_BASE_URL}${movie.poster_path}`,
					}}
					className="w-full h-full"
					resizeMode="cover"
				/>
			)}
		</View>
	);
};

export default CardMovie;
