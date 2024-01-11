import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { RxCaretRight } from "react-icons/rx";

export interface BlogProps {
  mainImage: any;
  title: string;
  currentSlug: string;
}
const BlogCard: FC<BlogProps> = ({ mainImage, title, currentSlug }) => {
  console.log(currentSlug);
  return (
    <div className="  overflow-hidden bg-white rounded-2xl w-full ">
      <Image
        src={urlForImage(mainImage)}
        alt={title}
        className=" w-full h-[215px] object-cover"
        width={344}
        height={215}
        quality={90}
      />
      <div className=" px-8 py-8 space-y-3">
        <p className="text-xl  font-medium">{title.slice(0, 50)}</p>
        <div className=" ">
          <Link
            className=" h-[28px]  inline-flex border border-[#5E5E5E] text-[#5E5E5E] px-3 py-2 text-xs rounded-full hover:bg-secondary  hover:text-black"
            href={`/blogs/${currentSlug}`}
          >
            Read Now <RxCaretRight className="w-[5px] h-[5px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
