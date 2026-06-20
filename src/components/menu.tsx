"use client"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { usePathname } from "next/navigation"

export default function Menu() {
  const { language } = useLanguage()
  const pathname = usePathname()

  const sections = [
    {
      tag: "director",
      tagEng: "director",
      route: "director",
    },

    {
      tag: "editor",
      tagEng: "editor",
      route: "editor",
    },

    {
      tag: "mixtapes",
      tagEng: "mixtapes",
      route: "mixtapes",
    },
    {
      tag: "fotos",
      tagEng: "photos",
      route: "fotos",
    },
    {
      tag: "bio",
      tagEng: "bio",
      route: "bio",
    },
  ]

  return (
    <nav className="sticky top-0">
      <ul className="font-display flex flex-wrap items-start text-sm uppercase md:flex-col md:gap-2 md:text-base">
        {sections.map((section) => (
          <Link
            key={section.tag}
            className={
              "hover:text-accent font-bold" +
              (pathname.startsWith(`/${section.route}`)
                ? " text-accent"
                : " text-secondary")
            }
            href={`/${section.route}`}
          >
            <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
              <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
                {language === "en" ? section.tagEng : section.tag}
              </div>
              {pathname.startsWith(`/${section.route}`) && (
                <div className="bg-accent z-10 size-2 rounded-full"></div>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
