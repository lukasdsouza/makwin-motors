"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, Battery, Gauge, Sparkles } from "lucide-react";
import { models, site, whatsappFor } from "@/lib/site";
import Carousel3D from "./Carousel3D";
import MagneticButton from "./MagneticButton";

type Model = (typeof models)[number];

function HudCorners({ color }: { color: string }) {
  const base =
    "pointer-events-none absolute h-4 w-4 border-volt/70 transition-colors";
  return (
    <>
      <span className={`${base} left-2 top-2 border-l-2 border-t-2`} style={{ borderColor: color }} />
      <span className={`${base} right-2 top-2 border-r-2 border-t-2`} style={{ borderColor: color }} />
      <span className={`${base} bottom-2 left-2 border-b-2 border-l-2`} style={{ borderColor: color }} />
      <span className={`${base} bottom-2 right-2 border-b-2 border-r-2`} style={{ borderColor: color }} />
    </>
  );
}

function ScooterCard(m: Model, _i: number, isActive: boolean) {
  return (
    <article className="relative select-none">
      <div
        className="rounded-[26px] p-px transition-all duration-300"
        style={{
          background: `linear-gradient(140deg, ${m.accent}, rgba(34,211,238,0.35) 70%, ${m.accent}55)`,
          boxShadow: isActive ? `0 24px 70px -18px ${m.accent}` : "none",
        }}
      >
        <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-ink-card/70 backdrop-blur-xl">
          <HudCorners color={m.accent} />

          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={m.image}
              alt={`Makwin ${m.name}`}
              draggable={false}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-card via-ink-card/15 to-transparent" />
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-ink"
              style={{ background: m.accent }}
            >
              {m.badge}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-2xl font-bold leading-tight">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-white/65">{m.tagline}</p>
            </div>
          </div>

          <div className="p-5">
            <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-4 text-center">
              <Spec icon={<Zap className="h-4 w-4" />} v={m.power} l="Motor" c={m.accent} />
              <Spec icon={<Battery className="h-4 w-4" />} v={m.range} l="Autonomia" c={m.accent} />
              <Spec icon={<Gauge className="h-4 w-4" />} v={m.speed} l="Velocidade" c={m.accent} />
            </div>
            <a
              href={whatsappFor(m.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-volt mt-4 w-full"
              tabIndex={isActive ? 0 : -1}
            >
              <MessageCircle className="h-4 w-4" />
              Quero a {m.name}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Spec({
  icon,
  v,
  l,
  c,
}: {
  icon: React.ReactNode;
  v: string;
  l: string;
  c: string;
}) {
  return (
    <div>
      <span
        className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-lg bg-white/5"
        style={{ color: c }}
      >
        {icon}
      </span>
      <div className="font-display text-xs font-bold leading-tight">{v}</div>
      <div className="text-[10px] text-white/45">{l}</div>
    </div>
  );
}

export default function HeroScooters() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 lg:pt-32">
      <div className="orb left-[-10%] top-[-5%] h-[420px] w-[420px] bg-volt/25" />
      <div className="orb right-[-8%] top-[10%] h-[380px] w-[380px] bg-cyber/20" />
      <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container-x text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {site.tagline} • {site.city}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl"
        >
          A sua próxima scooter{" "}
          <span className="gradient-text">elétrica</span> está aqui
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70"
        >
          Sem CNH, sem emplacamento e com o modelo ideal para a sua rotina.
          Arraste e conheça a linha completa Makwin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex justify-center"
        >
          <MagneticButton
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volt"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com um especialista
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-10"
      >
        <Carousel3D
          items={models as unknown as Model[]}
          renderItem={ScooterCard}
          autoplay
          ariaLabel="Modelos de scooter Makwin"
        />
      </motion.div>
    </section>
  );
}
