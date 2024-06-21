import Link from "next/link"


export const BlogCategories = () => {
    return (
        <>
            <div className="flex justify-center mt-10">
                <h3 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-2xl tracking-tight sm:text-4xl italic px-3 pb-3">categories</h3>
            </div>
            <div className="md:mx-10 flex justify-center flex-col">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        href='https://blog.jeremyquinto.com/series/web-development' 
                        className="h-full grid gap-1 hover:bg-white transition-all hover:shadow-md p-3 rounded-xl"
                        target="_blank"
                        aria-label="web development series (opens in new tab)"
                    >
                        <h3 className="text-xl font-bold tracking-tight">💻 web development</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            articles and tutorials involving web development, including front-end and back-end technologies
                        </p>
                        <p className="mt-4 text-sm text-blue-500 group-hover:underline ml-auto">see series →</p>
                    </Link>
                    <Link 
                        href='https://blog.jeremyquinto.com/series/algorithms'
                        className="h-full grid gap-1 hover:bg-white transition-all hover:shadow-md p-3 rounded-xl"
                        target="_blank"
                        aria-label="algorithms series (opens in new tab)"
                    >
                        <h3 className="text-xl font-bold tracking-tight">➗ algorithms</h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            articles that cover algorithms, data structures, with code snippets, examples, and explanations
                        </p>
                        <p className="mt-4 text-sm text-blue-500 group-hover:underline ml-auto">see series →</p>
                    </Link>
                </div>
            </div>
        </>
    )
}