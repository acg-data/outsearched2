import { Navigate, Link, useParams } from "react-router";
import { servicePages, primaryStats, servicesMeta } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CardGrid, CheckList, ConversionCTA, FAQList, PageHero, ProofFeature, Section, SectionHeading, StatsGrid } from "@/components/Blocks";

export default function ServicePage() {
  const { slug } = useParams();
  const page = servicePages.find((item) => item.slug === slug);

  usePageMeta(page?.meta ?? servicesMeta);

  if (!page) {
    return <Navigate to="/services" replace />;
  }

  const proofItems = [page.fit[0], page.comparison[0]?.title, page.comparison[1]?.title].filter((item): item is string => Boolean(item));

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.h1} lead={page.lead} compact />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="What It Is" title={page.definitionTitle} body={page.definition} />
          <CardGrid cards={page.operatingModel} />
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Best Fit" title={page.fitTitle} body="The engagement model should match the buyer's capacity, brand posture, and need for control." light />
            <div className="mt-8">
              <CheckList items={page.fit} light />
            </div>
          </div>
          <CardGrid cards={page.comparison} columns={2} light />
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="How It Compares" title="Choose the model that fits how you want to operate" body="Internal BD, Fractional BD, Advisory, and AI Implementation are different ways to solve capacity, control, and infrastructure constraints." />
          <div className="grid gap-3">
            {servicePages
              .filter((service) => service.slug !== page.slug)
              .map((service) => (
                <Link key={service.slug} to={service.path} className="rounded-lg border border-navy/10 bg-white p-5 transition hover:border-gold/60">
                  <p className="font-heading text-2xl text-navy">{service.navLabel}</p>
                  <p className="mt-2 text-sm leading-6 text-navy/60">{service.lead}</p>
                </Link>
              ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ProofFeature
            eyebrow="Operating Signal"
            title={`${page.navLabel} in practice`}
            body={page.definition}
            metric={page.operatingModel[0].title}
            metricLabel="Core lever"
            items={proofItems}
          />
          <StatsGrid stats={primaryStats} />
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Questions" title={`Questions about ${page.navLabel}`} />
          <FAQList items={page.faq} />
        </div>
      </Section>

      <ConversionCTA />
    </>
  );
}
