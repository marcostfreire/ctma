'use client';

import React, { useState } from 'react';
import Footer from '@/components/layout/Footer';
import Image from 'next/image'; // Importar o componente Image

export default function CredenciamentoPage() {
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Análise de Documentos",
      description: "Revisão completa da documentação acadêmica e profissional",
      duration: "7-14 dias",
      details: [
        "Verificação de diplomas e certificados",
        "Análise de histórico acadêmico",
        "Validação de experiência profissional",
        "Avaliação de competências específicas"
      ]
    },
    {
      id: 2,
      title: "Avaliação Técnica",
      description: "Teste de conhecimentos e competências práticas",
      duration: "3-5 dias",
      details: [
        "Prova escrita de conhecimentos gerais",
        "Avaliação de casos práticos",
        "Entrevista técnica online",
        "Simulação de situações reais"
      ]
    },
    {
      id: 3,
      title: "Validação Internacional",
      description: "Reconhecimento por organismos internacionais",
      duration: "14-21 dias",
      details: [
        "Submissão para organismos credenciadores",
        "Verificação de padrões internacionais",
        "Aprovação por comitê internacional",
        "Emissão de certificação reconhecida"
      ]
    },
    {
      id: 4,
      title: "Certificação Final",
      description: "Emissão do credenciamento oficial CTMA",
      duration: "2-3 dias",
      details: [
        "Emissão de certificado digital",
        "Registro na base de dados internacional",
        "Acesso ao portal do profissional",
        "Kit de materiais oficiais"
      ]
    }
  ];

  const requirements = [
    {
      category: "Formação Acadêmica",
      items: [
        "Diploma de ensino superior (reconhecido pelo MEC)",
        "Histórico escolar completo",
        "Certificados de cursos complementares",
        "Tradução juramentada (se aplicável)"
      ]
    },
    {
      category: "Experiência Profissional",
      items: [
        "Mínimo 2 anos de experiência comprovada",
        "Cartas de recomendação profissional",
        "Portfólio de casos atendidos",
        "Certificados de participação em eventos"
      ]
    },
    {
      category: "Documentação Pessoal",
      items: [
        "Documento de identidade válido",
        "CPF ou documento equivalente",
        "Comprovante de residência",
        "Foto 3x4 recente"
      ]
    },
    {
      category: "Requisitos Técnicos",
      items: [
        "Conhecimento básico de idioma inglês",
        "Familiaridade com tecnologias digitais",
        "Compromisso com código de ética",
        "Disponibilidade para formação contínua"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <Image
          src="/images/banners/credenciamento.jpg"
          alt="Banner Credenciamento"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Credenciamento CTMA
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Obtenha seu credenciamento internacional como Capelão, Diplomata Civil ou Monitor. 
              Processo rigoroso e reconhecido mundialmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Iniciar Credenciamento
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Verificar Certificado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Profissionais Credenciados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Países Reconhecidos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Aprovação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Processo de Credenciamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo de credenciamento segue padrões internacionais rigorosos para garantir 
              a excelência e reconhecimento mundial dos nossos profissionais.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Step Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedStep === step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  Etapa {step.id}
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {steps.map((step) => (
                selectedStep === step.id && (
                  <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {step.id}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                          <p className="text-gray-600">Duração: {step.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">{step.description}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Atividades incluídas:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Requisitos para Credenciamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira os requisitos necessários para iniciar seu processo de credenciamento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{req.category}</h3>
                <ul className="space-y-4">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Credentials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tipos de Credenciamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o credenciamento que melhor se adequa ao seu perfil profissional e objetivos de carreira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Capelão Internacional</h3>
              <p className="text-gray-600 mb-6">
                Credenciamento para atuação em capelania hospitalar, militar, carcerária e outras áreas especializadas.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba Mais
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Diplomata Civil</h3>
              <p className="text-gray-600 mb-6">
                Formação para atuação em relações internacionais, mediação de conflitos e representação diplomática.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba Mais
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Monitor Internacional</h3>
              <p className="text-gray-600 mb-6">
                Credenciamento para monitoramento de direitos humanos, observação eleitoral e supervisão de acordos.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para se Credenciar?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Inicie hoje mesmo seu processo de credenciamento e junte-se aos profissionais 
            reconhecidos internacionalmente pela CTMA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Iniciar Credenciamento
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
