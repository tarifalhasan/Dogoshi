"use client";
import BlogHeader from "@/components/BlogsPage/HeaderBlog";
import Footer from "@/components/Footer";
// PDFViewer.js

const Whitepaper = () => {
  return (
    <div>
      <BlogHeader />
      <div className=" pt-[120px] container">
        <iframe
          src="/Dogoshi_Whitepaper.pdf" // Adjust the path to your PDF file
          width="100%"
          height="100%"
          className=" min-h-screen"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;
