'use client';

import { ArrowLeft, ArrowRight, Component } from "lucide-react"
import { ProjectParallax } from "./project-background"
import { projectData } from "@/project-data"
import { useState } from "react"
import { cn } from "@/lib/utils";

export const Projects = () => {

    const [currentProject, setCurrentProject] = useState(0);

    const handlePrevious = () => {
      setCurrentProject((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentProject((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="pt-20 w-full bg-gray-100 shadow-lg relative overflow-hidden z-0" id="projects">
          <div className="mt-10 container space-y-4 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-white shadow-2xl px-3 py-1">#projects</div>
                <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  check out some of my full stack projects
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start space-x-4 text-gray-500 z-50">
                <button 
                  onClick={handlePrevious}
                  className={cn("flex group rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-lime-100 transition-all",
                  )}
                >
                    <span className="sr-only">previous project</span>
                    <ArrowLeft className="h-4 w-4 my-auto mr-2 group-hover:-translate-x-1 transition-transform" />
                    prev.js
                </button>
                <Component className="h-4 w-4 my-auto" />
                <button 
                  onClick={handleNext}
                  className={cn("flex group rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-green-100 transition-all",
                  )}
                >
                    <span className="sr-only">next project</span>
                    next.js
                    <ArrowRight className="h-4 w-4 my-auto ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="flex justify-center items-center">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className={cn("w-3 h-3 bg-gray-400 rounded-full mx-1", currentProject === index && "bg-emerald-300")} />
              ))}
            </div>
          </div>
          <ProjectParallax 
            project={projectData[currentProject]}
          />
        </section>
    )
}