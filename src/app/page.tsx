import Link from "next/link";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import { GraduationCap, Briefcase, Users, ShieldCheck, AlertTriangle, Network, HeartHandshake, ArrowRight, Award, Users2, Globe, Handshake, Laptop, HeartPulse } from 'lucide-react';

// Dados dos Pilares de Impacto
const pilaresData = [
  { 
    id: 1, 
    icon: GraduationCap, 
    title: "Formação de Capelães Internacionais", 
    description: "Capacitamos vocacionados para serem a voz da esperança e o apoio espiritual em hospitais, prisões, escolas, zonas de desastre, e comunidades vulneráveis, com sensibilidade e compromisso cristão.", 
    link: "/cursos/capelao-internacional", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 2, 
    icon: Briefcase, 
    title: "Capacitação de Diplomatas Civis Internacionais", 
    description: "Preparamos líderes para a mediação de conflitos, cooperação global e representação ética cristã em cenários internacionais, promovendo a paz e a justiça, inclusive em contextos de crise humanitária.", 
    link: "/cursos/diplomata-civil", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 3, 
    icon: Users, 
    title: "Formação de Líderes Globais de Excelência", 
    description: "Desenvolvemos alta liderança cristã, integrando princípios bíblicos com gestão estratégica para influenciar positivamente organizações e sociedades, preparando-as também para responder a desafios imprevistos.", 
    link: "/lideranca-global", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 4, 
    icon: ShieldCheck, 
    title: "Credenciamento Internacional de Organizações", 
    description: "Oferecemos o selo Padrão Global de Excelência CTMA para ONGs, capelanias e projetos sociais. Este credenciamento garante que as organizações parceiras sigam rigorosos padrões de ética, transparência e eficácia, ampliando seu reconhecimento e credibilidade globais.", 
    link: "/credenciamento", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 5, 
    icon: AlertTriangle, 
    title: "Resposta a Emergências", 
    description: "Mobilizamos equipes de capelães e diplomatas para oferecer suporte espiritual e humanitário imediato em cenários de catástrofes naturais, guerras e crises. Somos a primeira linha de consolo e auxílio em momentos de extrema vulnerabilidade.", 
    link: "/resposta-emergencias", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 6, 
    icon: Network, 
    title: "Rede de Monitores Internacionais CTMA", 
    description: "Certificamos representantes oficiais para expandir nossa missão, coordenar treinamentos e projetos localmente em todos os continentes, prontos para mobilizar recursos em situações críticas.", 
    link: "/cursos/monitor-internacional", 
    linkText: "Saiba Mais" 
  },
  { 
    id: 7, 
    icon: HeartHandshake, 
    title: "Programa de Experiência, Missões e Doação Global", 
    description: "Conectamos fé, ação e generosidade, proporcionando vivências missionárias e acesso a projetos da CTMA em todo o mundo. Recebemos doações, como uma ONG 501(c)(3), e canalizamos esses recursos com total transparência e contabilidade auditada para projetos credenciados.", 
    link: "/programas/experiencia-missoes-doacao", 
    linkText: "Saiba Mais" 
  },
];

// Dados dos Diferenciais
const diferenciaisData = [
  { 
    id: 1, 
    icon: Award, 
    title: "Padrão Global de Excelência", 
    description: "Formação com rigor acadêmico e sensibilidade prática, reconhecida mundialmente, com preparo específico para crises." 
  },
  { 
    id: 2, 
    icon: Users2, 
    title: "Corpo Docente Experiente", 
    description: "Instrutores internacionais com vasta experiência ministerial e profissional, incluindo atuação em emergências." 
  },
  { 
    id: 3, 
    icon: Globe, 
    title: "Rede Global de Apoio", 
    description: "Conecte-se a uma comunidade de capelães, diplomatas e líderes em todos os continentes, pronta para atuar em conjunto em qualquer necessidade." 
  },
  { 
    id: 4, 
    icon: Handshake, 
    title: "Missão com Propósito", 
    description: "Faça parte de algo maior, impactando vidas e construindo o Reino de Deus, especialmente em momentos de vulnerabilidade extrema." 
  },
  { 
    id: 5, 
    icon: Laptop, 
    title: "Flexibilidade de Ensino", 
    description: "Programas híbridos, online e presenciais, adaptados à sua realidade." 
  },
  { 
    id: 6, 
    icon: HeartPulse, 
    title: "Valores Cristãos Inegociáveis", 
    description: "Fé, compaixão, integridade e liderança servidora como base de tudo." 
  },
];

