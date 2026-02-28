import { Mail } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Você entrega o site pronto ou só o layout?",
    answer:
      "Eu entrego o site totalmente funcional, pronto para ser publicado. Isso inclui tanto o design quanto o código front-end e back-end. Já trabalhei em projetos apenas com design, mas meu foco principal é entregar soluções completas.",
  },
  {
    question: "Eu preciso chegar com tudo definido?",
    answer:
      "Não necessariamente. Posso ajudar desde a fase inicial de concepção, podemos discutir funcionalidades e ideias juntos. Peço para que os clientes tenham uma visão clara dos objetivos e público-alvo, mas estou aqui para ajudar a moldar o projeto conforme avançamos.",
  },
  {
    question: "Quanto tempo leva para o meu projeto ficar pronto?",
    answer:
      "O prazo de entrega pode variar com a complexidade do projeto e a quantidade de projetos que estou trabalhando no momento. Geralmente, projetos menores podem ser concluídos em uma a duas semanas, tudo será discutido antes do início do trabalho.",
  },
  {
    question: "Tenho um projeto bem grande, você vai dar conta?",
    answer:
      "Caso seja necessário, trabalho com uma rede de parceiros confiáveis para garantir que todos os aspectos do projeto sejam atendidos com qualidade e dentro do prazo. Tudo isso é comunicado desde o início para total transparência.",
  },
  {
    question: "Afinal, quanto custa um projeto com você?",
    answer:
      "O custo do projeto varia conforme a complexidade, funcionalidades desejadas e o prazo de entrega. Após entender suas necessidades específicas, fornecerei um orçamento detalhado e transparente.",
  },
  {
    question: "Você faz freelance ou tem outra atuação?",
    answer:
      "Atualmente, atuo no Laboratório de Tecnologia e Inovação em Saúde da Medicina na PUC Minas, desenvolvendo soluções para o setor de saúde. Além disso, estou aberto a projetos freelance que me desafiem e permitam crescer profissionalmente.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Grid mantido com distanciamento máximo e alinhamento lateral */}
        <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:gap-64 items-start">
          
          {/* Coluna da Esquerda (Título e Card) */}
          <div className="flex flex-col sticky top-32">
            <h2 className="text-4xl font-semibold text-neutral-950 md:text-5xl tracking-tight leading-[1.1]">
              Perguntas Frequentes
            </h2>

            <p className="mt-8 text-base leading-relaxed text-neutral-700 md:text-lg">
              Principais dúvidas sobre meu trabalho, prazos e forma de atuação.
            </p>

            <div className="mt-12 rounded-[2.5rem] border border-neutral-200 bg-neutral-50 p-10 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-neutral-900">
                Prefere falar comigo diretamente?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                Sinta-se à vontade para me contatar via e-mail. Estou sempre aberto a discutir novos projetos.
              </p>
              <a
                href="mailto:carlossilvadev@outlook.com"
                className="mt-6 inline-flex items-center gap-3 text-lg font-bold text-blue-600 transition-colors hover:text-blue-700"
              >
                <Mail className="size-6" />
                carlossilvadev@outlook.com
              </a>
            </div>
          </div>

          {/* Coluna da Direita (Acordeão) */}
          <div className="w-full lg:max-w-xl lg:ml-auto">
            <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-neutral-200 py-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:no-underline md:text-xl py-6 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-neutral-700 md:text-lg pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}