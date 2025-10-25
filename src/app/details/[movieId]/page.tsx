import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "@/app/_components/Footer";
import { axiosInstance, getImageUrl } from "@/lib/utils";
import { DetailsHeader } from "../_components/DetailsHeader";
import { MoreLikeThis } from "../_components/MoreLikeThis";
import { Trailer } from "../_components/Trailer";
import type { DetailsMovieType } from "@/lib/types";
import type { MovieType } from "@/lib/types";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetailsPage({ params }: PageProps) {
  const { movieId } = await params;

  const [movieRes, videosRes, similarRes] = await Promise.all([
    axiosInstance.get(`/movie/${movieId}?language=en-US`),
    axiosInstance.get(`/movie/${movieId}/videos?language=en-US`),
    axiosInstance.get(`/movie/${movieId}/similar?language=en-US&page=1`),
  ]);

  const m = movieRes.data;

  const movie: DetailsMovieType = {
    id: m.id,
    title: m.title,
    release_date: m.release_date,
    vote_average: m.vote_average,
    vote_count: m.vote_count,
    poster_path: getImageUrl(m.poster_path),
    backdrop_path: getImageUrl(m.backdrop_path, "original"),
    overview: m.overview,
    genres: (m.genres ?? []).map((g: { id: number; name: string }) => ({
      id: g.id,
      name: g.name,
    })),
    runtime: m.runtime ?? null,
  };

  const videos: { type: string; site: string; key: string }[] =
    videosRes.data.results ?? [];

  const trailer =
    videos.find((v) => v.type === "Trailer" && v.site === "YouTube") ??
    videos.find((v) => v.site === "YouTube") ??
    null;

  const similarMovies: MovieType[] = (similarRes.data.results ?? []).map(
    (sm: {
      id: number;
      title: string;
      vote_average: number;
      vote_count: number;
      release_date: string;
      poster_path: string;
      backdrop_path: string;
    }) => ({
      id: sm.id,
      title: sm.title,
      vote_average: sm.vote_average,
      vote_count: sm.vote_count,
      release_date: sm.release_date,
      poster_path: getImageUrl(sm.poster_path),
      backdrop_path: getImageUrl(sm.backdrop_path, "original"),
    })
  );

  return (
    <div className="w-full min-h-screen p-0 flex flex-col">
      <Navigation />
      <DetailsHeader movie={movie} trailerKey={trailer?.key ?? null} />
      <Trailer overview={movie.overview} genres={movie.genres} />
      <MoreLikeThis movies={similarMovies} />
      <Footer />
    </div>
  );
}
