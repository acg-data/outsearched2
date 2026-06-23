import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { BOOKING_HASH } from "@/lib/constants";
import { buyerPages, servicePages } from "@/data/site";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const topLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

function normalizePath(path: string) {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

function isActivePath(current: string, path: string) {
  const normalizedCurrent = normalizePath(current);
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? normalizedCurrent === "/" : normalizedCurrent.startsWith(normalizedPath);
}

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollToHash = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.setTimeout(scrollToHash, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1B34] shadow-xl shadow-ink/10">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <Link to="/" className="flex items-center gap-3" aria-label="OutSearched home" onClick={closeMenu}>
            <img src="/assets/outsearched-logo.webp" alt="OutSearched" className="h-11 w-auto" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <DesktopNavLink to="/">Home</DesktopNavLink>
            <DesktopNavLink to="/about">About</DesktopNavLink>
            <DesktopDropdown label="Who We Serve" basePath="/who-we-serve" items={buyerPages.map((page) => ({ label: page.navLabel, path: page.path }))} />
            <DesktopDropdown label="Services" basePath="/services" items={servicePages.map((page) => ({ label: page.navLabel, path: page.path }))} />
            <DesktopNavLink to="/faqs">FAQs</DesktopNavLink>
            <DesktopNavLink to="/contact">Contact</DesktopNavLink>
          </div>

          <div className="hidden lg:block">
            <Button to={BOOKING_HASH}>Book A Strategy Call</Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-gold/35 text-gold lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {menuOpen ? <MobileMenu onNavigate={closeMenu} /> : null}

      <main>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}

function DesktopNavLink({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "text-sm font-semibold text-gold transition hover:text-goldLight",
          isActive && "text-gold",
        )
      }
    >
      {children}
    </NavLink>
  );
}

function DesktopDropdown({
  label,
  basePath,
  items,
}: {
  label: string;
  basePath: string;
  items: { label: string; path: string }[];
}) {
  const location = useLocation();
  const active = isActivePath(location.pathname, basePath);

  return (
    <div className="group relative">
      <Link
        to={basePath}
        className={cn("inline-flex items-center gap-1 text-sm font-semibold text-gold transition hover:text-goldLight", active && "text-gold")}
      >
        {label}
        <ChevronDown className="size-4 transition group-hover:rotate-180" aria-hidden="true" />
      </Link>
      <div className="invisible absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="rounded-lg border border-white/10 bg-navyLight p-3 shadow-2xl">
          <Link to={basePath} className="block rounded-md px-4 py-3 text-sm font-bold text-gold hover:bg-white/6">
            {label} overview
          </Link>
          {items.map((item) => (
            <Link key={item.path} to={item.path} className="block rounded-md px-4 py-3 text-sm text-gold hover:bg-white/6 hover:text-goldLight">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-navy px-4 pb-10 pt-24 text-ivory lg:hidden">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="grid gap-2">
          {topLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={onNavigate} className="rounded-md border border-gold/30 px-4 py-4 font-heading text-2xl text-gold">
              {link.label}
            </Link>
          ))}
        </div>

        <MobileGroup title="Who We Serve" basePath="/who-we-serve" items={buyerPages.map((page) => ({ label: page.navLabel, path: page.path }))} onNavigate={onNavigate} />
        <MobileGroup title="Services" basePath="/services" items={servicePages.map((page) => ({ label: page.navLabel, path: page.path }))} onNavigate={onNavigate} />

        <Button to={BOOKING_HASH} size="large" className="w-full" onClick={onNavigate}>
          Book A Strategy Call
        </Button>
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  basePath,
  items,
  onNavigate,
}: {
  title: string;
  basePath: string;
  items: { label: string; path: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 p-3">
      <Link to={basePath} onClick={onNavigate} className="block rounded-md px-3 py-3 font-heading text-2xl text-gold">
        {title}
      </Link>
      <div className="grid gap-1 pt-2">
        {items.map((item) => (
          <Link key={item.path} to={item.path} onClick={onNavigate} className="rounded-md px-3 py-3 text-sm text-gold hover:bg-white/6 hover:text-goldLight">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:gap-10 md:py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" aria-label="OutSearched home">
            <img src="/assets/outsearched-logo.webp" alt="OutSearched" className="h-12 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/60">
            Proprietary deal sourcing and buy-side advisory for lower middle market buyers.
          </p>
        </div>

        <FooterColumn title="Services" links={servicePages.map((page) => ({ label: page.navLabel, path: page.path }))} />
        <FooterColumn title="Who We Serve" links={buyerPages.map((page) => ({ label: page.navLabel, path: page.path }))} />
        <FooterColumn
          title="Company"
          links={[
            { label: "About", path: "/about" },
            { label: "FAQs", path: "/faqs" },
            { label: "Contact", path: "/contact" },
            { label: "Book a Call", path: BOOKING_HASH },
          ]}
        />
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-ivory/50 sm:px-6">
        Copyright 2026 OutSearched. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  const list = (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path} className="text-sm text-ivory/62 transition hover:text-gold">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <details className="group border-t border-white/10 py-4 md:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <span className="label text-gold">{title}</span>
          <ChevronDown className="size-4 text-gold transition group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-4">{list}</div>
      </details>

      <div className="hidden md:block">
        <h2 className="label mb-5 text-gold">{title}</h2>
        {list}
      </div>
    </div>
  );
}
