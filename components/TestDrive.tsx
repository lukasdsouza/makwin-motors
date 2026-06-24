"use client";

import { useState } from "react";
import { CalendarCheck, MessageCircle, MapPin } from "lucide-react";
import { models, site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const horarios = [
  "Manhã (10h–13h)",
  "Tarde (13h–16h)",
  "Fim de tarde (16h–18h)",
  "Sábado",
];

export default function TestDrive() {
  const [name, setName] = useState("");
  const [model, setModel] = useState<string>(models[0].name);
  const [time, setTime] = useState<string>(horarios[0]);
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError(true);
      return;
    }
    const msg =
      `Olá! Meu nome é ${name.trim()} e quero agendar um test-drive na loja da Barra. ` +
      `Tenho interesse na ${model} e prefiro no período: ${time}.`;
    const url = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="test-drive" className="relative overflow-hidden py-24 sm:py-28">
      <div className="orb left-[12%] top-[15%] h-[320px] w-[320px] bg-volt/15" />
      <div className="container-x">
        <div className="card relative overflow-hidden rounded-[32px] border-volt/20 p-7 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Test-drive"
                title={
                  <>
                    Agende seu test-drive na{" "}
                    <span className="gradient-text">Barra</span>
                  </>
                }
                subtitle="Preencha em 10 segundos e a gente já te chama no WhatsApp para confirmar o melhor horário."
              />
              <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-4 w-4 text-volt" />
                {site.address.line1}, {site.address.line2}
              </div>
            </div>

            <Reveal delay={0.1}>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
                    Seu nome
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError(false);
                    }}
                    placeholder="Como podemos te chamar?"
                    className={`w-full rounded-xl border bg-ink-soft/80 px-4 py-3 text-sm text-white outline-none transition focus:border-volt/60 ${
                      error ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {error && (
                    <p className="mt-1 text-xs text-red-400">
                      Digite seu nome para continuar.
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/70">
                      Modelo de interesse
                    </label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-ink-soft/80 px-4 py-3 text-sm text-white outline-none transition focus:border-volt/60"
                    >
                      {models.map((m) => (
                        <option key={m.slug} value={m.name}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/70">
                      Melhor horário
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-ink-soft/80 px-4 py-3 text-sm text-white outline-none transition focus:border-volt/60"
                    >
                      {horarios.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-volt w-full">
                  <CalendarCheck className="h-4 w-4" />
                  Agendar pelo WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-white/40">
                  Abre o WhatsApp com sua mensagem pronta. Sem compromisso.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
