import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const adminEmail = process.env.ADMIN_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL;

// Helper function to create beautiful email templates
function createEmailTemplate(formType: string, formData: Record<string, unknown>): string {
  const fieldLabels: Record<string, string> = {
    name: 'Nome',
    email: 'E-mail',
    subject: 'Assunto',
    message: 'Mensagem',
    telefone: 'Telefone',
    phone: 'Telefone',
    curso: 'Curso',
    endereco: 'Endereço',
    address: 'Endereço',
    profissao: 'Profissão',
    experiencia: 'Experiência',
    motivacao: 'Motivação',
    disponibilidade: 'Disponibilidade'
  };

  const formatValue = (value: unknown): string => {
    if (typeof value === 'string') {
      return value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, '<br>');
    }
    return String(value);
  };

  const getFieldLabel = (key: string): string => {
    return fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
  };

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Submissão - ${formType}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">CTMA</h1>
          <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Chaplain Training Management Agency</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 15px 20px; margin-bottom: 30px;">
            <h2 style="margin: 0 0 5px; color: #1e40af; font-size: 18px;">Nova Submissão Recebida</h2>
            <p style="margin: 0; color: #64748b; font-size: 14px;">Formulário: <strong>${formType}</strong></p>
          </div>

          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #f8fafc; padding: 15px 20px; border-bottom: 1px solid #e2e8f0;">
              <h3 style="margin: 0; color: #374151; font-size: 16px;">Detalhes da Submissão</h3>
            </div>
            <div style="padding: 0;">
              ${Object.entries(formData).map(([key, value], index) => `
                <div style="padding: 15px 20px; ${index % 2 === 0 ? 'background-color: #f8fafc;' : 'background-color: #ffffff;'} border-bottom: 1px solid #f1f5f9;">
                  <div style="display: flex; align-items: flex-start;">
                    <div style="min-width: 120px; font-weight: 600; color: #374151; margin-right: 15px;">
                      ${getFieldLabel(key)}:
                    </div>
                    <div style="color: #4b5563; flex: 1; word-break: break-word;">
                      ${formatValue(value)}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;">
            <p style="margin: 0; color: #92400e; font-size: 14px; text-align: center;">
              <strong>⏰ Resposta Necessária:</strong> Procure responder em até 48 horas úteis para manter a qualidade do atendimento.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 10px; color: #64748b; font-size: 12px;">
            Este e-mail foi gerado automaticamente pelo sistema de formulários da CTMA
          </p>
          <p style="margin: 0; color: #64748b; font-size: 12px;">
            Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/New_York' })} (EST/EDT)
          </p>
        </div>
      </div>    </body>
    </html>
  `;
}

// Function to create confirmation email for the user
function createConfirmationEmailTemplate(formType: string, userName: string): string {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmação de Recebimento - CTMA</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">CTMA</h1>
          <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Chaplain Training Management Agency</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <div style="text-align: center; padding: 20px 0;">
            <div style="width: 60px; height: 60px; background-color: #10b981; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="color: white; font-size: 24px; font-weight: bold;">✓</span>
            </div>
            <h2 style="margin: 0 0 10px; color: #1e40af; font-size: 24px;">Recebemos seu contato!</h2>
            <p style="margin: 0; color: #64748b; font-size: 16px;">Obrigado por entrar em contato conosco, ${userName}.</p>
          </div>

          <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px; color: #1e40af; font-size: 18px;">Seu formulário foi enviado com sucesso</h3>
            <p style="margin: 0 0 15px; color: #4b5563;">
              Recebemos sua mensagem através do formulário "<strong>${formType}</strong>" e nossa equipe irá analisá-la cuidadosamente.
            </p>
            <p style="margin: 0; color: #4b5563;">
              <strong>Tempo de resposta:</strong> Procuramos responder a todos os contatos em até 48 horas úteis.
            </p>
          </div>

          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 30px 0;">
            <h3 style="margin: 0 0 15px; color: #374151; font-size: 16px;">Enquanto isso, você pode:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
              <li style="margin-bottom: 8px;">Conhecer mais sobre nossos <a href="https://ctma.org/cursos" style="color: #3b82f6; text-decoration: none;">cursos e programas de formação</a></li>
              <li style="margin-bottom: 8px;">Acessar nossa seção de <a href="https://ctma.org/faq" style="color: #3b82f6; text-decoration: none;">perguntas frequentes</a></li>
              <li style="margin-bottom: 8px;">Seguir nossas redes sociais para atualizações</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px 0;">
            <p style="margin: 0 0 15px; color: #64748b;">Precisa de ajuda imediata?</p>
            <p style="margin: 0; color: #4b5563; font-size: 14px;">
              📧 <a href="mailto:contato@ctma.org" style="color: #3b82f6; text-decoration: none;">contato@ctma.org</a><br>
              📞 <a href="tel:+16892763285" style="color: #3b82f6; text-decoration: none;">+1 689 276 3285</a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 10px; color: #64748b; font-size: 12px;">
            Atenciosamente,<br>
            <strong>Equipe CTMA</strong>
          </p>
          <p style="margin: 0; color: #9ca3af; font-size: 11px;">
            Este e-mail foi enviado automaticamente. Por favor, não responda a este endereço.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY || !adminEmail || !fromEmail) {
    console.error('Resend environment variables are not set.');
    return NextResponse.json(
      { error: 'Email configuration error. Please contact support.' },
      { status: 500 }
    );
  }

  // Initialize Resend only when needed
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { formData, formType } = await req.json();

    if (!formData || !formType) {
      return NextResponse.json(
        { error: 'Missing formData or formType' },
        { status: 400 }
      );
    }    // Use the beautiful email template
    const emailHtmlContent = createEmailTemplate(formType, formData);

    // Send notification email to admin
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `Nova Submissão de Formulário: ${formType}`,
      html: emailHtmlContent,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.', details: error.message },
        { status: 500 }
      );
    }

    // Send confirmation email to user if email is provided
    if (formData.email && typeof formData.email === 'string') {
      const userName = typeof formData.name === 'string' ? formData.name : 'Usuário';
      const confirmationHtml = createConfirmationEmailTemplate(formType, userName);
      
      try {
        await resend.emails.send({
          from: fromEmail,
          to: formData.email,
          subject: 'Confirmação de Recebimento - CTMA',
          html: confirmationHtml,
        });
      } catch (confirmationError) {
        // Log error but don't fail the main request
        console.warn('Failed to send confirmation email:', confirmationError);
      }
    }

    return NextResponse.json(
      { message: 'Form submitted successfully!', emailId: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error.', details: errorMessage },
      { status: 500 }
    );
  }
}
