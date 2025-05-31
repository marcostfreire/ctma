"use client"; // Necessário para useState
import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Users } from 'lucide-react';

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
        )    },
];

// Conteúdo do FAQ - Curso de Capelania Internacional
const faqCapelaniaInternacional = [
    {
        question: "O que significa ser um Capelão Internacional da CTMA?",
        answer: (
            <>
                <p>
                    Ser um Capelão Internacional da CTMA significa ser um agente de compaixão, apoio e esperança, preparado para servir pessoas em seus momentos de maior necessidade, em qualquer lugar do mundo. 
                    Você será capacitado para atuar em hospitais, prisões, escolas, comunidades, em situações de emergência, desastres, e missões transculturais, representando o amor de Deus com ética e excelência.
                </p>
            </>
        )
    },
    {
        question: "Qual é a duração e o formato do curso?",
        answer: (
            <>
                <p className="mb-2">
                    O Curso de Capelania Internacional da CTMA possui uma carga horária de Curso Intensivo 7h de conteúdo prático e espiritual intensivo. 
                    Ele é oferecido em duas modalidades flexíveis para se adaptar à sua realidade:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>Presencial:</strong> Em locais e datas específicas que são divulgados previamente.</li>
                    <li><strong>Online:</strong> Com aulas ao vivo (que você pode participar de qualquer lugar) e acesso a aulas gravadas, permitindo que você revise o conteúdo no seu próprio ritmo.</li>
                </ul>
            </>
        )
    },
    {
        question: "A certificação da CTMA é reconhecida internacionalmente?",
        answer: (
            <>
                <p>
                    Sim, absolutamente. Sua certificação como Capelão Internacional da CTMA tem base nos Estados Unidos e é reconhecida em mais de 20 países parceiros globalmente. 
                    Isso valida sua qualificação e abre portas para atuação em diversos contextos internacionais e missões.
                </p>
            </>
        )
    },
    {
        question: "Preciso ter alguma formação ou experiência prévia para me inscrever?",
        answer: (
            <>
                <p>
                    Não é exigida uma formação acadêmica prévia específica para se inscrever. Valorizamos o chamado para servir e o desejo sincero de fazer a diferença. 
                    O curso é estruturado para capacitar pessoas de diversas origens e experiências, desde que possuam um coração voltado para a fé e o serviço ao próximo.
                </p>
            </>
        )
    },
    {
        question: "Que tipo de suporte a CTMA oferece aos Capelães após a formação?",
        answer: (
            <>
                <p>
                    A CTMA se preocupa com o seu ministério a longo prazo. Por isso, oferecemos suporte aos nossos capelães formados. 
                    Isso inclui acesso à nossa comunidade global exclusiva, oportunidades de mentoria contínua, participação em missões e um banco de recursos e materiais atualizados para apoiar sua atuação. 
                    Você fará parte de uma família global de capelães.
                </p>
            </>
        )
    },
    {
        question: "Como este curso me prepara para atuar em situações de crise e emergência?",
        answer: (
            <>
                <p>
                    Nosso currículo é cuidadosamente elaborado para incluir módulos focados em aconselhamento em crise, primeiros socorros psicológicos e estratégias de atuação em ambientes de alta pressão. 
                    Você aprenderá a oferecer conforto, esperança e apoio prático em cenários de desastres naturais, conflitos, luto e outras situações emergenciais.
                </p>
            </>
        )
    },
    {
        question: "Quais são as etapas para me inscrever no Curso de Capelania Internacional?",
        answer: (
            <>
                <p className="mb-2">O processo de inscrição é simples e direto:</p>
                <ol className="list-decimal list-inside space-y-1 pl-4">
                    <li>Na página do curso, clique no botão &ldquo;Quero Ser um Capelão Internacional: Inscreva-se Agora&rdquo;.</li>
                    <li>Você será direcionado para o formulário de inscrição, onde poderá preencher seus dados e escolher a modalidade de curso (presencial ou online) que melhor se adapta a você.</li>
                    <li>Após a inscrição, você receberá todas as informações para iniciar sua jornada conosco.</li>
                </ol>
            </>
        )
    }
];

