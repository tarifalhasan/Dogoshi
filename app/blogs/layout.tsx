import BlogHeader from "@/components/BlogsPage/HeaderBlog";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className=" min-h-screen bg-white">
      <BlogHeader />
      <div className=" pt-[100px] sm:pt-[120px]">{children}</div>
    </main>
  );
}
