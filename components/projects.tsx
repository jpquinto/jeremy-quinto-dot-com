import { Component } from "lucide-react"
import Link from "next/link"
import { ProductParallax } from "./project-background"

export const Projects = () => {

    const projects = [
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/1.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/2.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/3.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/4.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/5.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/6.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/7.png"
      },
      {
        title: "NoHire",
        link: "",
        thumbnail: "/img/projects/1/8.png"
      },
    ]

    return (
        <section className="w-full bg-gray-100 shadow-lg relative" id="projects">
          <div className="container space-y-12 px-4 md:px-6 translate-y-[10rem]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-white shadow-2xl px-3 py-1">#projects</div>
                <h2 className="text-4xl tracking-tight sm:text-6xl">projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  check out some of my full stack projects
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-start space-x-4 text-gray-500">
                <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-400 px-3 py-1 text-lg">
                    NoHire
                </div>
                <Component className="h-4 w-4 my-auto" />
                <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-green-300 px-3 py-1 text-lg">
                    The Carbon Crucible
                </div>
                <Component className="h-4 w-4 my-auto" />
                <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-lime-400 px-3 py-1 text-lg">
                    Ecommerce CMS
                </div>
                <Component className="h-4 w-4 my-auto" />
                <div className="inline-block rounded-lg bg-white shadow-2xl border-2 border-lime-400 px-3 py-1 text-lg">
                    Portfolio (deprecated)
                </div>
            </div>
          </div>
          <ProductParallax 
            products={projects}
          />
        </section>
    )
}