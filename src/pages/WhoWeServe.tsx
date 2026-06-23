import { ConversionCTA, LinkCardGrid, PageHero, Section, SectionHeading, StatsGrid } from "@/components/Blocks";
import { buyerHubCards, primaryStats, whoWeServeMeta } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function WhoWeServePage() {
  usePageMeta(whoWeServeMeta);

  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="One sourcing engine, seven kinds of buyers"
        lead="OutSearched generates proprietary, direct-to-owner deal flow for lower middle market buyers and calibrates each engagement to the buyer's mandate."
        compact
      />
      <Section tone="ivory">
        <SectionHeading eyebrow="The Seven Buyers" title="Who does OutSearched serve?" body="Each buyer type has a different mandate, timeline, and set of economics. The sourcing discipline stays the same." align="center" className="mb-12" />
        <LinkCardGrid cards={buyerHubCards} />
      </Section>
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Common Thread" title="The mandate is built around your buy-box" body="Geography, sector, service lines, ownership structure, and buyer positioning are defined before a single message goes out." light />
          <StatsGrid stats={primaryStats} light />
        </div>
      </Section>
      <ConversionCTA />
    </>
  );
}
