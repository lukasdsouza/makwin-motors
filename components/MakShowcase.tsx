"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Bike, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const traits = [
  { icon: Eye, label: "Visor LED reativo" },
  { icon: Zap, label: "100% elétrico" },
  { icon: Bike, label: "Atitude urbana" },
];

export default function MakShowcase() {
  return (
    <section
      id="mak"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="orb right-[18%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 bg-volt/12" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <Zap className="h-3.5 w-3.5" />
            Mascote oficial
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Esse é o <span className="gradient-text">MAK</span>, o piloto
            elétrico da Makwin
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            O MAK é a cara da marca: capacete de visor LED, energia de sobra e a
            vibe de quem domina a cidade sobre duas rodas elétricas.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {traits.map((t) => (
              <li
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
              >
                <t.icon className="h-4 w-4 text-volt" />
                {t.label}
              </li>
            ))}
          </ul>

          <a href="#inicio" className="btn-volt mt-9">
            Ver os modelos
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/3d_model/mak-na-tank.png"
              alt="MAK pilotando uma scooter Tank da Makwin"
              className="relative z-10 mx-auto w-full max-w-[440px] [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_94%)]"
            />
          </motion.div>
        </Reveal>
      </div>

      <p className="container-x mt-4 text-center text-xs text-white/30">
        Siga o MAK em {site.instagram.handle}
      </p>
    </section>
  );
}
