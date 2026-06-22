import { differentials } from "@/lib/site";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import MakBackdrop from "./mak/MakBackdrop";

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-24 sm:py-28">
      <MakBackdrop
        pose="arms"
        opacity={0.24}
        parallax={80}
        imgClassName="-right-[3%] top-[6%] w-[30%] max-w-sm drop-shadow-[0_0_90px_rgba(22,245,163,0.85)]"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Por que a Makwin"
          title={
            <>
              Tudo o que importa para rodar{" "}
              <span className="gradient-text">com segurança</span>
            </>
          }
          subtitle="Da legislação à recarga, cada detalhe foi pensado para você se mover pela cidade sem complicação."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => {
            const Icon = iconMap[d.icon];
            return (
              <Reveal key={d.title} delay={i * 0.06}>
                <TiltCard className="group h-full" max={6}>
                  <article className="card h-full p-7 transition-all duration-300 hover:border-volt/30 hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt/10 text-volt ring-1 ring-volt/20 transition-colors group-hover:bg-volt group-hover:text-ink">
                      {Icon ? <Icon className="h-6 w-6" /> : null}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {d.desc}
                    </p>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
