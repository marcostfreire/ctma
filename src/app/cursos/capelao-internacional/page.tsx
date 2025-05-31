"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image
import { 
    Heart, 
    Globe, 
    Users, 
    Award, 
    CheckCircle, 
    Star, 
    Clock, 
    BookOpen, 
    Video,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Shield,
    Zap,
    Target
} from 'lucide-react';

export default function CapelaointernacionalPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        modalidade: '',
        mensagem: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de envio do formulário
        console.log('Dados do formulário:', formData);
        alert('Formulário enviado! Entraremos em contato em breve.');
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-ctma-azul-marinho to-ctma-azul-jeans text-ctma-white overflow-hidden">
                <Image
                    src="/images/banners/capelao-internacional.jpg"
                    alt="Banner Curso Capelão Internacional"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-30"
                />
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-6">
                            <span className="inline-block bg-ctma-white/20 text-ctma-white px-4 py-2 rounded-full text-sm font-semibold">
                                Curso de Capelania Internacional CTMA
                            </span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Torne-se um 
                            <span className="text-yellow-300"> Capelão Internacional</span>
                        </h1>
                        
                        <p className="text-xl sm:text-2xl mb-8 text-ctma-white/90 leading-relaxed">
                            Seja um verdadeiro embaixador da fé e da compaixão. Capacite-se para levar esperança e consolo em momentos de maior necessidade, com certificação válida nos EUA e países parceiros.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <button 
                                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-500 hover:bg-yellow-400 text-ctma-azul-marinho px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                            >
                                <Heart className="w-6 h-6 mr-2" />
                                Quero Ser um Capelão Internacional
                            </button>
                            
                            <button 
                                onClick={() => document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-ctma-white text-ctma-white hover:bg-ctma-white hover:text-ctma-azul-marinho px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center"
                            >
                                <BookOpen className="w-6 h-6 mr-2" />
                                Saiba Mais Sobre o Curso
                            </button>
                        </div>
                        
                        {/* Badges de Destaque */}
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Globe className="w-4 h-4 mr-2" />
                                Certificação Internacional
                            </div>
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Clock className="w-4 h-4 mr-2" />
                                Curso Intensivo 7h de Conteúdo
                            </div>
                            <div className="flex items-center bg-ctma-white/20 px-3 py-2 rounded-full">
                                <Video className="w-4 h-4 mr-2" />
                                Presencial e Online
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
                                Por Que Escolher a CTMA?
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Sua missão começa conosco. Você não apenas aprende; você se torna parte de algo maior.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Autoridade Internacional
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Certificação reconhecida globalmente, com base nos Estados Unidos.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Suporte Contínuo
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Mentoria contínua e acesso à nossa comunidade global de capelães.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Identidade Oficial
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Credencial diplomática cristã reconhecida internacionalmente.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">
                                    Campo Ilimitado
                                </h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Atuação em hospitais, prisões, emergências, escolas e muito mais.
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
                                O Que Você Vai Aprender
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Curso Intensivo 7h de conteúdo prático e profundamente espiritual
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-6 flex items-center">
                                    <BookOpen className="w-6 h-6 mr-3 text-ctma-azul-jeans" />
                                    Imersão Total
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Fundamentos bíblicos da capelania</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Psicologia pastoral e aconselhamento</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Capelania em emergências e desastres</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Ética e legislação internacional</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Comunicação intercultural</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-6 flex items-center">
                                    <Zap className="w-6 h-6 mr-3 text-ctma-azul-jeans" />
                                    Recursos Completos
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Manual abrangente em PDF</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Aulas gravadas para revisão ilimitada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Acesso à plataforma</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Aulas ao vivo com líderes mundiais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Certificado internacional CTMA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Integração Imediata */}
                        <div className="bg-gradient-to-r from-ctma-azul-jeans to-ctma-azul-marinho p-8 rounded-lg text-ctma-white text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Integração Imediata na Rede CTMA
                            </h3>
                            <p className="text-lg mb-6">
                                Seja incluído no nosso banco exclusivo de capelães ativos da CTMA, pronto para atuar em missões internacionais e projetos de impacto global.
                            </p>
                            <div className="flex items-center justify-center">
                                <Users className="w-6 h-6 mr-2" />
                                <span className="font-semibold">Rede Global de Capelães Ativos</span>
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
                                O Que Nossos Capelães Dizem
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Histórias reais de transformação e impacto
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;A CTMA transformou minha visão de ministério. Hoje atuo em hospitais com uma preparação que jamais imaginei ter. É muito mais que um curso, é uma nova vida.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Pastor João Silva
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Capelão Hospitalar - São Paulo
                                </div>
                            </div>

                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;O reconhecimento internacional abriu portas que eu nem sabia que existiam. Hoje sirvo em missões humanitárias pelo mundo todo.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Maria Santos
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Capelã de Emergências - Rio de Janeiro
                                </div>
                            </div>

                            <div className="bg-ctma-cinza-azulado-claro p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>                                <p className="text-ctma-cinza-ardosia mb-4 italic">
                                    &ldquo;A qualidade do ensino e o suporte contínuo da CTMA são incomparáveis. Sinto-me preparado para qualquer desafio ministerial.&rdquo;
                                </p>
                                <div className="font-semibold text-ctma-azul-marinho">
                                    Carlos Rodriguez
                                </div>
                                <div className="text-sm text-ctma-cinza-ardosia">
                                    Capelão Prisional - Brasília
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalidades do Curso */}
            <section className="py-16 sm:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Escolha Sua Modalidade
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Presencial ou online, você recebe a mesma qualidade de ensino
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-ctma-azul-jeans transition-colors">
                                <div className="text-center mb-6">
                                    <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-2">
                                        Modalidade Presencial
                                    </h3>
                                    <p className="text-ctma-cinza-ardosia">
                                        Experiência imersiva com networking presencial
                                    </p>
                                </div>
                                
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Interação direta com instrutores</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Networking com outros capelães</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Simulações práticas presenciais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Material físico incluso</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-ctma-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-ctma-azul-jeans transition-colors">
                                <div className="text-center mb-6">
                                    <div className="bg-ctma-azul-jeans text-ctma-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Video className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-2">
                                        Modalidade Online
                                    </h3>
                                    <p className="text-ctma-cinza-ardosia">
                                        Flexibilidade total com qualidade garantida
                                    </p>
                                </div>
                                
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Estude no seu ritmo</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Aulas ao vivo e gravadas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Acesso ao conteúdo</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>Suporte técnico 24/7</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulário de Inscrição */}
            <section id="inscricao" className="py-16 sm:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
                                Comece Sua Jornada Hoje
                            </h2>
                            <p className="text-xl text-ctma-cinza-ardosia">
                                Preencha o formulário abaixo e nossa equipe entrará em contato
                            </p>
                        </div>

                        <div className="bg-ctma-cinza-azulado-claro p-8 rounded-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nome" className="block text-sm font-medium text-ctma-azul-marinho mb-2">
                                            Nome Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ctma-azul-jeans focus:border-transparent"
                                            placeholder="Seu nome completo"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-ctma-azul-marinho mb-2">
                                            E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ctma-azul-jeans focus:border-transparent"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="telefone" className="block text-sm font-medium text-ctma-azul-marinho mb-2">
                                            Telefone/WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ctma-azul-jeans focus:border-transparent"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="modalidade" className="block text-sm font-medium text-ctma-azul-marinho mb-2">
                                            Modalidade Preferida *
                                        </label>
                                        <select
                                            id="modalidade"
                                            name="modalidade"
                                            value={formData.modalidade}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ctma-azul-jeans focus:border-transparent"
                                        >
                                            <option value="">Selecione uma modalidade</option>
                                            <option value="presencial">Presencial</option>
                                            <option value="online">Online</option>
                                            <option value="tanto-faz">Tanto faz</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-sm font-medium text-ctma-azul-marinho mb-2">
                                        Mensagem ou Dúvidas
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ctma-azul-jeans focus:border-transparent"
                                        placeholder="Conte-nos sobre sua motivação para ser um capelão..."
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-ctma-azul-jeans hover:bg-ctma-azul-marinho text-ctma-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto"
                                    >
                                        <Heart className="w-6 h-6 mr-2" />
                                        Quero Ser um Capelão Internacional
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Informações de Contato */}
                        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h4 className="font-semibold text-ctma-azul-marinho mb-1">Telefone</h4>
                                <p className="text-ctma-cinza-ardosia">+1 (407) 555-0123</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className="font-semibold text-ctma-azul-marinho mb-1">E-mail</h4>
                                <p className="text-ctma-cinza-ardosia">cursos@ctma.org</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-ctma-azul-jeans text-ctma-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h4 className="font-semibold text-ctma-azul-marinho mb-1">Sede</h4>
                                <p className="text-ctma-cinza-ardosia">Orlando, Flórida - EUA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-ctma-azul-marinho to-ctma-azul-jeans text-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Seu Chamado Te Espera
                        </h2>
                        <p className="text-xl mb-8 text-ctma-white/90">
                            Não deixe para amanhã o que Deus está chamando você para fazer hoje. Seja um embaixador da fé e da compaixão em um mundo que precisa de esperança.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-500 hover:bg-yellow-400 text-ctma-azul-marinho px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                            >
                                <Heart className="w-6 h-6 mr-2" />
                                Inscreva-se Agora
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
