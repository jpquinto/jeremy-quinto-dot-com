'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll";
  

export const SkillsCarousel = () => {

    const skillsList = [
        'html',
        'css',
        'python',
        'javascript',
        'react',
        'tailwind',
        'java',
        'mongodb',
        'node',
        'typescript',
        'sql',
        'next.js',
        'aws',
    ];

    return (
        <div className="z-50 w-full md:w-[60%] lg:w-[50%]">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 0.5,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    })
                ]}
            >
                <CarouselContent>
                    {skillsList.map((skill, index) => (
                        <CarouselItem key={index} className="basis-1/6">
                            <div className="basis-1/6 flex items-center justify-center p-4 text-muted-foreground italic text-center">
                                {skill}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}