export default function HomePage() {
  return (
    <main>      {/* Hero Section */}
      <section className="relative isolate bg-gradient-to-r from-ctma-azul-marinho to-ctma-cinza-ardosia min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center text-ctma-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Chaplain Training Management Agency
              <span className="block text-ctma-cinza-azulado-claro mt-3">CTMA</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-ctma-cinza-azulado-claro">
              Formamos capelães, diplomatas civis e líderes para um impacto global de compaixão, paz e esperança.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos"
                className="bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                TORNE-SE UM CAPELÃO
              </Link>
              <Link
                href="/cursos"
                className="bg-transparent text-ctma-azul-jeans border-2 border-ctma-azul-jeans px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#3E567B] hover:text-ctma-white hover:border-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                CONHEÇA NOSSOS CURSOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-6">
            Nossa Missão: Fé em Ação, Vidas Transformadas
          </h2>
          <p className="text-lg text-ctma-cinza-ardosia leading-relaxed mb-8">
            A CTMA (Chaplain Training Management Agency) é mais que uma instituição, somos um movimento global com sede em Orlando, Flórida (EUA), impulsionado pela fé, compaixão e misericórdia. Acreditamos que a liderança ética e a ação humanitária, inspiradas pelo amor de Cristo, são capazes de responder às maiores necessidades humanas em qualquer parte do mundo, especialmente em tempos de crise e emergência. Nossa essência é clara: Servir com excelência, liderar com propósito e transformar vidas pelo amor de Cristo.
          </p>          <Link
            href="/sobre-nos"
            className="inline-block bg-transparent text-ctma-azul-jeans border-2 border-ctma-azul-jeans font-semibold hover:bg-ctma-azul-jeans hover:text-ctma-white py-3 px-8 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            SAIBA MAIS SOBRE A CTMA
          </Link></div>
      </section>

      {/* Seção Nossos Pilares de Impacto */}
      <section className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-6">
              Construindo Pontes de Esperança e Conhecimento: Nossos 7 Pilares
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia max-w-3xl mx-auto leading-relaxed">
              Através de sete pilares estratégicos, a CTMA cria um ecossistema completo para capacitar e mobilizar líderes, impactando diretamente comunidades e nações. Veja como operamos para cumprir nossa missão global:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {pilaresData.map((pilar) => {
              const Icone = pilar.icon;
              return (                <div key={pilar.id} className="bg-ctma-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <Icone size={40} className="text-ctma-azul-jeans mb-4 self-start" />
                  <h3 className="text-xl font-semibold text-ctma-azul-marinho mb-3">{pilar.title}</h3>
                  <p className="text-ctma-cinza-ardosia text-sm leading-relaxed flex-grow mb-4">{pilar.description}</p>                  <Link href={pilar.link} className="text-ctma-azul-jeans hover:text-ctma-azul-marinho hover:underline font-medium mt-auto self-start inline-flex items-center transition-colors duration-200">
                    {pilar.linkText} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>      {/* Seção de Testemunhos */}
      <TestimonialsCarousel />

      {/* Seção Por Que Escolher a CTMA */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-6">
              CTMA: Excelência, Ética e Impacto Global
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
            {diferenciaisData.map((diferencial) => {
              const Icone = diferencial.icon;
              return (                <div key={diferencial.id} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 p-3 rounded-full bg-ctma-azul-jeans/10">
                    <Icone size={32} className="text-ctma-azul-jeans" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-ctma-azul-marinho">{diferencial.title}</h3>
                    <p className="text-ctma-cinza-ardosia text-sm">{diferencial.description}</p>
                  </div>
                </div>
              );
            })}          </div>
        </div>
      </section>

      {/* Seção Próximos Passos (Chamada Final para Ação) */}
      <section className="py-16 sm:py-24 bg-ctma-azul-marinho">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl xl:max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ctma-white mb-6">
            Seu Chamado te Espera. Sua Jornada Começa Agora.
          </h2>
          <p className="text-lg text-ctma-cinza-azulado-claro leading-relaxed mb-10">
            Pronto para dar o próximo passo e se capacitar para uma vida de impacto, especialmente em momentos onde a ajuda é mais urgente? Escolha seu caminho na CTMA e comece a transformar realidades.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">            <Link
              href="/cursos/capelao"
              className="block w-full bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              QUERO SER UM CAPELÃO
            </Link>            <Link
              href="/cursos/diplomata-civil"
              className="block w-full bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              QUERO SER UM DIPLOMATA CIVIL
            </Link>            <Link
              href="/cursos/monitor-internacional"
              className="block w-full bg-ctma-azul-jeans text-ctma-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              QUERO SER UM MONITOR INTERNACIONAL
            </Link>
            <Link
              href="/cursos"
              className="block w-full sm:col-span-2 lg:col-auto lg:col-start-1 lg:col-end-3 bg-ctma-white text-ctma-azul-marinho px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-ctma-cinza-azulado-claro transition-colors duration-200 ease-in-out border border-ctma-cinza-azulado-claro"
            >
              VER TODOS OS CURSOS E PROGRAMAS
            </Link>
            <Link
              href="/doacao"
              className="block w-full lg:col-start-3 lg:col-end-4 bg-transparent text-ctma-white border-2 border-ctma-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-ctma-white hover:text-ctma-azul-marinho transition-colors duration-200 ease-in-out"
            >
              FAÇA UMA DOAÇÃO E TRANSFORME VIDAS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
