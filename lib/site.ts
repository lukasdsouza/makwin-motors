/**
 * Configuração central da Makwin Motors.
 *
 * Todas as "conexões" (WhatsApp, Instagram, e-mail, endereço) e o conteúdo
 * editorial do site ficam aqui. Para atualizar qualquer contato ou modelo,
 * basta editar este arquivo — nada de caçar valores espalhados pelo código.
 */

export const site = {
  name: "Makwin Motors",
  tagline: "Mobilidade Urbana Elétrica",
  shortDescription:
    "Scooters elétricas pensadas para o uso urbano real no Rio de Janeiro: praticidade, autonomia e o modelo ideal para a sua rotina.",
  url: "https://makwinmotors.com.br",
  city: "Rio de Janeiro – RJ",

  // ——— Conexões reais (mesmas do site original) ———
  whatsapp: {
    number: "5521977007816",
    display: "(21) 97700-7816",
    message:
      "Olá! Vim pelo site e gostaria de saber mais sobre as scooters elétricas",
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(
        this.message
      )}`;
    },
  },
  instagram: {
    handle: "@makwin.motors",
    url: "https://www.instagram.com/makwin.motors/",
  },

  address: {
    line1: "Av. das Américas, 12.700 – Loja SS111",
    line2: "Supermarket Barra Blue – Barra da Tijuca",
    line3: "Rio de Janeiro – RJ",
    mapsQuery:
      "Av. das Américas, 12700 - Barra da Tijuca, Rio de Janeiro - RJ",
  },

  hours: [
    { day: "Segunda a Sábado", time: "10h – 18h" },
    { day: "Domingo", time: "Sob agendamento" },
  ],
} as const;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Modelos", href: "#modelos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const stats = [
  { to: 1000, suffix: "W", label: "Potência de motor" },
  { static: "6–8h", label: "Carga completa" },
  { static: "Bivolt", label: "110v e 220v" },
  { to: 100, suffix: "%", label: "Bateria de lítio" },
] as const;

/**
 * Modelos reais da Makwin Motors. As imagens são os pôsteres autorais da
 * própria loja (pasta public/modelos). Para incluir um novo modelo, basta
 * adicionar a foto em public/modelos e mais um item aqui.
 */
export const models = [
  {
    name: "Apollo",
    slug: "apollo",
    image: "/modelos/apollo.jpg",
    images: ["/modelos/apollo-1.jpg", "/modelos/apollo-2.jpg"],
    accent: "#16f5a3",
    category: "Scooter",
    badge: "Mais autonomia",
    tagline: "Conforto urbano com baú e Bluetooth integrado",
    power: "1000W",
    range: "Até 60 km",
    speed: "Até 32 km/h",
    highlight: true,
    features: [
      "Bluetooth integrado",
      "Baú traseiro e bivolt",
      "Suporte de carga 160 kg",
    ],
  },
  {
    name: "Tank AG11 G2",
    slug: "tank",
    image: "/modelos/tank.jpg",
    images: ["/modelos/tank-1.jpg", "/modelos/tank-2.jpg", "/modelos/tank-3.jpg"],
    accent: "#22d3ee",
    category: "Scooter",
    badge: "Robusta",
    tagline: "Presença e estabilidade com som integrado",
    power: "1000W",
    range: "Até 60 km",
    speed: "Até 32 km/h",
    highlight: true,
    features: [
      "Sistema de som • Bluetooth • MP3",
      "Bateria 60V 32Ah",
      "Carenagem reforçada • 200 kg",
    ],
  },
  {
    name: "Ralf",
    slug: "ralf",
    image: "/modelos/ralf.jpg",
    images: ["/modelos/ralf-1.jpg", "/modelos/ralf-2.jpg", "/modelos/ralf-3.jpg"],
    accent: "#a78bfa",
    category: "Scooter",
    badge: "Conectada",
    tagline: "Esportiva e conectada para o dia a dia",
    power: "1000W",
    range: "Até 60 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Bluetooth integrado",
      "Baú traseiro",
      "Suporte de carga 160 kg",
    ],
  },
  {
    name: "Fyron",
    slug: "fyron",
    image: "/modelos/fyron.jpg",
    images: ["/modelos/fyron-1.jpg", "/modelos/fyron-2.jpg", "/modelos/fyron-3.jpg"],
    accent: "#3b82f6",
    category: "Scooter",
    badge: "Esportiva",
    tagline: "Visual agressivo e pegada esportiva",
    power: "1000W",
    range: "Até 50 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Design esportivo aerodinâmico",
      "Baú traseiro e bivolt",
      "Bateria de lítio 20Ah",
    ],
  },
  {
    name: "Dot",
    slug: "dot",
    image: "/modelos/dot.jpg",
    images: ["/modelos/dot-1.jpg", "/modelos/dot-2.jpg", "/modelos/dot-3.jpg"],
    accent: "#2dd4bf",
    category: "Scooter",
    badge: "Compacta",
    tagline: "Leve e ágil para os trajetos urbanos",
    power: "1000W",
    range: "Até 40 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Recarga em 6h • bivolt",
      "Suporte de carga 200 kg",
      "Bateria de lítio 20Ah",
    ],
  },
  {
    name: "X14",
    slug: "x14",
    image: "/modelos/x14.jpg",
    images: ["/modelos/x14-1.jpg", "/modelos/x14-2.jpg"],
    accent: "#f59e0b",
    category: "Chopper",
    badge: "Estilo chopper",
    tagline: "Pneu largo e atitude sobre rodas",
    power: "1000W",
    range: "Até 40 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Linha chopper com pneu largo",
      "Suporte de carga 200 kg",
      "Bateria de lítio 20Ah",
    ],
  },
  {
    name: "X13",
    slug: "x13",
    image: "/modelos/x13.jpg",
    images: ["/modelos/x13-1.jpg", "/modelos/x13-2.jpg", "/modelos/x13-3.jpg"],
    accent: "#ef4444",
    category: "Chopper",
    badge: "Clássica",
    tagline: "Chopper clássica para passear com estilo",
    power: "1000W",
    range: "Até 40 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Design chopper retrô",
      "Suporte de carga 200 kg",
      "Bateria de lítio 20Ah",
    ],
  },
  {
    name: "Bolin",
    slug: "bolin",
    image: "/modelos/bolin.jpg",
    images: ["/modelos/bolin-1.jpg", "/modelos/bolin-2.jpg", "/modelos/bolin-3.jpg"],
    accent: "#fb923c",
    category: "Scooter",
    badge: "Retrô",
    tagline: "Charme vintage com cesta e porta-objetos",
    power: "800W",
    range: "Até 40 km",
    speed: "Até 32 km/h",
    highlight: false,
    features: [
      "Cesta dianteira e bivolt",
      "Suporte de carga 150 kg",
      "Bateria de lítio 20Ah",
    ],
  },
  {
    name: "Quad Mini",
    slug: "quad-mini",
    image: "/modelos/quad-mini.jpg",
    images: ["/modelos/quad-mini-1.jpg", "/modelos/quad-mini-2.jpg", "/modelos/quad-mini-3.jpg"],
    accent: "#f43f5e",
    category: "Quadriciclo",
    badge: "Aventura",
    tagline: "Quadriciclo elétrico para a primeira aventura",
    power: "1000W",
    range: "Até 25 km",
    speed: "Até 30 km/h",
    highlight: false,
    features: [
      "Quadriciclo 4 rodas • freio a disco",
      "Bateria 36V 12Ah",
      "Recarga em 6–7h",
    ],
  },
] as const;

export const differentials = [
  {
    icon: "ShieldCheck",
    title: "Dentro da lei (CONTRAN 996)",
    desc: "Modelos autopropelidos enquadrados na Resolução CONTRAN nº 996 — sem exigência de CNH nem emplacamento.",
  },
  {
    icon: "BatteryCharging",
    title: "Bateria de lítio",
    desc: "Mais leve, mais eficiente e com maior durabilidade do que baterias convencionais. Carga em 6 a 8 horas.",
  },
  {
    icon: "Plug",
    title: "Recarga bivolt",
    desc: "Carregue em qualquer tomada residencial comum, 110v ou 220v. Sem instalação especial.",
  },
  {
    icon: "Gauge",
    title: "Motor de 1000W",
    desc: "Potência equilibrada para o trânsito urbano, com aceleração suave e segura.",
  },
  {
    icon: "MapPin",
    title: "Loja física no Rio",
    desc: "Conheça os modelos de perto na Barra da Tijuca: sente, teste e decida com segurança.",
  },
  {
    icon: "Truck",
    title: "Entrega para todo o Rio",
    desc: "Enviamos por transportadoras parceiras, com segurança e acompanhamento até a entrega.",
  },
] as const;

export const steps = [
  {
    title: "Escolha o modelo ideal",
    desc: "Conte sua rotina pelo WhatsApp e ajudamos a escolher a scooter perfeita para o seu uso.",
  },
  {
    title: "Faça o test-drive",
    desc: "Venha à loja física na Barra da Tijuca, sente, teste e sinta a condução antes de decidir.",
  },
  {
    title: "Receba em casa",
    desc: "Compre com segurança e receba em todo o Rio através das nossas transportadoras parceiras.",
  },
] as const;

export const faqs = [
  {
    q: "Preciso de CNH ou emplacamento?",
    a: "Não. Trabalhamos com modelos autopropelidos, que se enquadram na Resolução CONTRAN nº 996. Dentro dessas regras não há exigência de CNH nem de emplacamento.",
  },
  {
    q: "Quanto tempo leva para carregar a bateria?",
    a: "Em média, entre 6 e 8 horas para uma carga completa, dependendo do modelo e da bateria.",
  },
  {
    q: "Onde posso carregar a scooter?",
    a: "Em qualquer tomada residencial comum. As scooters são bivolt e podem ser carregadas tanto em 110v quanto em 220v.",
  },
  {
    q: "Que tipo de bateria vocês usam?",
    a: "Trabalhamos com baterias de lítio, que são mais leves, mais eficientes e têm maior durabilidade em comparação com baterias convencionais.",
  },
  {
    q: "Tem test-drive disponível?",
    a: "Sim. Temos test-drive na nossa loja física. Você pode ver de perto, sentar, testar e sentir a condução antes de decidir.",
  },
  {
    q: "Vocês entregam? Como funciona o frete?",
    a: "Enviamos para todo o Rio através de transportadoras parceiras, com segurança e acompanhamento até a entrega.",
  },
] as const;

/**
 * Monta um link do WhatsApp já com a mensagem citando o modelo.
 * Use em cards, modelos e no test-drive.
 */
export function whatsappFor(modelName: string, extra?: string) {
  const msg = `Olá! Vim pelo site e tenho interesse na ${modelName}.${
    extra ? " " + extra : ""
  } Pode me passar valores, condições e disponibilidade?`;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}

/** Números de prova social — ajuste conforme os dados reais da loja. */
export const socialStats = {
  delivered: 600,
  rating: 4.9,
  reviews: 90,
} as const;

/** Depoimentos — substitua pelos reais quando tiver. */
export const testimonials = [
  {
    name: "Rafael M.",
    text: "Comprei a Apollo e uso todo dia pra trabalhar na Barra. Economia absurda e o atendimento da loja foi nota 10.",
    rating: 5,
  },
  {
    name: "Juliana S.",
    text: "Fiz o test-drive na loja e me apaixonei. Sem CNH, sem burocracia e super fácil de carregar em casa.",
    rating: 5,
  },
  {
    name: "Carlos E.",
    text: "Entrega rápida e a scooter veio impecável. A Tank tem uma presença incrível na rua. Recomendo demais.",
    rating: 5,
  },
  {
    name: "Marina A.",
    text: "Atendimento humano de verdade, me ajudaram a escolher o modelo certo pra minha rotina. Virei cliente fã.",
    rating: 5,
  },
  {
    name: "Pedro H.",
    text: "Melhor custo-benefício que achei no Rio. A bateria de lítio dura o dia todo de corre. Top!",
    rating: 5,
  },
] as const;

/** Fotos reais de clientes (pasta public/clientes) para a prova social. */
export const clientes: string[] = [
  "/clientes/20251127_163039.jpg",
  "/clientes/20251228_122329.jpg",
  "/clientes/20260105_181121.jpg",
  "/clientes/20260108_170825.jpg",
  "/clientes/20260109_175705.jpg",
  "/clientes/20260113_163401.jpg",
  "/clientes/20260117_151217.jpg",
  "/clientes/20260206_194714.jpg",
  "/clientes/20260214_192046.jpg",
  "/clientes/20260223_164414.jpg",
  "/clientes/20260305_104700.jpg",
  "/clientes/20260311_105911.jpg",
  "/clientes/20260507_122148.jpg",
  "/clientes/20260509_173236.jpg",
  "/clientes/20260516_114059.jpg",
  "/clientes/20260530_115138.jpg",
  "/clientes/20260601_112253.jpg",
  "/clientes/20260604_144957.jpg",
  "/clientes/20260611_134533.jpg",
  "/clientes/20260613_183352.jpg",
  "/clientes/20260618_154323.jpg",
  "/clientes/20260618_190833.jpg",
  "/clientes/20260619_115831.jpg",
  "/clientes/lv_0_20251128123649.jpg",
];

/** Destaques do Instagram (grade da seção de feed). */
export const instagramPosts: string[] = [
  "/clientes/20260117_151217.jpg",
  "/clientes/20260619_115831.jpg",
  "/clientes/20260311_105911.jpg",
  "/clientes/20260530_115138.jpg",
  "/clientes/20260109_175705.jpg",
  "/clientes/20260618_190833.jpg",
];
