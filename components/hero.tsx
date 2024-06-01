'use client';
import { Component } from "lucide-react";
import { Boxes } from "./ui/background-boxes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Socials } from "./socials";

export const Hero = () => {


    // Set timer for 3 seconds
    const [animationStart, setAnimationStart] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationStart(true);
        }, 200);
    }, []);


    return (
        <section className="w-full py-12 h-[100dvh] overflow-hidden flex justify-center items-center relative" id="welcome">
          <Boxes />
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:gap-16">
              <div className="col-span-2">
                {/* <div className="p-2 bg-gradient-to-r from-cyan-200 to-pink-200 rounded-2xl shadow-lg"> */}
                <div className={cn("mx-auto w-[60%] transition-all duration-1000 p-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full shadow-lg",
                    animationStart && "w-[90%]"
                )}>
                    <div className="p-2 bg-gradient-to-r from-emerald-300 to-lime-300 delay-500 rounded-full shadow-lg">
                        <div className="p-2 bg-gradient-to-r from-emerald-200 to-lime-200 bg-opacity-0 rounded-full shadow-lg">
                            <div className="text-center tracking-widest text-6xl sm:text-4xl md:text-7xl bg-gradient-to-r from-emerald-100 from-10% via-white via-50% to-lime-100 to-90% rounded-full p-5 shadow-2xl font-light">
                                <h1 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl py-3">
                                    jeremy quinto
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-10 text-center">
                  entry level full stack web developer with a passion for building web applications
                </p>
                <div className="mt-4 flex flex-wrap justify-center items-start space-x-4 text-gray-500">
                    <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-400 px-3 py-1 text-sm md:text-base lg:text-lg">
                        software developer
                    </div>
                    <Component className="h-4 w-4 my-auto" />
                    <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-300 px-3 py-1 text-sm md:text-base lg:text-lg">
                        full-stack
                    </div>
                    <Component className="hidden lg:inline-block h-4 w-4 my-auto" />
                    <div className="block lg:inline-block rounded-lg bg-white shadow-2xl mt-3 lg:mt-0 border-2 border-lime-400 px-3 py-1 text-sm md:text-base lg:text-lg">
                        bay area
                    </div>
                </div>
              </div>
            </div>
            <Socials />
          </div>
        </section>
    );
}