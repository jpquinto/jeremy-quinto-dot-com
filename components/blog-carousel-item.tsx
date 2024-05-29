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
            className="grid p-4 bg-white rounded-lg shadow-lg group hover:-translate-y-1 transition-transform duration-500"
            target="_blank"
        >
            <div className="overflow-hidden w-full h-48 rounded-lg relative">
                <Image src={post.coverImage.url} alt={post.title} className="object-cover" fill />
            </div>
            <p className="mt-3 text-sm text-gray-500">{format(post.publishedAt, "PPP")} • {post.readTimeInMinutes} min read</p>
            <h3 className="mt-2 text-xl font-bold text-gray-800 line-clamp-2">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">{post.brief}</p>
            <div className="mt-2 flex space-x-2">
                {post.tags.map((tag, index) => (
                    <span key={index} className="inline-block text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{tag.name.toLowerCase()}</span>
                    ))}
            </div>
            <Link href={post.url} className="mt-4 text-sm text-blue-500 group-hover:underline ml-auto">read →</Link>
        </Link>
    )
}