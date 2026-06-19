import ImageGallery from "@/components/image-gallery"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { PHOTOS_QUERY } from "@/sanity/queries"

export default async function Fotos() {
  const data = await client.fetch(PHOTOS_QUERY)

  return (
    <PageTransition>
      <ImageGallery data={data} />{" "}
    </PageTransition>
  )
}
