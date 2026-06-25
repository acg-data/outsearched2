import { Link } from "react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ExternalLink,
  Handshake,
  Landmark,
  MapPin,
  Search,
  Store,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { BOOKING_HASH, BOOKING_URL, VIMEO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import type { ContentCard, FAQItem, ServiceTestimonial, Stat } from "@/data/site";
import { useState, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  tone?: "navy" | "ivory" | "parchment" | "white";
  className?: string;
  id?: string;
}

const toneClasses = {
  navy: "bg-navy text-ivory",
  ivory: "bg-ivory text-navy",
  parchment: "bg-parchment text-navy",
  white: "bg-white text-navy",
};

export function Section({ children, tone = "ivory", className, id }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 md:scroll-mt-28 md:py-24 lg:py-28", toneClasses[tone], className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, body, align = "left", light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("label mb-4", light ? "text-gold" : "text-goldDark")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("font-heading text-3xl leading-tight md:text-5xl text-balance", light ? "text-ivory" : "text-navy")}>
        {title}
      </h2>
      {body ? (
        <p className={cn("mt-5 text-base leading-8 md:text-lg", light ? "text-ivory/68" : "text-navy/65")}>{body}</p>
      ) : null}
    </div>
  );
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  lead: string;
  media?: boolean;
  compact?: boolean;
  crumb?: string;
}

export function PageHero({ eyebrow, title, lead, media = false, compact = false, crumb }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,164,74,0.18),transparent_34%),linear-gradient(135deg,#0b1b34_0%,#10284b_48%,#08111f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div
        className={cn(
          "relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-12 pt-24 sm:px-6 md:gap-10 md:pb-16 md:pt-32 lg:px-8",
          media ? "lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:items-center" : "max-w-5xl text-center",
          compact ? "md:pb-20" : "md:min-h-[720px] md:items-center md:pb-24",
        )}
      >
        <div className={cn(!media && "mx-auto max-w-4xl")}>
          {crumb ? <p className="mb-4 text-sm text-ivory/55">{crumb}</p> : null}
          {eyebrow ? <p className="label mb-5 text-gold">{eyebrow}</p> : null}
          <h1 className="font-heading text-[2.35rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl text-balance">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ivory/72 md:mt-7 md:text-xl md:leading-8">{lead}</p>
          <div className={cn("mt-7 flex flex-col gap-3 sm:flex-row md:mt-9", !media && "justify-center")}>
            <Button to={BOOKING_HASH} size="large">
              Book A Strategy Call
            </Button>
          </div>
        </div>

        {media ? <HeroMedia /> : null}
      </div>
    </section>
  );
}

