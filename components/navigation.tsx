"use client"

// Componente de navegação principal do site. Inclui menu desktop, mobile, tema e efeito de esconder ao rolar.


// Hooks do React e utilitários do Next.js
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, Cpu } from "lucide-react"

import { cn } from "@/lib/utils"


// Itens do menu de navegação
const navigation = [
  { name: "[HOME]", href: "/" },
  { name: "[SOBRE]", href: "/about" },
  { name: "[PROJETOS]", href: "/projects" },
  { name: "[CONTATO]", href: "/contact" },
]

// Componente principal de navegação
export default function Navigation() {

  // Estado do menu mobile aberto/fechado
  const [isOpen, setIsOpen] = useState(false)
  // Caminho da página atual
  const pathname = usePathname()

  // Estado para mostrar/esconder a barra de navegação ao rolar
  const [showNav, setShowNav] = useState(true)
  // Guarda o último valor do scroll
  const lastScrollY = useRef(0)

  // Efeito para esconder a barra ao rolar para baixo e mostrar ao rolar para cima
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Sempre mostra no topo
      if (currentScrollY <= 0) {
        setShowNav(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Esconde ao rolar para baixo
        setShowNav(false)
      } else {
        // Mostra ao rolar para cima
        setShowNav(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Renderização do componente
  return (
    <nav
      // Barra fixa no topo, com efeito de transição para esconder/mostrar
      className={cn(
        "sticky top-0 z-50 bg-background border-b-2 border-zinc-800 transition-transform duration-300 font-mono",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo do site */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg uppercase tracking-wider group">
            <div className="w-8 h-8 bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center group-hover:border-accent transition-colors">
              <Terminal className="h-5 w-5 text-accent" />
            </div>
            <span className="text-foreground group-hover:text-accent transition-colors">
              Anderson_Jr
            </span>
          </Link>

          {/* Navegação desktop (links de páginas) */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // Botão de navegação com destaque para a página ativa
                className={cn(
                  "px-2 py-1 text-sm font-bold transition-all duration-300 relative border-b-2 border-transparent hover:border-accent/50 text-zinc-300 hover:text-foreground",
                  pathname === item.href && "text-accent border-accent",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botões do menu mobile e troca de tema */}
          <div className="flex md:hidden items-center gap-2">

            {/* Botão para abrir/fechar menu mobile */}
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-none border border-zinc-800 hover:bg-zinc-800">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navegação mobile (menu lateral) */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-zinc-800 bg-background">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  // Link do menu mobile
                  className={cn(
                    "text-zinc-500 hover:text-foreground hover:bg-zinc-900 transition-colors duration-200 px-4 py-3 font-mono text-sm uppercase font-bold border-l-2 border-transparent hover:border-accent",
                    pathname === item.href && "text-accent border-accent bg-zinc-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
