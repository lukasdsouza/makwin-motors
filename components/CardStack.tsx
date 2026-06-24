"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

/**
 * Pilha de cartas com as fotos da loja — a carta do topo vai para o fundo
 * sozinha (autoplay, pausa no hover) e também pode ser "jogada" arrastando.
 * prefers-reduced-motion → pilha estática.
 */
export default function CardStack({
  images,
  interval = 2800,
}: {
  images: string[];
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  const advance = () => setOrder((o) => [...o.slice(1), o[0]]);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(advance, interval);
    return () => clearInterval(id);
  }, [reduce, paused, interval]);

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[360px] [perspective:1400px] sm:max-w-[400px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* halo */}
      <div className="orb left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 bg-volt/20" />

      {order.map((imgIndex, pos) => {
        const isTop = pos === 0;
        const hidden = pos > 4;
        return (
          <motion.div
            key={imgIndex}
            className={`absolute inset-0 ${isTop && !reduce ? "cursor-grab active:cursor-grabbing" : ""}`}
            style={{ zIndex: images.length - pos }}
            animate={{
              x: pos * 18,
              y: pos * 12,
              rotate: pos * 3.5 - 3,
              scale: 1 - pos * 0.05,
              opacity: hidden ? 0 : 1 - pos * 0.06,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            drag={isTop && !reduce}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            onDragEnd={(_e, info) => {
              if (Math.abs(info.offset.x) > 90 || Math.abs(info.offset.y) > 90)
                advance();
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/12 bg-ink-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[imgIndex]}
                alt="Loja Makwin Motors na Barra da Tijuca"
                draggable={false}
                className="pointer-events-none h-full w-full select-none object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />
              {/* HUD corners */}
              <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-volt/70" />
              <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-volt/70" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-volt/70" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-volt/70" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
                <MapPin className="h-4 w-4 shrink-0 text-volt" />
                <span className="text-sm font-medium text-white/90">
                  Loja Makwin — Barra da Tijuca
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
