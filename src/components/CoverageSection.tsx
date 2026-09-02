import { MapPin, Navigation, Shield } from "lucide-react";

const localidades = [
  { nombre: "Mar del Plata", partido: "Gral. Pueyrredon" },
  { nombre: "Miramar", partido: "Gral. Alvarado" },
  { nombre: "Necochea y Quequén", partido: "" },
  { nombre: "Balcarce", partido: "" },
  { nombre: "Villa Gesell, Pinamar y Cariló", partido: "" },
  { nombre: "Partido de La Costa", partido: "" },
];

const CoverageSection = () => (
  <section id="cobertura" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Alcance regional</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">
            Zona de Cobertura y Alcance Regional
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl lg:max-w-none">
            Trabajamos en toda la región de la Costa Atlántica bonaerense con visitas técnicas, relevamientos in situ y capacitaciones en planta. Estamos cerca de tu empresa para resolver urgencias, acompañar inspecciones y mantener la normativa SRT al día.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-background border border-border px-6 py-4 shadow-card">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <Shield size={20} className="text-secondary" />
            </div>
            <p className="text-sm font-medium text-foreground text-left">
              Realizamos visitas técnicas, relevamientos in situ y capacitaciones en planta en toda la región.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {localidades.map((loc) => (
            <div
              key={loc.nombre}
              className="flex items-start gap-4 rounded-xl bg-background border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">{loc.nombre}</h3>
                {loc.partido && (
                  <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                    <Navigation size={10} />
                    {loc.partido}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CoverageSection;
