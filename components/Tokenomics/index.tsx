import { cn } from "@/utils";
import Image from "next/image";

function TokenDetail({
  title,
  value,
  alignRight,
}: {
  title: string;
  value: string;
  alignRight?: boolean;
}) {
  return (
    <div className={cn(alignRight && "text-right lg:text-left")}>
      <h2 className="text-2xl lg:text-3xl font-bold text-white">{value}</h2>
      <p className="text-sm text-white  opacity-60 font-normal">{title}</p>
    </div>
  );
}
const Tokenomics = () => {
  return (
    <section id="tokenomics" className="mb-10 bg-[#060404] py-12">
      <div className=" overflow-hidden relative  ">
        <div className=" relative z-20 container ">
          <p className="text-xl text-white opacity-60 font-medium lg:text-2xl">
            Tokenomics
          </p>
          <h3 className=" text-4xl lg:text-6xl font-medium text-white">
            Block Genesis
          </h3>
          <div className=" pt-[19px]">
            <p className="text-sm text-white font-normal lg:text-xl">
              Block Genesis
            </p>
            <h3 className="text-xl lg:text-2xl text-white">3,000,000</h3>
          </div>
          <div className=" overflow-hidden py-20 lg:pt-0">
            <Image
              width={1280}
              height={650}
              className=" hidden md:block mx-auto"
              src={"/images/tokenomics_desk.png"}
              alt="/"
              quality={90}
            />
            <Image
              width={350}
              height={493}
              className="  md:hidden mx-auto w-full h-full object-cover"
              src={"/images/tokenomics_mobile.png"}
              alt="/"
            />
          </div>
        </div>
        <div className=" z-10  lg:hidden  absolute left-[55%] top-[5%] w-[594px] h-[475px] rounded-full blur-[197px] bg-tblub" />
        <div className=" hidden lg:block z-10 absolute -left-[15%] transform -translate-y-1/2 top-[50%] w-[701px] h-[520px] rotate-[-67.22deg] rounded-full blur-[300px] bg-tblub" />
      </div>
      <div className="container">
        <div className="lg:border gap-5  lg:min-h-[336px] flex flex-col  lg:flex-row justify-between border-border  bg-navbar rounded-[20px] py-[30px] px-[20px]">
          <div className="flex border-r lg:pr-10 border-border lg:flex-col justify-between">
            <TokenDetail title="Total supply" value="21,000,000" />
            <TokenDetail alignRight title="Total supply" value="21,000,000" />
          </div>
          <div className="flex border-r lg:pr-10 border-border lg:flex-col justify-between">
            <TokenDetail title="" value="" />
            <TokenDetail alignRight title="Team" value="150,000" />
          </div>
          <div className="flex border-r lg:pr-10 border-border lg:flex-col justify-between">
            <TokenDetail title="Airdrop" value="150,000" />
            <TokenDetail alignRight title="Mining" value="18,300,000" />
          </div>
          <div className="flex border-r lg:pr-10 border-border lg:flex-col justify-between">
            <TokenDetail title="Ecosystem" value="300,000" />
            <TokenDetail alignRight title="Marketing" value="300,000" />
          </div>
          <div className="flex lg:flex-col justify-between">
            <TokenDetail
              title="Liquidity & Listings Reserves"
              value="300,000"
            />
            <TokenDetail
              alignRight
              title="Partners and advisors"
              value="30,000,000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
