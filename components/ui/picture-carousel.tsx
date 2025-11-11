"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PictureCarouselProps {
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  colors?: {
    buttonBg: string;
    buttonText: string;
    buttonHoverBg: string;
    dotActive: string;
    dotInactive: string;
    dotHover: string;
  };
}

interface ImageWithIndex {
  src: string;
  alt: string;
  caption: string;
  originalIndex: number;
}

export const PictureCarousel = ({ images, colors }: PictureCarouselProps) => {
  const defaultColors = {
    buttonBg: "bg-purple-50",
    buttonText: "text-lime-700",
    buttonHoverBg: "hover:bg-purple-100",
    dotActive: "bg-purple-400",
    dotInactive: "bg-purple-300/70",
    dotHover: "hover:bg-purple-400",
  };

  const colorScheme = colors || defaultColors;

  // Initialize with first image at front, rest in reverse order
  const initialImages: ImageWithIndex[] = [
    {
      ...images[0],
      originalIndex: 0,
    },
    ...images
      .slice(1)
      .reverse()
      .map((image, index) => ({
        ...image,
        originalIndex: images.length - index - 1,
      })),
  ];

  const [imageStack, setImageStack] = useState<ImageWithIndex[]>(initialImages);

  // Update imageStack when images prop changes
  useEffect(() => {
    const newImages: ImageWithIndex[] = [
      {
        ...images[0],
        originalIndex: 0,
      },
      ...images
        .slice(1)
        .reverse()
        .map((image, index) => ({
          ...image,
          originalIndex: images.length - index - 1,
        })),
    ];
    setImageStack(newImages);
  }, [images]);

  const nextImage = () => {
    setImageStack((prev) => {
      const newStack = [...prev];
      newStack.unshift(newStack.pop()!);
      return newStack;
    });
  };

  const prevImage = () => {
    setImageStack((prev) => {
      const newStack = [...prev];
      newStack.push(newStack.shift()!);
      return newStack;
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full h-[575px] max-w-3xl">
        {imageStack.map((image, index) => (
          <motion.div
            key={image.src + image.originalIndex}
            className={cn(
              "absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-opacity flex flex-col border-[1px] border-gray-200",
              index > 3 && "opacity-0"
            )}
            style={{
              transformOrigin: "bottom center",
            }}
            animate={{
              bottom: index * -10,
              scale: 1 - index * 0.05,
              zIndex: imageStack.length - index,
            }}
            transition={{
              duration: 0.5,
            }}
            onClick={nextImage}
          >
            <div className="relative w-full flex-1">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t h-[100px] from-white to-transparent"></div>
            </div>
            <div className="w-full bg-white pb-6 px-6">
              <p className="text-gray-700 text-base leading-relaxed tracking-tighter text-center italic">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-[3.5rem]">
        <button
          onClick={prevImage}
          className={cn(
            "px-6 py-3 rounded-lg transition-colors font-medium shadow-lg",
            colorScheme.buttonBg,
            colorScheme.buttonText,
            colorScheme.buttonHoverBg
          )}
          aria-label="Previous image"
        >
          ← prev.js
        </button>
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const currentIndex = imageStack[0].originalIndex;
                const diff =
                  (index - currentIndex + images.length) % images.length;
                for (let i = 0; i < diff; i++) {
                  nextImage();
                }
              }}
              className="transition-all"
              aria-label={`Go to image ${index + 1}`}
            >
              {imageStack[0].originalIndex === index ? (
                <div
                  className={cn("w-3 h-3 rounded-full", colorScheme.dotActive)}
                />
              ) : (
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    colorScheme.dotInactive,
                    colorScheme.dotHover
                  )}
                />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={nextImage}
          className={cn(
            "px-6 py-3 rounded-lg transition-colors font-medium shadow-lg",
            colorScheme.buttonBg,
            colorScheme.buttonText,
            colorScheme.buttonHoverBg
          )}
          aria-label="Next image"
        >
          next.js →
        </button>
      </div>
    </div>
  );
};
