import Image from "next/image";
import { FC } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Button } from "../ui/button";

export interface BlogProps {
  images: string;
  title: string;
  slug?: string;
}
const BlogCard: FC<BlogProps> = ({ images, title, slug }) => {
  return (
    <div className="  overflow-hidden bg-white rounded-2xl w-full lg:max-w-[344px]">
      <Image
        src={images}
        alt={title}
        className=" w-full h-[215px] object-cover"
        width={344}
        height={215}
        quality={90}
      />
      <div className=" px-8 pt-8">
        <p className="text-xl pb-12 font-medium">{title}</p>
        <div className=" pb-6">
          <Button
            className=" h-[28px] border-[#5E5E5E] text-[#5E5E5E] px-3 py-2 text-xs"
            variant={"outline"}
          >
            Read Now <RxCaretRight classNam="w-[5px] h-[5px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
