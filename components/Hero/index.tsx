import Image from "next/image";
import Header from "../Header";
import { Button } from "../ui/button";

const Hero = () => (
  <div className=" relative min-h-screen bg-black">
    <Header />
    <div className="pt-[100px]">
      <div className="flex-col flex items-center space-y-[25px]">
        <div className="flex flex-col -space-y-6 items-center">
          <div className=" inline-flex space-x-4">
            <h2 className=" text-[80px] text-white font-extrabold">
              Unlocking 21 Million
            </h2>
            <Image
              src={"/images/Cryptocurrency.svg"}
              alt="Cryptocurrency"
              width={72}
              height={72}
            />
          </div>
          <div>
            <h3 className="text-[80px] inline-flex text-center font-extrabold tracking-[1.6px] bg-clip-text g_txt  bg-gradient-2">
              Dogoshi
            </h3>
          </div>
        </div>
        <p className=" text-2xl text-white font-medium tracking-[0.72px]">
          Mine, Use, Earn
        </p>
        <Button variant={"secondary"}>Buy Now</Button>
      </div>
    </div>
  </div>
);

export default Hero;
