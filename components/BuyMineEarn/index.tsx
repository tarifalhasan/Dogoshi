import Image from "next/image";
import { ArrowRight } from "../icons";

const BuyMineEarn = () => {
  return (
    <div className=" py-12 space-y-[60px] lg:space-y-[80px] lg:py-20 container w-full">
      <div className=" flex gap-16 flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex flex-row space-y-3 lg:flex-col w-full items-center lg:items-start justify-between">
          <h4 className=" text-[40px] lg:text-[48px]">Buy</h4>
          <ArrowRight />
          <h4 className=" text-[40px] lg:text-[48px]">Mine</h4>
          <ArrowRight />
          <h4 className=" text-[40px] lg:text-[48px]">Earn</h4>
        </div>
        <Image
          className=" lg:hidden"
          alt=""
          src={"/images/mine_earn_mobile.svg"}
          width={350}
          height={543}
          quality={90}
        />
        <Image
          className="hidden flex-1 lg:block"
          alt=""
          src={"/images/mine_earn_desk.svg"}
          width={1200}
          height={543}
          quality={90}
        />
      </div>
      <div className="  bg-g1 p-[2px] rounded-[20px] max-w-[855px]   mx-auto ">
        <div className=" py-10 lg:py-[3.75rem] px-5 lg:px-[72px] rounded-[20px] bg-white space-y-[14px]">
          <h2 className=" text-2xl lg:text-4xl font-bold uppercase">
            Earn
            <span className=" bg-clip-text bg-g1 font-extrabold">$DOGOSHI</span>
          </h2>
          <p className="text-base font-normal lg:text-xl">
            The way to earn dogoshi is simple you locking your tokens and your
            earn APY on your holdings, once per year is a dogoshi halving and
            the % decreasing make it more difficult to produce them so hurry
            up!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyMineEarn;
