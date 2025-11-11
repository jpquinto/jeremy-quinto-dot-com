'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="top-0 fixed z-[999]">
      <div
        className={cn(
          "px-5 lg:px-8 h-14 flex items-center w-[100dvw] transition-colors duration-500 z-[999]",
          scrolled && "bg-white"
        )}
      >
        <Link
          className="hidden md:flex items-center justify-center"
          href="#"
          role="button"
        >
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Jeremy Quinto</span>
        </Link>
        <nav className="mx-auto md:ml-auto md:mr-5 flex gap-4 sm:gap-6">
          {["welcome", "skills", "projects", "about", "blog", "contact"].map(
            (section) => (
              <Link
                key={section}
                className={cn(
                  "text-sm font-medium hover:underline underline-offset-4",
                  activeSection === section ? "underline" : ""
                )}
                href={`#${section}`}
              >
                {section}
              </Link>
            )
          )}
        </nav>
      </div>
      <div className={cn("w-[100dvw] h-[50px] md:h-[100px] transition-colors duration-500 z-[999] pointer-events-none",
        scrolled && "bg-gradient-to-b from-white to-transparent"
      )}>
      </div>
    </header>
  );
};

function CodeIcon({ className }: { className: string }) {
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
  );
}
