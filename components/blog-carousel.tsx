import { BlogPost } from "@/types"
import { BlogCarouselItem } from "./blog-carousel-item";
import Link from "next/link";
  


interface BlogCarouselProps {
    posts: BlogPost[];
}

export const BlogCarousel = ({
    posts,
}: BlogCarouselProps) => {

    return (
        <div className="md:mx-10 flex justify-center flex-col">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                {posts.map((post) => (
                    <BlogCarouselItem post={post} key={post.id} />
                ))}
            </div>
            <Link href='https://blog.jeremyquinto.com/' className="mt-8 text-sm text-purple-700 hover:underline self-end">see all →</Link>
        </div>
    )
}