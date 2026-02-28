"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-white"
          aria-label="Pagina inicial"
        >
          CH
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button
          asChild
          size="sm"
          className="hidden rounded-full bg-white px-5 text-sm font-medium text-[#0a0a0a] hover:bg-neutral-200 md:inline-flex"
        >
          <Link href="#contato">Contrate-me</Link>
        </Button>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-neutral-800 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-neutral-800 bg-[#0a0a0a] md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-[#0a0a0a]"
              onClick={() => setMobileOpen(false)}
            >
              Contrate-me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
