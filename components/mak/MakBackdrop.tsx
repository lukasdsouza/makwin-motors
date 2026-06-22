"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { makPoses, type MakPose } from "@/lib/mak";

/**
 * MAK ao fundo da seção, atrás dos elementos e cards — silhueta grande com
 * leve brilho neon e parallax no scroll, para dar profundidade "cinematográfica".
 * Renderiza num container `absolute inset-0` que deve ficar ANTES do conteúdo
 * da seção (que então pinta por cima). Puramente decorativo.
 */
export default function MakBackdrop({
  pose,
  imgClassName,
  opacity = 0.16,
  parallax = 60,
  flip = false,
}: {
  pose: MakPose;
  imgClassName?: string;
  opacity?: number;
  parallax?: number;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={makPoses[pose]}
        alt=""
        style={{ y, opacity, scaleX: flip ? -1 : 1 }}
        className={`absolute select-none ${imgClassName ?? ""}`}
      />
    </div>
  );
}
