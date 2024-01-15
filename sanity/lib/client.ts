<<<<<<< HEAD
=======
import { sanity_projext_id } from "@/constant/sanity";
>>>>>>> 51ae5f1 (update)
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-11",
  dataset: "production",
<<<<<<< HEAD
  projectId: "gnv18c8c",
=======
  projectId: sanity_projext_id,
>>>>>>> 51ae5f1 (update)
  useCdn: false,
});
