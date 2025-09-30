import { Button } from "@/components/ui/button";
import { Card } from "@/app/_components/Card";

export const Upcoming = () => {
  return (
    <div className="w-[100%] h-auto flex flex-col gap-8 pr-[80px] pl-[80px]">
      <div className="flex justify-between">
        <p className="font-bold text-[24px]">Upcoming</p>
        <Button variant="ghost">See More →</Button>
      </div>
      <div className="flex flex-wrap justify-between space-y-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index}></Card>
        ))}
      </div>
    </div>
  );
};
