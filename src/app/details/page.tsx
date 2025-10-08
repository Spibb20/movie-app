import { Navigation } from "../_components/Navigation";
import { Footer } from "../_components/Footer";

import { MovieType } from "@/lib/types";
import { axiosInstance, getImageUrl } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    console.log(response.data.results);
    return response.data;
  };
  const movie = await getMovies("1257009");
  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2 ">
      <Navigation />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1080px] h-auto flex flex-col justify-center items-center py-[80px]">
          <div className="flex w-full justify-between">
            <div className="w-1/3">
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p>{movie.release_date} · PG · 2h 40m</p>
            </div>
            <div className=" flex flex-col ">
              <p className="">Rating</p>
              <div className=" flex items-center gap-1.5">
                <div className="flex items-center">
                  <Image
                    alt={movie.title}
                    width={30}
                    height={30}
                    src="/star.svg"
                  />
                </div>
                <div>
                  <div className="w-fit h-full flex justify-end ">
                    <p className="text-black font-bold">
                      {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="text-gray-500">/10</p>
                  </div>
                  <p>from {movie.vote_count} votes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <Image
              alt="poster"
              width={290}
              height={428}
              src={movie.poster_path}
            ></Image>
            <Image
              alt="video"
              width={760}
              height={428}
              src={movie.backdrop_path}
            ></Image>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
