export const images: string[] = [
  "/images/blogs/1.png",
  "/images/blogs/2.png",
  "/images/blogs/3.png",
  "/images/blogs/4.png",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
