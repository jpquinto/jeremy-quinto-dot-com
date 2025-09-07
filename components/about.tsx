import { Component } from "lucide-react";

export const About = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg"
      id="about"
    >
      <div className="container space-y-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">
              #bio
            </div>
            <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">
              about me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              learn more about me, outside of the technical stuff
            </p>
          </div>
        </div>
        <Component
          role="presentation"
          className="text-gray-500 h-4 w-4 mx-auto"
        />
        <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 text-justify">
          <div className="h-full grid gap-1 hover:bg-slate-100 transition-all hover:shadow-md p-2 rounded-xl">
            <p role="heading" className="text-3xl">
              🎓
            </p>
            <h3 className="text-xl font-bold tracking-tight">education</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              i graduated from UC San Diego in summer 2023 with a B.S. in
              Mathematics - Computer Science and a minor in Data Science
            </p>
          </div>
          <div className="h-full grid gap-1 hover:bg-slate-100 transition-all hover:shadow-md p-2 rounded-xl">
            <p role="heading" className="text-3xl">
              🌉
            </p>
            <h3 className="text-xl font-bold tracking-tight">bay area</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              i was born and raised in the san francisco bay area, where i am
              currently living. i have never lived outside California
            </p>
          </div>
          <div className="h-full grid gap-1 hover:bg-slate-100 transition-all hover:shadow-md p-2 rounded-xl">
            <p role="heading" className="text-3xl">
              🏀
            </p>
            <h3 className="text-xl font-bold tracking-tight">hobbies</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              i love basketball, my favorite team is the Golden State Warriors!
              i also dabble in music production for fun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
