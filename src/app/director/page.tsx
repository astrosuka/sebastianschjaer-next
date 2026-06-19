import DirectorList from "@/components/director-list"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { DIRECTOR_QUERY } from "@/sanity/queries"

export default async function Director() {
  const data = await client.fetch(DIRECTOR_QUERY)
  return (
    <PageTransition>
      <DirectorList data={data} />{" "}
    </PageTransition>
  )
}
