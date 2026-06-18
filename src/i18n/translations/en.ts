import type { Translations } from "../types";

export const en: Translations = {
  meta: {
    homeTitle: "AgroPure Analytics, Less stress. Lower costs. Higher yields.",
    homeDescription:
      "National platforms, farmer apps and credit scoring: AgroPure Analytics converts agricultural data into real-time decisions across Africa, Canada and the United States.",
    privacyTitle: "Privacy Policy, AgroPure Analytics",
    privacyDescription: "How AgroPure Analytics collects, uses and protects your personal information.",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you are looking for does not exist or has been moved.",
    errorTitle: "This page could not load",
    errorBody: "Something went wrong on our end.",
    backHome: "Back to home",
    retry: "Try again",
  },
  nav: {
    sectors: "Our sectors",
    features: "Features",
    delivery: "Deployment",
    markets: "Global markets",
    cases: "Case studies",
    blog: "Blog",
    contact: "Contact",
    requestDemo: "Request a demo",
    letsTalk: "Request a demo",
    demoShort: "Demo",
    openMenu: "Open menu",
    menu: "Menu",
    language: "Language",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
  },
  footer: {
    sectorsTitle: "Sectors",
    companyTitle: "Company",
    privacy: "Privacy policy",
    linkedInAria: "AgroPure Analytics on LinkedIn",
    tagline: "Agricultural data, turned into action.",
    copyright: "© 2026 AgroPure Analytics. All rights reserved.",
    sectors: [
      { label: "Governments", href: "#gouvernement" },
      { label: "Farmers", href: "#agriculteur" },
      { label: "Cooperatives & NGOs", href: "#cooperative" },
      { label: "Insurance", href: "#assurance" },
    ],
  },
  consent: {
    ariaLabel: "Data collection consent",
    message:
      "We use essential cookies to remember your preferences and may enable analytics tools only with your consent.",
    accept: "Accept",
    reject: "Decline",
    learnMore: "Privacy policy",
  },
  home: {
    hero: {
      title: "Less stress. Lower costs. Higher yields.",
      subtitle:
        "Protect your crops and anticipate their behavior: centralize your data into clear instructions to act at the right moment.",
      ctaPrimary: "Request a demo",
    },
    intro: {
      label: "Our mission",
      text: "Deliver powerful AI-driven decision tools that turn unexploited agricultural data into clear action, optimizing yields as resources tighten, deciding faster, and reducing day-to-day stress.",
    },
    industries: {
      eyebrow: "Our sectors",
      title:
        "From public policy to farm operations, from supply chains to insurers: AgroPure adapts its tools to every agricultural decision environment.",
      learnMore: "Learn more",
      items: [
        {
          id: "gouvernement",
          cardTitle: "Governments",
          desc: "Scattered data and field reports delivered months late means steering blind. AgroPure unifies plots, crops and water on one national dashboard — so you act at the right time, not after the season is lost.",
        },
        {
          id: "agriculteur",
          cardTitle: "Farmers",
          desc: "Without clear plot-level data, every day works against you. Photo diagnostics, alerts and simple recommendations help you protect crops, cut input costs and decide before risk spreads.",
        },
        {
          id: "cooperative",
          cardTitle: "Cooperatives & NGOs",
          desc: "Invisible markets, flows and traceability erode producer income. Marketing tools, transhumance tracking and end-to-end traceability to secure your chains and build partner trust.",
        },
        {
          id: "assurance",
          cardTitle: "Insurance",
          desc: "Underwriting without reliable field data means pricing and paying claims on guesswork. AgroPure continuously updates farm-level indicators — to cut errors, reduce fraud and speed every decision.",
        },
      ],
    },
    integrations: {
      title: "Built to integrate easily with your fleet",
      description:
        "Worried about months of IT integration or replacing equipment? AgroPure connects to the tractors and drones already on your farm, no brand silos, no manual re-entry.",
    },
    features: {
      title: "Farming means managing living systems that never stay the same",
      description:
        "On average, it takes a farmer 10 years to optimize yields: a timeline neither farmers nor managers can afford. Every season, weather, soils and pests rewrite the rules. AgroPure processes your satellite, field and sensor data to deliver clear instructions before those shifts, make your yields more predictable, anticipate risk and decide at the right time.",
      learnMore: "Learn more",
      categories: [
        {
          id: "national-data",
          label: "National oversight & data",
          tools: [
            {
              id: "national-platform",
              label: "National agricultural platform",
              description:
                "Centralize plots, crops and sensors to manage agriculture nationally in real time.",
              stats: [
                { value: "+15%", label: "projected yield on at-risk plots" },
                { value: "-60%", label: "losses from late decisions" },
                { value: "126", label: "plots monitored in real time" },
              ],
            },
            {
              id: "survey-digitization",
              label: "Survey digitization",
              description:
                "Replace paper forms with digital field surveys that sync and audit automatically.",
              stats: [
                { value: "-70%", label: "survey collection cost per form" },
                { value: "3×", label: "policy decision ROI" },
                { value: "99%", label: "actionable data without re-entry" },
              ],
            },
            {
              id: "traceability",
              label: "Traceability",
              description:
                "Track every lot from plot to customer to secure supply chains and speed up audits.",
              stats: [
                { value: "-45%", label: "losses during product recalls" },
                { value: "+18%", label: "traceable supply chain premium" },
                { value: "100%", label: "lots certified plot to customer" },
              ],
            },
          ],
        },
        {
          id: "agronomic-monitoring",
          label: "Agronomic monitoring",
          tools: [
            {
              id: "water-reservoirs",
              label: "Water reservoir monitoring",
              description:
                "Monitor water stocks and levels to anticipate drought and reduce losses.",
              stats: [
                { value: "-35%", label: "undetected water losses" },
                { value: "+28%", label: "yield preserved in drought" },
                { value: "< 15 min", label: "alert before irrigation cutoff" },
              ],
            },
            {
              id: "crop-practices",
              label: "Crop practice mastery",
              description:
                "Measure adoption of best practices and steer support policies.",
              stats: [
                { value: "+15%", label: "projected yield after coaching" },
                { value: "+42%", label: "high-impact practice adoption" },
                { value: "-30%", label: "performance gaps between regions" },
              ],
            },
            {
              id: "stone-cordons",
              label: "Stone cordon modeling",
              description:
                "Map and model stone cordons for soil conservation and erosion control.",
              stats: [
                { value: "-87%", label: "erosion on equipped sites" },
                { value: "+5.8 ha", label: "area restored per typical project" },
                { value: "-50%", label: "field survey cost" },
              ],
            },
          ],
        },
        {
          id: "field-intelligence",
          label: "Field intelligence",
          tools: [
            {
              id: "pest-diagnostic",
              label: "Pest & disease diagnostics",
              description:
                "Identify pests and diseases from photos to act before yield losses.",
              stats: [
                { value: "+18%", label: "yield preserved vs untreated" },
                { value: "-40%", label: "pest losses avoided" },
                { value: "94%", label: "diagnostics driving right treatment" },
              ],
            },
            {
              id: "ag-calculator",
              label: "Agricultural calculator",
              description:
                "Simulate doses, costs and crop scenarios without spreadsheets or expert skills.",
              stats: [
                { value: "-25%", label: "input cost per hectare" },
                { value: "+15%", label: "projected margin on pilot crop" },
                { value: "< 2 min", label: "to a profitable fert plan" },
              ],
            },
            {
              id: "ag-assistant",
              label: "Agricultural assistant",
              description:
                "Get personalized guidance based on your plot data, weather and crop history.",
              stats: [
                { value: "+35%", label: "profitable decisions made on time" },
                { value: "-60%", label: "avoidable losses from delayed action" },
                { value: "92%", label: "plots under active monitoring" },
              ],
            },
          ],
        },
        {
          id: "market-chain",
          label: "Market & value chain",
          tools: [
            {
              id: "market-tools",
              label: "Market tools",
              description:
                "Track price trends and local markets to sell at the right time.",
              stats: [
                { value: "+15%", label: "projected revenue at optimal sale window" },
                { value: "+12%", label: "average revenue at sale" },
                { value: "48 h", label: "ahead of price spikes" },
              ],
            },
            {
              id: "ag-logistics",
              label: "Agricultural logistics",
              description:
                "Optimize collection, transport and storage to cut post-harvest losses.",
              stats: [
                { value: "-32%", label: "post-harvest logistics losses" },
                { value: "+22%", label: "logistics margin on optimized routes" },
                { value: "-45%", label: "crop holding cost at collection" },
              ],
            },
            {
              id: "harvest-tokenization",
              label: "Harvest tokenization",
              description:
                "Secure and fractionalize harvest value to finance and trace flows.",
              stats: [
                { value: "+40%", label: "producers accessing financing" },
                { value: "-55%", label: "harvest cash unlock delay" },
                { value: "+15%", label: "projected net revenue post-tokenization" },
              ],
            },
          ],
        },
      ],
    },
    delivery: {
      title: "Choose the integration model that fits your organization",
      subtitle: "API, white-label or web application: we adapt to your infrastructure and regulatory constraints.",
      columns: [
        {
          title: "API integration",
          description: "Connect AgroPure to your existing systems.",
          bullets: ["Documented REST APIs", "Real-time webhooks", "Database connectors", "Dedicated technical support"],
        },
        {
          title: "White-label solutions",
          description: "Deploy under your brand, at national scale.",
          bullets: ["Full UI customization", "Dedicated or sovereign hosting", "Team training", "SLA and priority support"],
        },
        {
          title: "Web application & mobile app",
          description: "Immediate access, no installation.",
          bullets: ["Intuitive multi-device UI", "Continuous updates", "Configurable dashboards", "Offline field access (sync)"],
        },
      ],
    },
    trust: {
      title: "Supported by the Canadian innovation ecosystem",
    },
    caseStudies: {
      eyebrow: "Case studies",
      title: "Measurable results in the field",
      items: [
        {
          tag: "Case study",
          title: "National crop monitoring platform",
          excerpt:
            "Deployment of a national agriculture engine integrating satellite imagery and field surveys for 25,000+ daily monitored plots.",
          cta: "Read more",
          slug: "national-crop-monitoring-platform",
        },
        {
          tag: "Case study",
          title: "Real-time photo pest diagnostics",
          excerpt:
            "Field agents identify diseases and pests via smartphone; alerts are centralized for coordinated response.",
          cta: "Read more",
          slug: "real-time-pest-diagnostics-field",
        },
        {
          tag: "Case study",
          title: "Agricultural credit scoring for insurers",
          excerpt:
            "Spatialized performance and risk indicators refine agricultural credit assessment with verifiable data.",
          cta: "Read more",
          slug: "agricultural-credit-scoring-insurers",
        },
      ],
    },
    commodityMarkets: {
      eyebrow: "Global markets",
      title: "Commodity and agricultural input prices",
      subtitle:
        "Track grain benchmarks, fertilizers, and energy to anticipate farm production costs and margins.",
      ctaTitle: "Ready to increase the value of your assets and on-farm inventory?",
      ctaButton: "Contact us",
      asOf: "As of",
      sourceLive: "USDA / EIA data via GrainBrief",
      sourceMock: "Indicative demo data",
      disclaimer:
        "Indicative prices for information only, shown in USD. Local markets may differ. Sources: USDA AMS, EIA, FAO FPMA.",
      fpmaLink: "Explore food prices on FAO FPMA",
      fpmaHref: "https://fpma.fao.org/giews/fpmat4/",
      loading: "Loading prices…",
      scrollUp: "Previous products",
      scrollDown: "Next products",
      products: {
        wheat: "Wheat",
        corn: "Corn",
        soy: "Soybeans",
        sorghum: "Sorghum",
        urea: "Urea",
        dap: "DAP",
        potash: "Potash",
        ammonia: "Ammonia",
        diesel: "Diesel",
        natGas: "Natural gas",
      },
      tickers: {
        wheat: "WHEAT",
        corn: "CORN",
        soy: "SOY",
        sorghum: "SORGH",
        urea: "UREA",
        dap: "DAP",
        potash: "POTASH",
        ammonia: "NH3",
        diesel: "DIESEL",
        natGas: "GAS",
      },
    },
    contact: {
      title: "Let's talk about your project",
      subtitle: "Discover how AgroPure Analytics can turn your agricultural data into concrete decisions with a strategy tailored to your reality.",
      cta: "Schedule a meeting",
      formTitle: "Describe your need",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      phonePlaceholder: "819 919 8683",
      phoneCountryLabel: "Country code",
      company: "Company",
      website: "Website",
      websitePlaceholder: "example.com",
      need: "Your need",
      needPlaceholder: "Describe your context, goals and timeline…",
      submit: "Send my request",
      submitting: "Sending…",
      successTitle: "Message sent",
      successBody: "Our team will contact you shortly. Thank you for your interest.",
      honeypot: "Do not fill",
      privacyConsentBefore: "I agree that my information will be processed according to the",
      privacyConsentLink: "privacy policy",
      privacyConsentAfter: ".",
      errors: {
        lastName: "Last name is required.",
        firstName: "First name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Invalid email.",
        message: "Please describe your need.",
        messageTooLong: "Message too long (max 5000 characters).",
        consentRequired: "Consent is required.",
      },
    },
    faq: {
      title: "Your questions answered",
      subtitle:
        "Clear answers on national crop monitoring, field diagnostics, credit scoring and deployment, for teams in Africa, Canada and the United States.",
      footerBefore: "Still evaluating AgroPure for your organization?",
      footerLink: "Request a personalized demo",
      footerAfter: ", our team responds within one business day.",
      items: [
        {
          id: "faq-what-is-agropure",
          question: "What is AgroPure Analytics and who is it built for?",
          answer:
            "AgroPure Analytics is an agricultural data platform that unifies satellite imagery, mobile field surveys and agronomic indicators into real-time dashboards for governments, farmers, cooperatives and insurers in Africa, Canada and the United States.",
          answerHtml:
            'AgroPure Analytics is a <strong>precision agriculture software suite</strong> that turns satellite imagery, GPS field surveys and machine data into decisions you can act on today, not next season. We serve <a href="#gouvernement">national agriculture programs</a>, <a href="#agriculteur">farmer-facing apps</a>, <a href="#cooperative">cooperatives</a> and <a href="#assurance">insurers</a> across Africa, Canada and the United States. According to the <a href="https://www.fao.org/statistics/en/" rel="noopener noreferrer">FAO</a>, timely agricultural data is critical to food security; AgroPure closes that gap without requiring a GIS team. <a href="#contact">Book a demo</a> to see your use case mapped in 30 minutes.',
        },
        {
          id: "faq-national-monitoring",
          question: "How do governments deploy a national crop monitoring platform?",
          answer:
            "A national crop monitoring platform combines parcel boundaries, daily satellite vegetation indices and mobile survey workflows so ministries can track tens of thousands of plots and publish crop status reports weeks earlier than paper-based systems.",
          answerHtml:
            'Ministries typically start with <strong>parcel registration and field boundary detection</strong>, then layer Sentinel or Landsat NDVI time series and mobile enumerator forms. AgroPure clients monitor <strong>25,000+ plots per day</strong> from a single dashboard, cutting report cycles by up to 68% compared to manual consolidation. See our <a href="/en/blog/national-crop-monitoring-platform">national crop monitoring case study</a> or explore open boundary datasets from <a href="https://fieldsofthe.world/" rel="noopener noreferrer">Fields of the World</a>. Ready to scope a pilot? <a href="#contact">Talk to our public-sector team</a>.',
        },
        {
          id: "faq-pest-diagnostics",
          question: "Can field agents diagnose crop pests and diseases with a smartphone?",
          answer:
            "Yes. Mobile photo diagnostics let agents capture geotagged images of suspicious symptoms; AI-assisted classification and agronomist review cut average response time from days to under 48 hours.",
          answerHtml:
            'Field teams use the AgroPure app to photograph symptoms on-site. Models pre-classify common pests and diseases; agronomists validate alerts on a regional map so cooperatives coordinate treatment windows. Pilots show <strong>34% fewer unnecessary pesticide applications</strong> and diagnostic delays under 48 hours. Learn more in our <a href="/en/blog/real-time-pest-diagnostics-field">real-time pest diagnostics study</a> and the <a href="https://www.fao.org/plant-health/en/" rel="noopener noreferrer">FAO plant health program</a>. <a href="#contact">Start a field pilot</a> before the next growing season.',
        },
        {
          id: "faq-credit-scoring",
          question: "How does agricultural credit scoring work for insurers and lenders?",
          answer:
            "Agricultural credit scoring aggregates multi-year vegetation trends, crop rotation patterns and verified field surveys into a spatial risk score that underwriters can audit plot by plot, reducing manual inspections and default surprises.",
          answerHtml:
            'Instead of relying on self-reported yields, AgroPure builds a <strong>spatial credit score</strong> from NDVI history, planting dates and cooperative payment records, aligned with <a href="https://www.worldbank.org/en/topic/financialsector/brief/agriculture-finance" rel="noopener noreferrer">World Bank agricultural finance</a> best practices. Insurers in our pilots approved <strong>22% more qualified smallholder loans</strong> while cutting field inspection costs by 41%. Read the full <a href="/en/blog/agricultural-credit-scoring-insurers">insurance case study</a> or <a href="#contact">request an underwriting workshop</a>.',
        },
        {
          id: "faq-api-white-label",
          question: "Can we integrate AgroPure via API or deploy a white-label farm platform?",
          answer:
            "AgroPure offers documented REST APIs, webhooks and fully branded white-label portals so OEMs, cooperatives and ministries embed parcel analytics without building geospatial infrastructure from scratch.",
          answerHtml:
            'Partners choose modules à la carte, boundaries, NDVI, surveys, pest diagnostics, and go live in as little as <strong>14 weeks</strong> versus 12+ months for in-house GIS builds. APIs connect to John Deere, CNH and DJI feeds already supported on our platform. Details: <a href="/en/blog/agtech-api-white-label-integration">API &amp; white-label guide</a>. <a href="#contact">Schedule a technical discovery call</a> with our solutions architects.',
        },
        {
          id: "faq-offline-africa",
          question: "Does AgroPure work offline in rural Africa and remote regions?",
          answer:
            "Yes. Mobile survey and diagnostic modules support offline capture with automatic sync when connectivity returns, which is essential for enumerator programs and farmer apps in low-bandwidth areas.",
          answerHtml:
            'Enumerator and farmer apps store forms, maps and photos locally, then sync when 3G or satellite backhaul is available, the same pattern recommended by <a href="https://www.cgiar.org/" rel="noopener noreferrer">CGIAR</a> digital extension programs. AgroPure also supports <strong>sovereign or on-premise hosting</strong> for government clients. See <a href="/en/blog/smallholder-credit-data-africa">smallholder programs in Africa</a> or <a href="#contact">describe your connectivity constraints</a>, we will propose a deployment architecture.',
        },
      ],
    },
  },
  blog: {
    title: "Case studies & insights",
    subtitle:
      "Field-proven deployments for governments, farmers, cooperatives and insurers across Africa, Canada and the United States.",
    readMore: "Read article",
    minRead: "min read",
    allArticles: "All articles",
    relatedTitle: "Related articles",
    relatedAria: "Related blog articles",
    seeAlso: "See also",
    and: "and",
    requestDemo: "Request a demo",
    privacyPolicy: "Privacy policy",
    backToBlog: "Back to blog",
    notFound: "Article not found",
    category: "Category",
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: June 2026",
    sections: [
      { heading: "Information we collect", body: "We collect information you provide via the contact form: name, email, phone, company and description of your need." },
      { heading: "How we use it", body: "This information is used solely to respond to your request, schedule a demo and provide commercial follow-up." },
      { heading: "Retention and security", body: "Data is retained as long as needed for the business relationship and protected with appropriate technical and organizational measures." },
      { heading: "Your rights", body: "You may request access, correction or deletion of your information by writing to contact@agropure-analytics.com." },
    ],
  },
};
