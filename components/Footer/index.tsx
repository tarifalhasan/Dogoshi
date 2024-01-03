import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" relative overflow-hidden   bg-dark-1000 flex flex-col items-center py-[150px]">
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
            <Link href={"/"} target="_blank">
              <FaXTwitter className=" w-10 h-10  text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaYoutube className=" w-10 h-10  text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaDiscord className=" w-10 h-10  text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"} target="_blank">
              <FaInstagram className=" w-10 h-10  text-white" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[588px] h-[470px] transform rotate-[-67.22deg] rounded-full bg-tblub blur-[300px] z-10 absolute translate-y-[60%] " />
      <div className="w-[488px] hidden lg:block h-[370px] transform  left-[55%] rotate-[-67.22deg] rounded-full bg-f2-bulp blur-[223px] z-20 absolute translate-y-[80%] "></div>
    </footer>
  );
};

export default Footer;
