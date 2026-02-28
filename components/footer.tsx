import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 pb-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 border-t border-neutral-800 pt-12 md:flex-row md:justify-between text-center md:text-left">
        
        {/* Lado Esquerdo: Copyright levemente maior */}
        <div>
          <p className="text-lg font-semibold text-neutral-500 tracking-tight">
            © {new Date().getFullYear()} Carlos Henrique — Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Frase personalizada com padrão de letras do Felipe */}
        <div className="md:text-right">
          <p className="text-lg font-semibold text-neutral-500 tracking-tight">
            Desenvolvido com <span className="text-neutral-500">Next.js, TailwindCSS</span> e muito <span className="italic">café</span> ☕
          </p>
        </div>
      </div>
    </footer>
  )
}