import type { Metadata } from "next"
import EditorList from "@/components/editor-list"
import PageTransition from "@/components/page-transition"
import { client } from "@/sanity/client"
import { EDITOR_QUERY } from "@/sanity/queries"

export const metadata: Metadata = {
  title: "Editor",
}

export default async function Editor() {
  const data = await client.fetch(EDITOR_QUERY)

  return (
    <PageTransition>
      <div className="gap-4 lg:columns-2">
        <EditorList
          title={{ es: "Largometrajes", en: "Features" }}
          data={data?.features}
        />
        <EditorList
          title={{ es: "Cortometrajes", en: "Shorts" }}
          data={data?.shorts}
        />
        <EditorList
          title={{ es: "Trailers", en: "Trailers" }}
          data={data?.trailers}
          isTrailer
        />
      </div>
    </PageTransition>
  )
}
