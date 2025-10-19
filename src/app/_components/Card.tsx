import { MovieType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export const Card = (props: { movie: MovieType }) => {
  const { movie } = props;

  return (
    <Link href={`/details/${movie.id}`} className="block">
      <div className="w-[230px] max-w-[230px] h-[439px] rounded-md bg-secondary flex flex-col hover:opacity-95 transition">
        <Image
          src={movie.poster_path}
          className="rounded-t-md"
          alt={movie.title}
          width={230}
          height={340}
        />

        <div className="w-full h-[95px] p-2 flex flex-col rounded-b-md">
          <div className="w-full h-[23px] flex items-center gap-1">
            <div className="size-4">
              <img src="/star.svg" alt="rating" />
            </div>
            <div className="w-[194px] h-full flex items-center">
              <p className="text-black font-bold">
                {movie.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-500">/10</p>
            </div>
          </div>
          <div className="w-full h-full">
            <p className="font-bold line-clamp-2">{movie.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
