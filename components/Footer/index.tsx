import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowIcon } from "../svgs/incons";

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
            <Link href={"https://discord.gg/PRSm5ekPPh"} target="_blank">
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
        <div className="flex py-8 relative overflow-hidden z-40  items-start justify-between flex-wrap lg:max-w-[85%] lg:flex-nowrap xl:max-w-[70%]">
          <div className=" space-y-5">
            <div>
              <h2 className=" text-lg sm:text-2xl font-bold text-white">
                Learn
              </h2>
            </div>
            <ul className=" space-y-2">
              <li>
                <p className=" text-sm sm:text-base text-white font-medium">
                  Bitcoin Staking Protocol
                </p>
              </li>
              <li>
                <p className=" text-sm sm:text-base text-white font-medium">
                  Bitcoin Staking Litepaper
                </p>
              </li>
            </ul>
          </div>
          <div className=" space-y-5">
            <div>
              <h2 className=" text-lg sm:text-2xl font-bold text-white">
                About
              </h2>
            </div>
            <ul className=" space-y-2">
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Team{" "}
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Media
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-5">
            <div>
              <h2 className=" text-lg sm:text-2xl font-bold text-white">
                Resources
              </h2>
            </div>
            <ul className=" space-y-2">
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Privacy Policy
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Cookies
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Terms of Use
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <p className=" text-sm sm:text-base text-white font-medium">
                    Whitepaper
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-5">
            <div className="  inline-flex items-center gap-[5px]">
              <h2 className=" text-lg sm:text-2xl font-bold text-white">
                About
              </h2>
              <ArrowIcon />
            </div>
            <ul className=" space-y-2">
              <li>
                <Link href={"/"}>
                  <div className=" inline-flex items-center gap-[5px]">
                    <p className=" text-sm sm:text-base text-white font-medium">
                      Faqs
                    </p>
                    <ArrowIcon />
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div className=" inline-flex items-center gap-[5px]">
                    <p className=" text-sm sm:text-base text-white font-medium">
                      Tokenomics
                    </p>
                    <ArrowIcon />
                  </div>
                </Link>
              </li>{" "}
              <li>
                <Link href={"/"}>
                  <div className=" inline-flex items-center gap-[5px]">
                    <p className=" text-sm sm:text-base text-white font-medium">
                      Ecosystem
                    </p>
                    <ArrowIcon />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
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
