// Contenido editable de las páginas de servicios.
// "[COMPLETAR]" marca datos que faltan confirmar (periodicidad, plazos, precios, etc.).
import { Scale, HardHat, Activity, Flame, GraduationCap, ClipboardCheck, FileText, Search, Siren, type LucideIcon } from "lucide-react";

export const PENDING = "[COMPLETAR]";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string; // texto de la tarjeta en la home
  seoTitle: string;
  seoDescription: string;
  whatIs: string;
  whoNeedsIt: string;
  regulation: string;
  deliverables: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
}

const defaultSteps = (execution: string) => [
  { title: "Relevamiento", text: `Visitamos tu empresa y analizamos la situación actual. Plazo: ${PENDING}` },
  { title: "Ejecución", text: `${execution} Plazo: ${PENDING}` },
  { title: "Informe", text: `Te entregamos la documentación firmada por profesional matriculado. Plazo de entrega: ${PENDING}` },
  { title: "Seguimiento", text: `Acompañamos la implementación de las mejoras. Periodicidad: ${PENDING}` },
];

const commonFaqs = (name: string) => [
  { q: `¿Cuánto cuesta el servicio de ${name}?`, a: `${PENDING} El valor depende del tamaño y la actividad de la empresa. Consultá sin cargo.` },
  { q: "¿Cada cuánto tiempo hay que realizarlo?", a: PENDING },
];

