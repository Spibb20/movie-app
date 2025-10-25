import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "@/app/_components/Footer";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;

  const q = (query ?? "").trim();
  const currentPage = Number(page ?? "1");
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ?? ""
    }/api/tmdb/search?q=${encodeURIComponent(q)}&page=${currentPage}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const results: {
    id: number;
    title: string;
    poster_path: string;
  }[] = data.results ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="w-full max-w-[1080px] mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">Search results</h1>
        <p className="text-gray-600 mt-2">
          {results.length} results for {`"${q}"`}
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {results.map((m) => (
            <Link key={m.id} href={`/details/${m.id}`}>
              <div className="rounded-md bg-secondary overflow-hidden">
                <Image
                  src={getImageUrl(m.poster_path)}
                  alt={m.title}
                  width={230}
                  height={340}
                />
                <div className="p-3">
                  <p className="font-semibold line-clamp-2">{m.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
