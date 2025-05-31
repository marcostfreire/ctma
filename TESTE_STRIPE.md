# 🧪 INSTRUÇÕES PARA TESTAR O STRIPE - CTMA WEBSITE

## ✅ Configuração Concluída

As credenciais do Stripe foram configuradas no projeto:

### 🔑 Credenciais Configuradas:
- **Chave Pública**: `pk_test_51RQ1ubGUwtyp4lt2mCam7cJtfAPnk4f395eDeF2w3Sg12DtA2Rf8Ykb7R1PGNVMke2WBQYZ9bPbI3zygrYmAH9Ae00u0z1SvEt`
- **Chave Secreta**: `sk_test_51RQ1ubGUwtyp4lt22ec2faXxQbqL2naXHRGZL3QYDr95I4AXY027MuBujOoYgrXsWdEt2cIXDphbsTusFJY1DtNp00SmYuSdof`

### 🌐 Servidor de Desenvolvimento:
- **URL Local**: http://localhost:3001
- **Status**: ✅ Rodando

## 🎯 Páginas para Testar Pagamentos

### 1. 💰 Página de Doações
**URL**: http://localhost:3001/doar

**O que testar:**
- [ ] Selecionar valor de doação
- [ ] Preencher dados do doador
- [ ] Inserir cartão de teste
- [ ] Processar pagamento

### 2. 📚 Inscrição em Cursos
**URLs de Cursos:**
- http://localhost:3001/cursos/capelao-internacional
- http://localhost:3001/cursos/diplomata-civil
- http://localhost:3001/cursos/monitor-internacional
- http://localhost:3001/cursos/lider-global

**O que testar:**
- [ ] Navegar para página de curso
- [ ] Clicar em "Inscreva-se Agora"
- [ ] Preencher formulário de inscrição
- [ ] Processar pagamento do curso

## 💳 Cartões de Teste do Stripe

### Cartões que FUNCIONAM:
```
Número: 4242 4242 4242 4242
CVC: Qualquer 3 dígitos
Data: Qualquer data futura
```

```
Número: 5555 5555 5555 4444
CVC: Qualquer 3 dígitos  
Data: Qualquer data futura
```

### Cartões que FALHAM (para testar erros):
```
Número: 4000 0000 0000 0002
Resultado: Cartão recusado
```

```
Número: 4000 0000 0000 9995
Resultado: Fundos insuficientes
```

## 🧪 Cenários de Teste

### ✅ Teste 1: Doação Bem-sucedida
1. Acesse http://localhost:3001/doar
2. Selecione um valor (ex: R$ 50,00)
3. Preencha os dados do doador
4. Use cartão: `4242 4242 4242 4242`
5. Confirme o pagamento
6. ✅ Deve aparecer mensagem de sucesso

### ✅ Teste 2: Inscrição em Curso
1. Acesse http://localhost:3001/cursos/capelao-internacional
2. Clique em "Inscreva-se Agora"
3. Preencha o formulário
4. Use cartão: `4242 4242 4242 4242`
5. Confirme o pagamento
6. ✅ Deve processar a inscrição

### ❌ Teste 3: Cartão Recusado
1. Use qualquer fluxo de pagamento
2. Use cartão: `4000 0000 0000 0002`
3. ❌ Deve mostrar erro de cartão recusado

## 📊 Verificação no Dashboard Stripe

### Como verificar os pagamentos:
1. Acesse: https://dashboard.stripe.com/test/payments
2. Faça login com: `ctma.usa@gmail.com`
3. Senha: `ch\@p1ain`
4. Verifique se os pagamentos aparecem na lista

## 🔍 Logs e Debug

### Terminal do Servidor:
- Os logs aparecem no terminal onde o `npm run dev` está rodando
- Procure por erros relacionados ao Stripe

### Console do Browser:
- Abra Developer Tools (F12)
- Verifique a aba Console para erros JavaScript
- Verifique a aba Network para requisições API

## 🚨 Problemas Comuns

### 1. Erro "Stripe not loaded"
- ✅ **Solução**: Aguarde alguns segundos para o Stripe carregar

### 2. Erro "Invalid API Key"
- ✅ **Solução**: Verificar se as chaves estão corretas no .env.local

### 3. Pagamento não processa
- ✅ **Solução**: Verificar console do browser e logs do servidor

## 📞 Status Atual

- ✅ Credenciais configuradas
- ✅ Servidor rodando
- ✅ APIs funcionando
- ✅ Pronto para testes

**Próximo passo**: Testar os fluxos de pagamento usando as instruções acima!
