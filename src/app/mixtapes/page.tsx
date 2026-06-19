import MixtapesList from "@/components/mixtapes-list"
import { client } from "@/sanity/client"
import { MIXTAPES_QUERY } from "@/sanity/queries"

export default async function Mixtapes() {
  const data = await client.fetch(MIXTAPES_QUERY)

  return (
    <>
      <MixtapesList data={data} />
    </>
  )
}
