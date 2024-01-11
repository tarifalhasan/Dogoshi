"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BlogCard, { BlogProps } from "../shared/BlogCard";

interface Props {
  data: BlogProps[];
}
const Blogs: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="blogs"
      className=" my-[30px] my:py-[70px] lg:my-[100px]  container"
    >
      <Carousel className="w-full">
        <CarouselContent className="-ml-[0.75rem] lg:gap-5">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-[23%]"
            >
              <BlogCard
                key={index}
                title={item.title}
                mainImage={item.mainImage}
                currentSlug={item.currentSlug}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Blogs;
