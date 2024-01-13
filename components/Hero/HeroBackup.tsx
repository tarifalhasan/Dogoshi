import { TokenList } from "@/constant";
import { cn } from "@/utils";
import Image from "next/image";
import Header from "../Header";
import { Button } from "../ui/button";

const Hero = () => (
  <div className=" overflow-hidden relative  pb-[3%] n bg-black">
    <Header />
    <div className="pt-[80px] relative z-20">
      <div className="flex-col flex items-center space-y-[25px]">
        <div className="flex  flex-col -space-y-6 items-center">
          <div className=" hidden sm:inline-flex space-x-4">
            <h2 className=" leading-normal text-[35px] md:text-[60px] lg:text-[80px] text-white font-extrabold">
              Unlocking 21 Million
            </h2>
            <Image
              src={"/images/Cryptocurrency.svg"}
              alt="Cryptocurrency"
              width={72}
              height={72}
              className=" w-12 md:w-auto"
            />
          </div>
          <div className=" pb-4  sm:hidden space-x-4">
            <h2 className=" leading-[1.2] text-[45px] md:text-[60px] lg:text-[80px] text-white font-extrabold">
              Unlocking 21
            </h2>
            <div className=" space-x-2 flex items-center justify-center">
              <h2 className=" text-[45px] md:text-[60px] lg:text-[80px] text-white font-extrabold">
                Million
              </h2>
              <Image
                src={"/images/Cryptocurrency.svg"}
                alt="Cryptocurrency"
                width={72}
                height={72}
                className=" w-11 md:w-auto"
              />
            </div>
          </div>
          <div>
            <h2 className=" text-[45px] sm:text-[60px] lg:text-[80px] inline-flex text-center font-extrabold tracking-[1.6px] bg-clip-text g_txt  bg-gradient-2">
              Dogoshi
            </h2>
          </div>
        </div>
        <p className=" text-2xl text-white font-medium tracking-[0.72px]">
          Mine, Use, Earn
        </p>
        <Button variant={"secondary"}>Buy Now</Button>
      </div>
    </div>
    <div
      className={cn(
        " max-w-[1738px] relative z-20 container  mx-auto  token_list flex   pt-[40px] gap-3  justify-between"
      )}
    >
      {TokenList.map((token, index) => (
        <div key={token.id}>
          <div
            style={{
              transform: `rotate(${token.roateX}deg) translateY(${token.roateY}%)`,
            }}
            className={cn("curved-token   ", "transform ")}
          >
            <Image
              className=" "
              src={token.icon}
              alt="dsfdf"
              height={133.952}
              width={130.456}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="  z-10 absolute left-0 top-[-50%] w-[901px] h-[720px] rounded-full blur-[300px] bg-hero-bulp"></div>
    <div className=" w-[655px] transform -translate-x-1/2  h-[655px] absolute left-1/2 top-[45%]  rounded-full bg-f2-bulp blur-[300px]"></div>
  </div>
);

export default Hero;