// Conteúdo do FAQ - Curso de Líder Global
const faqLiderGlobal = [
    {
        question: "O que é o Curso de Líder Global da CTMA e para quem ele é destinado?",
        answer: (
            <>
                <p>
                    O Curso de Líder Global da CTMA é um programa de capacitação estratégica projetado para aprimorar e transformar líderes cristãos com uma visão de impacto internacional. 
                    Ele é destinado a pastores, missionários, diretores de ministérios e ONGs, gestores de projetos sociais, empresários com propósito e qualquer indivíduo que aspire a exercer uma liderança influente e ética em escala global, 
                    tanto no contexto eclesiástico quanto secular.
                </p>
            </>
        )
    },
    {
        question: "Quais são os principais objetivos e o que vou aprender neste curso?",
        answer: (
            <>
                <p className="mb-2">O curso visa desenvolver líderes com uma perspectiva estratégica e global. Você aprenderá a:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>Liderar com Propósito:</strong> Aprofundar sua liderança servidora e o impacto do Reino em todas as esferas.</li>
                    <li><strong>Dominar a Inteligência Cultural:</strong> Navegar e atuar com sabedoria em contextos multiculturais.</li>
                    <li><strong>Construir e Gerenciar Equipes de Alta Performance:</strong> Mobilizar e inspirar colaboradores em projetos globais.</li>
                    <li><strong>Elaborar Planejamento Estratégico:</strong> Desenvolver e implementar iniciativas com alcance internacional.</li>
                    <li><strong>Comunicar com Maestria:</strong> Aprimorar sua comunicação para influenciar e inspirar em diferentes culturas.</li>
                    <li><strong>Cultivar a Resiliência do Líder:</strong> Fortalecer sua vida espiritual e emocional para os desafios da liderança global.</li>
                </ul>
            </>
        )
    },
    {
        question: "Como o Curso de Líder Global se diferencia de outros programas de liderança?",
        answer: (
            <>
                <p>
                    Nosso diferencial é a abordagem cristocêntrica e prática. Não apenas ensinamos teoria, mas preparamos líderes para a ação e o impacto real, com ferramentas aplicáveis em diversos cenários globais. 
                    Focamos na integridade, ética e valores bíblicos como alicerce de uma liderança verdadeiramente transformadora, com o respaldo e a rede internacional da CTMA.
                </p>
            </>
        )
    },
    {
        question: "A CTMA oferece algum tipo de suporte ou rede para os líderes formados?",
        answer: (
            <>
                <p className="mb-2">Sim, absolutamente! Ao se tornar um Líder Global CTMA, você terá acesso à nossa exclusiva Comunidade de Líderes CTMA. Esta rede oferece:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Oportunidades de networking com outros líderes influentes ao redor do mundo.</li>
                    <li>Mentoria e aconselhamento de líderes experientes.</li>
                    <li>Acesso a eventos e fóruns de discussão sobre temas globais.</li>
                    <li>Recursos e materiais atualizados para o seu desenvolvimento contínuo.</li>
                </ul>
                <p className="mt-2">Esta é uma comunidade de apoio e colaboração para a vida toda.</p>
            </>
        )
    },
    {
        question: "Qual a duração e o formato do Curso de Líder Global?",
        answer: (
            <>
                <p>
                    As informações sobre duração e formato (seja online, presencial, híbrido ou com módulos específicos) serão detalhadas na descrição completa do curso, 
                    pois podem variar dependendo da complexidade do conteúdo e da interatividade proposta.
                </p>
            </>
        )
    },
    {
        question: "Como posso me inscrever e dar o próximo passo na minha jornada de liderança?",
        answer: (
            <>
                <p>
                    Se você sente o chamado para liderar com um propósito maior e impactar o mundo, clique no botão &ldquo;Desenvolva Sua Influência Global: Inscreva-se Agora!&rdquo; na página do curso. 
                    Prepare-se para ser um agente de transformação em escala global.
                </p>
            </>
        )
    }
];

