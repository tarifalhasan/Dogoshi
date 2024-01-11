import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: "gnv18c8c" || "",
  dataset: "production" || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
