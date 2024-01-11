import BlogCard from "@/components/BlogsPage/BlogCard";
import { client } from "@/lib/sanity";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) {
    title,
    
      "currentSlug": slug.current,
      mainImage,
       publishedAt,
       category-> {
        title
      },
  }`;

  const data = await client.fetch(query);

  return data;
}

const Blogs = async () => {
  const data: BlogCard[] = await getData();

  return (
    <section className="min-h-screen bg-white">
      <div className=" container">
        <div className="flex py-5 items-center flex-wrap gap-6">
          <button className=" inline-flex items-center grow-0 gap-x-2 rounded-full py-[6px] px-3 text-sm font-medium  bg-black text-white">
            All News
            <span className="block w-2 h-2 rounded-full  bg-white"></span>
          </button>
          {data?.map((c, i) => (
            <button
              key={i}
              className=" inline-flex items-center gap-x-2 rounded-full py-[6px] px-3 text-sm font-medium  bg-black/20"
            >
              {c.category.title}
              <span className="block w-2 h-2 rounded-full  bg-yellow-50"></span>
            </button>
          ))}
        </div>
        <div className="grid py-5 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
