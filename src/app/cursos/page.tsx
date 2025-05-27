// C:\Users\Marcos\Documents\VS Code\clientes\ctma\ctmaweb\src\app\cursos\page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Para usar imagens dos cursos
import type { Metadata } from 'next';
// Importe ícones de lucide-react conforme necessário (ex: para a lista "Por que CTMA")
// import { Globe, Users, ShieldCheck, MapPin, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nossos Cursos - CTMA',
  description: 'Explore os cursos de Capelania, Diplomacia Civil, Liderança Global e mais, oferecidos pela CTMA. Capacite-se para um impacto global.',
};

export default function CursosPage() {
  // Dados para "Por Que a CTMA?"
  const porQueCtmaItens = [
    { title: "Autoridade Internacional Inquestionável", description: "Sua certificação CTMA é reconhecida globalmente, com base nos Estados Unidos, abrindo portas para você atuar em diversos contextos." /* icon: Globe */ },
    { title: "Suporte e Mentoria Vitalícios", description: "Nossa comunidade é sua família. Tenha apoio contínuo, acesso a missões exclusivas e recursos valiosos mesmo após a formação." /* icon: Users */ },
    { title: "Identidade Oficial e Diplomática Cristã", description: "Receba sua credencial que te posiciona como um agente de compaixão e honra, representando o Reino de Deus." /* icon: ShieldCheck */ },
    { title: "Campo de Atuação Ilimitado", description: "Prepare-se para fazer a diferença em hospitais, abrigos, prisões, emergências, escolas, instituições públicas e onde a necessidade clamar." /* icon: MapPin */ },
    { title: "Comunidade Global de Capelães", description: "Faça parte de uma rede vibrante de profissionais atuantes em todos os continentes. Conecte-se, colabore e cresça ao lado de quem compartilha do seu propósito." /* icon: Network */ },
  ];

  // Dados para Cursos de Capelania Especializada
  const capelaniasEspecializadas = [
    "Capelania Hospitalar: Leve conforto e esperança onde a dor é mais sentida.",
    "Capelania Prisional: Transforme vidas por trás das grades.",
    "Capelania em Catástrofes: Seja o alento em momentos de maior desespero.",
    "Capelania Familiar: Fortaleça lares e restaure relacionamentos.",
    "Capelania Educacional: Molde mentes e corações nas novas gerações.",
    "Capelania para Idosos: Acolha e valorize a sabedoria da terceira idade.",
    "Capelania Infantil: Leve alegria e esperança aos pequenos."
  ];
  // Dados para Depoimentos da Cursos Page
  const depoimentosCursosPage = [
    { 
      quote: "Antes da CTMA, eu me sentia perdida. Hoje, sirvo em abrigos e hospitais com autoridade, propósito e uma cobertura espiritual que nunca imaginei ter. Minha vida nunca mais foi a mesma.", 
      author: "Ana Carolina, Capelã CTMA – São Paulo, Brasil.",
      image: "/images/testimonials/ana-carolina.jpg",
      imageAlt: "Ana Carolina - Capelã CTMA"
    },
    { quote: "O suporte que recebo mesmo após o curso é impressionante. Não sou apenas um aluno; faço parte de algo maior, uma família global de capelães que transforma o mundo. É uma honra!", author: "Pr. Anderson Nogueira, Capelão CTMA – Luanda, Angola." }
  ];

  // Dados para Jornada em 5 Passos
  const jornadaPassos = [
    { step: 1, title: "Escolha seu Curso", description: "Navegue pelas nossas opções e selecione o programa que alinha com seu chamado." },
    { step: 2, title: "Inscrição Rápida", description: "Preencha seus dados e garanta sua vaga de forma segura e prática." },
    { step: 3, title: "Acesso Exclusivo", description: "Receba seu login para nossa plataforma de ensino com todo o material." },
    { step: 4, title: "Aprenda e Conecte-se", description: "Participe das aulas (presenciais ou online) e interaja com mentores e colegas." },
    { step: 5, title: "Certificação e Missão", description: "Receba seu certificado e identidade oficial, integrando-se à nossa rede global de apoio e ação missionária." }
  ];

  // Dados dos cursos principais com imagens
  const cursosData = [
    {
      id: 'capelania-internacional',
      title: 'Curso de Capelania Internacional – Presencial e Online',
      subtitle: 'Torne-se um verdadeiro embaixador da fé e da compaixão.',
      image: '/images/cursos/capelania-internacional.jpg', // Adicione esta imagem
      imageAlt: 'Capelania Internacional CTMA',
      features: [
        'Imersão Total: Mais de 40 horas de conteúdo prático e profundamente espiritual.',
        'Recursos Completos: Manual abrangente, aulas gravadas para revisão ilimitada e acesso vitalício à plataforma.',
        'Aulas ao Vivo com Líderes Mundiais: Aprenda e interaja com os maiores nomes da capelania internacional.',
        'Certificação Global: Credencial válida nos EUA e em nossos países parceiros.',
        'Integração Imediata: Seja incluído no nosso banco exclusivo de capelães ativos da CTMA, pronto para atuar.'
      ],
      buttonText: 'Quero Ser um Capelão Internacional: Inscreva-se Agora',
      buttonLink: '/cursos/capelania-internacional'
    },
    {
      id: 'diplomacia-civil',
      title: 'Curso de Diplomacia Civil Cristã',
      subtitle: 'Lidere com sabedoria e represente os valores do Reino em ambientes seculares.',
      image: '/images/cursos/diplomacia-civil.jpg', // Adicione esta imagem
      imageAlt: 'Diplomacia Civil Cristã CTMA',
      features: [
        'Formação Única: Seja preparado para representar princípios cristãos em contextos diplomáticos e governamentais.',
        'Rede Internacional: Conecte-se com líderes cristãos em posições de influência ao redor do mundo.',
        'Protocolo e Etiqueta: Domine as nuances culturais e diplomáticas necessárias para o sucesso em qualquer ambiente.'
      ],
      buttonText: 'Quero Ser um Diplomata Civil Cristão: Inscreva-se',
      buttonLink: '/cursos/diplomacia-civil'
    }
  ];

  return (
    <>
      {/* Topo da Página – Hero Section */}
      <section className="py-20 sm:py-28 md:py-32 bg-ctma-azul-marinho text-ctma-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Seu Chamado te Espera: <span className="block sm:inline">Torne-se um Capelão CTMA e Sirva o Mundo com Propósito</span>
          </h1>
          <p className="text-lg sm:text-xl text-ctma-cinza-azulado-claro max-w-3xl mx-auto mb-10">
            Na CTMA, você é preparado para ir além: para acolher, consolar e ser um farol de esperança em momentos de crise, representando o amor de Deus com excelência. Receba certificação internacional, suporte contínuo e reconhecimento global (EUA e mais de 20 países).
          </p>
          <Link
            href="#cursos-inicio" // Ancora para a seção de listagem de cursos
            className="inline-block bg-ctma-accent-red text-ctma-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Quero Atender ao Chamado: Comece Aqui
          </Link>
        </div>
      </section>

      {/* Seção 1 – Por Que a CTMA? Sua Missão Começa Conosco */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xl text-ctma-azul-marinho leading-relaxed italic max-w-3xl mx-auto">
              Você não apenas aprende; você se torna parte de algo maior. Na CTMA, sua jornada para servir é levada a sério.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {porQueCtmaItens.map((item, index) => {
              // const Icon = item.icon; // Descomente e importe os ícones se quiser usar
              return (
                <li key={index} className="flex items-start">
                  {/* {Icon && (
                    <div className="flex-shrink-0 mr-4 mt-1 p-2 bg-ctma-azul-jeans/10 rounded-full">
                      <Icon size={24} className="text-ctma-azul-jeans" />
                    </div>
                  )} */}
                  <div>
                    <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-1">{item.title}</h3>
                    <p className="text-ctma-cinza-ardosia text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <blockquote className="mt-12 pt-8 border-t border-ctma-cinza-azulado-claro text-center">
            <p className="text-xl italic text-ctma-azul-marinho font-medium max-w-2xl mx-auto">
              “Na CTMA, você não faz apenas um curso. Você assume um chamado sagrado, entra para uma missão global e se torna um instrumento de transformação para milhares de vidas no mundo todo.”
            </p>
          </blockquote>
        </div>
      </section>

      {/* Seção 2 – Nossos Caminhos para o Serviço: Escolha Sua Especialização */}
      <section id="cursos-inicio" className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro scroll-mt-20 md:scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Nossos Caminhos para o Serviço
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia max-w-2xl mx-auto">
              Encontre o programa ideal para aprofundar seu chamado e impactar o mundo.
            </p>
          </div>

          <div className="space-y-16">
            {/* Card do Curso de Capelania Internacional */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Image src="/images/cursos/capelania-internacional.jpg" alt="Capelania Internacional" width={400} height={260} className="rounded-lg object-cover w-full"/>
                </div>
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Capelania Internacional – Presencial e Online
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Torne-se um verdadeiro embaixador da fé e da compaixão.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside pl-5">
                    <li><span className="font-medium text-ctma-azul-marinho">Imersão Total:</span> Mais de 40 horas de conteúdo prático e profundamente espiritual.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Recursos Completos:</span> Manual abrangente, aulas gravadas para revisão ilimitada e acesso vitalício à plataforma.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Aulas ao Vivo com Líderes Mundiais:</span> Aprenda e interaja com os maiores nomes da capelania internacional.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Certificação Global:</span> Credencial válida nos EUA e em nossos países parceiros.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Integração Imediata:</span> Seja incluído no nosso banco exclusivo de capelães ativos da CTMA, pronto para atuar.</li>
                  </ul>
                  <Link
                    href="/cursos/capelania-internacional" // Ajustar link para a landing page específica
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Quero Ser um Capelão Internacional: Inscreva-se Agora
                  </Link>
                </div>
              </div>
            </div>

            {/* Card do Curso de Diplomacia Civil Cristã */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Image src="/images/cursos/diplomacia-civil.jpg" alt="Diplomacia Civil Cristã" width={400} height={260} className="rounded-lg object-cover w-full"/>
                </div>
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Diplomacia Civil Cristã
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Posicione-se como um líder de influência cristã em ambientes estratégicos.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside pl-5">
                    <li><span className="font-medium text-ctma-azul-marinho">Habilidades de Elite:</span> Desenvolva sua inteligência emocional e aprenda a comunicação diplomática para representar a fé com sabedoria e graça.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Acesso Exclusivo:</span> Participe de fóruns internacionais e eventos especiais, ampliando sua rede de contatos e oportunidades.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Seja a Voz da Fé:</span> Prepare-se para atuar em ambientes de alto impacto, onde sua influência pode moldar o futuro.</li>
                  </ul>
                  <Link
                    href="/cursos/diplomacia-civil" // Ajustar link
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Desenvolva Sua Influência: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Card do Curso de Líder Global */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Líder Global
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Desenvolva seu potencial máximo para liderar com inteligência, propósito e impacto em escala mundial.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside pl-5">
                    <li><span className="font-medium text-ctma-azul-marinho">Inteligência Essencial:</span> Capacite-se em inteligência emocional e espiritual para decisões mais assertivas e relacionamentos mais profundos.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Estratégias de Alto Nível:</span> Aprenda a formular e executar estratégias visionárias que transformam equipes e comunidades, com foco em resultados globais.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Comunicação Intercultural:</span> Domine a inteligência intercultural para atuar com eficácia, respeito e sensibilidade em diversos contextos culturais, construindo pontes e não barreiras.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Liderança Transformadora:</span> Posicione-se como um líder que inspira, mobiliza e gera um legado duradouro, expandindo o Reino de Deus com excelência.</li>
                  </ul>
                  <Link
                    href="/cursos/lider-global" // Ajustar link
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Torne-se um Líder Global: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Card do Curso de Monitor Internacional */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Monitor Internacional
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Capacite-se para formar novos líderes e expandir o impacto da CTMA em sua região.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside pl-5">
                    <li><span className="font-medium text-ctma-azul-marinho">Forme Novos Líderes:</span> Seja um multiplicador dos cursos da CTMA, capacitando capelães e diplomatas em sua comunidade.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Desenvolva Habilidades de Ensino:</span> Aprenda a aplicar a metodologia CTMA em cursos presenciais e online, com apoio e recursos da organização.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Expanda sua Influência:</span> Torne-se um representante da CTMA em sua região, impactando vidas e comunidades.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Empreenda com Propósito:</span> Gere receita ao formar novos líderes, com um modelo de parceria que recompensa seu trabalho.</li>
                  </ul>
                  <Link
                    href="/cursos/monitor-internacional" // Ajustar link
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Torne-se um Monitor Internacional: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Subseção Cursos de Capelania Especializada */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-4 text-center md:text-left">
                Cursos de Capelania Especializada
              </h3>
              <p className="text-ctma-cinza-ardosia mb-6 text-center md:text-left">
                Aprofunde seu impacto em áreas específicas e torne-se uma referência.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {capelaniasEspecializadas.map((especializacao, index) => {
                  const [titulo, descricao] = especializacao.split(': ');
                  return (
                    <div key={index} className="p-4 border border-ctma-cinza-azulado-claro/50 rounded-lg bg-ctma-cinza-azulado-claro/20">
                      <h4 className="font-semibold text-ctma-azul-marinho mb-1">{titulo}:</h4>
                      <p className="text-sm text-ctma-cinza-ardosia">{descricao}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-center md:text-left">
                <Link
                  href="/cursos/especializacoes" // Link para uma página futura com detalhes
                  className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Escolha Sua Especialização e Faça a Diferença
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 – Vozes que Inspiram: Depoimentos Reais */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Vozes que Inspiram: Depoimentos Reais
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia">
              O impacto da CTMA é visível na vida de nossos capelães. Veja o que eles estão realizando:
            </p>
          </div>          <div className="space-y-10">
            {depoimentosCursosPage.map((depoimento, index) => (
              <blockquote key={index} className="p-6 bg-ctma-cinza-azulado-claro/30 rounded-lg shadow-md border-l-4 border-ctma-azul-jeans">
                <div className="flex flex-col items-center text-center">
                  {depoimento.image && (
                    <div className="mb-4">
                      <Image 
                        src={depoimento.image} 
                        alt={depoimento.imageAlt || 'Depoimento'} 
                        width={80} 
                        height={80} 
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-lg italic text-ctma-cinza-ardosia mb-4">&ldquo;{depoimento.quote}&rdquo;</p>
                  <footer className="text-sm font-semibold text-ctma-azul-marinho">{depoimento.author}</footer>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 – Sua Jornada em 5 Passos: Comece Hoje Mesmo! */}
      <section className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Sua Jornada em 5 Passos: Comece Hoje Mesmo!
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia">
              É simples iniciar seu caminho para se tornar um Capelão CTMA e impactar vidas.
            </p>
          </div>
          <ol className="space-y-6 md:space-y-8">
            {jornadaPassos.map((item) => (
              <li key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-ctma-azul-jeans text-ctma-white rounded-full flex items-center justify-center text-xl font-bold mr-4 sm:mr-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ctma-azul-marinho mb-1">{item.title}</h3>
                  <p className="text-ctma-cinza-ardosia leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="#cursos-inicio" // Link para o início da listagem de cursos
              className="inline-block bg-ctma-azul-jeans text-ctma-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Sim, Quero Começar Minha Jornada Agora!
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 5 – Seu Chamado Espera: Uma Decisão, um Legado */}
      <section className="py-20 sm:py-28 md:py-32 bg-ctma-azul-marinho text-ctma-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Seu Chamado Espera: <span className="block sm:inline">Uma Decisão, um Legado</span>
          </h2>
          <p className="text-lg sm:text-xl text-ctma-cinza-azulado-claro max-w-3xl mx-auto mb-10">
            Você foi chamado para mais do que viver para si. Você foi chamado para servir, para ser a diferença, para impactar. O mundo precisa de capelães preparados, e o próximo pode ser você. Junte-se à CTMA e atue com excelência, honra e propósito onde vidas estão sendo esquecidas. Sinta a plenitude de um chamado que ecoa por todos os continentes.
          </p>
          <Link
            href="#cursos-inicio" // Link para o início da listagem de cursos
            className="inline-block bg-ctma-accent-red text-ctma-white px-12 py-5 rounded-lg text-xl font-semibold shadow-xl hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50"
          >
            Atenda ao Chamado: Junte-se à CTMA Hoje!
          </Link>
        </div>
      </section>

      {/* Ainda com Dúvidas? Fale Conosco! */}
      <section className="py-16 bg-ctma-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-ctma-azul-marinho mb-4">
            Ainda com Dúvidas? Fale Conosco!
          </h3>
          <p className="text-ctma-cinza-ardosia mb-8 max-w-xl mx-auto">
            Nossa equipe de conselheiros está pronta para te ajudar a encontrar o curso perfeito e esclarecer todas as suas perguntas.
          </p>
          <Link
            href="/contato" // Link para a página de contato
            className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Fale com um Consultor CTMA Agora
          </Link>
        </div>
      </section>
    </>
  );
}