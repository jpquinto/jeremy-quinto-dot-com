'use client';
import { Component } from "lucide-react";
import { Boxes } from "./ui/background-boxes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {


    // Set timer for 3 seconds
    const [animationStart, setAnimationStart] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationStart(true);
        }, 200);
    }, []);


    return (
        <section className="w-full py-12 h-[100dvh] overflow-hidden flex justify-center items-center">
          <Boxes />
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:gap-16">
              <div className="col-span-2">
                {/* <div className="p-2 bg-gradient-to-r from-cyan-200 to-pink-200 rounded-2xl shadow-lg"> */}
                <div className={cn("mx-auto w-[80%] transition-all duration-1000 p-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full shadow-lg",
                    animationStart && "w-full"
                )}>
                    <div className="p-3 bg-gradient-to-r from-emerald-300 to-lime-300 delay-500 rounded-full shadow-lg">
                        <div className="p-4 bg-gradient-to-r from-emerald-200 to-lime-200 bg-opacity-0 rounded-full shadow-lg">
                            <h1 className="text-center tracking-wider text-6xl sm:text-4xl md:text-7xl bg-white rounded-full p-5 shadow-2xl">
                            Jeremy Quinto
                            </h1>
                        </div>
                    </div>
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4 text-center">
                  Experienced software developer with a passion for building innovative and user-friendly applications.
                </p>
                <div className="mt-4 flex justify-center items-start space-x-4 text-gray-500">
                    <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-400 px-3 py-1 text-lg">
                        Software Developer
                    </div>
                    <Component className="h-4 w-4 my-auto" />
                    <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-300 px-3 py-1 text-lg">
                        Full-Stack
                    </div>
                    <Component className="h-4 w-4 my-auto" />
                    <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-lime-400 px-3 py-1 text-lg">
                        Bay Area
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}