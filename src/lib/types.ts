export type MovieType = {
  backdrop_path: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type CarouselType = {
  backdrop_path: string;
  title: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type DetailsMovieType = {
  backdrop_path: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;

  overview: string;
  genres: GenreType[];
  runtime: number | null;
};
