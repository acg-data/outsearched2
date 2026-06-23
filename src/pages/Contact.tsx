import { BookingEmbed, ContactPanel, PageHero, Section, SectionHeading } from "@/components/Blocks";
import { contactMeta } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta(contactMeta);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your next deal"
        lead="The owner you need to meet has not talked to a banker yet. Book a 30-minute call and we will show you how we would approach your mandate."
        compact
      />
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="A focused first conversation"
              body="We strive to respond to inquiries within 24 hours. For most buyers, the best next step is the strategy call below."
            />
            <div className="mt-8">
              <ContactPanel />
            </div>
          </div>
          <BookingEmbed />
        </div>
      </Section>
    </>
  );
}
