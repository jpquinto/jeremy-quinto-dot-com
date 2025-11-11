'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';
import Image from "next/image";

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
          "px-5 lg:px-8 h-20 hidden sm:flex items-center w-[100dvw] transition-colors duration-500 z-[999]",
          scrolled && "bg-white"
        )}
      >
        <Link
          className={cn("opacity-0 items-center justify-center transition-opacity",
            scrolled && "opacity-100"
          )}
          href="#"
          role="button"
        >
          <Image
            src="/img/jeremy-logo.png"
            alt="Jeremy Quinto"
            width={150}
            height={50}
            className="object-contain"
          />
          <span className="sr-only">Jeremy Quinto</span>
        </Link>
        <nav className="mx-auto md:ml-auto md:mr-5 flex gap-4 sm:gap-6">
          {["welcome", "skills", "experience", "projects", "about", "blog", "contact"].map(
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

