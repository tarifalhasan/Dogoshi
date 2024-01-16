"use client";
import BlogHeader from "@/components/BlogsPage/HeaderBlog";
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
      {/* <ViewDocs pdfUrl="/Dogoshi_Whitepaper.pdf" /> */}
    </div>
  );
};

export default Whitepaper;
