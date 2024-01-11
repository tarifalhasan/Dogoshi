import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-11",
  dataset: "production",
  projectId: "gnv18c8c",
  useCdn: false,
});
