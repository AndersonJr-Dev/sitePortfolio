"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Terminal, Cpu, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects as allProjects } from "@/lib/data"

const featuredProjects = allProjects.filter((p) => p.featured)

const skills = [
  { name: "ARQ_FRONTEND", icon: Layers, description: "React / Next.js / TypeScript / Tailwind CSS" },
  { name: "SISTEMAS_BACKEND", icon: Database, description: "Python / FastAPI / Node.js / PostgreSQL / Express" },
  { name: "DEVOPS", icon: Cpu, description: "Docker / Cloud Services / Pipelines CI/CD / Git" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center">

      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-7xl border-x border-zinc-800/30 h-full flex justify-between">
          <div className="w-px h-full bg-zinc-800/30"></div>
          <div className="w-px h-full bg-zinc-800/30"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center z-10 border-b border-zinc-800">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground text-xs font-mono font-bold uppercase tracking-wider border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="animate-pulse">●</span> Sistema Online
          </div>

          <div className="space-y-2">
            <h2 className="text-zinc-300 font-mono text-sm tracking-widest uppercase">Anderson Assumpção Junior</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none tracking-tighter">
              Desenvolvedor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300">FULLSTACK</span>
            </h1>
          </div>

          <p className="text-lg text-zinc-200 max-w-lg font-mono leading-relaxed border-l-2 border-accent pl-4">
            &gt; Inicializando protocolos criativos...<br />
            &gt; Construindo infraestrutura digital robusta.<br />
            &gt; Código limpo. Alta performance.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-transparent hover:border-black transition-all font-mono font-bold text-sm uppercase tracking-wide">
              <Link href="/projects">
                /VER_PROJETOS
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white font-mono font-bold text-sm uppercase tracking-wide">
              <Link href="/contact">
                /CONTATE_ME
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-accent opacity-20 group-hover:opacity-40 transition-opacity rounded-none blur-none border border-accent/20" />
          <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden border-2 border-zinc-800 bg-zinc-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 pointers-events-none" />
            <Image
              src="/meuPerfil.jpg"
              alt="Anderson Junior"
              fill
              className="object-cover transition-all duration-500"
              priority
            />
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent z-20"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent z-20"></div>
          </div>
        </div>
      </section>

      {/* Skills Section - Industrial Cards */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10 border-b border-zinc-800">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Especificações do Sistema</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transition-all">
              <CardHeader className="border-b-2 border-zinc-900 pb-4">
                <div className="mb-2 text-accent">
                  <skill.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-mono text-zinc-100 uppercase">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section - Directory List Style */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Banco de Projetos</h2>
          <div className="h-px flex-1 bg-zinc-800 mx-6 mb-2"></div>
          <Link href="/projects" className="font-mono text-accent hover:underline text-sm uppercase flex items-center gap-2">
            [VER_TUDO] <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <Link href={project.github} target="_blank" key={project.id} className="group block h-full">
              <div className="h-full border-2 border-zinc-800 bg-zinc-900 p-4 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] hover:border-accent flex flex-col">

                {/* Tech Header */}
                <div className="flex justify-between items-start mb-4 border-b border-zinc-950 pb-2">
                  <span className="font-mono text-xs text-zinc-500">ID: {project.id.toString().padStart(3, '0')}</span>
                  <Badge variant="outline" className="rounded-none border-accent text-accent font-mono text-[10px] uppercase">
                    {project.category}
                  </Badge>
                </div>

                <div className="relative aspect-video w-full mb-4 border border-zinc-800 bg-zinc-950 overflow-hidden group-hover:border-accent/50 transition-colors">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-300 font-mono line-clamp-3 mb-4 flex-1">
                  &gt; {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-1 bg-zinc-950 text-[10px] text-zinc-400 font-mono border border-zinc-800 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full border-t border-zinc-800 bg-zinc-950 py-20 pt-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Terminal className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white">
            Pronto para o deploy?
          </h2>
          <p className="text-zinc-300 font-mono mb-8 max-w-md mx-auto">
            Vamos trabalhar juntos para iniciar algo incrível!
          </p>
          <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-zinc-200 h-14 px-8 font-bold font-mono uppercase tracking-widest border-2 border-transparent hover:border-accent">
            <Link href="/contact">
              [INICIAR_CONTATO]
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
