import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[280px_1fr]">
        {/* Profile photo */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl lg:mx-0">
          <Image
            src="/images/profile.jpg"
            alt="Foto de Carlos Henrique"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bio */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {"Muito prazer \uD83D\uDC4B\uD83C\uDFFB"}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Carlos Henrique
          </h2>

          <p className="mt-1 text-sm font-medium text-neutral-500">
            <span className="font-semibold text-neutral-900">
              Desenvolvedor Full Stack
            </span>
          </p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            <p>
              {"Sou "}
              <span className="font-semibold text-neutral-900">
                Carlos Henrique Santos da Silva
              </span>
              {", um entusiasta do desenvolvimento de software, focado em criar experiencias de usuario intuitivas, eficientes e adaptaveis para web e mobile."}
            </p>
            <p>
              {"Minhas principais tecnologias sao "}
              <span className="font-semibold text-emerald-600">JavaScript</span>
              {", "}
              <span className="font-semibold text-emerald-600">React</span>
              {", "}
              <span className="font-semibold text-emerald-600">React Native</span>
              {" e "}
              <span className="font-semibold text-emerald-600">C#</span>
              {"."}
            </p>
            <p>
              {"Minha jornada na programacao comecou em "}
              <strong>janeiro de 2023</strong>
              {", quando iniciei o curso de "}
              <strong>Analise e Desenvolvimento de Sistemas</strong>
              {". Desde entao, venho me dedicando constantemente ao aperfeicoamento das minhas habilidades."}
            </p>
            <p>
              {"Atualmente, atuo no "}
              <strong>
                {"Laboratorio de Tecnologia e Inovacao em Saude da Medicina \u2013 Campus Contagem (PUC Minas)"}
              </strong>
              {", onde colaboro no desenvolvimento de solucoes inovadoras para a area da saude."}
            </p>
            <p>
              Estou sempre em busca de desafios que me permitam crescer
              profissionalmente e contribuir para projetos inovadores.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "Linkedin" },
              { icon: Github, href: "https://github.com", label: "Github" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map((social) => (
              <Button
                key={social.label}
                asChild
                variant="ghost"
                size="sm"
                className="gap-1.5 text-xs text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-4" />
                  {social.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
