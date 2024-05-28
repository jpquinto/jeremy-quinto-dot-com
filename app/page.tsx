import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { BlogListing } from "@/components/blog-listing";

export default function Home() {
  return (
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <BlogListing />
        <Contact />
      </main>
  );
}

