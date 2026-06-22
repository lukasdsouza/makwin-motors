"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { site, stats } from "@/lib/site";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import Counter from "./Counter";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      } as const;
      gsap.to(videoRef.current, { yPercent: 16, scale: 1.05, ease: "none", scrollTrigger: st });
      gsap.to(textRef.current, { yPercent: -10, opacity: 0.15, ease: "none", scrollTrigger: st });
      gsap.to(".hero-orb-1", { yPercent: 38, ease: "none", scrollTrigger: st });
      gsap.to(".hero-orb-2", { yPercent: -24, ease: "none", scrollTrigger: st });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative overflow-hidden pt-28 lg:pt-36"
    >
      <div className="orb hero-orb-1 left-[-10%] top-[-5%] h-[420px] w-[420px] bg-volt/30" />
      <div className="orb hero-orb-2 right-[-8%] top-[20%] h-[360px] w-[360px] bg-cyber/20" />
      <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <div ref={textRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              {site.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Liberdade elétrica para{" "}
            <span className="gradient-text">rodar pela cidade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Scooters elétricas pensadas para o uso urbano real no Rio de
            Janeiro. Sem CNH, sem emplacamento e com o modelo ideal para a sua
            rotina — praticidade, conforto e autonomia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            <a href="#modelos" className="btn-ghost">
              Ver modelos
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white">
                  {"static" in s ? (
                    s.static
                  ) : (
                    <Counter to={s.to} suffix={s.suffix} />
                  )}
                </dt>
                <dd className="mt-1 text-xs leading-tight text-white/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="orb left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 bg-volt/25" />
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Mascote MAK pilotando uma scooter elétrica Makwin"
            className="relative z-10 mx-auto w-full max-w-[540px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <source src="/3d_model/mak-rider.webm" type="video/webm" />
            <source src="/3d_model/mak-rider.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
