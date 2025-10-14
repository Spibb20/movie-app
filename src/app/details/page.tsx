import { Navigation } from "../_components/Navigation";
import { Footer } from "../_components/Footer";
import { axiosInstance, getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { DetailsHeader } from "./_components/DetailsHeader";
import { DetailsMovieType } from "@/lib/types";

export default async function Home() {
  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    console.log(response.data.results);
    return response.data.results.map((movie: DetailsMovieType) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: getImageUrl(movie.poster_path),
      backdrop_path: getImageUrl(movie.backdrop_path, "original"),
    }));
  };
  const movie = await getMovies("1257009");
  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2 ">
      <Navigation />
      <DetailsHeader movie={movie} />
      <Footer />
    </div>
  );
}
