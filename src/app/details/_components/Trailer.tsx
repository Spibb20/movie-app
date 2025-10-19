import type { GenreType } from "@/lib/types";

export const Trailer = (props: { overview: string; genres: GenreType[] }) => {
  const { overview } = props;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1080px] px-6 pb-10">
        <p className="text-gray-700 leading-7">{overview}</p>
      </div>
    </div>
  );
};
