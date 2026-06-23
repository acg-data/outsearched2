import { ConversionCTA, FAQList, PageHero, Section, SectionHeading } from "@/components/Blocks";
import { faqMeta, faqSections } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

function sectionId(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function FAQPage() {
  usePageMeta(faqMeta);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions buyers ask before building a proprietary deal flow engine"
        lead="Clear answers on OutSearched, buy-side deal sourcing, proprietary deal flow, direct-to-owner outreach, advisory, consulting, Internal BD, Fractional BD, and AI implementation for lower middle market buyers."
        compact
      />
      <Section tone="ivory" className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Jump To A Section" title="Review by topic" align="center" className="mb-8" />
          <nav className="flex flex-wrap justify-center gap-3" aria-label="FAQ sections">
            {faqSections.map((section) => (
              <a
                key={section.title}
                href={`#${sectionId(section.title)}`}
                className="rounded-full border border-navy/10 bg-white px-4 py-3 text-sm font-bold text-navy/70 transition hover:border-gold/60 hover:text-goldDark"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </Section>
      <Section tone="white">
        <div className="mx-auto max-w-5xl space-y-16">
          {faqSections.map((section, index) => (
            <div key={section.title} id={sectionId(section.title)} className="scroll-mt-28">
              <SectionHeading
                eyebrow={`${String(index + 1).padStart(2, "0")} / ${section.items.length} Questions`}
                title={section.title}
                body={section.intro}
                className="mb-8"
              />
              <FAQList items={section.items} />
            </div>
          ))}
        </div>
      </Section>
      <ConversionCTA />
    </>
  );
}
