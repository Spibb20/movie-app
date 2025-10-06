"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { MovieType } from "@/lib/types";

export function CarouselContainer(props: { nowPlayingMovies: MovieType[] }) {
  const { nowPlayingMovies } = props;
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <Carousel className="w-full h-full" plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent className="h-full">
          {nowPlayingMovies.map((movie, index) => (
            <CarouselItem
              key={index}
              className="relative w-full h-full flex justify-center items-center"
            >
              <Image
                src={movie.backdrop_path}
                alt={movie.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                  {movie.title}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 rounded-full w-10 h-10" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 rounded-full w-10 h-10" />
      </Carousel>
    </div>
  );
}
