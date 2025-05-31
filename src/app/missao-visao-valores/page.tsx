'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MissaoVisaoValoresPage() {
  const valores = [
    {
      icon: "🔍",
      titulo: "Transparência",
      descricao: "Mantemos total transparência em todos os nossos processos, desde a formação até o credenciamento, garantindo clareza e confiança em cada etapa."
    },
    {
      icon: "🤝",
      titulo: "Integridade",
      descricao: "Agimos com integridade absoluta, respeitando os mais altos padrões éticos e morais em todas as nossas atividades e relacionamentos."
    },
    {
      icon: "🌍",
      titulo: "Inclusão",
      descricao: "Promovemos a inclusão e diversidade, acolhendo profissionais de diferentes culturas, religiões e backgrounds para enriquecer nossa comunidade."
    },
    {
      icon: "📚",
      titulo: "Excelência",
      descricao: "Buscamos constantemente a excelência em educação, mantendo os mais altos padrões de qualidade em nossos programas de formação."
    },
    {
      icon: "❤️",
      titulo: "Compaixão",
      descricao: "Cultivamos a compaixão como base fundamental do nosso trabalho, preparando profissionais para servir com empatia e cuidado."
    },
    {
      icon: "🚀",
      titulo: "Inovação",
      descricao: "Abraçamos a inovação e novas tecnologias para melhorar continuamente nossos métodos de ensino e alcance global."
    }
  ];

  const objetivos = [
    {
      numero: "01",
      titulo: "Formação de Excelência",
      descricao: "Formar capelões, diplomatas civis e monitores com competências técnicas e humanas excepcionais"
    },
    {
      numero: "02", 
      titulo: "Reconhecimento Internacional",
      descricao: "Estabelecer e manter credenciamentos reconhecidos mundialmente por organizações internacionais"
    },
    {
      numero: "03",
      titulo: "Impacto Social Positivo", 
      descricao: "Contribuir para a resolução de conflitos, assistência humanitária e promoção da paz mundial"
    },
    {
      numero: "04",
      titulo: "Rede Global de Profissionais",
      descricao: "Construir uma rede internacional de profissionais certificados trabalhando em prol da humanidade"
    }
  ];

  const historia = [
    {
      ano: "2008",
      evento: "Fundação da CTMA",
      descricao: "Criação da organização com foco inicial em capelania hospitalar no Brasil"
    },
    {
      ano: "2012",
      evento: "Expansão Internacional",
      descricao: "Primeiros credenciamentos reconhecidos por organismos internacionais"
    },
    {
      ano: "2015",
      evento: "Programa Diplomata Civil",
      descricao: "Lançamento do programa de formação em diplomacia civil e mediação"
    },
    {
      ano: "2018",
      evento: "Monitor Internacional",
      descricao: "Criação do programa de monitores para direitos humanos e observação"
    },
    {
      ano: "2020",
      evento: "Transformação Digital",
      descricao: "Adaptação completa para ensino online durante a pandemia global"
    },
    {
      ano: "2025",
      evento: "500+ Profissionais",
      descricao: "Marca histórica de 500 profissionais credenciados em 50+ países"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nossa Essência
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Conheça a missão, visão e valores que guiam a CTMA na formação de profissionais 
              comprometidos com a transformação social e a promoção da paz mundial.
            </p>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>Formar, credenciar e conectar profissionais especializados em capelania, 
                  diplomacia civil e monitoramento internacional</strong>, capacitando-os com competências 
                  técnicas, éticas e humanitárias para atuar efetivamente em contextos de crise, 
                  conflito e necessidade social.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Promovemos o desenvolvimento integral de líderes comprometidos com a justiça, 
                  paz e dignidade humana, estabelecendo padrões de excelência reconhecidos 
                  internacionalmente e contribuindo para a construção de uma sociedade mais 
                  compassiva e resiliente.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Impacto Global</h3>
                  <p className="text-gray-600">
                    Formando profissionais que fazem a diferença em mais de 50 países ao redor do mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Visão 2030</h3>
                  <p className="text-gray-600">
                    Ser a principal referência mundial em formação de profissionais humanitários.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Nossa Visão
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>Ser a principal referência mundial em formação, credenciamento e desenvolvimento 
                  de profissionais especializados em assistência humanitária, diplomacia civil e monitoramento 
                  internacional até 2030.</strong>
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Aspiramos a ter nossos profissionais certificados presentes em todas as principais 
                  organizações internacionais, governos, ONGs e instituições de assistência social, 
                  contribuindo ativamente para:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Resolução pacífica de conflitos internacionais
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Promoção dos direitos humanos e dignidade
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Assistência em situações de emergência e crise
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Construção de pontes entre diferentes culturas e comunidades
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que orientam cada decisão, ação e relacionamento na CTMA, 
              formando a base sólida de nossa identidade organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valores.map((valor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{valor.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos Estratégicos */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Objetivos Estratégicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metas claras que direcionam nossos esforços para alcançar nossa visão e cumprir nossa missão.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {objetivos.map((objetivo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {objetivo.numero}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{objetivo.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{objetivo.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História e Evolução */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma trajetória de crescimento, inovação e impacto social construída ao longo de mais de uma década.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              {historia.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.ano}</div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{item.evento}</h3>
                      <p className="text-gray-600">{item.descricao}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça Parte da Nossa Missão
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Junte-se a centenas de profissionais que escolheram a CTMA para transformar 
            suas carreiras e fazer a diferença no mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-[#3E567B] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Iniciar Minha Jornada
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Conhecer Mais
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
