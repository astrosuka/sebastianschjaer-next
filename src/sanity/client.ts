import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "d205va9w",
  dataset: "production",
  apiVersion: "2024-08-14",
  useCdn: true,
})
