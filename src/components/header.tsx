"use client"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <header className="bg-background shadow-border sticky top-0 z-10 flex items-center pt-4 md:pt-6">
        <h1 className="font-display rounded-r-sm pr-2 pl-2 text-3xl md:pl-0">
          <Link href="/">sebastián schjaer</Link>
        </h1>

        <button
          className="bg-background text-secondary shadow-border hover:text-text ml-auto rounded-l-sm px-1 text-sm leading-tight"
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </header>
    </>
  )
}
