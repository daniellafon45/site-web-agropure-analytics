import type { Translations } from "../types";
import { en } from "./en";

export const zh: Translations = {
  ...en,
  meta: {
    ...en.meta,
    homeTitle: "AgroPure Analytics, 更少压力。更低成本。更高产量。",
    homeDescription:
      "国家级平台、农户应用与信贷评分：AgroPure Analytics 在非洲、加拿大和美国将农业数据转化为实时决策。",
    privacyTitle: "隐私政策, AgroPure Analytics",
    privacyDescription: "AgroPure Analytics 如何收集、使用和保护您的个人信息。",
    notFoundTitle: "页面未找到",
    notFoundBody: "您查找的页面不存在或已移动。",
    errorTitle: "页面无法加载",
    errorBody: "我们这边出现了问题。",
    backHome: "返回首页",
    retry: "重试",
  },
  nav: {
    sectors: "行业领域",
    features: "功能",
    delivery: "部署方式",
    markets: "全球市场",
    cases: "案例研究",
    blog: "博客",
    contact: "联系",
    requestDemo: "申请演示",
    letsTalk: "申请演示",
    demoShort: "演示",
    openMenu: "打开菜单",
    menu: "菜单",
    language: "语言",
    themeLight: "切换到浅色模式",
    themeDark: "切换到深色模式",
  },
  footer: {
    ...en.footer,
    sectorsTitle: "行业领域",
    companyTitle: "公司",
    privacy: "隐私政策",
    tagline: "农业数据，化为行动。",
    copyright: "© 2026 AgroPure Analytics。保留所有权利。",
    sectors: [
      { label: "政府", href: "#gouvernement" },
      { label: "农户", href: "#agriculteur" },
      { label: "合作社与非政府组织", href: "#cooperative" },
      { label: "保险", href: "#assurance" },
    ],
  },
  consent: {
    ariaLabel: "数据收集同意",
    message: "我们使用必要 Cookie 记住您的偏好，仅在您同意时启用分析工具。",
    accept: "接受",
    reject: "拒绝",
    learnMore: "隐私政策",
  },
  home: {
    ...en.home,
    hero: {
      title: "更少压力。更低成本。更高产量。",
      subtitle:
        "保护作物、预判田间变化：集中数据，转化为清晰可执行指令，在正确时机行动。",
      ctaPrimary: "申请演示",
    },
    intro: {
      label: "我们的使命",
      text: "提供由 AI 驱动的强大决策工具，将尚未充分利用的农业数据转化为清晰行动, 在资源日益紧张时优化产量、加快决策、减轻日常压力。",
    },
    industries: {
      eyebrow: "行业领域",
      title: "从公共政策到农场经营，从产业链到保险机构：AgroPure 为每一种农业决策场景提供适配工具。",
      learnMore: "了解更多",
      items: [
        {
          id: "gouvernement",
          cardTitle: "政府",
          desc: "数据分散、田间报告滞后数月，决策只能摸黑前行。AgroPure 将地块、作物与水资源统一到全国仪表盘——在关键时刻行动，而不是错过农时。",
        },
        {
          id: "agriculteur",
          cardTitle: "农户",
          desc: "缺乏清晰的地块数据，每一天都在增加风险。照片诊断、预警与简明建议：保护作物、降低投入、在问题扩散前做出决定。",
        },
        {
          id: "cooperative",
          cardTitle: "合作社与非政府组织",
          desc: "市场、流向与溯源不可见，生产者收入受损。营销工具、转场追踪与端到端溯源，稳固产业链并赢得合作伙伴信任。",
        },
        {
          id: "assurance",
          cardTitle: "保险",
          desc: "没有可靠田间数据，承保与理赔只能凭经验。AgroPure 持续更新农场级指标——减少差错、遏制欺诈、加快每一项决策。",
        },
      ],
    },
    integrations: {
      title: "专为与您现有农机队轻松对接而设计",
      description:
        "担心漫长的信息化集成或更换设备？AgroPure 对接您现有的拖拉机与无人机，无需跨品牌数据孤岛，无需反复手工录入。",
    },
    features: {
      title: "农业，就是管理不断变化的生命体",
      description:
        "平均而言，农民需要10年才能优化产量：这是农户和管理者都等不起的周期。每个季节，气候、土壤和病虫害都会改写规则。AgroPure 整合卫星、田间与传感器数据，在这些变化发生之前提供清晰指令，让产量更可预测、提前规避风险、在关键时刻做出正确决策。",
      learnMore: "了解更多",
      categories: [
        {
          id: "national-data",
          label: "国家治理与数据",
          tools: [
            {
              id: "national-platform",
              label: "国家农业平台",
              description: "集中地块、作物与传感器数据，实时管理全国农业。",
              stats: [
                { value: "+15%", label: "风险地块预计增产" },
                { value: "-60%", label: "延误决策造成的损失" },
                { value: "126", label: "实时监控地块数" },
              ],
            },
            {
              id: "survey-digitization",
              label: "调查数字化",
              description: "以可同步、可审计的田间数字调查取代纸质表格。",
              stats: [
                { value: "-70%", label: "单次调查采集成本" },
                { value: "3×", label: "公共政策决策投资回报" },
                { value: "99%", label: "无需重录的可执行数据" },
              ],
            },
            {
              id: "traceability",
              label: "可追溯性",
              description: "从地块到客户追踪每一批次，保障供应链并加速审计。",
              stats: [
                { value: "-45%", label: "产品召回造成的损失" },
                { value: "+18%", label: "可追溯供应链溢价" },
                { value: "100%", label: "地块到客户批次认证" },
              ],
            },
          ],
        },
        {
          id: "agronomic-monitoring",
          label: "农艺监测",
          tools: [
            {
              id: "water-reservoirs",
              label: "水库监测",
              description: "监测蓄水量与水位，预判干旱并减少损失。",
              stats: [
                { value: "-35%", label: "未发现的输水损失" },
                { value: "+28%", label: "干旱期保全产量" },
                { value: "< 15 分钟", label: "灌溉中断前预警" },
              ],
            },
            {
              id: "crop-practices",
              label: "栽培实践管理",
              description: "衡量最佳实践采纳率，指导扶持政策。",
              stats: [
                { value: "+15%", label: "辅导后预计增产" },
                { value: "+42%", label: "高影响实践采纳率" },
                { value: "-30%", label: "区域间绩效差距" },
              ],
            },
            {
              id: "stone-cordons",
              label: "石埂建模",
              description: "测绘并建模石埂，服务水土保持与侵蚀防控。",
              stats: [
                { value: "-87%", label: "已装备地块侵蚀减少" },
                { value: "+5.8 ha", label: "典型项目恢复面积" },
                { value: "-50%", label: "野外勘测成本" },
              ],
            },
          ],
        },
        {
          id: "field-intelligence",
          label: "田间智能",
          tools: [
            {
              id: "pest-diagnostic",
              label: "病虫害诊断",
              description: "通过照片识别病虫害，在减产前及时干预。",
              stats: [
                { value: "+18%", label: "较未处理保全产量" },
                { value: "-40%", label: "避免的虫害损失" },
                { value: "94%", label: "诊断驱动精准防治" },
              ],
            },
            {
              id: "ag-calculator",
              label: "农业计算器",
              description: "无需表格或专业知识，模拟用量、成本与种植方案。",
              stats: [
                { value: "-25%", label: "每公顷投入成本" },
                { value: "+15%", label: "试点作物预计毛利" },
                { value: "< 2 分钟", label: "获得盈利施肥方案" },
              ],
            },
            {
              id: "ag-assistant",
              label: "农业助手",
              description: "根据地块数据、天气与种植历史提供个性化指导。",
              stats: [
                { value: "+35%", label: "及时盈利决策比例" },
                { value: "-60%", label: "延误行动可避免损失" },
                { value: "92%", label: "活跃监测地块占比" },
              ],
            },
          ],
        },
        {
          id: "market-chain",
          label: "市场与价值链",
          tools: [
            {
              id: "market-tools",
              label: "市场工具",
              description: "跟踪价格走势与本地市场，在最佳时机销售。",
              stats: [
                { value: "+15%", label: "最佳售窗预计收入" },
                { value: "+12%", label: "平均销售收入" },
                { value: "48 小时", label: "提前捕捉涨价" },
              ],
            },
            {
              id: "ag-logistics",
              label: "农业物流",
              description: "优化采收、运输与仓储，降低产后损失。",
              stats: [
                { value: "-32%", label: "产后物流损失" },
                { value: "+22%", label: "优化路线物流毛利" },
                { value: "-45%", label: "集货点仓储成本" },
              ],
            },
            {
              id: "harvest-tokenization",
              label: "收成代币化",
              description: "安全拆分收成价值，为融资与流转提供可追溯凭证。",
              stats: [
                { value: "+40%", label: "获得融资的生产者" },
                { value: "-55%", label: "收获资金解锁周期" },
                { value: "+15%", label: "代币化后预计净收入" },
              ],
            },
          ],
        },
      ],
    },
    delivery: {
      ...en.home.delivery,
      title: "选择适合您组织的集成模式",
      subtitle: "API、白标或 Web 应用：我们适应您的基础设施与监管要求。",
      columns: en.home.delivery.columns.map((col, i) => ({
        ...col,
        title: ["API 集成", "白标解决方案", "Web 应用与移动应用"][i],
        description: ["将 AgroPure 连接至现有系统。", "以您的品牌全国部署。", "即时访问，无需安装。"][i],
      })),
    },
    trust: { title: "由加拿大创新生态系统支持" },
    caseStudies: {
      ...en.home.caseStudies,
      eyebrow: "案例研究",
      title: "可衡量的田间成果",
      items: en.home.caseStudies.items.map((item, i) => ({
        ...item,
        tag: "案例研究",
        title: ["国家级作物监测平台", "实时照片病虫害诊断", "保险公司农业信贷评分"][i],
        cta: "阅读更多",
      })),
    },
    commodityMarkets: {
      ...en.home.commodityMarkets,
      eyebrow: "全球市场",
      title: "大宗商品与农业投入品价格",
      subtitle: "跟踪谷物、肥料与能源价格，预判生产成本。",
      ctaTitle: "想提升资产与农场库存的价值吗？",
      ctaButton: "联系我们",
      asOf: "截至",
      sourceLive: "GrainBrief 提供的 USDA / EIA 数据",
      sourceMock: "演示数据",
      disclaimer:
        "价格仅供参考，以美元（USD）计价。本地市场可能有所不同。来源：USDA AMS、EIA、FAO FPMA。",
      fpmaLink: "在 FAO FPMA 上分析食品价格",
      loading: "加载价格中…",
      scrollUp: "上一组产品",
      scrollDown: "下一组产品",
      products: {
        wheat: "小麦",
        corn: "玉米",
        soy: "大豆",
        sorghum: "高粱",
        urea: "尿素",
        dap: "DAP",
        potash: "钾肥",
        ammonia: "氨",
        diesel: "柴油",
        natGas: "天然气",
      },
      tickers: {
        wheat: "小麦",
        corn: "玉米",
        soy: "大豆",
        sorghum: "高粱",
        urea: "尿素",
        dap: "DAP",
        potash: "钾肥",
        ammonia: "氨",
        diesel: "柴油",
        natGas: "天然气",
      },
    },
    contact: {
      ...en.home.contact,
      title: "谈谈您的项目",
      subtitle: "了解 AgroPure Analytics 如何将农业数据转化为具体决策。",
      cta: "预约会议",
      formTitle: "描述您的需求",
      firstName: "名",
      lastName: "姓",
      email: "电子邮件",
      phone: "电话",
      phonePlaceholder: "138 0013 8000",
      phoneCountryLabel: "国家区号",
      company: "公司",
      website: "网站",
      need: "您的需求",
      submit: "发送请求",
      submitting: "发送中…",
      successTitle: "消息已发送",
      successBody: "我们的团队将尽快与您联系。",
      privacyConsentBefore: "我同意根据",
      privacyConsentLink: "隐私政策",
      privacyConsentAfter: "处理我的信息。",
      errors: {
        lastName: "姓为必填项。",
        firstName: "名为必填项。",
        emailRequired: "电子邮件为必填项。",
        emailInvalid: "电子邮件无效。",
        message: "请描述您的需求。",
        messageTooLong: "消息过长（最多 5000 字符）。",
        consentRequired: "需要同意。",
      },
    },
    faq: {
      title: "常见问题解答",
      subtitle:
        "如有其他问题，欢迎联系我们：我们乐意与您交流、解答疑问并讨论您的项目。",
      footerBefore: "仍在评估 AgroPure 是否适合贵组织？",
      footerLink: "预约个性化演示",
      footerAfter: ", 团队将在一个工作日内回复。",
      items: [
        {
          id: "faq-what-is-agropure",
          question: "AgroPure Analytics 是什么？面向哪些用户？",
          answer:
            "AgroPure Analytics 是农业数据平台，将卫星影像、移动田间调查与农艺指标整合为实时仪表板，服务非洲、加拿大和美国的政府、农户、合作社与保险公司。",
          answerHtml:
            'AgroPure Analytics 是一套<strong>精准农业软件</strong>，将卫星影像、GPS 田间调查与农机数据转化为可立即执行的决策。我们服务<a href="#gouvernement">国家级农业项目</a>、<a href="#agriculteur">农户应用</a>、<a href="#cooperative">合作社</a>与<a href="#assurance">保险公司</a>。<a href="https://www.fao.org/statistics/zh/" rel="noopener noreferrer">粮农组织</a>指出及时农业数据对粮食安全至关重要；AgroPure 无需专职 GIS 团队即可填补这一缺口。<a href="#contact">预约演示</a>，30 分钟梳理您的用例。',
        },
        {
          id: "faq-national-monitoring",
          question: "政府如何部署全国作物监测平台？",
          answer:
            "全国监测平台结合地块边界、每日卫星植被指数与移动调查流程，使部委可跟踪数万地块并比纸质系统提前数周发布作物状况报告。",
          answerHtml:
            '部委通常从<strong>地块登记与边界识别</strong>起步，再叠加 Sentinel/Landsat NDVI 时序与移动 enumerator 表单。客户从单一仪表板每日监测<strong>25,000+ 地块</strong>，报告周期最多缩短 68%。参阅<a href="/zh/blog/national-crop-monitoring-platform">全国监测案例</a>或 <a href="https://fieldsofthe.world/" rel="noopener noreferrer">Fields of the World</a> 开放数据。<a href="#contact">联系公共部门团队</a>规划试点。',
        },
        {
          id: "faq-pest-diagnostics",
          question: "田间人员能否用智能手机诊断病虫害？",
          answer:
            "可以。移动拍照诊断采集带地理坐标的症状图像；AI 辅助分类与农艺师复核将平均响应时间从数天缩短至 48 小时以内。",
          answerHtml:
            '现场团队拍摄症状照片，模型预分类常见病虫害，农艺师在区域地图上验证预警。试点显示<strong>不必要农药使用减少 34%</strong>，诊断延迟低于 48 小时。详见<a href="/zh/blog/real-time-pest-diagnostics-field">实时病虫害诊断研究</a>与<a href="https://www.fao.org/plant-health/zh/" rel="noopener noreferrer">粮农组织植物健康计划</a>。<a href="#contact">在下一季前启动田间试点</a>。',
        },
        {
          id: "faq-credit-scoring",
          question: "农业信贷评分如何服务保险公司与放贷机构？",
          answer:
            "农业信贷评分将多年植被趋势、轮作模式与核实田间调查聚合为可按地块审计的空间风险评分，减少人工查勘与违约意外。",
          answerHtml:
            'AgroPure 基于 NDVI 历史、播种日期与合作社记录构建<strong>空间信用评分</strong>，符合<a href="https://www.worldbank.org/zh/topic/financialsector/brief/agriculture-finance" rel="noopener noreferrer">世界银行</a>农业金融实践。试点中<strong>合格小农贷款批准率提高 22%</strong>，查勘成本降低 41%。阅读<a href="/zh/blog/agricultural-credit-scoring-insurers">保险案例</a>或<a href="#contact">申请核保工作坊</a>。',
        },
        {
          id: "faq-api-white-label",
          question: "能否通过 API 集成或白标部署农场平台？",
          answer:
            "AgroPure 提供文档化 REST API、Webhook 与全品牌白标门户，使 OEM、合作社与部委无需从零构建地理空间基础设施即可嵌入地块分析。",
          answerHtml:
            '按需选择边界、NDVI、调查、病虫害诊断等模块，<strong>14 周内</strong>上线，远快于 12 个月以上的自建 GIS。已支持 John Deere、CNH、DJI 数据接入。详见<a href="/zh/blog/agtech-api-white-label-integration">API 与白标指南</a>。<a href="#contact">预约技术发现会议</a>。',
        },
        {
          id: "faq-offline-africa",
          question: "AgroPure 在非洲农村等弱网地区能否离线使用？",
          answer:
            "可以。移动调查与诊断模块支持离线采集，联网后自动同步，适用于 enumerator 项目与低带宽地区的农户应用。",
          answerHtml:
            'Enumerator 与农户应用本地存储表单、地图与照片，在 3G 或卫星回传可用时同步, 与 <a href="https://www.cgiar.org/" rel="noopener noreferrer">CGIAR</a> 数字推广项目推荐模式一致。政府客户可选<strong>主权或本地托管</strong>。参阅<a href="/zh/blog/smallholder-credit-data-africa">非洲小农项目</a>或<a href="#contact">说明您的网络约束</a>，我们将提出部署架构。',
        },
      ],
    },
  },
  blog: {
    ...en.blog,
    title: "案例研究与洞察",
    subtitle: "面向非洲、加拿大和美国政府、农户、合作社与保险公司的实地验证部署。",
    readMore: "阅读文章",
    minRead: "分钟阅读",
    allArticles: "全部文章",
    relatedTitle: "相关文章",
    relatedAria: "相关博客文章",
    seeAlso: "另请参阅",
    and: "和",
    requestDemo: "申请演示",
    privacyPolicy: "隐私政策",
    backToBlog: "返回博客",
    notFound: "未找到文章",
    category: "分类",
  },
  privacy: {
    title: "隐私政策",
    updated: "最后更新：2026年6月",
    sections: en.privacy.sections.map((s, i) => ({
      heading: ["信息收集", "使用方式", "保留与安全", "您的权利"][i],
      body: s.body,
    })),
  },
};
