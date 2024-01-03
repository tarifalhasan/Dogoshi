import AirDrop from "@/components/Airdrop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RoadMap from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <h2 className=" h-10"></h2>
      <RoadMap />
      <AirDrop />
      <Footer />
      <h2 className=" h-10"></h2>
    </>
  );
}
