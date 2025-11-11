"use client";

import Image from "next/image";
import { GitHubLink } from "../ui/github-link";
import { markdownToHtml } from "@/lib/markdown-to-html";

export const AWSQuizGame = () => {

  const description1 =
    "a basic **aws quiz game** built with next.js and aws to test your knowledge on over **100+ aws services**, from basic to some of the more obscure options. players can choose quizzes based on guessing the service based on a description or the icon (just for fun). the game features a serverless architecture using aws lambda functions and DynamoDB.";

  const description2 =
    "the idea for the game came as i was studying for the aws certifications. i created the quiz data by scraping the AWS documentation for service names, descriptions, and icons, and storing them in a DynamoDB table. the frontend is built with next.js and communicates with the backend using API Gateway endpoints that trigger lambda functions to fetch quiz questions and validate the answers. coming soon!";

  return (
    <div className="w-full h-full bg-white rounded-2xl overflow-hidden b-10 relative border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-2xl">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 opacity-70 h-1/3 w-full bg-gradient-to-t from-[#ff9900]/50 to-transparent z-0"></div>
      {/* Content */}
      <div className="flex flex-col justify-center space-y-6 p-5 md:p-8 relative z-10">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/img/projects/awsquizgame/logo.png"
              alt="Simple Quiz Service"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-black/80 to-black/40 bg-clip-text text-transparent drop-shadow-2xl mb-2 tracking-tight">
              simple quiz service
            </h2>
            <p className="text-xl text-gray-600 italic">basic aws quiz game</p>
          </div>
        </div>

        <GitHubLink url={"https://github.com/jpquinto/simple-quiz-service"} />

        {/* Description */}
        <div className="space-y-4">
          <p
            className="text-gray-500 dark:text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(description1),
            }}
          ></p>
          <p
            className="text-gray-500 dark:text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(description2),
            }}
          >
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            AWS
          </span>
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            DynamoDB
          </span>
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            API Gateway
          </span>
          <span className="px-3 py-1 bg-[#ff9900] text-black rounded-full text-sm font-medium">
            Terraform
          </span>
        </div>

        <div className="w-full">
          <Image
            src={"/img/projects/awsquizgame/quiz.png"}
            alt="AWS Quiz Game Screenshot"
            width={600}
            height={450}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
