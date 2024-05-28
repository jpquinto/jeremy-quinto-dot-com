import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm">
            <Link className="flex items-center justify-center" href="#">
                <CodeIcon className="h-6 w-6" />
                <span className="sr-only">Jeremy Quinto</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Skills
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Blog
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Contact
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