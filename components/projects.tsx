"use client";

import { Surfbored } from "./projects/surfbored";
import { Billboardify } from "./projects/billboardify";
import { IronCoveSolutions } from "./projects/iron-cove-solutions";
import { Sonanyms } from "./projects/sonanyms";
import { AWSQuizGame } from "./projects/aws-quiz-game";
import { Component } from "lucide-react";
import { PortfolioProject } from "./projects/portfolio";

export const Projects = () => {
  return (
    <>
      <section id="projects"></section>
      <section className="pt-20 w-full bg-white relative overflow-hidden shadow-lg">
        <div className="mt-10 container space-y-4 px-4 md:px-6 pb-40">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-5">
            <div className="space-y-2">
              <div className="inline-block text-lime-700 rounded-lg bg-lime-100 shadow-2xl px-3 py-1">
                #projects
              </div>
              <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">
                projects
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                check out some of my cool projects
              </p>
            </div>
          </div>

          <Component
            role="presentation"
            className="text-gray-500 h-4 w-4 mx-auto mb-5"
          />

          {/* Project Content */}
          <div className="space-y-10">
            <Surfbored />
            <Billboardify />
            <IronCoveSolutions />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
              <Sonanyms />
              <AWSQuizGame />
            </div>
            <PortfolioProject />
          </div>
        </div>
      </section>
    </>
  );
};
