import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
