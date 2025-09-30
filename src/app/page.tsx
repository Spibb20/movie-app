"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/app/_components/Navigation";
import { Upcoming } from "./_components/Upcoming";
import { Card } from "@/app/_components/Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full h-screen p-0 flex flex-col gap-2">
      <Navigation />
      <div className="w-full h-auto mb-8">
        <Carousel
          className="w-[100%] flex justify-center items-center"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent className="relative w-[100%]">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="w-[100%]">
                <img src="/Carousel-imgs/wickedong.jpg" alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-4 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
          <CarouselPrevious className="absolute left-4" />
          <ol className="size-10  absolute flex gap-2 bottom-[-14]">
            <li className="size-2.5 bg-white rounded-4xl"></li>
            <li className="size-2.5 bg-white rounded-4xl"></li>
            <li className="size-2.5 bg-white rounded-4xl"></li>
          </ol>
        </Carousel>
      </div>

      <Upcoming />
    </div>
  );
}
