import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contato - CTMA',
    description: 'Entre em contato com a Chaplain Training Management Agency (CTMA). Estamos prontos para responder suas perguntas sobre cursos, credenciamento, parcerias e doações.',
};

export default function ContatoPage() {
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
                                                Orlando, Flórida, EUA
                                            </p>
                                            <p className="text-sm text-ctma-cinza-ardosia mt-1">
                                                (Visitas apenas com agendamento prévio)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Opcional: Adicionar Telefone/WhatsApp se fornecido no web.md */}
                                    {/* 
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1 p-3 bg-ctma-azul-jeans/10 rounded-full">
                                            <Phone size={24} className="text-ctma-azul-jeans" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ctma-azul-marinho">Telefone / WhatsApp</h3>
                                            <p className="text-ctma-cinza-ardosia">
                                                Para um contato mais direto:
                                            </p>
                                            <a href="tel:+1XXXXXXXXXX" className="text-ctma-azul-jeans hover:text-ctma-azul-marinho hover:underline">
                                                +1 (XXX) XXX-XXXX (EUA)
                                            </a>
                                            <br />
                                            <a 
                                                href="https://wa.me/5511999999999" // Substituir pelo número correto
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-ctma-azul-jeans hover:text-ctma-azul-marinho hover:underline inline-flex items-center"
                                            >
                                                <MessageSquare size={18} className="mr-1.5" /> WhatsApp Brasil (Exemplo)
                                            </a>
                                        </div>
                                    </div>
                                    */}
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
                        </div>

                        {/* Formulário de Contato (Placeholder) */}
                        <div className="bg-ctma-cinza-azulado-claro p-6 sm:p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-6">
                                Envie-nos uma Mensagem
                            </h2>
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="Seu nome"
                                        disabled // Desabilitado pois é um placeholder
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-ctma-azul-marinho">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="seu@email.com"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Assunto
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="Sobre o que gostaria de falar?"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-ctma-azul-marinho">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 border border-ctma-cinza-ardosia rounded-md shadow-sm focus:ring-ctma-azul-jeans focus:border-ctma-azul-jeans sm:text-sm"
                                        placeholder="Digite sua mensagem aqui..."
                                        disabled
                                    />
                                </div>
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-ctma-white bg-ctma-azul-jeans hover:bg-[#3E567B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ctma-azul-jeans transition-colors duration-150 disabled:opacity-50"
                                        disabled // Botão desabilitado
                                    >
                                        Enviar Mensagem (Formulário em Breve)
                                    </button>
                                    <p className="mt-3 text-xs text-center text-ctma-cinza-ardosia">
                                        Este formulário será habilitado em breve. Por favor, utilize nosso e-mail para contato.
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