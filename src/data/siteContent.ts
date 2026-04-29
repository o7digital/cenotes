export const siteContent = {
  brand: "Cenotes Puerto Morelos",
  subtitle: "Naturaleza, aventura y descanso en la Ruta de los Cenotes",
  heroTitle: "Experiencias auténticas entre selva, agua cristalina y Caribe",
  heroText:
    "Explora cenotes, habitaciones y actividades con una experiencia pensada para familias, parejas y grupos en Puerto Morelos.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "529991234567",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hola, me interesa reservar una experiencia en Cenotes Puerto Morelos. ¿Me comparten disponibilidad?",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "reservas@cenotespuertomorelos.mx",
  location: "Puerto Morelos, Quintana Roo",
  highlights: [
    "Acceso a cenotes naturales",
    "Opciones de hospedaje",
    "Actividades y tours personalizados",
  ],
  featuredMedia: {
    heroCenote: "/cenotes/photos/cenotes-photo-004.webp",
    heroRoom: "/habitaciones/photos/habitaciones-photo-012.webp",
    heroHorse: "/caballos/photos/caballos-photo-008.webp",
  },
} as const;

export const sectionCopy = {
  cenotes: {
    title: "Cenotes",
    description:
      "Pozas naturales para nadar, relajarte y vivir la selva con seguridad y buena organización.",
  },
  habitaciones: {
    title: "Habitaciones",
    description:
      "Espacios cómodos para descansar cerca de la naturaleza y planear tu escapada en Puerto Morelos.",
  },
  caballos: {
    title: "Caballos",
    description:
      "Recorridos y convivencia al aire libre para complementar tu visita con una experiencia diferente.",
  },
} as const;

export const packages = [
  {
    name: "Cenote Day Pass",
    details: "Acceso a cenote + zonas de descanso",
    price: "Desde $450 MXN / persona",
  },
  {
    name: "Escapada Cenote + Habitación",
    details: "Experiencia de cenote + 1 noche",
    price: "Desde $1,850 MXN / pareja",
  },
  {
    name: "Paquete Grupo Privado",
    details: "Cenote, actividades y atención personalizada",
    price: "Cotización por WhatsApp",
  },
] as const;
