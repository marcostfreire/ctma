"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSwitcher from "./LanguageSwitcher"; // Importado aqui

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
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
  }, [controlNavbar]);const navigationLinks = [
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
                width={150} // Aumentado de 120 para 150
                height={50} // Aumentado de 40 para 50
                priority
                className="object-contain h-12 lg:h-16 w-auto" // Ajustadas as classes de altura
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
          </nav>

          {/* Desktop Right Side: Language Switcher, CTA Button, Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher /> {/* Adicionado aqui */}
            <Link
              href="/doar"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Doar
            </Link>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-ctma-azul-marinho hover:text-ctma-azul-jeans"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{user.email?.split('@')[0]}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Minha Conta
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="text-ctma-azul-marinho hover:text-ctma-azul-jeans px-3 py-2 text-sm font-medium"
                >
                  Entrar
                </Link>
                <Link
                  href="/registro"
                  className="bg-ctma-azul-jeans text-ctma-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3E567B] transition-colors"
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </div>{/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3"> {/* Adicionado flex e space-x-3 */}
            <LanguageSwitcher /> {/* Adicionado aqui para mobile, antes do botão de menu */}
            <button
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
            className="lg:hidden absolute top-full left-0 right-0 w-full bg-white shadow-2xl z-[999] border-t border-gray-300"
            style={{ 
              backgroundColor: '#FFFFFF', 
              opacity: 1,
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          ><div className="max-w-7xl mx-auto px-4 pt-3 pb-4 space-y-2 sm:px-6 lg:px-8">
              {/* Language Switcher no Menu Mobile - pode ser ajustado conforme o design preferido */}
              {/* Opção 1: Acima dos links de navegação 
              <div className="border-b border-gray-200 pb-2 mb-2">
                <LanguageSwitcher />
              </div>
              */}              {navigationLinks.map((link) => (
                <div key={link.href} className="border-b border-gray-300 last:border-0">
                  <Link
                    href={link.href}
                    className="block text-ctma-azul-marinho hover:text-ctma-azul-jeans py-4 text-base font-medium transition-colors bg-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}              {/* Opção 2: Abaixo dos links de navegação, antes do menu do usuário. Mais discreto. */}
              <div className="border-b border-gray-300 py-2 bg-white">
                <div className="flex justify-start px-0"> {/* Ajuste para alinhar à esquerda se necessário */}
                  {/* <LanguageSwitcher />  // Removido daqui para colocar ao lado do botão de menu hamburguer */}
                </div>
              </div>              {/* Mobile User Menu */}
              {user ? (
                <>
                  <div className="border-b border-gray-300 bg-white">
                    <div className="flex items-center py-4">
                      <div className="w-8 h-8 bg-ctma-azul-jeans rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">
                          {user.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-ctma-azul-marinho font-medium">
                        {user.email?.split('@')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-gray-300 bg-white">
                    <Link
                      href="/dashboard"
                      className="block text-ctma-azul-marinho hover:text-ctma-azul-jeans py-4 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Minha Conta
                    </Link>
                  </div>
                  <div className="border-b border-gray-300 bg-white">
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-ctma-azul-marinho hover:text-ctma-azul-jeans py-4 text-base font-medium transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-b border-gray-300 bg-white">
                    <Link
                      href="/login"
                      className="block text-ctma-azul-marinho hover:text-ctma-azul-jeans py-4 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entrar
                    </Link>
                  </div>
                  <div className="border-b border-gray-300 bg-white">
                    <Link
                      href="/registro"
                      className="block text-ctma-azul-marinho hover:text-ctma-azul-jeans py-4 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cadastrar
                    </Link>
                  </div>
                </>
              )}              {/* Mobile CTA Buttons */}
              <div className="pt-2 space-y-2 bg-white">
                <Link
                  href="/doar"
                  className="block bg-green-600 text-white text-center px-4 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fazer Doação
                </Link>
                <Link
                  href="/cursos"
                  className="block bg-ctma-azul-jeans text-ctma-white text-center px-4 py-3 rounded-lg text-base font-semibold shadow-lg hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
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
