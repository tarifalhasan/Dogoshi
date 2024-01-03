import Image from "next/image";
import { Button } from "../ui/button";

const AirDrop = () => {
  return (
    <div className="container">
      <div
        id="airdrop"
        className=" mb-5 xl:mb-10 relative min-h-[480px] rounded-sm xl:rounded-[25px]  mx-auto  bg-no-repeat   container flex items-center  bg-cover  bg-airdrop   "
      >
        <div className="flex justify-between items-center w-full">
          <div className=" lg:pl-[67px] w-full  xl:basis-1/2">
            <h2 className="airdrop_heading leading-[1.2] text-[42px] font-bold">
              Dogoshi will run a Staking <br /> Protocol Join the waitlist.
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
          <div className="  hidden lg:block">
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
