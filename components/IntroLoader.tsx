"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Intro/Loading com o MAK — overlay full-screen na 1ª visita da sessão.
 * Renderiza já no primeiro paint (cobre o carregamento de fontes), some após
 * ~1.6s ou no "pular". sessionStorage evita repetir. Reduced-motion = fade curto.
 */
export default function IntroLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("mk_intro_seen")) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("mk_intro_seen", "1");
    const t = setTimeout(() => setShow(false), reduce ? 500 : 1700);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
        >
          <div className="orb left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 bg-volt/20" />

          <motion.img
            src="/mak/intro.png"
            alt="MAK"
            initial={{ y: reduce ? 0 : 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
            className="relative z-10 w-32 drop-shadow-[0_20px_50px_rgba(22,245,163,0.35)] sm:w-40"
          />

          <motion.img
            src="/brand/wordmark.png"
            alt="Makwin Motors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-6 h-9 w-auto"
          />

          <div className="relative z-10 mt-8 h-1 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: reduce ? 0.5 : 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-volt to-cyber"
            />
          </div>

          <button
            onClick={() => setShow(false)}
            className="absolute bottom-8 right-8 z-10 text-xs font-medium text-white/40 transition-colors hover:text-white"
          >
            pular →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
