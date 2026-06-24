import {
  ConversionCTA,
  DealGrid,
  LogoCloud,
  PageHero,
  Section,
  SectionHeading,
  BuyerIcon,
} from "@/components/Blocks";
import { Check } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  clientLogos,
  deals,
  homeMeta,
  testimonials,
  buyerHubCards,
} from "@/data/site";
import { Link } from "react-router";

const engagementModels = [
  {
    number: "01",
    title: (
      <>
        Internal Business
        <br />
        Development
      </>
    ),
    path: "/services/internal-business-development",
    body: "We place a trained and managed Business Development rep into your organization.",
    bullets: [
      "Branded as your firm in all outreach",
      "Integration with your team and systems",
      "Mandate-specific outreach architecture",
      "Covers proprietary and banked deals",
    ],
  },
  {
    number: "02",
    title: (
      <>
        Fractional Business
        <br />
        Development
      </>
    ),
    path: "/services/fractional-business-development",
    body: "Elite origination capability without the cost of building it internally. Our team, your mandate, scaled output.",
    bullets: [
      "Branded as our firm to maintain confidentiality",
      "Scaled, multichannel proprietary outbound",
      "Mandate-specific outreach architecture",
      "Weekly pipeline reviews and reporting",
    ],
  },
  {
    number: "03",
    title: (
      <>
        Buy-Side M&amp;A
        <br />
        Advisory
      </>
    ),
    path: "/services/buy-side-ma-advisory",
    body: "From mandate definition to LOI negotiation, clients come to us for in-the-market advisory.",
    bullets: [
      "Sourcing tools and data",
      "Mandate definition",
      "Negotiations, structuring, and implementation",
      "Growth, integration, AI, and sourcing advisory",
    ],
  },
];

function SourcingMapEmbed() {
  return (
    <iframe
      title="2025 Sourcing Map"
      src="/assets/sourcing-map.html"
      sandbox="allow-scripts allow-same-origin"
      className="block h-[980px] w-full overflow-hidden rounded-lg border border-white/10 bg-navy sm:h-[900px] md:h-[820px] lg:h-[760px] xl:h-[720px]"
      loading="eager"
    />
  );
}

export default function HomePage() {
  usePageMeta(homeMeta);

  return (
    <>
      <PageHero
        eyebrow="Lower Middle Market Origination & Advisory"
        title="Buy-Side Advisory & Proprietary Deal Flow for the Lower Middle Market"
        lead="OutSearched builds proprietary, off-market pipelines direct from owners, and advises buyers through to close, including on banked deals."
        media
      />

      <Section tone="ivory" className="py-12 md:py-16">
        <LogoCloud logos={clientLogos} />
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="Proprietary Deals Sourced"
          title="Representative opportunities surfaced for active buyers"
          body="The work is mandate-specific: market mapping, direct owner outreach, qualification, and handoff to the buyer."
          align="center"
          className="mb-12"
        />
        <DealGrid deals={deals} />
      </Section>

      <Section tone="navy" className="py-0 md:py-0 lg:py-0">
        <SourcingMapEmbed />
      </Section>

      <Section tone="ivory">
        <SectionHeading
          eyebrow="What We Do"
          title="Three ways to plug us into your deal team"
          body="Every OutSearched engagement is built around how you want to operate. We can be invisible, named, or fully embedded."
          align="center"
          className="mb-12"
        />

          <div className="grid gap-5 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <article key={model.number} className="flex h-full flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="grid size-9 place-items-center rounded-full border border-gold/70 font-heading text-lg leading-none text-goldDark">
                      {Number(model.number)}
                    </span>
                    <Link to={model.path} className="mt-4 inline-flex font-heading text-3xl leading-tight text-navy transition hover:text-goldDark">
                      {model.title}
                    </Link>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-navy/64 lg:min-h-24">{model.body}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3">
                  {model.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-navy/68">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for institutional buyers who need to source like one"
          body="Every buyer type has a different mandate, timeline, and economics. We tailor the sourcing motion to each."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {buyerHubCards.slice(0, 6).map(({ title, body }) => (
            <article key={title} className="rounded-lg border border-navy/10 bg-white p-6">
              <BuyerIcon title={title} />
              <h3 className="mt-5 font-heading text-2xl leading-tight text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-navy/62 md:text-base">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="From Our Clients" title="In their own words" align="center" className="mb-12" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg border border-navy/10 bg-ivory p-6">
              <p className="font-heading text-2xl text-navy">{testimonial.title}</p>
              <blockquote className="mt-4 text-sm leading-7 text-navy/65">"{testimonial.quote}"</blockquote>
              <p className="mt-6 font-bold text-navy">{testimonial.name}</p>
              <p className="text-sm text-navy/55">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </Section>

      <ConversionCTA />
    </>
  );
}
