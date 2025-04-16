'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { BakingArtItems } from "@/constants/constansts";
const BakingArt = () => {
  return (
    <div className="w-full mx-auto mt-8">
      <Carousel 
      opts={{
        loop: true,
        slidesToScroll: 1
      }}
      className="w-full px-8 lg:max-w-4/5 mx-auto" 
      orientation="vertical"
      >
        <CarouselContent className="-mt-1 h-[400px] ">
          {BakingArtItems.map((item, index) => (
            <CarouselItem className="" key={index}>
              <Card className="bg-[#3a2125] rounded-4xl border-none">
                <CardContent className="flex flex-col md:flex-row gap-6 ">
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    alt={`Baking is an art - ${index}`}
                    className="rounded-4xl"
                  />

                  <div className="flex flex-col">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl uppercase font-extrabold text-[#f4eae8] font-mono">{item.heading}</h2>
                    <p className="text-[#f4eae8] mt-2">{item.paragraph}</p>

                    <button className="bg-yellow-300 uppercase flex items-center font-extrabold text-[#3a2125] text-lg mt-3 border-2 border-black rounded-full px-3 py-2 w-fit"><span className="h-3 w-3 block mr-2 bg-white rounded-full"> </span>Learn Baking</button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default BakingArt