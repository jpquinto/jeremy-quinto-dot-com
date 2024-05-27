import Image from "next/image";
import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  John Doe's Software Development Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Experienced software developer with a passion for building innovative and user-friendly applications.
                </p>
                <div className="mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 justify-center">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Software Developer
                </div>
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Full-Stack</div>
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  React, Node.js
                </div>
              </div>
            </div>
            <Carousel className="w-full max-w-[1270px] mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img
                    alt="Hero"
                    className="aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="1270"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Hero"
                    className="aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="1270"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Hero"
                    className="aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="1270"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expertise and Capabilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  John Doe is a skilled software developer with expertise in a variety of technologies and frameworks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Front-End Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Proficient in React, Angular, and Vue.js for building responsive and interactive user interfaces.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Back-End Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experienced in Node.js, Express, and Django for building scalable and secure server-side applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Database Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Knowledgeable in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">DevOps and Cloud</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Familiar with containerization, CI/CD, and cloud platforms like AWS, Azure, and Google Cloud.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mobile Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experienced in building mobile apps using React Native and Flutter.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Testing and Quality Assurance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Proficient in writing unit, integration, and end-to-end tests using frameworks like Jest, Cypress, and
                  Selenium.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of the projects John Doe has worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Project 1</h3>
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
                <img
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4 bg-white dark:bg-gray-950">
                  <h3 className="text-lg font-bold">Project 2</h3>
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
                <img
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
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
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as
                soon as possible.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <Input className="max-w-lg flex-1" placeholder="Name" type="text" />
                <Input className="max-w-lg flex-1" placeholder="Email" type="email" />
                <Textarea className="max-w-lg flex-1" placeholder="Message" />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CodeIcon({
  className,
}: {
  className: string,
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}