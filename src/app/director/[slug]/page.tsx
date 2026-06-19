import { client } from "@/sanity/client"
import { DIRECTOR_BY_SLUG_QUERY } from "@/sanity/queries"
import DirectorProject from "@/components/director-project"
import PageTransition from "@/components/page-transition"

export default async function DirectorSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await client.fetch(DIRECTOR_BY_SLUG_QUERY, { slug })
  return (
    <PageTransition>
      <DirectorProject data={data} />{" "}
    </PageTransition>
  )
}
