import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sehea-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="SEHEA - Asesoría en Seguridad e Higiene" className="h-10 md:h-12" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
              Solicitar Presupuesto
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground">
                Solicitar Presupuesto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
