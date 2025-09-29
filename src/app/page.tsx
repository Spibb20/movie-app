import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/app/_components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="w-full h-screen p-0">
      <Navigation />
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className=" ">
              <img src="/Carousel-imgs/wickedong.jpg" alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
