"use client";

import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Button } from "../ui/button";

const BlogHeader = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const Links = [
    {
      label: "Mining",
      href: "/#mining",
    },
    {
      label: "Tokenomics",
      href: "/#tokenomics",
    },
    {
      label: "RoadMap",
      href: "/#road_map",
    },
    {
      label: "Airdrop",
      href: "#airdrop",
    },
    {
      label: "Blog",
      href: "/blogs",
    },
  ];

  return (
    <>
      <header
        style={{
          background: "rgba(0, 0, 0, 0.04)",
        }}
        className="  fixed left-0   z-50   l right-0  backdrop-blur-[10px]   mt-4 flex items-center container justify-between rounded-full px-7 py-4"
      >
        <Link href={"/"} className=" inline-flex items-center  space-x-3">
          <Image
            className=" w-8 h-8 sm:w-auto sm:h-auto"
            alt="dogoshi logo"
            src={"/images/Logo.svg"}
            width={42}
            height={42}
          />
          <span className="  text-2xl font-extrabold text-black">Dogoshi</span>
        </Link>
        <nav className=" hidden xl:flex items-center space-x-[40px]">
          {Links.map((l, i) => (
            <Link
              className=" hover:underline text-lg font-medium text-black"
              href={l.href}
              key={i}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button
          onClick={() => router.push("/whitepaper")}
          className=" hidden lg:block bg-secondary"
        >
          LightPaper
        </Button>
        <button
          style={{
            background: "rgba(255, 255, 255, 0.10)",
          }}
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className=" px-[14px] py-[7px] border lg:hidden text-base font-medium tracking-[0.72px] rounded-full text-black"
        >
          Menu
        </button>
      </header>

      <div
        className={cn(
          "z-[999] w-full min-h-screen h-full fixed bg-black top-0 duration-500 transition ",

          isOpenMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className=" container py-5">
          <div className="flex items-center justify-between">
            <Link href={"/"} className=" inline-flex items-center  space-x-3">
              <Image
                className=" w-8 h-8 sm:w-auto sm:h-auto"
                alt="dogoshi"
                src={"/images/Logo.svg"}
                width={42}
                height={42}
              />
              <span className="  text-2xl font-extrabold text-white">
                Dogoshi
              </span>
            </Link>
            <button onClick={() => setIsOpenMenu(false)}>
              <MdClose className="w-8 h-8 text-white" />
            </button>
          </div>
          <nav className=" pt-4 flex flex-col items-center gap-y-4">
            {Links.map((l, i) => (
              <Link
                onClick={() => setIsOpenMenu(false)}
                className=" hover:underline text-lg font-medium text-dark-50"
                href={l.href}
                key={i}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className=" pt-4 flex justify-center">
            <Button
              onClick={() => router.push("/whitepaper")}
              className=" bg-secondary"
            >
              LightPaper
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
