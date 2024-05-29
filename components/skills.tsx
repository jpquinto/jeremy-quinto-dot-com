import { Cloud, Database, Fingerprint, Laptop, SearchCheck, Server } from "lucide-react"
import { SkillsCarousel } from "./skills-carousel"


export const Skills = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg overflow-hidden" id="skills">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">#skills</div>
                <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">expertise <span className="bg-gradient-to-b from-muted-foreground/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl font-light">&&</span> capabilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  i know technologies and tools that enable me to build full-stack web applications from scratch
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <Laptop className="group-hover:text-cyan-300 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">frontend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  proficient in React, Next.js, Tailwind, and more for building responsive and interactive user interfaces
                </p>
              </div>
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <Server className="group-hover:text-fuchsia-300 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">backend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  experienced in Node.js for building scalable and secure server-side applications
                </p>
              </div>
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <Database className="group-hover:text-green-300 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">database management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  knowledgeable in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB
                </p>
              </div>
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <Cloud className="group-hover:text-amber-500 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">cloud</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  familiar with many AWS cloud services, including S3, Lambda, Step Functions, CloudFormation
                </p>
              </div>
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <Fingerprint className="group-hover:text-red-300 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  capable of implementing authentication mechanisms using OAuth 2.0 and JWT
                </p>
              </div>
              <div className="h-full grid gap-1 hover:bg-slate-100/50 transition-all hover:shadow-md p-2 rounded-xl group">
                <SearchCheck className="group-hover:text-teal-300 transition-colors" />
                <h3 className="text-xl font-bold tracking-tight">search engine optimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  knowledgeable in optimizing websites for search engines
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <SkillsCarousel />
          </div>
        </section>
    )
}