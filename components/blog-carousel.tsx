import { BlogPost } from "@/types"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { BlogCarouselItem } from "./blog-carousel-item";
  


interface BlogCarouselProps {
    posts: BlogPost[];
}

export const BlogCarousel = ({
    posts,
}: BlogCarouselProps) => {

    console.log(posts);
    return (
        <div className="mx-10">
            <Carousel>
                <CarouselContent>
                    {posts.map((post) => (
                        <CarouselItem key={post.slug} className="md:basis-1/2 lg:basis-1/3">
                            <BlogCarouselItem post={post} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}