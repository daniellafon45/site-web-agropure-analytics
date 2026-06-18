import type { Locale } from "./types";

export type FeatureDashboardI18n = {
  brandLabel: string;
  statusLabel: string;
  panel: Record<string, unknown>;
};

export type FeatureDashboardsMap = Record<string, FeatureDashboardI18n>;

const fr: FeatureDashboardsMap = {
  "national-platform": {
    brandLabel: "agrigeo.national.io",
    statusLabel: "Alertes sécheresse actives",
    panel: {
      fieldLabel: "Field 042 · Maïs V6",
      riskLabel: "Risque",
    },
  },
  "survey-digitization": {
    brandLabel: "enquetes.national.io",
    statusLabel: "94 % données validées",
    panel: {
      formsLabel: "Formulaires",
      deploymentsLabel: "Déploiements",
      forms: "18 532",
      deployments: "152",
    },
  },
  traceability: {
    brandLabel: "trace.lots.io",
    statusLabel: "Chaîne auditée en temps réel",
    panel: {
      lotId: "LOT-2847",
      chainLabel: "Parcelle → collecte → client",
    },
  },
  "water-reservoirs": {
    brandLabel: "hydrique.national.io",
    statusLabel: "12 alertes actives",
    panel: {
      normalBadge: "22 normal",
      criticalBadge: "4 critique",
      reservoirsLabel: "réservoirs",
      stockLabel: "Stock",
      stock: "58%",
    },
  },
  "crop-practices": {
    brandLabel: "fiches.pratiques.io",
    statusLabel: "Ressources hors ligne dispo",
    panel: {
      sheets: ["Eau", "Paillis", "Lutte intégrée", "Couvert"],
      detailTitle: "Niveau d'eau",
      sheetsCount: "12 fiches",
    },
  },
  "stone-cordons": {
    brandLabel: "cordons.pierreux.io",
    statusLabel: "Mode terrain hors ligne",
    panel: {
      erosionRisk: "Risque érosion",
      tracesLabel: "tracés",
      erosionReduction: "-87% érosion",
    },
  },
  "pest-diagnostic": {
    brandLabel: "agridiag.ravageurs.io",
    statusLabel: "Mode hors ligne · sync différée",
    panel: {
      photoPlaceholder: "Photo symptôme",
      aiLabel: "IA",
      diagnosis: "Rouille du caféier",
      reportsLabel: "rapports 2025",
    },
  },
  "ag-calculator": {
    brandLabel: "agricalculator.io",
    statusLabel: "Recommandation IA validée",
    panel: {
      cropLabel: "Culture",
      plotLabel: "Parcelle",
      crop: "Maïs",
      area: "2.45 ha",
      npkLabel: "Dose N-P-K kg/ha",
      npk: "150-60-60",
    },
  },
  "ag-assistant": {
    brandLabel: "assistant.parcelle.io",
    statusLabel: "Capteurs · 4 actifs",
    panel: {
      tasksLabel: "Tâches",
      tasks: "2/5",
      sensors: [
        { label: "Santé", value: "92%", status: "good" },
        { label: "pH", value: "7.6", status: "warn" },
        { label: "Humidité", value: "75%", status: "good" },
      ],
    },
  },
  "market-tools": {
    brandLabel: "marche.national.io",
    statusLabel: "12 produits suivis",
    panel: {
      colProduct: "Produit",
      colPrice: "Prix",
      col7d: "7j",
      prices: [
        { product: "Maïs", price: "325 FCFA", change: "+6.2%" },
        { product: "Riz local", price: "480 FCFA", change: "-1.3%" },
        { product: "Tomate", price: "620 FCFA", change: "+12%" },
      ],
    },
  },
  "ag-logistics": {
    brandLabel: "logistique.national.io",
    statusLabel: "128 450 t post-récolte",
    panel: {
      distanceLabel: "Distance",
      durationLabel: "Durée",
      costLabel: "Coût",
      distance: "353 km",
      duration: "6h45",
      cost: "125 000 FCFA",
    },
  },
  "harvest-tokenization": {
    brandLabel: "token.recolte.io",
    statusLabel: "Déblocage fonds en cours",
    panel: {
      volumeLabel: "Volume tokenisé",
      volume: "128 450 t",
      tokens: "2.1k",
      crops: ["Maïs", "Riz", "Sorgho"],
      lotsFinancing: "lots · financement débloqué",
    },
  },
};

