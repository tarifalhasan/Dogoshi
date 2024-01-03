import AirDrop from "@/components/Airdrop";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mining from "@/components/Mining";
import RoadMap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <Mining />
      <Tokenomics />
      <RoadMap />
      <AirDrop />
      <Blogs />
      <Footer />
    </>
  );
}
