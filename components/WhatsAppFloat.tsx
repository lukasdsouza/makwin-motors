"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="wa"
          href={site.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Converse com a equipe no WhatsApp"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Caixinha de mensagem */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative hidden rounded-2xl border border-volt/30 bg-ink/90 px-3.5 py-2 text-xs font-semibold text-white shadow-card backdrop-blur sm:block"
          >
            Converse com a equipe
            <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-volt/30 bg-ink/90" />
          </motion.span>

          {/* Capacete do MAK com o ícone do WhatsApp no visor */}
          <div className="relative">
            <span className="absolute inset-0 -z-10 rounded-full bg-volt/30 blur-xl" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mak/mak-helmet.png"
                alt=""
                aria-hidden
                className="w-[88px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
              />
              {/* Ícone do WhatsApp aceso DENTRO do visor (no lugar dos olhos LED) */}
              <span className="absolute left-1/2 top-[39%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/50 blur-md" />
              <span className="absolute left-1/2 top-[39%] -translate-x-1/2 -translate-y-1/2 text-volt-400 drop-shadow-[0_0_7px_rgba(22,245,163,1)]">
                <WhatsAppGlyph className="h-7 w-7" />
              </span>
            </motion.div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
