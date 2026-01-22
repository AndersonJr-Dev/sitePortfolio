import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Terminal, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/AndersonJr-Dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/juniorgn7/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/andersonjrdev/", label: "Instagram" },
  { icon: Mail, href: "mailto:juniorgn7dev@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative bg-background border-t-2 border-zinc-800 pt-16 pb-8 font-mono">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-2">
              <Terminal className="h-5 w-5 text-accent" />
              Anderson Assumpção Junior
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xs">
              &gt; Desenvolvedor Fullstack<br />
              &gt; Código limpo e arquitetura robusta.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-accent hover:text-black hover:border-black transition-all duration-200 rounded-none"
                  aria-label={social.label}
                >
                  {social.label === "Twitter" ? (
                    <Twitter className="h-4 w-4" />
                  ) : (
                    <social.icon className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Sitemaps */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6 border-b border-zinc-800 pb-2 inline-block">
              /MAPA_DO_SISTEMA
            </h3>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block text-zinc-300 hover:text-accent hover:translate-x-1 transition-all duration-200">
                &gt; INICIO
              </Link>
              <Link href="/about" className="block text-zinc-300 hover:text-accent hover:translate-x-1 transition-all duration-200">
                &gt; SOBRE_MIM
              </Link>
              <Link href="/projects" className="block text-zinc-300 hover:text-accent hover:translate-x-1 transition-all duration-200">
                &gt; PROJETOS
              </Link>
              <Link href="/contact" className="block text-zinc-300 hover:text-accent hover:translate-x-1 transition-all duration-200">
                &gt; CONTATO
              </Link>
            </div>
          </div>

          {/* Contact Data */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6 border-b border-zinc-800 pb-2 inline-block">
              /CANAIS_DE_COMUNICACAO
            </h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> juniorgn7dev@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> +55 (21) 99422-0180
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Rio de Janeiro, BR
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 bg-green-900/20 border border-green-900/50 text-green-500 text-xs font-bold uppercase">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Disponível para trabalho
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>
            © 2024 ANDERSON_JR_DEV. VERSÃO_SISTEMA_V3.0_PT
          </p>
          <p className="font-mono">
            CONSTRUÍDO_COM: [REACT] [NEXT.JS] [TAILWIND] [SHADCN]
          </p>
        </div>
      </div>
    </footer>
  )
}
