import { CardGrid, CheckList, ConversionCTA, LogoCloud, PageHero, Section, SectionHeading, StatsGrid } from "@/components/Blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { aboutMeta, clientLogos, primaryStats, principles } from "@/data/site";

const teamFunctions = [
  "Target universe construction, enrichment, and sourcing infrastructure",
  "Multichannel outreach across email, phone, LinkedIn, and direct mail",
  "Owner qualification against mandate, fit, timeline, and motivation",
  "Negotiation support from first conversation through LOI",
];

export default function AboutPage() {
  usePageMeta(aboutMeta);

  return (
    <>
      <PageHero
        eyebrow="About OutSearched"
        title="I built OutSearched because I needed it"
        lead="The service was born from the buyer side: a need for an omnichannel, direct-to-owner sourcing engine that did not exist for lower middle market buyers."
        compact
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="From The Founder"
              title="Built by a buyer, for buyers"
              body="OutSearched was created after running into the same lower middle market sourcing constraints again and again: outdated deal data, saturated brokers, fragmented tooling, and BD hiring risk."
            />
            <div className="mt-8">
              <CheckList items={teamFunctions} />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-navy/10 bg-white">
            <img src="/assets/nate-niehaus.png" alt="Nate Niehaus, founder of OutSearched" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="Operating Principles" title="Four principles every engagement is built on" light align="center" className="mb-12" />
        <CardGrid cards={principles} columns={4} light />
      </Section>

      <Section tone="parchment">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="2025 Results" title="Active mandate performance across the client portfolio" />
          <StatsGrid stats={primaryStats} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Partners and Clients" title="Trusted by active lower middle market buyers" align="center" className="mb-12" />
        <LogoCloud logos={clientLogos} />
      </Section>

      <ConversionCTA />
    </>
  );
}
