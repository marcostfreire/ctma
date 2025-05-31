# 🚀 PASSO A PASSO - SUAS CHAVES STRIPE

## 1️⃣ **CRIAR CONTA STRIPE** (2 minutos)
- ✅ Já abri: https://dashboard.stripe.com/register
- Preencha: Nome, Email, Senha
- **NÃO PRECISA** colocar dados bancários (é só pra teste)

## 2️⃣ **PEGAR SUAS CHAVES** (1 minuto)
Após criar conta:
1. Vai aparecer um dashboard
2. Procure por "API Keys" ou "Developers"
3. Copie estas 2 chaves:
   - **Publishable key** (começa com `pk_test_...`)
   - **Secret key** (começa com `sk_test_...`)

## 3️⃣ **COLAR NO PROJETO** (30 segundos)
Substitua no arquivo `.env.local` que já preparei:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_SUA_CHAVE_AQUI
STRIPE_SECRET_KEY=sk_test_SUA_CHAVE_AQUI
```

## 4️⃣ **TESTAR** (1 minuto)
```bash
# Reiniciar o servidor
npm run dev

# Testar em: http://localhost:3001/doar
# Cartão teste: 4242 4242 4242 4242
```

## 5️⃣ **VERIFICAR FUNCIONAMENTO**
- No seu dashboard Stripe → "Payments"
- Deve aparecer o pagamento teste!

---

## 💡 **BENEFÍCIOS DE USAR SUAS CHAVES:**
- ✅ Você vê os pagamentos em tempo real
- ✅ Testa todas as funcionalidades  
- ✅ Comprova que o código funciona
- ✅ Pode mostrar pra cliente que está OK

**Pronto! Me avisa quando pegar as chaves que eu ajudo a configurar!**
