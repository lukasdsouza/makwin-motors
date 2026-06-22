import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { makPoses } from "@/lib/mak";

export const metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="orb left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 bg-volt/20" />
      <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={makPoses.peek}
        alt="MAK procurando a página"
        className="w-40 drop-shadow-[0_20px_50px_rgba(22,245,163,0.35)] sm:w-52"
      />

      <h1 className="mt-8 font-display text-6xl font-extrabold tracking-tight sm:text-7xl">
        4<span className="gradient-text">0</span>4
      </h1>
      <p className="mt-4 max-w-md text-white/65">
        O MAK procurou, mas essa página não existe (ou já saiu rodando por aí).
        Vamos te levar de volta para o início.
      </p>

      <Link href="/" className="btn-volt mt-9">
        <ArrowLeft className="h-4 w-4" />
        Voltar para o início
      </Link>
    </main>
  );
}
