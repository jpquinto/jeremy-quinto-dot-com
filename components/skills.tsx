

export const Skills = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg" id="skills">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">#skills</div>
                <h2 className="text-4xl tracking-tight sm:text-6xl">expertise <span className="text-4xl text-muted-foreground font-light">&&</span> capabilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  jeremy quinto is a skilled software developer with expertise in a variety of technologies and frameworks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">frontend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  proficient in React, Next.js, Tailwind, and more for building responsive and interactive user interfaces
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">backend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  experienced in Node.js for building scalable and secure server-side applications
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">database management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  knowledgeable in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">cloud</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  familiar with cloud platforms like AWS and Google Cloud
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  capable of implementing authentication mechanisms in OAuth 2.0 and JWT
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">seo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  knowledgeable in optimizing websites for search engines
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}