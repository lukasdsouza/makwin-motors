"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ROTATE = 42; // graus de rotateY nas laterais
const SCALE = 0.3; // quanto encolhe por unidade de distância
const TRANSLATE_Z = 130; // recuo em px

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  /** largura do slide (flex-basis). 1 card no mobile com peek lateral. */
  slideClass?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  ariaLabel?: string;
};

/**
 * Carrossel coverflow 3D (estilo referência do cliente): card central em
 * destaque, laterais com rotateY + escala menor recuando em perspectiva.
 * Arrastar/swipe, setas, dots, teclado e autoplay com pausa no hover.
 * prefers-reduced-motion → carrossel simples com snap, sem 3D.
 */
export default function Carousel3D<T>({
  items,
  renderItem,
  slideClass = "flex-[0_0_82%] sm:flex-[0_0_56%] lg:flex-[0_0_40%]",
  autoplay = false,
  autoplayDelay = 4000,
  ariaLabel = "Carrossel",
}: Props<T>) {
  const reduce = useReducedMotion();
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const hovering = useRef(false);

  const onSelect = useCallback(
    (e: EmblaCarouselType) => setSelected(e.selectedScrollSnap()),
    []
  );

  const tween = useCallback(
    (e: EmblaCarouselType) => {
      if (reduce) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const eng = e.internalEngine() as any;
      const progress = e.scrollProgress();
      const snapList = e.scrollSnapList();
      e.slideNodes().forEach((node, i) => {
        let diff = snapList[i] - progress;
        if (eng.options.loop) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          eng.slideLooper.loopPoints.forEach((lp: any) => {
            const t = lp.target();
            if (i === lp.index && t !== 0) {
              const s = Math.sign(t);
              if (s === -1) diff = snapList[i] - (1 + progress);
              if (s === 1) diff = snapList[i] + (1 - progress);
            }
          });
        }
        const d = Math.max(-1.5, Math.min(1.5, diff));
        const abs = Math.abs(d);
        const card = node.querySelector(
          "[data-c3d-card]"
        ) as HTMLElement | null;
        if (!card) return;
        card.style.transform = `perspective(1200px) rotateY(${
          d * ROTATE
        }deg) scale(${Math.max(0.62, 1 - abs * SCALE)}) translateZ(${
          -abs * TRANSLATE_Z
        }px)`;
        card.style.opacity = String(Math.max(0.25, 1 - abs * 0.5));
        card.style.zIndex = String(100 - Math.round(abs * 100));
      });
    },
    [reduce]
  );

  useEffect(() => {
    if (!embla) return;
    const reinit = (e: EmblaCarouselType) => {
      setSnaps(e.scrollSnapList());
      onSelect(e);
      tween(e);
    };
    reinit(embla);
    embla.on("select", onSelect);
    embla.on("scroll", tween);
    embla.on("reInit", reinit);
    return () => {
      embla.off("select", onSelect);
      embla.off("scroll", tween);
      embla.off("reInit", reinit);
    };
  }, [embla, onSelect, tween]);

  useEffect(() => {
    if (!embla || !autoplay || reduce) return;
    const id = setInterval(() => {
      if (!hovering.current && document.visibilityState === "visible")
        embla.scrollNext();
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [embla, autoplay, autoplayDelay, reduce]);

  // Fallback acessível: carrossel simples com snap (sem 3D)
  if (reduce) {
    return (
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        aria-label={ariaLabel}
      >
        {items.map((it, i) => (
          <div key={i} className={`snap-center ${slideClass}`}>
            {renderItem(it, i, i === 0)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(ev) => {
        if (ev.key === "ArrowLeft") embla?.scrollPrev();
        if (ev.key === "ArrowRight") embla?.scrollNext();
      }}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div className="overflow-hidden py-6" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((it, i) => (
            <div key={i} className={`relative min-w-0 px-3 ${slideClass}`}>
              <div data-c3d-card className="will-change-transform">
                {renderItem(it, i, i === selected)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => embla?.scrollPrev()}
        aria-label="Anterior"
        className="absolute left-1 top-1/2 z-[200] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur transition hover:border-volt/50 hover:text-volt sm:left-3"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        aria-label="Próximo"
        className="absolute right-1 top-1/2 z-[200] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur transition hover:border-volt/50 hover:text-volt sm:right-3"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selected ? "w-6 bg-volt" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
