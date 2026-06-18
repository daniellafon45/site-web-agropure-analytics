import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { useLocale } from "@/i18n/context";
import { sanitizeBlogHtml } from "@/lib/blog/content";

export function FaqSection() {
  const { t } = useLocale();
  const faq = t.home.faq;

  return (
    <section id="faq" className="px-4 sm:px-8 py-16 md:py-24 scroll-mt-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{faq.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground text-balance leading-relaxed">
                {faq.subtitle}
              </p>
            </div>

            <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
              {faq.items.map((item) => (
                <div className="group" key={item.id}>
                  <AccordionItem
                    value={item.id}
                    className="peer rounded-xl border-none px-5 py-1 data-[state=open]:bg-muted md:px-7"
                  >
                    <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        className="faq-answer text-base text-secondary leading-relaxed [&_a]:text-primary [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeBlogHtml(item.answerHtml),
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-5 -mb-px border-border group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
                </div>
              ))}
            </Accordion>

            <p className="text-center text-muted-foreground">
              {faq.footerBefore}{" "}
              <a href="#contact" className="text-primary font-medium hover:underline">
                {faq.footerLink}
              </a>{" "}
              {faq.footerAfter}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
