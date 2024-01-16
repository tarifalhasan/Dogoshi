import BlogCard from "@/components/BlogsPage/BlogCard";
import TrandingNewsCarusel from "@/components/BlogsPage/TrandingNewsCarusel";
import getAllBlogs from "@/services/getAllBlogs";
import Search from "./search";

export const revalidate = 30;

const Blogs = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const data: BlogCard[] = await getAllBlogs();
  // Filter blogs based on the search criteria (title or category)
  const filteredData = data.filter((blog) => {
    // If search term exists, filter based on title or category
    if (search) {
      const titleMatch = blog.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const categoryMatch = blog.category.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return titleMatch || categoryMatch;
    }
    return true; // If no search term, include all blogs
  });
  return (
    <section className="min-h-screen bg-white">
      <div className=" mb-9 mt-5 bg-black py-4 flex items-center justify-center">
        <p className=" text-white text-base font-medium text-center lg:text-xl">
          Over $1.5m in $WSM bought back so far!
        </p>
        {/* "Sdsds" */}
      </div>
      <div className=" container mb-9">
        <Search />
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
          {filteredData?.map((item, index) => (
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
