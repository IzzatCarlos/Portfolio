import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Fut-Score",
    description:
      "Um projeto criado no 3o Semestre do curso de ADS. O site FutScore surge como uma solucao acessivel e abrangente para os fas do futebol brasileiro, oferecendo placares ao vivo, tabelas, jogos futuros, informacoes sobre times e muito mais.",
    tags: ["React-Native", "JavaScript"],
    image: "/images/project-greentech.jpg",
    repoUrl: "#",
  },
  {
    title: "JobHub",
    description:
      "O projeto do 2o semestre do curso de ADS, e uma plataforma online destinada a facilitar o processo de recrutamento e selecao de pessoal. De um lado, candidatos podem preencher seus curriculos e aplicar para vagas de emprego que se alinham com suas habilidades e experiencias.",
    tags: ["HTML", "CSS", "C#", "JavaScript"],
    image: "/images/project-portfolio.jpg",
    repoUrl: "#",
  },
  {
    title: "SuperDramas",
    description:
      "Esse projeto consiste em um site que auxilie os fas de doramas a organizarem suas listas de titulos assistidos, planejam assistir, assistindo ou abandonados. Esse sistema sera um site interativo que tambem fortalecera o vinculo do publico com o canal do parceiro, promovendo maior engajamento e interacao.",
    tags: ["Python", "FastAPI", "PostgreSQL", "JavaScript"],
    image: "/images/project-kopu.jpg",
    liveUrl: "#",
    repoUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
          Podemos construir um projeto incrivel juntos.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
          Cada case abaixo foi um desafio que resolvi unindo tecnologia e dedicacao.
        </p>

        {/* Project cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl"
            >
              {/* Card image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={`Preview de ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border-0 bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-3 text-lg font-bold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex items-center gap-2">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="gap-1.5 rounded-full bg-neutral-900 px-4 text-xs text-white hover:bg-neutral-700"
                    >
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Ver Projeto
                        <ExternalLink className="size-3" />
                      </Link>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-1.5 rounded-full border-neutral-300 px-4 text-xs text-neutral-700 hover:bg-neutral-50"
                  >
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      Repositorio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
