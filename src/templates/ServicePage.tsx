import { useState } from "react";
import { Navigate, Link, useParams } from "react-router";
import {
  ArrowRight,
  BarChart2,
  Brain,
  Check,
  ClipboardCheck,
  Clock,
  FileText,
  Flag,
  Globe,
  Handshake,
  Link2,
  MessageSquare,
  Minus,
  Plus,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  UserRound,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { servicePages, servicesMeta, type ServiceFeatureCard } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { BOOKING_HASH } from "@/lib/constants";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const trustedLogos = ["Wintrust", "Kroll", "Houlihan Lokey", "Lazard"];

const iconMap: Record<string, LucideIcon> = {
  UserRound,
  BarChart2,
  Globe,
  ShieldCheck,
  Clock,
  Search,
  SlidersHorizontal,
  FileText,
  TrendingUp,
  Handshake,
  Zap,
  Brain,
  MessageSquare,
  Link2,
  Flag,
  Users,
  ClipboardCheck,
  Settings,
  Rocket,
};

function HeroTitle({ title, goldLine }: { title: string; goldLine: string }) {
  const idx = title.indexOf(goldLine);
  const classes =
    "font-heading text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[5rem] text-balance";
  if (idx === -1) {
    return <h1 className={classes}>{title}</h1>;
  }
  const before = title.slice(0, idx);
  const after = title.slice(idx + goldLine.length);
  return (
    <h1 className={classes}>
      {before}
      <em className="not-italic text-gold">{goldLine}</em>
      {after}
    </h1>
  );
}

function FeatureCardItem({ card }: { card: ServiceFeatureCard }) {
  const Icon = iconMap[card.icon] ?? Search;
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-navy/10 bg-white p-5">
      <span className="grid size-10 place-items-center rounded-full border border-gold/40 bg-gold/8 text-goldDark">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-xl leading-snug text-navy">{card.title}</h3>
        <p className="mt-2 text-sm leading-6 text-navy/62">{card.body}</p>
      </div>
    </div>
  );
}

function FAQRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <button
        className="flex w-full items-center justify-between gap-6 px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-heading text-lg leading-snug text-ivory">{question}</span>
        <span className="shrink-0 text-gold">
          {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-7 text-ivory/64">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const page = servicePages.find((item) => item.slug === slug);

  usePageMeta(page?.meta ?? servicesMeta);

  if (!page) return <Navigate to="/services" replace />;

  const statsColClass =
    page.serviceStats.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-3";

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[580px] overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 lg:left-[50%]">
          <img
            src={page.heroImageUrl}
            alt=""
            className="h-full w-full object-cover opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/50 lg:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-36 lg:px-8">
          <div className="max-w-[600px]">
            <p className="label mb-5 text-gold">{page.eyebrow}</p>
            <HeroTitle title={page.heroTitle} goldLine={page.heroGoldLine} />
            <p className="mt-6 max-w-xl text-base leading-7 text-ivory/68 md:text-lg md:leading-8">
              {page.lead}
            </p>
            <div className="mt-8">
              <Button to={BOOKING_HASH} size="large">
                Book A Strategy Call
              </Button>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="label text-ivory/40">Trusted by Dealmakers</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                {trustedLogos.map((name) => (
                  <span
                    key={name}
                    className="font-heading text-base font-normal tracking-wide text-ivory/50 transition hover:text-ivory/80"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="label text-goldDark">What We Do</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-navy md:text-[2.75rem] text-balance">
                {page.whatWeDoHeading}
              </h2>
            </div>
            <div className="lg:pt-14">
              <p className="text-base leading-8 text-navy/64">{page.whatWeDoBody}</p>
            </div>
          </div>

          <div
            className={cn(
              "mt-10 grid gap-5",
              page.featureCards.length <= 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "sm:grid-cols-2 lg:grid-cols-5",
            )}
          >
            {page.featureCards.map((card) => (
              <FeatureCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR ──────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* Left */}
            <div>
              <p className="label text-gold">Built for Dealmakers</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory md:text-4xl text-balance">
                {page.builtForHeading}
              </h2>
              <p className="mt-4 text-base leading-7 text-ivory/60">{page.builtForBody}</p>
              <ul className="mt-7 grid gap-3">
                {page.builtForChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-7 text-ivory/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: VS comparison */}
            <div className="grid items-start gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="label text-gold/70">{page.vsLeft.title}</p>
                <ul className="mt-5 grid gap-3">
                  {page.vsLeft.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-6 text-ivory/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden sm:flex items-center self-center">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-[11px] font-bold tracking-widest text-navy">
                  VS
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="label text-gold/70">{page.vsRight.title}</p>
                <ul className="mt-5 grid gap-3">
                  {page.vsRight.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-6 text-ivory/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR MODEL / ENGAGEMENT ─────────────────── */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <div>
              <p className="label text-goldDark">{page.engagementEyebrow}</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-navy md:text-4xl text-balance">
                {page.chooseModelHeading}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {page.engagementCards.map((card) => {
                const Icon = iconMap[card.icon] ?? ArrowRight;
                const cardInner = (
                  <>
                    <span className="grid size-10 place-items-center rounded-full border border-gold/40 bg-gold/8 text-goldDark">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg leading-snug text-navy">{card.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-navy/55">{card.body}</p>
                    </div>
                    {card.link && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-goldDark">
                        Learn more{" "}
                        <ArrowRight
                          className="size-3 transition group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                );
                return card.link ? (
                  <Link
                    key={card.title}
                    to={card.link}
                    className="group flex flex-col gap-4 rounded-lg border border-navy/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
                  >
                    {cardInner}
                  </Link>
                ) : (
                  <div
                    key={card.title}
                    className="group flex flex-col gap-4 rounded-lg border border-navy/10 bg-white p-5"
                  >
                    {cardInner}
                  </div>
                );
              })}
            </div>
          </div>

          {page.engagementBonus && (() => {
            const BonusIcon = iconMap[page.engagementBonus.icon] ?? TrendingUp;
            return (
              <div className="mt-6 flex items-start gap-5 rounded-lg border border-gold/30 bg-parchment p-5 lg:ml-[35%]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-goldDark">
                  <BonusIcon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="font-heading text-lg leading-snug text-navy">
                    {page.engagementBonus.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-navy/65">{page.engagementBonus.body}</p>
                </div>
                <ArrowRight className="mt-2 size-4 shrink-0 text-goldDark" aria-hidden="true" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── PROVEN IMPACT ──────────────────────────────────── */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="label text-gold">Proven Impact</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory md:text-5xl text-balance">
                {page.provenImpactHeading}
              </h2>
              <p className="mt-4 text-base leading-7 text-ivory/58">{page.provenImpactBody}</p>
            </div>
            <div className={cn("grid gap-4", statsColClass)}>
              {page.serviceStats.map((stat) => {
                const StatIcon = stat.icon ? iconMap[stat.icon] : null;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-5"
                  >
                    {StatIcon && (
                      <span className="mb-4 grid size-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                        <StatIcon className="size-5" aria-hidden="true" />
                      </span>
                    )}
                    <p className="font-heading text-3xl text-gold md:text-4xl">{stat.value}</p>
                    <p className="label mt-3 text-ivory/55">{stat.label}</p>
                    {stat.detail && (
                      <p className="mt-2 text-xs leading-5 text-ivory/42">{stat.detail}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="label text-gold">{page.setupTitle}</p>
              <ul className="mt-5 grid gap-3">
                {page.setup.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-gold text-gold">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-7 text-ivory/68">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-lg bg-navyLight">
              <img
                src={page.proofImageUrl}
                alt=""
                className="h-full w-full object-cover opacity-40"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl uppercase tracking-wide text-gold">
                  {page.setupQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <p className="label text-gold">Questions Answered</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory md:text-4xl text-balance">
                Answers to common questions.
              </h2>
            </div>
            <div className="grid gap-3">
              {page.faq.map((item) => (
                <FAQRow key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-16 md:py-28">
        <div className="absolute inset-0 lg:left-[48%]">
          <img
            src={page.ctaImageUrl}
            alt=""
            className="h-full w-full object-cover opacity-40"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/60 lg:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <p className="label text-gold">{page.ctaEyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory md:text-5xl text-balance">
              {page.ctaHeading}
            </h2>
            <p className="mt-5 text-base leading-7 text-ivory/64 md:text-lg">{page.ctaBody}</p>
            <div className="mt-8">
              <Button to={BOOKING_HASH} size="large">
                Book A Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
