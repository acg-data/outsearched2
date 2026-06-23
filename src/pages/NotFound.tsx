import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/Blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { PageMeta } from "@/data/site";

const notFoundMeta: PageMeta = {
  path: "/404",
  title: "Page Not Found | OutSearched",
  description: "The requested OutSearched page could not be found.",
};

export default function NotFoundPage() {
  usePageMeta(notFoundMeta);

  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        lead="The page you are looking for does not exist or has moved."
        compact
      />
      <Section tone="ivory" className="text-center">
        <Button to="/">Back To Home</Button>
      </Section>
    </>
  );
}
