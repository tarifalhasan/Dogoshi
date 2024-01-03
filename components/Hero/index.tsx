import { TokenList } from "@/constant";
import { cn } from "@/utils";
import Image from "next/image";
import Header from "../Header";
import { Button } from "../ui/button";

const Hero = () => (
  <div className=" relative overflow-hidden pb-[3%] n bg-black">
    <Header />
    <div className="pt-[160px]">
      <div className="flex-col flex items-center space-y-[25px]">
        <div className="flex  flex-col -space-y-6 items-center">
          <div className=" inline-flex space-x-4">
            <h2 className=" text-[35px] md:text-[60px] lg:text-[80px] text-white font-extrabold">
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
          <div>
            <h2 className=" text-[35px] sm:text-[60px] lg:text-[80px] inline-flex text-center font-extrabold tracking-[1.6px] bg-clip-text g_txt  bg-gradient-2">
              Dogoshi
            </h2>
          </div>
        </div>
        <p className=" text-2xl text-white font-medium tracking-[0.72px]">
          Mine, Use, Earn
        </p>
        <Button variant={"secondary"}>Buy Now</Button>
      </div>
      <div
        className={cn(
          " max-w-[1738px] container flex-wrap xl:flex-nowrap mx-auto  token_list  pt-[40px] gap-3 grid grid-cols-3 md:flex  justify-between"
        )}
      >
        {TokenList.map((token, index) => (
          <div key={token.id}>
            <div
              style={{
                transform: `rotate(${token.roateX}deg) translateY(${token.roateY}%)`,
              }}
              className={cn(
                "curved-token hidden xl:block relative ",
                "transform "
              )}
            >
              <Image
                className=" "
                src={token.icon}
                alt="dsfdf"
                height={133.952}
                width={130.456}
              />
            </div>
            <div
              className={cn("curved-token xl:hidden  relative ", "transform ")}
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
    </div>
  </div>
);

export default Hero;
