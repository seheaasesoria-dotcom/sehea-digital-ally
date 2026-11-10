import { ShieldCheck, RefreshCw, Users } from "lucide-react";

const highlights = [
  { value: "5 años", label: "de trayectoria en higiene y seguridad laboral" },
  { value: "Industrias", label: "experiencia en distintos rubros industriales" },
  { value: "24 hs", label: "para responder tu consulta" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Profesional matriculado",
    description: "Tus informes y protocolos los firma un profesional matriculado.",
  },
  {
    icon: RefreshCw,
    title: "Normativa SRT al día",
    description:
      "Trabajamos con la normativa vigente de la SRT y te avisamos cuando algo cambia y te afecta.",
  },
  {
    icon: Users,
    title: "Plan a tu medida",
    description:
      "Cada empresa recibe un plan según su rubro, tamaño y nivel de riesgo. Con experiencia en capacitaciones, programas de seguridad y mediciones de PAT, ruido e iluminación.",
  },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          ¿Por qué elegirnos?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Por qué las empresas eligen SEHEA
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Higiene y seguridad laboral con profesional matriculado, para que tu empresa esté en regla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div
            key={h.value}
            className="rounded-2xl border border-border bg-secondary/5 px-6 py-8 text-center"
          >
            <p className="text-2xl md:text-3xl font-extrabold text-secondary leading-tight">{h.value}</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-border px-6 py-8 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
              <r.icon size={26} className="text-secondary" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
