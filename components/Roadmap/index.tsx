import RoadmapShape from "../ui/shape";
import Shape2 from "../ui/shape2";

const RoadMap = () => {
  return (
    <section
      id="road_map"
      className=" my-[30px] my:py-[70px] lg:my-[100px]  container"
    >
      <h2 className="text-4xl md:text-6xl ">Our Roadmap</h2>
      <div className="  relative overflow-hidden pt-[45px] lg:pt-[80px]">
        <div className=" flex justify-end">
          <div className="  w-full lg:max-w-[434px]">
            <ul className=" space-y-2">
              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Objective :
                </p>
                <p className=" text-sm sm:text-base font-normal text-gray-50">
                  Officially launch the Dogoshi platform.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Details :
                </p>
                <p className=" flex-1 text-sm sm:text-base font-normal text-gray-50">
                  Depending on the completed sell-out of the presale, the
                  platform launch is planned for March 2024.
                </p>
              </li>

              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Outcome :
                </p>
                <p className=" flex-1 text-sm sm:text-base font-normal text-gray-50">
                  The launch will mark the commencement of Dogoshi’s operations,
                  offering users access to mining, hodl them against POS and
                  earn % and other features.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className=" my-[30px] h-[8px] opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(99deg, #FFD700 40.51%, #FA7E07 58.67%, #F40010 109.42%)",
          }}
        ></div>
        <div className="  xl:ml-[150px] flex justify-start">
          <div className="  w-full lg:max-w-[434px]">
            <ul className=" space-y-2">
              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Objective :
                </p>
                <p className=" text-sm sm:text-base font-normal text-gray-50">
                  Officially launch the Dogoshi platform.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Details :
                </p>
                <p className=" flex-1 text-sm sm:text-base font-normal text-gray-50">
                  Depending on the completed sell-out of the presale, the
                  platform launch is planned for March 2024.
                </p>
              </li>

              <li className="flex items-start space-x-2">
                <p className=" w-24 bg-clip-text bg-gradient1 text-base font-bold leading-normal sm:text-lg">
                  Outcome :
                </p>
                <p className=" flex-1 text-sm sm:text-base font-normal text-gray-50">
                  The launch will mark the commencement of Dogoshi’s operations,
                  offering users access to mining, hodl them against POS and
                  earn % and other features.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden xl:block absolute top-0  w-full xl:-right-[160px] 2xl:-right-[296px]">
          <RoadmapShape title="PLATFORM LAUNCH - Q2 2023" />
        </div>
        <div className=" hidden xl:block absolute left-0 top-[52%] xl:left-[92px] ">
          <Shape2 />
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
