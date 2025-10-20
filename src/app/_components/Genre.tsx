import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { axiosInstance } from "@/lib/utils";

type TMDBGenre = { id: number; name: string };

export async function Genre() {
  const res = await axiosInstance.get("/genre/movie/list", {
    params: { language: "en" },
  });

  const genres: TMDBGenre[] = res.data.genres ?? [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          <img
            className="bg-white rounded-md"
            src="/chevron-down.svg"
            alt=""
            height={16}
            width={16}
          />
          Genre
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit p-2" align="start">
        <DropdownMenuLabel>Genres</DropdownMenuLabel>
        <DropdownMenuShortcut>
          See lists of movies by genre
        </DropdownMenuShortcut>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="flex flex-wrap gap-2 w-[500px]">
          {genres.map((g) => (
            <Link
              key={g.id}
              href={`/genres/${g.id}?page=1`}
              className="px-3 py-1 rounded-full border text-sm hover:bg-gray-100"
            >
              {g.name} →
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
