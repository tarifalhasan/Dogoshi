import Image from "next/image";
import { Button } from "../ui/button";

const AirDrop = () => {
  return (
    <div className="container">
      <div
        id="airdrop"
        className=" mb-5 xl:mb-10 relative min-h-[735px] lg:min-h-[480px]  xl:rounded-[25px] rounded-[15px]  mx-auto  bg-no-repeat   container flex lg:items-center  bg-cover  bg-airdrop   "
      >
        <div className=" flex justify-between items-start lg:items-center w-full">
          <div className=" space-y-2 pt-[50px] lg:pt-0 lg:pl-[67px] w-full  xl:basis-1/2">
            <h2 className="airdrop_heading leading-[1.2] text-[40px] lg:text-[40px] font-bold">
              Dogoshi will run a Staking <br className=" hidden lg:block" />{" "}
              Protocol Join the waitlist.
            </h2>
            <p className="text-base max-w-[415px] pt-1 font-normal text-white">
              For users that they will not mine Dogoshi they can use our staking
              protocol To earn % on Dogoshi or USDT. We suggest to fulfill your
              details as soon as possible.
            </p>
            <div className=" pt-[38px]">
              <Button variant={"outline"}>Check Status</Button>
            </div>
          </div>
          <div className=" ">
            <Image
              className=" absolute right-0 bottom-0"
              src={"/images/Dog1.svg"}
              alt="dog"
              width={528}
              height={377}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirDrop;
