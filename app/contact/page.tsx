"use client"

// ...existing code...
import { useRef } from "react"
// Importação dos componentes de UI e ícones
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Informações de contato principais
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "juniorgn7dev@gmail.com",
    href: "mailto:juniorgn7dev@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (21) 994220180",
    href: "tel:+5521994220180",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Rio de Janeiro, Brasil",
    href: "#",
  },
]


// Links das redes sociais
const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/AndersonJr-Dev",
    color: "hover:text-gray-100",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juniorgn7/",
    color: "hover:text-blue-100",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/andersonjrdev/",
    color: "hover:text-pink-200",
  },
]


// Componente principal da página de contato

export default function ContactPage() {
  // Refs para os campos do formulário
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  // Função para enviar mensagem para o WhatsApp
  function handleSendWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const firstName = firstNameRef.current?.value || ""
    const lastName = lastNameRef.current?.value || ""
    const email = emailRef.current?.value || ""
    const subject = subjectRef.current?.value || ""
    const message = messageRef.current?.value || ""
    const fullName = `${firstName} ${lastName}`.trim()
    // Monte a mensagem
    const text = encodeURIComponent(
      `Olá Anderson!\n\nNome: ${fullName}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`
    )
    // Seu número no formato internacional, sem espaços ou traços
    const phone = "5521994220180"
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, "_blank")
  }

  return (
    // Container principal com overlay de blur
    <div className="min-h-screen relative">
      <div className="absolute inset-0 content-blur opacity-20" />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Cabeçalho da página */}
          <div className="text-center mb-16">
            {/* Espaço para possível ícone ou imagem */}
            <div className="flex justify-center mb-6">
            </div>
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Entre em Contato
            </h1>
            {/* Subtítulo/descrição */}
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              <span className="text-2xl font-italic text-zinc-50 mb-6 text-center">Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e colaborações.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de contato */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSendWhatsApp}>
                  {/* Campos do formulário */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input
                        id="firstName"
                        placeholder="Seu nome"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        ref={firstNameRef}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input
                        id="lastName"
                        placeholder="Seu sobrenome"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        ref={lastNameRef}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      ref={emailRef}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      placeholder="Sobre o que você gostaria de conversar?"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      ref={subjectRef}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me mais sobre seu projeto ou ideia..."
                      rows={6}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      ref={messageRef}
                    />
                  </div>

                  {/* Botão de envio */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de contato e redes sociais */}
            <div className="space-y-8">
              {/* Detalhes de contato */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                  <CardDescription>Outras formas de entrar em contato comigo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors duration-300"
                    >
                      {/* Ícone do tipo de contato */}
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-100">{info.title}</h3>
                        <Link
                          href={info.href}
                          className="text-slate-100 hover:text-blue-300 transition-colors duration-300"
                        >
                          {info.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Links das redes sociais */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Redes Sociais</CardTitle>
                  <CardDescription>Conecte-se comigo nas redes sociais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        className={`w-12 h-12 bg-gradient-to-r from-blue-400/80 to-purple-400/80 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 shadow-lg ${social.color}`}
                      >
                        <social.icon className="h-6 w-6 text-white drop-shadow-md" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Disponibilidade para novos projetos */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Disponibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    <span className="text-white">Atualmente estou disponível para novos projetos e oportunidades de trabalho.</span>
                  </p>
                  <div className="space-y-2 text-sm text-blue-100">
                    <p className="text-white">⏰ Resposta em até 24 horas</p>
                    <p className="text-white">🌍 Trabalho remoto ou presencial (Rio de Janeiro)</p>
                    <p className="text-white">💼 Projetos freelance e oportunidades CLT</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
