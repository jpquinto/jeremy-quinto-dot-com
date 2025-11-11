import SkipLinks from "@/components/skip-links";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { BlogListing } from "@/components/blog-listing";
import { Experience } from "@/components/experience";
import { HexGrid } from "@/components/hex-grid";

export default function Home() {
  return (
    <main className="flex-1">
      <SkipLinks />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <About />
      <BlogListing />
      <Contact />
    </main>
  );
}
