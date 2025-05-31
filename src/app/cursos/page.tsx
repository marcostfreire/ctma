"use client";
// C:\Users\Marcos\Documents\VS Code\clientes\ctma\ctmaweb\src\app\cursos\page.tsx
import Link from 'next/link';
import Image from 'next/image';
// Se precisar de ícones para a seção "Por Que a CTMA?", pode importá-los:
// import { Globe, Users, ShieldCheck, MapPin, Network, CheckCircle } from 'lucide-react';

export default function CursosPage() {
  // Dados para "Por Que a CTMA?"
  const porQueCtmaItens = [
    { title: "Autoridade Internacional Inquestionável", description: "Sua certificação CTMA é reconhecida globalmente, com base nos Estados Unidos, abrindo portas para você atuar em diversos contextos." /* icon: Globe */ },
    { title: "Suporte e Mentoria", description: "Nossa comunidade é sua família. Tenha apoio contínuo, acesso a missões exclusivas e recursos valiosos mesmo após a formação." /* icon: Users */ },
    { title: "Identidade Oficial e Diplomática Cristã", description: "Receba sua credencial que te posiciona como um agente de compaixão e honra, representando o Reino de Deus." /* icon: ShieldCheck */ },
    { title: "Campo de Atuação Ilimitado", description: "Prepare-se para fazer a diferença em hospitais, abrigos, prisões, emergências, escolas, instituições públicas e onde a necessidade clamar." /* icon: MapPin */ },
    { title: "Comunidade Global de Capelães", description: "Faça parte de uma rede vibrante de profissionais atuantes em todos os continentes. Conecte-se, colabore e cresça ao lado de quem compartilha do seu propósito." /* icon: Network */ },
  ];

  // Dados para Cursos Principais (Capelania, Diplomacia, Líder Global, Monitor)
  const cursosPrincipais = [
    {
      id: 'capelania-internacional',
      title: 'Curso de Capelania Internacional – Presencial e Online',
      subtitle: 'Torne-se um verdadeiro embaixador da fé e da compaixão.',
      image: '/images/cursos/capelania-internacional.jpg',
      imageAlt: 'Curso de Capelania Internacional CTMA',
      features: [
        'Imersão Total: Curso Intensivo 7h de conteúdo prático e profundamente espiritual.',
        'Recursos Completos: Manual abrangente, aulas gravadas para revisão ilimitada e acesso à plataforma.',
        'Aulas ao Vivo com Líderes Mundiais: Aprenda e interaja com os maiores nomes da capelania internacional.',
        'Certificação Global: Credencial válida nos EUA e em nossos países parceiros.',
        'Integração Imediata: Seja incluído no nosso banco exclusivo de capelães ativos da CTMA, pronto para atuar.'
      ],
      buttonText: 'Quero Ser um Capelão Internacional: Inscreva-se Agora',
      buttonLink: '/cursos/capelania-internacional' // Link para landing page específica
    },
    {
      id: 'diplomacia-civil',
      title: 'Curso de Diplomacia Civil Cristã',
      subtitle: 'Posicione-se como um líder de influência cristã em ambientes estratégicos.',
      image: '/images/cursos/diplomacia-civil.jpg',
      imageAlt: 'Curso de Diplomacia Civil Cristã CTMA',
      features: [
        'Habilidades de Elite: Desenvolva sua inteligência emocional e aprenda a comunicação diplomática para representar a fé com sabedoria e graça.',
        'Acesso Exclusivo: Participe de fóruns internacionais e eventos especiais, ampliando sua rede de contatos e oportunidades.',
        'Seja a Voz da Fé: Prepare-se para atuar em ambientes de alto impacto, onde sua influência pode moldar o futuro.'
      ],
      buttonText: 'Desenvolva Sua Influência: Saiba Mais',
      buttonLink: '/cursos/diplomacia-civil' // Link para landing page específica
    },
    {
      id: 'lider-global',
      title: 'Curso de Líder Global',
      subtitle: 'Desenvolva seu potencial máximo para liderar com inteligência, propósito e impacto em escala mundial.',
      image: '/images/cursos/lider-global.jpg',
      imageAlt: 'Curso de Líder Global CTMA',
      features: [
        'Inteligência Essencial: Capacite-se em inteligência emocional e espiritual para decisões mais assertivas e relacionamentos mais profundos.',
        'Estratégias de Alto Nível: Aprenda a formular e executar estratégias visionárias que transformam equipes e comunidades, com foco em resultados globais.',
        'Comunicação Intercultural: Domine a inteligência intercultural para atuar com eficácia, respeito e sensibilidade em diversos contextos culturais, construindo pontes e não barreiras.',
        'Liderança Transformadora: Posicione-se como um líder que inspira, mobiliza e gera um legado duradouro, expandindo o Reino de Deus com excelência.'
      ],
      buttonText: 'Torne-se um Líder Global: Saiba Mais',
      buttonLink: '/cursos/lider-global' // Link para landing page específica
    },
    {
      id: 'monitor-internacional',
      title: 'Curso de Monitor Internacional',
      subtitle: 'Capacite-se para formar novos líderes e expandir o impacto da CTMA em sua região.',
      image: '/images/cursos/monitor-internacional.jpg',
      imageAlt: 'Curso de Monitor Internacional CTMA',
      features: [
        'Forme Novos Líderes: Seja um multiplicador dos cursos da CTMA, capacitando capelães e diplomatas em sua comunidade.',
        'Desenvolva Habilidades de Ensino: Aprenda a aplicar a metodologia CTMA em cursos presenciais e online, com apoio e recursos da organização.',
        'Expanda sua Influência: Torne-se um representante da CTMA em sua região, impactando vidas e comunidades.',
        'Empreenda com Propósito: Gere receita ao formar novos líderes, com um modelo de parceria que recompensa seu trabalho.'
      ],
      buttonText: 'Torne-se um Monitor Internacional: Saiba Mais',
      buttonLink: '/cursos/monitor-internacional' // Link para landing page específica
    }
  ];

  // Dados para Cursos de Capelania Especializada
  const capelaniasEspecializadas = [
    { titulo: "Capelania Hospitalar", descricao: "Leve conforto e esperança onde a dor é mais sentida." },
    { titulo: "Capelania Prisional", descricao: "Transforme vidas por trás das grades." },
    { titulo: "Capelania em Catástrofes", descricao: "Seja o alento em momentos de maior desespero." },
    { titulo: "Capelania Familiar", descricao: "Fortaleça lares e restaure relacionamentos." },
    { titulo: "Capelania Educacional", descricao: "Molde mentes e corações nas novas gerações." },
    { titulo: "Capelania para Idosos", descricao: "Acolha e valorize a sabedoria da terceira idade." },
    { titulo: "Capelania Infantil", descricao: "Leve alegria e esperança aos pequenos." }
  ];

  // Interface para o tipo de depoimento
  interface Depoimento {
    quote: string;
    author: string;
    image?: string;
    imageAlt?: string;
  }

  // Dados para Depoimentos da Cursos Page (conforme web.md)
  const depoimentosCursosPage: Depoimento[] = [
    {
      quote: "Antes da CTMA, eu me sentia perdida. Hoje, sirvo em abrigos e hospitais com autoridade, propósito e uma cobertura espiritual que nunca imaginei ter. Minha vida nunca mais foi a mesma.",
      author: "Maria Silva, Capelã CTMA – Massachusetts, EUA.",
      // image: "/images/testimonials/maria-silva.jpg", // Adicionar esta imagem se disponível
      // imageAlt: "Maria Silva - Capelã CTMA"
    },
    {
      quote: "O suporte que recebo mesmo após o curso é impressionante. Não sou apenas um aluno; faço parte de algo maior, uma família global de capelães que transforma o mundo. É uma honra!",
      author: "Pr. Anderson Nogueira, Capelão CTMA – Luanda, Angola."
      // Sem imagem especificada no web.md para este depoimento
    }
  ];

  // Dados para Jornada em 5 Passos
  const jornadaPassos = [
    { step: 1, title: "Escolha seu Curso", description: "Navegue pelas nossas opções e selecione o programa que alinha com seu chamado." },
    { step: 2, title: "Inscrição Rápida", description: "Preencha seus dados e garanta sua vaga de forma segura e prática." },
    { step: 3, title: "Acesso Exclusivo", description: "Receba seu login para nossa plataforma de ensino com todo o material." },
    { step: 4, title: "Aprenda e Conecte-se", description: "Participe das aulas (presenciais ou online) e interaja com mentores e colegas." },
    { step: 5, title: "Certificação e Missão", description: "Receba seu certificado e identidade oficial, integrando-se à nossa rede global de apoio e ação missionária." }
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
          </p>          <Link
            href="#cursos-inicio"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
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
                  {/* {Icon && ( // Exemplo de como usar ícone
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
            {/* Cards dos Cursos Principais */}
            {cursosPrincipais.map((curso) => (
              <div key={curso.id} className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex md:items-start md:gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    {/* Adicione a imagem real na pasta public/images/cursos/ */}
                    <Image
                      src={curso.image}
                      alt={curso.imageAlt}
                      width={400}
                      height={260}
                      className="rounded-lg object-cover w-full h-auto aspect-[400/260]"
                      onError={(e) => (e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgdmlld0JveD0iMCAwIDQwMCAyNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNjM2NhZDEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMxMDFiMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gZG8gQ3Vyc288L3RleHQ+PC9zdmc+')} // Fallback simples
                    />
                    <p className="text-xs text-ctma-cinza-ardosia mt-1 text-center md:text-left">Imagem: {curso.imageAlt}. Substitua por imagem real em {curso.image}</p>
                  </div>
                  <div className="md:flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-2">
                      {curso.title}
                    </h3>
                    <p className="text-ctma-cinza-ardosia mb-4">
                      {curso.subtitle}
                    </p>
                    <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside pl-1">
                      {curso.features.map((feature, index) => (
                        <li key={index}><span className="font-medium text-ctma-azul-marinho">{feature.split(':')[0]}:</span>{feature.split(':').slice(1).join(':')}</li>
                      ))}
                    </ul>
                    <Link
                      href={curso.buttonLink}
                      className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                    >
                      {curso.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Subseção Cursos de Capelania Especializada */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-4 text-center md:text-left">
                Cursos de Capelania Especializada
              </h3>
              <p className="text-ctma-cinza-ardosia mb-6 text-center md:text-left">
                Aprofunde seu impacto em áreas específicas e torne-se uma referência.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {capelaniasEspecializadas.map((especializacao, index) => (
                  <div key={index} className="p-4 border border-ctma-cinza-azulado-claro/50 rounded-lg bg-ctma-cinza-azulado-claro/20">
                    <h4 className="font-semibold text-ctma-azul-marinho mb-1">{especializacao.titulo}:</h4>
                    <p className="text-sm text-ctma-cinza-ardosia">{especializacao.descricao}</p>
                  </div>
                ))}
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
              Descubra como nossos ex-alunos estão transformando vidas ao redor do mundo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {depoimentosCursosPage.map((depoimento, index) => (
              <blockquote key={index} className="bg-ctma-cinza-azulado-claro/30 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {depoimento.image ? (
                    <div className="mb-4">
                      <Image
                        src={depoimento.image}
                        alt={depoimento.imageAlt || `Depoimento de ${depoimento.author.split(',')[0]}`}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                        onError={(e) => {
                          // Fallback para iniciais se a imagem falhar ao carregar
                          const initials = depoimento.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-20 h-20 bg-ctma-cinza-ardosia rounded-full flex items-center justify-center text-ctma-white text-2xl font-semibold">${initials}</div>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="mb-4 w-20 h-20 bg-ctma-azul-jeans text-ctma-white rounded-full flex items-center justify-center text-2xl font-semibold">
                      {depoimento.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <p className="text-lg italic text-ctma-cinza-ardosia mb-4">&ldquo;{depoimento.quote}&rdquo;</p>
                <footer className="text-sm font-semibold text-ctma-azul-marinho">{depoimento.author}</footer>
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
              href="#cursos-inicio"
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
          </p>          <Link
            href="#cursos-inicio"
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-lg text-xl font-semibold shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
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
            href="/contato"
            className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Fale com um Consultor CTMA Agora
          </Link>
        </div>
      </section>
    </>
  );
}