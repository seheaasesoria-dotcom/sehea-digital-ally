import heroBg from "@/assets/hero-bg.jpg";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-20">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="SEHEA Consultora en Seguridad e Higiene Laboral en Mar del Plata" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-90" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 mb-6">
          <Shield size={16} className="text-secondary" />
          <span className="text-sm font-medium text-secondary">Asesoría en Higiene y Seguridad Industrial</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Asesoría Integral SEHEA: Expertos en{" "}
          <span className="text-gradient">Seguridad e Higiene Laboral</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
          Protegemos tu capital humano en Mar del Plata y zona con cumplimiento de la Normativa SRT, gestión de ART, capacitación de personal y planes de emergencia. Seguridad Industrial a tu medida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-secondary-foreground bg-secondary hover:opacity-90 transition-all shadow-lg"
          >
            Solicitar Presupuesto
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all"
          >
            Conocer Servicios
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
