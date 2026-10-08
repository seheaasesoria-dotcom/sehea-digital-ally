import { RefreshCw, Users, Cpu, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: RefreshCw,
    title: "Actualización constante",
    description: "Nos mantenemos al día con cada cambio normativo de la SRT para que tu empresa nunca quede expuesta.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Cada cliente recibe un plan a medida según su rubro, tamaño y nivel de riesgo. Con experiencia en industrias, capacitaciones y programas de seguridad.",
  },
  {
    icon: Cpu,
    title: "Prevención 4.0",
    description: "Incorporamos tecnología de vanguardia en mediciones y gestión de datos para mayor precisión.",
  },
  {
    icon: FileCheck,
    title: "Informes rápidos y precisos",
    description: "Entregamos documentación clara y en tiempo récord para que cumplas con los plazos regulatorios.",
  },
];

const highlights = [
  { value: "Industrias", label: "experiencia en distintos rubros industriales" },
  { value: "PAT, ruido e iluminación", label: "mediciones con protocolos SRT" },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">¿Por qué elegirnos?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Confianza, experiencia y resultados
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Higiene y seguridad laboral con profesional matriculado, para que tu empresa esté en regla.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="text-center group">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
              <r.icon size={28} className="text-secondary" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-secondary/5 px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {highlights.map((h) => (
            <div key={h.value} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-extrabold text-secondary leading-tight">{h.value}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
