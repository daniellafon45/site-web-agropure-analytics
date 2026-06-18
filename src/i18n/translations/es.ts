import type { Translations } from "../types";
import { en } from "./en";

export const es: Translations = {
  ...en,
  meta: {
    ...en.meta,
    homeTitle: "AgroPure Analytics, Menos estrés. Menos costes. Más rendimiento.",
    homeDescription:
      "Plataformas nacionales, apps para agricultores y scoring crediticio: AgroPure Analytics convierte datos agrícolas en decisiones en África, Canadá y Estados Unidos.",
    privacyTitle: "Política de privacidad, AgroPure Analytics",
    privacyDescription: "Cómo AgroPure Analytics recopila, usa y protege su información personal.",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "La página que busca no existe o ha sido movida.",
    errorTitle: "No se pudo cargar esta página",
    errorBody: "Ocurrió un problema de nuestro lado.",
    backHome: "Volver al inicio",
    retry: "Reintentar",
  },
  nav: {
    sectors: "Sectores",
    features: "Funcionalidades",
    delivery: "Despliegue",
    markets: "Mercados mundiales",
    cases: "Casos de estudio",
    blog: "Blog",
    contact: "Contacto",
    requestDemo: "Solicitar demo",
    letsTalk: "Solicitar demo",
    demoShort: "Demo",
    openMenu: "Abrir menú",
    menu: "Menú",
    language: "Idioma",
    themeLight: "Cambiar a modo claro",
    themeDark: "Cambiar a modo oscuro",
  },
  footer: {
    ...en.footer,
    sectorsTitle: "Sectores",
    companyTitle: "Empresa",
    privacy: "Política de privacidad",
    tagline: "Datos agrícolas, convertidos en acción.",
    copyright: "© 2026 AgroPure Analytics. Todos los derechos reservados.",
    sectors: [
      { label: "Gobiernos", href: "#gouvernement" },
      { label: "Agricultores", href: "#agriculteur" },
      { label: "Cooperativas y ONG", href: "#cooperative" },
      { label: "Seguros", href: "#assurance" },
    ],
  },
  consent: {
    ariaLabel: "Consentimiento de recopilación de datos",
    message: "Usamos cookies esenciales para recordar sus preferencias y solo activamos analítica con su consentimiento.",
    accept: "Aceptar",
    reject: "Rechazar",
    learnMore: "Política de privacidad",
  },
  home: {
    ...en.home,
    hero: {
      title: "Menos estrés. Menos costes. Más rendimiento.",
      subtitle:
        "Proteja sus cultivos y anticipe su comportamiento: centralice sus datos en instrucciones claras para actuar a tiempo.",
      ctaPrimary: "Solicitar demo",
    },
    intro: {
      label: "Nuestra misión",
      text: "Ofrecer herramientas de decisión potentes impulsadas por IA que convierten volúmenes de datos agrícolas sin explotar en acciones claras, optimizar rendimientos con recursos más escasos, decidir más rápido y reducir el estrés diario.",
    },
    industries: {
      eyebrow: "Nuestros sectores",
      title:
        "De las políticas públicas a las explotaciones, de las cadenas a los aseguradores: AgroPure adapta sus herramientas a cada entorno de decisión agrícola.",
      learnMore: "Saber más",
      items: [
        {
          id: "gouvernement",
          cardTitle: "Gobiernos",
          desc: "Datos dispersos e informes de campo con meses de retraso: decide a ciegas. AgroPure unifica parcelas, cultivos y agua en un panel nacional — para actuar a tiempo, no cuando la temporada ya pasó.",
        },
        {
          id: "agriculteur",
          cardTitle: "Agricultores",
          desc: "Sin datos claros por parcela, cada día cuenta en su contra. Diagnósticos por foto, alertas y recomendaciones simples: proteja cultivos, reduzca insumos y decida antes de que el riesgo se extienda.",
        },
        {
          id: "cooperative",
          cardTitle: "Cooperativas y ONG",
          desc: "Mercados, flujos y trazabilidad invisibles erosionan los ingresos. Herramientas de comercialización, seguimiento de trashumancia y trazabilidad integral para asegurar filieras y ganar confianza.",
        },
        {
          id: "assurance",
          cardTitle: "Seguros",
          desc: "Suscribir sin datos de campo fiables es tarifar e indemnizar a ojo. AgroPure actualiza indicadores por explotación en continuo — para reducir errores, limitar fraude y acelerar cada decisión.",
        },
      ],
    },
    integrations: {
      title: "Diseñados para integrarse fácilmente con su parque",
      description:
        "¿Le preocupan meses de integración TI o tener que cambiar de equipo? AgroPure se conecta a los tractores y drones que ya tiene, sin silos entre marcas ni reingresos manuales.",
    },
    features: {
      title: "La agricultura es gestionar lo vivo, que cambia constantemente",
      description:
        "De media, un agricultor necesita 10 años para optimizar sus rendimientos: un plazo que ni agricultores ni gestores pueden permitirse. Cada temporada, clima, suelos y plagas reescriben las reglas. AgroPure procesa sus datos de satélite, campo y sensores para entregar instrucciones claras antes de esos cambios, hacer sus rendimientos más predecibles, anticipar riesgos y decidir en el momento adecuado.",
      learnMore: "Saber más",
      categories: [
        {
          id: "national-data",
          label: "Pilotaje nacional y datos",
          tools: [
            {
              id: "national-platform",
              label: "Plataforma nacional agrícola",
              description:
                "Centralice parcelas, cultivos y sensores para gestionar la agricultura a escala nacional en tiempo real.",
              stats: [
                { value: "+15 %", label: "rendimiento proyectado en parcelas en riesgo" },
                { value: "-60 %", label: "pérdidas por decisiones tardías" },
                { value: "126", label: "parcelas monitoreadas en tiempo real" },
              ],
            },
            {
              id: "survey-digitization",
              label: "Digitalización de encuestas",
              description:
                "Sustituya formularios en papel por encuestas de campo digitales, sincronizadas y auditables.",
              stats: [
                { value: "-70 %", label: "coste de recolección por encuesta" },
                { value: "3×", label: "ROI decisional de políticas públicas" },
                { value: "99 %", label: "datos accionables sin reingreso" },
              ],
            },
            {
              id: "traceability",
              label: "Trazabilidad",
              description:
                "Rastree cada lote desde la parcela hasta el cliente para asegurar las cadenas y acelerar auditorías.",
              stats: [
                { value: "-45 %", label: "pérdidas en retirada de producto" },
                { value: "+18 %", label: "prima de cadena trazable" },
                { value: "100 %", label: "lotes certificados parcela → cliente" },
              ],
            },
          ],
        },
        {
          id: "agronomic-monitoring",
          label: "Vigilancia agronómica",
          tools: [
            {
              id: "water-reservoirs",
              label: "Seguimiento de embalses",
              description:
                "Supervise reservas y niveles de agua para anticipar sequías y reducir pérdidas.",
              stats: [
                { value: "-35 %", label: "pérdidas de agua no detectadas" },
                { value: "+28 %", label: "rendimiento preservado en sequía" },
                { value: "< 15 min", label: "alerta antes de corte de riego" },
              ],
            },
            {
              id: "crop-practices",
              label: "Dominio de prácticas culturales",
              description:
                "Mida la adopción de buenas prácticas y oriente las políticas de acompañamiento.",
              stats: [
                { value: "+15 %", label: "rendimiento proyectado tras acompañamiento" },
                { value: "+42 %", label: "adopción de prácticas de alto impacto" },
                { value: "-30 %", label: "brechas de rendimiento entre regiones" },
              ],
            },
            {
              id: "stone-cordons",
              label: "Modelización de cordones de piedra",
              description:
                "Cartografíe y modele cordones de piedra para conservación de suelos y erosión.",
              stats: [
                { value: "-87 %", label: "erosión en sitios equipados" },
                { value: "+5.8 ha", label: "superficie restaurada por proyecto tipo" },
                { value: "-50 %", label: "coste de relevamiento de campo" },
              ],
            },
          ],
        },
        {
          id: "field-intelligence",
          label: "Inteligencia de campo",
          tools: [
            {
              id: "pest-diagnostic",
              label: "Diagnóstico de plagas",
              description:
                "Identifique plagas y enfermedades por foto para actuar antes de pérdidas de rendimiento.",
              stats: [
                { value: "+18 %", label: "rendimiento preservado vs no tratado" },
                { value: "-40 %", label: "pérdidas por plagas evitadas" },
                { value: "94 %", label: "diagnósticos que orientan el tratamiento" },
              ],
            },
            {
              id: "ag-calculator",
              label: "Calculadora agrícola",
              description:
                "Simule dosis, costes y escenarios sin hojas de cálculo ni experiencia técnica.",
              stats: [
                { value: "-25 %", label: "coste de insumos por hectárea" },
                { value: "+15 %", label: "margen proyectado cultivo piloto" },
                { value: "< 2 min", label: "para un plan de fertilización rentable" },
              ],
            },
            {
              id: "ag-assistant",
              label: "Asistente agrícola",
              description:
                "Reciba instrucciones personalizadas según sus datos de parcela, clima e historial.",
              stats: [
                { value: "+35 %", label: "decisiones rentables a tiempo" },
                { value: "-60 %", label: "pérdidas evitables por retraso" },
                { value: "92 %", label: "parcelas bajo seguimiento activo" },
              ],
            },
          ],
        },
        {
          id: "market-chain",
          label: "Mercado y cadena de valor",
          tools: [
            {
              id: "market-tools",
              label: "Herramientas de mercado",
              description:
                "Siga la evolución de precios y mercados locales para vender en el momento adecuado.",
              stats: [
                { value: "+15 %", label: "ingreso proyectado ventana óptima" },
                { value: "+12 %", label: "ingreso medio en la venta" },
                { value: "48 h", label: "de ventaja sobre subidas de precio" },
              ],
            },
            {
              id: "ag-logistics",
              label: "Logística agrícola",
              description:
                "Optimice recogida, transporte y almacenamiento para reducir pérdidas post-cosecha.",
              stats: [
                { value: "-32 %", label: "pérdidas logísticas post-cosecha" },
                { value: "+22 %", label: "margen logístico rutas optimizadas" },
                { value: "-45 %", label: "coste de inmovilización de cosecha" },
              ],
            },
            {
              id: "harvest-tokenization",
              label: "Tokenización de la cosecha",
              description:
                "Asegure y fraccione el valor de las cosechas para financiar y trazar flujos.",
              stats: [
                { value: "+40 %", label: "productores con acceso a financiación" },
                { value: "-55 %", label: "plazo desbloqueo tesorería cosecha" },
                { value: "+15 %", label: "ingreso neto proyectado post-tokenización" },
              ],
            },
          ],
        },
      ],
    },
    delivery: {
      ...en.home.delivery,
      title: "Elija el modelo de integración adecuado",
      subtitle: "API, marca blanca o aplicación web: nos adaptamos a su infraestructura.",
      columns: en.home.delivery.columns.map((col, i) => ({
        ...col,
        title: ["Integración API", "Soluciones white-label", "Aplicación web y móvil"][i],
        description: ["Conecte AgroPure a sus sistemas.", "Despliegue bajo su marca.", "Acceso inmediato, sin instalación."][i],
      })),
    },
    trust: { title: "Respaldados por el ecosistema de innovación canadiense" },
    caseStudies: {
      ...en.home.caseStudies,
      eyebrow: "Casos de estudio",
      title: "Resultados medibles en el campo",
      items: en.home.caseStudies.items.map((item, i) => ({
        ...item,
        tag: "Caso de estudio",
        title: [
          "Plataforma nacional de monitoreo de cultivos",
          "Diagnóstico fotográfico de plagas en tiempo real",
          "Scoring crediticio agrícola para aseguradoras",
        ][i],
        cta: "Leer más",
      })),
    },
    commodityMarkets: {
      ...en.home.commodityMarkets,
      eyebrow: "Mercados mundiales",
      title: "Precios de materias primas e insumos agrícolas",
      subtitle: "Siga cereales, fertilizantes y energía para anticipar costos de producción.",
      ctaTitle: "¿Quiere aumentar el valor de sus activos y su stock agrícola?",
      ctaButton: "Contáctenos",
      asOf: "Al",
      sourceLive: "Datos USDA / EIA vía GrainBrief",
      sourceMock: "Datos indicativos (demo)",
      disclaimer:
        "Precios indicativos a título informativo, en USD. Los mercados locales pueden diferir. Fuentes: USDA AMS, EIA, FAO FPMA.",
      fpmaLink: "Analizar precios en FAO FPMA",
      loading: "Cargando precios…",
      scrollUp: "Productos anteriores",
      scrollDown: "Productos siguientes",
      products: {
        wheat: "Trigo",
        corn: "Maíz",
        soy: "Soja",
        sorghum: "Sorgo",
        urea: "Urea",
        dap: "DAP",
        potash: "Potasa",
        ammonia: "Amoníaco",
        diesel: "Diésel",
        natGas: "Gas natural",
      },
      tickers: {
        wheat: "TRIGO",
        corn: "MAÍZ",
        soy: "SOJA",
        sorghum: "SORGO",
        urea: "UREA",
        dap: "DAP",
        potash: "POTASA",
        ammonia: "NH3",
        diesel: "DIÉSEL",
        natGas: "GAS",
      },
    },
    contact: {
      ...en.home.contact,
      title: "Hablemos de su proyecto",
      subtitle: "Descubra cómo AgroPure Analytics transforma sus datos en decisiones concretas.",
      cta: "Planificar reunión",
      formTitle: "Describa su necesidad",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo",
      phone: "Teléfono",
      phonePlaceholder: "612 34 56 78",
      phoneCountryLabel: "Prefijo del país",
      company: "Empresa",
      website: "Sitio web",
      need: "Su necesidad",
      submit: "Enviar solicitud",
      submitting: "Enviando…",
      successTitle: "Mensaje enviado",
      successBody: "Nuestro equipo le contactará pronto.",
      privacyConsentBefore: "Acepto que mi información sea tratada según la",
      privacyConsentLink: "política de privacidad",
      privacyConsentAfter: ".",
      errors: {
        lastName: "El apellido es obligatorio.",
        firstName: "El nombre es obligatorio.",
        emailRequired: "El correo es obligatorio.",
        emailInvalid: "Correo inválido.",
        message: "Describa su necesidad.",
        messageTooLong: "Mensaje demasiado largo (máx. 5000 caracteres).",
        consentRequired: "Consentimiento requerido.",
      },
    },
    faq: {
      title: "Sus preguntas, respondidas",
      subtitle:
        "Respuestas claras sobre monitoreo nacional de cultivos, diagnóstico en campo, scoring crediticio y despliegue, para equipos en África, Canadá y Estados Unidos. Para cualquier otra pregunta, contáctenos: estaremos encantados de intercambiar con usted, responder a sus dudas y hablar de su proyecto.",
      footerBefore: "¿Sigue evaluando AgroPure para su organización?",
      footerLink: "Solicitar una demo personalizada",
      footerAfter: ", nuestro equipo responde en un día hábil.",
      items: [
        {
          id: "faq-what-is-agropure",
          question: "¿Qué es AgroPure Analytics y para quién está diseñado?",
          answer:
            "AgroPure Analytics es una plataforma de datos agrícolas que unifica imágenes satelitales, encuestas móviles de campo e indicadores agronómicos en paneles en tiempo real para gobiernos, agricultores, cooperativas y aseguradoras en África, Canadá y Estados Unidos.",
          answerHtml:
            'AgroPure Analytics es una <strong>suite de agricultura de precisión</strong> que convierte imágenes satelitales, encuestas GPS y datos de maquinaria en decisiones accionables hoy. Servimos a <a href="#gouvernement">programas nacionales</a>, <a href="#agriculteur">apps para agricultores</a>, <a href="#cooperative">cooperativas</a> y <a href="#assurance">aseguradoras</a> en África, Canadá y EE. UU. Según la <a href="https://www.fao.org/statistics/es/" rel="noopener noreferrer">FAO</a>, los datos agrícolas oportunos son clave para la seguridad alimentaria. <a href="#contact">Reserve una demo</a> y mapee su caso de uso en 30 minutos.',
        },
        {
          id: "faq-national-monitoring",
          question: "¿Cómo despliegan los gobiernos una plataforma nacional de monitoreo de cultivos?",
          answer:
            "Una plataforma nacional combina límites de parcelas, índices de vegetación satelital diarios y flujos de encuestas móviles para que los ministerios sigan decenas de miles de parcelas y publiquen informes semanas antes.",
          answerHtml:
            'Los ministerios empiezan con <strong>registro de parcelas y detección de límites</strong>, luego añaden series NDVI Sentinel/Landsat y formularios móviles. Clientes monitorean <strong>25 000+ parcelas al día</strong> desde un solo panel, hasta 68 % menos tiempo de reporte. Vea nuestro <a href="/es/blog/national-crop-monitoring-platform">caso de estudio nacional</a> o datos abiertos de <a href="https://fieldsofthe.world/" rel="noopener noreferrer">Fields of the World</a>. <a href="#contact">Hable con nuestro equipo de sector público</a>.',
        },
        {
          id: "faq-pest-diagnostics",
          question: "¿Pueden los agentes de campo diagnosticar plagas y enfermedades con un smartphone?",
          answer:
            "Sí. El diagnóstico fotográfico móvil captura síntomas georreferenciados; la clasificación asistida y la revisión agronómica reducen el tiempo de respuesta de días a menos de 48 horas.",
          answerHtml:
            'Los equipos fotografían síntomas en sitio. Los modelos pre-clasifican plagas y enfermedades comunes; los agrónomos validan alertas en un mapa regional. Pilotos: <strong>34 % menos pesticidas innecesarios</strong> y demoras bajo 48 h. Más en <a href="/es/blog/real-time-pest-diagnostics-field">diagnóstico de plagas en tiempo real</a> y el programa <a href="https://www.fao.org/plant-health/es/" rel="noopener noreferrer">salud vegetal FAO</a>. <a href="#contact">Inicie un piloto de campo</a> antes de la próxima temporada.',
        },
        {
          id: "faq-credit-scoring",
          question: "¿Cómo funciona el scoring crediticio agrícola para aseguradoras y prestamistas?",
          answer:
            "El scoring agrupa tendencias de vegetación plurianuales, rotaciones y encuestas verificadas en un puntaje espacial auditable parcela por parcela, reduciendo inspecciones manuales y sorpresas de impago.",
          answerHtml:
            'En lugar de rendimientos autodeclarados, AgroPure calcula un <strong>score espacial</strong> con historial NDVI, fechas de siembra y registros cooperativos, alineado con la <a href="https://www.worldbank.org/es/topic/financialsector/brief/agriculture-finance" rel="noopener noreferrer">Banco Mundial</a>. En pilotos: <strong>22 % más préstamos aprobados</strong> y 41 % menos costos de inspección. <a href="/es/blog/agricultural-credit-scoring-insurers">Caso de aseguradoras</a> o <a href="#contact">taller de suscripción</a>.',
        },
        {
          id: "faq-api-white-label",
          question: "¿Se puede integrar AgroPure vía API o desplegar en marca blanca?",
          answer:
            "AgroPure ofrece APIs REST documentadas, webhooks y portales white-label para integrar analítica de parcelas sin construir infraestructura geoespacial interna.",
          answerHtml:
            'Elija módulos, límites, NDVI, encuestas, diagnósticos, y publique en <strong>14 semanas</strong> frente a 12+ meses en interno. Conexión con John Deere, CNH y DJI ya soportada. Guía: <a href="/es/blog/agtech-api-white-label-integration">API y white-label</a>. <a href="#contact">Llamada de descubrimiento técnico</a> con nuestros arquitectos.',
        },
        {
          id: "faq-offline-africa",
          question: "¿Funciona AgroPure sin conexión en zonas rurales de África?",
          answer:
            "Sí. Los módulos móviles permiten captura offline con sincronización automática al volver la red, esencial para encuestas nacionales y apps de agricultores con poco ancho de banda.",
          answerHtml:
            'Formularios, mapas y fotos se guardan localmente y se sincronizan, como recomiendan programas digitales del <a href="https://www.cgiar.org/" rel="noopener noreferrer">CGIAR</a>. <strong>Alojamiento soberano o on-premise</strong> para gobiernos. Vea <a href="/es/blog/smallholder-credit-data-africa">programas de pequeños productores en África</a> o <a href="#contact">describa sus restricciones de red</a>.',
        },
      ],
    },
  },
  blog: {
    ...en.blog,
    title: "Casos de estudio e insights",
    subtitle:
      "Despliegues probados en campo para gobiernos, agricultores, cooperativas y aseguradoras en África, Canadá y Estados Unidos.",
    readMore: "Leer artículo",
    minRead: "min de lectura",
    allArticles: "Todos los artículos",
    relatedTitle: "Artículos relacionados",
    relatedAria: "Artículos de blog relacionados",
    seeAlso: "Ver también",
    and: "y",
    requestDemo: "Solicitar demo",
    privacyPolicy: "Política de privacidad",
    backToBlog: "Volver al blog",
    notFound: "Artículo no encontrado",
    category: "Categoría",
  },
  privacy: {
    title: "Política de privacidad",
    updated: "Última actualización: junio 2026",
    sections: en.privacy.sections.map((s, i) => ({
      heading: ["Información recopilada", "Uso", "Conservación y seguridad", "Sus derechos"][i],
      body: s.body,
    })),
  },
};
