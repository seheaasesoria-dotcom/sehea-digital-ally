import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "¿Qué registros exige la SRT ante una inspección?",
    excerpt: "Conocé los documentos imprescindibles que tu empresa debe tener listos para superar cualquier auditoría de la SRT sin inconvenientes.",
    date: "15 Mar 2026",
    category: "Normativa",
  },
  {
    title: "Guía para la entrega de EPP según Res. 299/11",
    excerpt: "Todo lo que necesitás saber sobre la correcta entrega, registro y reposición de Elementos de Protección Personal.",
    date: "02 Mar 2026",
    category: "EPP",
  },
  {
    title: "Mediciones ambientales: ¿cuándo son obligatorias?",
    excerpt: "Te explicamos los plazos, protocolos y resoluciones vigentes para cada tipo de medición ambiental exigida por la SRT.",
    date: "18 Feb 2026",
    category: "Mediciones",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Novedades</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Artículos y novedades del sector
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Mantenete informado sobre normativas, buenas prácticas y tendencias en seguridad e higiene laboral.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-48 bg-primary/5 flex items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                <Calendar size={14} />
                {p.date}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                Leer más <ArrowRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
