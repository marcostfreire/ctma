'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MonitorInternacionalPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    experiencia: '',
    interesse: '',
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
            body: JSON.stringify({ formData, formType: 'Monitor Internacional' }),
        });

        const result = await response.json();

        if (response.ok) {
            setSubmitStatus({ success: true, message: 'Inscrição enviada com sucesso! Entraremos em contato em breve.' });
            setFormData({ // Reset form
                nome: '',
                email: '',
                telefone: '',
                cidade: '',
                experiencia: '',
                interesse: '',
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Monitor Internacional CTMA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Torne-se um multiplicador oficial da CTMA e expanda nossa missão em sua região, 
              formando novos capelães e diplomatas enquanto constrói uma fonte sustentável de renda ministerial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#inscricao"
                className="bg-orange-500 hover:bg-[#3E567B] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Torne-se um Monitor CTMA
              </a>
              <a
                href="#sobre"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Que É Ser Monitor */}
      <section id="sobre" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Que É Ser um Monitor Internacional CTMA?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Como Monitor Internacional, você se torna uma extensão oficial da CTMA em sua região, 
              capacitado para formar e gerenciar turmas de Capelania Internacional e Diplomacia Civil Cristã.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Seu Papel Como Monitor</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Formar e gerenciar turmas de alunos em sua região</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Aplicar a metodologia CTMA em formato presencial e online</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Representar a CTMA com excelência e padrão internacional</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Ser ponte entre a CTMA e novos líderes em sua área</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Empreendedorismo Ministerial</h4>
              <p className="text-gray-600 mb-4">
                O Monitor Internacional é uma oportunidade única de empreendedorismo ministerial. 
                Você poderá monetizar seu trabalho através de um modelo de parceria onde parte 
                do valor das inscrições dos alunos formados por você será sua remuneração.
              </p>
              <p className="text-blue-600 font-semibold">
                Transforme sua liderança em uma fonte sustentável de renda para seu ministério!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios e Suporte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suporte Completo da CTMA
            </h2>
            <p className="text-xl text-gray-600">
              Você não estará sozinho. A CTMA oferece suporte contínuo para seu sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Material Didático Completo</h3>
              <p className="text-gray-600">
                Material atualizado, treinamento pedagógico e todas as ferramentas necessárias 
                para aplicar os cursos com excelência.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidade Exclusiva</h3>
              <p className="text-gray-600">
                Acesso à rede de Monitores Internacionais para troca de experiências, 
                mentoria e colaboração contínua.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reconhecimento Oficial</h3>
              <p className="text-gray-600">
                Certificação como extensão oficial da CTMA em sua região, 
                com respaldo internacional reconhecido em mais de 20 países.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfil Ideal do Monitor Internacional
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência Recomendada</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Liderança estabelecida em sua comunidade ou igreja</li>
                  <li>• Experiência em ensino ou coordenação de grupos</li>
                  <li>• Relacionamento sólido em sua região</li>
                  <li>• Visão de multiplicação e crescimento</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">O Que Oferecemos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Treinamento pedagógico completo</li>
                  <li>• Ferramentas administrativas</li>
                  <li>• Suporte técnico para plataforma online</li>
                  <li>• Modelo de parceria financeira sustentável</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Que Dizem Nossos Monitores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Ana L.</h4>
                  <p className="text-gray-600">Monitora Internacional - Brasil</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                Ser um Monitor CTMA me permitiu levar a visão global para minha própria cidade, 
                capacitando líderes e multiplicando o impacto. Além disso, criou uma fonte 
                sustentável de renda para nosso ministério.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Pastor Roberto M.</h4>
                  <p className="text-gray-600">Monitor Internacional - Portugal</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                O suporte da CTMA é excepcional. Tenho todo o material, treinamento e 
                uma rede global de apoio. Já formei 3 turmas e o impacto na nossa região 
                tem sido transformador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Como o Monitor Internacional pode ser remunerado?
              </h3>
              <p className="text-gray-600">
                A CTMA estabelece um modelo de parceria onde parte do valor das inscrições 
                dos alunos formados por você será sua remuneração, tornando o curso uma 
                forma de sustento e investimento no seu ministério.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Qual o papel de um Monitor Internacional?
              </h3>
              <p className="text-gray-600">
                Como Monitor, você será responsável por formar turmas, aplicar a metodologia 
                CTMA (presencial e online), representar a CTMA com excelência e ser um ponto 
                de contato para os alunos em sua localidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Que tipo de suporte a CTMA oferece?
              </h3>
              <p className="text-gray-600">
                Oferecemos material didático completo, treinamento pedagógico, suporte 
                administrativo e técnico, acesso à comunidade exclusiva de Monitores 
                e reconhecimento oficial como extensão da CTMA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-16 sm:py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ctma-azul-marinho mb-12">
            Inscreva-se para ser um Monitor Internacional CTMA
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" name="nome" id="nome" required value={formData.nome} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input type="tel" name="telefone" id="telefone" required value={formData.telefone} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade/Estado de Atuação Principal</label>
              <input type="text" name="cidade" id="cidade" required value={formData.cidade} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-1">Experiência com Ensino, Liderança ou Capelania (Resumo)</label>
              <textarea name="experiencia" id="experiencia" rows={3} value={formData.experiencia} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
            </div>
            <div>
              <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1">Por que você deseja ser um Monitor Internacional CTMA?</label>
              <textarea name="interesse" id="interesse" rows={4} required value={formData.interesse} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem Adicional (Opcional)</label>
              <textarea name="mensagem" id="mensagem" rows={3} value={formData.mensagem} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-60"
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Multiplique o Reino. Transforme Vidas. Construa Legado.
          </h2>
          <p className="text-xl mb-8">
            Como Monitor Internacional CTMA, você não apenas transforma vidas - 
            você multiplica transformações e constrói um legado duradouro.
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
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ver Todos os Cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
