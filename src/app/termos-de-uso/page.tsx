'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-blue-100">
              Última atualização: 28 de maio de 2025
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introdução e Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bem-vindo ao website da Colégio Teológico e Ministerial de Assuntos Internacionais (CTMA). 
                Estes Termos de Uso regem o acesso e utilização de todos os serviços, conteúdos e 
                funcionalidades disponibilizados através de nossa plataforma digital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ao acessar ou utilizar nosso website, você concorda em estar legalmente vinculado a estes 
                termos. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  Importante: Estes termos podem ser atualizados periodicamente. É sua responsabilidade 
                  revisar regularmente esta página para estar ciente de quaisquer alterações.
                </p>
              </div>
            </div>

            {/* Definições */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Definições</h2>
              <div className="space-y-4">
                <div>
                  <strong className="text-gray-800">&quot;CTMA&quot;</strong>
                  <span className="text-gray-700"> refere-se ao Colégio Teológico e Ministerial de Assuntos Internacionais, suas subsidiárias, afiliadas e representantes autorizados.</span>
                </div>
                <div>
                  <strong className="text-gray-800">&quot;Usuário&quot;</strong>
                  <span className="text-gray-700"> refere-se a qualquer pessoa física ou jurídica que acesse ou utilize nossos serviços.</span>
                </div>
                <div>
                  <strong className="text-gray-800">&quot;Serviços&quot;</strong>
                  <span className="text-gray-700"> incluem todos os programas educacionais, processos de credenciamento, materiais didáticos, plataformas digitais e suporte oferecidos pela CTMA.</span>
                </div>
                <div>
                  <strong className="text-gray-800">&quot;Credenciamento&quot;</strong>
                  <span className="text-gray-700"> refere-se ao processo de certificação profissional oferecido pela CTMA nas áreas de capelania, diplomacia civil e monitoramento internacional.</span>
                </div>
              </div>
            </div>

            {/* Serviços Oferecidos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Serviços Oferecidos</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Programas Educacionais</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Cursos de formação em Capelania Internacional</li>
                <li>Programas de Diplomacia Civil</li>
                <li>Treinamento para Monitores Internacionais</li>
                <li>Especializações em áreas específicas</li>
                <li>Workshops e seminários complementares</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Processo de Credenciamento</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Oferecemos processo completo de credenciamento profissional, incluindo avaliação de 
                documentos, testes de competência, validação internacional e emissão de certificação 
                reconhecida por organismos internacionais.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Plataforma Digital</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Disponibilizamos acesso a materiais didáticos online, portal do aluno, sistema de 
                acompanhamento acadêmico e ferramentas de comunicação com instrutores e colegas.
              </p>
            </div>

            {/* Obrigações do Usuário */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Obrigações e Responsabilidades do Usuário</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Uso Adequado</h3>
              <p className="text-gray-700 leading-relaxed mb-4">O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Utilizar os serviços apenas para fins legítimos e educacionais</li>
                <li>Fornecer informações verdadeiras, precisas e atualizadas durante o cadastro</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Respeitar os direitos de propriedade intelectual da CTMA e terceiros</li>
                <li>Não reproduzir, distribuir ou comercializar materiais protegidos sem autorização</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Condutas Proibidas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">É expressamente proibido:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Utilizar os serviços para atividades ilegais ou não autorizadas</li>
                <li>Interferir ou interromper o funcionamento dos sistemas</li>
                <li>Tentar acessar áreas restritas ou dados de outros usuários</li>
                <li>Enviar spam, vírus ou qualquer código malicioso</li>
                <li>Fazer declarações falsas sobre credenciamento ou afiliação com a CTMA</li>
              </ul>
            </div>

            {/* Propriedade Intelectual */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo o conteúdo disponibilizado pela CTMA, incluindo mas não limitado a textos, imagens, 
                vídeos, materiais didáticos, metodologias, currículos e marca, é protegido por direitos 
                autorais e outras leis de propriedade intelectual.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                O usuário recebe apenas uma licença limitada, não exclusiva e intransferível para 
                acessar e utilizar os materiais para fins educacionais pessoais, conforme autorizado 
                por seu programa de estudos.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <p className="text-amber-800 font-semibold">
                  Atenção: Qualquer uso não autorizado de nossos materiais constitui violação de 
                  direitos autorais e pode resultar em medidas legais.
                </p>
              </div>
            </div>

            {/* Política de Pagamentos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Política de Pagamentos e Reembolsos</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.1 Pagamentos</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Todos os pagamentos devem ser realizados através dos métodos autorizados</li>
                <li>Preços podem ser alterados mediante aviso prévio de 30 dias</li>
                <li>Taxas adicionais podem aplicar-se a serviços especializados</li>
                <li>Pagamentos em atraso podem resultar em suspensão de acesso</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.2 Política de Reembolso</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Reembolsos podem ser solicitados em até 7 dias após a compra</li>
                <li>Cursos iniciados não são elegíveis para reembolso total</li>
                <li>Reembolsos parciais podem ser considerados em casos específicos</li>
                <li>Taxas de processamento podem ser deduzidas do valor reembolsado</li>
              </ul>
            </div>

            {/* Limitação de Responsabilidade */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CTMA fornece seus serviços &quot;como estão&quot; e não garante que serão ininterruptos, 
                livres de erros ou completamente seguros. Nossa responsabilidade é limitada ao 
                valor pago pelos serviços no período de 12 meses anteriores ao evento que deu origem à reclamação.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não seremos responsáveis por danos indiretos, consequenciais, especiais ou punitivos, 
                incluindo perda de lucros, dados ou oportunidades de negócio.
              </p>
            </div>

            {/* Privacidade e Proteção de Dados */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O tratamento de dados pessoais pela CTMA é regido por nossa Política de Privacidade, 
                que constitui parte integrante destes Termos de Uso. Coletamos, processamos e 
                armazenamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) 
                e regulamentações internacionais aplicáveis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os usuários têm direito a acessar, corrigir, excluir ou portar seus dados pessoais, 
                conforme previsto na legislação aplicável.
              </p>
            </div>

            {/* Suspensão e Cancelamento */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Suspensão e Cancelamento de Serviços</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CTMA reserva-se o direito de suspender ou cancelar o acesso de qualquer usuário 
                que viole estes termos, sem aviso prévio e sem direito a reembolso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usuários podem cancelar seus serviços a qualquer momento, sujeito aos termos de 
                reembolso aplicáveis. O cancelamento não exime o usuário das obrigações contraídas 
                até a data efetiva do cancelamento.
              </p>
            </div>

            {/* Lei Aplicável */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Lei Aplicável e Jurisdição</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa decorrente destes termos será submetida à jurisdição dos 
                tribunais brasileiros, sendo eleito o foro da cidade de São Paulo como competente 
                para dirimir qualquer controvérsia.
              </p>
            </div>

            {/* Disposições Gerais */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Disposições Gerais</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">11.1 Alterações</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CTMA pode modificar estes termos a qualquer momento. As alterações entrarão em 
                vigor imediatamente após sua publicação no website. O uso continuado dos serviços 
                após as alterações constitui aceitação dos novos termos.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">11.2 Divisibilidade</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se qualquer disposição destes termos for considerada inválida ou inexequível, 
                as demais disposições permanecerão em pleno vigor e efeito.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">11.3 Acordo Integral</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estes Termos de Uso, juntamente com nossa Política de Privacidade, constituem 
                o acordo integral entre as partes, substituindo todos os acordos anteriores 
                relacionados ao objeto destes termos.
              </p>
            </div>

            {/* Contato */}
            <div className="mb-12 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Informações de Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para questões relacionadas a estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>E-mail:</strong> juridico@ctma.com.br</p>
                <p><strong>Telefone:</strong> +55 (11) 3456-7890</p>
                <p><strong>Endereço:</strong> Rua das Acácias, 123 - São Paulo, SP - CEP: 01234-567</p>
                <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 9h às 18h</p>
              </div>
            </div>

            {/* Data de vigência */}
            <div className="text-center py-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Última atualização:</strong> 28 de maio de 2025<br/>
                <strong>Vigência:</strong> Estes termos estão em vigor desde 28 de maio de 2025
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
