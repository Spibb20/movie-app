import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Genre() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
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

        <DropdownMenuShortcut className="">
          See Lists of movies by genre
        </DropdownMenuShortcut>

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-wrap gap-2 w-[500px]">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Action</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Adventure</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Animation</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Biography</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Comedy</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Crime</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Documentary</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Drama</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Family</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Fantasy</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Film-Noir</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Game-Show</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>History</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Horror</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Music</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Musical</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Mystery</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>News</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Reality-TV</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Romance</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Sci-Fi</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Short</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Sport</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Talk-Show</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Thriller</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>War</DropdownMenuSubTrigger>
            <DropdownMenuSubTrigger>Western</DropdownMenuSubTrigger>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

//className="w-fit rounded-2xl border-1"
