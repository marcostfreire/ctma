"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/cursos", label: "Cursos" },
    { href: "/credenciamento", label: "Credenciamento" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ]; return (
    <header className="bg-ctma-azul-marinho shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-2.jpeg"
                alt="CTMA Logo"
                width={120}
                height={40}
                priority
                className="object-contain h-8 lg:h-12 w-auto"
              />
            </Link>
          </div>{/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ctma-cinza-azulado-claro hover:text-ctma-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/cursos"
              className="bg-ctma-accent-red text-ctma-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              TORNE-SE UM CAPELÃO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">            <button
            onClick={toggleMenu}
            className="text-ctma-white hover:text-ctma-cinza-azulado-claro focus:outline-none focus:text-ctma-cinza-azulado-claro"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </div>        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-ctma-azul-marinho border-t border-ctma-cinza-ardosia">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ctma-cinza-azulado-claro hover:text-ctma-white block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cursos"
                className="bg-ctma-accent-red text-ctma-white block px-3 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                TORNE-SE UM CAPELÃO
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
