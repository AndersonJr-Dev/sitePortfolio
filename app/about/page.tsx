import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Terminal } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "BACKEND_DEV",
    company: "Projeto: App Feira de Trocas",
    period: "2025 (Acadêmico)",
    description:
      "Desenvolvi API RESTful com Node.js/Express. Modelagem de dados com Prisma. Colaborei definição de requisitos.",
  },
  {
    title: "FULLSTACK_DEV",
    company: "Projeto: Agenda Digital",
    period: "2025 (Pessoal)",
    description:
      "Construí arquitetura MVC completa com Node.js, Express, MongoDB. Implementei CRUD, auth, criptografia e gestão de sessões.",
  },
  {
    title: "FRONTEND_DEV",
    company: "Projeto: Site Helson Protético",
    period: "2025 (Freelance)",
    description:
      "Desenvolvimento de um site institucional de alta performance focado em geração de leads e otimização de SEO.",
  },
  {
    title: "FRONTEND_DEV",
    company: "Projeto: Cardápio Digital",
    period: "2025 (Freelance)",
    description:
      "Cardápio digital interativo com React/TypeScript/Tailwind. Integração com WhatsApp para gestão de pedidos.",
  },
]

const education = [
  {
    title: "Análise e Des. de Sistemas",
    institution: "Universidade Estácio",
    period: "2025 - 2027",
    status: "EM_ANDAMENTO",
  },
  {
    title: "Lógica Python",
    institution: "Curso em Vídeo",
    period: "2025",
    status: "CONCLUÍDO",
  },
  {
    title: "Fullstack JS/TS",
    institution: "Udemy",
    period: "2025",
    status: "EM_ANDAMENTO",
  },
  {
    title: "Developer Fullstack",
    institution: "Atlantico Avanti",
    period: "2025",
    status: "CONCLUÍDO",
  },
  {
    title: "Desenvolvimento Web",
    institution: "Udemy",
    period: "2025",
    status: "EM_ANDAMENTO",
  }
]

const technologies = [
  "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js",
  "Node.js", "Express", "Python", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "Git", "GitHub",
]

export default function AboutPage() {
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
            /PERFIL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            Anderson Jr.
          </h1>
          <p className="text-xl text-zinc-200 max-w-2xl font-mono leading-relaxed border-l-4 border-accent pl-6">
            &gt; Desenvolvedor Fullstack.<br />
            &gt; Apaixonado por sistemas robustos e arquitetura limpa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="border-2 border-zinc-800 bg-zinc-900 p-6">
              <div className="w-full aspect-square relative mb-6 border border-zinc-800 bg-zinc-950">
                <Image
                  src="/meuPerfil.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                {/* Corner Markings */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-accent" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent" />
              </div>

              <h2 className="text-xl font-bold font-mono mb-2 uppercase">Anderson A. Jr</h2>
              <p className="text-zinc-300 font-mono text-sm mb-6">&gt; Desenvolvedor Fullstack</p>

              <div className="space-y-3 font-mono text-sm border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="h-4 w-4" />
                  <span>Rio de Janeiro, BR</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Calendar className="h-4 w-4" />
                  <span className="text-accent">Disponível para trabalho</span>
                </div>
              </div>

              <Button asChild className="w-full mt-6 rounded-none bg-zinc-100 text-black hover:bg-white font-mono font-bold uppercase border-2 border-transparent">
                <a href="/curriculo-anderson-junior.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar CV
                </a>
              </Button>
            </div>
          </div>

          {/* Typewriter Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Bio */}
            <section className="border-2 border-zinc-800 bg-zinc-900 p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                <Terminal className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-bold uppercase font-mono tracking-wider">/BIO_LOG</h2>
              </div>
              <div className="prose prose-invert max-w-none font-mono text-sm text-zinc-300 space-y-4">
                <p>
                  /SYSTEM_STATUS<br />
                  &gt; Role: Desenvolvedor Fullstack<br />
                  &gt; Status: 🟢 Disponível para contratação / Projetos Freelance<br />
                  &gt; Foco: Entrega de soluções web escaláveis e modernas.<br />
                  <br />
                  /TECH_STACK<br />
                  &gt; Core: Javascript | Typescript<br />
                  &gt; Frontend: React | Next.js | Tailwind CSS<br />
                  &gt; Backend: Node.js | Express<br />
                  <br />
                  /DEV_LOG<br />
                  &gt; Missão: Construir código limpo e performático que resolva problemas reais de negócio.<br />
                  &gt; Atualmente: Aprimorando a stack atual e trabalhando em projetos pessoais.
                </p>
                <p>
                  Estou pronto para aplicar essa stack na criação de produtos digitais de alto impacto, seja integrando sua equipe ou tirando um projeto freelance do papel. Vamos conversar sobre como posso agregar valor ao seu próximo desafio.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold uppercase font-mono tracking-wider mb-6 flex items-center gap-3">
                <span className="text-accent">#</span> Linha_do_Tempo_Profissional
              </h2>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-zinc-800 bg-zinc-900/50 pl-6 py-4 hover:border-accent transition-colors group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-lg text-zinc-200 group-hover:text-accent font-mono">{exp.title}</h3>
                      <Badge variant="outline" className="rounded-none font-mono text-xs border-zinc-700 text-zinc-400">{exp.period}</Badge>
                    </div>
                    <p className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wide">{exp.company}</p>
                    <p className="text-zinc-300 font-mono text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold uppercase font-mono tracking-wider mb-6 flex items-center gap-3">
                <span className="text-accent">#</span> Log_Educacional
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                  <div key={index} className="border border-zinc-800 bg-zinc-900 p-4 hover:bg-zinc-800 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-zinc-200 font-mono text-sm">{edu.title}</h3>
                      <div className={`w-2 h-2 rounded-full ${edu.status === "CONCLUÍDO" ? "bg-accent" : "bg-zinc-600"}`} />
                    </div>
                    <p className="text-xs text-zinc-400 font-mono mb-2">{edu.institution}</p>
                    <Badge variant="secondary" className="rounded-none text-[10px] bg-black text-zinc-300 border border-zinc-800 font-mono">
                      {edu.period}
                    </Badge>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section className="border-t-2 border-zinc-800 pt-8">
              <h2 className="text-xl font-bold uppercase font-mono tracking-wider mb-6">
                /STACK_TECNOLÓGICO
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-zinc-800 bg-zinc-900 text-zinc-400 font-mono text-sm uppercase hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
