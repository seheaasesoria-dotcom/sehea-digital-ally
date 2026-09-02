import logo from "@/assets/sehea-logo.png";
import { Linkedin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div>
          <img src={logo} alt="Logo de SEHEA Consultora - Seguridad e Higiene Laboral" className="h-10 mb-4" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Consultoría integral en Seguridad Industrial e Higiene Laboral en Mar del Plata y la Costa Atlántica. Fomentamos la protección del talento organizacional.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4">Enlaces</h4>
          <ul className="space-y-2">
            {["Inicio", "Servicios", "Nosotros", "Recursos", "Contacto"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4">Alcance</h4>
          <ul className="space-y-2">
            {[
              "Mar del Plata (Gral. Pueyrredon)",
              "Miramar (Gral. Alvarado)",
              "Necochea y Quequén",
              "Balcarce",
              "Villa Gesell, Pinamar y Cariló",
              "Partido de La Costa",
            ].map((l) => (
              <li key={l} className="text-primary-foreground/60 text-sm flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4">Contacto y WhatsApp</h4>
          <div className="space-y-3">
            <a href="mailto:info@sehea.com.ar" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors block">
              info@sehea.com.ar
            </a>
            <a href="tel:+542235121114" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Phone size={14} className="text-secondary" />
              +54 223 5121114
            </a>
            <a
              href="https://wa.me/542235121114?text=Hola%2C%20quiero%20consultar%20sobre%20los%20servicios%20de%20SEHEA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <h4 className="font-semibold text-primary-foreground text-sm mt-6 mb-4">Seguinos</h4>
          <div className="flex gap-3">
            <a href="https://linkedin.com/company/sehea-seguridad-e-higiene-laboral" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} className="text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} SEHEA - Seguridad e Higiene Laboral. Mar del Plata y Costa Atlántica. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
