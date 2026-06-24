"use client";

import { motion } from "framer-motion";
import { ShieldCheck, IdCard, FileCheck2 } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const selos = [
  { icon: ShieldCheck, title: "CONTRAN nº 996", desc: "Modelos autopropelidos dentro da lei." },
  { icon: IdCard, title: "Sem CNH", desc: "Você não precisa de habilitação." },
  { icon: FileCheck2, title: "Sem emplacamento", desc: "Nada de burocracia ou licenciamento." },
];

export default function Institucional() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-y border-white/10 bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="orb left-[20%] top-[10%] h-[340px] w-[340px] bg-volt/12" />
      <div className="container-x">
        <Reveal>
          <p className="mx-auto max-w-4xl text-center font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Mobilidade elétrica que cabe na sua rotina —{" "}
            <span className="gradient-text">livre, prática e sustentável</span>.
            Feita para o Rio se mover melhor.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Sobre a <span className="gradient-text">Makwin</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              A Makwin Motors nasceu para descomplicar a mobilidade urbana no Rio
              de Janeiro. Trabalhamos com scooters 100% elétricas, autopropelidas
              e dentro da lei — sem CNH e sem emplacamento — com loja física na
              Barra da Tijuca para você ver, sentir e testar antes de decidir.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Atendimento humano, entrega para todo o Rio e o modelo certo para o
              seu dia a dia: do trajeto curto ao corre do dia inteiro.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {selos.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="card flex items-center gap-4 p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-volt/10 text-volt ring-1 ring-volt/20">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{s.title}</h3>
                    <p className="text-sm text-white/55">{s.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="px-1 text-sm text-white/45">
                {site.address.line1} — {site.address.line2}.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
