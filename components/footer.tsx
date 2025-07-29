import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from "lucide-react"

const socialLinks = [
   { icon: Github, href: "https://github.com/AndersonJr-Dev", label: "GitHub" },
   { icon: Linkedin, href: "https://www.linkedin.com/in/juniorgn7/", label: "LinkedIn" },
   { icon: Instagram, href: "https://www.instagram.com/andersonjrdev/", label: "Instagram" },
  { icon: Mail, href: "mailto:juniorgn7dev@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 bg-slate-900/80 content-blur" />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Anderson Assumpção Junior
              </h3>
              <p className="text-slate-300 mb-4">
                Desenvolvedor Fullstack apaixonado por criar soluções digitais inovadoras e impactantes.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    aria-label={social.label}
                  >
            {social.label === "Twitter" ? (
              <Instagram className="h-5 w-5" />
            ) : (
              <social.icon className="h-5 w-5" />
            )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-slate-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="block text-slate-300 hover:text-white transition-colors duration-300">
                  Sobre Mim
                </Link>
                <Link href="/projects" className="block text-slate-300 hover:text-white transition-colors duration-300">
                  Projetos
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-slate-300">
                <p>📧 juniorgn7dev@gmail.com</p>
                <p>📱 +55 (21) 99422-0180</p>
                <p>📍 Rio de Janeiro, Brasil</p>
                <p className="text-green-400 font-medium">✅ Disponível para projetos</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-red-500" /> por Anderson Assumpção Junior © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
