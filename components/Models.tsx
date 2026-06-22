"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Battery,
  Gauge,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Maximize2,
} from "lucide-react";
import { models, site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import MakBackdrop from "./mak/MakBackdrop";

type Model = (typeof models)[number];

function whatsappFor(modelName: string) {
  const message = `Olá! Vim pelo site e gostaria de saber mais sobre a ${modelName}. Pode me passar valores e disponibilidade?`;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Carrossel de imagens com setas, indicadores e swipe (toque). */
function Carousel({
  images,
  alt,
  index,
  setIndex,
  fit = "cover",
}: {
  images: readonly string[];
  alt: string;
  index: number;
  setIndex: (i: number) => void;
  fit?: "cover" | "contain";
}) {
  const [touchX, setTouchX] = useState<number | null>(null);
  const go = (dir: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((index + dir + images.length) % images.length);
  };

  return (
    <div
      className="absolute inset-0"
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        setTouchX(null);
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — foto ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          draggable={false}
          className={`absolute inset-0 h-full w-full select-none transition-opacity duration-500 ${
            fit === "cover" ? "object-cover object-center" : "object-contain"
          } ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => go(-1, e)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 z-30 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/60 text-white/90 backdrop-blur transition hover:bg-ink/90 hover:text-volt"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => go(1, e)}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 z-30 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/60 text-white/90 backdrop-blur transition hover:bg-ink/90 hover:text-volt"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Ir para a foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-volt" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** Easter eggs do MAK interagindo com o card (ficam fora do recorte do card). */
const eggStyles: Record<string, string> = {
  hug: "pointer-events-none absolute -top-[52px] right-4 z-30 w-24 rotate-[8deg] drop-shadow-[0_14px_26px_rgba(0,0,0,0.5)]",
  peek: "pointer-events-none absolute -right-5 top-[38%] z-30 w-16 drop-shadow-[0_14px_26px_rgba(0,0,0,0.5)]",
};

function ModelCard({
  m,
  onOpen,
  egg,
}: {
  m: Model;
  onOpen: () => void;
  egg?: "hug" | "peek";
}) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative h-full">
      {egg === "hug" && (
        <img src="/mak/mak-hug.png" alt="" aria-hidden className={eggStyles.hug} />
      )}
      {egg === "peek" && (
        <img src="/mak/mak-peek.png" alt="" aria-hidden className={eggStyles.peek} />
      )}
      <TiltCard className="group h-full">
      <article
        className={`card relative flex h-full flex-col overflow-hidden transition-all duration-300 ${
          m.highlight ? "border-volt/40 shadow-glow" : "hover:border-white/20"
        }`}
      >
      <div
        className="relative aspect-[4/5] cursor-pointer overflow-hidden"
        onClick={onOpen}
      >
        <Carousel images={m.images} alt={`Makwin ${m.name}`} index={idx} setIndex={setIdx} />

        {/* Overlays decorativos — deixam o clique passar para abrir o modal */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="pointer-events-none absolute left-4 top-4 z-20">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
              m.highlight ? "bg-volt text-ink" : "bg-ink/60 text-white/85"
            }`}
          >
            {m.badge}
          </span>
        </div>
        <span className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-ink/60 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
          <Maximize2 className="h-3 w-3" />
          {m.category}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5">
          <h3 className="font-display text-2xl font-bold leading-tight">{m.name}</h3>
          <p className="mt-1 text-sm text-white/65">{m.tagline}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="grid grid-cols-3 gap-3 border-b border-white/10 pb-5">
          <Spec icon={<Zap className="h-4 w-4" />} value={m.power} label="Motor" />
          <Spec icon={<Battery className="h-4 w-4" />} value={m.range} label="Autonomia" />
          <Spec icon={<Gauge className="h-4 w-4" />} value={m.speed} label="Velocidade" />
        </div>

        <div className="mt-5 flex gap-2">
          <button onClick={onOpen} className="btn-ghost flex-1">
            Ver detalhes
          </button>
          <a
            href={whatsappFor(m.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar a ${m.name} no WhatsApp`}
            className={`btn ${m.highlight ? "bg-volt text-ink shadow-glow hover:bg-volt-400" : "border border-white/15 bg-white/5 text-white hover:border-volt/50"} !px-4`}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
      </article>
      </TiltCard>
    </div>
  );
}

function ModelModal({ m, onClose }: { m: Model; onClose: () => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="card relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden md:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-40 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink/70 text-white/90 backdrop-blur transition hover:bg-ink hover:text-volt"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[4/5] bg-ink-soft md:aspect-auto md:min-h-[480px]">
          <Carousel
            images={m.images}
            alt={`Makwin ${m.name}`}
            index={idx}
            setIndex={setIdx}
            fit="contain"
          />
        </div>

        <div className="flex max-h-[90vh] flex-col overflow-y-auto p-7">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                m.highlight ? "bg-volt text-ink" : "bg-white/10 text-white/70"
              }`}
            >
              {m.badge}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
              {m.category}
            </span>
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold">{m.name}</h3>
          <p className="mt-1.5 text-white/60">{m.tagline}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
            <Spec icon={<Zap className="h-4 w-4" />} value={m.power} label="Motor" />
            <Spec icon={<Battery className="h-4 w-4" />} value={m.range} label="Autonomia" />
            <Spec icon={<Gauge className="h-4 w-4" />} value={m.speed} label="Velocidade" />
          </div>

          <ul className="mt-6 space-y-3">
            {m.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={whatsappFor(m.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volt mt-7"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar a {m.name} no WhatsApp
          </a>
          <p className="mt-3 text-center text-[11px] text-white/40">
            Sem CNH e sem emplacamento (CONTRAN nº 996). Specs conforme o pôster
            oficial, sujeitas a alteração por lote.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Models() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="modelos" className="relative overflow-hidden py-24 sm:py-28">
      <div className="orb left-[40%] top-[10%] h-[300px] w-[300px] bg-volt/15" />
      <MakBackdrop
        pose="crouch"
        opacity={0.2}
        parallax={70}
        imgClassName="-left-[3%] top-[14%] w-[24%] max-w-[320px] drop-shadow-[0_0_80px_rgba(34,211,238,0.8)]"
      />
      <MakBackdrop
        pose="jump"
        flip
        opacity={0.18}
        parallax={-60}
        imgClassName="-right-[3%] bottom-[6%] w-[30%] max-w-md drop-shadow-[0_0_80px_rgba(22,245,163,0.7)]"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Modelos"
          title={
            <>
              A linha completa <span className="gradient-text">Makwin</span> para
              a sua rotina
            </>
          }
          subtitle="Scooters, choppers e quadriciclo elétrico — fotos reais dos nossos modelos. Deslize as fotos e clique para ver os detalhes de cada um."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 0.08}>
              <ModelCard
                m={m}
                onOpen={() => setActive(i)}
                egg={undefined}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Especificações conforme os pôsteres oficiais da loja, sujeitas a
          alteração por lote. Sem CNH e sem emplacamento (CONTRAN nº 996).
          Consulte a ficha técnica completa pelo WhatsApp.
        </p>
      </div>

      <AnimatePresence>
        {active !== null && (
          <ModelModal m={models[active]} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function Spec({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <span className="mx-auto mb-1.5 grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-volt">
        {icon}
      </span>
      <div className="font-display text-sm font-bold leading-tight">{value}</div>
      <div className="text-[11px] text-white/45">{label}</div>
    </div>
  );
}
