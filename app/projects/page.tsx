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
    demo: "https://andersonjr-dev.github.io/buscador-de-perfil-github/",
    category: "Frontend",
    featured: true, // Marque como true para aparecer em destaque
  },
  {
    id: 2,
    title: "Teste Técnico Innovation Class",
    description: "Projeto de teste técnico com funcionalidades de cadastro, listagem e exclusão de usuários.",
    longDescription: "Desenvolvido para avaliação técnica, inclui CRUD completo, validação de formulários e layout responsivo.",
    image: "/teste-innovation-class.png",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AndersonJr-Dev/teste-tecnico-innovation-class",
    demo: "https://andersonjr-dev.github.io/teste-tecnico-innovation-class/",
    category: "Frontend",
    featured: true,
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
