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
    price: "$670",
    //originalPrice: "$800",
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    images: [
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg"
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
    id: "lámpara fragmentada",
    name: "LÁMPARA FRAGMENTADA",
    category: "Decoración",
    description: "La MAAD Fragmenta es una lámpara decorativa de diseño contemporáneo fabricada en metal con cortes geométricos inspirados en formas fragmentadas. Su estructura permite que la luz proyecte patrones únicos sobre paredes y superficies, creando una atmósfera cálida, elegante y moderna. Ideal para espacios interiores y exteriores",
    price: "$50",
    soon: true,
    image: "/images/20260604_180819.jpg",
    images: [
      "/images/20260604_180819.jpg",
      "/images/20260603_224139.jpg",
      "/images/20260604_180718.jpg"
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
    name: "LÁMPARA COLGANTE SEMIINDUSTRIAL",
    category: "Decoración",
    description: "Luminaria lineal suspendida de diseño arquitectónico en aluminio anodizado negro mate con luces LED cálidas integradas de alto CRI.",
    price: "$60",
    soon: true,
    image: "/images/20260519_164519.jpg",
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
    description: "Tablero electrónico de ecuavoley con control remoto, construido con materiales de alta resistencia, diseñado para uso en interiores y exteriores.",
    price: "$680",
    soon: true,
    originalPrice: "$850",
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
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
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    specs: ["Dimensiones: 120cm x 80cm", "Material: Acero laminado en caliente de 3mm", "Acabado: Acero natural con barniz transparente antioxidación", "Montaje: Soportes flotantes con separación de pared (20mm)"]
  },
  // ======= RUTAS 593 =======
  {
    id: "rutas593-ruta-ciclismo",
    name: "MAPA 3D RUTA CICLISMO",
    category: "Rutas 593",
    soon: true,
    description: "Relieve topográfico 3D de tu ruta de ciclismo favorita, generado a partir de datos GPS/Strava. Cada curva, ascenso y descenso capturado en detalle milimétrico. El recuerdo perfecto de tu aventura sobre ruedas.",
    price: "Consultar",
    image: "/images/rutas593_ruta.jpg",
    images: ["/images/rutas593_ruta.jpg"],
    specs: [
      "Tamaño estándar: 20cm x 20cm x 3cm",
      "Material: PLA de alta resistencia",
      "Acabado: Matte blanco arena o negro",
      "Personalizable con nombre de ruta y distancia",
      "Compatible con archivos GPX o Strava",
      "Base incluida para exhibición",
      "Entrega en 5-7 días hábiles",
    ]
  },
  {
    id: "rutas593-montana",
    name: "RELIEVE 3D MONTAÑA",
    category: "Rutas 593",
    soon: true,
    description: "Mapa en relieve 3D de volcanes, cordilleras y cimas de Ecuador. Detalle topográfico de alta resolución con curvas de nivel impresas. Ideal como pieza decorativa o regalo para montañistas y exploradores.",
    price: "Consultar",
    image: "/images/rutas593_montana.jpg",
    images: ["/images/rutas593_montana.jpg"],
    specs: [
      "Tamaño estándar: 25cm x 25cm x 5cm",
      "Alta resolución topográfica (30m DEM)",
      "Material: PLA premium o resina",
      "Acabado disponible: negro antracita o blanco",
      "Volcanes populares: Cotopaxi, Chimborazo, Quilotoa",
      "Personalizable con cualquier zona geográfica",
      "Incluye base de exhibición",
    ]
  },
  {
    id: "rutas593-natacion",
    name: "MAPA 3D RUTA NATACIÓN",
    category: "Rutas 593",
    soon: true,
    description: "Relieve topográfico 3D de lagunas, embalses o ríos donde practicas natación en aguas abiertas. El agua se imprime en un llamativo azul translúcido que contrasta con el relieve blanco circundante.",
    price: "Consultar",
    image: "/images/rutas593_natacion.jpg",
    images: ["/images/rutas593_natacion.jpg"],
    specs: [
      "Tamaño estándar: 20cm x 20cm x 3cm",
      "Zona acuática en azul translúcido destacado",
      "Material: PLA bicolor de alta precisión",
      "Ruta de natación marcada en el relieve",
      "Personalizable con nombre de cuerpo de agua",
      "Compatible con coordenadas GPS o nombre del lugar",
      "Incluye base de exhibición y tarjeta de datos",
    ]
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
