import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Pesquisa",
    description:
      "Iniciamos com uma conversa para entender suas necessidades, público-alvo, objetivos e requisitos do projeto.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Partindo das informações coletadas, crio protótipos e layouts para garantir uma experiência intuitiva e agradável.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Neste momento a mágica acontece: tiramos o design do papel e transformamos em um projeto real e de alta performance.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega",
    description:
      "Te entrego o projeto finalizado, pronto para ser lançado e causar uma ótima impressão nos seus clientes.",
  },
]

const techMarquee = [
  "React", "React Native", "JavaScript", "C#", "Python", 
  "FastAPI", "HTML", "CSS", "PostgreSQL", "Next.js", 
  "TypeScript", "Git",
]

export function Process() {
  return (
    <section id="processo" className="bg-[#0a0a0a] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Título: Padronizado para Semibold e Tamanho do exemplo */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Como é meu processo de trabalho?
        </h2>

        {/* Descrição: Texto normal em neutral-400 para contraste suave no dark */}
        <p className="mt-6 max-w-3xl text-neutral-400 text-base md:text-lg leading-relaxed">
          Conheça meu processo criativo e descubra como eu posso te ajudar a fortalecer a sua presença digital.
        </p>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-10 transition-all hover:border-neutral-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-600">
                  {step.number}
                </span>
                <step.icon className="size-8 text-blue-500" />
              </div>
              
              {/* Títulos internos agora em Semibold */}
              <h3 className="mt-8 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee: Letras no padrão Semibold */}
        <div className="relative mt-24 overflow-hidden py-12 border-y border-neutral-800/50">
          <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          
          <div className="animate-marquee flex w-max items-center gap-16">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-3xl font-semibold tracking-tighter text-neutral-600 transition-colors hover:text-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2.5rem] border border-neutral-800 bg-neutral-900/30 p-12 md:p-20 text-center">
          <p className="mx-auto max-w-5xl text-xl font-semibold leading-relaxed text-neutral-300 italic md:text-3xl">
            {"\u201CAcredito que a tecnologia tem o poder de transformar realidades, otimizar processos e gerar valor para as pessoas e organizações.\u201D"}
          </p>
        </div>
      </div>
    </section>
  )
}