const en: FeatureDashboardsMap = {
  "national-platform": {
    brandLabel: "agrigeo.national.io",
    statusLabel: "Active drought alerts",
    panel: {
      fieldLabel: "Field 042 · Maize V6",
      riskLabel: "Risk",
    },
  },
  "survey-digitization": {
    brandLabel: "surveys.national.io",
    statusLabel: "94% validated data",
    panel: {
      formsLabel: "Forms",
      deploymentsLabel: "Deployments",
      forms: "18,532",
      deployments: "152",
    },
  },
  traceability: {
    brandLabel: "trace.lots.io",
    statusLabel: "Real-time audited chain",
    panel: {
      lotId: "LOT-2847",
      chainLabel: "Plot → collection → customer",
    },
  },
  "water-reservoirs": {
    brandLabel: "hydrology.national.io",
    statusLabel: "12 active alerts",
    panel: {
      normalBadge: "22 normal",
      criticalBadge: "4 critical",
      reservoirsLabel: "reservoirs",
      stockLabel: "Storage",
      stock: "58%",
    },
  },
  "crop-practices": {
    brandLabel: "practices.sheets.io",
    statusLabel: "Offline resources available",
    panel: {
      sheets: ["Water", "Mulch", "IPM", "Cover crop"],
      detailTitle: "Water level",
      sheetsCount: "12 sheets",
    },
  },
  "stone-cordons": {
    brandLabel: "stone-bunds.io",
    statusLabel: "Offline field mode",
    panel: {
      erosionRisk: "Erosion risk",
      tracesLabel: "traces",
      erosionReduction: "-87% erosion",
    },
  },
  "pest-diagnostic": {
    brandLabel: "agridiag.pests.io",
    statusLabel: "Offline mode · delayed sync",
    panel: {
      photoPlaceholder: "Symptom photo",
      aiLabel: "AI",
      diagnosis: "Coffee leaf rust",
      reportsLabel: "reports 2025",
    },
  },
  "ag-calculator": {
    brandLabel: "agricalculator.io",
    statusLabel: "AI recommendation validated",
    panel: {
      cropLabel: "Crop",
      plotLabel: "Plot",
      crop: "Maize",
      area: "2.45 ha",
      npkLabel: "N-P-K dose kg/ha",
      npk: "150-60-60",
    },
  },
  "ag-assistant": {
    brandLabel: "assistant.plot.io",
    statusLabel: "Sensors · 4 active",
    panel: {
      tasksLabel: "Tasks",
      tasks: "2/5",
      sensors: [
        { label: "Health", value: "92%", status: "good" },
        { label: "pH", value: "7.6", status: "warn" },
        { label: "Humidity", value: "75%", status: "good" },
      ],
    },
  },
  "market-tools": {
    brandLabel: "market.national.io",
    statusLabel: "12 products tracked",
    panel: {
      colProduct: "Product",
      colPrice: "Price",
      col7d: "7d",
      prices: [
        { product: "Maize", price: "325 FCFA", change: "+6.2%" },
        { product: "Local rice", price: "480 FCFA", change: "-1.3%" },
        { product: "Tomato", price: "620 FCFA", change: "+12%" },
      ],
    },
  },
  "ag-logistics": {
    brandLabel: "logistics.national.io",
    statusLabel: "128,450 t post-harvest",
    panel: {
      distanceLabel: "Distance",
      durationLabel: "Duration",
      costLabel: "Cost",
      distance: "353 km",
      duration: "6h45",
      cost: "125,000 FCFA",
    },
  },
  "harvest-tokenization": {
    brandLabel: "token.harvest.io",
    statusLabel: "Funds unlock in progress",
    panel: {
      volumeLabel: "Tokenized volume",
      volume: "128,450 t",
      tokens: "2.1k",
      crops: ["Maize", "Rice", "Sorghum"],
      lotsFinancing: "lots · financing unlocked",
    },
  },
};

