"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import CardStack from "./CardStack";
import MagneticButton from "./MagneticButton";

// Fotos da loja (pasta fotos_loja) para a pilha de cartas.
const fotosLoja = [
  "/fotos_loja/IMG-20260622-WA0047.jpg",
  "/fotos_loja/IMG-20260622-WA0049.jpg",
  "/fotos_loja/IMG-20260622-WA0050.jpg",
  "/fotos_loja/IMG-20260622-WA0051.jpg",
];

export default function HeroInstitucional() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 lg:pt-32">
      <div className="orb left-[-12%] top-[0%] h-[440px] w-[440px] bg-volt/22" />
      <div className="orb right-[-6%] top-[20%] h-[380px] w-[380px] bg-cyber/18" />
      <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Texto institucional */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              {site.name} • {site.city}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[5.4rem]"
          >
            <span className="block">Stay</span>
            <span className="block gradient-text">Mak,</span>
            <span className="block">Keep</span>
            <span className="block text-transparent [-webkit-text-stroke:2px_#16f5a3]">
              Moving
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-white/75"
          >
            Mobilidade urbana elétrica feita para o Rio. Scooters sem CNH e sem
            emplacamento, com loja física na Barra da Tijuca — venha sentir a
            energia de quem nunca para.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-volt"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a Makwin
            </MagneticButton>
            <a href="#modelos" className="btn-ghost">
              Ver modelos
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Pilha de cartas com as fotos da loja */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CardStack images={fotosLoja} />
          <p className="mt-6 text-center text-xs text-white/35">
            Arraste a carta do topo • a loja por dentro
          </p>
        </motion.div>
      </div>
    </section>
  );
}
