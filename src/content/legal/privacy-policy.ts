import { DEFAULT_LOCALE, type Locale } from "@/i18n/types";

export type PrivacyPolicySection = {
  title: string;
  body: string;
};

export type PrivacyPolicyContent = {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  sections: PrivacyPolicySection[];
};

const fr: PrivacyPolicyContent = {
  title: "Politique de confidentialité et de consentement",
  metaDescription:
    "Politique de confidentialité d'AgroPure Analytics : collecte, utilisation et protection de vos renseignements personnels conformément à la Loi 25 et à la LPRPDE.",
  lastUpdated: "Juin 2026",
  sections: [
    {
      title: "Responsable du traitement",
      body: "AgroPure Analytics est responsable des renseignements personnels collectés par l'intermédiaire du site agropure-analytics.com. Pour toute question : contact@agropure-analytics.com.",
    },
    {
      title: "Renseignements collectés",
      body: "Nous pouvons collecter : nom, prénom, courriel, téléphone, entreprise, site web et message lorsque vous utilisez notre formulaire de contact; données techniques de navigation (adresse IP, type de navigateur, pages consultées); préférences de consentement enregistrées localement dans votre navigateur.",
    },
    {
      title: "Finalités",
      body: "Les renseignements sont utilisés pour répondre à vos demandes, assurer le fonctionnement et la sécurité du site, améliorer nos services et, avec votre consentement, analyser l'utilisation du site.",
    },
    {
      title: "Fondement juridique et consentement",
      body: "Le traitement repose sur votre consentement (formulaire, bannière de cookies) et, le cas échéant, sur l'intérêt légitime d'AgroPure à sécuriser et exploiter son site. Vous pouvez retirer votre consentement en tout temps.",
    },
    {
      title: "Cookies et technologies similaires",
      body: "Des témoins essentiels permettent de mémoriser votre choix de consentement. Des outils d'analyse non essentiels ne seront activés qu'avec votre accord explicite via la bannière de consentement.",
    },
    {
      title: "Tiers et hébergement",
      body: "Le site est hébergé sur l'infrastructure Cloudflare. Les demandes de contact transitent par Web3Forms. Des polices peuvent être chargées depuis Google Fonts. Ces tiers peuvent traiter des données hors du Québec; des mesures contractuelles et organisationnelles sont appliquées.",
    },
    {
      title: "Conservation",
      body: "Les renseignements du formulaire sont conservés le temps nécessaire pour traiter votre demande et respecter nos obligations légales. Les durées précises seront précisées dans la version définitive de cette politique.",
    },
    {
      title: "Vos droits",
      body: "Conformément à la Loi 25 (Québec) et à la LPRPDE (Canada), vous pouvez demander l'accès, la rectification, la suppression ou la portabilité de vos renseignements, ou retirer votre consentement, en écrivant à contact@agropure-analytics.com.",
    },
    {
      title: "Plainte",
      body: "Vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec (CAI) ou du Commissariat à la protection de la vie privée du Canada (CPVP) si vous estimez que vos droits n'ont pas été respectés.",
    },
    {
      title: "Modifications",
      body: "Nous pouvons mettre à jour cette politique. La date de dernière mise à jour sera indiquée en haut de la page. Nous vous encourageons à la consulter périodiquement.",
    },
  ],
};

const en: PrivacyPolicyContent = {
  title: "Privacy and consent policy",
  metaDescription:
    "AgroPure Analytics privacy policy: how we collect, use and protect personal information under Quebec Law 25 and PIPEDA.",
  lastUpdated: "June 2026",
  sections: [
    {
      title: "Data controller",
      body: "AgroPure Analytics is responsible for personal information collected through agropure-analytics.com. Questions: contact@agropure-analytics.com.",
    },
    {
      title: "Information collected",
      body: "We may collect: name, email, phone, company, website and message when you use our contact form; technical browsing data (IP address, browser type, pages viewed); consent preferences stored locally in your browser.",
    },
    {
      title: "Purposes",
      body: "Information is used to respond to your requests, operate and secure the site, improve our services and, with your consent, analyze site usage.",
    },
    {
      title: "Legal basis and consent",
      body: "Processing is based on your consent (form, cookie banner) and, where applicable, AgroPure's legitimate interest in operating and securing the site. You may withdraw consent at any time.",
    },
    {
      title: "Cookies and similar technologies",
      body: "Essential cookies remember your consent choice. Non-essential analytics tools are only enabled with your explicit agreement via the consent banner.",
    },
    {
      title: "Third parties and hosting",
      body: "The site is hosted on Cloudflare infrastructure. Contact requests are sent via Web3Forms. Fonts may be loaded from Google Fonts. These third parties may process data outside Quebec; contractual and organizational measures apply.",
    },
    {
      title: "Retention",
      body: "Contact form information is kept as long as needed to process your request and meet legal obligations. Specific retention periods will be stated in the final version of this policy.",
    },
    {
      title: "Your rights",
      body: "Under Quebec Law 25 and PIPEDA (Canada), you may request access, correction, deletion or portability of your information, or withdraw consent, by writing to contact@agropure-analytics.com.",
    },
    {
      title: "Complaint",
      body: "You may file a complaint with the Commission d'accès à l'information du Québec (CAI) or the Office of the Privacy Commissioner of Canada (OPC) if you believe your rights were not respected.",
    },
    {
      title: "Changes",
      body: "We may update this policy. The last updated date will appear at the top of the page. We encourage you to review it periodically.",
    },
  ],
};

