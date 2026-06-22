import { MessageCircle, Instagram, MapPin, Mail } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-soft/60">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mak/mak-wave.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-4 hidden w-28 opacity-90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] lg:block"
      />
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center">
              <img
                src="/brand/wordmark.png"
                alt={site.name}
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {site.shortDescription}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-volt/40 hover:text-volt"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-volt/40 hover:text-volt"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <span>
                  {site.address.line1}, {site.address.line2},{" "}
                  {site.address.line3}
                </span>
              </li>
              <li className="flex gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.whatsapp.display}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>Modelos autopropelidos enquadrados na Resolução CONTRAN nº 996.</p>
        </div>
      </div>
    </footer>
  );
}
