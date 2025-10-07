import { Navigation } from "../_components/Navigation";
import { Footer } from "../_components/Footer";
import axios from "axios";
import { MovieType } from "@/lib/types";

export default function Home() {
  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3 /movie/1257009?language=en-US`,
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
  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2 ">
      <Navigation />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1080px] h-auto flex justify-center items-center py-[80px]">
          <div className="flex w-full justify-between">
            <div>
              <h1>{}</h1>
              <p>2024.11.26 · PG · 2h 40m</p>
            </div>
            <div className=" flex flex-col ">
              <div className=" flex items-center gap-1.5">
                <div className="size-4">
                  <img src="/star.svg" />
                </div>
                <p>Rating</p>
              </div>
              <div className="w-fit h-full flex justify-end ">
                <p className="text-black font-bold">Ratttting</p>
                <p className="text-gray-500">/10</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
