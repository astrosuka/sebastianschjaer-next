import type { Metadata } from "next"
import { client } from "@/sanity/client"
import { DIRECTOR_BY_SLUG_QUERY } from "@/sanity/queries"
import DirectorProject from "@/components/director-project"
import PageTransition from "@/components/page-transition"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch(DIRECTOR_BY_SLUG_QUERY, { slug })

  if (!project) return {}

  return {
    title: project.title,
    description: project.synopsis?.slice(0, 160),
    openGraph: {
      images: project.image?.asset?.url
        ? [{ url: project.image.asset.url }]
        : undefined,
    },
  }
}

export default async function DirectorSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await client.fetch(DIRECTOR_BY_SLUG_QUERY, { slug })
  if (!data) return notFound()

  return (
    <PageTransition>
      <DirectorProject data={data} />{" "}
    </PageTransition>
  )
}
