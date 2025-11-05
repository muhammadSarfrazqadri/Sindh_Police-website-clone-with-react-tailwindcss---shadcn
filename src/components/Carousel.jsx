// import React from 'react'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import sindhPoliceBg1 from '../../src/assets/images/sindhPolice1.jpg'
import sindhPoliceBg2 from '../../src/assets/images/sindhPolice2.jpg'
import sindhPoliceBg3 from '../../src/assets/images/sindhPolice3.jpg'
import sindhPoliceBg4 from '../../src/assets/images/sindhPolice4.png'
import sindhPoliceBg5 from '../../src/assets/images/sindhPolice5.png'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const MainCarousel = () => {

  const images = [sindhPoliceBg1, sindhPoliceBg2, sindhPoliceBg3, sindhPoliceBg4, sindhPoliceBg5];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="relative ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {images.map((img, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full w-full border-none shadow-none">
                <CardContent className="flex items-center justify-center h-full w-full p-0">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full shadow-md" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full shadow-md" />
      </Carousel>
      <div className="flex flex-col gap-7 justify-center items-center py-20 text-center">

          <h2 className="text-3xl font-bold w-2xl pb-2 relative after:content-[''] after:absolute after:left-1/2 after:-ml-[25px] after:bottom-0 after:w-[50px] after:h-[5px] after:bg-red-600">Welcome to Traffic Police Karachi</h2>
          <p className="text-2xl w-2xl">The Sindh Police in pursuit of its mission, believes in providing quality service with the highest possible degree of excellence, based upon the principles</p>
      </div>
    </div>
  );
}

export default MainCarousel

