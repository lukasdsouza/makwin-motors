"use client";

import { Instagram, Heart, MessageCircle } from "lucide-react";
import { instagramPosts, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative overflow-hidden py-24 sm:py-28">
      <div className="orb left-[15%] top-[10%] h-[320px] w-[320px] bg-cyber/12" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Instagram"
          title={
            <>
              Acompanhe a Makwin no{" "}
              <span className="gradient-text">dia a dia</span>
            </>
          }
          subtitle={`Bastidores, entregas e novidades em ${site.instagram.handle}.`}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {instagramPosts.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.06}>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Post do Instagram da Makwin ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-5 bg-ink/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    <Heart className="h-5 w-5 fill-white" />
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    <MessageCircle className="h-5 w-5 fill-white" />
                  </span>
                </div>
                <Instagram className="absolute right-2 top-2 h-4 w-4 text-white/70" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volt"
          >
            <Instagram className="h-4 w-4" />
            Seguir {site.instagram.handle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
