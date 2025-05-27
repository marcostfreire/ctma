"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lógica para controlar a visibilidade do header no scroll
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        if (showHeader && !isMenuOpen) setShowHeader(false);
      } else {
        if (!showHeader) setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, showHeader, isMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/cursos", label: "Cursos" },
    { href: "/projetos", label: "Projetos" },
    { href: "/credenciamento", label: "Credenciamento" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
  ];return (
    <header
      className={`bg-white text-ctma-azul-marinho shadow-lg sticky top-0 z-[9999] transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ 
        backgroundColor: '#FFFFFF', 
        opacity: 1,
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}
    >
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
          </div>          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ctma-azul-marinho hover:text-ctma-azul-jeans px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/cursos"
              className="bg-ctma-azul-jeans text-ctma-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              TORNE-SE UM CAPELÃO
            </Link>
          </div>          {/* Mobile Menu Button */}
          <div className="lg:hidden">            <button
            onClick={toggleMenu}
            className="text-ctma-azul-marinho hover:text-ctma-azul-jeans focus:outline-none focus:text-ctma-azul-jeans"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </div>        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 w-full bg-ctma-white shadow-xl z-[999] border-t border-ctma-cinza-azulado-claro/50"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-4 space-y-2 sm:px-6 lg:px-8">
              {navigationLinks.map((link) => (
                <div key={link.href} className="border-b border-ctma-cinza-azulado-claro last:border-0">
                  <Link
                    href={link.href}
                    className="block text-ctma-azul-marinho hover:text-ctma-azul-jeans py-3 text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  href="/cursos"
                  className="block bg-ctma-azul-jeans text-ctma-white text-center px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  TORNE-SE UM CAPELÃO
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
