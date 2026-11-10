const steps = [
  {
    n: "1",
    title: "Relevamiento",
    text: "Visitamos tu empresa y analizamos la situación actual.",
  },
  {
    n: "2",
    title: "Ejecución",
    text: "Gestionamos la documentación y los trámites ante los organismos.",
  },
  {
    n: "3",
    title: "Informe",
    text: "Te entregamos la documentación firmada por profesional matriculado.",
  },
  {
    n: "4",
    title: "Seguimiento",
    text: "Acompañamos la implementación de las mejoras.",
  },
];

const HowWeWorkSection = () => (
  <section id="como-trabajamos" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Cómo trabajamos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Así trabajamos en SEHEA
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-background px-6 py-8">
            <p className="text-3xl font-extrabold text-secondary leading-none">{s.n}</p>
            <h3 className="text-base font-bold text-foreground mt-4 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWorkSection;
