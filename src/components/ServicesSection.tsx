import { Scale, HardHat, Activity, Flame, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Gestión Integral y Asesoramiento Legal",
    description: "Cumplimiento de la Ley 19.587 de Higiene y Seguridad y la Ley 24.557 de Riesgos del Trabajo. Representación ante SRT, ART y Ministerios.",
  },
  {
    icon: HardHat,
    title: "Programas de Seguridad",
    description: "Confección de programas para Construcción (Dec. 911/96), Agro (Dec. 617/97) e Industria (Dec. 351/79).",
  },
  {
    icon: Activity,
    title: "Mediciones Ambientales (Protocolos SRT)",
    description: "Estudios de iluminación (Res. 84/2012), Ruido (Res. 85/2012), Puesta a tierra (Res. 900/15), Ergonomía (Res. 886/15) y Contaminantes Químicos (Res. 861/15).",
  },
  {
    icon: Flame,
    title: "Prevención y Protección contra Incendios",
    description: "Estudios de carga de fuego, planes de evacuación y diseño de redes de incendio (Anexo VII, Dec. 351/79).",
  },
  {
    icon: GraduationCap,
    title: "Capacitación del Personal",
    description: "Entrenamientos en uso de EPP, riesgos específicos y manejo de emergencias (Capítulo 21, Dec. 351/79).",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Servicios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Soluciones integrales en seguridad laboral
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Brindamos asesoramiento completo basado en la legislación argentina vigente para proteger a tu equipo y tu empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
              <s.icon size={24} className="text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
