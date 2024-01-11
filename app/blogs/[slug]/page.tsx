import { client } from "@/lib/sanity";
import { PostType } from "@/types";
import BlockContent from "@sanity/block-content-to-react";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          mainImage,
         publishedAt,
         categorie,
          body
      }[0]`;

  const data = await client.fetch(query);
  return data;
}
export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const data: PostType = await getData(params.slug);

  return (
    <div className="  min-h-screen bg-white">
      <div className=" container">
        <div className="prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <BlockContent
            projectId="rayftqxv"
            dataset="production"
            blocks={data?.body}
          />
        </div>
      </div>
    </div>
  );
}
