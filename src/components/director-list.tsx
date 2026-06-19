"use client"
import type { DIRECTOR_QUERY_RESULT } from "@/sanity/types"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

type DirectorListProps = {
  data: DIRECTOR_QUERY_RESULT
}
export default function DirectorList({ data }: DirectorListProps) {
  const { language } = useLanguage()

  return (
    <ul className="flex flex-col items-start gap-2">
      {data.map((item) => (
        <li className="group" key={item._id}>
          <Link
            href={`/director/${item.slug}`}
            className="items-start text-xl xl:text-2xl"
          >
            <span className="border-text group-hover:border-accent group-hover:bg-accent group-hover:text-background rounded-full border px-2 md:px-4">
              {language === "es" ? item.title : item.titleEng || item.title}
            </span>
            <span className="group-hover:text-secondary block pl-2 text-base md:text-xl lg:inline lg:pl-0 xl:text-2xl">
              <span className="hidden md:inline"> – </span>
              <span className="italic">{item.premiere}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
