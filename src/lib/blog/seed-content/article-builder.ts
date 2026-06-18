export type ArticleSection = {
  lead?: string;
  problemTitle: string;
  problem: string;
  approachTitle: string;
  approach: string;
  resultsTitle: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  lessonsTitle: string;
  lessons: string[];
  faq: { question: string; answer: string }[];
  sourcesTitle: string;
  sources: { label: string; href: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaLinkText?: string;
  faqTitle?: string;
};

export function buildArticleHtml(section: ArticleSection): string {
  const ctaLinkText = section.ctaLinkText ?? "Request a demo";
  const faqTitle = section.faqTitle ?? "FAQ";
  const results = section.results.map((r) => `<li>${r}</li>`).join("");
  const lessons = section.lessons.map((l) => `<li>${l}</li>`).join("");
  const faq = section.faq
    .map(
      (f) =>
        `<h3>${f.question}</h3><p>${f.answer}</p>`,
    )
    .join("");
  const sources = section.sources
    .map((s) => `<li><a href="${s.href}" rel="noopener noreferrer">${s.label}</a></li>`)
    .join("");

  return `
<p class="lead"><strong>${section.lead ?? ""}</strong></p>
<h2>${section.problemTitle}</h2>
<p>${section.problem}</p>
<h2>${section.approachTitle}</h2>
<p>${section.approach}</p>
<h2>${section.resultsTitle}</h2>
<ul>${results}</ul>
<blockquote><p>${section.quote}</p><cite>${section.quoteAuthor}</cite></blockquote>
<h2>${section.lessonsTitle}</h2>
<ol>${lessons}</ol>
<h2>${faqTitle}</h2>
${faq}
<h2>${section.sourcesTitle}</h2>
<ul>${sources}</ul>
<h2>${section.ctaTitle}</h2>
<p>${section.ctaBody} <a href="/#contact">${ctaLinkText}</a>.</p>
`.trim();
}