export const services: Service[] = [
  {
    slug: "gestion-integral-asesoramiento-legal",
    icon: Scale,
    title: "Gestión Integral y Asesoramiento Legal",
    shortDescription: "Cumplimiento de la Ley 19.587 de Higiene y Seguridad y la Ley 24.557 de Riesgos del Trabajo. Representación ante SRT, ART y Ministerios.",
    seoTitle: "Gestión Integral y Asesoramiento Legal en Higiene y Seguridad | SEHEA Mar del Plata",
    seoDescription: "Cumplimiento de la Ley 19.587 y la Ley 24.557. Representación ante SRT, ART y Ministerios en Mar del Plata y la Costa Atlántica.",
    whatIs: "Nos ocupamos de que tu empresa cumpla con las leyes de Higiene y Seguridad y de Riesgos del Trabajo, y te representamos ante la SRT, la ART y los Ministerios.",
    whoNeedsIt: `Empresas con personal en relación de dependencia. Alcance según actividad y cantidad de trabajadores: ${PENDING}`,
    regulation: "Ley 19.587 de Higiene y Seguridad en el Trabajo y Ley 24.557 de Riesgos del Trabajo.",
    deliverables: ["Diagnóstico de cumplimiento normativo", "Representación ante SRT, ART y Ministerios", `Otros entregables: ${PENDING}`],
    steps: defaultSteps("Gestionamos la documentación y los trámites ante los organismos."),
    faqs: [
      ...commonFaqs("Gestión Integral"),
      { q: "¿Me representan ante una inspección?", a: "Sí, brindamos representación ante SRT, ART y Ministerios." },
      { q: "¿Qué leyes tengo que cumplir?", a: "La Ley 19.587 de Higiene y Seguridad y la Ley 24.557 de Riesgos del Trabajo." },
    ],
    related: ["auditorias-de-cumplimiento", "programas-de-seguridad", "mediciones-ambientales"],
  },
  {
    slug: "programas-de-seguridad",
    icon: HardHat,
    title: "Programas de Seguridad",
    shortDescription: "Confección de programas para Construcción (Dec. 911/96), Agro (Dec. 617/97) e Industria (Dec. 351/79).",
    seoTitle: "Programas de Seguridad para Construcción, Agro e Industria | SEHEA Mar del Plata",
    seoDescription: "Confección de programas de seguridad según Dec. 911/96, Dec. 617/97 y Dec. 351/79 en Mar del Plata y la Costa Atlántica.",
    whatIs: "Elaboramos el programa de seguridad que exige la normativa según tu actividad: construcción, agro o industria.",
    whoNeedsIt: "Empresas de construcción, actividades agrarias e industrias.",
    regulation: "Construcción: Dec. 911/96. Agro: Dec. 617/97. Industria: Dec. 351/79.",
    deliverables: ["Programa de seguridad según actividad", `Otros entregables: ${PENDING}`],
    steps: defaultSteps("Confeccionamos el programa de seguridad correspondiente a tu actividad."),
    faqs: [
      ...commonFaqs("Programas de Seguridad"),
      { q: "¿Qué decreto aplica a mi actividad?", a: "Construcción: Dec. 911/96; Agro: Dec. 617/97; Industria: Dec. 351/79." },
      { q: "¿Cuánto tarda en estar listo?", a: PENDING },
    ],
    related: ["documentacion-licitaciones", "capacitacion-del-personal", "gestion-integral-asesoramiento-legal"],
  },
  {
    slug: "mediciones-ambientales",
    icon: Activity,
    title: "Mediciones Ambientales (Protocolos SRT)",
    shortDescription: "Estudios de iluminación (Res. 84/2012), Ruido (Res. 85/2012), Puesta a tierra (Res. 900/15), Ergonomía (Res. 886/15) y Contaminantes Químicos (Res. 861/15).",
    seoTitle: "Mediciones Ambientales y Protocolos SRT | SEHEA Mar del Plata",
    seoDescription: "Mediciones de iluminación, ruido, puesta a tierra, ergonomía y contaminantes químicos según protocolos SRT en Mar del Plata y la Costa.",
    whatIs: "Medimos las condiciones del ambiente de trabajo (luz, ruido, instalación eléctrica, ergonomía y contaminantes) siguiendo los protocolos oficiales de la SRT.",
    whoNeedsIt: `Empresas cuyos puestos de trabajo requieran estas mediciones. Criterios específicos: ${PENDING}`,
    regulation: "Iluminación: Res. SRT 84/2012. Ruido: Res. SRT 85/2012. Puesta a tierra: Res. SRT 900/15. Ergonomía: Res. SRT 886/15. Contaminantes químicos: Res. SRT 861/15.",
    deliverables: ["Protocolo de iluminación", "Protocolo de ruido", "Protocolo de puesta a tierra", "Protocolo de ergonomía", "Protocolo de contaminantes químicos"],
    steps: defaultSteps("Realizamos las mediciones en tu establecimiento con instrumental adecuado."),
    faqs: [
      ...commonFaqs("Mediciones Ambientales"),
      { q: "¿Qué mediciones realizan?", a: "Iluminación, ruido, puesta a tierra, ergonomía y contaminantes químicos." },
      { q: "¿Los protocolos son válidos ante la SRT?", a: "Se realizan según las resoluciones SRT 84/2012, 85/2012, 900/15, 886/15 y 861/15." },
    ],
    related: ["proteccion-contra-incendios", "auditorias-de-cumplimiento", "programas-de-seguridad"],
  },
  {
    slug: "proteccion-contra-incendios",
    icon: Flame,
    title: "Prevención y Protección contra Incendios",
    shortDescription: "Estudios de carga de fuego, planes de evacuación y diseño de redes de incendio (Anexo VII, Dec. 351/79).",
    seoTitle: "Prevención y Protección contra Incendios | SEHEA Mar del Plata",
    seoDescription: "Estudios de carga de fuego, planes de evacuación y diseño de redes de incendio (Anexo VII, Dec. 351/79) en Mar del Plata y la Costa.",
    whatIs: "Analizamos el riesgo de incendio de tu establecimiento, armamos el plan de evacuación y diseñamos la red de incendio.",
    whoNeedsIt: `Establecimientos alcanzados por el Dec. 351/79. Detalle por tipo de establecimiento: ${PENDING}`,
    regulation: "Anexo VII del Decreto 351/79.",
    deliverables: ["Estudio de carga de fuego", "Plan de evacuación", "Diseño de red de incendio"],
    steps: defaultSteps("Realizamos el estudio de carga de fuego y diseñamos las medidas de protección."),
    faqs: [
      ...commonFaqs("Protección contra Incendios"),
      { q: "¿Qué norma regula la protección contra incendios?", a: "El Anexo VII del Decreto 351/79." },
      { q: "¿Incluye el plan de evacuación?", a: "Sí, el servicio incluye planes de evacuación." },
    ],
    related: ["simulacros-de-evacuacion", "capacitacion-del-personal", "mediciones-ambientales"],
  },
  {
    slug: "capacitacion-del-personal",
    icon: GraduationCap,
    title: "Capacitación del Personal",
    shortDescription: "Entrenamientos en uso de EPP, riesgos específicos y manejo de emergencias (Capítulo 21, Dec. 351/79).",
    seoTitle: "Capacitación del Personal en Higiene y Seguridad | SEHEA Mar del Plata",
    seoDescription: "Capacitaciones en uso de EPP, riesgos específicos y manejo de emergencias (Cap. 21, Dec. 351/79) en Mar del Plata y la Costa Atlántica.",
    whatIs: "Capacitamos a tu equipo en el uso de elementos de protección personal, los riesgos de su tarea y cómo actuar ante emergencias.",
    whoNeedsIt: "Empresas con personal expuesto a riesgos laborales.",
    regulation: "Capítulo 21 del Decreto 351/79.",
    deliverables: ["Capacitación en uso de EPP", "Capacitación en riesgos específicos", "Capacitación en manejo de emergencias", `Constancias / registros: ${PENDING}`],
    steps: defaultSteps("Dictamos las capacitaciones en planta o en el lugar que definas."),
    faqs: [
      ...commonFaqs("Capacitación del Personal"),
      { q: "¿Las capacitaciones son en la empresa?", a: "Sí, realizamos capacitaciones en planta en toda la región." },
      { q: "¿Qué temas incluyen?", a: "Uso de EPP, riesgos específicos y manejo de emergencias." },
    ],
    related: ["simulacros-de-evacuacion", "programas-de-seguridad", "proteccion-contra-incendios"],
  },
  {
    slug: "auditorias-de-cumplimiento",
    icon: ClipboardCheck,
    title: "Auditorías Preventivas de Cumplimiento",
    shortDescription: "Diagnóstico y corrección de brechas normativas antes de una inspección de la SRT o el Ministerio de Trabajo.",
    seoTitle: "Auditorías Preventivas de Cumplimiento SRT | SEHEA Mar del Plata",
    seoDescription: "Diagnóstico y corrección de brechas normativas antes de una inspección de la SRT o el Ministerio de Trabajo en Mar del Plata y la Costa.",
    whatIs: "Revisamos tu empresa como lo haría un inspector, detectamos lo que falta y te ayudamos a corregirlo antes de una inspección.",
    whoNeedsIt: "Empresas que quieren anticiparse a una inspección de la SRT o el Ministerio de Trabajo.",
    regulation: `Normativa vigente de Higiene y Seguridad aplicable a tu actividad. Detalle: ${PENDING}`,
    deliverables: ["Diagnóstico de brechas normativas", "Plan de corrección", `Otros entregables: ${PENDING}`],
    steps: defaultSteps("Auditamos documentación e instalaciones frente a la normativa vigente."),
    faqs: [
      ...commonFaqs("Auditorías Preventivas"),
      { q: "¿Sirve si ya tengo una inspección programada?", a: PENDING },
      { q: "¿Qué organismos inspeccionan?", a: "Principalmente la SRT y el Ministerio de Trabajo." },
    ],
    related: ["gestion-integral-asesoramiento-legal", "mediciones-ambientales", "documentacion-licitaciones"],
  },
  {
    slug: "documentacion-licitaciones",
    icon: FileText,
    title: "Documentación Técnica para Licitaciones",
    shortDescription: "Elaboración de legajo técnico, programas de seguridad y certificaciones requeridas para participar como proveedor o contratista.",
    seoTitle: "Documentación Técnica de Higiene y Seguridad para Licitaciones | SEHEA",
    seoDescription: "Legajo técnico, programas de seguridad y certificaciones para proveedores y contratistas en Mar del Plata y la Costa Atlántica.",
    whatIs: "Preparamos la documentación de Higiene y Seguridad que te piden para presentarte como proveedor o contratista.",
    whoNeedsIt: "Empresas que participan en licitaciones o trabajan como proveedores o contratistas.",
    regulation: `Requisitos del pliego de cada licitación y normativa aplicable a la actividad. Detalle: ${PENDING}`,
    deliverables: ["Legajo técnico", "Programas de seguridad", "Certificaciones requeridas"],
    steps: defaultSteps("Elaboramos la documentación según los requisitos del pliego."),
    faqs: [
      ...commonFaqs("Documentación para Licitaciones"),
      { q: "¿Qué documentos incluye?", a: "Legajo técnico, programas de seguridad y certificaciones requeridas." },
      { q: "¿En cuánto tiempo la entregan?", a: PENDING },
    ],
    related: ["programas-de-seguridad", "auditorias-de-cumplimiento", "gestion-integral-asesoramiento-legal"],
  },
  {
    slug: "investigacion-de-accidentes",
    icon: Search,
    title: "Investigación de Accidentes Laborales",
    shortDescription: "Informes técnicos de siniestros para la ART y respaldo legal de la empresa ante cada accidente.",
    seoTitle: "Investigación de Accidentes Laborales | SEHEA Mar del Plata",
    seoDescription: "Informes técnicos de siniestros para la ART y respaldo legal de la empresa ante cada accidente en Mar del Plata y la Costa Atlántica.",
    whatIs: "Cuando ocurre un accidente, investigamos qué pasó y elaboramos el informe técnico para la ART, que también respalda legalmente a tu empresa.",
    whoNeedsIt: "Empresas que tuvieron un accidente o incidente laboral.",
    regulation: `Normativa aplicable: ${PENDING}`,
    deliverables: ["Informe técnico del siniestro para la ART", "Respaldo documental para la empresa", `Otros entregables: ${PENDING}`],
    steps: defaultSteps("Investigamos las causas del accidente en el lugar."),
    faqs: [
      ...commonFaqs("Investigación de Accidentes"),
      { q: "¿El informe sirve para la ART?", a: "Sí, elaboramos informes técnicos de siniestros para la ART." },
      { q: "¿Cuánto tardan en intervenir tras un accidente?", a: PENDING },
    ],
    related: ["capacitacion-del-personal", "gestion-integral-asesoramiento-legal", "auditorias-de-cumplimiento"],
  },
  {
    slug: "simulacros-de-evacuacion",
    icon: Siren,
    title: "Simulacros de Evacuación",
    shortDescription: "Ejecución y evaluación de simulacros con informe de resultados, según normativa vigente y requisitos de aseguradoras.",
    seoTitle: "Simulacros de Evacuación | SEHEA Mar del Plata y Costa Atlántica",
    seoDescription: "Ejecución y evaluación de simulacros de evacuación con informe de resultados, según normativa vigente y requisitos de aseguradoras.",
    whatIs: "Organizamos y evaluamos simulacros de evacuación en tu establecimiento y te entregamos un informe con los resultados.",
    whoNeedsIt: "Establecimientos que deben acreditar simulacros por normativa o por requisitos de su aseguradora.",
    regulation: `Normativa vigente y requisitos de aseguradoras. Detalle: ${PENDING}`,
    deliverables: ["Ejecución del simulacro", "Evaluación del simulacro", "Informe de resultados"],
    steps: defaultSteps("Coordinamos y ejecutamos el simulacro con tu personal."),
    faqs: [
      ...commonFaqs("Simulacros de Evacuación"),
      { q: "¿Entregan un informe?", a: "Sí, cada simulacro incluye informe de resultados." },
      { q: "¿Sirve para la aseguradora?", a: "Se realiza según normativa vigente y requisitos de aseguradoras." },
    ],
    related: ["proteccion-contra-incendios", "capacitacion-del-personal", "investigacion-de-accidentes"],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
