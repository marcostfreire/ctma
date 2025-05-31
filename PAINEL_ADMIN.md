# Painel Administrativo CTMA

## Acesso ao Painel Administrativo

O painel administrativo foi implementado com duas formas de acesso:

### 1. Acesso Rápido via Dashboard do Usuário
- Faça login em sua conta
- Acesse `/dashboard` ou clique em "Minha Conta" no menu
- Na sidebar, clique em "Painel Admin" (ícone de engrenagem em vermelho)
- Você verá um resumo das principais estatísticas e ações administrativas

### 2. Painel Completo
- Acesse diretamente `/admin` 
- Ou clique no botão "Painel Completo" dentro do painel rápido
- Possui funcionalidades completas de administração

## Funcionalidades do Painel Rápido (Dashboard)

### Estatísticas Rápidas
- **Total de Usuários**: Número total de usuários cadastrados
- **Matrículas Ativas**: Número de matrículas em andamento
- **Receita Mensal**: Receita total do mês atual
- **Certificados Emitidos**: Total de certificados já emitidos

### Gestão de Usuários
- Ver todos os usuários cadastrados
- Usuários pendentes de aprovação (com contador)
- Relatório de atividade dos usuários

### Gestão de Cursos
- Ver todos os cursos disponíveis
- Matrículas recentes (com contador)
- Certificados pendentes de emissão (com contador)

### Atividade Recente
- Feed em tempo real das últimas atividades:
  - Novas matrículas
  - Certificados emitidos
  - Pagamentos processados
  - Novos usuários cadastrados

### Ações Rápidas
- **Painel Completo**: Acesso ao painel administrativo completo
- **Novo Curso**: Criação de novos cursos
- **Relatórios**: Geração de relatórios detalhados

## Restrições de Acesso

Atualmente, o painel está acessível a todos os usuários logados. Para restringir apenas ao email administrador:

### Como Restringir (Futuras Implementações)
1. **No Dashboard** (`src/app/dashboard/page.tsx`):
   - Adicionar verificação: `user?.email === 'admin@ctma.com'`
   - Só mostrar a aba "Painel Admin" se for o email autorizado

2. **No Painel Completo** (`src/app/admin/page.tsx`):
   - Já possui verificação de role de admin
   - Pode ser modificado para verificar email específico

### Exemplo de Implementação:
```tsx
// No dashboard
{user?.email === 'seu-email@admin.com' && (
  <button onClick={() => setActiveTab('admin')}>
    // Botão do painel admin
  </button>
)}
```

## Estrutura dos Arquivos

- `/src/app/dashboard/page.tsx` - Dashboard do usuário com painel rápido
- `/src/app/admin/page.tsx` - Painel administrativo completo
- `/src/contexts/AuthContext.tsx` - Context de autenticação

## Próximos Passos

1. **Restrição de Acesso**: Implementar verificação por email específico
2. **Funcionalidades Reais**: Conectar com banco de dados real
3. **Notificações**: Sistema de notificações para atividades importantes
4. **Logs de Auditoria**: Registro de todas as ações administrativas

## Observações

- O painel atual usa dados mockados para demonstração
- Design responsivo e moderno
- Interface intuitiva com cores distintivas (vermelho para admin)
- Fácil navegação entre painel rápido e completo

Para qualquer dúvida ou customização adicional, consulte os arquivos mencionados acima.
