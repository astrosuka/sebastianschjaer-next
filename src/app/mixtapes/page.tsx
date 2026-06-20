import type { Metadata } from "next"
import MixtapesList from "@/components/mixtapes-list"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { MIXTAPES_QUERY } from "@/sanity/queries"

export const metadata: Metadata = {
  title: "Mixtapes",
}

export default async function Mixtapes() {
  const data = await client.fetch(MIXTAPES_QUERY)

  return (
    <PageTransition>
      <MixtapesList data={data} />
    </PageTransition>
  )
}
