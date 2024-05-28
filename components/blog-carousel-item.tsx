import { BlogPost } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";


interface BlogCarouselItemProps {
    post: BlogPost;
}

export const BlogCarouselItem = ({
    post,
}: BlogCarouselItemProps) => {
    return (
        <Link
            href={post.url} 
            className="my-10 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg basis-1/3 group hover:-translate-y-1 transition-transform duration-500"
            target="_blank"
        >
            <div className="overflow-hidden w-full h-48 rounded-lg relative">
                <Image src={post.coverImage.url} alt={post.title} className="object-cover group-hover:scale-105 transition-transform duration-500" fill />
            </div>
            <div className="flex flex-col items-start justify-start w-full h-full p-4">
                <p className="text-sm text-gray-500">{format(post.publishedAt, "PPP")} • {post.readTimeInMinutes} min read</p>
                <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                <div className="flex space-x-2 mt-2">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="inline-block text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{tag.name.toLowerCase()}</span>
                    ))}
                </div>
                <Link href={post.url} className="mt-4 text-sm text-blue-500 hover:underline">read →</Link>
            </div>
        </Link>
    )
}