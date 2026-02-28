import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contato" className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Disponivel para novos projetos
        </span>

        <h2 className="mt-4 max-w-lg text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {"Vamos levar sua ideia para o "}
          <span className="text-emerald-500">proximo nivel</span>
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-400 md:text-base">
          Tem uma ideia em mente ou quer melhorar o que ja existe? Vamos conversar e ver como isso pode sair do papel.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-6 gap-2 rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600"
        >
          <a href="mailto:carloshenrique@email.com">
            <Mail className="size-4" />
            Me mande um email!
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
