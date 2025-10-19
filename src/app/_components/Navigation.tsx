import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Genre } from "@/app/_components/Genre";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className=" w-full pr-4 pl-4 min-h-[59px] h-[59px] flex items-center justify-between ">
      <div className=" w-full flex justify-between items-center">
        <div className="flex gap-2 items-center bg-teal-700 rounded-md p-2">
          <img src="/filmWhite.svg" alt="" height={20} width={20} />
          <p className="text-white">MovieZzZzZ</p>
        </div>
        <div className="flex items-center">
          <Genre></Genre>
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
