"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const phoneNumber = "5521994220180"
  const message = encodeURIComponent("Olá Anderson, vi seu portfólio e gostaria de entrar em contato!")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-zinc-900 border-2 border-zinc-800 text-accent hover:bg-accent hover:text-black hover:border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip neo-brutalista */}
        <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-900 border-2 border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Falar no WhatsApp
        </span>
      </div>
    </Link>
  )
}
