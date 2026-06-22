import { MapPin, Clock, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Location() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address.mapsQuery
  )}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contato" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loja física"
          title={
            <>
              Venha nos visitar na{" "}
              <span className="gradient-text">Barra da Tijuca</span>
            </>
          }
          subtitle="Conheça os modelos de perto, faça o test-drive e tire todas as suas dúvidas com a nossa equipe."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card flex h-full flex-col gap-6 p-7">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-volt/10 text-volt ring-1 ring-volt/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">Endereço</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-volt/10 text-volt ring-1 ring-volt/20">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <h3 className="font-display font-semibold">Horário</h3>
                  <ul className="mt-1 space-y-1 text-sm text-white/65">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="text-white/80">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-auto"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card h-full overflow-hidden p-1.5">
              <iframe
                title="Mapa da loja Makwin Motors"
                src={mapsEmbed}
                className="h-[360px] w-full rounded-[20px] grayscale-[0.3] lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
