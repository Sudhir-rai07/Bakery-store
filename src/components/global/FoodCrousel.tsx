"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { foodItems } from "@/constants/constansts"


export function FoodCarousel() {
  return (
    <div className="relative w-[80%] max-w-5xl mx-auto mt-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        orientation="horizontal"
        className="w-full"
      >
        <CarouselPrevious className="absolute transform-none mx-2 bg-white rounded-full shadow-md" />
        <CarouselContent className="-ml-4">
          {foodItems.map((item) => (
            <CarouselItem key={item.id} className="pl-4 basis-full md:basis-1/3">
              <Card className="border-0 shadow-none px-4"  style={{
                  backgroundColor: item.backgroundColor
                }}>
                <CardContent className={`flex flex-col items-center p-6 rounded-xl`}>
                  <div className="relative w-full aspect-square max-w-[350px] mb-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
              <h2 className="text-center mt-2 font-bold text-xl font-mono uppercase">{item.name}</h2>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselNext className="absolute transform-none mx-2 bg-white rounded-full shadow-md" />
        <div className="flex justify-center mt-4">
          
          
        </div>
      </Carousel>
    </div>
  )
}