const es: PrivacyPolicyContent = {
  title: "Política de privacidad y consentimiento",
  metaDescription:
    "Política de privacidad de AgroPure Analytics conforme a la Ley 25 de Quebec y la LPRPDE de Canadá.",
  lastUpdated: "Junio de 2026",
  sections: [
  {
    title: "Responsable del tratamiento",
    body: "AgroPure Analytics es responsable de los datos personales recopilados a través de agropure-analytics.com. Consultas: contact@agropure-analytics.com.",
  },
  {
    title: "Datos recopilados",
    body: "Podemos recopilar: nombre, correo, teléfono, empresa, sitio web y mensaje del formulario de contacto; datos técnicos de navegación; preferencias de consentimiento almacenadas localmente.",
  },
  {
    title: "Finalidades",
    body: "Los datos se utilizan para responder a sus solicitudes, operar y asegurar el sitio, mejorar nuestros servicios y, con su consentimiento, analizar el uso del sitio.",
  },
  {
    title: "Base legal y consentimiento",
    body: "El tratamiento se basa en su consentimiento (formulario, banner de cookies) y, cuando corresponda, en el interés legítimo de AgroPure. Puede retirar su consentimiento en cualquier momento.",
  },
  {
    title: "Cookies y tecnologías similares",
    body: "Las cookies esenciales memorizan su elección de consentimiento. Las herramientas de análisis no esenciales solo se activan con su acuerdo explícito.",
  },
  {
    title: "Terceros y alojamiento",
    body: "El sitio está alojado en Cloudflare. Las solicitudes de contacto se envían mediante Web3Forms. Las fuentes pueden cargarse desde Google Fonts.",
  },
  {
    title: "Conservación",
    body: "Los datos del formulario se conservan el tiempo necesario para procesar su solicitud y cumplir obligaciones legales.",
  },
  {
    title: "Sus derechos",
    body: "Según la Ley 25 (Quebec) y la LPRPDE (Canadá), puede solicitar acceso, rectificación, eliminación o portabilidad escribiendo a contact@agropure-analytics.com.",
  },
  {
    title: "Queja",
    body: "Puede presentar una queja ante la CAI (Quebec) o el CPVP (Canadá).",
  },
  {
    title: "Modificaciones",
    body: "Podemos actualizar esta política. La fecha de última actualización aparecerá en la parte superior de la página.",
  },
  ],
};

const zh: PrivacyPolicyContent = {
  title: "隐私与同意政策",
  metaDescription: "AgroPure Analytics 隐私政策：依据魁北克第 25 号法案与加拿大 PIPEDA 收集、使用和保护个人信息。",
  lastUpdated: "2026 年 6 月",
  sections: [
    {
      title: "数据控制者",
      body: "AgroPure Analytics 对通过 agropure-analytics.com 收集的个人信息负责。联系：contact@agropure-analytics.com。",
    },
    {
      title: "收集的信息",
      body: "我们可能收集：联系表单中的姓名、电子邮件、电话、公司、网站和留言；浏览技术数据；以及本地存储的同意偏好。",
    },
    {
      title: "使用目的",
      body: "信息用于回复您的请求、运营和保护网站、改进服务，以及在您同意的情况下分析网站使用情况。",
    },
    {
      title: "法律依据与同意",
      body: "处理基于您的同意（表单、Cookie 横幅），以及在适用情况下 AgroPure 运营网站的合法利益。您可随时撤回同意。",
    },
    {
      title: "Cookie 与类似技术",
      body: "必要 Cookie 用于记住您的同意选择。非必要分析工具仅在您通过同意横幅明确同意后才启用。",
    },
    {
      title: "第三方与托管",
      body: "网站托管于 Cloudflare。联系请求通过 Web3Forms 发送。字体可能从 Google Fonts 加载。",
    },
    {
      title: "保留期限",
      body: "联系表单信息在处理请求和履行法律义务所需的时间内保留。",
    },
    {
      title: "您的权利",
      body: "根据魁北克第 25 号法案与 PIPEDA，您可请求访问、更正、删除或移植您的信息，或撤回同意：contact@agropure-analytics.com。",
    },
    {
      title: "投诉",
      body: "可向魁北克信息获取委员会（CAI）或加拿大隐私专员办公室（OPC）提出投诉。",
    },
    {
      title: "变更",
      body: "我们可能会更新本政策。最后更新日期将显示在页面顶部。",
    },
  ],
};

export const privacyPolicyContent: Record<Locale, PrivacyPolicyContent> = {
  fr,
  en,
  es,
  zh,
};

export function getPrivacyPolicy(locale: Locale): PrivacyPolicyContent {
  return privacyPolicyContent[locale] ?? privacyPolicyContent[DEFAULT_LOCALE];
}
