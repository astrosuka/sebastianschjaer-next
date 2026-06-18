"use client"
import { usePathname } from "next/navigation"

export default function Footer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <footer className="pointer-events-none fixed bottom-0 left-0 flex w-full items-end justify-between px-4 pb-2 md:left-0 md:px-6 md:pb-6">
      {children}
      <p className="bg-background text-secondary shadow-border rounded-l-sm px-1 text-sm">
        {[
          ["/director", "01"],
          ["/editor", "02"],
          ["/mixtapes", "03"],
          ["/fotos", "04"],
          ["/bio", "05"],
        ].find(([path]) => pathname.startsWith(path))?.[1] || "00"}
      </p>
    </footer>
  )
}
