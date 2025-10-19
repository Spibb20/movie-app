"use client";

import type { MovieType } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const MoreLikeThis = (props: { movies: MovieType[] }) => {
  const { movies } = props;

  return (
    <div className="w-full flex justify-center pb-16">
      <div className="w-full max-w-[1080px] px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">More like this</h2>
          <Button variant="ghost">See more →</Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {movies.map((m) => (
            <Link key={m.id} href={`/details/${m.id}`} className="shrink-0">
              <div className="w-[190px] rounded-xl bg-secondary overflow-hidden">
                <Image
                  src={m.poster_path}
                  alt={m.title}
                  width={190}
                  height={280}
                />
                <div className="p-3">
                  <div className="flex items-center gap-1 text-sm">
                    <img src="/star.svg" className="w-4 h-4" alt="star" />
                    <span className="font-bold">
                      {m.vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-500">/10</span>
                  </div>
                  <p className="font-semibold mt-1 line-clamp-2">{m.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
