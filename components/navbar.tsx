import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="px-5 lg:px-8 h-14 flex items-center top-0 fixed w-[100dvw]">
            <Link className="flex items-center justify-center" href="#">
              <div className="rounded-full p-[0.5rem] px-[0.6rem] bg-white shadow-2xl border-[1px] border-slate-500 flex justify-center">
                <CodeIcon className="h-6 w-6" />
              </div>
                <span className="sr-only">Jeremy Quinto</span>
            </Link>
            <nav className="ml-auto mr-5 flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
                  skills
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
                  projects
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#bio">
                  bio
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#blog">
                  blog
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                  contact
              </Link>
            </nav>
        </header>
    )
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