"use client"
import type { MIXTAPES_QUERY_RESULT } from "@/sanity/types"
import { PortableText } from "next-sanity"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"

type MixtapesListProps = {
  data: MIXTAPES_QUERY_RESULT
}
export default function MixtapesList({ data }: MixtapesListProps) {
  const { language } = useLanguage()

  return (
    <>
      <div className="mb-8 gap-8 md:columns-2 xl:w-2/3">
        {data?.text && (
          <PortableText
            value={language === "es" ? data.text : data.textEng || data.text}
          />
        )}
      </div>
      <ul className="flex flex-col items-start gap-2 xl:gap-4">
        {data?.mixtapes?.map((item) => (
          <li key={item._key}>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-text hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 text-xl md:px-4 xl:text-3xl"
              >
                <span>
                  {language === "es" ? item.title : item.titleEng || item.title}
                </span>
                <span className="pl-2">
                  <Image
                    src="/assets/link.svg"
                    alt="external link icon"
                    className="inline size-3 group-hover:invert md:size-4"
                    width={12}
                    height={12}
                  />
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
