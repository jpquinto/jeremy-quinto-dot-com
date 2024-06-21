"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(60).fill(1);
  const cols = new Array(50).fill(1);
  let colors = [
    // "--sky-100",
    // "--cyan-100",
    // "--blue-100",
    // "--pink-100",
    // "--rose-100",
    // "--fuchsia-100",
    "--emerald-100",
    "--emerald-200",
    "--green-100",
    "--green-200",
    "--lime-100",
    "--lime-200",
    "--white",
    "--white",
    "--white",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomDelay = () => {
    return (Math.random() * 10);
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) scale(0.8) skewY(14deg) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "fixed left-1/4 p-4 top-0 flex w-full h-full -z-20",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-200 relative opacity-70"
        >
          {cols.map((_, j) => (
            <motion.div
              animate={{
                backgroundColor: [
                  `var(--white)`,
                  `var(${getRandomColor()})`,
                  `var(--white)`,
                ],
                transition: {
                  duration: 2, // Increase duration to make flicker slower
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: getRandomDelay(),
                },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-slate-400 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none"
                  role="presentation"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
