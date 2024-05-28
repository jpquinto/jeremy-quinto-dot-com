import Link from "next/link"

export const Projects = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 shadow-lg" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-white shadow-2xl px-3 py-1">#projects</div>
                <h2 className="text-4xl tracking-tight sm:text-6xl">projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  check out some of my full stack projects
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="text-lg font-bold">NoHire</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    A web application built with React and Node.js.
                  </p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="text-lg font-bold">The Carbon Crucible + CMS</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">A mobile app built with React Native.</p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* <img
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                /> */}
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    A full-stack web application built with Next.js and Express.
                  </p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}