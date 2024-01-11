"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { dateFormat } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import { BlogCard } from "@/types";
import Link from "next/link";
import { FC } from "react";

const TrandingBlogCard: FC<BlogCard> = ({
  title,
  mainImage,
  category,
  publishedAt,
  currentSlug,
}) => {
  return (
    <Link
      href={`/blogs/${currentSlug}`}
      className="w-full rounded-md overflow-hidden bg-white grid items-center gap-5 sm:grid-cols-2 relative cursor-pointer "
    >
      <div className="flex  p-5 h-full flex-col justify-between">
        <p className=" text-[#F40010] text-sm font-medium">{category}</p>
        <h2 className=" text-xl xl:text-2xl font-bold text-black">{title}</h2>

        <p className="text-base font-medium text-black opacity-40">
          {dateFormat(publishedAt)}
        </p>
      </div>
      <AspectRatio ratio={3 / 2}>
        <Image
          src={urlForImage(mainImage)}
          alt={title}
          width={450}
          height={300}
          className="rounded-md object-cover h-[240px]"
        />
      </AspectRatio>
    </Link>
  );
};

export default TrandingBlogCard;
