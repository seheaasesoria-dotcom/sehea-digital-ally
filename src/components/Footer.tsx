import logo from "@/assets/sehea-logo.png";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <img src={logo} alt="Logo de SEHEA Consultora - Seguridad e Higiene Laboral" className="h-10 mb-4" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Consultoría integral en Seguridad Industrial e Higiene Laboral en Mar del Plata. Protegemos tu capital humano.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4">Enlaces</h4>
          <ul className="space-y-2">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4">Seguinos</h4>
          <div className="flex gap-3">
            <a href="https://linkedin.com/company/sehea-seguridad-e-higiene-laboral" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} className="text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} SEHEA - Seguridad e Higiene Laboral. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
