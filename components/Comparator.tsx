"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Trophy } from "lucide-react";
import { models, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MakBackdrop from "./mak/MakBackdrop";

const num = (s: string) => parseInt(s.replace(/\D/g, ""), 10) || 0;

const metrics = [
  { key: "power", label: "Potência", unit: "W", get: (m: (typeof models)[number]) => num(m.power) },
  { key: "range", label: "Autonomia", unit: "km", get: (m: (typeof models)[number]) => num(m.range) },
  { key: "speed", label: "Velocidade", unit: "km/h", get: (m: (typeof models)[number]) => num(m.speed) },
] as const;

export default function Comparator() {
  const [selected, setSelected] = useState<string[]>(["apollo", "tank", "x13"]);

  const maxes = useMemo(() => {
    const o: Record<string, number> = {};
    for (const mt of metrics) o[mt.key] = Math.max(...models.map(mt.get));
    return o;
  }, []);

  const chosen = models.filter((m) => selected.includes(m.slug));

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) {
        return prev.length > 1 ? prev.filter((s) => s !== slug) : prev;
      }
      if (prev.length >= 3) return [...prev.slice(1), slug];
      return [...prev, slug];
    });
  };

  return (
    <section id="comparar" className="relative overflow-hidden py-24 sm:py-28">
      <div className="orb right-[20%] top-[10%] h-[320px] w-[320px] bg-cyber/12" />
      <MakBackdrop
        pose="sit"
        opacity={0.2}
        parallax={70}
        imgClassName="-left-[4%] bottom-[4%] w-[30%] max-w-sm drop-shadow-[0_0_85px_rgba(34,211,238,0.75)]"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Comparador"
          title={
            <>
              Compare e escolha a sua <span className="gradient-text">favorita</span>
            </>
          }
          subtitle="Selecione até 3 modelos e veja lado a lado potência, autonomia e velocidade. O melhor de cada métrica ganha o troféu."
        />

        {/* Seleção de modelos */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {models.map((m) => {
              const on = selected.includes(m.slug);
              return (
                <button
                  key={m.slug}
                  onClick={() => toggle(m.slug)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    on
                      ? "border-volt/50 bg-volt/15 text-white"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white"
                  }`}
                  style={on ? { boxShadow: `0 0 0 1px ${m.accent}55` } : undefined}
                >
                  {on && (
                    <Check className="mr-1.5 inline h-3.5 w-3.5" style={{ color: m.accent }} />
                  )}
                  {m.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Barras comparativas */}
        <Reveal delay={0.1} className="mt-12">
          <div className="card mx-auto max-w-4xl space-y-8 p-7 sm:p-9">
            {metrics.map((mt) => {
              const best = Math.max(...chosen.map(mt.get));
              return (
                <div key={mt.key}>
                  <div className="mb-3 flex items-baseline justify-between">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/70">
                      {mt.label}
                    </h3>
                    <span className="text-xs text-white/40">{mt.unit}</span>
                  </div>
                  <div className="space-y-2.5">
                    {chosen.map((m) => {
                      const val = mt.get(m);
                      const isBest = val === best && chosen.length > 1;
                      return (
                        <div key={m.slug} className="flex items-center gap-3">
                          <span className="w-20 shrink-0 text-sm text-white/70 sm:w-24">
                            {m.name}
                          </span>
                          <div className="relative h-7 flex-1 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(val / maxes[mt.key]) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${m.accent}66, ${m.accent})`,
                              }}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-white">
                              {val}
                              {mt.unit}
                            </span>
                          </div>
                          <span className="w-6 shrink-0">
                            {isBest && (
                              <Trophy className="h-4 w-4 text-volt" aria-label="Melhor" />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-sm text-white/55">
                Gostou de alguma? Confira preço e disponibilidade agora.
              </p>
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-volt"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
