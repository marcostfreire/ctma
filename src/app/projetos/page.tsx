import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Heart, Globe, MapPin, Users, DollarSign, FileCheck, ExternalLink, Plane, Building } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Projetos - CTMA',
    description: 'Conheça os projetos missionários e sociais apoiados pela CTMA. Como uma organização 501(c)(3), conectamos doadores a iniciativas de alto impacto ao redor do mundo.',
};

export default function ProjetosPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-ctma-cinza-azulado-claro text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ctma-azul-marinho">
                        A CTMA em Ação: Canalizando Recursos para a Transformação Global
                    </h1>
                    <p className="mt-3 sm:mt-4 text-lg md:text-xl text-ctma-cinza-ardosia max-w-3xl mx-auto">
                        Como uma organização 501(c)(3) com base nos EUA, a CTMA conecta doadores de todo o mundo a projetos missionários e sociais de alto impacto, garantindo transparência e resultados.
                    </p>
                </div>
            </section>

            {/* Seção 1: Nossa Missão Além da Capacitação */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-6">
                            Nossa Missão Além da Capacitação
                        </h2>
                        <p className="text-lg text-ctma-cinza-ardosia leading-relaxed">
                            Na CTMA, nosso compromisso vai além da formação de líderes. Acreditamos que a capacitação anda de mãos dadas com a ação. Por isso, atuamos como uma ponte estratégica para que recursos financeiros e doações, recebidos de diversas partes do mundo, alcancem projetos missionários e sociais que estão fazendo a diferença no campo. Nossa condição de organização 501(c)(3) nos Estados Unidos nos permite receber e direcionar esses fundos com total legitimidade e responsabilidade.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção 2: Certificação e Selo Internacional para ONGs */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-4">
                                Certificação e Selo Internacional para ONGs Parceiras
                            </h2>
                            <p className="text-xl text-ctma-azul-jeans font-medium">
                                Aumente a Credibilidade e o Alcance do Seu Projeto com a Acreditação CTMA!
                            </p>
                            <p className="mt-4 text-lg text-ctma-cinza-ardosia max-w-3xl mx-auto">
                                Sabemos que a confiança é a base de toda doação. Por isso, a CTMA oferece um processo de acreditação e certificação para ONGs e projetos que desejam comprovar sua transparência e excelência operacional perante doadores globais.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="bg-ctma-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileCheck className="w-8 h-8 text-ctma-azul-jeans" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">Envie Seu Projeto</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Acesse nossa plataforma segura e faça upload de todos os documentos do seu projeto, incluindo história, propósito, demonstrações contábeis e plano de expansão.
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-ctma-azul-jeans" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">Análise Rigorosa</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Nossa equipe de especialistas fará uma avaliação detalhada para garantir que seu projeto atenda aos padrões internacionais de transparência e alinhamento com a missão CTMA.
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-8 h-8 text-ctma-azul-jeans" />
                                </div>
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-2">Selo de Reconhecimento</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Após aprovação, receba o Certificado de Acreditação e Selo Internacional CTMA, aumentando significativamente sua credibilidade para doadores globais.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/credenciamento"
                                className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                            >
                                <Shield className="w-5 h-5 mr-2" />
                                Acredite Seu Projeto e Conecte-se com Doadores Globais
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 3: Projetos em Destaque */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-4">
                                Conheça os Projetos Acreditados: O Impacto em Ação
                            </h2>
                            <p className="text-lg text-ctma-cinza-ardosia max-w-3xl mx-auto">
                                Aqui, você, doador, terá acesso direto aos projetos que foram cuidadosamente acreditados pela CTMA. Explore as iniciativas por trás das transformações, entenda seus objetivos e veja como cada centavo pode fazer a diferença.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Projeto 1: Missões Pastores de Rua */}
                            <div className="bg-ctma-cinza-azulado-claro rounded-lg p-8 shadow-lg">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-2/3">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mr-4">
                                                <Heart className="w-6 h-6 text-ctma-azul-jeans" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-ctma-azul-marinho">
                                                    Missões Pastores de Rua
                                                </h3>
                                                <p className="text-ctma-cinza-ardosia">Resgatando Vidas na Cracolândia, São Paulo</p>
                                            </div>
                                        </div>
                                        <p className="text-ctma-cinza-ardosia mb-4 leading-relaxed">
                                            Liderado com paixão pelo Pastor Ney Viana, o projeto Missões Pastores de Rua atua incansavelmente no coração da Cracolândia, em São Paulo. Seu propósito fundamental é estender a mão a indivíduos que hoje se encontram em dependência de drogas, oferecendo um caminho para a libertação do vício e a restauração de suas vidas.
                                        </p>
                                        <p className="text-ctma-cinza-ardosia mb-6 leading-relaxed">
                                            Através da pregação da Palavra de Deus e de um trabalho contínuo de evangelização e acolhimento direto nas ruas, o Pastor Ney e sua equipe resgatam essas pessoas, tirando-as de uma situação de vulnerabilidade extrema e direcionando-as para um futuro de esperança.
                                        </p>
                                        <div className="bg-ctma-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-ctma-azul-marinho mb-2">Objetivo Atual:</h4>
                                            <p className="text-ctma-cinza-ardosia">
                                                Construção de uma casa de recuperação bem estruturada para acolher de forma digna aqueles que buscam a libertação, oferecendo suporte necessário para reabilitação e reintegração social.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col justify-center">
                                        <div className="bg-ctma-white p-6 rounded-lg text-center">
                                            <MapPin className="w-8 h-8 text-ctma-azul-jeans mx-auto mb-2" />
                                            <p className="text-sm text-ctma-cinza-ardosia mb-4">São Paulo, Brasil</p>
                                            <Link
                                                href="/contato"
                                                className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg font-medium hover:bg-[#3E567B] transition-colors"
                                            >
                                                <DollarSign className="w-4 h-4 mr-2" />
                                                Apoiar Projeto
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Projeto 2: Capelania Prisional no Japão */}
                            <div className="bg-ctma-cinza-azulado-claro rounded-lg p-8 shadow-lg">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-2/3">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mr-4">
                                                <Users className="w-6 h-6 text-ctma-azul-jeans" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-ctma-azul-marinho">
                                                    Capelania Prisional com o Pastor Ícaro
                                                </h3>
                                                <p className="text-ctma-cinza-ardosia">Luz e Esperança no Japão</p>
                                            </div>
                                        </div>
                                        <p className="text-ctma-cinza-ardosia mb-4 leading-relaxed">
                                            No coração do Japão, o Pastor Ícaro lidera um ministério de Capelania Prisional que transcende barreiras geográficas e culturais. Com uma dedicação incansável, ele viaja por nove estados japoneses, levando a mensagem de esperança e transformação aos presídios, alcançando especialmente os mais de 180 presos brasileiros que vivem em uma realidade de isolamento.
                                        </p>
                                        <p className="text-ctma-cinza-ardosia mb-6 leading-relaxed">
                                            O trabalho do Pastor Ícaro é reconhecido e elogiado, inclusive pelo Consulado Brasileiro no Japão, que frequentemente o parabeniza pela sua atuação vital. Ele não apenas oferece apoio espiritual e emocional, mas também representa um elo de conexão e consolo para aqueles que estão distantes de casa.
                                        </p>
                                        <div className="bg-ctma-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-ctma-azul-marinho mb-2">Necessidades:</h4>
                                            <ul className="text-ctma-cinza-ardosia space-y-1">
                                                <li>• Veículo confortável para cobrir longas distâncias entre presídios</li>
                                                <li>• Recursos para implantação de uma Capelania CTMA no Japão</li>
                                                <li>• Capacitação de outros capelães para multiplicar o ministério</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col justify-center">
                                        <div className="bg-ctma-white p-6 rounded-lg text-center">
                                            <Globe className="w-8 h-8 text-ctma-azul-jeans mx-auto mb-2" />
                                            <p className="text-sm text-ctma-cinza-ardosia mb-4">Japão (9 Estados)</p>
                                            <Link
                                                href="/contato"
                                                className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg font-medium hover:bg-[#3E567B] transition-colors"
                                            >
                                                <DollarSign className="w-4 h-4 mr-2" />
                                                Apoiar Projeto
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Projeto 3: Projeto Sementes */}
                            <div className="bg-ctma-cinza-azulado-claro rounded-lg p-8 shadow-lg">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-2/3">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mr-4">
                                                <Building className="w-6 h-6 text-ctma-azul-jeans" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-ctma-azul-marinho">
                                                    Projeto Sementes
                                                </h3>
                                                <p className="text-ctma-cinza-ardosia">Edificando Esperança na África</p>
                                            </div>
                                        </div>
                                        <p className="text-ctma-cinza-ardosia mb-4 leading-relaxed">
                                            Liderado pela visionária Pastora Reverenda Alice Sampaio, o Projeto Sementes é uma iniciativa transformadora que, embora registrada nos Estados Unidos, canaliza todos os seus recursos para uma obra social de profundo impacto no continente africano.
                                        </p>
                                        <p className="text-ctma-cinza-ardosia mb-6 leading-relaxed">
                                            Até o momento, o Projeto Sementes já viabilizou a construção de 41 casas, proporcionando moradia digna e esperança para inúmeras famílias. A visão da Pastora Alice agora é expandir e agilizar ainda mais este trabalho, reduzindo o tempo de construção de cada nova moradia e multiplicando o alcance da solidariedade.
                                        </p>
                                        <div className="bg-ctma-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-ctma-azul-marinho mb-2">Conquistas:</h4>
                                            <p className="text-ctma-azul-jeans font-semibold text-lg">41 casas construídas</p>
                                            <p className="text-ctma-cinza-ardosia text-sm">Proporcionando moradia digna e esperança</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col justify-center">
                                        <div className="bg-ctma-white p-6 rounded-lg text-center">
                                            <Globe className="w-8 h-8 text-ctma-azul-jeans mx-auto mb-2" />
                                            <p className="text-sm text-ctma-cinza-ardosia mb-4">África</p>
                                            <Link
                                                href="/contato"
                                                className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg font-medium hover:bg-[#3E567B] transition-colors"
                                            >
                                                <DollarSign className="w-4 h-4 mr-2" />
                                                Apoiar Projeto
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 4: Visitas e Missões */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-6">
                            Visitas e Missões aos Projetos: Testemunhe a Transformação de Perto
                        </h2>
                        <p className="text-lg text-ctma-cinza-ardosia mb-8 leading-relaxed">
                            Experimente o impacto da sua doação de uma forma única! A CTMA oferece a oportunidade exclusiva de visitas e missões aos projetos acreditados, permitindo que doadores e interessados conheçam pessoalmente as iniciativas que estão transformando vidas ao redor do mundo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="bg-ctma-white p-6 rounded-lg shadow-md">
                                <Plane className="w-12 h-12 text-ctma-azul-jeans mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-3">Intercâmbio e Conexão</h3>                                <p className="text-ctma-cinza-ardosia">
                                    Viaje e interaja diretamente com as equipes locais e as comunidades beneficiadas, como o projeto &quot;Pastores de Rua&quot; na Cracolândia, em São Paulo, e tantos outros.
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-md">
                                <ExternalLink className="w-12 h-12 text-ctma-azul-jeans mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-3">Acompanhe o Progresso</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Testemunhe o avanço e a expansão dos projetos que você apoia, vendo de perto como os recursos estão sendo aplicados e os resultados alcançados.
                                </p>
                            </div>

                            <div className="bg-ctma-white p-6 rounded-lg shadow-md">
                                <Heart className="w-12 h-12 text-ctma-azul-jeans mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-3">Experiência Marcante</h3>
                                <p className="text-ctma-cinza-ardosia">
                                    Participe de uma jornada de aprendizado e inspiração, compreendendo a fundo o impacto da sua contribuição e fortalecendo sua fé no poder da transformação.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contato"
                            className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                        >
                            <Plane className="w-5 h-5 mr-2" />
                            Participe de uma Visita ou Missão a um Projeto
                        </Link>
                    </div>
                </div>
            </section>

            {/* Seção 5: Como Doar */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-6">
                            Faça a Diferença: Como Doar e Participar da Missão CTMA
                        </h2>
                        <p className="text-lg text-ctma-cinza-ardosia mb-8">
                            Sua generosidade é o motor que impulsiona a transformação. Cada doação, grande ou pequena, capacita a CTMA a expandir seu alcance e apoiar mais projetos de impacto.
                        </p>

                        <div className="space-y-4">
                            <Link
                                href="/contato"
                                className="inline-block bg-ctma-azul-jeans text-ctma-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                            >
                                <DollarSign className="inline w-6 h-6 mr-2" />
                                Doe Agora e Transforme Vidas!
                            </Link>
                            <p className="text-sm text-ctma-cinza-ardosia">
                                Entre em contato para conhecer outras formas de doação
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 6: Transparência */}
            <section className="py-12 sm:py-16 md:py-20 bg-ctma-cinza-azulado-claro">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ctma-azul-marinho mb-6">
                            Nosso Compromisso com a Transparência
                        </h2>
                        <p className="text-lg text-ctma-cinza-ardosia mb-8">
                            Na CTMA, a prestação de contas é fundamental. Estamos comprometidos com a total transparência na gestão dos recursos. Para mais detalhes sobre nossa auditoria e relatórios financeiros, entre em contato conosco.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contato"
                                className="inline-flex items-center bg-ctma-white text-ctma-azul-jeans px-6 py-3 rounded-lg font-semibold border-2 border-ctma-azul-jeans hover:bg-ctma-azul-jeans hover:text-ctma-white transition-colors"
                            >
                                <FileCheck className="w-5 h-5 mr-2" />
                                Relatórios Anuais e Transparência
                            </Link>
                            <Link
                                href="/sobre-nos"
                                className="inline-flex items-center bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3E567B] transition-colors"
                            >
                                Conheça Nossa História
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
