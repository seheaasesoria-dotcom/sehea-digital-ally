import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const rubros = ["Industria", "Construcción", "Agro", "Comercio", "Servicios", "Otro"];
const servicios = [
  "Gestión Integral",
  "Programas de Seguridad",
  "Mediciones Ambientales",
  "Protección contra Incendios",
  "Capacitación",
  "Otro",
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqegvyzr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSent(true);
        toast.success("¡Consulta enviada con éxito! Te contactaremos pronto.");
        form.reset();
      } else {
        toast.error("Hubo un error al enviar. Intentá de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Intentá de nuevo más tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            ¿Listo para proteger tu empresa?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Completá el formulario y un especialista te contactará en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {sent ? (
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center py-16 gap-4">
              <CheckCircle size={48} className="text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">¡Gracias por tu consulta!</h3>
              <p className="text-muted-foreground">Te contactaremos en menos de 24 horas.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm text-secondary underline hover:opacity-80"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Nombre completo *" className={inputClass} maxLength={100} />
              <input required name="empresa" placeholder="Empresa *" className={inputClass} maxLength={100} />
              <select required name="rubro" className={inputClass} defaultValue="">
                <option value="" disabled>Rubro *</option>
                {rubros.map((r) => <option key={r}>{r}</option>)}
              </select>
              <input required name="email" type="email" placeholder="Email corporativo *" className={inputClass} maxLength={255} />
              <input required name="telefono" type="tel" placeholder="Teléfono *" className={inputClass} maxLength={30} />
              <select required name="subject" className={inputClass} defaultValue="">
                <option value="" disabled>Servicio de interés *</option>
                {servicios.map((s) => <option key={s}>{s}</option>)}
              </select>
              <textarea name="message" placeholder="Mensaje (opcional)" rows={4} className={`${inputClass} sm:col-span-2 resize-none`} maxLength={1000} />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <Send size={16} />
                  {sending ? "Enviando..." : "Enviar Consulta"}
                </button>
              </div>
            </form>
          )}

          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Dirección</h4>
                <p className="text-muted-foreground text-sm">Mar del Plata, Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Email</h4>
                <a href="mailto:info@sehea.com.ar" className="text-muted-foreground text-sm hover:text-foreground transition-colors">info@sehea.com.ar</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Teléfono</h4>
                <p className="text-muted-foreground text-sm">+54 223 5121114</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                title="Ubicación SEHEA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-57.5575!3d-38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d948cbd3ab05%3A0x7138de60c4064043!2sMar%20del%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
