import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Socials = () => {
    return (
        <div className="absolute bottom-5 right-0 z-20 bg-gradient-to-t from-emerald-300 to-lime-300 rounded-full shadow-lg m-5">
            <div className="rounded-full p-2 py-3 lg:p-3 lg:py-5 bg-white hover:bg-slate-100 transition-colors flex flex-col space-y-3 m-2 shadow-inner">
                <div className="h-7 w-7">
                    <Link
                        href="https://github.com/jpquinto"
                        target="_blank"
                        title="GitHub"
                        aria-label="GitHub (opens in a new tab)"
                    >
                        <FontAwesomeIcon icon={faGithub} className="h-7 w-7 my-auto text-[#25292d] hover:text-[#99a8be] transition-colors" />
                    </Link>
                </div>
                <div className="h-7 w-7">
                    <Link
                        href="https://www.linkedin.com/in/jeremy-quinto/"
                        target="_blank"
                        title="LinkedIn"
                        aria-label="LinkedIn (opens in a new tab)"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7 my-auto text-[#25292d] hover:text-[#0A66C2] transition-colors" />
                    </Link>
                </div>
                <div className="h-7 w-7" >
                    <Link
                        href="https://blog.jeremyquinto.com/"
                        target="_blank"
                        title="Blog"
                        aria-label="Blog (opens in a new tab)"
                    >
                        <FontAwesomeIcon icon={faBlog} className="h-7 w-7 my-auto text-[#25292d] hover:text-slate-400 transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    )
}