function HeroMedia() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/6 shadow-2xl">
        <iframe
          title="OutSearched overview video"
          src={`${VIMEO_URL}?autoplay=0&title=0&byline=0&portrait=0`}
          className="aspect-video w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      </div>
      <div className="mt-5 hidden grid-cols-3 gap-3 sm:grid">
        {["Built for buyers", "Direct-to-owner", "LMM focused"].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/6 px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-ivory/72">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProofFeature({
  eyebrow,
  title,
  body,
  metric,
  metricLabel,
  items,
}: {
  eyebrow: string;
  title: string;
  body: string;
  metric: string;
  metricLabel: string;
  items: string[];
}) {
  return (
    <article className="rounded-lg border border-navy/10 bg-ivory p-6 md:p-8">
      <p className="label text-goldDark">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl leading-tight text-navy md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-navy/64">{body}</p>

      <div className="mt-7 rounded-lg border border-gold/35 bg-navy p-5 text-ivory">
        <p className="label text-gold">{metricLabel}</p>
        <p className="mt-3 font-heading text-2xl leading-tight md:text-3xl">{metric}</p>
      </div>

      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-navy/66">
            <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold">
              <Check className="size-3" aria-hidden="true" />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function FormattedTitle({ title }: { title: string }) {
  if (title === "Internal Business Development") {
    return (
      <>
        Internal Business
        <br />
        Development
      </>
    );
  }

  if (title === "Buy-Side M&A Advisory") {
    return (
      <>
        Buy-Side
        <br />
        M&amp;A Advisory
      </>
    );
  }

  if (title === "Warehouse Logistics Services") {
    return (
      <>
        Warehouse Logistics
        <br />
        Services
      </>
    );
  }

  return <>{title}</>;
}

export function BuyerIcon({ title, className }: { title: string; className?: string }) {
  const iconMap: Record<string, LucideIcon> = {
    "LMM Private Equity": BriefcaseBusiness,
    "Independent Sponsors": Handshake,
    "Search Funds": Search,
    "Family Offices": Landmark,
    "Corporate Development": Building2,
    "Current Business Owners": Store,
    "Individual Buyers": UserRound,
  };
  const Icon = iconMap[title] ?? BriefcaseBusiness;

  return (
    <span className={cn("grid size-10 place-items-center rounded-full border border-gold/45 bg-gold/10 text-goldDark", className)}>
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}

export function StatsGrid({ stats, light = false }: { stats: Stat[]; light?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className={cn("flex h-full min-h-[210px] min-w-0 flex-col overflow-hidden rounded-lg border p-5 [container-type:inline-size]", light ? "border-white/10 bg-white/6" : "border-navy/10 bg-white")}>
          <p className="flex min-h-14 max-w-full items-end whitespace-nowrap font-heading text-[clamp(2rem,12cqw,3rem)] leading-none text-gold">{stat.value}</p>
          <p className={cn("label mt-3 min-h-12", light ? "text-ivory/64" : "text-navy/55")}>{stat.label}</p>
          {stat.detail ? <p className={cn("mt-3 text-sm leading-6", light ? "text-ivory/56" : "text-navy/55")}>{stat.detail}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function LogoCloud({ logos }: { logos: { name: string; src: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo) => (
        <div key={logo.name} className="grid min-h-24 place-items-center rounded-lg border border-navy/8 bg-white px-5 py-4">
          <img src={logo.src} alt={logo.name} className="max-h-12 w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
        </div>
      ))}
    </div>
  );
}

export function CardGrid({ cards, columns = 3, light = false }: { cards: ContentCard[]; columns?: 2 | 3 | 4; light?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {cards.map((card) => (
        <article key={card.title} className={cn("rounded-lg border p-6", light ? "border-white/10 bg-white/6" : "border-navy/10 bg-white")}>
          {card.label ? <p className={cn("label mb-4", light ? "text-gold" : "text-goldDark")}>{card.label}</p> : null}
          <h3 className={cn("font-heading text-2xl leading-tight", light ? "text-ivory" : "text-navy")}>
            <FormattedTitle title={card.title} />
          </h3>
          <p className={cn("mt-4 text-sm leading-7 md:text-base", light ? "text-ivory/64" : "text-navy/62")}>{card.body}</p>
        </article>
      ))}
    </div>
  );
}

export function LinkCardGrid({ cards }: { cards: ContentCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.title}
          to={card.label ?? "/"}
          className="group rounded-lg border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
        >
          <BuyerIcon title={card.title} />
          <h3 className="mt-5 font-heading text-2xl leading-tight text-navy">
            <FormattedTitle title={card.title} />
          </h3>
          <p className="mt-4 text-sm leading-7 text-navy/62">{card.body}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-goldDark">
            Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function DealGrid({
  deals,
}: {
  deals: { title: string; location: string; ownership: string; ebitda: string; imageUrl: string; imageAlt: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {deals.map((deal) => (
        <article key={deal.title} className="overflow-hidden rounded-lg border border-navy/10 bg-white">
          <img src={deal.imageUrl} alt={deal.imageAlt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
          <div className="p-5">
            <h3 className="font-heading text-2xl leading-tight text-navy">
              <FormattedTitle title={deal.title} />
            </h3>
            <p className="mt-3 text-sm text-navy/55">
              {deal.location} / {deal.ownership}
            </p>
            <p className="mt-2 text-sm font-bold text-goldDark">{deal.ebitda}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className={cn("flex gap-3 text-sm leading-7 md:text-base", light ? "text-ivory/70" : "text-navy/68")}>
          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold">
            <Check className="size-3" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({ steps, light = false }: { steps: ContentCard[]; light?: boolean }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className={cn("rounded-lg border p-6", light ? "border-white/10 bg-white/6" : "border-navy/10 bg-white")}>
          <span className="grid size-10 place-items-center rounded-full border border-gold/70 font-heading text-lg leading-none text-gold">
            {index + 1}
          </span>
          <h3 className={cn("mt-5 font-heading text-2xl leading-tight", light ? "text-ivory" : "text-navy")}>{step.title}</h3>
          <p className={cn("mt-3 text-sm leading-7 md:text-base", light ? "text-ivory/64" : "text-navy/62")}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function QuoteFeature({ testimonial }: { testimonial: ServiceTestimonial }) {
  return (
    <figure className="rounded-lg border border-gold/35 bg-white/6 p-7 md:p-9">
      {testimonial.title ? <p className="label mb-4 text-gold">{testimonial.title}</p> : null}
      <blockquote className="font-heading text-2xl leading-snug text-ivory md:text-3xl">"{testimonial.quote}"</blockquote>
      <figcaption className="mt-7 flex items-center gap-3">
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        <span>
          <span className="block font-bold text-ivory">{testimonial.name}</span>
          <span className="block text-sm text-ivory/60">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-lg border border-navy/10 bg-white p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-xl text-navy">
            {item.question}
            <span className="text-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-navy/62 md:text-base">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ConversionCTA({ compact = false }: { compact?: boolean }) {
  return (
    <Section tone="navy" className={compact ? "py-14 md:py-16" : undefined}>
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Get Started"
          title="Find your next deal"
          body="A 30-minute strategy call. We will walk through your mandate, show how we would build the sourcing engine, and tell you whether OutSearched is the right fit."
          light
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to={BOOKING_HASH} size="large">
            Book A Strategy Call
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function BookingEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="booking" className="scroll-mt-24 overflow-hidden rounded-lg border border-navy/10 bg-white shadow-xl md:scroll-mt-28">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/10 px-5 py-4">
        <div>
          <p className="label text-goldDark">Strategy Call</p>
          <h2 className="font-heading text-2xl text-navy">Book with OutSearched</h2>
          <p className="mt-1 text-sm leading-6 text-navy/58">The calendar loads below. Use the direct link if your browser blocks embedded scheduling.</p>
        </div>
        <a className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-bold text-navy transition hover:bg-goldLight" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Open Calendly <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
      <div className="relative min-h-[620px] bg-white md:min-h-[720px]">
        {!loaded ? (
          <div className="absolute inset-0 z-10 grid place-items-center bg-white px-6 text-center">
            <div className="max-w-sm">
              <div className="mx-auto size-12 animate-pulse rounded-full bg-gold/25" />
              <p className="mt-5 font-heading text-2xl text-navy">Loading calendar</p>
              <p className="mt-2 text-sm leading-6 text-navy/58">If it does not appear, open Calendly directly.</p>
            </div>
          </div>
        ) : null}
        <iframe
          title="OutSearched strategy call booking"
          src={BOOKING_URL}
          className="h-[620px] w-full md:h-[720px]"
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export function ContactPanel() {
  return (
    <div className="grid gap-4">
      <div className="rounded-lg border border-navy/10 bg-white p-6">
        <MapPin className="size-5 text-goldDark" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-2xl text-navy">Location</h3>
        <p className="mt-2 text-navy/60">Austin, Texas</p>
      </div>
    </div>
  );
}
