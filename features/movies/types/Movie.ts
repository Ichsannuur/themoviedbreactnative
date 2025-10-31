export type Movie = {
	id: number;
	title: string;
	poster_path: string;
};

export type MovieResponse = {
	results: Movie[];
};
