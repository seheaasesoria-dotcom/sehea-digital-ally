import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5411XXXXXXXX?text=Hola%2C%20quiero%20consultar%20sobre%20los%20servicios%20de%20SEHEA"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default WhatsAppButton;
