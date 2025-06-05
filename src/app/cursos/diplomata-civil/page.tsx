"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
    Handshake, 
    Globe, 
    Users, 
    Award, 
    CheckCircle, 
    Star, 
    Clock, 
    BookOpen, 
    ChevronRight,
    Shield,
    Scale,
    Building
} from 'lucide-react';

export default function DiplomataCivilPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        modalidade: '',
        mensagem: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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
                body: JSON.stringify({ formData, formType: 'Diplomata Civil' }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Formulário enviado com sucesso! Entraremos em contato em breve.' });
                setFormData({ // Reset form
                    nome: '',
                    email: '',
                    telefone: '',
                    modalidade: '',
                    mensagem: ''
                });
            } else {
                setSubmitStatus({ success: false, message: result.error || 'Falha ao enviar o formulário. Tente novamente.' });
            }        } catch (error) { // Improved error handling
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            setSubmitStatus({ success: false, message: `Ocorreu um erro ao enviar o formulário. ${errorMessage}` });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-ctma-azul-marinho to-ctma-azul-jeans text-ctma-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-6">
                            <span className="inline-block bg-ctma-white/20 text-ctma-white px-4 py-2 rounded-full text-sm font-semibold">
                                Curso de Diplomacia Civil Cristã CTMA
                            </span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Seja um 
                            <span className="text-yellow-300"> Diplomata Civil</span>
                        </h1>
                        
                        <p className="text-xl sm:text-2xl mb-8 text-ctma-white/90 leading-relaxed">
                            Prepare-se para a mediação de conflitos, cooperação global e representação ética cristã em cenários internacionais, promovendo a paz e a justiça.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <button 
                                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-500 hover:bg-yellow-400 text-ctma-azul-marinho px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                            >
                                <Handshake className="w-6 h-6 mr-2" />
                                Quero Ser um Diplomata Civil
                            </button>
                            
                            <button 
                                onClick={() => document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-ctma-white text-ctma-white hover:bg-ctma-white hover:text-ctma-azul-marinho px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center"
                            >
                                <BookOpen className="w-6 h-6 mr-2" />
                                Saiba Mais Sobre o Curso
                            </button>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Globe className="w-4 h-4 mr-2" />
                                Reconhecimento Internacional
                            </div>
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Clock className="w-4 h-4 mr-2" />
                                Programa Intensivo
                            </div>
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Scale className="w-4 h-4 mr-2" />
                                Mediação de Conflitos
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Por Que CTMA Section */}
            <section id="detalhes" className="py-16 sm:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Diplomacia Civil: Pontes de Paz
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Forme-se para ser um agente de transformação em cenários complexos e internacionais
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Mediação Especializada
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Técnicas avançadas para resolução de conflitos e negociação internacional.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Cenários Diplomáticos
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Preparação para atuação em embaixadas, consulados e organizações internacionais.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Scale className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Ética Cristã
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Valores cristãos aplicados à diplomacia e cooperação internacional.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Impacto Global
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Influência positiva em políticas públicas e relações internacionais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conteúdo do Curso */}
            <section className="py-16 sm:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Formação Completa em Diplomacia Civil
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Desenvolva competências para atuar com excelência em cenários internacionais
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-6 flex items-center">
                                    <Handshake className="w-6 h-6 mr-3 text-ctma-azul-jeans" />
                                    Competências Diplomáticas
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Técnicas de negociação internacional</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Mediação e resolução de conflitos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Protocolos diplomáticos e etiqueta internacional</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Direito internacional e tratados</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Comunicação intercultural avançada</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-6 flex items-center">
                                    <Building className="w-6 h-6 mr-3 text-ctma-azul-jeans" />
                                    Aplicação Prática
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Simulações de cenários diplomáticos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Estudos de caso internacionais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Workshops com diplomatas experientes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Análise geopolítica contemporânea</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Networking diplomático internacional</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-ctma-azul-jeans to-ctma-azul-marinho p-8 rounded-lg text-ctma-white text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Credencial Diplomática Internacional
                            </h3>
                            <p className="text-lg mb-6">
                                Receba sua credencial oficial que te habilita para representar valores cristãos em cenários diplomáticos ao redor do mundo, com reconhecimento em embaixadas e consulados.
                            </p>
                            <div className="flex items-center justify-center">
                                <Shield className="w-6 h-6 mr-2" />
                                <span className="font-semibold">Certificação Internacional CTMA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="py-16 sm:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Diplomatas CTMA em Ação
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Histórias de impacto em cenários internacionais
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;O curso da CTMA me preparou para mediar conflitos complexos em ambiente diplomático. Hoje atuo em organizações internacionais com confiança total.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Dr. Eduardo Martins
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Diplomata Civil - ONU
                                </div>
                            </div>

                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;A formação em diplomacia civil cristã me capacitou para representar valores éticos em negociações internacionais de forma efetiva.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Embaixadora Ana Lucia
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Consultora Internacional - Europa
                                </div>
                            </div>

                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;O networking e as conexões estabelecidas através da CTMA abriram oportunidades que transformaram minha carreira diplomática completamente.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Cônsul Roberto Lima
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Mediador Internacional - América Latina
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas de Atuação */}
            <section className="py-16 sm:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Onde Você Pode Atuar
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Campos de atuação para diplomatas civis formados pela CTMA
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Embaixadas e Consulados
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    Representação oficial em missões diplomáticas
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Organizações Internacionais
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    ONU, OEA, União Européia e outras entidades
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Mediação de Conflitos
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    Resolução de disputas internacionais
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    ONGs Internacionais
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    Organizações humanitárias e de direitos humanos
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Tribunais Internacionais
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    Cortes de justiça e arbitragem internacional
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Consultoria Especializada
                                </h3>
                                <p className="text-ctma-cinza-ardosia text-sm">
                                    Assessoria em relações internacionais
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulário de Inscrição */}
            <section id="inscricao" className="py-16 sm:py-20 md:py-24 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-ctma-azul-marinho mb-12">
                        Inscreva-se no Curso de Diplomata Civil
                    </h2>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                            <input type="text" name="nome" id="nome" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-ctma-azul-escuro focus:border-ctma-azul-escuro" value={formData.nome} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-ctma-azul-escuro focus:border-ctma-azul-escuro" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (com DDD)</label>
                            <input type="tel" name="telefone" id="telefone" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-ctma-azul-escuro focus:border-ctma-azul-escuro" value={formData.telefone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="modalidade" className="block text-sm font-medium text-gray-700 mb-1">Modalidade de Interesse</label>
                            <select name="modalidade" id="modalidade" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-ctma-azul-escuro focus:border-ctma-azul-escuro" value={formData.modalidade} onChange={handleInputChange}>
                                <option value="">Selecione a modalidade</option>
                                <option value="online">Online</option>
                                <option value="presencial">Presencial (quando disponível)</option>
                                <option value="hibrido">Híbrido</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                            <textarea name="mensagem" id="mensagem" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-ctma-azul-escuro focus:border-ctma-azul-escuro" value={formData.mensagem} onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-ctma-laranja-vibrante text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-ctma-laranja-hover transition-colors duration-300 disabled:opacity-50"
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
            <section className="py-16 sm:py-20 bg-gradient-to-br from-ctma-azul-marinho to-ctma-azul-jeans text-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Seja uma Ponte de Paz no Mundo
                        </h2>
                        <p className="text-xl mb-8 text-ctma-white/90">
                            O mundo precisa de diplomatas que representem valores cristãos com excelência. Sua formação na CTMA abrirá portas para você impactar nações e promover a paz.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-500 hover:bg-yellow-400 text-ctma-azul-marinho px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                            >
                                <Handshake className="w-6 h-6 mr-2" />
                                Comece Sua Carreira Diplomática
                            </button>
                            
                            <Link 
                                href="/faq"
                                className="border-2 border-ctma-white text-ctma-white hover:bg-ctma-white hover:text-ctma-azul-marinho px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center"
                            >
                                <BookOpen className="w-6 h-6 mr-2" />
                                Dúvidas Frequentes
                            </Link>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Link
                                href="/cursos"
                                className="text-ctma-white/80 hover:text-ctma-white flex items-center transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 mr-1" />
                                Ver todos os cursos CTMA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
