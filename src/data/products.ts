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
    id: "videobooth-360",
    name: "Videobooth 360",
    category: "Estructuras",
    soon: true,
    description: "Plataforma para experiencias de video 360°.",
    price: "$700",
    //originalPrice: "$800",
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    images: [
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg"
    ],
    specs: [
      //"Capacidad para hasta 3 personas",
      // "Estructura de acero reforzado",
      // "Diseño premium y desmontable",
      // "Luces LED RGB integradas",
      // "Construcción de base en acero antideslizante",
      // "Fabricación nacional",
      // "Ideal para eventos, marketing y entretenimiento",
      // "Incluye: plataforma, brazo, iluminación, control remoto"
    ]
  },
  {
    id: "lampara-cortada-laser",
    name: "LÁMPARA CORTADA A LÁSER",
    category: "Decoración",
    description: "Es una lámpara decorativa de diseño contemporáneo fabricada en metal con cortes geométricos inspirados en formas triangulares. Su estructura permite que la luz proyecte patrones únicos sobre paredes y superficies, creando una atmósfera cálida, elegante y moderna. Ideal para espacios interiores y exteriores",
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
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    images: [
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
      "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg"
    ],
    specs: ["Longitud: Personalizable", "Temperatura de color: 3000K (Blanco Cálido)"]
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
    specs: ["Altura: ", "Ancho:",]
    //"Peso de la base: Hormigón macizo de 25kg",
    //"Socket: Cerámico E27, funda de latón vintage"]
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





  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // ======= RUTAS 593 =======
  {
    id: "rutas593-ruta-CALLES",
    name: "MAPA 3D RUTA CALLES",
    category: "Rutas 593",
    soon: true,
    description: "Inmortaliza tus kilómetros en la ciudad. Este diseño paramétrico captura la compleja red de calles, intersecciones y cuerpos de agua, superponiendo tu recorrido exacto en un color de alto contraste. Perfecto para transformar esos archivos GPX de tus maratones, rutas de ciclismo urbano o entrenamientos diarios en una pieza visual clara y moderna.",
    price: "Consultar",
    image: "/images/20260822_094044.jpg",
    images: ["/images/20260822_094044.jpg", "/images/20260822_082636(1).jpg", "/images/20260825_131145.jpg", "/images/IMG-20260829-WA0011.jpg", "/images/IMG-20260829-WA0020-EDIT.jpg"],
    specs: [
      "Tamaño estándar: 10cm x 10cm x 3mm",
      "Material: PLA",
      "Acabado: PERSONALIZABLE",
      "Personalizable con nombre de ruta y distancia",
      "Compatible con archivos GPX, Strava, Wikiloc y otros",
      //"Base incluida para exhibición",
      "Entrega en 2-5 días hábiles",
    ]
  },
  {
    id: "rutas593-MONTAÑA",
    name: "MAPA 3D RUTA MONTAÑA",
    category: "Rutas 593",
    soon: true,
    description: "Mapa en relieve 3D de volcanes, cordilleras y cimas de Ecuador. Detalle topográfico de alta resolución con curvas de nivel impresas. Ideal como pieza decorativa o regalo para montañistas y exploradores.",
    price: "Consultar",
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    images: ["/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg"],
    specs: [
      "Tamaño estándar: 10cm x 10cm",
      "Alta resolución topográfica",
      "Material: PLA",
      "Acabado: PERSONALIZABLE",
      "Volcanes populares: Cotopaxi, Chimborazo, Quilotoa",
      "Personalizable con cualquier zona geográfica",
      //"Incluye base de exhibición",
    ]
  },
  {
    id: "rutas593-Ruta-Gigante",
    name: "MAPA 3D RUTA GIGANTE",
    category: "Rutas 593",
    soon: true,
    description: "Revive cada ascenso y descenso de tus rutas de mountain bike o trail. Este modelo tridimensional extrae los datos de elevación de tus tracks de Strava o Wikiloc para materializar la topografía exacta del terreno, desde los picos montañosos hasta la costa. Una representación táctil que no solo muestra por dónde fuiste, sino el verdadero desnivel y esfuerzo que te costó conquistar la montaña.",
    price: "Consultar",
    image: "/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg",
    images: ["/images/Gemini_Generated_Image_7o6vu07o6vu07o6v.jpg"],
    specs: [
      "Tamaño estándar: PERSONALIZABLE",
      "Material: PLA",
      "Ruta marcada en el relieve",
      "Personalizable",
      "Compatible con coordenadas GPS o nombre del lugar",
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
