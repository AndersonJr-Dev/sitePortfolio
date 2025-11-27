import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Lista de projetos reais. Para adicionar novos, basta inserir um novo objeto abaixo.
export const projects = [
  {
    id: 1,
    title: "Buscador de Perfil GitHub",
    description: "Aplicação para buscar e exibir perfis do GitHub de forma rápida e responsiva.",
    longDescription: "Permite pesquisar qualquer usuário do GitHub e visualizar informações públicas do perfil, repositórios e estatísticas.",
    image: "/buscador-github.png", // Substitua pelo caminho da imagem do projeto se desejar
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/AndersonJr-Dev/buscador-de-perfil-github",
    //demo: "https://andersonjr-dev.github.io/buscador-de-perfil-github/",
    category: "Frontend",
    featured: false, // Marque como true para aparecer em destaque
  },
  {
    id: 2,
    title: "Teste Técnico Innovation Class",
    description: "Projeto de teste técnico com funcionalidades de cadastro, listagem e exclusão de usuários.",
    longDescription: "Desenvolvido para avaliação técnica, inclui CRUD completo, validação de formulários e layout responsivo.",
    image: "/teste-innovation-class.png",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AndersonJr-Dev/teste-tecnico-innovation-class",
    //demo: "https://andersonjr-dev.github.io/teste-tecnico-innovation-class/",
    category: "Frontend",
    featured: false,
  },
  {
    id: 3,
    title: "Projeto Tarefas FastAPI",
    description: "API de tarefas desenvolvida com FastAPI, Python e SQLite.",
    longDescription: "Backend para gerenciamento de tarefas, com endpoints RESTful, autenticação JWT e documentação automática.",
    image: "/tarefas-fastapi2.png",
    technologies: ["Python", "FastAPI", "SQLite", "JWT"],
    github: "https://github.com/AndersonJr-Dev/projeto_tarefas_fastapi",
    demo: "",
    category: "Backend",
    featured: false,
  },
  {
    id: 4,
    title: "Projeto App Feira de Trocas (TrocAi)",
    description: "Uma aplicação full-stack para troca de itens usados em uma comunidade local.",
    longDescription: "TrocAi é uma plataforma que permite aos usuários de uma comunidade local registrar e trocar itens usados, como livros, roupas, brinquedos e eletrônicos, promovendo o consumo consciente e fortalecendo os laços comunitários.",
    image: "/app-feira-trocas.png",
    technologies: ["ReactJS", "Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/AndersonJr-Dev/app-feira-de-trocas",
    demo: "",
    category: "Fullstack",
    featured: true,
  },
  {
    id: 5,
    title: "Projeto SitePrótetico",
    description: "Site institucional para uma clínica de prótese dentária.",
    longDescription: "Desenvolvido um site institucional para uma clínica de prótese dentária, apresentando serviços, equipe e informações de contato de forma clara e atraente.",
    image: "/site-protetico.png",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    github: "https://github.com/AndersonJr-Dev/SiteProtetico/tree/main",
    demo: "",
    category: "Frontend",
    featured: false,
  },
  {
    id: 6,
    title: "Projeto ImagePress",
    description: "Aplicativo de desktop Electron para otimizar imagens arrastadas (JPG/PNG)",
    longDescription: "ImagePress é um aplicativo de desktop desenvolvido com Electron que permite aos usuários otimizar imagens arrastando e soltando arquivos JPG ou PNG na interface. O aplicativo reduz o tamanho dos arquivos de imagem sem comprometer significativamente a qualidade, facilitando o compartilhamento e armazenamento.",
    image: "/imagepress.png",
    technologies: ["Electron", "Node.js", "JavaScript", "Sharp"],
    github: "https://github.com/AndersonJr-Dev/imagepress",
    demo: "",
    category: "Fullstack",
    featured: true,
  },
  {
    id: 7,
    title: "Projeto Buscador de Vulnerabilidades",
    description: "Um programa para busca de vulnerabilidades em sistemas web, desenvolvido para profissionais de segurança e participantes de programas de bug bounty.",
    longDescription: "Este projeto é uma ferramenta de linha de comando desenvolvida em Python que permite aos usuários buscar vulnerabilidades comuns em sistemas web. Com uma interface simples, o programa realiza varreduras automatizadas para identificar falhas de segurança, auxiliando profissionais de segurança e entusiastas de bug bounty a protegerem suas aplicações.",
    image: "/buscador-vulnerabilidades.png",
    technologies: ["Python"],
    github: "https://github.com/AndersonJr-Dev/Buscador-Vulnerabilidades",
    demo: "",
    category: "Backend",
    featured: false,
  },
  {
    id: 8,
    title: "Pilops - Histórico de Voos",
    description: "Projeto full-stack com frontend e API para histórico de voos.",
    longDescription:
      "Frontend em React/Vite e backend em Node/Express/TypeScript que servem um histórico de voos com transformação de dados. O frontend consome a API e apresenta lista e detalhes de voos seguindo design do Figma.",
    image: "/teste-pilops.png",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/AndersonJr-Dev/pilops-frontend",
    demo: "https://pilops-frontend.vercel.app/",
    category: "Fullstack",
    featured: false,
  },
  {
    id: 9,
    title: "Projeto Reserve.me",
    description: "Sistema de reserva de horários para salões e barbearias, com funcionalidades de cadastro, login e reserva.",
    longDescription: "Desenvolvido um sistema de reserva de horários para salões e barbearias, permitindo que os usuários se registrem, façam login, reservem horários disponíveis. O sistema também inclui um painel administrativo para gerenciar funcionarios, CRM, funcionarios, horários e reservas.",
    image: "/reserve-me.png",
    technologies: ["Next.Js", "TypeScript", "Tailwind CSS", "Supabase", "Lucide Icons"],
    github: "https://github.com/AndersonJr-Dev/reserve-me-saas",
    demo: "https://reserve-me-online.vercel.app/",
    category: "Fullstack",
    featured: true,
  },
]

const categories = ["Todos", "Fullstack", "Frontend", "Backend"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 content-blur opacity-20" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meus Projetos
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
<span className="text-zinc-50">Uma coleção dos meus trabalhos mais significativos, demonstrando habilidades em diferentes tecnologias</span>
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-italic text-zinc-50 mb-6 text-center text-zinc-30">Projetos em Destaque</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600">
                            {project.category}
                          </Badge>
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-2">
                              <Button asChild size="sm" variant="secondary" className="flex-1">
                                <Link href={project.github} target="_blank">
                                  <Github className="h-4 w-4 mr-2" />
                                  Código
                                </Link>
                              </Button>
                              {project.demo && (
                                <Button asChild size="sm" className="flex-1">
                                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Visualizar
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-italic text-zinc-50 mb-6 text-center text-zinc-30">Todos os Projetos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Link href={project.github} target="_blank">
                          <Github className="h-3 w-3 mr-1" />
                          Código
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm" className="flex-1">
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Visualizar
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
