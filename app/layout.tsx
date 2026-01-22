import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anderson Junior - Desenvolvedor Fullstack | Portfólio Online",
  description:
    "Portfólio online de Anderson Assumpção Junior, desenvolvedor fullstack no Rio de Janeiro. Especialista em React, Next.js, Node.js, Python, Javascript e Typescript. Disponível para projetos, freelas e oportunidades CLT.",
  keywords: "desenvolvedor, fullstack, portfólio, react, nextjs, nodejs, python, javascript, typescript, freelancer, programador, Rio de Janeiro, remoto, contratar desenvolvedor, projetos, web, soluções digitais, Anderson Junior, Anderson Assumpção Junior",
  authors: [{ name: "Anderson Assumpção Junior" }],
  openGraph: {
    title: "Anderson Junior - Desenvolvedor Fullstack",
    description: "Portfólio online de desenvolvedor fullstack disponível para projetos e oportunidades.",
    type: "website",
    images: ["/meuPerfil.jpg"],
    url: "https://andersondev-silk.vercel.app/", // Altere para sua URL real
  },
  generator: 'Anderson Assumpção Junior',
  alternates: {
    canonical: "https://andersondev-silk.vercel.app/" // Altere para sua URL real
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
