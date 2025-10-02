import { Button } from "@/components/ui/button";
import { Card } from "@/app/_components/Card";
import { MovieType } from "@/lib/types";

export const SectionMovies = (props: {
  movies: MovieType[];
  sectionTitle: string;
}) => {
  const { movies, sectionTitle } = props;
  return (
    <div className="w-[100%] h-auto flex flex-col gap-8 pr-[80px] pl-[80px]">
      <div className="flex justify-between">
        <p className="font-bold text-[24px]">{sectionTitle}</p>
        <Button variant="ghost">See More →</Button>
      </div>
      <div className="flex flex-wrap justify-between space-y-8">
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};
/*{Array.from({ length: 8 }).map((_, index) => (
          <Card key={index}></Card>
        ))}*/
/*{movies.map((movie) => (
          <Card movie={movie} />
        ))}*/
