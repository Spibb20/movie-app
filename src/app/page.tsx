import { Navigation } from "@/app/_components/Navigation";
import { SectionMovies } from "./_components/sectionMovies";
import { Footer } from "@/app/_components/Footer";
import axios from "axios";

import { MovieType } from "@/lib/types";
import { CarouselContainer } from "./_components/CarouselContainer";

export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzhkNDY5ZDExNTczYzMwNzg3Yjk2NzJmMDQ5ZmVlZCIsIm5iZiI6MTc1OTQ2NDE4MS43MTI5OTk4LCJzdWIiOiI2OGRmNGFmNTdiNWZhNTVmN2MyYTQ1NzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.x14uZTK0NNBAc2-w26q4MkdKc6q4QT_JMYiPcAGOCKM`,
        },
      }
    );
    console.log(response.data.results);
    return response.data.results.map((movie: MovieType) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
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

/*
  <Carousel
          className="w-[100%] flex justify-center items-center"
          //plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent className="relative w-[100%]">
            {nowPlayingMovies.map((movie, index) => (
              <CarouselItem key={index} className="w-[100%]">
                <Image
                  src={movie.backdrop_path}
                  alt={movie.title}
                  fill
                  className="object-cover"
                ></Image>
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
  */
