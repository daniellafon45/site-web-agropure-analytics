import type { SeedPostInput } from "./types";
import { buildArticleHtml } from "./article-builder";

export const seedPostsZh: SeedPostInput[] = [
  {
    id: "seed-national-crop",
    slug: "national-crop-monitoring-platform",
    title: "全国作物监测平台：每日追踪 25,000+ 地块",
    excerpt:
      "国家级农业引擎如何结合卫星影像与田间调查，在非洲和北美大规模监测作物。",
    category: "政府",
    author: "AgroPure Analytics",
    publishedAt: "2026-03-15",
    content: buildArticleHtml({
      lead:
        "全国作物监测平台整合卫星影像、田间调查与水文图层，使各部委能够以单一运营视图每日追踪超过 25,000 个农业地块。",
      problemTitle: "为何全国作物项目仍依赖碎片化数据？",
      problem:
        "大多数部委通过纸质调查和滞后的卫星报告汇总作物统计。据粮农组织统计，及时获取农业数据仍是发展中地区粮食安全规划的瓶颈。团队在做出任何政策决策前，往往需花费数月协调互不兼容的数据格式。",
      approachTitle: "AgroPure 如何部署统一的国家级引擎",
      approach:
        "AgroPure Analytics 将地块边界、NDVI 时间序列与移动调查工作流整合至同一仪表盘。田间人员通过智能手机采集地块级观测，卫星管道每日更新植被指数。政策团队可按区域、作物类型和季节筛选，无需导出电子表格。",
      resultsTitle: "12 个月后的可量化成果",
      results: [
        "每日监测 25,000+ 地块，并自动进行质量检查",
        "全国作物状况报告发布时间缩短 68%",
        "三个区域主管机构共享单一可信数据源",
        "集成水文压力图层，用于灌溉规划",
      ],
      quote:
        "我们从季度 PDF 摘要转向实时全国视图。区域团队终于使用同一套地块级数据集开展工作。",
      quoteAuthor: "西非部委项目农业信息总监",
      lessonsTitle: "政府团队运营经验",
      lessons: [
        "在添加高级分析前先完成地块登记",
        "培训田间人员基于照片验证，减少调查误差",
        "发布公开作物仪表盘，与合作社建立信任",
        "触发政策预警前审查卫星置信度评分",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "全国作物监测平台使用哪些数据源？",
          answer:
            "典型输入包括 Sentinel 或 Landsat 影像、GPS 标记的田间调查、气象站与水文模型。AgroPure 将这些图层标准化为可比较的地块级指标。",
        },
        {
          question: "全国部署需要多长时间？",
          answer:
            "覆盖一个区域的试点通常运行 8–12 周。全面全国推广取决于地块覆盖目标及与现有统计系统的集成程度。",
        },
        {
          question: "平台能否在低连通性地区运行？",
          answer:
            "可以。移动调查模块支持离线采集，恢复连接后自动同步。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "粮农组织, 粮食安全数据需求", href: "https://www.fao.org/statistics/en/" },
        { label: "世界银行, 农业监测", href: "https://www.worldbank.org/en/topic/agriculture" },
      ],
      ctaTitle: "面向政府团队",
      ctaBody: "了解 AgroPure Analytics 如何通过定制演示加速您的全国作物情报项目",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-pest-diagnostics",
    slug: "real-time-pest-diagnostics-field",
    title: "面向田间人员的实时照片病虫害诊断",
    excerpt:
      "田间团队通过智能手机识别作物病害与害虫；集中化预警使协调响应在数小时内完成，而非数周。",
    category: "农民",
    author: "AgroPure Analytics",
    publishedAt: "2026-03-22",
    content: buildArticleHtml({
      lead:
        "实时病虫害诊断使田间人员拍摄可疑症状照片，并在数分钟内获得分类支持，将平均响应时间从 11 天缩短至 48 小时以内。",
      problemTitle: "为何迟发现的病虫害会让农民损失整季收成",
      problem:
        "小农户和商业种植者往往在可见产量损失后才察觉侵染。推广服务人手不足：一名顾问可能覆盖数千公顷。延迟识别导致农药滥用并侵蚀利润。",
      approachTitle: "AgroPure 移动诊断工作流",
      approach:
        "人员通过 AgroPure 田间应用拍摄带地理标记的照片。图像模型预分类常见病害与害虫；可疑案例升级至农艺师。预警汇总于区域地图，便于合作社协调防治窗口。",
      resultsTitle: "6 个月试点田间成果",
      results: [
        "平均诊断延迟从 11 天降至 46 小时",
        "不必要农药施用减少 34%",
        "1,200+ 条田间观测经农艺师验证",
        "18 个合作社区域协调喷药窗口",
      ],
      quote:
        "我们的队员终于发送照片而非模糊电话描述。我们在疫情扩散至邻近村庄前就能在地图上看到爆发点。",
      quoteAuthor: "区域农民合作社农艺负责人",
      lessonsTitle: "部署照片诊断的经验",
      lessons: [
        "提供覆膜作物症状指南供离线参考",
        "奖励提交高质量地理标记数据的人员",
        "AI 建议须配合人工验证以规避责任风险",
        "与投入品供应商共享每周热力图以规划库存",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "无网络时照片病虫害识别是否可用？",
          answer:
            "照片可离线拍摄。设备同步后运行分类，通常在 3G 或更好网络下数分钟内完成。",
        },
        {
          question: "支持哪些作物？",
          answer:
            "模型按区域与作物组合训练。试点配置支持常见谷物、豆类与园艺作物。",
        },
        {
          question: "自动分类准确率如何？",
          answer:
            "试点项目对优先害虫目标 top-3 准确率 85%+，治疗建议须强制农艺师审核。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "粮农组织, 植物保护", href: "https://www.fao.org/plant-health/en/" },
        { label: "CGIAR, 数字推广", href: "https://www.cgiar.org/" },
      ],
      ctaTitle: "面向农民项目",
      ctaBody: "为您的田间团队配备 AgroPure 照片诊断",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-credit-scoring",
    slug: "agricultural-credit-scoring-insurers",
    title: "面向保险公司与贷款机构的农业信贷评分",
    excerpt:
      "空间化绩效与风险指标以可验证的地块级数据替代自报产量，优化农业信贷评估。",
    category: "保险",
    author: "AgroPure Analytics",
    publishedAt: "2026-04-01",
    content: buildArticleHtml({
      lead:
        "农业信贷评分结合卫星植被历史、轮作模式与田间调查信号，生成保险公司与贷款机构可逐地块审计的可验证风险评分。",
      problemTitle: "为何农业信贷仍严重不足",
      problem:
        "贷款机构缺乏可靠的农场抵押数据。自报产量与人工核查无法规模化。世界银行估计，全球小农户融资缺口超过 1,700 亿美元，因风险模型缺乏空间证据。",
      approachTitle: "用 AgroPure 构建空间信贷评分",
      approach:
        "AgroPure 聚合多年 NDVI 剖面、播种日期、调查中的投入品使用与天气异常，形成综合评分。核保人员可下钻至单个地块、对比同业基准，并向监管机构导出审计轨迹。",
      resultsTitle: "保险项目成果",
      results: [
        "合格小农户贷款批准率提高 22%",
        "人工田间核查成本降低 41%",
        "地块级审计轨迹获两次监管审查认可",
        "违约早期预警平均提前 6 周触发",
      ],
      quote:
        "我们不再凭纸质表格猜测产量潜力。空间评分为我们的核保人员提供了再保险人要求的同等证据。",
      quoteAuthor: "农业保险项目首席核保人",
      lessonsTitle: "保险公司实施经验",
      lessons: [
        "评分因子须符合当地监管披露规则",
        "向农民提供简化评分说明以获取同意",
        "生长季至少每两周刷新植被指数",
        "将卫星信号与合作社付款历史结合",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "哪些指标驱动信贷评分？",
          answer:
            "典型因素包括植被趋势、作物多样性、地块稳定性、水文压力与经核实的田间观测。",
        },
        {
          question: "是否需要农民同意？",
          answer:
            "需要。项目在使用地块级数据进行信贷决策前应取得明确同意。",
        },
        {
          question: "评分能否与核心银行系统集成？",
          answer:
            "AgroPure 提供 REST API 与批量导出，兼容大多数贷款发起平台。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "世界银行, 农业金融", href: "https://www.worldbank.org/en/topic/financialsector/brief/agriculture-finance" },
        { label: "粮农组织, 农业保险", href: "https://www.fao.org/in-action/agricultural-insurance/en/" },
      ],
      ctaTitle: "面向保险与金融团队",
      ctaBody: "用可验证的空间数据建模农业风险",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-cooperative-trace",
    slug: "cooperative-traceability-supply-chain",
    title: "从农场大门到出口的合作社溯源",
    excerpt:
      "非洲合作社数字化收获流转、质量检验与买方证书，以获取溢价并满足出口溯源要求。",
    category: "合作社",
    author: "AgroPure Analytics",
    publishedAt: "2026-04-08",
    content: buildArticleHtml({
      lead:
        "农业合作社溯源平台连接收获入库、质量分级与运输事件，使买方可验证产地，合作社可获取认证批次的溢价。",
      problemTitle: "为何缺乏溯源会让合作社损失价值",
      problem:
        "出口买方日益要求批次级来源证明。纸质入库记录易丢失或篡改。生产者无法证明可持续或区域来源，错失商品市场文献记载的 8–15% 溢价。",
      approachTitle: "AgroPure 溯源模块",
      approach:
        "合作社人员在入库时扫描生产者 ID，附加水分与等级读数，生成数字批次证书。物流模块追踪卡车运输；仪表盘按质量等级展示库存以支持谈判。",
      resultsTitle: "合作社成果",
      results: [
        "一季内 100% 出口批次可溯源至生产者 ID",
        "认证可持续批次平均溢价 12%",
        "入库重量争议减少 53%",
        "买方审计准备时间从 3 周缩短至 4 天",
      ],
      quote:
        "买方曾质疑我们的数量。现在我们可在卡车离仓前发送 QR 链接证书。",
      quoteAuthor: "西非谷物合作社运营经理",
      lessonsTitle: "合作社领导经验",
      lessons: [
        "先数字化入库再推进物流，避免数据缺口",
        "培训仓库人员条码或 QR 扫描流程",
        "发布生产者对账单以增强成员信任",
        "尽早与目标出口合同对齐等级标准",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "溯源是否要求每位生产者拥有智能手机？",
          answer: "否。合作社人员录入事件；生产者通过短信或纸质收据关联数字记录。",
        },
        {
          question: "支持哪些标准？",
          answer: "可配置等级方案映射常见出口与可持续认证字段。",
        },
        {
          question: "数据能否接入买方 ERP 系统？",
          answer: "可以，通过 API 导出与标准 CSV 批次。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "ITC, 标准与溯源", href: "https://www.intracen.org/" },
        { label: "粮农组织, 价值链发展", href: "https://www.fao.org/economic/est/est-commodities/en/" },
      ],
      ctaTitle: "面向合作社与非政府组织",
      ctaBody: "以端到端溯源保障生产者收入",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-digital-survey",
    slug: "digital-farm-survey-mobile-data",
    title: "以移动数据采集数字化全国农场调查",
    excerpt:
      "以 GPS 标记的移动表单、验证规则与实时仪表盘替代纸质农业普查，服务国家统计机构。",
    category: "政府",
    author: "AgroPure Analytics",
    publishedAt: "2026-04-15",
    content: buildArticleHtml({
      lead:
        "数字农业普查工具使国家统计团队可在移动设备上采集 GPS 标记的农场调查，转录错误减少 70%，初步结果提前数周发布。",
      problemTitle: "纸质调查拖慢国家农业政策",
      problem:
        "传统普查从实地工作到发布需 18–24 个月。许多项目转录错误超过 10%。决策者依据过时的种植意向而非当前状况作出反应。",
      approachTitle: "移动调查架构",
      approach:
        "AgroPure 提供可配置表单、跳转逻辑与照片附件。督导在地图上监控调查员进度。数据在采集时验证（面积合理性、重复地块），再同步至国家数据仓库。",
      resultsTitle: "普查现代化成果",
      results: [
        "转录与编码错误减少 70%",
        "初步区域仪表盘提前 8 周可用",
        "离线表单使调查员效率提高 45%",
        "92% 样本户集成地块边界",
      ],
      quote:
        "我们在南部省份调查员仍在现场时就发布了临时种植意向报告, 对本机构而言是首次。",
      quoteAuthor: "国家统计办公室调查总监",
      lessonsTitle: "普查管理者经验",
      lessons: [
        "全国推广前与资深调查员试点表单",
        "预加载地块边界以加速田间导航",
        "与仪表盘同步发布方法说明以增强透明度",
        "尽早规划至部委规划系统的 API 馈送",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "如何防止重复地块？",
          answer: "GPS 邻近检查与国家地块 ID 标记潜在重复供督导审核。",
        },
        {
          question: "调查员能否完全离线工作？",
          answer: "可以。表单、参考列表与地图在有连接时同步。",
        },
        {
          question: "数据是否主权托管？",
          answer: "AgroPure 支持政府客户专用或本地部署。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "粮农组织, 农业普查手册", href: "https://www.fao.org/statistics/en/" },
        { label: "世界银行, 开放数据", href: "https://data.worldbank.org/" },
      ],
      ctaTitle: "面向国家统计团队",
      ctaBody: "用 AgroPure 现代化您的农业普查",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-field-boundary",
    slug: "field-boundary-detection-ai-parcels",
    title: "AI 农业地块边界检测",
    excerpt:
      "深度学习模型从卫星影像勾勒地块边界，使政府更快登记地块，保险公司验证承保面积。",
    category: "数据与卫星",
    author: "AgroPure Analytics",
    publishedAt: "2026-04-22",
    content: buildArticleHtml({
      lead:
        "AI 地块边界检测自动从高分辨率卫星影像勾勒农业地块，加速全国登记并将人工数字化成本降低最多 60%。",
      problemTitle: "人工地块制图无法规模化",
      problem:
        "全国地块登记常依赖缓慢的人工数字化。保险公司难以核实承保公顷数。Fields of the World 等项目表明大陆尺度自动化边界数据集需求旺盛。",
      approachTitle: "AgroPure 边界检测管道",
      approach:
        "卷积模型从季节影像堆栈分割田块。人工审核员修正低置信度多边形。输出导出为 GeoJSON 供 GIS 系统使用，并链接至作物监测仪表盘。",
      resultsTitle: "制图项目指标",
      results: [
        "相较人工数字化，每映射公顷成本降低 60%",
        "单次全国行动处理 230 万公顷",
        "验证地块平均 IoU 高于 0.82",
        "边界更新与作物类型分类集成",
      ],
      quote:
        "我们在一个旱季内完成整省制图。人工团队需三年。",
      quoteAuthor: "国家土地管理项目 GIS 负责人",
      lessonsTitle: "制图团队经验",
      lessons: [
        "使用多时相影像区分田块与休耕地",
        "发布置信度图层供下游用户使用",
        "邀请当地农艺师验证模糊多边形",
        "每年更新边界版本以记录地块合并",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "需要何种分辨率？",
          answer: "通常 3–10 米影像；更高分辨率可提升小农户地块精度。",
        },
        {
          question: "如何修正错误？",
          answer: "审核员在 AgroPure 中编辑多边形，或导出至桌面 GIS 批量修正。",
        },
        {
          question: "边界能否用于保险保单？",
          answer: "可以。保险公司将保单关联至已验证多边形 ID 与面积计算。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "Fields of the World", href: "https://fieldsofthe.world/" },
        { label: "欧空局, Copernicus 陆地监测", href: "https://www.esa.int/Applications/Observing_the_Earth" },
      ],
      ctaTitle: "面向 GIS 与数据团队",
      ctaBody: "以 AI 边界检测加速地块登记",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-smallholder-credit",
    slug: "smallholder-credit-data-africa",
    title: "非洲小农户田间数据信贷评分",
    excerpt:
      "非政府组织与小额信贷机构利用地块级生产力信号，向此前被正式金融排斥的小农户扩展信贷。",
    category: "合作社",
    author: "AgroPure Analytics",
    publishedAt: "2026-05-01",
    content: buildArticleHtml({
      lead:
        "非洲小农户信贷评分结合合作社成员数据、卫星生产力趋势与移动还款，为无传统抵押的生产者批准贷款。",
      problemTitle: "小农户融资缺口",
      problem:
        "超过 80% 的非洲农场为两公顷以下小地块。贷款机构缺乏抵押登记。缺乏空间生产力历史时，风险模型排除可行生产者。",
      approachTitle: "AgroPure 小农户评分卡",
      approach:
        "项目导入合作社交售历史、植被趋势与投入品使用调查。评分将农民分段并建议贷款上限。田间人员以当地语言向借款人解释因子。",
      resultsTitle: "小额信贷合作成果",
      results: [
        "9 个月内新增 3,400 名借款人",
        "资产风险率低于机构平均 2.1 个百分点",
        "顶级生产者平均贷款规模提高 18%",
        "女性生产者占获批借款人 47%",
      ],
      quote:
        "我们终于依据经证实的田间绩效而非关系放贷。还款改善因为农民理解评分。",
      quoteAuthor: "农业小额信贷机构区域经理",
      lessonsTitle: "非政府组织与小额信贷伙伴经验",
      lessons: [
        "与农民协会共同设计评分透明材料",
        "大型设备融资前先开展投入品贷款",
        "监测植被异常作为早期预警信号",
        "必要时将数字评分与团体担保模式结合",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "是否必须有征信局？",
          answer: "不一定。项目可从合作社记录起步，再扩展至征信集成。",
        },
        {
          question: "农民如何申诉评分？",
          answer: "正式复核渠道允许田间复核与评分调整。",
        },
        {
          question: "支持哪些国家？",
          answer: "AgroPure 支持在非洲、加拿大与美国部署。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "世界银行, 非洲农业", href: "https://www.worldbank.org/en/region/afr" },
        { label: "IFC, 农业金融", href: "https://www.ifc.org/" },
      ],
      ctaTitle: "面向非政府组织与小额信贷",
      ctaBody: "以田间验证评分扩展负责任的放贷",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-drought-monitor",
    slug: "satellite-drought-monitoring-crops",
    title: "卫星干旱监测与作物胁迫预警",
    excerpt:
      "植被与土壤湿度指标触发干旱预警，使农民与顾问在不可逆产量损失前采取行动。",
    category: "农民",
    author: "AgroPure Analytics",
    publishedAt: "2026-05-08",
    content: buildArticleHtml({
      lead:
        "作物卫星干旱监测结合 NDVI 异常、土壤湿度代理指标与天气预报，比单纯目视巡查提前 10–14 天向种植者发出预警。",
      problemTitle: "干旱往往在农民看见症状之前就已到来",
      problem:
        "气候变异性增加季中水分胁迫。美国农业部与粮农组织干旱指数偏区域级, 农民需要地块级指导。延迟灌溉决策在脆弱地块上可造成 15–30% 产量损失。",
      approachTitle: "AgroPure 干旱预警体系",
      approach:
        "每日卫星过境为各地块提供异常检测。预警按严重程度排序地块；顾问推送短信灌溉或换种建议。历史对比显示胁迫是否超过往年。",
      resultsTitle: "种植者项目成果",
      results: [
        "相较田间巡查基线平均提前 14 天",
        "受预警灌溉地块产量保全 19%",
        "2,800 名农民接收本地化短信建议",
        "监测区用水优化 11%",
      ],
      quote:
        "预警在我们合作社叶片卷曲前就已到达。我们优先处理最差地块，保住了大部分收成。",
      quoteAuthor: "合作社灌区灌溉顾问",
      lessonsTitle: "干旱项目经验",
      lessons: [
        "按作物与土壤类型校准阈值",
        "卫星预警与本地雨量计读数结合",
        "培训农民解读异常地图，而非仅读短信文字",
        "每月与农艺人员复核误报",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "使用哪些卫星？",
          answer: "项目通常根据云量使用 Sentinel-2、Landsat 与商业影像。",
        },
        {
          question: "预警能否与灌溉设备集成？",
          answer: "API webhook 可在支持时触发农场管理系统。",
        },
        {
          question: "预警粒度如何？",
          answer: "已登记边界为地块级；早期试点为区域级。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "USDA, 干旱监测", href: "https://droughtmonitor.unl.edu/" },
        { label: "粮农组织, 全球信息早期预警", href: "https://www.fao.org/giews/en/" },
      ],
      ctaTitle: "面向农艺咨询服务",
      ctaBody: "部署地块级干旱情报",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-agtech-api",
    slug: "agtech-api-white-label-integration",
    title: "面向农场软件的 Agtech API 与白标集成",
    excerpt:
      "OEM 与分销商通过 REST API 嵌入 AgroPure 分析，或部署品牌化全国平台，无需从零构建 GIS 基础设施。",
    category: "市场",
    author: "AgroPure Analytics",
    publishedAt: "2026-05-15",
    content: buildArticleHtml({
      lead:
        "农业技术 API 与白标农场软件使分销商在自有品牌下嵌入地块分析、作物监测与田间诊断，由 AgroPure 运营地理空间引擎。",
      problemTitle: "为何农业技术供应商重复构建相同 GIS 栈",
      problem:
        "设备制造商与投入品分销商希望数字化服务，但低估影像管道、地块拓扑与移动同步。内部建设使上市延迟 12–18 个月。",
      approachTitle: "集成模式",
      approach:
        "AgroPure 提供文档化 REST API、Webhook 与 SSO 就绪白标门户。伙伴选择模块, 边界、NDVI、调查、病虫害诊断, 并定制界面，必要时数据主权托管。",
      resultsTitle: "伙伴集成指标",
      results: [
        "伙伴平均 14 周上线，对比内部建设 12 个月",
        "企业级 API 可用性 SLA 99.5%",
        "通过集成层支持 John Deere、CNH 与 DJI 数据路径",
        "2025–2026 年推出 3 个白标全国门户",
      ],
      quote:
        "我们一个季度推出品牌化农民门户。开发人员专注经销商工作流，而非卫星预处理。",
      quoteAuthor: "农业设备分销商数字产品副总裁",
      lessonsTitle: "集成最佳实践",
      lessons: [
        "完整白标前先启动单一模块 API",
        "首次研讨会定义数据驻留要求",
        "使用沙盒租户培训经销商",
        "为 ERP 集成规划 Webhook 幂等性",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "支持哪些认证方式？",
          answer: "OAuth2 客户端凭证与服务端 API 密钥。",
        },
        {
          question: "能否自行托管白标界面？",
          answer: "可以。伙伴托管前端，AgroPure 托管分析 API。",
        },
        {
          question: "是否支持拖拉机远程信息处理？",
          answer: "集成层连接 agropure-analytics.com 已列出的主要 OEM 数据流。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "AgroPure, 集成伙伴", href: "https://agropure-analytics.com/en" },
        { label: "OpenAPI, REST 最佳实践", href: "https://swagger.io/specification/" },
      ],
      ctaTitle: "面向技术伙伴",
      ctaBody: "与我们的解决方案团队探索 API 与白标选项",
      ctaLinkText: "申请演示",
    }),
  },
  {
    id: "seed-parametric-insurance",
    slug: "parametric-insurance-crop-data",
    title: "卫星数据驱动的参数化作物保险",
    excerpt:
      "指数型保单在植被或降雨阈值被突破时触发赔付，降低定损成本并加速农民补偿。",
    category: "保险",
    author: "AgroPure Analytics",
    publishedAt: "2026-05-22",
    content: buildArticleHtml({
      lead:
        "参数化作物保险使用卫星植被与降雨指数，在预设阈值被突破时自动触发赔付，将定损时间从数月缩短至数天。",
      problemTitle: "传统作物定损缓慢且成本高昂",
      problem:
        "大范围干旱后田间损失评估可能耗时整季。农民面临现金流缺口；保险公司面临争议性测量。参数化设计需要可信、可审计的指数。",
      approachTitle: "AgroPure 指数设计工作流",
      approach:
        "精算师选择区域指数（NDVI 异常、累积降雨亏缺）并与历史产量相关性关联。保单关联至地块集群；AgroPure 透明发布指数值与赔付触发条件。",
      resultsTitle: "参数化项目成果",
      results: [
        "指数触发后 5 天内发出赔付决定",
        "定损员实地查勘减少 72%",
        "试点区域保单采纳率较传统赔付型产品提高 28%",
        "附带监管批准的方法文档",
      ],
      quote:
        "农民信任指数因为他们看到与我们相同的卫星图表。争议大幅下降。",
      quoteAuthor: "区域作物保险公司产品经理",
      lessonsTitle: "参数化设计经验",
      lessons: [
        "对 10 年以上产量数据回测指数",
        "向投保人清晰说明基差风险",
        "用独立气象站验证降雨触发条件",
        "生长季每周发布指数值",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "什么是基差风险？",
          answer: "指数变动与实际农场损失之间的错配。良好设计可最小化但无法消除基差风险。",
        },
        {
          question: "参数化赔付是否需纳税？",
          answer: "税务处理因司法管辖区而异；保险公司应提供本地指导。",
        },
        {
          question: "指数能否按作物定制？",
          answer: "可以。精算研讨会定义作物专属阈值与季节。",
        },
      ],
      sourcesTitle: "来源与参考",
      sources: [
        { label: "世界银行, 灾害风险金融", href: "https://www.worldbank.org/en/topic/disasterriskmanagement" },
        { label: "粮农组织, 农业保险", href: "https://www.fao.org/in-action/agricultural-insurance/en/" },
      ],
      ctaTitle: "面向保险产品团队",
      ctaBody: "与 AgroPure 设计可审计的参数化指数",
      ctaLinkText: "申请演示",
    }),
  },
];
