import { useEffect } from "react";
import { OG_IMAGE, SITE_ORIGIN } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";
import type { PageMeta } from "@/data/site";

function upsertMeta(selector: string, create: () => HTMLMetaElement, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(meta.path, SITE_ORIGIN);
    const imageUrl = absoluteUrl(meta.image ?? OG_IMAGE, SITE_ORIGIN);

    document.title = meta.title;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const element = document.createElement("meta");
        element.setAttribute("name", "description");
        return element;
      },
      meta.description,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const properties: Record<string, string> = {
      "og:type": "website",
      "og:site_name": "OutSearched",
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": canonicalUrl,
      "og:image": imageUrl,
    };

    Object.entries(properties).forEach(([property, value]) => {
      upsertMeta(
        `meta[property="${property}"]`,
        () => {
          const element = document.createElement("meta");
          element.setAttribute("property", property);
          return element;
        },
        value,
      );
    });

    const twitter: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": imageUrl,
    };

    Object.entries(twitter).forEach(([name, value]) => {
      upsertMeta(
        `meta[name="${name}"]`,
        () => {
          const element = document.createElement("meta");
          element.setAttribute("name", name);
          return element;
        },
        value,
      );
    });
  }, [meta]);
}
