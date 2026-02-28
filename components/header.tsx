"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Importação necessária para a logo
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#projetos" },
  { label: "Perguntas Frequentes", href: "#faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const resumeLink = "https://drive.google.com/file/d/1XNehKHEVxVDc0VKiQNRMzS5mp4xs410F/view?usp=sharing"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800/50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-8 py-4 md:py-6">
        <Link
          href="/"
          className="transition-transform hover:scale-105 active:scale-95"
          aria-label="Página inicial"
        >
          <div className="relative size-10 md:size-12 overflow-hidden rounded-full bg-neutral-800">
            <Image
              src="/LogoEU.png" 
              alt="Logo Carlos Henrique"
              fill
              className="object-cover grayscale brightness-125" 
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-neutral-400 underline-offset-8 transition-colors hover:text-blue-500 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão de Currículo Desktop */}
        <Button
          asChild
          size="lg"
          className="hidden gap-2 rounded-full bg-blue-600 px-8 py-6 text-lg font-bold text-white hover:bg-blue-700 md:inline-flex shadow-lg shadow-blue-900/20"
        >
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <FileText className="size-5" />
            Meu Currículo
          </a>
        </Button>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-neutral-800 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="size-8" /> : <Menu className="size-8" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-neutral-800 bg-[#0a0a0a] md:hidden">
          <nav className="flex flex-col gap-4 px-8 py-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-4 text-2xl font-bold text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-blue-500"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-5 text-center text-xl font-black text-white"
              onClick={() => setMobileOpen(false)}
            >
              <FileText className="size-6" />
              Meu Currículo
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}