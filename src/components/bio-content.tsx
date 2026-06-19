"use client"

import { useLanguage } from "@/context/LanguageContext"
import type { INFO_QUERY_RESULT } from "@/sanity/types"
import type {
  PortableTextBlockComponent,
  PortableTextComponents,
} from "@portabletext/react"
import { PortableText } from "next-sanity"

type BioContentProps = {
  data: INFO_QUERY_RESULT
}

export default function BioContent({ data }: BioContentProps) {
  const components: PortableTextComponents = {
    block: (({ children }) => <p className="pb-2">{children}</p>) as PortableTextBlockComponent,
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-text hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
        >
          {children}
        </a>
      ),
    },
  }

  const { language } = useLanguage()

  return (
    <div className="gap-8 md:columns-2">
      {data?.bio && (
        <PortableText
          value={language === "es" ? data.bio : data.bioEng || data.bio}
          components={components}
        />
      )}
    </div>
  )
}
