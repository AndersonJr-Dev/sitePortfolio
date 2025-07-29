"use client"
// Importação dos componentes reutilizáveis e ícones
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Github, ExternalLink } from "lucide-react"
// ...existing code...
import Link from "next/link"
import Image from "next/image"

// Importa os projetos da página de projetos
import { projects as allProjects } from "./projects/page"

// Filtra apenas os projetos em destaque
const featuredProjects = allProjects.filter((p) => p.featured)

// Lista de habilidades principais exibidas na seção "Especialidades"
const skills = [
  { name: "Frontend", icon: Globe, description: "HTML5, CSS3, JavaScript, TypeScript, React, Next.js" },
  { name: "Backend", icon: Database, description: "Node.js, Express, Python, C#, PostgreSQL, MongoDB" },
  { name: "DevOps", icon: Code, description: "Docker, AWS, Vercel, CI/CD" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 content-blur opacity-20" />
      <div className="relative">
        {/* Seção de destaque (Hero Section) */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
          {/* Foto de perfil redonda */}
          <div className="mb-8">
            {/* Wrapper com group para efeito hover */}
            <div className="group mx-auto w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110">
              <Image
                src="/meuPerfil.jpg"
                alt="Minha foto de perfil"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Título principal */}
          {/* Título principal com gradiente animado e fade-in */}
          <h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent mb-6 animate-gradient-fadein"
            style={{
              backgroundImage: 'linear-gradient(90deg, #f472b6, #a78bfa, #3b82f6, #0f5f6bff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Desenvolvedor Fullstack
          </h1>
          {/* Descrição do perfil */}
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Criando experiências digitais inovadoras com código limpo, design moderno e segurança
          </p>
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão para ver projetos */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/projects">
                Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* Botão para entrar em contato */}
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Entrar em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de habilidades (Skills Section) */}
      <section className="py-16 px-4 relative">
        {/* Efeito de blur no fundo */}
        <div className="absolute inset-0 content-blur opacity-30" />
        <div className="relative">
          <div className="max-w-6xl mx-auto">
            {/* Título da seção */}
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-fadein"
              style={{
                backgroundImage: 'linear-gradient(90deg, #f472b6, #a78bfa, #3b82f6, #0f5f6bff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Especialidades
            </h2>
            {/* Lista de habilidades */}
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
                >
                  <CardHeader className="text-center">
                    {/* Ícone da habilidade */}
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-200 text-center">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de projetos em destaque (Featured Projects) */}
      <section className="py-16 px-4 relative">
        {/* Efeito de blur no fundo */}
        <div className="absolute inset-0 content-blur opacity-40" />
        <div className="relative">
          <div className="max-w-6xl mx-auto">
            {/* Título e descrição da seção */}
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-fadein"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #f472b6, #a78bfa, #3b82f6, #0f5f6bff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Projetos em Destaque
              </h2>
              <p className="text-slate-200 text-lg">
                Alguns dos meus trabalhos mais recentes e impactantes
              </p>
            </div>

            {/* Lista de cards de projetos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
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

            {/* Botão para ver todos os projetos */}
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  Ver Todos os Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de call-to-action (CTA Section) */}
      <section className="py-20 px-4 relative">
        {/* Efeito de blur no fundo */}
        <div className="absolute inset-0 content-blur opacity-30" />
        <div className="relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título do CTA */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-fadein"
              style={{
                backgroundImage: 'linear-gradient(90deg, #f472b6, #a78bfa, #3b82f6, #0f5f6bff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Pronto para o próximo projeto?
            </h2>
            {/* Descrição do CTA */}
            <p className="text-xl text-slate-200 mb-8">
              Vamos trabalhar juntos para criar algo incrível
            </p>
            {/* Botão para iniciar conversa */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/contact">
                Iniciar Conversa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
