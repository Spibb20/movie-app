"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type MovieLite = { id: number; title: string; poster: string | null };

export function SearchBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState<MovieLite[]>([]);
  const abortRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    const q = value.trim();
    if (!q) {
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
          `/api/tmdb/search?q=${encodeURIComponent(q)}&page=1`,
          { signal: controller.signal }
        );

        const data = await res.json();
        const results = (data.results ?? []).slice(0, 7).map((m: any) => ({
          id: m.id,
          title: m.title,
          poster: m.poster_path
            ? `https://image.tmdb.org/t/p/w92${m.poster_path}`
            : null,
        }));
        setItems(results);
        setOpen(true);
      } catch {}
    }, 300);

    return () => clearTimeout(t);
  }, [value]);

  const goAll = () => {
    const q = value.trim();
    if (!q) return;
    setOpen(false);
    router.push(`/search?query=${encodeURIComponent(q)}&page=1`);
  };

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center relative">
            <Image
              src="/_magnifying-glass.svg"
              alt="magnifying"
              width={16}
              height={16}
              className="absolute left-2"
            />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => value.trim() && setOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  goAll();
                }
                if (e.key === "Escape") setOpen(false);
              }}
              placeholder="Search..."
              className="pl-8 w-[260px]"
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="p-0 w-[340px]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Search results">
                {items.map((m) => (
                  <CommandItem
                    key={m.id}
                    value={m.title}
                    onMouseDown={(e) => e.preventDefault()}
                    onSelect={() => {
                      setOpen(false);
                      router.push(`/details/${m.id}`);
                    }}
                    className="flex items-center gap-3 py-2"
                  >
                    <div className="w-10 h-14 rounded overflow-hidden bg-muted shrink-0">
                      {m.poster ? (
                        // next/image is fine here too, but <img> is simpler for tiny thumbs
                        <img
                          src={m.poster}
                          alt={m.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                          N/A
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{m.title}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              <div className="border-t">
                <button
                  className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-muted"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={goAll}
                >
                  See all results →
                </button>
              </div>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
