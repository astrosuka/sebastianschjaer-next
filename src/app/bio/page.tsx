import type { Metadata } from "next"
import BioContent from "@/components/bio-content"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { INFO_QUERY } from "@/sanity/queries"

export const metadata: Metadata = {
  title: "Bio",
}

export default async function Bio() {
  const data = await client.fetch(INFO_QUERY)

  return (
    <PageTransition>
      <BioContent data={data} />
    </PageTransition>
  )
}
