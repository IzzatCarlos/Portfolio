import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 pt-20 text-center"
    >
      {/* Tag */}
      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1.5 text-xs font-medium text-neutral-300">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        Desenvolvedor Full Stack
      </span>

      {/* Headline */}
      <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Construindo experiencias digitais, do design ao codigo.
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-neutral-400 md:text-base">
        Meu codigo nao salva vidas, mas ajuda quem cuida delas a fazer isso de
        forma mais eficiente e inteligente.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-white px-8 text-[#0a0a0a] hover:bg-neutral-200"
        >
          <Link href="#contato">Fale comigo</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-neutral-700 bg-transparent px-8 text-white hover:bg-neutral-800"
        >
          <Link href="#projetos">Ver meus projetos</Link>
        </Button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-neutral-500">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-neutral-600 pt-1.5">
          <span className="block h-1.5 w-1 animate-bounce rounded-full bg-neutral-400" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-widest">
          Role para descobrir
        </span>
      </div>
    </section>
  )
}
