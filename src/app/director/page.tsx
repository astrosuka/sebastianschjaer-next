import type { Metadata } from "next"
import DirectorList from "@/components/director-list"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { DIRECTOR_QUERY } from "@/sanity/queries"

export const metadata: Metadata = {
  title: "Director",
}

export default async function Director() {
  const data = await client.fetch(DIRECTOR_QUERY)
  return (
    <PageTransition>
      <DirectorList data={data} />
    </PageTransition>
  )
}
