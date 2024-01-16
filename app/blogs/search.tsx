"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/blogs`);
    } else {
      router.push(`/blogs?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="flex rounded-full bg-black/10 border border-black/5 items-center px-7 py-5 gap-3">
      <IoSearch className=" w-6 h-6 text-black" />
      <input
        value={text}
        placeholder="Search blogs..."
        onChange={(e) => setText(e.target.value)}
        className="  text-lg border-none  bg-transparent focus:outline-none outline-none flex-1 font-medium text-black"
      />
    </div>
  );
};

export default Search;
