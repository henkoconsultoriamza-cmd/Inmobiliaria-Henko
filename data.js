// ============================================================
// DATA.JS — Datos locales: propiedades, zonas, testimonios
// Reemplazar con API/base de datos real cuando esté disponible
// ============================================================

const PROPIEDADES = [
  {
    id: "prop-001",
    titulo: "Casa moderna con jardín y cochera doble",
    tipoOperacion: "venta",
    tipoPropiedad: "casa",
    precio: 185000,
    moneda: "USD",
    expensas: null,
    localidad: "Mendoza Capital",
    barrio: "Palmares",
    direccionAproximada: "Zona Palmares, Mendoza Capital",
    ambientes: 5,
    dormitorios: 3,
    banos: 2,
    cocheras: 2,
    superficieCubierta: 180,
    superficieTotal: 450,
    amenities: ["Jardín", "Parrilla", "Lavadero", "Garage doble"],
    descripcion: "Amplia casa de diseño contemporáneo con excelentes terminaciones. Living-comedor integrado, cocina equipada, dormitorio principal en suite. Jardín con parrilla y amplio espacio verde. Garage para dos vehículos. Ideal para familia.",
    imagenes: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Valentina Torres",
    destacado: true,
    linkDetalle: "propiedad.html?id=prop-001"
  },
  {
    id: "prop-002",
    titulo: "Departamento 2 ambientes — Edificio con amenities",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    precio: 180000,
    moneda: "ARS",
    expensas: 35000,
    localidad: "Godoy Cruz",
    barrio: "Centro",
    direccionAproximada: "Área central de Godoy Cruz",
    ambientes: 2,
    dormitorios: 1,
    banos: 1,
    cocheras: 1,
    superficieCubierta: 52,
    superficieTotal: 52,
    amenities: ["Pileta", "Gimnasio", "SUM", "Seguridad 24hs"],
    descripcion: "Departamento luminoso en edificio premium. Cocina integrada al living, dormitorio en suite, balcón. Edificio con pileta, gimnasio y SUM. Cochera cubierta incluida. A metros del centro comercial.",
    imagenes: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Martín Olivera",
    destacado: true,
    linkDetalle: "propiedad.html?id=prop-002"
  },
  {
    id: "prop-003",
    titulo: "Casa en country con vista a la montaña",
    tipoOperacion: "venta",
    tipoPropiedad: "casa",
    precio: 320000,
    moneda: "USD",
    expensas: 45000,
    localidad: "Luján de Cuyo",
    barrio: "Chacras de Coria",
    direccionAproximada: "Country privado, Chacras de Coria",
    ambientes: 7,
    dormitorios: 4,
    banos: 3,
    cocheras: 2,
    superficieCubierta: 280,
    superficieTotal: 800,
    amenities: ["Pileta propia", "Jardín amplio", "Parrilla", "Quincho", "Seguridad privada", "Vista montaña"],
    descripcion: "Espectacular propiedad en country de alta categoría. Vista panorámica a la cordillera. Amplio living con doble altura, cocina gourmet, cuatro dormitorios con vestidor. Pileta propia, quincho y jardín perfectamente mantenido.",
    imagenes: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Valentina Torres",
    destacado: true,
    linkDetalle: "propiedad.html?id=prop-003"
  },
  {
    id: "prop-004",
    titulo: "Local comercial en corredor gastronómico",
    tipoOperacion: "alquiler",
    tipoPropiedad: "local",
    precio: 280000,
    moneda: "ARS",
    expensas: 0,
    localidad: "Mendoza Capital",
    barrio: "Arístides Villanueva",
    direccionAproximada: "Corredor gastronómico Arístides Villanueva",
    ambientes: 1,
    dormitorios: 0,
    banos: 1,
    cocheras: 0,
    superficieCubierta: 85,
    superficieTotal: 85,
    amenities: ["Frente amplio", "Depósito", "Baño independiente", "Instalación eléctrica reforzada"],
    descripcion: "Local en pleno corredor gastronómico y cultural. Frente de 8 metros, amplias vidrieras, depósito y baño independiente. Instalación eléctrica reforzada. Excelente visibilidad y flujo peatonal.",
    imagenes: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Martín Olivera",
    destacado: false,
    linkDetalle: "propiedad.html?id=prop-004"
  },
  {
    id: "prop-005",
    titulo: "Terreno en zona de expansión — Uso residencial",
    tipoOperacion: "venta",
    tipoPropiedad: "terreno",
    precio: 45000,
    moneda: "USD",
    expensas: null,
    localidad: "Maipú",
    barrio: "Luzuriaga",
    direccionAproximada: "Zona norte de Luzuriaga, Maipú",
    ambientes: 0,
    dormitorios: 0,
    banos: 0,
    cocheras: 0,
    superficieCubierta: 0,
    superficieTotal: 600,
    amenities: ["Escritura disponible", "Servicios en esquina", "Zona residencial consolidada"],
    descripcion: "Terreno en esquina con todos los servicios: agua, luz, gas y cloacas. Zona residencial en pleno crecimiento. Excelente para construir vivienda. Planos municipales disponibles.",
    imagenes: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Valentina Torres",
    destacado: false,
    linkDetalle: "propiedad.html?id=prop-005"
  },
  {
    id: "prop-006",
    titulo: "Departamento 3 ambientes con terraza exclusiva",
    tipoOperacion: "venta",
    tipoPropiedad: "departamento",
    precio: 95000,
    moneda: "USD",
    expensas: 28000,
    localidad: "Mendoza Capital",
    barrio: "5ta Sección",
    direccionAproximada: "Quinta Sección, Mendoza Capital",
    ambientes: 3,
    dormitorios: 2,
    banos: 2,
    cocheras: 1,
    superficieCubierta: 90,
    superficieTotal: 130,
    amenities: ["Terraza propia", "Pileta", "Gimnasio", "Seguridad"],
    descripcion: "Departamento moderno con terraza privada de 40m². Living-comedor con acceso directo a terraza, cocina integrada, dos dormitorios en suite. Edificio con pileta, gimnasio y vigilancia. Piso 8, vistas panorámicas.",
    imagenes: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"
    ],
    video: null,
    tourVirtual: null,
    disponible: true,
    asesorAsignado: "Martín Olivera",
    destacado: true,
    linkDetalle: "propiedad.html?id=prop-006"
  }
];

