"use client";

import { Star, MapPin, Quote } from "lucide-react";
import { clientes, testimonials, socialStats } from "@/lib/site";
import Carousel3D from "./Carousel3D";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ClientePhoto(src: string, i: number, isActive: boolean) {
  return (
    <div
      className={`overflow-hidden rounded-[24px] border bg-white/5 p-px transition-all duration-300 ${
        isActive ? "border-volt/50 shadow-glow" : "border-white/10"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[23px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`Cliente Makwin ${i + 1}`}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Cliente Makwin
        </span>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="clientes" className="relative overflow-hidden py-24 sm:py-28">
      <div className="orb right-[10%] top-[8%] h-[320px] w-[320px] bg-cyber/12" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Prova social"
          title={
            <>
              Quem anda de Makwin <span className="gradient-text">recomenda</span>
            </>
          }
          subtitle="Clientes reais rodando pelo Rio. Venha fazer parte da garagem elétrica da Barra da Tijuca."
        />

        {/* Contadores */}
        <Reveal className="mt-12">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter to={socialStats.delivered} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-white/55 sm:text-sm">
                scooters entregues
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 font-display text-3xl font-extrabold text-white sm:text-4xl">
                {socialStats.rating.toLocaleString("pt-BR")}
                <Star className="h-5 w-5 fill-volt text-volt" />
              </div>
              <div className="mt-1 text-xs text-white/55 sm:text-sm">
                nota média
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter to={socialStats.reviews} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-white/55 sm:text-sm">
                avaliações
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carrossel de fotos de clientes */}
        <div className="mt-14">
          <Carousel3D
            items={clientes}
            renderItem={ClientePhoto}
            autoplay
            ariaLabel="Fotos de clientes da Makwin"
          />
        </div>

        {/* Depoimentos */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card h-full p-6">
                <Quote className="h-6 w-6 text-volt/60" />
                <blockquote className="mt-3 text-sm leading-relaxed text-white/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold">
                    {t.name}
                  </span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-volt text-volt" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-4 py-2 text-sm font-medium text-volt-400">
            <MapPin className="h-4 w-4" />
            Loja física na Barra da Tijuca — venha tomar um café e testar
          </span>
        </Reveal>
      </div>
    </section>
  );
}
