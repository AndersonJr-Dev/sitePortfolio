import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
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
            /ARQUIVO
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            Banco de Projetos
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-mono leading-relaxed border-l-4 border-accent pl-6">
            &gt; Coleção de sistemas implantados e experimentos.<br />
            &gt; Demonstrando capacidades fullstack.
          </p>
        </div>

        {/* Global Grid for All Projects */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wide">Índice de Projetos</h2>
            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects
              .map((project) => (
                <div key={project.id} className="group relative border-2 border-zinc-800 bg-zinc-900 p-6 hover:shadow-[12px_12px_0px_0px_rgba(39,39,42,1)] hover:border-accent hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">

                  {/* Image Frame */}
                  <div className="relative aspect-video w-full mb-8 border border-zinc-800 bg-zinc-950 overflow-hidden group-hover:border-accent/50 transition-colors">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="outline" className="bg-black/50 backdrop-blur-md rounded-none border-white text-white font-mono text-xs uppercase">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-3 font-mono group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-200 font-mono mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-zinc-950 text-xs text-zinc-300 font-mono border border-zinc-800 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <Button asChild className="flex-1 rounded-none bg-zinc-100 text-black hover:bg-white font-mono font-bold uppercase border-2 border-transparent">
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          VER CÓDIGO
                        </Link>
                      </Button>
                      {(project.demo && project.demo.trim() !== "") && (
                        <Button asChild variant="outline" className="flex-1 rounded-none border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white font-mono font-bold uppercase">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            VER ONLINE
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  )
}
