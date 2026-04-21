import { useState } from "react";
import { Download, CheckCircle, FileText } from "lucide-react";
import { toast } from "sonner";
import ebookCover from "@/assets/ebook-cover.png";

const PDF_URL = "/SEHEA_Guia_Estrategica_SyH.pdf";

const LeadMagnetSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "SEHEA_Guia_Estrategica_SyH.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("_subject", "Nueva descarga de eBook - Lead Magnet SEHEA");
    formData.append("origen", "Lead Magnet - eBook Guía Estratégica");

    try {
      const response = await fetch("https://formspree.io/f/mqegvyzr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      // Log para que puedas ver quién se registró
      console.log("[Lead Magnet] Nuevo registro:", Object.fromEntries(formData.entries()));

      if (response.ok) {
        setSent(true);
        toast.success("¡Gracias! Tu descarga está comenzando.");
        triggerDownload();
        form.reset();
      } else {
        toast.error("Hubo un error. Intentá de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Intentá de nuevo más tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="recursos" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Recursos Gratuitos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Descargá nuestra Guía Estratégica
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Material exclusivo para empresas que quieren ir más allá del cumplimiento normativo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Imagen del eBook */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <img
                src={ebookCover}
                alt="Portada del eBook SEHEA: Guía Estratégica de Seguridad e Higiene para PyMEs en Mar del Plata"
                className="relative max-w-sm w-full rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Formulario y texto */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
              <FileText size={14} />
              eBook Gratuito · PDF
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              ¿Tu empresa cumple realmente con la normativa? Descargá nuestra Guía Estratégica
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Descubrí cómo un servicio externo profesional protege tu rentabilidad y potencia tu
              negocio en Mar del Plata.
            </p>

            {sent ? (
              <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-6 flex flex-col items-center text-center gap-3">
                <CheckCircle size={40} className="text-secondary" />
                <h4 className="text-lg font-bold text-foreground">¡Gracias!</h4>
                <p className="text-sm text-muted-foreground">
                  Tu descarga comenzará en breve. También te enviamos una copia a tu correo.
                </p>
                <button
                  onClick={triggerDownload}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                >
                  <Download size={14} />
                  Volver a descargar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  name="name"
                  placeholder="Nombre completo *"
                  className={inputClass}
                  maxLength={100}
                />
                <input
                  required
                  name="empresa"
                  placeholder="Empresa *"
                  className={inputClass}
                  maxLength={100}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email corporativo *"
                  className={`${inputClass} sm:col-span-2`}
                  maxLength={255}
                />
                <input
                  required
                  name="whatsapp"
                  type="tel"
                  placeholder="WhatsApp de contacto *"
                  className={`${inputClass} sm:col-span-2`}
                  maxLength={30}
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-secondary-foreground hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0"
                  >
                    <Download size={16} />
                    {sending ? "Enviando..." : "Descargar eBook Gratuitamente"}
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Tus datos están protegidos. No compartimos tu información.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
