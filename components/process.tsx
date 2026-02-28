import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Pesquisa",
    description:
      "Iniciamos com uma conversa para entender suas necessidades, publico-alvo, objetivos e requisitos do projeto.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Partindo das informacoes coletadas, crio prototipos e layouts para garantir uma experiencia intuitiva e agradavel.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Neste momento a magica acontece: tiramos o design do papel e transformamos em um projeto real e de alta performance.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega",
    description:
      "Te entrego o projeto finalizado, pronto para ser lancado e causar uma otima impressao nos seus clientes.",
  },
]

const techMarquee = [
  "React",
  "React Native",
  "JavaScript",
  "C#",
  "Python",
  "FastAPI",
  "HTML",
  "CSS",
  "PostgreSQL",
  "Next.js",
  "TypeScript",
  "Git",
]

export function Process() {
  return (
    <section id="processo" className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Como e meu processo de trabalho?
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
          Conheca meu processo criativo e descubra como eu posso te ajudar a fortalecer a sua presenca digital.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-neutral-600">
                  {step.number}
                </span>
                <step.icon className="size-4 text-neutral-400" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="relative mt-12 overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-6">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-sm font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quote block */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10">
          <p className="mx-auto max-w-3xl text-pretty text-center text-sm leading-relaxed text-neutral-400 italic md:text-base">
            {"\u201CAcredito que a tecnologia tem o poder de transformar realidades, otimizar processos e gerar valor para as pessoas e organizacoes.\u201D"}
          </p>
        </div>
      </div>
    </section>
  )
}