// Conteúdo do FAQ - Curso de Diplomacia Civil Cristã
const faqDiplomacia = [
    {
        question: "O que é e para quem se destina o Curso de Diplomacia Civil Cristã da CTMA?",
        answer: (
            <>
                <p>
                    O Curso de Diplomacia Civil Cristã da CTMA é um programa estratégico que capacita líderes cristãos a atuar com sabedoria, graça e impacto em ambientes de influência, negociação e representação. 
                    Ele é destinado a pastores, líderes de ministérios, missionários, profissionais que atuam em áreas de política, relações governamentais, organizações não-governamentais (ONGs), 
                    e qualquer indivíduo que deseje aprimorar sua capacidade de representar e defender os valores cristãos de forma eficaz em esferas nacionais e internacionais.
                </p>
            </>
        )
    },
    {
        question: "Qual o grande diferencial da Diplomacia Civil Cristã em relação à diplomacia tradicional?",
        answer: (
            <>
                <p>
                    O diferencial reside na integração da fé cristã com as práticas diplomáticas. Enquanto a diplomacia tradicional foca em interesses nacionais, a Diplomacia Civil Cristã, na CTMA, 
                    prepara você para atuar com uma visão de Reino, buscando a paz, a justiça, a dignidade humana e a reconciliação, sempre com base em princípios bíblicos, 
                    mas de forma aplicável e respeitosa em qualquer contexto.
                </p>
            </>
        )
    },
    {
        question: "Quais habilidades específicas serei capaz de desenvolver com este curso?",
        answer: (
            <>
                <p className="mb-2">Você desenvolverá um conjunto robusto de habilidades essenciais para a atuação em ambientes estratégicos, incluindo:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>Inteligência Emocional Elevada:</strong> Para gerenciar suas emoções e compreender as dos outros em situações de alta pressão.</li>
                    <li><strong>Comunicação Diplomática e Persuasiva:</strong> Aprender a expressar ideias e defender princípios com clareza, respeito e poder de influência.</li>
                    <li><strong>Negociação e Mediação:</strong> Técnicas para construir pontes, resolver conflitos e alcançar acordos construtivos.</li>
                    <li><strong>Análise de Cenários Globais:</strong> Compreender as dinâmicas políticas, sociais e culturais sob uma perspectiva cristã.</li>
                    <li><strong>Posicionamento de Influência:</strong> Estratégias para se estabelecer como uma voz relevante e respeitada em ambientes de decisão.</li>
                </ul>
            </>
        )
    },
    {
        question: "O curso me dará acesso a fóruns ou eventos internacionais?",
        answer: (
            <>
                <p>
                    Sim. Um dos pilares do curso é proporcionar conexão e acesso. A CTMA, através de sua rede e parcerias, busca oferecer e indicar oportunidades para que você participe de fóruns internacionais, 
                    conferências e eventos especiais que ampliarão sua rede de contatos e permitirão a aplicação prática de seus conhecimentos em cenários de alto impacto.
                </p>
            </>
        )
    },
    {
        question: "Como este curso pode impulsionar minha carreira ou meu ministério?",
        answer: (
            <>
                <p className="mb-2">Ao dominar a Diplomacia Civil Cristã, você estará apto a:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Representar a fé de forma estratégica em conselhos, comitês e outras instâncias decisórias.</li>
                    <li>Construir relacionamentos sólidos com líderes de diversas esferas.</li>
                    <li>Advogar por causas justas e pelos valores do Reino de Deus.</li>
                    <li>Mediar situações complexas com sabedoria e discernimento.</li>
                    <li>Expandir seu impacto ministerial para além das quatro paredes da igreja, alcançando influência em áreas da sociedade.</li>
                </ul>
            </>
        )
    },
    {
        question: "Como faço para me inscrever e começar minha jornada na Diplomacia Civil Cristã?",
        answer: (
            <>
                <p>
                    Se você sente o chamado para ser um agente de influência e transformação em ambientes estratégicos, clique no botão &ldquo;Desenvolva Sua Influência Diplomática: Saiba Mais e Inscreva-se!&rdquo; na página do curso. 
                    Estamos prontos para te equipar para essa missão vital.
                </p>
            </>
        )
    }
];