const es: FeatureDashboardsMap = {
  "national-platform": {
    brandLabel: "agrigeo.nacional.io",
    statusLabel: "Alertas de sequía activas",
    panel: {
      fieldLabel: "Campo 042 · Maíz V6",
      riskLabel: "Riesgo",
    },
  },
  "survey-digitization": {
    brandLabel: "encuestas.nacional.io",
    statusLabel: "94 % datos validados",
    panel: {
      formsLabel: "Formularios",
      deploymentsLabel: "Despliegues",
      forms: "18 532",
      deployments: "152",
    },
  },
  traceability: {
    brandLabel: "traza.lotes.io",
    statusLabel: "Cadena auditada en tiempo real",
    panel: {
      lotId: "LOTE-2847",
      chainLabel: "Parcela → recolección → cliente",
    },
  },
  "water-reservoirs": {
    brandLabel: "hidrica.nacional.io",
    statusLabel: "12 alertas activas",
    panel: {
      normalBadge: "22 normal",
      criticalBadge: "4 crítico",
      reservoirsLabel: "embalses",
      stockLabel: "Reserva",
      stock: "58%",
    },
  },
  "crop-practices": {
    brandLabel: "fichas.practicas.io",
    statusLabel: "Recursos offline disponibles",
    panel: {
      sheets: ["Agua", "Mulch", "MIP", "Cobertura"],
      detailTitle: "Nivel de agua",
      sheetsCount: "12 fichas",
    },
  },
  "stone-cordons": {
    brandLabel: "cordones.piedra.io",
    statusLabel: "Modo campo sin conexión",
    panel: {
      erosionRisk: "Riesgo erosión",
      tracesLabel: "trazas",
      erosionReduction: "-87% erosión",
    },
  },
  "pest-diagnostic": {
    brandLabel: "agridiag.plagas.io",
    statusLabel: "Modo offline · sync diferida",
    panel: {
      photoPlaceholder: "Foto síntoma",
      aiLabel: "IA",
      diagnosis: "Roya del cafeto",
      reportsLabel: "informes 2025",
    },
  },
  "ag-calculator": {
    brandLabel: "agricalculator.io",
    statusLabel: "Recomendación IA validada",
    panel: {
      cropLabel: "Cultivo",
      plotLabel: "Parcela",
      crop: "Maíz",
      area: "2.45 ha",
      npkLabel: "Dosis N-P-K kg/ha",
      npk: "150-60-60",
    },
  },
  "ag-assistant": {
    brandLabel: "asistente.parcela.io",
    statusLabel: "Sensores · 4 activos",
    panel: {
      tasksLabel: "Tareas",
      tasks: "2/5",
      sensors: [
        { label: "Salud", value: "92%", status: "good" },
        { label: "pH", value: "7.6", status: "warn" },
        { label: "Humedad", value: "75%", status: "good" },
      ],
    },
  },
  "market-tools": {
    brandLabel: "mercado.nacional.io",
    statusLabel: "12 productos seguidos",
    panel: {
      colProduct: "Producto",
      colPrice: "Precio",
      col7d: "7d",
      prices: [
        { product: "Maíz", price: "325 FCFA", change: "+6.2%" },
        { product: "Arroz local", price: "480 FCFA", change: "-1.3%" },
        { product: "Tomate", price: "620 FCFA", change: "+12%" },
      ],
    },
  },
  "ag-logistics": {
    brandLabel: "logistica.nacional.io",
    statusLabel: "128 450 t poscosecha",
    panel: {
      distanceLabel: "Distancia",
      durationLabel: "Duración",
      costLabel: "Costo",
      distance: "353 km",
      duration: "6h45",
      cost: "125 000 FCFA",
    },
  },
  "harvest-tokenization": {
    brandLabel: "token.cosecha.io",
    statusLabel: "Desbloqueo de fondos en curso",
    panel: {
      volumeLabel: "Volumen tokenizado",
      volume: "128 450 t",
      tokens: "2.1k",
      crops: ["Maíz", "Arroz", "Sorgo"],
      lotsFinancing: "lotes · financiación desbloqueada",
    },
  },
};

