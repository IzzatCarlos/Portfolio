import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[400px_1fr]">
        
        {/* Profile photo */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-3xl lg:mx-0 shadow-2xl">
          <Image
            src="/Eu.jpg"
            alt="Foto de Carlos Henrique"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Bio com novas cores e textos */}
        <div>
          <p className="text-neutral-700 text-base md:text-lg">Muito prazer 👋🏻</p>
          
          <div className="my-2.5">
            <h2 className="text-4xl md:text-5xl mb-4 text-neutral-950 font-semibold tracking-tight">
              Carlos Henrique
            </h2>
            <h3 className="text-neutral-800 text-lg md:text-xl mb-6 font-medium">
              Desenvolvedor Full Stack & Especialista em TI na Saúde
            </h3>
          </div>

          <div className="space-y-6 text-neutral-700 text-base md:text-lg leading-relaxed">
            <p>
              Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela PUC Minas e atualmente sou pós-graduando em Ciência de Dados e Inteligência Artificial Aplicadas à Saúde. Atuo no Laboratório de Tecnologia e Inovação em Saúde (LTIS), onde desenvolvo sistemas médicos e acadêmicos, como plataformas de simulados e ferramentas de apoio ao aprendizado.
            </p>

            <p>
              Tenho experiência com C#, JavaScript, TypeScript, React e React Native, além de trabalhar com metodologias ágeis como Scrum e Kanban. Também presto suporte técnico a equipamentos utilizados em aulas e simulações médicas, incluindo manutenção de manequins da Laerdal.
            </p>

            <p>
              Iniciei minha trajetória na área administrativa e financeira, o que me proporcionou uma base sólida em organização, atendimento e gestão de processos. Hoje, uno tecnologia e saúde com foco em desenvolver soluções inteligentes, utilizando dados e Inteligência Artificial de forma ética e estratégica.
            </p>
          </div>

          {/* Social links ajustados para o estilo solicitado */}
          <div className="mt-8 flex gap-6 md:gap-8 justify-center lg:justify-start">
            <Link 
              href="https://www.linkedin.com/in/carlos-henrique-santos-da-silva-b5634b268" 
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Linkedin className="size-7 text-neutral-800" />
            </Link>
            <Link 
              href="https://github.com/IzzatCarlos" 
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Github className="size-7 text-neutral-800" />
            </Link>
            <Link 
              href="https://www.instagram.com/izzat_carlos/" 
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              <Instagram className="size-7 text-neutral-800" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}