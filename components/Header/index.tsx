import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  const Links = [
    {
      label: "Mining",
      href: "#mining",
    },
    {
      label: "Tokenomics",
      href: "#tokenomics",
    },
    {
      label: "RoadMap",
      href: "#road_map",
    },
    {
      label: "Airdrop",
      href: "#airdrop",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ];

  return (
    <header
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.06)",
      }}
      className="  fixed  z-50   left-0 right-0  backdrop-blur-[10px]   top-6 flex items-center container justify-between rounded-full px-7 py-4"
    >
      <Link href={"/"} className=" inline-flex items-center  space-x-3">
        <Image alt="dogoshi" src={"/images/Logo.svg"} width={42} height={42} />
        <span className=" text-t-28 font-extrabold text-white">Dogoshi</span>
      </Link>
      <nav className=" hidden xl:flex items-center space-x-[40px]">
        {Links.map((l, i) => (
          <Link
            className=" text-lg font-medium text-dark-50"
            href={l.href}
            key={i}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <Button>Buy Now</Button>
    </header>
  );
};

export default Header;
