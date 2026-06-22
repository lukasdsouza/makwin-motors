import { ShieldCheck, IdCard, FileCheck2, Leaf } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Resolução CONTRAN nº 996" },
  { icon: IdCard, label: "Sem necessidade de CNH" },
  { icon: FileCheck2, label: "Sem emplacamento" },
  { icon: Leaf, label: "100% elétrico e sustentável" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-ink-soft/60">
      <div className="container-x grid grid-cols-2 gap-px py-8 sm:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-center gap-3 px-4 text-center"
          >
            <it.icon className="h-5 w-5 shrink-0 text-volt" />
            <span className="text-sm font-medium text-white/75">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
