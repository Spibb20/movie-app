import { Navigation } from "@/app/_components/Navigation";
import { SectionMovies } from "./_components/sectionMovies";
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
