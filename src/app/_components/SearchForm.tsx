"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Movie = { id: number; title: string };

export const SearchForm = () => {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Movie[]>([]);
  const [open, setOpen] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const query = q.trim();
    if (!query) {
      setItems([]);
      setOpen(false);
      return;
    }

    const t = setTimeout(async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch(
          `/api/tmdb/search?q=${encodeURIComponent(query)}&page=1`,
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        setItems((data.results ?? []).slice(0, 6));
        setOpen(true);
      } catch {}
    }, 350);

    return () => clearTimeout(t);
  }, [q]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    setOpen(false);
    router.push(`/search?query=${encodeURIComponent(query)}&page=1`);
  };

  return (
    <div className="relative w-full max-w-[520px]">
      <form onSubmit={onSubmit} className="w-full">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => q.trim() && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          placeholder="Search.."
          className="w-full h-10 rounded-md border px-3"
        />
      </form>

      {open && (
        <div className="absolute top-11 left-0 w-full rounded-md border bg-white shadow">
          {items.length === 0 ? (
            <div className="p-3 text-sm text-gray-500">No results found.</div>
          ) : (
            <div className="py-2">
              {items.map((m) => (
                <Link
                  key={m.id}
                  href={`/details/${m.id}`}
                  className="block px-3 py-2 hover:bg-gray-100 text-sm"
                  onMouseDown={(e) => e.preventDefault()} // blur-оос болж хаагдахаас хамгаална
                >
                  {m.title}
                </Link>
              ))}
              <button
                className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-gray-50"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() =>
                  router.push(
                    `/search?query=${encodeURIComponent(q.trim())}&page=1`
                  )
                }
              >
                See all results →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
