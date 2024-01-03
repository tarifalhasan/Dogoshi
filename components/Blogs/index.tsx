"use client";
import { useState } from "react";

import { cn } from "@/utils";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import BlogCard, { BlogProps } from "../shared/BlogCard";

const Blogs = () => {
  const BlogDummyData: BlogProps[] = [
    {
      title:
        "Polychain Capital and Hack VC Lead $18 Million Funding Round for Bitcoin Staking Protocol Babylon",
      images: "/images/blogs/1.png",
    },
    {
      title:
        "Polychain Capital and Hack VC Lead $18 Million Funding Round for Bitcoin Staking Protocol Babylon",
      images: "/images/blogs/2.png",
    },
    {
      title:
        "Polychain Capital and Hack VC Lead $18 Million Funding Round for Bitcoin Staking Protocol Babylon",
      images: "/images/blogs/3.png",
    },
    {
      title:
        "Polychain Capital and Hack VC Lead $18 Million Funding Round for Bitcoin Staking Protocol Babylon",
      images: "/images/blogs/4.png",
    },
    {
      title:
        "Polychain Capital and Hack VC Lead $18 Million Funding Round for Bitcoin Staking Protocol Babylon",
      images: "/images/blogs/1.png",
    },
  ];
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? BlogDummyData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === BlogDummyData.length - 1 ? 0 : prev + 1
    );
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setStartScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3; // You can adjust the multiplier for smoother or faster scrolling
    e.currentTarget.scrollLeft = startScrollLeft - walk;
  };

  return (
    <section
      id="blogs"
      className=" my-[30px] my:py-[70px] lg:my-[100px]  container"
    >
      <div className="pb-10 flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
        <h2 className="text-4xl md:text-6xl ">Our Blogs</h2>
        <div className="flex gap-x-6 items-cente">
          <button onClick={prevSlide} disabled={currentSlide === 0}>
            <GoArrowLeft
              className={cn(
                "w-6 h-6 text-black",
                currentSlide === 0 ? "opacity-40" : ""
              )}
            />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === BlogDummyData.length - 1}
          >
            <GoArrowRight
              className={cn(
                "w-6 h-6 text-black",
                currentSlide === BlogDummyData.length - 1 ? "opacity-40" : ""
              )}
            />
          </button>
        </div>
      </div>
      <div className=" overflow-hidden relative">
        <div
          className="flex gap-x-6 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (344 + 24)}px)`, // Assuming PopularExpertsCard width is 344px with a gap of 24px
            width: `${BlogDummyData.length * (344 + 24)}px`, // Adjust width based on the number of cards
          }}
        >
          {BlogDummyData.map((data, index) => (
            <BlogCard
              key={index}
              title={data.title}
              images={data.images}
              slug={data.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
