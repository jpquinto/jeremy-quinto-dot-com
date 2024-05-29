'use client';

import { Component } from "lucide-react"
import { ProjectParallax } from "./project-background"
import { projectData } from "@/project-data"
import { useState } from "react"
import { cn } from "@/lib/utils";

export const Projects = () => {

    const [currentProject, setCurrentProject] = useState(0);

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
                  onClick={() => setCurrentProject(0)}
                  className={cn("inline-block rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-lime-100 transition-all",
                    currentProject === 0 && "bg-lime-100 border-lime-400"
                  )}
                >
                    NoHire
                </button>
                <Component className="h-4 w-4 my-auto" />
                <button 
                  onClick={() => setCurrentProject(1)}
                  className={cn("inline-block rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-green-100 transition-all",
                    currentProject === 1 && "bg-green-100 border-green-400"
                  )}
                >
                    The Carbon Crucible
                </button>
                <Component className="h-4 w-4 my-auto" />
                <button
                  onClick={() => setCurrentProject(2)}
                  className={cn("inline-block rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-green-100 transition-all",
                    currentProject === 2 && "bg-green-100 border-green-400"
                  )}
                >
                    tutoring website
                </button>
                <Component className="h-4 w-4 my-auto" />
                <button
                  onClick={() => setCurrentProject(3)}
                  className={cn("inline-block rounded-lg bg-white shadow-2xl border-2 border-gray-200 px-3 py-1 text-lg hover:shadow-md hover:bg-lime-100 transition-all",
                    currentProject === 3 && "bg-lime-100 border-lime-400"
                  )}
                >
                    jeremyquinto.com <span className="text-sm text-red-300">(deprecated)</span>
                </button>
            </div>
          </div>
          <ProjectParallax 
            project={projectData[currentProject]}
          />
        </section>
    )
}