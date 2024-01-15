<<<<<<< HEAD
=======
import { sanity_projext_id } from "@/constant/sanity";
>>>>>>> 51ae5f1 (update)
import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
<<<<<<< HEAD
  projectId: "gnv18c8c" || "",
=======
  projectId: sanity_projext_id || "",
>>>>>>> 51ae5f1 (update)
  dataset: "production" || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
