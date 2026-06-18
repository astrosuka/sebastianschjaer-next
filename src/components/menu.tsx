"use client"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { usePathname } from "next/navigation"

export default function Menu() {
  const { language } = useLanguage()
  const pathname = usePathname()

  return (
    <nav className="sticky top-0">
      <ul className="font-display flex flex-wrap items-start text-sm uppercase md:flex-col md:gap-2 md:text-base">
        <Link
          className={
            "hover:text-accent font-bold" +
            (pathname.startsWith("/director")
              ? " text-accent"
              : " text-secondary")
          }
          href="/director"
        >
          <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
            <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
              Director
            </div>
            {pathname.startsWith("/director") && (
              <div className="bg-accent z-10 size-2 rounded-full"></div>
            )}
          </div>
        </Link>
        <Link
          className={
            "hover:text-accent font-bold" +
            (pathname.startsWith("/editor")
              ? " text-accent"
              : " text-secondary")
          }
          href="/editor"
        >
          <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
            <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
              Editor
            </div>
            {pathname.startsWith("/editor") && (
              <div className="bg-accent z-10 size-2 rounded-full"></div>
            )}
          </div>
        </Link>
        <Link
          className={
            "hover:text-accent font-bold" +
            (pathname.startsWith("/mixtapes")
              ? " text-accent"
              : " text-secondary")
          }
          href="/mixtapes"
        >
          <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
            <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
              Mixtapes
            </div>
            {pathname.startsWith("/mixtapes") && (
              <div className="bg-accent z-10 size-2 rounded-full"></div>
            )}
          </div>
        </Link>
        <Link
          className={
            "hover:text-accent font-bold" +
            (pathname.startsWith("/fotos") ? " text-accent" : " text-secondary")
          }
          href="/fotos"
        >
          <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
            <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
              {language === "es" ? "Fotos" : "Photos"}
            </div>
            {pathname.startsWith("/fotos") && (
              <div className="bg-accent z-10 size-2 rounded-full"></div>
            )}
          </div>
        </Link>
        <Link
          className={
            "hover:text-accent font-bold" +
            (pathname.startsWith("/bio") ? " text-accent" : " text-secondary")
          }
          href="/bio"
        >
          <div className="flex flex-col items-center pb-1 sm:pb-0 md:flex-row md:gap-2">
            <div className="bg-background shadow-border rounded-full px-1 leading-tight md:px-0">
              Bio
            </div>
            {pathname.startsWith("/bio") && (
              <div className="bg-accent z-10 size-2 rounded-full"></div>
            )}
          </div>
        </Link>
      </ul>
    </nav>
  )
}
