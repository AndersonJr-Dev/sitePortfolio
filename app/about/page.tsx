import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Award } from "lucide-react"
import Image from "next/image"

const experiences = [
{
  title: "Desenvolvedor Web - Back-end",
  company: "Projeto: App Feira de Trocas",
  period: "2025 (Projeto de Acadêmico)",
  description:
    "Participei no desenvolvimento do backend, criando uma API RESTful com Node.js e Express. Fui responsável pela modelagem do banco de dados com Prisma e colaborei ativamente no planejamento e definição de requisitos do projeto.",
},
{
  title: "Desenvolvedor Web - Full Stack",
  company: "Projeto: Agenda Digital",
  period: "2025 (Projeto Pessoal)",
  description:
    "Desenvolvi uma agenda digital completa com arquitetura MVC, utilizando Node.js, Express e MongoDB. Implementei funcionalidades CRUD, autenticação de usuários com criptografia e gerenciamento de sessões.",
},
]

const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Estácio",
    period: "2025 - 2027",
    status: "Em andamento",
  },
  {
    title: "Curso Logica de Programação em Python",
    institution: "Curso em Video",
    period: "2025",
    status: "Concluído",
  },
  {
    title: "Curso Fullstack JavaScript e Typescript",
    institution: "Udemy",
    period: "2025",
    status: "Em andamento",
  },
  {
    title: "Curso Developer Fullstack",
    institution: "Atlantico Avanti",
    period: "2025",
    status: "Concluído",
  },
    {
    title: "Curso Desenvolvimento Web",
    institution: "Udemy",
    period: "2025",
    status: "Em andamento",
  }
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 content-blur opacity-20" />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Sobre Mim
            </h1>
            <p className="text-xl text-zinc-50 max-w-3xl mx-auto">
              Conheça minha jornada, experiências e paixão por tecnologia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600">
                    <Image
                      src="/meuPerfil.jpg"
                      alt="Minha foto de perfil"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-2xl mt-4">Anderson Assumpção Junior</CardTitle>
                  <p className="text-slate-900">Desenvolvedor Fullstack</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4" />
                    <span className="text-slate-900">Rio de Janeiro, Brasil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Calendar className="h-4 w-4" />
                    <span className="text-slate-900">Disponível para projetos</span>
                  </div>
                  <a
                    href="/curriculo-anderson-dev-fullstack.pdf"
                    download
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Text */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Minha História
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-slate-900 leading-relaxed mb-4">
                    <span className="text-slate-900">Sou um desenvolvedor fullstack apaixonado por criar soluções digitais que fazem a diferença. Minha
                    jornada na programação começou há 1 ano, e desde então tenho me dedicado a aprender e aplicar as
                    melhores práticas de desenvolvimento.</span>
                  </p>
                  <p className="text-slate-900 leading-relaxed mb-4">
                    <span className="text-slate-900">Especializo-me em tecnologias modernas como React, Next.js e Node.js, Python, Javascript e Typescript sempre focando em código
                    limpo, performance e experiência do usuário. Acredito que a tecnologia deve ser acessível e resolver
                    problemas reais.</span>
                  </p>
                  <p className="text-slate-900 leading-relaxed mb-4">
                    <span className="text-slate-900">Quando não estou codando, gosto de estudar novas tecnologias, contribuir para projetos open source e
                    compartilhar conhecimento com a comunidade de desenvolvedores.</span>
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Experiência Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-600 pl-4 pb-6 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-slate-900">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Formação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-purple-600 pl-4 pb-6 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{edu.title}</h3>
                          <Badge variant={edu.status === "Concluído" ? "default" : "secondary"}>{edu.status}</Badge>
                        </div>
                        <p className="text-purple-600 font-medium mb-2">{edu.institution}</p>
                        <p className="text-slate-900">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Tecnologias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
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
