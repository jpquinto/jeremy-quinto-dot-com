"use client";

import Image from "next/image";
import { GitHubLink } from "../ui/github-link";

export const PortfolioProject = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-2xl">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        <Image
          src="/img/background-boxes.png"
          alt="Background Boxes"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0 object-cover"
        />
      </div>
      {/* Content */}
      <div className="justify-center space-y-6 p-5 md:p-8 relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/favicon.ico"
              alt="Me"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight pb-2">
              personal portfolio
            </h2>
            <p className="text-xl text-gray-600 italic">
              you{`'`}re lookin at it
              {/* And YOU are lookin at the Git repo, apparently */}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:items-end space-y-5">
          {/* Whatcha lookin' at? */}
          <GitHubLink
            url={"https://github.com/jpquinto/jeremy-quinto-dot-com"}
          />
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">
              AWS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
