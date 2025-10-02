import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="max-w-[1440px] w-full pr-4 pl-4 min-h-[59px] h-[59px] flex items-center justify-between">
      <div className="max-w-[1280px] w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/film.svg" alt="" height={20} width={20} />
          <p className="text-indigo-700">MovieZzZzZ</p>
        </div>
        <div className="flex items-center">
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
          <div className="flex items-center">
            <Image
              src="/_magnifying-glass.svg"
              alt="magnifying"
              width={16}
              height={16}
              className="absolute ml-0.5"
            ></Image>
            <Input className="relative"></Input>
          </div>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
