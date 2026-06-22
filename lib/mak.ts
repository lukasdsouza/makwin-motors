/**
 * Registro do mascote MAK (Makwin LED Rider).
 * Cada pose é um PNG com fundo transparente em /public/mak.
 * Os easter eggs mapeiam gatilhos de UX a poses.
 */
export type MakPose =
  | "peek"
  | "wave"
  | "point"
  | "hug"
  | "ride"
  | "arms"
  | "crouch"
  | "jump"
  | "sit"
  | "pockets"
  | "helmet";

export const makPoses: Record<MakPose, string> = {
  peek: "/mak/mak-peek.png",
  wave: "/mak/mak-wave.png",
  point: "/mak/mak-point.png",
  hug: "/mak/mak-hug.png",
  ride: "/mak/mak-ride.png",
  arms: "/mak/mak-arms.png",
  crouch: "/mak/mak-crouch.png",
  jump: "/mak/mak-jump.png",
  sit: "/mak/mak-sit.png",
  pockets: "/mak/mak-pockets.png",
  helmet: "/mak/mak-helmet.png",
};

export const mak = {
  name: "MAK",
  fullName: "Makwin LED Rider",
};
