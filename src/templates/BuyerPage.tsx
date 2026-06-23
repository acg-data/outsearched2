import { Navigate, useParams } from "react-router";
import { buyerPages, primaryStats, whoWeServeMeta } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CardGrid, CheckList, ConversionCTA, FAQList, PageHero, ProofFeature, Section, SectionHeading, StatsGrid } from "@/components/Blocks";

export default function BuyerPage() {
  const { slug } = useParams();
  const page = buyerPages.find((item) => item.slug === slug);

  usePageMeta(page?.meta ?? whoWeServeMeta);

  if (!page) {
    return <Navigate to="/who-we-serve" replace />;
  }

  const proofItems = [page.fit[0], page.targets[1]?.title, page.models[0]?.title].filter((item): item is string => Boolean(item));

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.h1} lead={page.lead} compact />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="The Sourcing Gap" title={page.problemTitle} body={page.problemBody} />
          <CardGrid cards={page.problemPoints} />
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="Target Profile" title={page.targetTitle} body="Every campaign starts by turning buyer fit into a precise target universe and qualification standard." light />
          <CardGrid cards={page.targets} light />
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Operating Model" title={page.modelTitle} body="The right model depends on how you want the market to see you and how much execution capacity you need." />
            <div className="mt-8">
              <CheckList items={page.fit} />
            </div>
          </div>
          <CardGrid cards={page.models} columns={2} />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ProofFeature
            eyebrow="Qualified Signal"
            title={`${page.navLabel} sourcing snapshot`}
            body="This is the practical shape of the mandate once the buyer profile is translated into owner outreach, qualification, and handoff criteria."
            metric={page.targets[0].title}
            metricLabel="Priority target"
            items={proofItems}
          />
          <StatsGrid stats={primaryStats} />
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Questions" title={`Questions from ${page.navLabel} buyers`} />
          <FAQList items={page.faq} />
        </div>
      </Section>

      <ConversionCTA />
    </>
  );
}
