'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-green-100">
              Última atualização: 28 de maio de 2025 | Vigência: LGPD Lei 13.709/2018
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introdução */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introdução e Compromisso com a Privacidade</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CTMA - Colégio Teológico e Ministerial de Assuntos Internacionais está comprometida 
                com a proteção da privacidade e dos dados pessoais de todos os usuários de nossos serviços. 
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos 
                suas informações pessoais.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossa política está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), 
                o Regulamento Geral de Proteção de Dados da União Europeia (GDPR) e outras legislações 
                internacionais de proteção de dados aplicáveis.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-800 font-semibold">
                  🔒 Compromisso: Seus dados pessoais são tratados com o mais alto nível de segurança 
                  e confidencialidade. Nunca vendemos, alugamos ou compartilhamos suas informações 
                  com terceiros para fins comerciais.
                </p>
              </div>
            </div>

            {/* Definições */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Definições Importantes</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-800">Dados Pessoais:</strong>
                  <span className="text-gray-700"> Qualquer informação relacionada a pessoa natural identificada ou identificável.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-800">Dados Sensíveis:</strong>
                  <span className="text-gray-700"> Informações sobre origem racial, convicções religiosas, opiniões políticas, saúde ou vida sexual.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-800">Titular dos Dados:</strong>
                  <span className="text-gray-700"> Pessoa natural a quem se referem os dados pessoais.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-800">Controlador:</strong>
                  <span className="text-gray-700"> A CTMA, responsável pelas decisões sobre o tratamento de dados pessoais.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-800">Tratamento:</strong>
                  <span className="text-gray-700"> Toda operação com dados pessoais: coleta, armazenamento, uso, compartilhamento ou eliminação.</span>
                </div>
              </div>
            </div>

            {/* Dados Coletados */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Dados Pessoais Coletados</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Dados de Identificação</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Nome completo e nome social (quando aplicável)</li>
                <li>Documentos de identificação (RG, CPF, passaporte)</li>
                <li>Data de nascimento e nacionalidade</li>
                <li>Fotografia para certificação</li>
                <li>Assinatura digital</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Dados de Contato</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Endereço de e-mail principal e secundário</li>
                <li>Números de telefone (fixo e móvel)</li>
                <li>Endereço residencial completo</li>
                <li>Endereço profissional (quando aplicável)</li>
                <li>Preferências de comunicação</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Dados Acadêmicos e Profissionais</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Histórico educacional e diplomas</li>
                <li>Certificações profissionais anteriores</li>
                <li>Experiência profissional relevante</li>
                <li>Cartas de recomendação</li>
                <li>Resultados de avaliações e testes</li>
                <li>Progresso acadêmico e notas</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.4 Dados Financeiros</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
                <li>Histórico de transações</li>
                <li>Dados bancários para reembolsos (quando aplicável)</li>
                <li>Status de pagamento e inadimplência</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.5 Dados Técnicos</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Endereço IP e localização geográfica</li>
                <li>Informações do dispositivo e navegador</li>
                <li>Cookies e tecnologias similares</li>
                <li>Logs de acesso e atividade na plataforma</li>
                <li>Preferências de configuração</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  ℹ️ Dados Sensíveis: Coletamos informações sobre crenças religiosas apenas quando 
                  relevante para programas específicos de capelania, sempre com consentimento 
                  explícito e para finalidades legítimas de formação.
                </p>
              </div>
            </div>

            {/* Finalidades */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Finalidades do Tratamento de Dados</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Execução de Serviços Educacionais</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Prestação de serviços de formação e credenciamento</li>
                <li>Avaliação de candidatos e estudantes</li>
                <li>Emissão de certificados e diplomas</li>
                <li>Comunicação acadêmica e pedagógica</li>
                <li>Suporte técnico e educacional</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Gestão Administrativa</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Processamento de inscrições e matrículas</li>
                <li>Gestão financeira e cobrança</li>
                <li>Controle de acesso à plataforma</li>
                <li>Manutenção de registros acadêmicos</li>
                <li>Atendimento ao cliente</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.3 Comunicação e Marketing</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Envio de informações sobre cursos e eventos</li>
                <li>Newsletter e conteúdo educacional</li>
                <li>Pesquisas de satisfação</li>
                <li>Marketing direto (com consentimento)</li>
                <li>Comunicações institucionais</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.4 Segurança e Compliance</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Prevenção de fraudes e atividades suspeitas</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
                <li>Auditoria e controle interno</li>
                <li>Resposta a processos legais</li>
                <li>Proteção de direitos e propriedade</li>
              </ul>
            </div>

            {/* Base Legal */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Base Legal para o Tratamento</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <strong className="text-green-800">Execução de Contrato (Art. 7º, V da LGPD):</strong>
                  <span className="text-gray-700"> Para prestação de serviços educacionais contratados.</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Consentimento (Art. 7º, I da LGPD):</strong>
                  <span className="text-gray-700"> Para comunicações de marketing e dados sensíveis.</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Legítimo Interesse (Art. 7º, IX da LGPD):</strong>
                  <span className="text-gray-700"> Para segurança, prevenção de fraudes e melhorias dos serviços.</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <strong className="text-orange-800">Cumprimento de Obrigação Legal (Art. 7º, II da LGPD):</strong>
                  <span className="text-gray-700"> Para atender exigências regulatórias e fiscais.</span>
                </div>
              </div>
            </div>

            {/* Compartilhamento */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Compartilhamento de Dados</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.1 Parceiros Autorizados</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compartilhamos dados apenas com parceiros essenciais para a prestação de nossos serviços:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Processadores de Pagamento:</strong> Para transações financeiras seguras</li>
                <li><strong>Plataformas Educacionais:</strong> Para hospedagem de conteúdo e LMS</li>
                <li><strong>Organizações Credenciadoras:</strong> Para validação internacional</li>
                <li><strong>Provedores de Cloud:</strong> Para armazenamento seguro de dados</li>
                <li><strong>Ferramentas de Comunicação:</strong> Para e-mail marketing e suporte</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.2 Transferências Internacionais</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alguns de nossos fornecedores podem processar dados fora do Brasil. Garantimos que 
                essas transferências atendem aos requisitos da LGPD, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Países com nível adequado de proteção reconhecido pela ANPD</li>
                <li>Cláusulas contratuais padrão para proteção de dados</li>
                <li>Certificações internacionais de segurança</li>
                <li>Consentimento específico quando necessário</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-800 font-semibold">
                  🚫 Nunca Compartilhamos: Não vendemos, alugamos ou compartilhamos dados pessoais 
                  para fins comerciais, publicitários ou de marketing de terceiros.
                </p>
              </div>
            </div>

            {/* Segurança */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Medidas de Segurança</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">7.1 Segurança Técnica</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Criptografia de dados em repouso</li>
                <li>Autenticação multifator para acesso administrativo</li>
                <li>Firewalls e sistemas de detecção de intrusão</li>
                <li>Backup regular e plano de recuperação de desastres</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">7.2 Segurança Organizacional</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Treinamento regular de funcionários sobre proteção de dados</li>
                <li>Política de acesso baseada no princípio do menor privilégio</li>
                <li>Contratos de confidencialidade com todos os funcionários</li>
                <li>Auditoria regular de segurança e conformidade</li>
                <li>Plano de resposta a incidentes de segurança</li>
              </ul>
            </div>

            {/* Retenção */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Retenção de Dados</h2>
              <div className="space-y-4">
                <div>
                  <strong className="text-gray-800">Dados Acadêmicos:</strong>
                  <span className="text-gray-700"> Mantidos permanentemente para fins de verificação de certificação.</span>
                </div>
                <div>
                  <strong className="text-gray-800">Dados Financeiros:</strong>
                  <span className="text-gray-700"> Mantidos por 5 anos conforme legislação fiscal.</span>
                </div>
                <div>
                  <strong className="text-gray-800">Dados de Marketing:</strong>
                  <span className="text-gray-700"> Mantidos até revogação do consentimento ou 2 anos de inatividade.</span>
                </div>
                <div>
                  <strong className="text-gray-800">Logs de Sistema:</strong>
                  <span className="text-gray-700"> Mantidos por 12 meses para fins de segurança.</span>
                </div>
              </div>
            </div>

            {/* Direitos do Titular */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Seus Direitos como Titular dos Dados</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📋 Acesso</h4>
                  <p className="text-sm text-gray-700">Obter informações sobre quais dados pessoais tratamos sobre você.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✏️ Correção</h4>
                  <p className="text-sm text-gray-700">Solicitar correção de dados incompletos, inexatos ou desatualizados.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🗑️ Exclusão</h4>
                  <p className="text-sm text-gray-700">Solicitar eliminação de dados desnecessários ou tratados incorretamente.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">📦 Portabilidade</h4>
                  <p className="text-sm text-gray-700">Receber seus dados em formato estruturado e interoperável.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">🚫 Oposição</h4>
                  <p className="text-sm text-gray-700">Opor-se ao tratamento realizado com base no legítimo interesse.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">⏸️ Revogação</h4>
                  <p className="text-sm text-gray-700">Revogar consentimento a qualquer momento.</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Como Exercer Seus Direitos</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail 
                <strong> privacidade@ctma.com.br</strong> ou pelo formulário de contato em nosso portal. 
                Responderemos sua solicitação em até 15 dias úteis.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Política de Cookies</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">10.1 Tipos de Cookies Utilizados</h3>
              <div className="space-y-3 mb-4">
                <div>
                  <strong className="text-gray-800">Cookies Necessários:</strong>
                  <span className="text-gray-700"> Essenciais para o funcionamento do site (autenticação, segurança).</span>
                </div>
                <div>
                  <strong className="text-gray-800">Cookies de Funcionalidade:</strong>
                  <span className="text-gray-700"> Melhoram a experiência do usuário (preferências, idioma).</span>
                </div>
                <div>
                  <strong className="text-gray-800">Cookies Analíticos:</strong>
                  <span className="text-gray-700"> Coletam informações sobre uso do site para melhorias.</span>
                </div>
                <div>
                  <strong className="text-gray-800">Cookies de Marketing:</strong>
                  <span className="text-gray-700"> Utilizados para personalização de anúncios (com consentimento).</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">10.2 Gerenciamento de Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você pode gerenciar suas preferências de cookies através das configurações do seu 
                navegador ou do nosso centro de preferências. Note que desabilitar certos cookies 
                pode afetar a funcionalidade do site.
              </p>
            </div>

            {/* Menores de Idade */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Proteção de Menores de Idade</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossos serviços são direcionados a maiores de 18 anos. Não coletamos intencionalmente 
                dados de menores de idade sem consentimento dos pais ou responsáveis legais. Se você 
                tem entre 13 e 18 anos, só pode utilizar nossos serviços com autorização de seus 
                responsáveis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para menores de 13 anos, o tratamento só é realizado com consentimento específico 
                dos pais ou responsáveis legais e em seu melhor interesse.
              </p>
            </div>

            {/* Mudanças na Política */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir 
                mudanças em nossas práticas, tecnologias ou requisitos legais. Notificaremos 
                sobre alterações significativas através de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>E-mail para usuários registrados</li>
                <li>Aviso em destaque em nosso website</li>
                <li>Notificação na plataforma de estudos</li>
                <li>Publicação nas redes sociais</li>
              </ul>
            </div>

            {/* Encarregado de Dados */}
            <div className="mb-12 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Encarregado de Proteção de Dados (DPO)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nosso Encarregado de Proteção de Dados é responsável por garantir o cumprimento 
                desta política e atender suas solicitações relacionadas à proteção de dados:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nome:</strong> Dr. Ricardo Silva</p>
                <p><strong>E-mail:</strong> dpo@ctma.com.br</p>
                <p><strong>Telefone:</strong> +55 (11) 3456-7890 (Ramal 105)</p>
                <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 9h às 17h</p>
              </div>
            </div>

            {/* Contato Geral */}
            <div className="mb-12 bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Contatos para Questões de Privacidade</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Para Exercer Direitos LGPD:</h3>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <p><strong>E-mail:</strong> direitos@ctma.com.br</p>
                    <p><strong>Formulário:</strong> portal.ctma.com.br/privacidade</p>
                    <p><strong>Telefone:</strong> +55 (11) 3456-7890</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Para Denúncias e Reclamações:</h3>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <p><strong>E-mail:</strong> compliance@ctma.com.br</p>
                    <p><strong>ANPD:</strong> gov.br/anpd</p>
                    <p><strong>Procon:</strong> procon.sp.gov.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data de vigência */}
            <div className="text-center py-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Última atualização:</strong> 28 de maio de 2025<br/>
                <strong>Vigência:</strong> Esta política está em vigor desde 28 de maio de 2025<br/>
                <strong>Versão:</strong> 2.1 | <strong>Conformidade:</strong> LGPD Lei 13.709/2018
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
