import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import getAllBlogs from "@/services/getAllBlogs";
import { BlogCard } from "@/types";
import TrandingBlogCard from "./TrandingBlogCard";

const TrandingNewsCarusel = async () => {
  const data: BlogCard[] = await getAllBlogs();

  return (
    <div className=" bg-[#E8F1EE] px-5 pb-12 pt-8 rounded-lg xl:rounded-xl">
      <div className=" pb-8 pt-3">
        <h2>Trending News</h2>
      </div>
      <Carousel>
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem className="md:basis-1/2" key={index}>
              <TrandingBlogCard
                mainImage={item.mainImage}
                title={item.title}
                publishedAt={item.publishedAt}
                category={item.category.title}
                currentSlug={item.currentSlug}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TrandingNewsCarusel;
