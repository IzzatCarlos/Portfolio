import { Mail } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Voce entrega o site pronto ou so o layout?",
    answer:
      "Eu entrego o site totalmente funcional, pronto para ser publicado. Isso inclui tanto o design quanto o codigo front-end e back-end. Ja trabalhei em projetos apenas com design, mas meu foco principal e entregar solucoes completas.",
  },
  {
    question: "Eu preciso chegar com tudo definido?",
    answer:
      "Nao necessariamente. Posso ajudar desde a fase inicial de concepcao, podemos discutir funcionalidades e ideias juntos. Peco para que os clientes tenham uma visao clara dos objetivos e publico-alvo, mas estou aqui para ajudar a moldar o projeto conforme avancamos.",
  },
  {
    question: "Quanto tempo leva para o meu projeto ficar pronto?",
    answer:
      "O prazo de entrega pode variar com a complexidade do projeto e a quantidade de projetos que estou trabalhando no momento. Geralmente, projetos menores podem ser concluidos em uma a duas semanas, tudo sera discutido antes do inicio do trabalho.",
  },
  {
    question: "Tenho um projeto bem grande, voce vai dar conta?",
    answer:
      "Caso seja necessario, trabalho com uma rede de parceiros confiaveis para garantir que todos os aspectos do projeto sejam atendidos com qualidade e dentro do prazo. Tudo isso e comunicado desde o inicio para total transparencia.",
  },
  {
    question: "Afinal, quanto custa um projeto com voce?",
    answer:
      "O custo do projeto varia conforme a complexidade, funcionalidades desejadas e o prazo de entrega. Apos entender suas necessidades especificas, fornecerei um orcamento detalhado e transparente.",
  },
  {
    question: "Voce faz freelance ou tem outra atuacao?",
    answer:
      "Atualmente, atuo no Laboratorio de Tecnologia e Inovacao em Saude da Medicina na PUC Minas, desenvolvendo solucoes para o setor de saude. Alem disso, estou aberto a projetos freelance que me desafiem e permitam crescer profissionalmente.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[340px_1fr]">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Perguntas Frequentes
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Separei aqui as principais duvidas que clientes costumam ter sobre meu trabalho, prazos e forma de atuacao.
            </p>

            {/* Contact card */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-base font-bold text-neutral-900">
                Prefere falar comigo diretamente?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                Sinta-se a vontade para me contatar via e-mail. Estou sempre aberto a discutir novos projetos.
              </p>
              <a
                href="mailto:carloshenrique@email.com"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-600"
              >
                <Mail className="size-4" />
                carloshenrique@email.com
              </a>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-neutral-200">
                <AccordionTrigger className="text-left text-sm font-semibold text-neutral-900 hover:no-underline md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-neutral-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
