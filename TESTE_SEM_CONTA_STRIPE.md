# 🚫 COMO TESTAR STRIPE SEM A CONTA DELA

## 🎯 **TESTE LOCAL - SEM PRECISAR DE LOGIN**

### ✅ **MÉTODO 1: Verificação de Interface**
```
1. Abra: http://localhost:3001/doar
2. Veja se carrega a página de doação
3. Selecione um valor (ex: R$ 50,00)
4. Preencha dados fake
5. Use cartão: 4242 4242 4242 4242
6. CVC: 123, Data: 12/26
7. Clique em "Doar"

RESULTADO:
✅ SE FUNCIONAR: Mostra página de sucesso/obrigado
❌ SE NÃO FUNCIONAR: Erro na tela ou não processa
```

### ✅ **MÉTODO 2: Console do Browser**
```
1. Abra F12 (Developer Tools)
2. Vá na aba "Console"
3. Faça o teste de pagamento
4. Procure por:
   - ✅ "Payment succeeded" = FUNCIONANDO
   - ❌ "Error:" = NÃO FUNCIONANDO
```

### ✅ **MÉTODO 3: Network Tab**
```
1. F12 → Network Tab
2. Faça o teste de pagamento
3. Procure por:
   - ✅ "/api/create-payment-intent" com status 200 = OK
   - ❌ Status 400/500 = ERRO
```

## 📋 **INSTRUÇÕES PARA ELA**

### **Como ela pode testar sozinha:**

```
PASSO 1: Acesse seu dashboard Stripe
- URL: https://dashboard.stripe.com/test/payments
- Faça login na SUA conta

PASSO 2: Vá em "Developers" → "API Keys"
- Copie a "Publishable key" (pk_test_...)
- Copie a "Secret key" (sk_test_...)

PASSO 3: Coloque no arquivo .env.local:
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_pk_test_aqui
STRIPE_SECRET_KEY=sua_chave_sk_test_aqui

PASSO 4: Teste o site
- Reinicie o servidor (npm run dev)
- Teste uma doação
- Veja os pagamentos no dashboard Stripe
```

## 🔧 **USANDO SUAS PRÓPRIAS CHAVES STRIPE**

### Para você testar agora:

1. **Crie conta gratuita**: https://dashboard.stripe.com/register
2. **Pegue suas chaves de teste**
3. **Substitua no .env.local**
4. **Teste o funcionamento**

## ✅ **SINAIS DE QUE ESTÁ FUNCIONANDO**

- [ ] Página de doação carrega
- [ ] Formulário de cartão aparece
- [ ] Cartão teste é aceito
- [ ] Vai para página de sucesso
- [ ] Não dá erro no console

## ❌ **SINAIS DE PROBLEMA**

- [ ] Página não carrega
- [ ] Formulário não aparece
- [ ] Erro "Stripe not loaded"
- [ ] Cartão não é aceito
- [ ] Erro no console do browser

## 🎯 **CONCLUSÃO**

**Para saber se funciona SEM a conta dela:**
1. Teste a interface (ela carrega?)
2. Console do browser (sem erros?)
3. Crie sua própria conta Stripe de teste

**O código está pronto, só precisa das chaves corretas!**
