import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" relative overflow-hidden   bg-dark-1000 flex flex-col items-center pt-[150px] pb-[40px] gap-5">
      <div className="container ">
        <div className="flex items-center justify-center space-x-[-12.1px]">
          <Image
            width={55.245}
            height={55.245}
            src={"/images/foter_assets_1.svg"}
            alt="footer"
            className=" relative z-10"
          />
          <Image
            width={55.245}
            height={55.245}
            src={"/images/foter_assets_2.svg"}
            alt="footer"
            className=" relative z-20"
          />
          <Image
            width={55.245}
            height={55.245}
            src={"/images/foter_assets_1.svg"}
            alt="footer"
            className=" relative z-10"
          />
        </div>
        <h2 className="text-center pt-5 text-[2.5rem] leading-[1.2] md:text-6xl font-normal text-white">
          Join Our <br className=" lg:hidden" />
          <span className=" bg-clip-text font-bold bg-g3 g_txt">Community</span>
        </h2>
        <ul className=" relative z-40 flex pt-8 justify-center items-center space-x-[38px]">
          <li>
            <Link href={"https://twitter.com/DogoshiInfo"} target="_blank">
              <FaXTwitter className=" w-10 h-10  text-white transition-all duration-300  hover:text-secondary " />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaYoutube className=" w-10 h-10 transition-all duration-300  hover:text-secondary  text-white" />
            </Link>
          </li>
          <li>
            <Link href={"https://discord.gg/UdsDJUqz"} target="_blank">
              <FaDiscord className=" w-10 h-10 transition-all duration-300  hover:text-secondary  text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaTelegram className=" w-10 h-10 transition-all duration-300  hover:text-secondary  text-white" />
            </Link>
          </li>
        </ul>
      </div>
      <div className=" container ">
        <div className=" py-5">
          <div
            className=" h-[1px] w-full"
            style={{
              background: "rgba(255, 255, 255, 0.32)",
            }}
          ></div>
        </div>
        <div className="">
          <div className=" py-5">
            <div
              className=" h-[1px] w-full"
              style={{
                background: "rgba(255, 255, 255, 0.32)",
              }}
            ></div>
          </div>
          <div className=" flex items-center justify-between">
            <Link href={"/"} className=" inline-flex items-center  space-x-3">
              <Image
                className=" w-8 h-8 sm:w-auto sm:h-auto"
                alt="dogoshi logo"
                src={"/images/Logo.svg"}
                width={42}
                height={42}
              />
              <span className="  text-2xl font-extrabold text-white">
                Dogoshi
              </span>
            </Link>
            <p
              className=" text-xs sm:text-base font-normal"
              style={{
                color: "rgba(255, 255, 255, 0.80)",
              }}
            >
              © 2024 Dogoshi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[588px] h-[470px] transform rotate-[-67.22deg] rounded-full bg-tblub blur-[300px] z-10 absolute translate-y-[60%] " />
      <div className="w-[488px] hidden lg:block h-[370px] transform  left-[55%] rotate-[-67.22deg] rounded-full bg-f2-bulp blur-[223px] z-20 absolute translate-y-[80%] "></div>
    </footer>
  );
};

export default Footer;
