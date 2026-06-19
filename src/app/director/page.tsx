import DirectorList from "@/components/director-list"
import { client } from "@/sanity/client"
import { DIRECTOR_QUERY } from "@/sanity/queries"

export default async function Director() {
  const data = await client.fetch(DIRECTOR_QUERY)
  return <DirectorList data={data} />
}
