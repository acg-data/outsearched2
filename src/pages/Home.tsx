import {
  ConversionCTA,
  DealGrid,
  LogoCloud,
  PageHero,
  Section,
  SectionHeading,
  BuyerIcon,
} from "@/components/Blocks";
import { Check, MapPin } from "lucide-react";
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

const dealMapPoints = [
  { city: "Seattle, WA", title: "Field Services", detail: "$2.4MM EBITDA", x: 13, y: 19, delay: "0s" },
  { city: "Portland, OR", title: "Industrial Maintenance", detail: "$1.8MM EBITDA", x: 10, y: 29, delay: "0.35s" },
  { city: "Sacramento, CA", title: "Specialty Distribution", detail: "$3.1MM EBITDA", x: 8, y: 45, delay: "0.7s" },
  { city: "Los Angeles, CA", title: "Home Services", detail: "$2.0MM EBITDA", x: 11, y: 63, delay: "1.05s" },
  { city: "Phoenix, AZ", title: "Facility Services", detail: "$1.6MM EBITDA", x: 22, y: 64, delay: "1.4s" },
  { city: "Denver, CO", title: "Industrial Products", detail: "$4.1MM EBITDA", x: 37, y: 48, delay: "1.75s" },
  { city: "Dallas, TX", title: "Logistics Services", detail: "$2.7MM EBITDA", x: 51, y: 70, delay: "2.1s" },
  { city: "Austin, TX", title: "Environmental Services", detail: "$3.5MM EBITDA", x: 49, y: 76, delay: "2.45s" },
  { city: "Kansas City, MO", title: "B2B Services", detail: "$1.2MM EBITDA", x: 55, y: 49, delay: "2.8s" },
  { city: "Minneapolis, MN", title: "Manufacturing", detail: "$3.0MM EBITDA", x: 57, y: 28, delay: "3.15s" },
  { city: "Chicago, IL", title: "Route-Based Services", detail: "$2.3MM EBITDA", x: 66, y: 43, delay: "3.5s" },
  { city: "Nashville, TN", title: "Building Products", detail: "$1.9MM EBITDA", x: 70, y: 59, delay: "3.85s" },
  { city: "Atlanta, GA", title: "Commercial Services", detail: "$2.8MM EBITDA", x: 76, y: 68, delay: "4.2s" },
  { city: "Charlotte, NC", title: "Healthcare Services", detail: "$3.6MM EBITDA", x: 81, y: 61, delay: "4.55s" },
  { city: "Boston, MA", title: "Software-Enabled Services", detail: "$5.0MM EBITDA", x: 91, y: 32, delay: "4.9s" },
];

function DealMap2025() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-2xl md:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(199,164,74,0.08),transparent)]" />
      <div className="relative grid gap-5 xl:grid-cols-[minmax(0,1fr)_230px] xl:items-stretch">
        <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-white/10 bg-[#08182d] md:min-h-[440px]">
          <div className="absolute left-5 top-5 z-20 rounded-md border border-white/10 bg-navy/85 px-4 py-3 backdrop-blur">
            <p className="label text-gold">2025 Sourcing Map</p>
            <p className="mt-1 text-sm text-ivory/65">15 representative deal signals across the U.S.</p>
          </div>

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 620" role="img" aria-label="Animated map of 2025 OutSearched deal activity across the United States">
            <defs>
              <linearGradient id="mapGold" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#d9bb67" stopOpacity="0.2" />
                <stop offset="52%" stopColor="#c7a44a" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#d9bb67" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <path
              className="deal-map-land"
              d="M118 190 L180 155 L265 170 L330 142 L407 160 L484 142 L556 164 L635 152 L721 187 L805 192 L865 242 L842 300 L884 350 L832 398 L765 424 L714 477 L622 485 L565 456 L494 475 L426 456 L352 471 L286 437 L215 441 L166 386 L118 356 L94 286 Z"
            />
            <path className="deal-map-land-muted" d="M145 505 L225 485 L280 526 L242 566 L160 554 Z" />
            <path className="deal-map-land-muted" d="M330 540 L365 526 L402 544 L375 568 Z" />
            {dealMapPoints.map((point) => (
              <path
                key={`route-${point.city}`}
                className="deal-map-route"
                style={{ animationDelay: point.delay }}
                d={`M500 376 Q ${500 + (point.x * 10 - 500) * 0.48} ${Math.min(point.y * 6.2, 520) - 120} ${point.x * 10} ${point.y * 6.2}`}
              />
            ))}
          </svg>

          {dealMapPoints.map((point) => (
            <div
              key={point.city}
              className="group absolute z-10"
              style={{ left: `${point.x}%`, top: `${point.y}%`, animationDelay: point.delay }}
            >
              <span className="deal-map-pulse absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25" />
              <span className="relative grid size-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-gold shadow-[0_0_22px_rgba(199,164,74,0.8)]">
                <span className="size-1.5 rounded-full bg-navy" />
              </span>
              <span className="pointer-events-none absolute left-4 top-2 z-30 hidden w-52 rounded-md border border-white/10 bg-navy/95 p-3 text-left shadow-xl group-hover:block">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-bold text-ivory">{point.city}</span>
                    <span className="mt-1 block text-xs leading-5 text-ivory/65">{point.title} / {point.detail}</span>
                  </span>
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {[
            ["$500MM+", "Sourced in 2025"],
            ["52x", "More owner conversations"],
            ["~60", "Days to first qualified conversation"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-lg border border-white/10 bg-white/6 p-4">
              <p className="font-heading text-4xl leading-none text-gold">{value}</p>
              <p className="label mt-3 text-ivory/66">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
        {dealMapPoints.map((point) => (
          <div key={`chip-${point.city}`} className="rounded-md border border-white/10 bg-white/6 px-3 py-2">
            <p className="text-xs font-bold text-ivory">{point.city}</p>
            <p className="mt-1 text-xs leading-5 text-ivory/56">{point.title}</p>
          </div>
        ))}
      </div>
    </div>
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

      <Section tone="navy">
        <div className="grid gap-10">
          <SectionHeading
            eyebrow="Competitive Market"
            title="Sourcing in the lower middle market has never been more competitive"
            body="There are more buyers, fewer prepared sellers, and rising prices on deals that reach market. The buyers who win are the ones reaching owners first."
            light
            align="center"
            className="mx-auto"
          />
          <DealMap2025 />
        </div>
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
