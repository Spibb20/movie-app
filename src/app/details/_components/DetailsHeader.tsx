"use client";

import type { DetailsMovieType } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function formatRuntime(mins: number | null) {
  if (!mins) return "";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
}

export const DetailsHeader = (props: {
  movie: DetailsMovieType;
  trailerKey?: string | null;
}) => {
  const { movie, trailerKey } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1080px] px-6 py-[70px] flex flex-col gap-6">
        <div className="flex w-full justify-between items-start gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-600 mt-2">
              {movie.release_date}{" "}
              {movie.runtime ? `· ${formatRuntime(movie.runtime)}` : ""}
            </p>
          </div>

          <div className="min-w-[170px]">
            <p className="text-sm text-gray-500">Rating</p>
            <div className="flex items-center gap-2 mt-1">
              <Image alt="star" width={24} height={24} src="/star.svg" />
              <div>
                <div className="flex items-end gap-1">
                  <p className="text-lg font-bold">
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-gray-500">/10</p>
                </div>
                <p className="text-xs text-gray-500">
                  {movie.vote_count.toLocaleString()} votes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="shrink-0">
            <Image
              alt="poster"
              width={290}
              height={428}
              src={movie.poster_path}
              className="rounded-xl"
            />
          </div>

          <div className="relative w-full">
            <Image
              alt="backdrop"
              width={760}
              height={428}
              src={movie.backdrop_path}
              className="rounded-xl w-full h-[428px] object-cover"
            />

            {trailerKey && (
              <Button
                onClick={() => setOpen(true)}
                className="absolute left-6 bottom-6 rounded-full px-5"
              >
                Play trailer
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((g) => (
            <span
              key={g.id}
              className="px-3 py-1 rounded-full border text-sm text-gray-700 bg-white"
            >
              {g.name}
            </span>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTitle>{movie.title}</DialogTitle>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <div className="w-full aspect-video">
              {trailerKey ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                  title="Trailer"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : null}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
