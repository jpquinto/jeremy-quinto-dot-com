"use client";

import Image from "next/image";
import { GitHubLink } from "../ui/github-link";

export const Sonanyms = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-2xl">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 opacity-70 h-1/3 w-full bg-gradient-to-t from-[#2B5078] via-[#88A9BE] to-transparent z-0"></div>
      {/* Content */}
      <div className="flex flex-col justify-center space-y-6 p-5 md:p-8 relative z-10">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight pb-2">
              sonanyms
            </h2>
            <p className="text-xl text-gray-600 italic">
              multi-player synonym guessing game
            </p>
          </div>
        </div>

        <GitHubLink url={"https://github.com/jpquinto/sonanyms"} />

        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            a basic multi-player synonym guessing game built with next.js and
            aws. players can go head to head to test their vocabulary skills by
            trying to guess synonyms for a given word. the game features
            real-time multiplayer functionality using aws websocket API Gateway
            and DynamoDB. i implemented user authentication using clerk so users
            can save their progress and level up their account.
          </p>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            i architected a pipeline to generate synonym data using the Datamuse
            API and store it in a dynamodb table, as well as a real-time
            matchmaking system that manages queues that players join. there is
            also a simple admin dashboard where i can add new words and synonyms
            to the database. coming soon!
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            AWS
          </span>
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            DynamoDB
          </span>
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            WS API Gateway
          </span>
          <span className="px-3 py-1 bg-[#4B709A] text-white rounded-full text-sm font-medium">
            Terraform
          </span>
        </div>

        <div className="w-full">
          <Image
            src={"/img/projects/sonanyms/sonanyms.png"}
            alt="Sonanyms Screenshot"
            width={600}
            height={450}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