const ZONAS = [
  {
    nombre: "Mendoza Capital",
    descripcion: "El centro urbano de la provincia, con toda la infraestructura, cultura y gastronomía de primer nivel.",
    propiedadesDisponibles: 24,
    tipo: "urbana",
    imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80"
  },
  {
    nombre: "Chacras de Coria",
    descripcion: "Zona premium de Luján de Cuyo. Propiedades exclusivas rodeadas de viñedos y vista a la cordillera.",
    propiedadesDisponibles: 12,
    tipo: "premium",
    imagen: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80"
  },
  {
    nombre: "Godoy Cruz",
    descripcion: "Departamento de alta densidad residencial y comercial, con excelente conectividad y servicios.",
    propiedadesDisponibles: 18,
    tipo: "residencial",
    imagen: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80"
  },
  {
    nombre: "Maipú",
    descripcion: "Zona de gran crecimiento, con terrenos y casas a precios accesibles y excelentes vías de acceso.",
    propiedadesDisponibles: 15,
    tipo: "expansion",
    imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
  },
  {
    nombre: "Luján de Cuyo",
    descripcion: "La tierra del vino. Propiedades exclusivas, countries privados y estilo de vida premium.",
    propiedadesDisponibles: 9,
    tipo: "premium",
    imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    nombre: "Guaymallén",
    descripcion: "El departamento más poblado de Mendoza. Amplia oferta residencial y comercial para todas las necesidades.",
    propiedadesDisponibles: 21,
    tipo: "residencial",
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
  }
];

const TESTIMONIOS = [
  {
    nombre: "Carla Méndez",
    operacion: "Compra",
    texto: "Nos acompañaron desde la búsqueda hasta la firma. La atención fue clara, rápida y profesional. En menos de 60 días encontramos la casa de nuestros sueños.",
    valoracion: 5
  },
  {
    nombre: "Ricardo Fontana",
    operacion: "Venta",
    texto: "Vendí mi propiedad en tiempo récord y al precio que esperaba. El equipo manejó todo: fotos, publicaciones, visitas y negociación. Excelente experiencia.",
    valoracion: 5
  },
  {
    nombre: "Florencia Agüero",
    operacion: "Alquiler",
    texto: "Me orientaron en cada paso, explicaron los requisitos claramente y coordinaron todo para que el ingreso fuera sin complicaciones. Muy recomendables.",
    valoracion: 5
  },
  {
    nombre: "Sebastián Morales",
    operacion: "Tasación",
    texto: "Solicité la tasación de mi inmueble y recibí un informe detallado y honesto. Me ayudaron a entender el mercado real para tomar la mejor decisión.",
    valoracion: 5
  }
];

// Config global — reemplazar con datos reales
const CONFIG = {
  webhook: "https://tu-webhook-aqui.com/leads",   // ← REEMPLAZAR
  whatsapp: "5492610000000",                        // ← REEMPLAZAR
  email: "info@buhonegro.com.ar",                   // ← REEMPLAZAR
  telefono: "+54 261 000-0000",                     // ← REEMPLAZAR
  direccion: "Mendoza, Argentina",                  // ← REEMPLAZAR
  horarios: "Lun–Vie 9–18hs · Sáb 9–13hs",
  nombre: "Buhonegro Propiedades",
  slogan: "Más simple. Más inteligente. Más tuyo.",
  redes: {
    instagram: "#",
    facebook: "#",
    linkedin: "#"
  }
};
