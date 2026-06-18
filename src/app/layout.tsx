import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/header"
import Menu from "@/components/menu"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import MouseTrailLazy from "@/components/mouse-trail-lazy"
import { LanguageProvider } from "@/context/LanguageContext"

const AlteHaasGroteskBold = localFont({
  variable: "--font-display",
  src: "./fonts/AlteHaasGroteskBold.ttf",
})

const AlteHaasGroteskRegular = localFont({
  variable: "--font-body",
  src: "./fonts/AlteHaasGroteskRegular.ttf",
})

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sebastián Schjaer",
  description:
    "Sebastián Schjaer is a director and editor graduated from the Universidad del Cine (FUC). He has worked as a teacher at the Universidad de Buenos Aires, Universidad Nacional Tres de Febrero and Universidad del Cine. He has published articles in specialized books and magazines.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${AlteHaasGroteskBold.variable} ${AlteHaasGroteskRegular.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col gap-2 px-4 transition-all md:gap-6 md:px-6">
        <LanguageProvider>
          <Header />

          <main className="flex grow grid-cols-5 flex-col items-stretch gap-2 md:grid md:gap-16">
            <div className="sticky top-15 z-10 col-span-1 self-start md:top-21">
              <Menu />
            </div>
            <div className="col-span-4 grid grow items-stretch pb-10 md:pb-20">
              {children}
            </div>
          </main>
          <Footer>
            <Contact />
          </Footer>
          <MouseTrailLazy />
        </LanguageProvider>
      </body>
    </html>
  )
}
