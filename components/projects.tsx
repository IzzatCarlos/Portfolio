import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Fut-Score",
    description:
      "Um projeto criado no 3° Semestre do curso de ADS. O app mobile FutScore surge como uma solução acessível e abrangente para os fãs do futebol brasileiro, oferecendo placares ao vivo, tabelas, jogos futuros, informações sobre times e muito mais.",
    tags: ["JavaScript", "React Native", "Mobile"],
    // Se Eu.jpg funciona, garanta que os arquivos abaixo existam na pasta public exatamente com esses nomes
    src: "/Futscore.jpg", 
    repoUrl: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t10-futscore.git",
  },
  {
    title: "JobHub",
    description:
      "O projeto do 2° semestre do curso de ADS, é uma plataforma online destinada a facilitar o processo de recrutamento e seleção de pessoal. De um lado, candidatos podem preencher seus currículos e aplicar para vagas de emprego que se alinham com suas habilidades e experiências.",
    tags: ["HTML", "CSS", "C#", "JavaScript"],
    src: "/Jobhub.jpg",
    repoUrl: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e2-proj-int-t9-jobhub.git",
  },
  {
    title: "SuperDramas",
    description:
      "Esse projeto consiste em um site que auxilie os fãs de doramas a organizarem suas listas de títulos assistidos, planejam assistir, assistindo ou abandonados.",
    tags: ["React", "FastAPI", "PostgreSQL", "Coolify"],
    src: "/Superdramas.jpg",
    repoUrl: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e5-proj-empext-t2-superdramas",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-white px-6 py-32 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-950 tracking-tight leading-[1.1]">
          Podemos construir um projeto incrível juntos.
        </h2>
        
        <p className="mt-6 max-w-3xl text-neutral-700 text-base md:text-lg leading-relaxed">
          Cada case abaixo foi um desafio que resolvi unindo tecnologia e dedicação.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Container da Imagem - Puxando via project.src */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50 p-6 border-b border-neutral-100"> 
                <Image
                  src={project.src}
                  alt={`Preview de ${project.title}`}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-neutral-200 bg-transparent px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-neutral-950">
                  {project.title}
                </h3>
                
                <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-700">
                  {project.description}
                </p>

                <div className="mt-10">
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full rounded-full border-neutral-300 py-6 text-base font-semibold text-neutral-900 transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 active:scale-95"
                  >
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      Ver Repositório
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