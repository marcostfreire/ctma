import Link from "next/link";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", icon: Linkedin, href: "#" },
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "YouTube", icon: Youtube, href: "#" },
  ];  return (
    <footer className="bg-ctma-azul-marinho text-ctma-cinza-azulado-claro py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-ctma-white mb-3">Links Úteis</h3>            <ul className="space-y-2">
              <li><Link href="/sobre-nos" className="hover:text-ctma-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/missao-visao-valores" className="hover:text-ctma-white transition-colors">Missão, Visão, Valores</Link></li>
              <li><Link href="/cursos" className="hover:text-ctma-white transition-colors">Cursos</Link></li>
              <li><Link href="/projetos" className="hover:text-ctma-white transition-colors">Projetos</Link></li>
              <li><Link href="/credenciamento" className="hover:text-ctma-white transition-colors">Credenciamento</Link></li>
              <li><Link href="/blog" className="hover:text-ctma-white transition-colors">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-ctma-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ctma-white mb-3">Contato</h3>
            <p>Sede: Orlando, Flórida, EUA</p>
            <p>E-mail: <a href="mailto:contato@ctma.org" className="hover:text-ctma-white transition-colors">contato@ctma.org</a></p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-ctma-white mb-2">Siga-nos</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    aria-label={social.label} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ctma-cinza-azulado-claro hover:text-ctma-white transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ctma-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/termos-de-uso" className="hover:text-ctma-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-ctma-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ctma-cinza-ardosia pt-8 text-center">
          <p>© {currentYear} CTMA (Chaplain Training Management Agency). Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
