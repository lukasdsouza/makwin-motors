# Makwin Motors — Mobilidade Urbana Elétrica ⚡

Recriação **completa e profissional** do site da [Makwin Motors](https://makwinmotors.com.br) —
loja de scooters elétricas (mobilidade urbana) na Barra da Tijuca, Rio de Janeiro.

Construído do zero com uma stack moderna, foco em performance, acessibilidade e
uma identidade visual premium (tema escuro "electric", animações suaves e
microinterações).

## ✨ Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4** — design system próprio (cores `volt`/`cyber`, tipografia Sora + Inter)
- **Framer Motion** — animações de entrada, scroll reveal e microinterações
- **lucide-react** — ícones
- Ilustração da scooter em **SVG vetorial original** (sem dependência de imagens externas)
- SEO pronto: Open Graph, metadata, `lang=pt-BR`, viewport e theme-color

## 🔌 Conexões (mesmas do site original)

Todas as "conexões" ficam centralizadas em **[`lib/site.ts`](./lib/site.ts)** —
para atualizar qualquer contato, edite só este arquivo:

| Canal      | Valor                                                |
| ---------- | ---------------------------------------------------- |
| WhatsApp   | `+55 21 97700-7816` (`wa.me/5521977007816`)          |
| Instagram  | [@makwin.motors](https://www.instagram.com/makwin.motors/) |
| Endereço   | Av. das Américas, 12.700 – Loja SS111, Barra da Tijuca – RJ |

> O e-mail (`contato@makwinmotors.com.br`) é um placeholder — ajuste em `lib/site.ts` se necessário.

## 🧱 Seções da página

Hero → Selos de confiança (CONTRAN 996, sem CNH, sem emplacamento) → Diferenciais
→ Modelos → Como funciona → FAQ → Localização (loja física + mapa) → CTA final →
Rodapé, com botão flutuante de WhatsApp.

## 🚀 Rodando localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build && npm run start
```

## ☁️ Deploy

Otimizado para a **[Vercel](https://vercel.com)**: basta importar o repositório.
Também funciona em Netlify ou qualquer host com suporte a Node 18+.

## 📝 Personalização rápida

- **Contatos / endereço / horários:** `lib/site.ts`
- **Modelos e specs:** array `models` em `lib/site.ts`
- **FAQ:** array `faqs` em `lib/site.ts`
- **Cores / fontes:** `tailwind.config.ts` e `app/globals.css`

---

Feito com ⚡ para a Makwin Motors.
