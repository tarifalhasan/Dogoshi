export interface BlogCard {
  mainImage: any;
  title: string;
  category: any;
  publishedAt: string;
  currentSlug: string;
  categorie?: string;
}

export interface PostType {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  author: string;
  mainImage: any;
  body: any;
}
