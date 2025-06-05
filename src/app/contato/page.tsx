'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                body: JSON.stringify({ formData, formType: 'Contato' }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
                setFormData({ // Reset form
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus({ success: false, message: result.error || 'Falha ao enviar a mensagem. Tente novamente.' });
            }        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            setSubmitStatus({ success: false, message: `Ocorreu um erro ao enviar a mensagem. ${errorMessage}` });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            {/* Hero Section da Página de Contato */}
            <section className="py-16 sm:py-20 md:py-24 bg-ctma-cinza-azulado-claro text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ctma-azul-marinho">
                        Entre em Contato Conosco
                    </h1>
                    <p className="mt-3 sm:mt-4 text-lg md:text-xl text-ctma-cinza-ardosia max-w-2xl mx-auto">
                        Tem dúvidas, sugestões ou quer saber mais sobre nosso trabalho? Nossa equipe está pronta para atendê-lo.
                    </p>
                </div>
            </section>

            {/* Conteúdo Principal da Página de Contato */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

                        {/* Informações de Contato */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-6">
                                    Nossos Canais
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1 p-3 bg-ctma-azul-jeans/10 rounded-full">
                                            <Mail size={24} className="text-ctma-azul-jeans" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ctma-azul-marinho">E-mail Principal</h3>
                                            <p className="text-ctma-cinza-ardosia">
                                                Para dúvidas gerais, informações sobre cursos e parcerias:
                                            </p>
                                            <a href="mailto:contato@ctma.org" className="text-ctma-azul-jeans hover:text-ctma-azul-marinho hover:underline break-all">
                                                contato@ctma.org
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1 p-3 bg-ctma-azul-jeans/10 rounded-full">
                                            <MapPin size={24} className="text-ctma-azul-jeans" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ctma-azul-marinho">Nossa Sede</h3>
                                            <p className="text-ctma-cinza-ardosia">
                                                Chaplain Training Management Agency - CTMA
                                            </p>
                                            <p className="text-ctma-cinza-ardosia">
                                                5950 Lakehurst, Dr Suite 106, Orlando-Fl
                                            </p>
                                            <p className="text-sm text-ctma-cinza-ardosia mt-1">
                                                (Visitas apenas com agendamento prévio)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1 p-3 bg-ctma-azul-jeans/10 rounded-full">
                                            <Phone size={24} className="text-ctma-azul-jeans" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ctma-azul-marinho">Telefone</h3>
                                            <p className="text-ctma-cinza-ardosia">
                                                Para um contato mais direto:
                                            </p>
                                            <a href="tel:+16892763285" className="text-ctma-azul-jeans hover:text-ctma-azul-marinho hover:underline">
                                                +1 689 276 3285 (EUA)
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-ctma-azul-marinho mb-3">Horário de Atendimento</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Segunda a Sexta: 9:00 - 18:00 (Horário de Orlando, FL - EST/EDT)
                                </p>
                                <p className="text-ctma-cinza-ardosia">
                                    Procuramos responder a todos os contatos em até 48 horas úteis.
                                </p>
                            </div>
                        </div>                        {/* Formulário de Contato */}
                        <div className="bg-ctma-cinza-azulado-claro p-6 sm:p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-6">
                                Envie-nos uma Mensagem
                            </h2>
                            
                            {/* Status do envio */}
                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${
                                    submitStatus.success 
                                        ? 'bg-green-50 border border-green-200 text-green-800' 
                                        : 'bg-red-50 border border-red-200 text-red-800'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        autoComplete="name"
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="Seu nome completo"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-ctma-azul-marinho">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        autoComplete="email"
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="seu@email.com"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Assunto *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="Sobre o que gostaria de falar?"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm resize-vertical"
                                        placeholder="Digite sua mensagem aqui..."
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-ctma-white bg-ctma-azul-jeans hover:bg-[#3E567B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ctma-azul-jeans transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                    </button>
                                    <p className="mt-3 text-xs text-center text-ctma-cinza-ardosia">
                                        Responderemos em até 48 horas úteis.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* FAQ Rápido ou Link para FAQ Completo */}
                    <div className="mt-16 sm:mt-20 md:mt-24 pt-10 border-t border-ctma-cinza-azulado-claro text-center">
                        <h2 className="text-2xl font-semibold text-ctma-azul-marinho mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-ctma-cinza-ardosia mb-6 max-w-xl mx-auto">
                            Muitas dúvidas comuns sobre nossos cursos, processos e a CTMA já podem estar respondidas em nossa seção de FAQs.
                        </p>
                        <Link
                            href="/faq" // Crie esta página de FAQ depois
                            className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                        >
                            Ver Perguntas Frequentes
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}