

export const About = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg" id="about">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-purple-700 rounded-lg bg-gray-100 px-3 py-1">#bio</div>
                <h2 className="text-4xl tracking-tight sm:text-6xl">about me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  jeremy quinto is a skilled software developer with expertise in a variety of technologies and frameworks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">🎓 education</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  i graduated from UC San Diego in summer 2023 with a B.S. in Mathematics - Computer Science and a minor in Data Science
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">🌉 bay area</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  i was born and raised in the san francisco bay area, where i am currently based
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">👩🏻‍🎓 tutoring</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  for the last year, i have worked part time as a tutor, working with 15+ different students from K-12 in various math and computer science topics
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold tracking-tight">🏀 hobbies</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  i love basketball, my favorite team is the Golden State Warriors! i also dabble in music production for fun
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}