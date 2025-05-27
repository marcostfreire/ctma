import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/sobre-nos#missao-visao-valores", label: "Missão, Visão, Valores" },
    { href: "/cursos", label: "Cursos" },
    { href: "/credenciamento", label: "Credenciamento" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
    { href: "/termos", label: "Termos de Uso | Política de Privacidade" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">CTMA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chaplain Training Management Agency - Formamos capelães, diplomatas civis e líderes para um impacto global de compaixão, paz e esperança.
            </p>
          </div>

          {/* Links Essenciais */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Links Essenciais</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium">Endereço da Sede:</p>
                <p>Orlando, Flórida, EUA</p>
              </div>
              <div>
                <p className="font-medium">E-mail:</p>
                <a
                  href="mailto:contato@ctma.org"
                  className="hover:text-white transition-colors"
                >
                  contato@ctma.org
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} CTMA (Chaplain Training Management Agency). Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
