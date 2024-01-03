import AirDrop from "@/components/Airdrop";
import BuyMineEarn from "@/components/BuyMineEarn";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RoadMap from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <BuyMineEarn />
      <RoadMap />
      <AirDrop />
      <Footer />
      <h2 className=" h-10"></h2>
    </>
  );
}
