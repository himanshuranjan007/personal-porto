import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Himanshu",
  description: "My portfolio",
  icons: {
    icon: "/cat.png",
    apple: "/cat.png",
    other: {
      rel: "icon",
      url: "/cat.png"
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white min-h-screen`}>{children}</body>
      <Analytics />
    </html>
  )
}

