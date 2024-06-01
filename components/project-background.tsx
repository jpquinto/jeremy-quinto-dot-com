"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

export const ProjectParallax = ({
  project,
}: {
  project: Project;
}) => {
  const firstRow = project.images.slice(0, 5);
  const secondRow = project.images.slice(5, 10);

  const [translateX, setTranslateX] = useState(0);

  // useEffect(() => {
  //   let startTime = Date.now();
  //   let animationFrameId: number;

  //   const animate = () => {
  //     const elapsedTime = Date.now() - startTime;
  //     const sineValue = Math.sin(elapsedTime * 0.001); // Adjust the frequency by modifying the multiplier
  //     const newTranslateX = sineValue * 10; // Adjust amplitude by changing 50
  //     setTranslateX(newTranslateX);

  //     animationFrameId = requestAnimationFrame(animate);
  //   };
  //   animate();

  //   return () => cancelAnimationFrame(animationFrameId);
  // }, []);

  const staticRotateX = 30;
  const staticOpacity = 0.7;
  const staticRotateY = -10;
  const staticRotateZ = 20;
  const staticTranslateY = 20;
  return (
    <div
      className="h-[70dvh] pt-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:2000px] [transform-style:preserve-3d] z-10"
    >
      <div className="absolute -top-1/4 right-0 py-20 md:p-20">
        <Header project={project} />
      </div>
      <motion.div
        style={{
            rotateX: staticRotateX,
            rotateY: staticRotateY,
            rotateZ: staticRotateZ,
            translateX: translateX,
            translateY: staticTranslateY,
            opacity: staticOpacity,
        }}
        className="-z-20 pointer-events-none"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((image, index) => (
            <ImageCard
              url={image.url}
              key={image.url + index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((image, index) => (
            <ImageCard
              url={image.url}
              key={image.url + index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  project,
}: {
  project: Project;
}) => {
  return (
    <div className="max-w-7xl relative ml-auto py-20 md:py-40 px-4 w-full text-right">
      <h1 className="bg-gradient-to-b from-black/40 to-black/80 bg-clip-text leading-loose text-transparent drop-shadow-2xl text-2xl md:text-5xl font-bold dark:text-white pb-3">
        {project.title}
      </h1>
      <p className="text-sm md:text-xl mt-2 mb-2 font-semibold text-right">
        {project.tagline}
      </p>
      <p className="text-sm md:text-xl mb-5">
        {project.description}
      </p>
      <div className="space-x-4 h-0 overflow-visible">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            className="bg-gray-800 text-white rounded-lg p-2"
            >
            github
          </Link>
        )}
        {project.websiteUrl && (
          <Link
            href={project.websiteUrl}
            className="bg-gray-800 text-white rounded-lg p-2"
            >
            website
          </Link>
        )}
      </div>
    </div>
  );
};

export const ImageCard = ({
  url,
}: {
  url: string;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={url}
      className="group/project w-[25rem] h-[12rem] relative flex-shrink-0"
    >
      <div
        className="block group-hover/project:shadow-2xl"
      >
        <Image
          src={url}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={'project image'}
        />
      </div>
    </motion.div>
  );
};
