"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { steps, site } from "@/lib/site";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import MakBackdrop from "./mak/MakBackdrop";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);

  // Decide se usa a versão pinada (desktop + sem reduced-motion)
  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 1024px)").matches &&
      !prefersReducedMotion();
    setEnhanced(ok);
  }, []);

  // Configura o pin + scroll horizontal
  useEffect(() => {
    if (!enhanced || !trackRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth + 120;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [enhanced]);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/10 bg-ink-soft/40 py-24 sm:py-28"
    >
      <MakBackdrop
        pose="pockets"
        opacity={0.2}
        parallax={50}
        imgClassName="right-[3%] top-[12%] w-[26%] max-w-xs drop-shadow-[0_0_80px_rgba(22,245,163,0.7)]"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Do primeiro contato à <span className="gradient-text">entrega</span>
            </>
          }
          subtitle="Um processo simples e seguro, com test-drive na loja física e entrega para todo o Rio."
        />
      </div>

      {enhanced ? (
        <div
          ref={trackRef}
          className="mt-16 flex items-stretch gap-8 px-[8vw] will-change-transform"
        >
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="card relative flex w-[68vw] max-w-[560px] shrink-0 flex-col justify-center p-10 sm:p-12"
            >
              <span className="pointer-events-none absolute right-6 top-2 font-display text-[120px] font-extrabold leading-none text-white/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-volt/30 bg-volt/10 font-display text-xl font-bold text-volt">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/65">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <ArrowRight className="mt-8 h-6 w-6 text-volt/60" />
              )}
            </article>
          ))}

          <div className="flex w-[60vw] max-w-[460px] shrink-0 flex-col justify-center p-10">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Pronto para <span className="gradient-text">começar</span>?
            </h3>
            <p className="mt-3 max-w-sm text-white/65">
              Em poucos minutos no WhatsApp a gente já te ajuda a escolher.
            </p>
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-volt mt-7 w-fit"
            >
              <MessageCircle className="h-4 w-4" />
              Começar agora
            </a>
          </div>
        </div>
      ) : (
        <div className="container-x">
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-volt/30 bg-volt/10 font-display text-lg font-bold text-volt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="hidden h-px flex-1 bg-gradient-to-r from-volt/40 to-transparent md:block" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-14 text-center">
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-volt"
            >
              <MessageCircle className="h-4 w-4" />
              Começar agora pelo WhatsApp
            </a>
          </Reveal>
        </div>
      )}
    </section>
  );
}
