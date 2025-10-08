"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/app/_components/Card";
import { MovieType } from "@/lib/types";
import { useState } from "react";

export const SectionMovies = (props: {
  movies: MovieType[];
  sectionTitle: string;
}) => {
  const { movies, sectionTitle } = props;
  const [seeMore, setSeeMore] = useState(10);
  return (
    <div className="w-[100%] h-auto flex flex-col gap-8 pr-[80px] pl-[80px] py-10">
      <div className="flex justify-between">
        <p className="font-bold text-[24px]">{sectionTitle}</p>
        <Button onClick={() => setSeeMore(20)} variant="ghost">
          See More →
        </Button>
      </div>
      <div className="w-full h-0.5 bg-teal-600 rounded-2xl"></div>
      <div className="flex flex-wrap justify-between lg:gap-3 md:gap-5 ">
        {movies
          .map((movie, index) => <Card movie={movie} key={index} />)
          .splice(0, seeMore)}
      </div>
    </div>
  );
};
