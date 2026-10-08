import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./NotFound";
import { getService, services } from "@/data/services";

const BASE = "https://sehea.com.ar";

const setMeta = (selector: string, attr: string, value: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = getService(slug);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!service) return;
    const url = `${BASE}/servicios/${service.slug}`;
    const prev = { title: document.title, canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute("href") };
    document.title = service.seoTitle;
    setMeta('meta[name="description"]', "content", service.seoDescription, () => Object.assign(document.createElement("meta"), { name: "description" }));
    setMeta('link[rel="canonical"]', "href", url, () => Object.assign(document.createElement("link"), { rel: "canonical" }));
    window.scrollTo(0, 0);
    return () => {
      document.title = prev.title;
      if (prev.canonical) document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", prev.canonical);
    };
  }, [service]);

  if (!service) return <NotFound />;

  const waLink = `https://wa.me/542235121114?text=${encodeURIComponent(`Hola, quiero consultar sobre el servicio de ${service.title} de SEHEA`)}`;
  const related = services.filter((candidate) => service.related.includes(candidate.slug));
  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mqegvyzr", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (res.ok) { setSent(true); form.reset(); } else toast.error("Hubo un error al enviar. Intentá de nuevo.");
    } catch {
      toast.error("Error de conexión. Intentá de nuevo más tarde.");
    } finally { setSending(false); }
  };

  const Section = ({ title, children, alt }: { title: string; children: React.ReactNode; alt?: boolean }) => (
    <section className={`py-12 md:py-16 ${alt ? "bg-surface" : "bg-background"}`}>
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <header className="pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-primary-foreground">
          <div className="container max-w-4xl">
            <Link to="/#servicios" className="text-sm opacity-80 hover:opacity-100">← Servicios</Link>
            <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center my-6">
              <service.icon size={28} className="text-secondary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{service.title} en Mar del Plata y la Costa Atlántica</h1>
          </div>
        </header>

        <Section title="Qué es">
          <p className="text-muted-foreground leading-relaxed text-lg">{service.whatIs}</p>
        </Section>

        <Section title="A quién le corresponde y qué norma lo exige" alt>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-2">A quién le corresponde</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.whoNeedsIt}</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-2">Normativa</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.regulation}</p>
            </div>
          </div>
        </Section>

        <Section title="Qué recibís">
          <ul className="space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-foreground"><CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" /><span>{d}</span></li>
            ))}
          </ul>
        </Section>

        <Section title="Cómo trabajamos" alt>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.steps.map((s, i) => (
              <li key={s.title} className="bg-card rounded-xl p-6 shadow-card">
                <span className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center mb-3">{i + 1}</span>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Consultanos por este servicio" alt>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground">Escribinos por WhatsApp o dejanos tus datos y te contactamos.</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground hover:opacity-90 transition-opacity">
                Consultar por WhatsApp
              </a>
            </div>
            {sent ? (
              <div className="md:col-span-3 flex flex-col items-center text-center gap-3 py-8">
                <CheckCircle size={40} className="text-secondary" />
                <p className="font-bold text-foreground">¡Gracias por tu consulta!</p>
                <button onClick={() => setSent(false)} className="text-sm text-secondary underline">Enviar otra consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                <input required name="name" placeholder="Nombre completo *" className={inputClass} maxLength={100} />
                <input required name="email" type="email" placeholder="Email *" className={inputClass} maxLength={255} />
                <input required name="telefono" type="tel" placeholder="Teléfono *" className={inputClass} maxLength={30} />
                <select name="subject" className={inputClass} defaultValue={service.title}>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
                <textarea name="message" placeholder="Mensaje (opcional)" rows={3} className={`${inputClass} sm:col-span-2 resize-none`} maxLength={1000} />
                <button type="submit" disabled={sending} className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 disabled:opacity-60">
                  <Send size={16} /> {sending ? "Enviando..." : "Enviar Consulta"}
                </button>
              </form>
            )}
          </div>
        </Section>

        <Section title="Otros servicios que te pueden interesar">
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to={`/servicios/${r.slug}`} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <r.icon size={24} className="text-secondary mb-3" />
                <h3 className="font-bold text-foreground mb-2">{r.title}</h3>
                <span className="text-sm font-semibold text-secondary">Ver más →</span>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
