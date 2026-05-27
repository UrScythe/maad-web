export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  images?: string[];
  specs: string[];
}
// colocar mas fotos
export const products: Product[] = [
  {
    id: "steel-oak-table",
    name: "Videobooth 360",
    category: "Mobiliario",
    description: "Estructura robusta de acero industrial pulido combinada con una superficie de roble oscuro macizo seleccionado, terminada con sellador de grado industrial.",
    price: "$6000",
    image: "/images/table_furniture.png",
    images: [
      "/images/table_furniture.png",
      "/images/about_workshop.png",
      "/images/console_furniture.png"
    ],
    specs: ["Dimensiones: 220cm x 100cm x 75cm", "Estructura de acero: Tubo de 80mm x 80mm", "Madera: Roble envejecido de 40mm de espesor", "Peso: 110kg"]
  },
  {
    id: "maad-console-cabinet",
    name: "GABINETE CONSOLA MAAD",
    category: "Mobiliario",
    description: "Consola de acero inoxidable perforado y cepillado, con puertas magnéticas de cierre suave y estanterías interiores regulables.",
    price: "$1.850000",
    image: "/images/parrilla-empotrable.png",
    images: [
      "/images/parrilla-empotrable.png",
      "/images/console_furniture.png",
      "/images/about_workshop.png"
    ],
    specs: ["Dimensiones: 160cm x 45cm x 80cm",
      "Material: Acero inoxidable grado 304",
      "Acabado: Satinado cepillado horizontal",
      "Patrón de perforación: Hexagonal de 5mm"
    ]
  },
  {
    id: "helix-pendant-light",
    name: "LÁMPARA COLGANTE HELIX",
    category: "David Gei",
    description: "Luminaria lineal suspendida de diseño arquitectónico en aluminio anodizado negro mate con luces LED cálidas integradas de alto CRI.",
    price: "$800000",
    image: "/images/helix_lighting.png",
    specs: ["Longitud: 120cm", "Potencia: 2400 lúmenes", "Temperatura de color: 3000K (Blanco Cálido)", "Suspensión: Cables de acero inoxidable (ajustables)"]
  },
  {
    id: "axis-floor-lamp",
    name: "LÁMPARA TELESCÓPICA AXIS",
    category: "Iluminación",
    description: "Lámpara de pie industrial con sistema de contrapeso mecánico, brazo articulado y base de hormigón visto.",
    price: "$850",
    image: "/images/axis_lighting.png",
    specs: ["Altura Máxima: 210cm", "Alcance: Giro máximo de 150cm", "Peso de la base: Hormigón macizo de 25kg", "Socket: Cerámico E27, funda de latón vintage"]
  },
  {
    id: "voronoi-steel-panel",
    name: "ESCULTURA DE PARED VORONOI",
    category: "Decoración",
    description: "Panel decorativo de acero dulce de 3mm cortado con láser, con un patrón de diagrama Voronoi orgánico generado matemáticamente.",
    price: "$420",
    image: "/images/voronoi_decor.png",
    specs: ["Dimensiones: 120cm x 80cm", "Material: Acero laminado en caliente de 3mm", "Acabado: Acero natural con barniz transparente antioxidación", "Montaje: Soportes flotantes con separación de pared (20mm)"]
  },
  {
    id: "magnetic-organizer-bars",
    name: "SOPORTE MAGNÉTICO PARA LLAVES Y HERRAMIENTAS",
    category: "Decoración",
    description: "Barras organizadoras de acero inoxidable cepillado con potentes imanes de neodimio para un montaje minimalista en pared.",
    price: "$150",
    image: "/images/organizer_decor.png",
    specs: ["Juego: 3 barras de longitudes variables (20cm, 30cm, 40cm)", "Material: Acero inoxidable grado marino 316", "Fuerza magnética: 12kg de tracción por barra", "Montaje: Anclajes ocultos"]
  },
  {
    id: "chrono-exposed-clock",
    name: "RELOJ MECÁNICO KINETIC CHRONO",
    category: "Objetos",
    description: "Reloj mecánico de engranajes expuestos fabricado en latón y acero arenado, impulsado por un sistema de péndulos de gravedad.",
    price: "$1.200",
    image: "/images/clock_machine.png",
    specs: ["Diámetro: 50cm", "Materiales: Engranajes de latón macizo, marco de acero al carbono", "Funcionamiento: Impulsado por gravedad (requiere cuerda semanal)", "Escape: Mecánico tipo áncora (deadbeat)"]
  }
];
