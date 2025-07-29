
"use client"

// Componente de navegação principal do site. Inclui menu desktop, mobile, tema e efeito de esconder ao rolar.


// Hooks do React e utilitários do Next.js
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"


// Itens do menu de navegação
const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
]

// Componente principal de navegação
export default function Navigation() {
  // Estado do tema (escuro/claro)
  const [theme, setTheme] = useState<string | null>(null)
  // Detecta o tema inicial ao montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light")
    }
  }, [])
  // Alterna o tema manualmente
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark")
      if (isDark) {
        document.documentElement.classList.remove("dark")
        setTheme("light")
        localStorage.setItem("theme", "light")
      } else {
        document.documentElement.classList.add("dark")
        setTheme("dark")
        localStorage.setItem("theme", "dark")
      }
    }
  }
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
        "sticky top-0 z-50 content-blur border-b border-white/20 transition-transform duration-300",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo do site */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anderson Junior
            </span>
          </Link>

          {/* Navegação desktop (links de páginas) */}
          <div className="hidden md:flex items-center gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // Botão de navegação com destaque para a página ativa
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition-colors duration-300 relative bg-slate-200/30 hover:bg-blue-100/40 text-slate-900 backdrop-blur-md",
                  pathname === item.href && "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg backdrop-blur-md",
                )}
                style={{ minWidth: 90, textAlign: 'center' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botões do menu mobile e troca de tema */}
          <div className="flex md:hidden items-center gap-2">
            {/* Botão de troca de tema */}
            <Button variant="ghost" size="icon" aria-label="Trocar tema" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-900" />}
            </Button>
            {/* Botão para abrir/fechar menu mobile */}
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navegação mobile (menu lateral) */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  // Link do menu mobile
                  className={cn(
                    "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-300 px-2 py-1",
                    pathname === item.href && "text-blue-600 dark:text-blue-400 font-medium",
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