// Conteúdo do FAQ - Perguntas Gerais sobre a CTMA
const faqGerais = [
    {
        question: "O que é a CTMA e qual é a sua missão?",
        answer: (
            <>
                <p className="mb-3">
                    A CTMA (Chaplain Training Management Agency) é uma organização 501(c)(3) com sede em Orlando, Flórida (EUA), que atua como um movimento global de capacitação e mobilização de líderes cristãos.
                </p>
                <p className="mb-3">
                    Nossa missão é capacitar e mobilizar capelães, diplomatas civis e líderes cristãos globalmente, fornecendo treinamento e certificações de excelência, para que possam servir comunidades com compaixão, integridade e eficácia.
                </p>
                <p>
                    Somos impulsionados pelo exemplo de Cristo, buscando promover assistência humanitária, apoio espiritual e transformação social, alcançando pessoas em situação de vulnerabilidade e construindo pontes de paz e esperança onde elas são mais necessárias.
                </p>
            </>
        )
    },
    {
        question: "A CTMA possui reconhecimento internacional?",
        answer: (
            <>
                <p className="mb-2">
                    Sim! A CTMA possui status de organização 501(c)(3) nos Estados Unidos, o que nos confere reconhecimento oficial e credibilidade internacional. Nossas certificações são válidas e reconhecidas em:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 mb-3">
                    <li>Estados Unidos</li>
                    <li>Mais de 20 países parceiros</li>
                    <li>Organizações internacionais e consulados</li>
                </ul>
                <p>
                    Nossa autoridade internacional é inquestionável, abrindo portas para nossos formados atuarem em diversos contextos globais.
                </p>
            </>
        )
    },
    {
        question: "Como funciona o credenciamento internacional de organizações pela CTMA?",
        answer: (
            <>
                <p className="mb-3">
                    A CTMA oferece o Selo Padrão Global de Excelência para ONGs, capelanias e projetos sociais. O processo de acreditação garante que as organizações parceiras sigam rigorosos padrões de ética, transparência e eficácia.
                </p>
                <p className="mb-2">O processo inclui:</p>
                <ol className="list-decimal list-inside space-y-1 pl-4 mb-3">
                    <li>Avaliação detalhada da organização e seus projetos</li>
                    <li>Verificação dos padrões de ética e transparência</li>
                    <li>Emissão do Certificado de Acreditação e Selo Internacional CTMA</li>
                </ol>
                <p>
                    Este selo aumenta significativamente a credibilidade e atratividade da organização para doadores em todo o mundo.
                </p>
            </>
        )
    },
    {
        question: "Quais são os valores fundamentais que guiam a CTMA?",
        answer: (
            <>
                <p className="mb-2">A CTMA é guiada por seis valores fundamentais:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Fé e Vocação:</strong> Agimos com a certeza de um chamado divino, confiando na providência de Deus</li>
                    <li><strong>Compaixão:</strong> Amor e misericórdia traduzidos em cuidado genuíno, sem discriminação</li>
                    <li><strong>Integridade:</strong> Padrões éticos elevados com total transparência e responsabilidade</li>
                    <li><strong>Excelência:</strong> Alta qualidade em ensino, treinamento e operações, inovando continuamente</li>
                    <li><strong>Liderança Servidora:</strong> Líderes que influenciam pelo exemplo e servem com humildade</li>
                    <li><strong>Colaboração Global:</strong> União entre diferentes denominações, culturas e organizações</li>
                </ul>
            </>
        )
    },
    {
        question: "A CTMA atua em situações de emergência?",
        answer: (
            <>
                <p className="mb-3">
                    Sim! A CTMA possui um programa especializado de Resposta a Emergências. Mobilizamos equipes de capelães e diplomatas para oferecer suporte espiritual e humanitário imediato em cenários de:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 mb-3">
                    <li>Catástrofes naturais</li>
                    <li>Guerras e conflitos</li>
                    <li>Crises humanitárias</li>
                    <li>Emergências comunitárias</li>
                </ul>
                <p>
                    Somos frequentemente a primeira linha de consolo e auxílio em momentos de extrema vulnerabilidade, trabalhando em parceria com autoridades locais e organizações internacionais.
                </p>
            </>
        )
    },
    {
        question: "Como posso apoiar a missão da CTMA além dos cursos?",
        answer: (
            <>
                <p className="mb-2">Existem várias formas de apoiar a missão da CTMA:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mb-3">
                    <li><strong>Doações:</strong> Como organização 501(c)(3), recebemos doações que são direcionadas para projetos credenciados</li>
                    <li><strong>Voluntariado:</strong> Participe de missões e visitas aos projetos acreditados</li>
                    <li><strong>Parceria:</strong> Organizações podem se credenciar e fazer parte da nossa rede global</li>
                    <li><strong>Divulgação:</strong> Compartilhe nossa missão e ajude a expandir nosso alcance</li>
                </ul>
                <p>
                    Mantemos total transparência na gestão dos recursos, com contabilidade auditada e relatórios regulares sobre o impacto das contribuições.
                </p>
            </>
        )
    },
    {
        question: "Como entrar em contato com a CTMA para mais informações?",
        answer: (
            <>
                <p className="mb-3">
                    Para mais informações sobre nossos cursos, credenciamento ou oportunidades de parceria, você pode entrar em contato conosco através da nossa página de contato.
                </p>
                <p className="mb-3">
                    Nossa sede está localizada em Orlando, Flórida (EUA), e atendemos em horário comercial americano. Para questões urgentes relacionadas a emergências ou situações críticas, temos canais de comunicação prioritários.
                </p>
                <Link
                    href="/contato"
                    className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3E567B] transition-colors"
                >
                    Entre em Contato Conosco
                </Link>
            </>
        )
    }
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

                        {/* FAQ: Curso de Capelania Internacional */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <BookOpen className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                Curso de Capelania Internacional CTMA
                            </h2>
                            <div className="bg-ctma-white rounded-lg shadow-xl overflow-hidden">
                                {faqCapelaniaInternacional.map((item, index) => (
                                    <FaqItem 
                                        key={`capelania-${index}`} 
                                        question={item.question} 
                                        answer={item.answer} 
                                        isOpen={openIndex === (faqMonitorInternacional.length + index)}
                                        toggleOpen={() => toggleFaqItem(faqMonitorInternacional.length + index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* FAQ: Curso de Líder Global */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <BookOpen className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                Curso de Líder Global CTMA
                            </h2>
                            <div className="bg-ctma-white rounded-lg shadow-xl overflow-hidden">
                                {faqLiderGlobal.map((item, index) => (
                                    <FaqItem 
                                        key={`lider-${index}`} 
                                        question={item.question} 
                                        answer={item.answer} 
                                        isOpen={openIndex === (faqMonitorInternacional.length + faqCapelaniaInternacional.length + index)}
                                        toggleOpen={() => toggleFaqItem(faqMonitorInternacional.length + faqCapelaniaInternacional.length + index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* FAQ: Curso de Diplomacia Civil Cristã */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <BookOpen className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                Curso de Diplomacia Civil Cristã CTMA
                            </h2>
                            <div className="bg-ctma-white rounded-lg shadow-xl overflow-hidden">
                                {faqDiplomacia.map((item, index) => (
                                    <FaqItem 
                                        key={`diplomacia-${index}`} 
                                        question={item.question} 
                                        answer={item.answer} 
                                        isOpen={openIndex === (faqMonitorInternacional.length + faqCapelaniaInternacional.length + faqLiderGlobal.length + index)}
                                        toggleOpen={() => toggleFaqItem(faqMonitorInternacional.length + faqCapelaniaInternacional.length + faqLiderGlobal.length + index)}
                                    />
                                ))}
                            </div>
                        </div>                        {/* FAQ: Perguntas Gerais sobre a CTMA */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-8 text-center">
                                <Users className="inline-block w-8 h-8 mr-3 text-ctma-azul-jeans" />
                                FAQs Gerais sobre a CTMA
                            </h2>
                            <div className="bg-ctma-white rounded-lg shadow-xl overflow-hidden">
                                {faqGerais.map((item, index) => (
                                    <FaqItem 
                                        key={`gerais-${index}`} 
                                        question={item.question} 
                                        answer={item.answer} 
                                        isOpen={openIndex === (faqMonitorInternacional.length + faqCapelaniaInternacional.length + faqLiderGlobal.length + faqDiplomacia.length + index)}
                                        toggleOpen={() => toggleFaqItem(faqMonitorInternacional.length + faqCapelaniaInternacional.length + faqLiderGlobal.length + faqDiplomacia.length + index)}
                                    />
                                ))}
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
