import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[75vh] flex-col items-center justify-center bg-[#0a0a0a] px-6 pt-28 pb-16 text-center overflow-hidden"
    >
      {/* --- EFEITOS DE FUNDO --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 h-full w-[300px] bg-blue-900/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute -right-20 top-0 h-full w-[300px] bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-2 text-sm font-bold text-neutral-200 md:text-base transition-all hover:border-blue-500/50">
          <span className="size-2.5 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          Desenvolvedor Full Stack
        </span>

        <h1 className="mx-auto mt-12 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] text-white tracking-tight">
          Construindo experiências digitais, <br className="hidden md:block" />
          do design ao código.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-neutral-400 md:text-xl">
          Meu trabalho é transformar ideias e layouts em código limpo e responsivo.
          Pensando na experiência do usuário em cada etapa do desenvolvimento.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <button className="rounded-full bg-blue-600 px-10 py-5 text-lg font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
            <Link href="#contato">Fale comigo</Link>
          </button>
          
          <button className="rounded-full border border-neutral-700 bg-transparent px-10 py-5 text-lg font-semibold text-white hover:bg-neutral-800 transition-all hover:scale-105">
            <Link href="#projetos">Ver meus projetos</Link>
          </button>
        </div>
      </div>
    </section>
  )
}