const zh: FeatureDashboardsMap = {
  "national-platform": {
    brandLabel: "agrigeo.national.io",
    statusLabel: "干旱预警已启用",
    panel: {
      fieldLabel: "地块 042 · 玉米 V6",
      riskLabel: "风险",
    },
  },
  "survey-digitization": {
    brandLabel: "survey.national.io",
    statusLabel: "94% 数据已验证",
    panel: {
      formsLabel: "表单",
      deploymentsLabel: "部署",
      forms: "18 532",
      deployments: "152",
    },
  },
  traceability: {
    brandLabel: "trace.lots.io",
    statusLabel: "供应链实时审计",
    panel: {
      lotId: "批次-2847",
      chainLabel: "地块 → 集货 → 客户",
    },
  },
  "water-reservoirs": {
    brandLabel: "hydrology.national.io",
    statusLabel: "12 条活跃预警",
    panel: {
      normalBadge: "22 正常",
      criticalBadge: "4 危急",
      reservoirsLabel: "水库",
      stockLabel: "蓄水",
      stock: "58%",
    },
  },
  "crop-practices": {
    brandLabel: "practices.sheets.io",
    statusLabel: "离线资源可用",
    panel: {
      sheets: ["水利", "覆盖", "综合防治", "覆盖作物"],
      detailTitle: "水位",
      sheetsCount: "12 份技术单",
    },
  },
  "stone-cordons": {
    brandLabel: "stone-bunds.io",
    statusLabel: "离线田间模式",
    panel: {
      erosionRisk: "侵蚀风险",
      tracesLabel: "迹线",
      erosionReduction: "-87% 侵蚀",
    },
  },
  "pest-diagnostic": {
    brandLabel: "agridiag.pests.io",
    statusLabel: "离线模式 · 延迟同步",
    panel: {
      photoPlaceholder: "症状照片",
      aiLabel: "AI",
      diagnosis: "咖啡锈病",
      reportsLabel: "2025 年报告",
    },
  },
  "ag-calculator": {
    brandLabel: "agricalculator.io",
    statusLabel: "AI 建议已验证",
    panel: {
      cropLabel: "作物",
      plotLabel: "地块",
      crop: "玉米",
      area: "2.45 ha",
      npkLabel: "N-P-K 用量 kg/ha",
      npk: "150-60-60",
    },
  },
  "ag-assistant": {
    brandLabel: "assistant.plot.io",
    statusLabel: "传感器 · 4 台在线",
    panel: {
      tasksLabel: "任务",
      tasks: "2/5",
      sensors: [
        { label: "健康", value: "92%", status: "good" },
        { label: "pH", value: "7.6", status: "warn" },
        { label: "湿度", value: "75%", status: "good" },
      ],
    },
  },
  "market-tools": {
    brandLabel: "market.national.io",
    statusLabel: "跟踪 12 种产品",
    panel: {
      colProduct: "产品",
      colPrice: "价格",
      col7d: "7天",
      prices: [
        { product: "玉米", price: "325 FCFA", change: "+6.2%" },
        { product: "本地大米", price: "480 FCFA", change: "-1.3%" },
        { product: "番茄", price: "620 FCFA", change: "+12%" },
      ],
    },
  },
  "ag-logistics": {
    brandLabel: "logistics.national.io",
    statusLabel: "产后 128 450 吨",
    panel: {
      distanceLabel: "距离",
      durationLabel: "时长",
      costLabel: "成本",
      distance: "353 km",
      duration: "6h45",
      cost: "125 000 FCFA",
    },
  },
  "harvest-tokenization": {
    brandLabel: "token.harvest.io",
    statusLabel: "资金解锁进行中",
    panel: {
      volumeLabel: "代币化产量",
      volume: "128 450 t",
      tokens: "2.1k",
      crops: ["玉米", "大米", "高粱"],
      lotsFinancing: "批次 · 融资已解锁",
    },
  },
};

const DEFAULT_BY_LOCALE: Record<Locale, FeatureDashboardI18n> = {
  fr: { brandLabel: "agropure_analytics.io", statusLabel: "Mises à jour en direct", panel: {} },
  en: { brandLabel: "agropure_analytics.io", statusLabel: "Live updates enabled", panel: {} },
  es: { brandLabel: "agropure_analytics.io", statusLabel: "Actualizaciones en vivo", panel: {} },
  zh: { brandLabel: "agropure_analytics.io", statusLabel: "实时更新已启用", panel: {} },
};

const BY_LOCALE: Record<Locale, FeatureDashboardsMap> = { fr, en, es, zh };

export function getFeatureDashboardI18n(locale: Locale, toolId: string): FeatureDashboardI18n {
  return BY_LOCALE[locale][toolId] ?? BY_LOCALE.fr[toolId] ?? DEFAULT_BY_LOCALE[locale];
}
