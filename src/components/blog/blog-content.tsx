import { isHtmlContent, sanitizeBlogHtml } from "@/lib/blog/content";

type BlogContentProps = {
  content: string;
  className?: string;
};

export function BlogContent({ content, className = "" }: BlogContentProps) {
  if (isHtmlContent(content)) {
    return (
      <div
        className={`blog-prose mt-10 max-w-3xl ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(content) }}
      />
    );
  }

  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className={`mt-10 space-y-5 text-base text-foreground/90 leading-relaxed max-w-3xl ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
