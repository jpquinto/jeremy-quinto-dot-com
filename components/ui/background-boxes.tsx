"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(60).fill(1);
  const cols = new Array(50).fill(1);
  let colors = [
    "bg-emerald-100",
    "bg-emerald-200",
    "bg-green-100",
    "bg-green-200",
    "bg-lime-100",
    "bg-lime-200",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) scale(1.3) skewY(14deg) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "fixed left-1/4 p-4 top-0 flex w-full h-full -z-20 opacity-20",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-200 relative opacity-70"
        >
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              className={cn(
                "w-16 h-8 border-r border-t border-slate-400 relative",
                getRandomColor()
              )}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none`}
                  role="presentation"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
