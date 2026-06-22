"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ilustração vetorial original de uma scooter elétrica — leve, sem
 * dependência de imagens externas e com um leve flutuar animado.
 */
export default function ScooterArt() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? {} : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-xl"
    >
      <svg
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-[0_40px_60px_rgba(22,245,163,0.18)]"
        aria-label="Scooter elétrica Makwin Motors"
        role="img"
      >
        <defs>
          <linearGradient id="deck" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#16f5a3" />
            <stop offset="1" stopColor="#0fcf86" />
          </linearGradient>
          <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#cfe9df" />
            <stop offset="1" stopColor="#5b6b76" />
          </linearGradient>
          <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#16f5a3" stopOpacity="0.35" />
            <stop offset="1" stopColor="#16f5a3" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* halo */}
        <ellipse cx="260" cy="210" rx="250" ry="190" fill="url(#halo)" />

        {/* ground reflection */}
        <ellipse cx="260" cy="370" rx="180" ry="20" fill="#000" opacity="0.35" />

        {/* rear wheel */}
        <circle cx="150" cy="320" r="48" fill="#0a0e14" stroke="#1d2630" strokeWidth="6" />
        <circle cx="150" cy="320" r="22" fill="#10161f" stroke="#2a3543" strokeWidth="4" />
        <circle cx="150" cy="320" r="6" fill="#16f5a3" />

        {/* front wheel */}
        <circle cx="392" cy="320" r="48" fill="#0a0e14" stroke="#1d2630" strokeWidth="6" />
        <circle cx="392" cy="320" r="22" fill="#10161f" stroke="#2a3543" strokeWidth="4" />
        <circle cx="392" cy="320" r="6" fill="#16f5a3" />

        {/* deck */}
        <path
          d="M150 318 L360 318 Q372 318 372 308 L150 308 Q140 308 140 318 Z"
          fill="url(#deck)"
        />
        <rect x="150" y="298" width="210" height="14" rx="7" fill="#0c1118" />

        {/* stem */}
        <rect x="372" y="120" width="16" height="190" rx="8" fill="url(#stem)" transform="rotate(14 380 215)" />

        {/* handlebar */}
        <rect x="356" y="108" width="120" height="14" rx="7" fill="#0c1118" />
        <circle cx="356" cy="115" r="11" fill="#16f5a3" />
        <circle cx="476" cy="115" r="11" fill="#16f5a3" />

        {/* display */}
        <rect x="402" y="86" width="40" height="26" rx="6" fill="#0a0e14" stroke="#16f5a3" strokeWidth="2" />
        <rect x="408" y="93" width="20" height="4" rx="2" fill="#16f5a3" />
        <rect x="408" y="101" width="28" height="4" rx="2" fill="#22d3ee" opacity="0.7" />

        {/* fender + headlight */}
        <path d="M372 300 q34 -6 44 8" stroke="#1d2630" strokeWidth="8" strokeLinecap="round" />
        <circle cx="398" cy="200" r="7" fill="#fff" opacity="0.9" />

        {/* speed lines */}
        <g opacity="0.7">
          <rect x="40" y="180" width="70" height="6" rx="3" fill="#16f5a3" opacity="0.6" />
          <rect x="20" y="208" width="100" height="6" rx="3" fill="#22d3ee" opacity="0.5" />
          <rect x="48" y="236" width="60" height="6" rx="3" fill="#16f5a3" opacity="0.4" />
        </g>
      </svg>
    </motion.div>
  );
}
