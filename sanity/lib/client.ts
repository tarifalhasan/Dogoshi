import { sanity_projext_id } from "@/constant/sanity";

import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-11",
  dataset: "production",

  projectId: sanity_projext_id,

  useCdn: false,
});
