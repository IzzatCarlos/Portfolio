import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "Linkedin" },
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-neutral-800 pt-8 md:flex-row md:justify-between">
        <p className="text-xs text-neutral-500">
          Carlos Henrique - Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-neutral-500 hover:bg-neutral-800 hover:text-white"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="size-3.5" />
                {social.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}
