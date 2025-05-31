import Link from 'next/link';
import type { Metadata } from 'next';
// Importe ícones de lucide-react se desejar usá-los nos valores, por exemplo:
// import { CheckCircle2, Shield, Heart, Star, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sobre Nós - CTMA',
    description: 'Conheça a história, missão, visão e valores da Chaplain Training Management Agency (CTMA), um movimento global de fé, compaixão e misericórdia.',
};

export default function SobreNosPage() {
    const valoresCtma = [
        { title: "Fé e Vocação", description: "Agimos com a certeza de um chamado divino, confiando na providência de Deus em cada projeto de serviço." /* icon: Heart */ },
        { title: "Compaixão", description: "Nosso amor e misericórdia se traduzem em cuidado genuíno, sem discriminação, valorizando cada vida e cada história de sofrimento." /* icon: HeartHandshake */ },
        { title: "Integridade", description: "Mantemos os mais altos padrões éticos, com total transparência, honestidade e responsabilidade em tudo o que fazemos, honrando a confiança que nos é depositada." /* icon: ShieldCheck */ },
        { title: "Excelência", description: "Buscamos a alta qualidade em cada aspecto: ensino, treinamento e operações, inovando continuamente e mantendo um profissionalismo exemplar." /* icon: Award */ },
        { title: "Liderança Servidora", description: "Inspirados pelo exemplo de Jesus, desenvolvemos líderes que influenciam pelo exemplo, servem com humildade e colocam o bem comum acima dos interesses pessoais." /* icon: Users2 */ },
        { title: "Colaboração Global", description: "Acreditamos na força da união. Incentivamos a cooperação entre diferentes denominações, culturas e organizações para maximizar nosso impacto positivo no mundo." /* icon: Globe */ }
    ];

    return (
        <> {/* Usa Fragment para não adicionar div extra desnecessário ao <main> do layout */}
            {/* Hero Section da Página Sobre */}
            <section className="py-16 sm:py-20 md:py-24 bg-ctma-cinza-azulado-claro text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ctma-azul-marinho">
                        Sobre a CTMA
                    </h1>
                    <p className="mt-3 sm:mt-4 text-lg md:text-xl text-ctma-cinza-ardosia max-w-2xl mx-auto">
                        Nossa História, Nossa Essência, Nosso Chamado
                    </p>
                </div>
            </section>

            {/* Conteúdo Principal da Página Sobre Nós */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-prose"> {/* max-w-prose para melhor legibilidade de texto longo */}

                    <article className="space-y-10 sm:space-y-12 text-ctma-cinza-ardosia leading-relaxed">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                                Quem Somos: Um Chamado que Transcende Fronteiras
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    A CTMA (Chaplain Training Management Agency) não é apenas uma organização; é um movimento global que nasceu de uma visão de Deus para as nações. Com uma profunda convicção de que a compaixão, a misericórdia e a liderança ética podem, de fato, transformar o mundo. Com sede em Orlando, Flórida (EUA) , atuamos como uma ponte vital entre a espiritualidade e a ação humanitária, capacitando indivíduos e organizações a servir de forma efetiva, amorosa e com propósito.
                                </p>
                                <p>
                                    Nossa identidade é clara: Servir com excelência, liderar com propósito e transformar vidas pelo amor de Cristo. Acreditamos que, ao unir conhecimento acadêmico, prática ministerial e valores cristãos, podemos responder às necessidades humanas mais urgentes, em qualquer parte do planeta.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                                Nossa Missão: Capacitar para Cuidar
                            </h2>
                            <p>
                                Nossa missão é clara e urgente: Capacitar e mobilizar capelães, diplomatas civis e líderes cristãos globalmente, fornecendo treinamento e certificações de excelência, para que possam servir comunidades com compaixão, integridade e eficácia. Somos impulsionados pelo exemplo de Cristo, buscando promover assistência humanitária, apoio espiritual e transformação social, alcançando pessoas em situação de vulnerabilidade e construindo pontes de paz e esperança onde elas são mais necessárias.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                                Nossa Visão: Onde a Esperança Encontra a Ação
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Cremos que seremos a principal agência mundial de capelania e liderança cristã, com uma presença influente em todos os continentes na promoção da paz, da equidade e do cuidado ao próximo.
                                </p>
                                <p>
                                    Visualizamos um futuro onde cada nação tenha líderes e capelães bem preparados, capazes de integrar ajuda humanitária e apoio espiritual. Queremos ser sinônimo de excelência, de unidade no Corpo de Cristo e de impacto transformador, oferecendo conforto, direção e dignidade a pessoas de todas as culturas e em todos os contextos, especialmente em meio a crises e conflitos.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-6">
                                Nossos Valores: Os Pilares da Nossa Atuação
                            </h2>
                            <p className="mb-6">
                                Em cada iniciativa e em cada passo, somos guiados por valores inegociáveis que refletem nosso coração e nosso propósito:
                            </p>
                            <ul className="space-y-6">
                                {valoresCtma.map((valor) => {
                                    // const IconComponent = valor.icon; // Descomente se for usar ícones
                                    return (
                                        <li key={valor.title} className="flex items-start">
                                            {/* {IconComponent && ( // Descomente se for usar ícones
                        <div className="flex-shrink-0 mr-4 mt-1 p-2 bg-ctma-azul-jeans/10 rounded-full">
                          <IconComponent size={24} className="text-ctma-azul-jeans" />
                        </div>
                      )} */}
                                            <div>
                                                <h3 className="font-semibold text-ctma-azul-marinho text-lg">{valor.title}</h3>
                                                <p>{valor.description}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                                Nossa História: Um Legado em Construção
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    A CTMA foi estabelecida para preencher uma lacuna vital: a necessidade de capacitação de alta qualidade para líderes e capelães que atuam em um cenário global complexo. Desde a nossa fundação em Orlando, Flórida, começamos a construir uma rede que se expande, capacitando pessoas para serem agentes de transformação em suas próprias comunidades e em cenários de grande necessidade ao redor do mundo.
                                </p>
                                <p>
                                    Nossa jornada é marcada por um compromisso inabalável com a excelência e um coração voltado para o serviço. Cada curso, cada credenciamento, cada monitor certificado e cada missão realizada nos aproxima de nossa visão de um mundo mais compassivo e justo.
                                </p>
                                {/* Adicionar aqui parágrafos sobre a origem se o conteúdo for fornecido */}
                            </div>
                        </div>
                    </article>

                    <div className="mt-12 sm:mt-16 md:mt-20 text-center border-t border-ctma-cinza-azulado-claro pt-12">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-ctma-azul-marinho mb-4">
                            Junte-se à Nossa Missão
                        </h2>
                        <p className="text-ctma-cinza-ardosia leading-relaxed mb-8 max-w-xl mx-auto">
                            Você também sente o desejo de fazer a diferença? A CTMA convida você a ser parte dessa história. Seja capacitando-se como capelão, diplomata civil, tornando-se um monitor em sua região ou apoiando nossos projetos, há um lugar para você em nossa família global.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">                            <Link
                                href="/cursos"
                                className="bg-ctma-azul-jeans text-ctma-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                            >
                                Conheça Nossos Cursos
                            </Link>
                            <Link
                                href="/parceria" // Crie este link se houver uma página de parceria
                                className="bg-transparent text-ctma-azul-jeans border-2 border-ctma-azul-jeans font-semibold hover:bg-ctma-azul-jeans hover:text-ctma-white py-2.5 px-7 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                            >
                                Seja um Parceiro
                            </Link>                            <Link
                                href="/doacao" // Link para página de doação
                                className="bg-ctma-accent-red text-ctma-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105"
                            >
                                Faça uma Doação
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
