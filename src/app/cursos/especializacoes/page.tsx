'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EspecializacoesPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    especializacao: '',
    experiencia: '',
    motivacao: '',
    disponibilidade: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será integrado com o sistema de pagamento/inscrição
    console.log('Dados do formulário:', formData)
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const especializacoes = [
    {
      id: 'hospitalar',
      title: 'Capelania Hospitalar',
      description: 'Leve conforto e esperança onde a dor é mais sentida',
      icon: '🏥',
      areas: ['UTIs e emergências', 'Pediatria e maternidade', 'Oncologia', 'Cuidados paliativos']
    },
    {
      id: 'prisional',
      title: 'Capelania Prisional',
      description: 'Transforme vidas por trás das grades',
      icon: '🔐',
      areas: ['Reabilitação', 'Aconselhamento', 'Programa de ressocialização', 'Apoio às famílias']
    },
    {
      id: 'catastrofes',
      title: 'Capelania em Catástrofes',
      description: 'Seja o alento em momentos de maior desespero',
      icon: '🆘',
      areas: ['Resposta a emergências', 'Trauma e luto', 'Coordenação humanitária', 'Primeiros socorros psicológicos']
    },
    {
      id: 'familiar',
      title: 'Capelania Familiar',
      description: 'Fortaleça lares e restaure relacionamentos',
      icon: '👨‍👩‍👧‍👦',
      areas: ['Terapia familiar', 'Aconselhamento matrimonial', 'Mediação de conflitos', 'Educação parental']
    },
    {
      id: 'educacional',
      title: 'Capelania Educacional',
      description: 'Molde mentes e corações nas novas gerações',
      icon: '🎓',
      areas: ['Escolas e universidades', 'Orientação vocacional', 'Bullying e conflitos', 'Apoio a educadores']
    },
    {
      id: 'idosos',
      title: 'Capelania para Idosos',
      description: 'Acolha e valorize a sabedoria da terceira idade',
      icon: '👴',
      areas: ['Asilos e casas de repouso', 'Solidão e depressão', 'Preparação para o fim da vida', 'Valorização da experiência']
    },
    {
      id: 'infantil',
      title: 'Capelania Infantil',
      description: 'Leve alegria e esperança aos pequenos',
      icon: '👶',
      areas: ['Orfanatos e abrigos', 'Trauma infantil', 'Ludoterapia cristã', 'Desenvolvimento espiritual']
    },
    {
      id: 'empresarial',
      title: 'Capelania Empresarial',
      description: 'Humanize o ambiente corporativo',
      icon: '🏢',
      areas: ['Bem-estar no trabalho', 'Ética empresarial', 'Gestão de conflitos', 'Desenvolvimento humano']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cursos de Capelania Especializada
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Aprofunde seu impacto em áreas específicas e torne-se uma referência na capelania. 
              Especialize-se onde sua vocação encontra a maior necessidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#especializacoes"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Escolha Sua Especialização
              </a>
              <a
                href="#inscricao"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Inscreva-se Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Especializar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por Que Se Especializar?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cada área de capelania tem suas particularidades, desafios e metodologias específicas. 
              A especialização permite que você desenvolva competências únicas para atender com excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise Reconhecida</h3>
              <p className="text-gray-600">
                Torne-se uma autoridade em sua área específica, com conhecimento 
                profundo e técnicas especializadas para cada contexto.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Direcionado</h3>
              <p className="text-gray-600">
                Concentre seus esforços onde pode fazer a maior diferença, 
                desenvolvendo intervenções mais eficazes e transformadoras.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carreira Sustentável</h3>
              <p className="text-gray-600">
                Construa uma carreira sólida na capelania com oportunidades 
                específicas e demanda crescente em áreas especializadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especializações Disponíveis */}
      <section id="especializacoes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Especializações Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a área que mais ressoa com seu chamado e paixão ministerial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especializacoes.map((spec) => (
              <div key={spec.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{spec.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Áreas de Foco:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {spec.areas.map((area, index) => (
                      <li key={index}>• {area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Metodologia Especializada
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cada curso de especialização é cuidadosamente estruturado para abordar 
                os desafios específicos de cada área, combinando teoria sólida com prática intensa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Estudos de Caso Reais</h4>
                    <p className="text-gray-600">Análise de situações reais da área especializada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Práticas Supervisionadas</h4>
                    <p className="text-gray-600">Exercícios práticos com feedback de especialistas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentoria Especializada</h4>
                    <p className="text-gray-600">Acompanhamento com profissionais experientes na área</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificação Específica</h4>
                    <p className="text-gray-600">Credencial reconhecida na área de especialização</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Estrutura do Curso</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Carga Horária</span>
                  <span className="font-semibold text-blue-600">20-30 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Formato</span>
                  <span className="font-semibold text-blue-600">Híbrido</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Duração</span>
                  <span className="font-semibold text-blue-600">2-4 semanas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Prática</span>
                  <span className="font-semibold text-blue-600">40% do curso</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mentoria</span>
                  <span className="font-semibold text-blue-600">Incluída</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificação</span>
                  <span className="font-semibold text-blue-600">Internacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instrutores Especialistas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Instrutores Especialistas
            </h2>
            <p className="text-xl text-gray-600">
              Aprenda com profissionais que são referência em suas áreas de atuação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">DH</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Hospital Santos</h3>
              <p className="text-blue-600 mb-3">Especialista em Capelania Hospitalar</p>
              <p className="text-gray-600 text-sm">
                20 anos de experiência em hospitais de grande porte, 
                pioneiro em protocolos de capelania em UTIs.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">PC</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pastor Carlos Prisão</h3>
              <p className="text-green-600 mb-3">Especialista em Capelania Prisional</p>
              <p className="text-gray-600 text-sm">
                15 anos atuando no sistema prisional, responsável por 
                programas de ressocialização reconhecidos internacionalmente.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">ME</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dra. Maria Emergência</h3>
              <p className="text-purple-600 mb-3">Especialista em Catástrofes</p>
              <p className="text-gray-600 text-sm">
                Coordenadora de resposta humanitária em 12 países, 
                especialista em trauma e primeiros socorros psicológicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Capelães Especializados em Ação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Capelã Luciana M.</h4>
                  <p className="text-gray-600">Especialização em Capelania Hospitalar</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                A especialização me deu ferramentas específicas para lidar com situações 
                complexas no hospital. Hoje coordeno a capelania de 3 hospitais e formo 
                novos capelães hospitalares.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Pastor Roberto F.</h4>
                  <p className="text-gray-600">Especialização em Capelania Prisional</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                O curso me preparou para os desafios únicos do sistema prisional. 
                Em 2 anos, já acompanhei a ressocialização de mais de 100 detentos, 
                com resultados transformadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Escolha Sua Especialização
            </h2>
            <p className="text-xl">
              Aprofunde seu chamado e torne-se uma referência na área que mais toca seu coração.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-bold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="especializacao" className="block text-sm font-bold text-gray-700 mb-2">
                  Especialização de Interesse *
                </label>
                <select
                  id="especializacao"
                  name="especializacao"
                  value={formData.especializacao}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione a especialização</option>
                  <option value="hospitalar">Capelania Hospitalar</option>
                  <option value="prisional">Capelania Prisional</option>
                  <option value="catastrofes">Capelania em Catástrofes</option>
                  <option value="familiar">Capelania Familiar</option>
                  <option value="educacional">Capelania Educacional</option>
                  <option value="idosos">Capelania para Idosos</option>
                  <option value="infantil">Capelania Infantil</option>
                  <option value="empresarial">Capelania Empresarial</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="experiencia" className="block text-sm font-bold text-gray-700 mb-2">
                  Experiência Prévia *
                </label>
                <select
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione sua experiência</option>
                  <option value="capelao_geral">Capelão Geral CTMA</option>
                  <option value="pastor">Pastor/Líder Religioso</option>
                  <option value="profissional_area">Profissional da Área</option>
                  <option value="voluntario">Voluntário</option>
                  <option value="estudante">Estudante/Iniciante</option>
                  <option value="outras">Outras</option>
                </select>
              </div>

              <div>
                <label htmlFor="disponibilidade" className="block text-sm font-bold text-gray-700 mb-2">
                  Disponibilidade *
                </label>
                <select
                  id="disponibilidade"
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="integral">Tempo Integral</option>
                  <option value="parcial_manha">Meio Período - Manhã</option>
                  <option value="parcial_tarde">Meio Período - Tarde</option>
                  <option value="parcial_noite">Meio Período - Noite</option>
                  <option value="fins_semana">Fins de Semana</option>
                  <option value="flexivel">Horário Flexível</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="motivacao" className="block text-sm font-bold text-gray-700 mb-2">
                Principal Motivação para a Especialização *
              </label>
              <select
                id="motivacao"
                name="motivacao"
                value={formData.motivacao}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione sua motivação</option>
                <option value="aprofundar_conhecimento">Aprofundar conhecimento na área</option>
                <option value="carreira_especializada">Construir carreira especializada</option>
                <option value="impacto_direcionado">Gerar impacto mais direcionado</option>
                <option value="demanda_local">Atender demanda em minha região</option>
                <option value="chamado_especifico">Chamado específico para a área</option>
                <option value="desenvolvimento_pessoal">Desenvolvimento pessoal</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">
                Conte-nos sobre sua experiência e expectativas para a especialização
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Compartilhe sua experiência na área e o que espera alcançar com a especialização..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto"
              >
                Escolher Minha Especialização
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Especialize-se. Aprofunde-se. Transforme com Excelência.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cada área de capelania tem suas necessidades únicas. Torne-se o capelão 
            especialista que essas pessoas precisam.
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
