import Image from "next/image";

const Tokenomics = () => {
  return (
    <section className=" overflow-hidden relative mb-10 bg-[#060404] py-12 ">
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
        <div className=" py-20 lg:pt-0">
          <Image
            width={1280}
            height={650}
            className=" hidden md:block mx-auto"
            src={"/images/tokenomics_desk.png"}
            alt="/"
            quality={90}
          />
          <Image
            width={450}
            height={493}
            className="  md:hidden mx-auto"
            src={"/images/tokenomics_mobile.png"}
            alt="/"
          />
        </div>
      </div>
      <div className=" z-10  lg:hidden  absolute left-[55%] top-[5%] w-[594px] h-[475px] rounded-full blur-[197px] bg-tblub" />
      <div className=" hidden lg:block z-10 absolute -left-[15%] transform -translate-y-1/2 top-[50%] w-[701px] h-[520px] rotate-[-67.22deg] rounded-full blur-[300px] bg-tblub" />
    </section>
  );
};

export default Tokenomics;
