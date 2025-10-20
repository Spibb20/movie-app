import { ModeToggle } from "@/components/ui/ModeToggle";
import { Genre } from "@/app/_components/Genre";
import { SearchBar } from "./SearchBar";

export const Navigation = () => {
  return (
    <nav className="w-full pr-4 pl-4 min-h-[59px] h-[59px] flex items-center justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center bg-teal-700 rounded-md p-2">
          <img src="/filmWhite.svg" alt="" height={20} width={20} />
          <p className="text-white">MovieZzZzZ</p>
        </div>

        <div className="flex items-center">
          <Genre />
          <div className="flex items-center ml-2">
            <SearchBar />
          </div>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};
