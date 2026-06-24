"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const videos = [
  "/arte_scooter/s1.mp4",
  "/arte_scooter/s2.mp4",
  "/arte_scooter/s3.mp4",
  "/arte_scooter/s4.mp4",
  "/arte_scooter/s5.mp4",
];

function MarqueeRow({
  items,
  direction,
  duration,
  active,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const track = [...items, ...items]; // 2 cópias para loop contínuo

  // Só decodifica/toca os vídeos quando a seção está visível (perf).
  useEffect(() => {
    const vids = wrap.current
      ? Array.from(wrap.current.querySelectorAll("video"))
      : [];
    vids.forEach((v) => {
      if (active) {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <div className="overflow-hidden" ref={wrap}>
      <motion.div
        className="flex w-max gap-3"
        animate={
          reduce || !active
            ? {}
            : { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="relative aspect-video w-[clamp(240px,26vw,330px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-card"
          >
            <video
              src={src}
              loop
              muted
              playsInline
              preload="none"
              className="h-full w-full object-cover object-center"
            />
            <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-volt/60" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-volt/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScooterVideos() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "200px 0px" });

  return (
    <section
      ref={sectionRef}
      id="em-acao"
      className="relative flex min-h-[86vh] items-center overflow-hidden border-y border-white/10 py-16"
    >
      <div className="orb left-[-8%] top-[30%] h-[400px] w-[400px] bg-cyber/16" />

      {/* 3 fileiras de vídeos preenchendo a seção (atrás do texto) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3">
        <MarqueeRow
          items={[videos[0], videos[1], videos[2]]}
          direction="right"
          duration={46}
          active={inView}
        />
        <MarqueeRow
          items={[videos[3], videos[4], videos[0]]}
          direction="left"
          duration={40}
          active={inView}
        />
        <MarqueeRow
          items={[videos[2], videos[3], videos[4]]}
          direction="right"
          duration={52}
          active={inView}
        />
      </div>

      {/* Degradê preto onde fica o texto, abrindo para os vídeos à direita */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,#05070a_0%,#05070a_24%,rgba(5,7,10,0.85)_46%,rgba(5,7,10,0)_82%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-ink/55 lg:hidden" />

      {/* Texto do lifestyle Makwin em primeiro plano */}
      <div className="container-x relative z-20">
        <div className="max-w-lg">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Lifestyle Makwin
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Mais que mobilidade, um{" "}
            <span className="gradient-text">estilo de vida</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-lg leading-relaxed text-white/75"
          >
            Andar de Makwin é atitude. É cortar o trânsito no silêncio, chegar
            com estilo e fazer parte de uma comunidade que move o Rio com energia
            limpa. Stay MAK, keep moving.
          </motion.p>

          <motion.a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="btn-volt mt-9"
          >
            Fazer parte
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
