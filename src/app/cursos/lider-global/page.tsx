'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'; // Importar o componente Image

export default function LiderGlobalPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    profissao: '',
    experiencia: '',
    area_interesse: '',
    objetivo: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData, formType: 'Líder Global' }),
        });

        const result = await response.json();

        if (response.ok) {
            setSubmitStatus({ success: true, message: 'Inscrição enviada com sucesso! Entraremos em contato em breve.' });
            setFormData({ // Reset form
                nome: '',
                email: '',
                telefone: '',
                profissao: '',
                experiencia: '',
                area_interesse: '',
                objetivo: '',
                mensagem: ''
            });
        } else {
            setSubmitStatus({ success: false, message: result.error || 'Falha ao enviar a inscrição. Tente novamente.' });
        }    } catch (error) { // Improved error handling
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        setSubmitStatus({ success: false, message: `Ocorreu um erro ao enviar a inscrição. ${errorMessage}` });
    } finally {
        setIsSubmitting(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-20">
        <Image
          src="/images/banners/lider-global.jpg"
          alt="Banner Curso Líder Global"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Curso de Líder Global CTMA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Desenvolva seu potencial máximo para liderar com inteligência, propósito e impacto
              em escala mundial, expandindo o Reino de Deus com excelência e integridade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#inscricao"
                className="bg-orange-500 hover:bg-[#3E567B] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Desenvolva Sua Liderança Global
              </a>
              <a
                href="#competencias"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Conheça o Programa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial do Curso */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Liderança Cristocêntrica com Impacto Global
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nosso diferencial é a abordagem cristocêntrica e prática. Preparamos líderes
              para a ação e o impacto real, com ferramentas aplicáveis em diversos cenários globais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inteligência Emocional e Espiritual</h3>
              <p className="text-gray-600">
                Desenvolva capacidades para decisões mais assertivas e relacionamentos
                mais profundos, com base em princípios bíblicos sólidos.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estratégias de Alto Nível</h3>
              <p className="text-gray-600">
                Aprenda a formular e executar estratégias visionárias que transformam
                equipes e comunidades, com foco em resultados globais.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunicação Intercultural</h3>
              <p className="text-gray-600">
                Domine a inteligência intercultural para atuar com eficácia, respeito
                e sensibilidade em diversos contextos culturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competências Desenvolvidas */}
      <section id="competencias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-gray-600">
              Competências essenciais para liderança transformadora em escala global
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Módulos do Curso</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Liderança com Propósito</h4>
                    <p className="text-gray-600">Aprofunde sua liderança servidora e o impacto do Reino em todas as esferas da sociedade.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Inteligência Cultural</h4>
                    <p className="text-gray-600">Navegar e atuar com sabedoria em contextos multiculturais diversos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Gestão de Equipes de Alta Performance</h4>
                    <p className="text-gray-600">Mobilizar e inspirar colaboradores em projetos globais complexos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Planejamento Estratégico</h4>
                    <p className="text-gray-600">Desenvolver e implementar iniciativas com alcance internacional.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Resiliência do Líder</h4>
                    <p className="text-gray-600">Fortalecer sua vida espiritual e emocional para os desafios da liderança global.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Liderança Transformadora</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Inspire e mobilize equipes globais</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Gere legado duradouro</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Expanda o Reino com excelência</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lidere com integridade bíblica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Destinado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Para Quem É Este Curso
            </h2>
          </div>          <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-4xl mx-auto">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nosso Público-Alvo</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cristãos, missionários, pastores e empresários com propósito e qualquer pessoa que deseje exercer liderança
            </p>
          </div>
        </div>
      </section>

      {/* Comunidade de Líderes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comunidade Exclusiva de Líderes CTMA
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ao se tornar um Líder Global CTMA, você terá acesso à nossa exclusiva
                Comunidade de Líderes, uma rede global de apoio e colaboração para a vida toda.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Networking com líderes influentes ao redor do mundo</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Mentoria e aconselhamento de líderes experientes</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Acesso a eventos e fóruns sobre temas globais</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Recursos e materiais atualizados continuamente</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Impacto Mensurável</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-4">500+</span>
                  <span>Líderes formados globalmente</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-4">25+</span>
                  <span>Países com líderes ativos</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-4">100+</span>
                  <span>Projetos liderados pelos formados</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-4">50k+</span>
                  <span>Vidas impactadas indiretamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Líderes Globais em Ação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Pastor Marcos T.</h4>
                  <p className="text-gray-600">Líder Global - Argentina</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                O curso transformou minha perspectiva de liderança. Hoje lidero uma rede
                de igrejas que atua em 5 países, aplicando os princípios de liderança
                intercultural que aprendi na CTMA.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Sarah M.</h4>
                  <p className="text-gray-600">Diretora de ONG - Canadá</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                As estratégias de alta performance que aprendi me permitiram
                expandir nossa ONG para 12 países. A abordagem cristocêntrica
                fez toda a diferença na mobilização de equipes globais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Como este curso se diferencia de outros programas de liderança?
              </h3>
              <p className="text-gray-600">
                Nosso diferencial é a abordagem cristocêntrica e prática. Não apenas ensinamos
                teoria, mas preparamos líderes para a ação e o impacto real, com ferramentas
                aplicáveis em diversos cenários globais, focando na integridade e valores bíblicos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Para quem é destinado este curso?
              </h3>
              <p className="text-gray-600">
                O curso é para pastores, missionários, diretores de ministérios e ONGs,
                gestores de projetos sociais, empresários com propósito e qualquer indivíduo
                que aspire exercer liderança influente e ética em escala global.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Que tipo de suporte é oferecido após a formação?
              </h3>
              <p className="text-gray-600">
                Você terá acesso à nossa exclusiva Comunidade de Líderes CTMA, com networking
                global, mentoria, eventos, fóruns e recursos atualizados para desenvolvimento
                contínuo. É uma comunidade de apoio e colaboração para a vida toda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-16 sm:py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ctma-azul-marinho mb-12">
            Inscreva-se no Curso de Líder Global
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" name="nome" id="nome" required value={formData.nome} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input type="tel" name="telefone" id="telefone" required value={formData.telefone} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="profissao" className="block text-sm font-medium text-gray-700 mb-1">Profissão/Área de Atuação</label>
              <input type="text" name="profissao" id="profissao" required value={formData.profissao} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors" />
            </div>
            <div>
              <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-1">Experiência com Liderança (Resumo)</label>
              <textarea name="experiencia" id="experiencia" rows={3} value={formData.experiencia} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors"></textarea>
            </div>
            <div>
              <label htmlFor="area_interesse" className="block text-sm font-medium text-gray-700 mb-1">Principal Área de Interesse para Liderança Global</label>
              <input type="text" name="area_interesse" id="area_interesse" required value={formData.area_interesse} onChange={handleChange} placeholder="Ex: Ajuda Humanitária, Educação, Desenvolvimento Comunitário" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors" />
            </div>
            <div>
              <label htmlFor="objetivo" className="block text-sm font-medium text-gray-700 mb-1">Qual seu principal objetivo com este curso?</label>
              <textarea name="objetivo" id="objetivo" rows={3} required value={formData.objetivo} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors"></textarea>
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem Adicional (Opcional)</label>
              <textarea name="mensagem" id="mensagem" rows={3} value={formData.mensagem} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans transition-colors"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ctma-azul-jeans to-ctma-azul-marinho text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-ctma-azul-jeans/90 hover:to-ctma-azul-marinho/90 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-60"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Inscrição'}
              </button>
            </div>
            {submitStatus && (
                <div className={`mt-4 p-3 rounded-md text-center ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                </div>
            )}
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lidere com Propósito. Transforme com Integridade. Impacte Globalmente.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            O mundo precisa de líderes que unam competência técnica com valores bíblicos sólidos.
            Seja um agente de transformação em escala global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Tire Suas Dúvidas
            </Link>
            <Link
              href="/cursos"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ver Todos os Cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
