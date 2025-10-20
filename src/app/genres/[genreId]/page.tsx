import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "@/app/_components/Footer";
import { axiosInstance, getImageUrl } from "@/lib/utils";
import { Card } from "@/app/_components/Card";
import type { MovieType } from "@/lib/types";
import Link from "next/link";

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ genreId: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { genreId } = await params;
  const { page } = await searchParams;

  const currentPage = Number(page ?? "1");

  const res = await axiosInstance.get("/discover/movie", {
    params: { language: "en", with_genres: genreId, page },
  });

  const movies: MovieType[] = (res.data.results ?? []).map((m: any) => ({
    id: m.id,
    title: m.title,
    vote_average: m.vote_average,
    vote_count: m.vote_count,
    release_date: m.release_date,
    poster_path: getImageUrl(m.poster_path),
    backdrop_path: getImageUrl(m.backdrop_path, "original"),
  }));

  const totalPages = res.data.total_pages ?? 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="w-full max-w-[1080px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Link
            className={`px-3 py-2 border rounded ${
              currentPage <= 1 ? "pointer-events-none opacity-50" : ""
            }`}
            href={`/genres/${genreId}?page=${currentPage - 1}`}
          >
            Previous
          </Link>

          <span className="text-sm text-gray-600">
            {page} / {totalPages}
          </span>

          <Link
            className={`px-3 py-2 border rounded ${
              currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
            }`}
            href={`/genres/${genreId}?page=${currentPage + 1}`}
          >
            Next
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
