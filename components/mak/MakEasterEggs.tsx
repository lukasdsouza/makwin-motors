"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { makPoses } from "@/lib/mak";

/**
 * Easter eggs globais do MAK:
 * - "peek": espreita no rodapé quando o usuário para de rolar perto do topo.
 * - "drive-by": passa de scooter cruzando a tela uma vez, ao chegar no meio.
 * - Konami code: revela uma pose especial.
 * Tudo discreto, com pointer-events desativado e respeitando reduced-motion.
 */
export default function MakEasterEggs() {
  const reduce = useReducedMotion();
  const [peek, setPeek] = useState(false);
  const [drive, setDrive] = useState(false);
  const [konami, setKonami] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const droveRef = useRef(false);

  // Peek por inatividade + drive-by no meio da página
  useEffect(() => {
    const armIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      setPeek(false);
      idleTimer.current = setTimeout(() => {
        if (window.scrollY < 700) setPeek(true);
      }, 2600);
    };

    const onScroll = () => {
      armIdle();
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (!droveRef.current && p > 0.42 && p < 0.75) {
        droveRef.current = true;
        setDrive(true);
        setTimeout(() => setDrive(false), 4200);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    armIdle();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  // Konami code
  useEffect(() => {
    const seq = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      i = k === seq[i] ? i + 1 : k === seq[0] ? 1 : 0;
      if (i === seq.length) {
        i = 0;
        setKonami(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Peek no canto inferior esquerdo */}
      <AnimatePresence>
        {peek && (
          <motion.img
            key="peek"
            src={makPoses.peek}
            alt=""
            aria-hidden
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 19 }}
            className="pointer-events-none fixed bottom-10 left-0 z-40 hidden w-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] sm:block"
          />
        )}
      </AnimatePresence>

      {/* Drive-by: MAK passa de scooter */}
      <AnimatePresence>
        {drive && !reduce && (
          <motion.img
            key="drive"
            src={makPoses.ride}
            alt=""
            aria-hidden
            style={{ scaleX: -1 }}
            initial={{ x: "-30vw" }}
            animate={{ x: "115vw" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className="pointer-events-none fixed bottom-6 left-0 z-40 w-56 drop-shadow-[0_14px_30px_rgba(0,0,0,0.55)]"
          />
        )}
      </AnimatePresence>

      {/* Konami: pose especial */}
      <AnimatePresence>
        {konami && (
          <motion.div
            key="konami"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setKonami(false)}
            className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.img
              src={makPoses.wave}
              alt="MAK acenando"
              initial={{ scale: 0.5, rotate: -8, y: 40 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="w-56 drop-shadow-[0_20px_50px_rgba(22,245,163,0.4)] sm:w-72"
            />
            <p className="mt-6 font-display text-xl font-bold text-white">
              Você encontrou o <span className="gradient-text">MAK</span>! ⚡
            </p>
            <p className="mt-1 text-sm text-white/60">(toque para fechar)</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
