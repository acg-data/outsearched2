import { CardGrid, ConversionCTA, LinkCardGrid, PageHero, Section, SectionHeading } from "@/components/Blocks";
import { serviceHubCards, servicesMeta } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const stages = [
  { title: "Define", body: "Clarify the mandate, target universe, qualification criteria, and buyer positioning." },
  { title: "Build", body: "Construct the data, outreach, reporting, and workflow infrastructure behind the sourcing engine." },
  { title: "Reach", body: "Launch direct-to-owner outreach and manage the weekly pipeline rhythm." },
  { title: "Advance", body: "Support qualification, LOI path, advisory, and systems decisions as opportunities mature." },
];

export default function ServicesPage() {
  usePageMeta(servicesMeta);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four ways to plug us into your deal team"
        lead="Operate invisibly inside your firm, run origination under our brand, advise the team you already have, or build the AI-enabled infrastructure behind sourcing."
        compact
      />
      <Section tone="ivory">
        <SectionHeading eyebrow="Engagement Models" title="Choose the model that fits the constraint in front of you" align="center" className="mb-12" />
        <LinkCardGrid cards={serviceHubCards} />
      </Section>
      <Section tone="navy">
        <SectionHeading eyebrow="Deal Lifecycle" title="We meet you where the deal already is" body="The work can begin at mandate definition, target mapping, outreach execution, negotiation support, or systems implementation." light align="center" className="mb-12" />
        <CardGrid cards={stages} columns={4} light />
      </Section>
      <ConversionCTA />
    </>
  );
}
