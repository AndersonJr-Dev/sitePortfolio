"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Terminal } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    title: "ENDEREÇO_EMAIL",
    value: "juniorgn7dev@gmail.com",
    href: "mailto:juniorgn7dev@gmail.com",
  },
  {
    icon: Phone,
    title: "TELEFONE",
    value: "+55 (21) 994220180",
    href: "tel:+5521994220180",
  },
  {
    icon: MapPin,
    title: "GEO_LOC",
    value: "Rio de Janeiro, BR",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GITHUB",
    href: "https://github.com/AndersonJr-Dev",
  },
  {
    icon: Linkedin,
    name: "LINKEDIN",
    href: "https://www.linkedin.com/in/juniorgn7/",
  },
  {
    icon: Instagram,
    name: "INSTAGRAM",
    href: "https://www.instagram.com/andersonjrdev/",
  },
]

export default function ContactPage() {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function handleSendWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const firstName = firstNameRef.current?.value || ""
    const lastName = lastNameRef.current?.value || ""
    const email = emailRef.current?.value || ""
    const subject = subjectRef.current?.value || ""
    const message = messageRef.current?.value || ""
    const fullName = `${firstName} ${lastName}`.trim()

    const text = encodeURIComponent(
      `> MENSAGEM_CHEGANDO\n\nDE: ${fullName}\nEMAIL: ${email}\nASSUNTO: ${subject}\n\nCONTEUDO:\n${message}`
    )
    const phone = "5521994220180"
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center">
      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-7xl border-x border-zinc-800/30 h-full flex justify-between">
          <div className="w-px h-full bg-zinc-800/30"></div>
          <div className="w-px h-full bg-zinc-800/30"></div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">

        {/* Header */}
        <div className="mb-20 border-b-2 border-zinc-800 pb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-2 py-1 bg-accent text-accent-foreground text-xs font-mono font-bold uppercase border border-black">
            /TRANSMISSÃO
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            Interface de Contato
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-mono leading-relaxed border-l-4 border-accent pl-6">
            &gt; Inicializar sequência de comunicação.<br />
            &gt; Aberto a novos projetos e colaborações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form Section */}
          <div>
            <div className="border-2 border-zinc-800 bg-zinc-900 p-8 mb-8">
              <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-4">
                <Terminal className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-bold font-mono uppercase tracking-wider">/ESCREVER_MENSAGEM</h2>
              </div>

              <form className="space-y-6" onSubmit={handleSendWhatsApp}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-mono text-xs uppercase text-zinc-500">Nome</Label>
                    <Input
                      id="firstName"
                      placeholder="NOME"
                      className="rounded-none bg-zinc-950 border-zinc-800 focus:border-accent font-mono text-zinc-300 placeholder:text-zinc-700"
                      ref={firstNameRef}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-mono text-xs uppercase text-zinc-500">Sobrenome</Label>
                    <Input
                      id="lastName"
                      placeholder="SOBRENOME"
                      className="rounded-none bg-zinc-950 border-zinc-800 focus:border-accent font-mono text-zinc-300 placeholder:text-zinc-700"
                      ref={lastNameRef}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-xs uppercase text-zinc-500">Endereço_Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@dominio.com"
                    className="rounded-none bg-zinc-950 border-zinc-800 focus:border-accent font-mono text-zinc-300 placeholder:text-zinc-700"
                    ref={emailRef}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-xs uppercase text-zinc-500">Assunto</Label>
                  <Input
                    id="subject"
                    placeholder="LINHA_DE_ASSUNTO"
                    className="rounded-none bg-zinc-950 border-zinc-800 focus:border-accent font-mono text-zinc-300 placeholder:text-zinc-700"
                    ref={subjectRef}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-xs uppercase text-zinc-500">Corpo_da_Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="> DIGITE_MENSAGEM_AQUI..."
                    rows={6}
                    className="rounded-none bg-zinc-950 border-zinc-800 focus:border-accent font-mono text-zinc-300 placeholder:text-zinc-700 resize-none"
                    ref={messageRef}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-transparent hover:border-black font-mono font-bold uppercase tracking-wider h-12"
                >
                  <Send className="h-4 w-4 mr-2" />
                  [EXECUTAR_ENVIO]
                </Button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            {/* Status Card */}
            <div className="border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-mono text-sm font-bold text-zinc-500 uppercase mb-4 border-b border-zinc-800 pb-2">/STATUS_ATUAL</h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <p className="font-mono font-bold text-green-500 uppercase">Sistema Online & Disponível</p>
              </div>
              <p className="mt-4 text-xs font-mono text-zinc-500">
                Tempo de Resposta: &lt; 24 Horas<br />
                Localização: Rio de Janeiro, Brasil [UTC-3]
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-zinc-800 bg-zinc-900 hover:border-accent transition-colors group">
                  <div className="w-10 h-10 border border-zinc-800 bg-zinc-950 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                    <info.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-300 uppercase mb-1">{info.title}</h4>
                    <Link href={info.href} className="font-mono text-sm font-bold text-zinc-200 hover:text-accent hover:underline decoration-dashed underline-offset-4">
                      {info.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Grid */}
            <div className="border-t-2 border-zinc-800 pt-8">
              <h3 className="font-mono text-sm font-bold text-zinc-500 uppercase mb-6">/UPLINKS_SOCIAIS</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="flex-1 py-4 border border-zinc-800 bg-zinc-900 flex flex-col items-center justify-center gap-2 hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
                  >
                    <social.icon className="h-5 w-5 text-zinc-500 group-hover:text-white" />
                    <span className="text-[10px] font-mono uppercase text-zinc-600 group-hover:text-accent">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
