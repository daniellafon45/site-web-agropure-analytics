import type { Translations } from "../types";

export const fr: Translations = {
  meta: {
    homeTitle:
      "AgroPure Analytics, Moins de stress. Moins de coûts. Plus de rendement.",
    homeDescription:
      "Plateformes nationales et outils terrain : transformez vos données agricoles en décisions rentables, en Afrique, au Canada et aux États-Unis.",
    privacyTitle: "Politique de confidentialité, AgroPure Analytics",
    privacyDescription:
      "Comment AgroPure Analytics collecte, utilise et protège vos renseignements personnels.",
    notFoundTitle: "Page introuvable",
    notFoundBody: "La page que vous cherchez n'existe pas ou a été déplacée.",
    errorTitle: "Cette page n'a pas pu se charger",
    errorBody: "Un problème est survenu de notre côté.",
    backHome: "Retour à l'accueil",
    retry: "Réessayer",
  },
  nav: {
    sectors: "Nos secteurs",
    features: "Fonctionnalités",
    delivery: "Déploiement",
    markets: "Marchés mondiaux",
    cases: "Études de cas",
    blog: "Blogue",
    contact: "Contact",
    requestDemo: "Demander une démo",
    letsTalk: "Demander une démo",
    demoShort: "Démo",
    openMenu: "Ouvrir le menu",
    menu: "Menu",
    language: "Langue",
    themeLight: "Passer en mode clair",
    themeDark: "Passer en mode sombre",
  },
  footer: {
    sectorsTitle: "Secteurs d'activité",
    companyTitle: "Entreprise",
    privacy: "Politique de confidentialité",
    linkedInAria: "AgroPure Analytics sur LinkedIn",
    tagline: "La donnée agricole, transformée en action.",
    copyright: "© 2026 AgroPure Analytics. Tous droits réservés.",
    sectors: [
      { label: "Gouvernements", href: "#gouvernement" },
      { label: "Agriculteurs", href: "#agriculteur" },
      { label: "Coopératives & ONG", href: "#cooperative" },
      { label: "Assurances", href: "#assurance" },
    ],
  },
  consent: {
    ariaLabel: "Consentement à la collecte de données",
    message:
      "Nous utilisons des témoins essentiels pour mémoriser vos préférences et pouvons activer des outils d'analyse uniquement avec votre consentement.",
    accept: "Accepter",
    reject: "Refuser",
    learnMore: "Politique de confidentialité",
  },
  home: {
    hero: {
      title: "Moins de stress. Moins de coûts. Plus de rendement.",
      subtitle:
        "Protégez vos cultures et anticipez leurs comportements : centralisez vos données en instructions claires pour agir au bon moment.",
      ctaPrimary: "Demander une démo",
    },
    intro: {
      label: "Notre mission",
      text: "Fournir des outils de décision puissants, alimentés par l'IA, qui transforment vos volumes de données agricoles inexploités en actions claires, pour optimiser les rendements alors que les ressources se raréfient, décider plus vite et réduire le stress au quotidien.",
    },
    industries: {
      eyebrow: "Nos secteurs",
      title:
        "Des politiques publiques aux exploitations, des filières aux assureurs : AgroPure adapte ses outils à chaque environnement de décision agricole.",
      learnMore: "En savoir plus",
      items: [
        {
          id: "gouvernement",
          cardTitle: "Gouvernements",
          desc: "Les données agricoles nationales restent dispersées et vos enquêtes terrain mettent des mois à se consolider ? Une plateforme agricole nationale unifie parcelles, cultures et ressources hydriques pour piloter vos politiques publiques avec une vision fiable, en temps réel.",
        },
        {
          id: "agriculteur",
          cardTitle: "Agriculteurs",
          desc: "Vous décidez trop tard faute de données claires au niveau parcelle ? Des applications d'aide à la décision, diagnostics photo et calculateurs simples protègent vos cultures, réduisent vos coûts et optimisent vos rendements, sans expertise technique.",
        },
        {
          id: "cooperative",
          cardTitle: "Coopératives & ONG",
          desc: "Vos filières manquent de visibilité sur les marchés, les flux et la traçabilité agricole ? Outils de mise en marché, suivi de transhumance et traçabilité bout en bout pour sécuriser les revenus des producteurs et renforcer la résilience de vos chaînes de valeur.",
        },
        {
          id: "assurance",
          cardTitle: "Assurances",
          desc: "Évaluer le risque agricole sans données terrain fiables expose à des souscriptions ou indemnisations imprécises ? Des indicateurs spatialisés et historiques, actualisés en continu, mesurent la performance des exploitations et sécurisent chaque décision de souscription.",
        },
      ],
    },
    integrations: {
      title: "Conçus pour s'intégrer facilement à votre parc",
      description:
        "Vous redoutez des mois d'intégration TI ou de devoir changer d'équipement ? AgroPure se connecte aux tracteurs et drones déjà dans votre exploitation, sans silo entre marques, sans ressaisie manuelle.",
    },
    features: {
      title: "Faire l'agriculture, c'est gérer du vivant qui change tout le temps",
      description:
        "En moyenne, il faut 10 ans à un agriculteur pour optimiser ses rendements : un délai que ni agriculteurs ni gestionnaires ne peuvent se permettre. Chaque saison, climat, sols et ravageurs réécrivent les règles. AgroPure traite vos données satellite, terrain et capteurs pour livrer des instructions claires avant ces bascules, rendre vos rendements plus prévisibles, anticiper les risques et décider au bon moment.",
      learnMore: "En savoir plus",
      categories: [
        {
          id: "national-data",
          label: "Pilotage national & données",
          tools: [
            {
              id: "national-platform",
              label: "Plateforme nationale agricole",
              description:
                "Centralisez parcelles, cultures et capteurs pour piloter l'agriculture à l'échelle nationale en temps réel.",
              stats: [
                { value: "+15 %", label: "rendement projeté sur parcelles à risque" },
                { value: "-60 %", label: "pertes liées aux décisions tardives" },
                { value: "126", label: "parcelles pilotées en temps réel" },
              ],
            },
            {
              id: "survey-digitization",
              label: "Numérisation des enquêtes",
              description:
                "Remplacez les formulaires papier par des enquêtes terrain numériques, synchronisées et auditables.",
              stats: [
                { value: "-70 %", label: "coût de collecte par enquête" },
                { value: "3×", label: "ROI décisionnel des politiques publiques" },
                { value: "99 %", label: "données exploitables sans ressaisie" },
              ],
            },
            {
              id: "traceability",
              label: "Traçabilité",
              description:
                "Suivez chaque lot de la parcelle au client pour sécuriser les filières et accélérer les audits.",
              stats: [
                { value: "-45 %", label: "pertes en cas de rappel produit" },
                { value: "+18 %", label: "prime de filière traçable" },
                { value: "100 %", label: "lots certifiés parcelle → client" },
              ],
            },
          ],
        },
        {
          id: "agronomic-monitoring",
          label: "Surveillance agronomique",
          tools: [
            {
              id: "water-reservoirs",
              label: "Suivi des réservoirs hydriques",
              description:
                "Surveillez stocks et niveaux d'eau pour anticiper la sécheresse et réduire les pertes.",
              stats: [
                { value: "-35 %", label: "pertes d'eau non détectées" },
                { value: "+28 %", label: "rendement préservé en sécheresse" },
                { value: "< 15 min", label: "alerte avant rupture d'irrigation" },
              ],
            },
            {
              id: "crop-practices",
              label: "Maîtrise des pratiques culturales",
              description:
                "Mesurez l'adoption des bonnes pratiques et orientez les politiques d'accompagnement.",
              stats: [
                { value: "+15 %", label: "rendement projeté post-accompagnement" },
                { value: "+42 %", label: "adoption des pratiques à fort impact" },
                { value: "-30 %", label: "écarts de performance entre régions" },
              ],
            },
            {
              id: "stone-cordons",
              label: "Modélisation des cordons pierreux",
              description:
                "Cartographiez et modélisez les cordons pierreux pour la conservation des sols et l'érosion.",
              stats: [
                { value: "-87 %", label: "érosion sur sites équipés" },
                { value: "+5.8 ha", label: "surface aménagée par projet type" },
                { value: "-50 %", label: "coût de relevé terrain" },
              ],
            },
          ],
        },
        {
          id: "field-intelligence",
          label: "Intelligence terrain",
          tools: [
            {
              id: "pest-diagnostic",
              label: "Diagnostic des ravageurs",
              description:
                "Identifiez maladies et ravageurs par photo pour intervenir avant les pertes de rendement.",
              stats: [
                { value: "+18 %", label: "rendement préservé vs non-traité" },
                { value: "-40 %", label: "pertes ravageurs évitées" },
                { value: "94 %", label: "diagnostics orientant le bon traitement" },
              ],
            },
            {
              id: "ag-calculator",
              label: "Calculateur agricole",
              description:
                "Simulez doses, coûts et scénarios culturaux sans tableur ni expertise technique.",
              stats: [
                { value: "-25 %", label: "coût intrants par hectare" },
                { value: "+15 %", label: "marge projetée culture pilote" },
                { value: "< 2 min", label: "pour un plan fertilisation rentable" },
              ],
            },
            {
              id: "ag-assistant",
              label: "Assistant agricole",
              description:
                "Recevez des consignes personnalisées selon vos données parcelle, météo et historique cultural.",
              stats: [
                { value: "+35 %", label: "décisions rentables prises à temps" },
                { value: "-60 %", label: "pertes évitables par retard d'action" },
                { value: "92 %", label: "parcelles sous suivi actif" },
              ],
            },
          ],
        },
        {
          id: "market-chain",
          label: "Marché & chaîne de valeur",
          tools: [
            {
              id: "market-tools",
              label: "Outils de marché",
              description:
                "Suivez l'évolution des prix et les marchés locaux pour vendre au bon moment.",
              stats: [
                { value: "+15 %", label: "revenu projeté fenêtre de vente optimale" },
                { value: "+12 %", label: "revenu moyen à la vente" },
                { value: "48 h", label: "d'avance sur hausse des prix" },
              ],
            },
            {
              id: "ag-logistics",
              label: "Outils logistiques agricole",
              description:
                "Optimisez collecte, transport et stockage pour réduire les pertes post-récolte.",
              stats: [
                { value: "-32 %", label: "pertes post-récolte en logistique" },
                { value: "+22 %", label: "marge logistique tournées optimisées" },
                { value: "-45 %", label: "coût d'immobilisation des récoltes" },
              ],
            },
            {
              id: "harvest-tokenization",
              label: "Tokenisation de la récolte",
              description:
                "Sécurisez et fractionnez la valeur des récoltes pour financer et tracer les flux.",
              stats: [
                { value: "+40 %", label: "producteurs accédant au financement" },
                { value: "-55 %", label: "délai déblocage trésorerie récolte" },
                { value: "+15 %", label: "revenu net projeté post-tokenisation" },
              ],
            },
          ],
        },
      ],
    },
    delivery: {
      title: "Choisissez le mode d'intégration adapté à votre organisation",
      subtitle:
        "API, marque blanche ou application web : nous nous adaptons à votre infrastructure et à vos contraintes réglementaires.",
      columns: [
        {
          title: "Intégration API",
          description: "Connectez AgroPure à vos systèmes existants.",
          bullets: [
            "APIs REST documentées",
            "Webhooks et événements temps réel",
            "Connecteurs bases de données",
            "Support technique dédié",
          ],
        },
        {
          title: "Solutions white-label",
          description: "Déployez sous votre marque, à l'échelle nationale.",
          bullets: [
            "Personnalisation complète de l'interface",
            "Hébergement dédié ou souverain",
            "Formation des équipes",
            "SLA et support prioritaire",
          ],
        },
        {
          title: "Application web & application mobile",
          description: "Accès immédiat, sans installation.",
          bullets: [
            "Interface intuitive multi-appareils",
            "Mises à jour continues",
            "Tableaux de bord configurables",
            "Accès terrain hors connexion (sync)",
          ],
        },
      ],
    },
    trust: {
      title: "Soutenus par l'écosystème d'innovation canadien",
    },
    caseStudies: {
      eyebrow: "Études de cas",
      title: "Des résultats mesurables sur le terrain",
      items: [
        {
          tag: "Étude de cas",
          title: "Plateforme nationale de suivi des cultures",
          excerpt:
            "Déploiement d'un moteur d'agriculture national intégrant imagerie satellite et enquêtes terrain pour 25 000+ parcelles suivies quotidiennement.",
          cta: "Lire la suite",
          slug: "national-crop-monitoring-platform",
        },
        {
          tag: "Étude de cas",
          title: "Diagnostic photo des ravageurs en temps réel",
          excerpt:
            "Les agents de terrain identifient maladies et ravageurs via smartphone ; les alertes sont centralisées pour une réponse coordonnée.",
          cta: "Lire la suite",
          slug: "real-time-pest-diagnostics-field",
        },
        {
          tag: "Étude de cas",
          title: "Scoring crédit agricole pour assureurs",
          excerpt:
            "Indicateurs de performance et de risque spatialisés permettent d'affiner l'évaluation du crédit agricole avec des données vérifiables.",
          cta: "Lire la suite",
          slug: "agricultural-credit-scoring-insurers",
        },
      ],
    },
    commodityMarkets: {
      eyebrow: "Marchés mondiaux",
      title: "Cours des matières premières et intrants agricoles",
      subtitle:
        "Suivez les benchmarks céréaliers, les engrais et l'énergie pour anticiper les coûts de production et les marges à la ferme.",
      ctaTitle:
        "Envie d'augmenter la valeur de vos actifs et de votre stock agricole ?",
      ctaButton: "Contactez-nous",
      asOf: "Au",
      sourceLive: "Données USDA / EIA via GrainBrief",
      sourceMock: "Données indicatives (mode démo)",
      disclaimer:
        "Prix indicatifs à titre informatif, exprimés en USD. Les marchés locaux peuvent différer. Sources : USDA AMS, EIA, FAO FPMA.",
      fpmaLink: "Analyser les prix alimentaires sur FAO FPMA",
      fpmaHref: "https://fpma.fao.org/giews/fpmat4/",
      loading: "Chargement des cours…",
      scrollUp: "Produits précédents",
      scrollDown: "Produits suivants",
      products: {
        wheat: "Blé",
        corn: "Maïs",
        soy: "Soja",
        sorghum: "Sorgho",
        urea: "Urée",
        dap: "DAP",
        potash: "Potasse",
        ammonia: "Ammoniac",
        diesel: "Diesel",
        natGas: "Gaz naturel",
      },
      tickers: {
        wheat: "BLÉ",
        corn: "MAÏS",
        soy: "SOJA",
        sorghum: "SORGHO",
        urea: "URÉE",
        dap: "DAP",
        potash: "POTASSE",
        ammonia: "NH₃",
        diesel: "DIESEL",
        natGas: "GAZ",
      },
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle:
        "Découvrez comment AgroPure Analytics peut transformer vos données agricoles en décisions concrètes, avec une stratégie adaptée à votre réalité.",
      cta: "Planifier une rencontre",
      formTitle: "Décrivez votre besoin",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      company: "Entreprise",
      website: "Site web",
      websitePlaceholder: "exemple.com",
      need: "Votre besoin",
      needPlaceholder: "Décrivez votre contexte, vos objectifs et votre échéancier…",
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours…",
      successTitle: "Message envoyé",
      successBody: "Notre équipe vous contactera sous peu. Merci pour votre intérêt.",
      honeypot: "Ne pas remplir",
      privacyConsentBefore: "J'accepte que mes renseignements soient traités conformément à la",
      privacyConsentLink: "politique de confidentialité",
      privacyConsentAfter: ".",
      errors: {
        lastName: "Le nom est requis.",
        firstName: "Le prénom est requis.",
        emailRequired: "Le courriel est requis.",
        emailInvalid: "Courriel invalide.",
        message: "Décrivez votre besoin.",
        messageTooLong: "Message trop long (max. 5000 caractères).",
        consentRequired: "Consentement requis.",
      },
    },
    faq: {
      title: "Vos questions, nos réponses",
      subtitle:
        "Réponses claires sur le suivi national des cultures, le diagnostic terrain, le scoring crédit et le déploiement, pour l'Afrique, le Canada et les États-Unis.",
      footerBefore: "Vous évaluez encore AgroPure pour votre organisation ?",
      footerLink: "Demander une démo personnalisée",
      footerAfter: ", notre équipe répond sous un jour ouvrable.",
      items: [
        {
          id: "faq-what-is-agropure",
          question: "Qu'est-ce qu'AgroPure Analytics et pour qui est-ce conçu ?",
          answer:
            "AgroPure Analytics est une plateforme de données agricoles qui unifie imagerie satellite, enquêtes terrain mobiles et indicateurs agronomiques en tableaux de bord temps réel pour gouvernements, agriculteurs, coopératives et assureurs en Afrique, au Canada et aux États-Unis.",
          answerHtml:
            'AgroPure Analytics est une <strong>suite logicielle d\'agriculture de précision</strong> qui transforme imagerie satellite, enquêtes GPS et données machines en décisions actionnables, pas le trimestre prochain. Nous servons les <a href="#gouvernement">programmes nationaux</a>, les <a href="#agriculteur">applications agriculteur</a>, les <a href="#cooperative">coopératives</a> et les <a href="#assurance">assureurs</a> en Afrique, au Canada et aux États-Unis. Selon la <a href="https://www.fao.org/statistics/fr/" rel="noopener noreferrer">FAO</a>, des données agricoles à jour sont essentielles à la sécurité alimentaire ; AgroPure comble ce vide sans équipe SIG dédiée. <a href="#contact">Réservez une démo</a>, votre cas d\'usage cartographié en 30 minutes.',
        },
        {
          id: "faq-national-monitoring",
          question: "Comment déployer une plateforme nationale de suivi des cultures ?",
          answer:
            "Une plateforme nationale combine limites de parcelles, indices de végétation satellite quotidiens et enquêtes mobiles pour que les ministères suivent des dizaines de milliers de parcelles et publient des bilans cultures des semaines plus tôt.",
          answerHtml:
            'Les ministères commencent par le <strong>recensement parcelles et la délimitation IA</strong>, puis ajoutent séries NDVI Sentinel/Landsat et formulaires mobiles. Nos clients suivent <strong>25 000+ parcelles par jour</strong> depuis un tableau de bord unique, jusqu\'à 68 % de gain sur les cycles de rapport manuels. Voir notre <a href="/fr/blog/national-crop-monitoring-platform">étude de cas nationale</a> ou les jeux ouverts <a href="https://fieldsofthe.world/" rel="noopener noreferrer">Fields of the World</a>. <a href="#contact">Parlez à notre équipe secteur public</a>.',
        },
        {
          id: "faq-pest-diagnostics",
          question: "Les agents terrain peuvent-ils diagnostiquer ravageurs et maladies par smartphone ?",
          answer:
            "Oui. Le diagnostic photo mobile permet de capturer des symptômes géolocalisés ; la classification assistée et la validation agronomique réduisent le délai de réponse de plusieurs jours à moins de 48 heures.",
          answerHtml:
            'Les équipes photographient les symptômes sur place. Les modèles pré-classifient ravageurs et maladies courants ; les agronomes valident les alertes sur une carte régionale. Résultats pilotes : <strong>34 % de pesticides en moins</strong> et délais sous 48 h. Détails : <a href="/fr/blog/real-time-pest-diagnostics-field">diagnostic ravageurs temps réel</a> et programme <a href="https://www.fao.org/plant-health/fr/" rel="noopener noreferrer">santé des végétaux FAO</a>. <a href="#contact">Lancez un pilote terrain</a> avant la prochaine saison.',
        },
        {
          id: "faq-credit-scoring",
          question: "Comment fonctionne le scoring crédit agricole pour assureurs et prêteurs ?",
          answer:
            "Le scoring agrège tendances de végétation pluriannuelles, rotations culturales et enquêtes vérifiées en un score spatial auditable parcelle par parcelle, réduisant inspections manuelles et surprises de défaut.",
          answerHtml:
            'Plutôt que des rendements déclarés, AgroPure calcule un <strong>score spatial</strong> à partir de l\'historique NDVI, dates de semis et historique coopératif, aligné sur la <a href="https://www.worldbank.org/fr/topic/financialsector/brief/agriculture-finance" rel="noopener noreferrer">Banque mondiale</a>. En pilote : <strong>22 % de prêts supplémentaires</strong> approuvés et 41 % de coûts d\'inspection en moins. <a href="/fr/blog/agricultural-credit-scoring-insurers">Étude assureurs</a> ou <a href="#contact">atelier souscription</a>.',
        },
        {
          id: "faq-api-white-label",
          question: "Peut-on intégrer AgroPure par API ou en marque blanche ?",
          answer:
            "AgroPure propose des API REST documentées, webhooks et portails white-label pour intégrer l'analytique parcelle sans construire une infrastructure géospatiale interne.",
          answerHtml:
            'Choisissez les modules, limites, NDVI, enquêtes, diagnostics, et passez en production en <strong>14 semaines</strong> au lieu de 12 mois en interne. Connexion tracteurs John Deere, CNH, DJI déjà supportée. Guide : <a href="/fr/blog/agtech-api-white-label-integration">API et white-label</a>. <a href="#contact">Appel découverte technique</a> avec nos architectes.',
        },
        {
          id: "faq-offline-africa",
          question: "AgroPure fonctionne-t-il hors ligne en zones rurales d'Afrique ?",
          answer:
            "Oui. Les modules mobile supportent la saisie hors ligne avec synchronisation automatique au retour du réseau, indispensable pour enquêtes nationales et apps agriculteur en faible bande passante.",
          answerHtml:
            'Formulaires, cartes et photos sont stockés localement puis synchronisés, comme le recommandent les programmes numériques du <a href="https://www.cgiar.org/" rel="noopener noreferrer">CGIAR</a>. Hébergement <strong>souverain ou sur site</strong> disponible pour les gouvernements. Voir <a href="/fr/blog/smallholder-credit-data-africa">programmes petits producteurs Afrique</a> ou <a href="#contact">décrivez vos contraintes réseau</a>.',
        },
      ],
    },
  },
  blog: {
    title: "Études de cas et analyses",
    subtitle:
      "Déploiements terrain pour gouvernements, agriculteurs, coopératives et assureurs en Afrique, au Canada et aux États-Unis.",
    readMore: "Lire l'article",
    minRead: "min de lecture",
    allArticles: "Tous les articles",
    relatedTitle: "Articles connexes",
    relatedAria: "Articles de blog connexes",
    seeAlso: "Voir aussi",
    and: "et",
    requestDemo: "Demander une démo",
    privacyPolicy: "Politique de confidentialité",
    backToBlog: "Retour au blogue",
    notFound: "Article introuvable",
    category: "Catégorie",
  },
  privacy: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : juin 2026",
    sections: [
      {
        heading: "Collecte des renseignements",
        body: "Nous collectons les renseignements que vous nous fournissez via le formulaire de contact : nom, courriel, téléphone, entreprise et description de votre besoin.",
      },
      {
        heading: "Utilisation",
        body: "Ces renseignements servent uniquement à répondre à votre demande, planifier une démonstration et assurer le suivi commercial.",
      },
      {
        heading: "Conservation et sécurité",
        body: "Les données sont conservées le temps nécessaire à la relation commerciale et protégées par des mesures techniques et organisationnelles appropriées.",
      },
      {
        heading: "Vos droits",
        body: "Vous pouvez demander l'accès, la rectification ou la suppression de vos renseignements en écrivant à contact@agropure-analytics.com.",
      },
    ],
  },
};
