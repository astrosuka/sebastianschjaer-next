import PageTransition from "@/components/page-transition"
import VideoEmbed from "@/components/video-embed"
import { client } from "@/sanity/client"
import { INFO_QUERY } from "@/sanity/queries"

export default async function Home() {
  const info = await client.fetch(INFO_QUERY)

  return (
    <PageTransition>
      <main className="h-full">
        {info?.coverVideo && <VideoEmbed data={info?.coverVideo} />}
      </main>
    </PageTransition>
  )
}
