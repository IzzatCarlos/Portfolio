import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const whatsappLink = "https://wa.me/qr/2U3QN7N4LBO6I1";

  return (
    <section id="contato" className="bg-white px-6 py-24 md:py-36 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
        
        <div id="left" className="flex-1">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 h-2.5 w-2.5 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            <p className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-500">
              DISPONÍVEL PARA NOVOS PROJETOS
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="text-5xl md:text-7xl font-semibold text-neutral-950 leading-[1.1] tracking-tight">
              Vamos levar sua ideia para o{" "}
              <span className="text-blue-600">próximo nível</span>
            </h2>
            <p className="max-w-xl mt-6 text-base md:text-lg text-neutral-700 leading-relaxed">
              Tem uma ideia em mente ou quer melhorar o que já existe? <br className="hidden md:block" />
              Vamos conversar e ver como isso pode sair do papel.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="py-7 px-10 rounded-full bg-blue-600 text-white font-bold text-lg w-fit hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/20"
              >
                <a href="mailto:carlossilvadev@outlook.com">
                  <Mail className="mr-2 size-5" />
                  Me mande um email!
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="py-7 px-10 rounded-full border-neutral-300 text-neutral-700 font-bold text-lg w-fit hover:bg-neutral-100 hover:text-neutral-950 transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div id="right" className="flex flex-col items-center text-center lg:min-w-[400px]">
          <div className="relative mb-6">
            <Image
              src="/LogoEU.jpg" 
              alt="Logo Call to Action"
              width={160}
              height={160}
              className="grayscale opacity-90"
              draggable={false}
            />
          </div>
          
          <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
            Você pode me encontrar nas redes sociais
          </p>
          
          <div className="flex gap-8 mt-6">
            <Link 
              href="https://www.linkedin.com/in/carlos-henrique-santos-da-silva-b5634b268" 
              target="_blank" 
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="size-8" />
            </Link>
            <Link 
              href="https://github.com/IzzatCarlos" 
              target="_blank" 
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Github className="size-8" />
            </Link>
            <Link 
              href="https://www.instagram.com/izzat_carlos/" 
              target="_blank" 
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <Instagram className="size-8" />
            </Link>
          </div>

          <p className="text-lg font-bold mt-8 text-neutral-950 border-b-2 border-blue-600/10 pb-1">
            carlossilvadev@outlook.com
          </p>
        </div>
      </div>
    </section>
  );
}