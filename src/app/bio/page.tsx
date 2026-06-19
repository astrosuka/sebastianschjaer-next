import BioContent from "@/components/bio-content"
import { client } from "@/sanity/client"
import { INFO_QUERY } from "@/sanity/queries"

export default async function Bio() {
  const data = await client.fetch(INFO_QUERY)

  return (
    <>
      <BioContent data={data} />
    </>
  )
}
