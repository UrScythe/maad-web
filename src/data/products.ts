export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  soon?: boolean;
  image: string;
  images?: string[];
  specs: string[];
}
// colocar mas fotos
export const products: Product[] = [
  {
    id: "steel-oak-table",
    name: "Videobooth 360",
    category: "Estructuras",
    soon: true,
    description: "Plataforma profesional para experiencias de video 360°.",
    price: "$540",
    originalPrice: "$600",
    image: "/images/table_furniture.png",
    images: [
      "/images/table_furniture.png",
      "/images/about_workshop.png",
      "/images/console_furniture.png"
    ],
    specs: [
      "Capacidad para hasta 3 personas",
      "Estructura de acero reforzado",
      "Diseño premium y desmontable",
      "Luces LED RGB integradas",
      "Construcción de base en acero antideslizante",
      "Fabricación nacional",
      "Ideal para eventos, marketing y entretenimiento",
      "Incluye: plataforma, brazo, iluminación, control remoto"
    ]
  },
  {
    id: "lámpara fragmenta",
    name: "lámpara fragmenta",
    category: "Decoración",
    description: "La MAAD Fragmenta es una lámpara decorativa de diseño contemporáneo fabricada en metal con cortes geométricos inspirados en formas fragmentadas. Su estructura permite que la luz proyecte patrones únicos sobre paredes y superficies, creando una atmósfera cálida, elegante y moderna. Ideal para espacios interiores y exteriores",
    price: "$50",
    soon: true,
    image: "/images/20260604_180718.jpg",
    images: [
      "/images/20260603_224139.jpg",
      "/images/20260604_180819.jpg",
      
    ],
    specs: ["Dimensiones: 160cm x 45cm x 80cm",
      "Fabricación metálica de alta resistencia.",
      "Diseño exclusivo de cortes geométricos.",
      "Proyección decorativa de luz y sombras.",
      "Compatible con iluminación LED de bajo consumo.",
      "Acabado personalizable (pintura electrostática, óxido, etc.)",
      "PERSONALIZABLE.",

    ]
  },
  {
    id: "helix-pendant-light",
    name: "LÁMPARA COLGANTE HELIX",
    category: "Decoración",
    description: "Luminaria lineal suspendida de diseño arquitectónico en aluminio anodizado negro mate con luces LED cálidas integradas de alto CRI.",
    price: "$60",
    soon: true,
     images: [
      "/images/20260519_164519.jpg",
      "/images/helix-1.png",
      "/images/helix-2.png"
    ],
    specs: ["Longitud: 120cm", "Potencia: 2400 lúmenes", "Temperatura de color: 3000K (Blanco Cálido)", "Suspensión: Cables de acero inoxidable (ajustables)"]
  },
  {
    id: "marcador-ecuavoley",
    name: "Marcador Electrónico de Ecuavóley",
    category: "Tableros deportivos",
    description: "Lámpara de pie industrial con sistema de contrapeso mecánico, brazo articulado y base de hormigón visto.",
    price: "$680",
    soon: true,
    originalPrice: "$850",
    image: "/images/axis_lighting.png",
    specs: ["Altura Máxima: 210cm", "Alcance: Giro máximo de 150cm",
      "Peso de la base: Hormigón macizo de 25kg",
      "Socket: Cerámico E27, funda de latón vintage"]
  },
  {
    id: "Soporte placa removible",
    name: "MAAD DesClic",
    category: "Accesorios",
    description: "El MAAD QuickPlate es un soporte para placa vehicular removible diseñado para ofrecer una instalación segura, práctica y de rápida extracción. Fabricado mediante impresión 3D de alta precisión, combina resistencia y funcionalidad en un diseño compacto y moderno.",
    price: "$15",
    soon: true,
    image: "/images/voronoi_decor.png",
    specs: ["Dimensiones: 120cm x 80cm", "Material: Acero laminado en caliente de 3mm", "Acabado: Acero natural con barniz transparente antioxidación", "Montaje: Soportes flotantes con separación de pared (20mm)"]
  },
  // {
  //   id: "magnetic-organizer-bars",
  //   name: "SOPORTE MAGNÉTICO PARA LLAVES Y HERRAMIENTAS",
  //   category: "Decoración",
  //soon: true,
  //   description: "Barras organizadoras de acero inoxidable cepillado con potentes imanes de neodimio para un montaje minimalista en pared.",
  //   price: "$150",
  //   image: "/images/organizer_decor.png",
  //   specs: ["Juego: 3 barras de longitudes variables (20cm, 30cm, 40cm)", "Material: Acero inoxidable grado marino 316", "Fuerza magnética: 12kg de tracción por barra", "Montaje: Anclajes ocultos"]
  // },
  // {
  //   id: "chrono-exposed-clock",
  //   name: "RELOJ MECÁNICO KINETIC CHRONO",
  //   category: "Objetos",
  //   description: "Reloj mecánico de engranajes expuestos fabricado en latón y acero arenado, impulsado por un sistema de péndulos de gravedad.",
  //   price: "$1.200",
  //   soon: true,
  //  image: "/images/clock_machine.png",
  //  specs: ["Diámetro: 50cm", "Materiales: Engranajes de latón macizo, marco de acero al carbono", "Funcionamiento: Impulsado por gravedad (requiere cuerda semanal)", "Escape: Mecánico tipo áncora (deadbeat)"]
  // }
];
