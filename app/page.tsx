import AirDrop from "@/components/Airdrop";
import BuyMineEarn from "@/components/BuyMineEarn";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RoadMap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <BuyMineEarn />
      <RoadMap />
      <Tokenomics />
      <AirDrop />

      <Footer />
      <h2 className=" h-10"></h2>
    </>
  );
}
