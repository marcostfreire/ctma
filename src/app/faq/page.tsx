"use client"; // Necessário para useState
import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Users, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'FAQ - Perguntas Frequentes - CTMA',
    description: 'Encontre respostas para as perguntas mais frequentes sobre a CTMA, nossos cursos, credenciamento, e o Curso de Monitor Internacional.',
};

// Estrutura para os itens do FAQ
interface FaqItemProps {
    question: string;
    answer: React.ReactNode; // Permite HTML/componentes na resposta
    isOpen?: boolean;
    toggleOpen?: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-ctma-cinza-azulado-claro">
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full py-5 px-6 text-left text-lg font-medium text-ctma-azul-marinho hover:bg-ctma-cinza-azulado-claro/30 transition-colors"
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-ctma-azul-jeans" /> : <ChevronDown className="w-5 h-5 text-ctma-azul-jeans" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-5 text-ctma-cinza-ardosia leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

// Conteúdo do FAQ - Curso de Monitor Internacional
const faqMonitorInternacional = [
    {
        question: "O que é o Curso de Monitor Internacional da CTMA e qual seu propósito?",
        answer: (
            <>
                <p className="mb-2">
                    O Curso de Monitor Internacional da CTMA capacita líderes estratégicos a se tornarem extensões oficiais da CTMA em suas próprias regiões. 
                    Seu propósito é formar multiplicadores do nosso ensino de Capelania Internacional e Diplomacia Civil Cristã, permitindo que você organize e aplique nossos cursos 
                    (em formato híbrido: online e presencial) na sua comunidade. Você será a ponte entre a CTMA e novos Capelães e Diplomatas em sua área.
                </p>
            </>
        )
    },
    {
        question: "Qual o papel e as responsabilidades de um Monitor Internacional?",
        answer: (
            <>
                <p className="mb-2">Como Monitor Internacional, você será responsável por:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Formar e gerenciar turmas de alunos em sua região.</li>
                    <li>Aplicar a parte presencial dos cursos de Capelania Internacional e Diplomacia Civil Cristã, seguindo a metodologia e o material da CTMA.</li>
                    <li>Facilitar a parte online dos cursos para seus alunos, garantindo o acesso e o acompanhamento do conteúdo.</li>
                    <li>Representar a CTMA com excelência, mantendo o padrão de qualidade e a visão da nossa organização.</li>
                    <li>Ser um ponto de contato e suporte para os alunos em sua localidade.</li>
                </ul>
            </>
        )
    },
    {
        question: "Como o Monitor Internacional pode monetizar ou ser remunerado?",
        answer: (
            <>
                <p>
                    Sim, o curso de Monitor Internacional é uma oportunidade de empreendedorismo ministerial. Você poderá monetizar seu trabalho ao formar e gerenciar as turmas em sua região. 
                    A CTMA estabelece um modelo de parceria onde parte do valor das inscrições dos alunos formados por você será sua remuneração, tornando o curso uma forma de sustento e investimento no seu ministério.
                </p>
            </>
        )
    },
    {
        question: "Preciso ter alguma formação prévia para ser um Monitor Internacional?",
        answer: (
            <>
                <p>
                    É altamente recomendável que você já possua uma liderança estabelecida e um bom relacionamento em sua comunidade ou igreja. 
                    Experiência prévia em ensino ou coordenação de grupos é um diferencial, mas o curso fornecerá todas as ferramentas pedagógicas e administrativas necessárias para você ter sucesso.
                </p>
            </>
        )
    },
    {
        question: "Como a CTMA apoia o Monitor Internacional em sua atuação?",
        answer: (
            <>
                <p className="mb-2">A CTMA oferece suporte contínuo aos seus Monitores Internacionais, incluindo:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Material didático completo e atualizado para os cursos.</li>
                    <li>Treinamento pedagógico e de gestão de turmas.</li>
                    <li>Suporte administrativo e técnico para a plataforma online.</li>
                    <li>Acesso a uma comunidade exclusiva de Monitores, para troca de experiências e mentoria.</li>
                </ul>
            </>
        )
    },
];

// Componente principal da página de FAQ
export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaqItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-ctma-cinza-azulado-claro text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <HelpCircle className="w-16 h-16 text-ctma-azul-jeans mx-auto mb-6" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ctma-azul-marinho">
                        Perguntas Frequentes (FAQ)
                    </h1>
                    <p className="mt-3 sm:mt-4 text-lg md:text-xl text-ctma-cinza-ardosia max-w-2xl mx-auto">
                        Tire suas dúvidas sobre a CTMA, nossos cursos, programas e como você pode se envolver.
                    </p>
                </div>
            </section>

            {/* Seção de FAQs */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* FAQ: Curso de Monitor Internacional */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <BookOpen className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                Curso de Monitor Internacional CTMA
                            </h2>
                            <div className="bg-ctma-white rounded-lg shadow-xl overflow-hidden">
                                {faqMonitorInternacional.map((item, index) => (
                                    <FaqItem 
                                        key={index} 
                                        question={item.question} 
                                        answer={item.answer} 
                                        isOpen={openIndex === index}
                                        toggleOpen={() => toggleFaqItem(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Placeholder para FAQs Gerais */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <Users className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                Sobre a CTMA e Outros Cursos
                            </h2>
                            <div className="bg-ctma-cinza-azulado-claro/50 p-8 rounded-lg shadow-md text-center">
                                <p className="text-ctma-cinza-ardosia text-lg mb-4">
                                    Mais perguntas e respostas sobre a missão da CTMA, nossos outros cursos e como se credenciar serão adicionadas aqui em breve.
                                </p>
                                <Link
                                    href="/contato"
                                    className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-colors"
                                >
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Entre em Contato
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Seção CTA - Não encontrou sua resposta? */}
            <section className="py-12 sm:py-16 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                        Não Encontrou o que Procurava?
                    </h2>
                    <p className="text-lg text-ctma-cinza-ardosia mb-8 max-w-xl mx-auto">
                        Nossa equipe está pronta para ajudar! Se sua dúvida não foi respondida aqui, entre em contato conosco.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block bg-ctma-azul-jeans text-ctma-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                    >
                        Fale Conosco
                    </Link>
                </div>
            </section>
        </>
    );
}
