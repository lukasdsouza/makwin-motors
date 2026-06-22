import { MessageCircle, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-volt/20 bg-gradient-to-br from-ink-card to-ink px-7 py-14 text-center sm:px-12 sm:py-20">
            <div className="orb left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 bg-volt/25" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Pronto para trocar o trânsito pela{" "}
                <span className="gradient-text">liberdade elétrica</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">
                Fale agora com a nossa equipe e descubra o modelo perfeito para a
                sua rotina. Test-drive disponível na loja física.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-volt"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Instagram className="h-4 w-4" />
                  Seguir {site.instagram.handle}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
