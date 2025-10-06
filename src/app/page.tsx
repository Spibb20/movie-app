import { Navigation } from "@/app/_components/Navigation";
import { SectionMovies } from "./_components/sectionMovies";
import { Footer } from "@/app/_components/Footer";
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { MovieType } from "@/lib/types";

export default async function Home() {
  const getUpcomingMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzhkNDY5ZDExNTczYzMwNzg3Yjk2NzJmMDQ5ZmVlZCIsIm5iZiI6MTc1OTQ2NDE4MS43MTI5OTk4LCJzdWIiOiI2OGRmNGFmNTdiNWZhNTVmN2MyYTQ1NzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.x14uZTK0NNBAc2-w26q4MkdKc6q4QT_JMYiPcAGOCKM`,
        },
      }
    );
    return response.data.results.map((movie: MovieType) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
  };
  const upcomingMovies = await getUpcomingMovies();
  const moviesList: MovieType[] = [
    {
      title: "The Godfather",
      vote_average: 9.2,
      poster_path: "/godfather.jpg",
    },
    {
      title: "How to train your dragon",
      vote_average: 7.8,
      poster_path: "/dragon.jpg",
    },
    {
      title: "Alien Romulus",
      vote_average: 5.9,
      poster_path: "/alien.jpg",
    },
    {
      title: "From the Ashes",
      vote_average: 8.1,
      poster_path: "/ashes.jpg",
    },
  ];

  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2 ">
      <Navigation />
      <div className="w-full h-auto mb-8">
        <Carousel
          className="w-[100%] flex justify-center items-center"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent className="relative w-[100%]">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="w-[100%]">
                <img src="/Carousel-imgs/wickedong.jpg" alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-4 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
          <CarouselPrevious className="absolute left-4" />
          <ol className="size-10  absolute flex gap-2 bottom-[-14]">
            <li className="size-2.5 bg-white rounded-4xl"></li>
            <li className="size-2.5 bg-white rounded-4xl"></li>
            <li className="size-2.5 bg-white rounded-4xl"></li>
          </ol>
        </Carousel>
      </div>

      <SectionMovies sectionTitle="Upcoming" movies={upcomingMovies} />
      <SectionMovies sectionTitle="Popular" movies={moviesList} />
      <SectionMovies sectionTitle="Top Rated" movies={moviesList} />
      <Footer></Footer>
    </div>
  );
}
