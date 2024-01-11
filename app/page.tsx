import AirDrop from "@/components/Airdrop";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mining from "@/components/Mining";
import RoadMap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import getAllBlogs from "@/services/getAllBlogs";

export default async function Home() {
  const getAllBlogData = await getAllBlogs();
  return (
    <main className=" min-h-screen bg-[#e8f1ee]">
      <Hero />
      <Mining />
      <Tokenomics />
      <RoadMap />
      <AirDrop />
      <Blogs data={getAllBlogData} />
      <Footer />
    </main>
  );
}
