import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { images } from "@/constants";
import { Separator } from "../ui/separator";

export function CarouselHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="basis-0 flex-grow w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex flex-1 ">
          {images.map(({ image, alt }) => (
            <CarouselItem key={alt} className="w-full">

              <img
                src={image}
                alt={alt}
                className="h-screen w-screen object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" bg-gradient-to-r from-gray-900/50 absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-start p-10">
        <div className=" space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  text-white/80">
            Corporativo Integral K&M del Bajío
          </h1>
          <Separator className="bg-gradient-to-r from-azul"/>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold  text-white/80">
            International Trade Business
          </p>
        </div>
      </div>
    </div>
  );
}
