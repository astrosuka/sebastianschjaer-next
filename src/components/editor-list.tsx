"use client"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"

type EditorItem = {
  _key: string
  title: string | null
  titleEng: string | null
  link: string | null
  director?: string | null
  detail?: string | null
  detailEng?: string | null
  year?: number | null
}

type EditorListProps = {
  title: { es: string; en: string }
  data: EditorItem[] | null | undefined
  isTrailer?: boolean
}

export default function EditorList({
  title,
  data,
  isTrailer = false,
}: EditorListProps) {
  const { language } = useLanguage()
  return (
    <div className="break-inside-avoid-column pb-8">
      <h2 className="text-secondary mb-1 text-sm uppercase">
        {language === "es" ? title.es : title.en}
      </h2>
      <ul className="flex flex-col items-start gap-1">
        {data?.map((item) => (
          <EditorListItem key={item._key} item={item} isTrailer={isTrailer} />
        ))}
      </ul>
    </div>
  )
}

type EditorListItemProps = {
  item: EditorItem
  isTrailer: boolean
}

function EditorListItem({ item, isTrailer }: EditorListItemProps) {
  return (
    <li className="pb-1 md:pb-0">
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-wrap items-start gap-1 xl:flex"
        >
          <div>
            <span className="border-secondary group-hover:border-accent group-hover:bg-accent group-hover:text-background rounded-full border px-2">
              {item.title}
            </span>
            {isTrailer && (
              <Image
                src="/assets/link.svg"
                alt="Link icon"
                className="ml-1 inline size-3"
                width={12}
                height={12}
              />
            )}
          </div>
          <div>
            {item.director && (
              <span className="group-hover:text-secondary text-xs font-bold uppercase">
                {" "}
                {item.director}
              </span>
            )}
            {item.detail && (
              <span className="text-secondary text-sm"> ({item.detail}</span>
            )}
            {item.year && (
              <span className="text-secondary text-sm">, {item.year})</span>
            )}
            {!isTrailer && (
              <Image
                src="/assets/link.svg"
                alt="Link icon"
                className="ml-1 inline size-3"
                width={12}
                height={12}
              />
            )}
          </div>
        </a>
      ) : (
        <div className="group flex-wrap items-start gap-1 xl:flex">
          <div>
            <span className="border-secondary rounded-sm border px-2">
              {item.title}
            </span>
          </div>
          <div>
            {item.director && (
              <span className="text-xs font-bold uppercase">
                {" "}
                {item.director}
              </span>
            )}
            {item.detail && (
              <span className="text-secondary text-sm"> ({item.detail}</span>
            )}
            {item.year && (
              <span className="text-secondary text-sm">, {item.year}) </span>
            )}
          </div>
        </div>
      )}
    </li>
  )
}
