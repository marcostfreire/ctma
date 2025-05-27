import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossos Cursos - CTMA',
  description: 'Explore os cursos de Capelania, Diplomacia Civil, Liderança Global e mais, oferecidos pela CTMA. Capacite-se para um impacto global.',
};

export default function CursosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 md:py-32 bg-ctma-azul-marinho text-ctma-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Seu Chamado te Espera: <span className="block sm:inline">Torne-se um Capelão CTMA e Sirva o Mundo com Propósito</span>
          </h1>
          <p className="text-lg sm:text-xl text-ctma-cinza-azulado-claro max-w-3xl mx-auto mb-10">
            Na CTMA, você é preparado para ir além: para acolher, consolar e ser um farol de esperança em momentos de crise, representando o amor de Deus com excelência. Receba certificação internacional, suporte contínuo e reconhecimento global (EUA e mais de 20 países).
          </p>
          <Link
            href="#primeiro-curso"
            className="inline-block bg-ctma-accent-red text-ctma-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Quero Atender ao Chamado: Comece Aqui
          </Link>
        </div>
      </section>

      {/* Por Que a CTMA Section */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xl text-ctma-azul-marinho leading-relaxed italic max-w-3xl mx-auto">
              Você não apenas aprende; você se torna parte de algo maior. Na CTMA, sua jornada para servir é levada a sério.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {[
              { title: "Autoridade Internacional Inquestionável", description: "Sua certificação CTMA é reconhecida globalmente, com base nos Estados Unidos, abrindo portas para você atuar em diversos contextos." },
              { title: "Suporte e Mentoria Vitalícios", description: "Nossa comunidade é sua família. Tenha apoio contínuo, acesso a missões exclusivas e recursos valiosos mesmo após a formação." },
              { title: "Identidade Oficial e Diplomática Cristã", description: "Receba sua credencial que te posiciona como um agente de compaixão e honra, representando o Reino de Deus." },
              { title: "Campo de Atuação Ilimitado", description: "Prepare-se para fazer a diferença em hospitais, abrigos, prisões, emergências, escolas, instituições públicas e onde a necessidade clamar." },
              { title: "Comunidade Global de Capelães", description: "Faça parte de uma rede vibrante de profissionais atuantes em todos os continentes. Conecte-se, colabore e cresça ao lado de quem compartilha do seu propósito." },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div>
                  <h3 className="text-lg font-semibold text-ctma-azul-marinho mb-1">{item.title}</h3>
                  <p className="text-ctma-cinza-ardosia text-sm leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <blockquote className="mt-12 pt-8 border-t border-ctma-cinza-azulado-claro text-center">
            <p className="text-xl italic text-ctma-azul-marinho font-medium max-w-2xl mx-auto">
              &ldquo;Na CTMA, você não faz apenas um curso. Você assume um chamado sagrado, entra para uma missão global e se torna um instrumento de transformação para milhares de vidas no mundo todo.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Nossos Caminhos para o Serviço */}
      <section id="primeiro-curso" className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro scroll-mt-20">
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
            {/* Curso de Capelania Internacional */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Capelania Internacional – Presencial e Online
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Torne-se um verdadeiro embaixador da fé e da compaixão.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside">
                    <li><span className="font-medium text-ctma-azul-marinho">Imersão Total:</span> Mais de 40 horas de conteúdo prático e profundamente espiritual.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Recursos Completos:</span> Manual abrangente, aulas gravadas para revisão ilimitada e acesso vitalício à plataforma.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Aulas ao Vivo com Líderes Mundiais:</span> Aprenda e interaja com os maiores nomes da capelania internacional.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Certificação Global:</span> Credencial válida nos EUA e em nossos países parceiros.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Integração Imediata:</span> Seja incluído no nosso banco exclusivo de capelães ativos da CTMA, pronto para atuar.</li>
                  </ul>
                  <Link
                    href="/cursos/capelania-internacional/inscricao"
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Quero Ser um Capelão Internacional: Inscreva-se Agora
                  </Link>
                </div>
              </div>
            </div>

            {/* Curso de Diplomacia Civil Cristã */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Diplomacia Civil Cristã
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Posicione-se como um líder de influência cristã em ambientes estratégicos.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside">
                    <li><span className="font-medium text-ctma-azul-marinho">Habilidades de Elite:</span> Desenvolva sua inteligência emocional e aprenda a comunicação diplomática para representar a fé com sabedoria e graça.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Acesso Exclusivo:</span> Participe de fóruns internacionais e eventos especiais, ampliando sua rede de contatos e oportunidades.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Seja a Voz da Fé:</span> Prepare-se para atuar em ambientes de alto impacto, onde sua influência pode moldar o futuro.</li>
                  </ul>
                  <Link
                    href="/cursos/diplomacia-civil/inscricao"
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Desenvolva Sua Influência: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Curso de Líder Global */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Líder Global
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Desenvolva seu potencial máximo para liderar com inteligência, propósito e impacto em escala mundial.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside">
                    <li><span className="font-medium text-ctma-azul-marinho">Inteligência Essencial:</span> Capacite-se em inteligência emocional e espiritual para decisões mais assertivas e relacionamentos mais profundos.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Estratégias de Alto Nível:</span> Aprenda a formular e executar estratégias visionárias que transformam equipes e comunidades, com foco em resultados globais.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Comunicação Intercultural:</span> Domine a inteligência intercultural para atuar com eficácia, respeito e sensibilidade em diversos contextos culturais, construindo pontes e não barreiras.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Liderança Transformadora:</span> Posicione-se como um líder que inspira, mobiliza e gera um legado duradouro, expandindo o Reino de Deus com excelência.</li>
                  </ul>
                  <Link
                    href="/cursos/lider-global/inscricao"
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Torne-se um Líder Global: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Curso de Monitor Internacional */}
            <div className="bg-ctma-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ctma-azul-jeans mb-3">
                    Curso de Monitor Internacional
                  </h3>
                  <p className="text-ctma-cinza-ardosia mb-4">
                    Capacite-se para formar novos líderes e expandir o impacto da CTMA em sua região.
                  </p>
                  <ul className="space-y-2 text-sm text-ctma-cinza-ardosia mb-6 list-disc list-inside">
                    <li><span className="font-medium text-ctma-azul-marinho">Forme Novos Líderes:</span> Seja um multiplicador dos cursos da CTMA, capacitando capelães e diplomatas em sua comunidade.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Desenvolva Habilidades de Ensino:</span> Aprenda a aplicar a metodologia CTMA em cursos presenciais e online, com apoio e recursos da organização.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Expanda sua Influência:</span> Torne-se um representante da CTMA em sua região, impactando vidas e comunidades.</li>
                    <li><span className="font-medium text-ctma-azul-marinho">Empreenda com Propósito:</span> Gere receita ao formar novos líderes, com um modelo de parceria que recompensa seu trabalho.</li>
                  </ul>
                  <Link
                    href="/cursos/monitor-internacional/inscricao"
                    className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Torne-se um Monitor Internacional: Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Cursos de Capelania Especializada */}
            <div className="bg-gradient-to-r from-ctma-azul-jeans to-ctma-azul-marinho p-6 sm:p-8 rounded-xl shadow-xl text-ctma-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Cursos de Capelania Especializada
                </h3>
                <p className="text-lg text-ctma-cinza-azulado-claro">
                  Encontre seu campo específico de atuação e especialize-se para um impacto ainda maior.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Capelania Hospitalar",
                    description: "Especialize-se em cuidado espiritual em ambiente médico, oferecendo consolo e esperança em momentos críticos."
                  },
                  {
                    title: "Capelania Militar",
                    description: "Prepare-se para servir as forças armadas, fornecendo apoio espiritual e emocional aos que defendem a nação."
                  },
                  {
                    title: "Capelania Prisional",
                    description: "Torne-se agente de transformação no sistema penitenciário, levando esperança e possibilidade de renovação."
                  },
                  {
                    title: "Capelania Escolar",
                    description: "Atue no ambiente educacional, oferecendo suporte aos estudantes, educadores e famílias."
                  },
                  {
                    title: "Capelania de Emergência",
                    description: "Capacite-se para atuar em situações de crise e desastres, sendo luz em momentos de escuridão."
                  },
                  {
                    title: "Capelania Corporativa",
                    description: "Leve apoio espiritual ao ambiente empresarial, promovendo bem-estar e valores éticos no trabalho."
                  }
                ].map((curso, index) => (
                  <div key={index} className="bg-ctma-white/10 backdrop-blur-sm p-4 rounded-lg border border-ctma-white/20">
                    <h4 className="text-lg font-semibold mb-2">{curso.title}</h4>
                    <p className="text-sm text-ctma-cinza-azulado-claro leading-relaxed">{curso.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  href="/cursos/especializados"
                  className="inline-block bg-ctma-accent-red text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Explore Todas as Especializações
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vozes que Inspiram: Depoimentos Reais */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Vozes que Inspiram: Depoimentos Reais
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia max-w-2xl mx-auto">
              Conheça histórias de transformação de nossos capelães formados pela CTMA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Capelão Hospitalar",
                testimonial: "A formação da CTMA me preparou para momentos únicos na vida das pessoas. Hoje, sou uma fonte de esperança em momentos difíceis.",
                location: "São Paulo, Brasil"
              },
              {
                name: "Maria Santos",
                role: "Capelã Militar",
                testimonial: "O reconhecimento internacional da CTMA abriu portas para servir em diferentes países. Minha missão transcendeu fronteiras.",
                location: "Lisboa, Portugal"
              },
              {
                name: "Carlos Rodriguez",
                role: "Monitor Internacional",
                testimonial: "Como monitor, multiplico o impacto da CTMA formando novos capelães. É gratificante ver a transformação em cada turma.",
                location: "Madrid, Espanha"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-ctma-cinza-azulado-claro p-6 rounded-xl">
                <div className="mb-4">
                  <p className="text-ctma-cinza-ardosia italic leading-relaxed">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
                <div className="border-t border-ctma-white pt-4">
                  <h4 className="font-semibold text-ctma-azul-marinho">{testimonial.name}</h4>
                  <p className="text-sm text-ctma-azul-jeans">{testimonial.role}</p>
                  <p className="text-xs text-ctma-cinza-ardosia">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sua Jornada em 5 Passos */}
      <section className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Sua Jornada em 5 Passos
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia max-w-2xl mx-auto">
              Do interesse inicial à certificação internacional, veja como é simples iniciar sua jornada na CTMA.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Escolha Seu Caminho",
                  description: "Explore nossos cursos e escolha o programa que mais se alinha com seu chamado e objetivos."
                },
                {
                  step: "2",
                  title: "Inscreva-se e Comece",
                  description: "Complete sua inscrição online e tenha acesso imediato à nossa plataforma de ensino."
                },
                {
                  step: "3",
                  title: "Aprenda e Cresça",
                  description: "Participe das aulas ao vivo, estude o material e desenvolva suas habilidades com mentores experientes."
                },
                {
                  step: "4",
                  title: "Pratique e Aplique",
                  description: "Coloque em prática o que aprendeu através de estágios supervisionados e projetos reais."
                },
                {
                  step: "5",
                  title: "Receba sua Certificação",
                  description: "Obtenha sua credencial internacional e junte-se à nossa rede global de capelães ativos."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-ctma-azul-jeans text-ctma-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ctma-azul-marinho mb-2">{item.title}</h3>
                    <p className="text-ctma-cinza-ardosia leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seu Chamado Espera CTA */}
      <section className="py-16 sm:py-24 bg-ctma-azul-marinho text-ctma-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Seu Chamado Espera por Você
          </h2>
          <p className="text-lg sm:text-xl text-ctma-cinza-azulado-claro max-w-3xl mx-auto mb-10">
            Este é o momento de dar o próximo passo. Centenas de pessoas ao redor do mundo precisam de alguém como você. 
            Não deixe para amanhã o que pode começar hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contato"
              className="inline-block bg-ctma-accent-red text-ctma-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#9D1A1A] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Quero Começar Agora
            </Link>
            <Link
              href="/contato"
              className="inline-block border-2 border-ctma-white text-ctma-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-ctma-white hover:text-ctma-azul-marinho transition-all duration-200 ease-in-out"
            >
              Fale com um Consultor
            </Link>
          </div>
        </div>
      </section>

      {/* Fale Conosco */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-4">
              Fale Conosco
            </h2>
            <p className="text-lg text-ctma-cinza-ardosia">
              Tem dúvidas sobre nossos cursos? Nossa equipe está pronta para ajudar você a encontrar o caminho ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-ctma-azul-marinho mb-2">E-mail</h3>
              <p className="text-ctma-cinza-ardosia">contato@ctma.org</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-ctma-azul-marinho mb-2">WhatsApp</h3>
              <p className="text-ctma-cinza-ardosia">+55 (11) 99999-9999</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ctma-azul-jeans/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-ctma-azul-marinho mb-2">Agendar Consulta</h3>
              <p className="text-ctma-cinza-ardosia">Marque uma conversa</p>
            </div>
          </div>

          <div className="bg-ctma-cinza-azulado-claro p-6 sm:p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-ctma-azul-marinho mb-4">
              Pronto para Transformar Vidas?
            </h3>
            <p className="text-ctma-cinza-ardosia mb-6">
              Agende uma conversa gratuita com nossa equipe e descubra como a CTMA pode preparar você para um ministério de impacto global.
            </p>
            <Link
              href="/agendamento"
              className="inline-block bg-ctma-azul-jeans text-ctma-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3E567B] transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Agendar Conversa Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
