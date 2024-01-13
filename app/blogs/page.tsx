import BlogCard from "@/components/BlogsPage/BlogCard";
import SearchBar from "@/components/BlogsPage/SearchBar";
import TrandingNewsCarusel from "@/components/BlogsPage/TrandingNewsCarusel";
import getAllBlogs from "@/services/getAllBlogs";

export const revalidate = 30;

const Blogs = async () => {
  const data: BlogCard[] = await getAllBlogs();

  return (
    <section className="min-h-screen bg-white">
      <div className=" mb-9 mt-5 bg-black py-4 flex items-center justify-center">
        <p className=" text-white text-base font-medium text-center lg:text-xl">
          Over $1.5m in $WSM bought back so far!
        </p>
      </div>
      <div className=" container mb-9">
        <SearchBar />
      </div>
      <div className=" container relative overflow-hidden">
        <TrandingNewsCarusel data={data} />
      </div>
      <div className=" container py-10">
        <h2 className=" pt">All News</h2>
        <div className="flex py-12 items-center flex-wrap gap-6">
          <button className=" inline-flex items-center grow-0 gap-x-2 rounded-full py-[6px] px-3 text-sm font-medium  bg-black text-white">
            All News
            <span className="block w-2 h-2 rounded-full  bg-white"></span>
          </button>
          {data?.map((c, i) => (
            <button
              key={i}
              className=" inline-flex items-center gap-x-2 rounded-full py-[6px] px-3 text-sm font-medium  bg-black/20"
            >
              {c?.category.title}
              <span className="block w-2 h-2 rounded-full  bg-yellow-50"></span>
            </button>
          ))}
        </div>
        <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {data?.map((item, index) => (
            <BlogCard
              key={index}
              mainImage={item.mainImage}
              title={item.title}
              publishedAt={item.publishedAt}
              category={item.category.title}
              currentSlug={item.currentSlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
