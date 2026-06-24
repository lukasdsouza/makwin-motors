"use client";

import {
  motion,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type CardCfg = {
  top: string;
  left: string;
  w: string;
  rotY: number;
  rotZ: number;
  scale: number;
  depth: number;
  delay: number;
  blur: number;
};

// Cards espalhados em perspectiva, enviesados para a direita da seção.
const cards: CardCfg[] = [
  { top: "4%", left: "50%", w: "clamp(160px,17vw,260px)", rotY: -18, rotZ: -5, scale: 1, depth: 1, delay: 0, blur: 0 },
  { top: "32%", left: "70%", w: "clamp(150px,15vw,230px)", rotY: -14, rotZ: 5, scale: 0.92, depth: 0.8, delay: 0.6, blur: 0 },
  { top: "58%", left: "53%", w: "clamp(150px,16vw,235px)", rotY: -16, rotZ: -3, scale: 0.96, depth: 0.9, delay: 1.1, blur: 0 },
  { top: "10%", left: "80%", w: "clamp(120px,12vw,185px)", rotY: -10, rotZ: 9, scale: 0.82, depth: 0.55, delay: 0.3, blur: 1 },
  { top: "62%", left: "79%", w: "clamp(125px,13vw,195px)", rotY: -12, rotZ: -8, scale: 0.86, depth: 0.65, delay: 1.4, blur: 0.6 },
  { top: "40%", left: "41%", w: "clamp(115px,12vw,180px)", rotY: -20, rotZ: 4, scale: 0.72, depth: 0.5, delay: 0.9, blur: 2 },
  { top: "82%", left: "67%", w: "clamp(105px,11vw,165px)", rotY: -12, rotZ: 7, scale: 0.7, depth: 0.45, delay: 1.8, blur: 1.6 },
];

function FloatCard({
  src,
  cfg,
  xMv,
  yMv,
  reduce,
}: {
  src: string;
  cfg: CardCfg;
  xMv: MotionValue<number>;
  yMv: MotionValue<number>;
  reduce: boolean;
}) {
  const x = useTransform(xMv, (v) => v * cfg.depth * 28);
  const y = useTransform(yMv, (v) => v * cfg.depth * 28);

  return (
    <motion.div
      style={{
        top: cfg.top,
        left: cfg.left,
        width: cfg.w,
        x: reduce ? 0 : x,
        y: reduce ? 0 : y,
      }}
      className="absolute will-change-transform"
    >
      <motion.div
        animate={reduce ? {} : { y: [0, -12, 0] }}
        transition={{
          duration: 6 + cfg.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: cfg.delay,
        }}
      >
        <div
          className="overflow-hidden rounded-2xl border border-white/12 bg-ink-card shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)]"
          style={{
            transform: `rotateY(${cfg.rotY}deg) rotateZ(${cfg.rotZ}deg) scale(${cfg.scale})`,
            filter: cfg.blur ? `blur(${cfg.blur}px)` : undefined,
          }}
        >
          <div className="relative aspect-[3/4]">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <span className="absolute left-2 top-2 h-3.5 w-3.5 border-l-2 border-t-2 border-volt/60" />
            <span className="absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-volt/60" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingStoreCards({
  videos,
  xMv,
  yMv,
}: {
  videos: string[];
  xMv: MotionValue<number>;
  yMv: MotionValue<number>;
}) {
  const reduce = !!useReducedMotion();
  return (
    <div className="absolute inset-0 [perspective:1500px]" aria-hidden>
      {cards.map((cfg, i) => (
        <FloatCard
          key={i}
          src={videos[i % videos.length]}
          cfg={cfg}
          xMv={xMv}
          yMv={yMv}
          reduce={reduce}
        />
      ))}
    </div>
  );
}
