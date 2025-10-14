import { Navigation } from "@/app/_components/Navigation";
import { SectionMovies } from "./_components/SectionMovies";
import { Footer } from "@/app/_components/Footer";
import { axiosInstance, getImageUrl } from "../lib/utils";
import { MovieType } from "@/lib/types";
import { CarouselContainer } from "./_components/CarouselContainer";

export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US&page=1`
    );
    console.log(response.data.results);
    return response.data.results.map((movie: MovieType) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: getImageUrl(movie.poster_path),
      backdrop_path: getImageUrl(movie.backdrop_path, "original"),
    }));
  };

  const upcomingMovies = await getMovies("upcoming");
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const nowPlayingMovies = await getMovies("now_playing");

  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2 ">
      <Navigation />
      <CarouselContainer nowPlayingMovies={nowPlayingMovies} />
      <SectionMovies sectionTitle="Upcoming" movies={upcomingMovies} />
      <SectionMovies sectionTitle="Popular" movies={popularMovies} />
      <SectionMovies sectionTitle="Top Rated" movies={topRatedMovies} />
      <Footer></Footer>
    </div>
  );
}
