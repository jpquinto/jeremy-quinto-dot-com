"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ProductParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  const staticRotateX = 30;
  const staticOpacity = 0.7;
  const staticRotateY = -10;
  const staticRotateZ = 20;
  const staticTranslateY = -400;
  return (
    <div
      className="h-[100dvh] pt-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:2000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
            rotateX: staticRotateX,
            rotateY: staticRotateY,
            rotateZ: staticRotateZ,
            translateY: staticTranslateY,
            opacity: staticOpacity,
        }}
        className="-z-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        NoHire
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 mb-5 font-semibold">
        the all-in-one tool for keeping track of your job application process
      </p>
      <p className="max-w-2xl text-base md:text-xl mt-8 mb-5">
        created using Next.js and Convex
      </p>
      <div className="space-x-4">
        <Link
          href={'/'}
          className="bg-gray-800 text-white rounded-lg p-2"
          >
          github
        </Link>
        <Link
          href={'/'}
          className="bg-gray-800 text-white rounded-lg p-2"
          >
          website
        </Link>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[25rem] h-[15rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
