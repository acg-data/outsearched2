export interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
  detail?: string;
}

export interface ContentCard {
  title: string;
  body: string;
  label?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  intro?: string;
  items: FAQItem[];
}

export interface BuyerPageContent {
  slug: string;
  path: string;
  navLabel: string;
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  lead: string;
  problemTitle: string;
  problemBody: string;
  problemPoints: ContentCard[];
  targetTitle: string;
  targets: ContentCard[];
  modelTitle: string;
  models: ContentCard[];
  fit: string[];
  faq: FAQItem[];
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
  title?: string;
}

export interface ServicePageContent {
  slug: string;
  path: string;
  navLabel: string;
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  lead: string;
  definitionTitle: string;
  definition: string;
  operatingModel: ContentCard[];
  fitTitle: string;
  fit: string[];
  comparison: ContentCard[];
  faq: FAQItem[];
  // Optional rich sections — the template renders each only when present, so pages can be enriched incrementally.
  stats?: Stat[];
  problem?: {
    eyebrow?: string;
    title: string;
    body?: string;
    points: ContentCard[];
  };
  process?: {
    eyebrow?: string;
    title: string;
    intro?: string;
    steps: ContentCard[];
  };
  testimonial?: ServiceTestimonial;
}

export const homeMeta: PageMeta = {
  path: "/",
  title: "Deal Sourcing & Buy-Side Advisory for LMM | OutSearched",
  description:
    "OutSearched provides proprietary deal sourcing and buy-side advisory for LMM PE firms, family offices, independent sponsors, and corporate development teams.",
};

export const aboutMeta: PageMeta = {
  path: "/about",
  title: "About OutSearched | LMM Buy-Side Deal Sourcing Firm",
  description:
    "Built by a buyer, for buyers. OutSearched is a buy-side deal sourcing firm purpose-built for LMM PE firms, family offices, independent sponsors, and corporate development teams.",
};

export const whoWeServeMeta: PageMeta = {
  path: "/who-we-serve",
  title: "Deal Flow for PE, Sponsors & Business Owners | OutSearched",
  description:
    "OutSearched serves LMM private equity, independent sponsors, business owners, family offices, search funds, corporate development teams, and individual buyers.",
};

export const servicesMeta: PageMeta = {
  path: "/services",
  title: "Buy-Side Deal Sourcing | Internal, Fractional & Advisory",
  description:
    "OutSearched provides buy-side deal sourcing through four engagement models: Internal BD, Fractional BD, Buy-Side M&A Advisory, and AI Implementation.",
};

export const faqMeta: PageMeta = {
  path: "/faqs",
  title: "OutSearched FAQs | Deal Sourcing & Buy-Side Advisory",
  description:
    "Common questions about OutSearched buy-side deal sourcing: engagement models, pricing, timelines, and how we work with PE, sponsors, and family offices.",
};

export const contactMeta: PageMeta = {
  path: "/contact",
  title: "Contact OutSearched | Book a Strategy Call for Deal Sourcing",
  description:
    "Book a 30-minute strategy call to review your acquisition mandate, walk through our origination approach, and confirm if OutSearched is the right fit.",
};

export const primaryStats: Stat[] = [
  { value: "$500MM+", label: "Sourced in 2025", detail: "Active mandate performance across the client portfolio." },
  { value: "52x", label: "More owner conversations", detail: "Direct-to-owner coverage before broad auction processes form." },
  { value: "~60", label: "Days to the first qualified conversation", detail: "Typical early signal once the mandate and market are live." },
];

export const clientLogos = [
  { name: "Surge Private Equity", src: "/assets/client-surge.png" },
  { name: "Oceans Equity", src: "/assets/client-oceans.png" },
  { name: "LP First Capital", src: "/assets/client-lp-first.png" },
  { name: "Kelso", src: "/assets/client-kelso.png" },
  { name: "Alpine", src: "/assets/client-alpine.jpg" },
  { name: "Montage Partners", src: "/assets/client-montage.png" },
];

export const deals = [
  {
    title: "Lighting Services Platform",
    location: "Mountain West",
    ownership: "Founder-owned",
    ebitda: "$4.1MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Commercial lighting over a modern building interior",
  },
  {
    title: "Chemical Manufacturing",
    location: "South-Central",
    ownership: "Family-owned",
    ebitda: "$3.5MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial manufacturing equipment in a production facility",
  },
  {
    title: "Steel Distribution & Fabrication",
    location: "Southeast",
    ownership: "Founder-owned",
    ebitda: "$3.5MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Steel fabrication and industrial metal work",
  },
  {
    title: "Industrial Cleaning & Environmental",
    location: "Northeast",
    ownership: "Founder-owned",
    ebitda: "$2.8MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Professional cleaning equipment in a commercial facility",
  },
  {
    title: "Warehouse Logistics Services",
    location: "Nationwide",
    ownership: "Family-owned",
    ebitda: "$1.6MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Warehouse logistics and distribution operations",
  },
  {
    title: "Plumbing & HVAC Services",
    location: "Midwest",
    ownership: "Founder-owned",
    ebitda: "$3.5MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Service technician working on mechanical systems",
  },
  {
    title: "Metal Roofing & Building Products",
    location: "Southeast",
    ownership: "Founder-owned",
    ebitda: "$1.2MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Construction crew working on roofing and building materials",
  },
  {
    title: "Home Inspection Services",
    location: "Midwest",
    ownership: "Founder-owned",
    ebitda: "$1.0MM EBITDA",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Residential home exterior for inspection services",
  },
];

export const testimonials = [
  {
    title: "No Stone Unturned",
    quote:
      "Within three weeks, we were in active conversations with attractive acquisition targets. The speed, quality, and professionalism of the process stood out.",
    name: "John M.",
    role: "Individual Buyer",
  },
  {
    title: "An Essential Resource for Our Firm",
    quote:
      "The pipeline they helped us develop has directly translated into meaningful conversations with quality targets.",
    name: "Danny Ilani",
    role: "Independent Sponsor",
  },
  {
    title: "Quick to First Deal",
    quote:
      "They were professional, fast, and I had a deal nearing LOI already with less than 60 days of outbound.",
    name: "CJ Jacobs",
    role: "Independent Sponsor",
  },
];

export const principles: ContentCard[] = [
  {
    title: "Aligned economics",
    body: "Retainers plus success fees keep the work pointed at signed LOIs on deals worth pursuing.",
  },
  {
    title: "Active origination",
    body: "Mandate-specific messaging and multichannel outreach create new owner conversations instead of waiting on banker flow.",
  },
  {
    title: "Dedicated coverage",
    body: "Each engagement gets a staffed operating rhythm across data, outreach, qualification, reporting, and negotiation support.",
  },
  {
    title: "Lifecycle support",
    body: "The team stays involved from strategy through qualification, LOI negotiation, and the path to close.",
  },
];

export const buyerPages: BuyerPageContent[] = [
  {
    slug: "lower-middle-market-private-equity",
    path: "/who-we-serve/lower-middle-market-private-equity",
    navLabel: "LMM Private Equity",
    meta: {
      path: "/who-we-serve/lower-middle-market-private-equity",
      title: "Private Equity Deal Flow for LMM Firms | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to LMM private equity firms through direct-to-owner outreach for platform investments and bolt-on acquisitions.",
    },
    eyebrow: "Who We Serve / LMM Private Equity",
    h1: "Fractional and internal business development for LMM private equity",
    lead:
      "Run platform and add-on mandates concurrently with a sourcing function that can operate under your firm brand or as an external origination arm.",
    problemTitle: "Most LMM PE firms are sourcing below their fund's ambition",
    problemBody:
      "Auction flow is crowded, banker coverage is relationship-dependent, and internal BD seats are hard to hire, train, and retain.",
    problemPoints: [
      { title: "Coverage gaps", body: "One or two people rarely cover every thesis, geography, and add-on angle with enough frequency." },
      { title: "Auction compression", body: "Prepared sellers reach the same buyer universe and push price, certainty, and speed to the center." },
      { title: "BD fragility", body: "When a rep leaves, the institutional memory and operating cadence often leaves with them." },
    ],
    targetTitle: "Platform mandates and add-on mandates, run concurrently",
    targets: [
      { title: "$2MM to $5MM EBITDA platforms", body: "Founder-led businesses in defined sectors where early access changes the entry multiple." },
      { title: "$750K to $1.5MM add-ons", body: "Tuck-ins and regional operators that strengthen an existing portfolio thesis." },
      { title: "Mandate-specific universes", body: "Target lists built around industry, geography, ownership structure, and strategic fit." },
    ],
    modelTitle: "Embed us inside your firm, or run us as your external origination arm",
    models: [
      { title: "Internal Business Development", body: "A dedicated BD rep fronts every owner conversation under your firm brand." },
      { title: "Fractional Business Development", body: "Our team runs direct-to-owner outreach under the OutSearched brand for confidentiality and speed." },
    ],
    fit: ["LMM PE funds running multiple theses", "Platform and add-on coverage", "Teams that want more owner conversations without adding permanent headcount"],
    faq: [
      { question: "Can OutSearched augment an existing BD team?", answer: "Yes. We can run dedicated proprietary outreach while your internal team continues banker and relationship coverage." },
      { question: "Can outreach use our firm brand?", answer: "Yes. Internal BD is designed for exactly that operating model." },
    ],
  },
  {
    slug: "independent-sponsors",
    path: "/who-we-serve/independent-sponsors",
    navLabel: "Independent Sponsors",
    meta: {
      path: "/who-we-serve/independent-sponsors",
      title: "Independent Sponsor Deal Flow | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to LMM independent sponsors, reaching owners before any process exists so you win on entry multiple.",
    },
    eyebrow: "Who We Serve / Independent Sponsors",
    h1: "Built for sponsors competing against private equity",
    lead:
      "Independent sponsors win when they reach owners early, shape the conversation, and bring LPs deals that were not already shopped.",
    problemTitle: "Deal-by-deal economics demand off-market sourcing",
    problemBody:
      "You do not have the cushion of committed capital. Banker-led deals are often too expensive by the time you see them.",
    problemPoints: [
      { title: "Auction deals do not pencil", body: "Competition pushes price and certainty requirements before you can build conviction." },
      { title: "LP conversations need substance", body: "A proprietary angle gives investors a clearer reason to engage." },
      { title: "Search time is limited", body: "You need qualified conversations, not a static database or generic list." },
    ],
    targetTitle: "Platform mandates and add-on mandates, sized to sponsor economics",
    targets: [
      { title: "$2MM to $5MM platforms", body: "Businesses large enough to support institutional LP conversations." },
      { title: "$500K to $1MM add-ons", body: "Narrow acquisition angles that strengthen an existing or planned platform." },
      { title: "Owner-led sectors", body: "Thesis-fit niches where direct outreach can create an early relationship." },
    ],
    modelTitle: "Run us as your external sourcing arm, or embed us inside your firm",
    models: [
      { title: "Fractional BD", body: "Shared team economics with direct-to-owner execution under our brand." },
      { title: "Internal BD", body: "Dedicated coverage when you want a named rep operating as your team." },
    ],
    fit: ["Capitalized sponsors", "Narrow thesis programs", "Buyers who need LP-presentable proprietary opportunities"],
    faq: [
      { question: "Do you work with first-time sponsors?", answer: "Yes, when the sponsor is well-capitalized, focused, and ready to move when a qualified opportunity appears." },
      { question: "Can you help with LP-ready deal positioning?", answer: "We support qualification and narrative around why the target fits the mandate." },
    ],
  },
  {
    slug: "search-funds",
    path: "/who-we-serve/search-funds",
    navLabel: "Search Funds",
    meta: {
      path: "/who-we-serve/search-funds",
      title: "Search Fund Deal Flow | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to LMM search funds through direct owner outreach so you close on the one acquisition that matters.",
    },
    eyebrow: "Who We Serve / Search Funds",
    h1: "The highest-leverage spend in your search is qualified deal flow",
    lead:
      "Search capital only matters if it creates real owner conversations with businesses that fit the thesis and can close.",
    problemTitle: "Without qualified acquisition opportunities, the search is dead in the water",
    problemBody:
      "A broad market scan is not enough. Searchers need a focused target universe, steady outreach, and credibility with owners.",
    problemPoints: [
      { title: "Runway pressure", body: "Every month spent on low-fit conversations burns scarce search capital." },
      { title: "Credibility gap", body: "Owners need to understand why this buyer is serious before they share sensitive information." },
      { title: "Thesis drift", body: "A wide search can dilute the exact acquisition profile investors backed." },
    ],
    targetTitle: "Owner-replaceable businesses that fit the search",
    targets: [
      { title: "Owner-led businesses", body: "Companies where a transition story can work for the seller and buyer." },
      { title: "Thesis-fit niches", body: "Markets with enough target density to support a real outbound motion." },
      { title: "Quiet transition candidates", body: "Owners who are not in a banker-led process yet." },
    ],
    modelTitle: "A focused sourcing motion for well-qualified searchers",
    models: [
      { title: "Mandate definition", body: "Tighten the buy-box before any list building or outreach begins." },
      { title: "Direct-to-owner outreach", body: "Reach owners with a message that explains the searcher's fit and seriousness." },
    ],
    fit: ["Well-funded searchers", "Focused theses", "Buyers prepared to move quickly when fit is clear"],
    faq: [
      { question: "Do you work with all search funds?", answer: "We work with searchers who have capital, a clear thesis, and readiness to act." },
      { question: "Can you help narrow a search thesis?", answer: "Yes. Mandate definition is part of the front-end process." },
    ],
  },
  {
    slug: "family-offices",
    path: "/who-we-serve/family-offices",
    navLabel: "Family Offices",
    meta: {
      path: "/who-we-serve/family-offices",
      title: "Family Office Deal Flow | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to LMM family offices through discreet direct-to-owner outreach tailored to your holding mandate.",
    },
    eyebrow: "Who We Serve / Family Offices",
    h1: "Patient capital deserves proprietary access",
    lead:
      "Family offices need direct, discreet conversations with businesses that fit the family's mandate, principles, and ownership horizon.",
    problemTitle: "The best opportunities rarely arrive as forwarded teasers",
    problemBody:
      "Patient capital is a real advantage, but only if the family office sees opportunities before the broad buyer market does.",
    problemPoints: [
      { title: "Quality is inconsistent", body: "Forwarded banker flow rarely maps cleanly to a family's long-term mandate." },
      { title: "Lean teams", body: "Many offices are intentionally small and do not want a full-time sourcing build." },
      { title: "Discretion matters", body: "Direct outreach has to protect the family's name and operating style." },
    ],
    targetTitle: "Founder-owned companies that fit more than a financial screen",
    targets: [
      { title: "Founder-led platforms", body: "Businesses where long-term ownership is a credible seller message." },
      { title: "Succession opportunities", body: "Owners considering transition before a formal process exists." },
      { title: "Sector theses", body: "Patient capital mapped to industries where the family has conviction." },
    ],
    modelTitle: "Discreet sourcing built around the family mandate",
    models: [
      { title: "Confidential outreach", body: "Run under OutSearched when discretion matters most." },
      { title: "Mandate calibration", body: "Define fit around values, control preference, hold period, and operating involvement." },
    ],
    fit: ["Direct holding family offices", "Long-term capital", "Lean teams that need consistent proprietary coverage"],
    faq: [
      { question: "Can outreach stay discreet?", answer: "Yes. Fractional BD can run under our brand until buyer identity should be introduced." },
      { question: "Can you support minority or control searches?", answer: "Yes. The mandate definition phase clarifies structure before outreach." },
    ],
  },
  {
    slug: "corporate-development",
    path: "/who-we-serve/corporate-development",
    navLabel: "Corporate Development",
    meta: {
      path: "/who-we-serve/corporate-development",
      title: "Off-Market M&A Targets for Corp Dev | OutSearched",
      description:
        "OutSearched sources off-market M&A targets for corporate development teams through direct-to-owner outreach, matched to synergy and accretion criteria.",
    },
    eyebrow: "Who We Serve / Corporate Development",
    h1: "Strategic sourcing for corporate development",
    lead:
      "Turn inorganic growth priorities into qualified owner conversations that can survive leadership, board, and integration scrutiny.",
    problemTitle: "Your best targets are rarely the companies already in market",
    problemBody:
      "Corporate development mandates are strategic, but most inbound opportunities are marketed like financial buyer processes.",
    problemPoints: [
      { title: "Strategic fit is specific", body: "The target has to map to product, geography, capability, or customer logic." },
      { title: "Teams are stretched", body: "Corp dev teams already own sourcing, diligence, internal approvals, and integration planning." },
      { title: "Noise slows decisions", body: "Unqualified outreach and broad lists make it harder to defend a target internally." },
    ],
    targetTitle: "Strategic targets mapped to the reason you would buy them",
    targets: [
      { title: "Product adjacencies", body: "Companies that extend the existing offering or customer base." },
      { title: "Geographic expansion", body: "Operators that accelerate entry into a priority region." },
      { title: "Capability acquisitions", body: "Businesses that add talent, technology, or service lines." },
    ],
    modelTitle: "A sourcing motion aligned to corporate strategy",
    models: [
      { title: "Target universe mapping", body: "Prioritize companies based on strategic rationale, not just financial filters." },
      { title: "Owner outreach", body: "Reach decision-makers directly with a message grounded in the strategic fit." },
    ],
    fit: ["Corporate development teams", "Strategic acquisition mandates", "Operators with board-level inorganic growth priorities"],
    faq: [
      { question: "Can you source named-account targets?", answer: "Yes. Corporate development programs often start with specific companies or narrow market maps." },
      { question: "Do you help qualify strategic fit?", answer: "Yes. Qualification is shaped around why the company would be accretive or strategically important." },
    ],
  },
  {
    slug: "current-business-owners",
    path: "/who-we-serve/current-business-owners",
    navLabel: "Current Business Owners",
    meta: {
      path: "/who-we-serve/current-business-owners",
      title: "Acquisition Deal Flow for Business Owners | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to business owners growing by acquisition through direct-to-owner outreach to competitors, adjacents, and bolt-ons.",
    },
    eyebrow: "Who We Serve / Current Business Owners",
    h1: "Acquisitions for operators growing by acquisition",
    lead:
      "Turn operating knowledge into a proprietary acquisition pipeline while your leadership team stays focused on the business.",
    problemTitle: "You have the operating thesis. You do not have the time to run acquisition sourcing",
    problemBody:
      "Business owners know the market, competitors, and adjacencies, but sourcing requires a dedicated daily operating rhythm.",
    problemPoints: [
      { title: "You are already running the company", body: "The sourcing motion cannot distract from customers, employees, and operations." },
      { title: "Brokered deals are often too late", body: "The best strategic targets may never hire a banker." },
      { title: "Approaching competitors requires care", body: "Messaging and confidentiality matter when the buyer is already in the market." },
    ],
    targetTitle: "Acquisition targets that make sense for the business you already operate",
    targets: [
      { title: "Competitor acquisitions", body: "Operators that strengthen market position or route density." },
      { title: "Adjacent businesses", body: "Companies that add service lines, customers, or operational leverage." },
      { title: "Supplier or vendor targets", body: "Targets that improve margin, control, or customer experience." },
    ],
    modelTitle: "A corporate development function without building one",
    models: [
      { title: "Market map", body: "Translate your operating thesis into an actionable target universe." },
      { title: "Qualified introductions", body: "Bring forward conversations once owner fit and intent are validated." },
    ],
    fit: ["Operators pursuing roll-ups", "Business owners with acquisition capital", "Teams that need sourcing without distraction"],
    faq: [
      { question: "Can you approach competitors discreetly?", answer: "Yes. We design outreach to protect confidentiality and avoid unnecessary market noise." },
      { question: "Can you source outside our current industry?", answer: "Yes, if the adjacent thesis is clear enough to define a qualified opportunity." },
    ],
  },
  {
    slug: "individual-buyers",
    path: "/who-we-serve/individual-buyers",
    navLabel: "Individual Buyers",
    meta: {
      path: "/who-we-serve/individual-buyers",
      title: "Individual Buyer Deal Flow | OutSearched",
      description:
        "OutSearched delivers proprietary deal flow to individual buyers through direct-to-owner outreach so you reach business owners before any broker process begins.",
    },
    eyebrow: "Who We Serve / Individual Buyers",
    h1: "For select, well-capitalized individual buyers searching for one business to own",
    lead:
      "Move beyond broker listings and build a pipeline of owner conversations with businesses that match your capital, skill set, and search focus.",
    problemTitle: "The right business is rarely sitting in a listing feed",
    problemBody:
      "Individual buyers need credibility, focus, and consistent outreach to be taken seriously by owners.",
    problemPoints: [
      { title: "Brokered deals are crowded", body: "You are competing against funded buyers with faster certainty and deeper teams." },
      { title: "Seller credibility matters", body: "Owners need confidence that you can close and steward the business." },
      { title: "Search has to be narrow", body: "A broad hunt creates weak messaging and low owner response." },
    ],
    targetTitle: "Businesses that fit the buyer, not just the market",
    targets: [
      { title: "Owner-operated companies", body: "Businesses where a transition path is plausible." },
      { title: "Capital-fit opportunities", body: "Targets sized to the buyer's available capital and debt capacity." },
      { title: "Succession-driven owners", body: "Owners who may value continuity before a sale process." },
    ],
    modelTitle: "A disciplined search engine for one acquisition",
    models: [
      { title: "Buyer positioning", body: "Clarify why an owner should take the conversation seriously." },
      { title: "Direct outreach", body: "Build and run a focused campaign against a defined target universe." },
    ],
    fit: ["Well-capitalized individual buyers", "ETA buyers with a clear mandate", "Searchers who can act when a target fits"],
    faq: [
      { question: "Do you work with all individual buyers?", answer: "No. Fit depends on capital, focus, and readiness to move quickly." },
      { question: "Can you help sharpen the buyer story?", answer: "Yes. Positioning is part of making owner outreach credible." },
    ],
  },
];

export const servicePages: ServicePageContent[] = [
  {
    slug: "internal-business-development",
    path: "/services/internal-business-development",
    navLabel: "Internal Business Development",
    meta: {
      path: "/services/internal-business-development",
      title: "Internal Business Development for PE Firms | OutSearched",
      description:
        "OutSearched embeds a trained, managed BD rep inside your firm, branded as you, running mandate-specific outreach to grow your proprietary and brokered pipeline.",
    },
    eyebrow: "Services / Internal Business Development",
    h1: "Your business development rep, under your brand",
    lead:
      "One dedicated BD rep committed to your firm alone, covering proprietary and banker conversations tied to your mandate.",
    definitionTitle: "Internal business development, defined for dealmakers",
    definition:
      "Internal BD is a fully dedicated sourcing function that runs under your brand while OutSearched manages the rep, tools, target universe, outreach cadence, and reporting.",
    operatingModel: [
      { title: "Dedicated seat", body: "A trained rep works only for your firm and fronts every owner conversation as your team." },
      { title: "Managed engine", body: "OutSearched handles hiring, training, outreach systems, data, weekly management, and QA." },
      { title: "Full channel coverage", body: "The seat can support proprietary owner outreach plus broker and banker coverage." },
    ],
    fitTitle: "Built for firms that want a named BD seat without building one",
    fit: ["PE firms that want outreach under their brand", "Family offices where buyer identity matters", "Sponsors running named-account programs"],
    comparison: [
      {
        title: "Versus an internal hire",
        body: "No recruiting ramp, no tool buildout, and no single-person fragility. The seat is staffed, managed, and backstopped from day one.",
      },
      {
        title: "Versus banker flow",
        body: "Direct-to-owner coverage starts before a broad sell-side process, so you reach owners while the conversation is still proprietary.",
      },
      {
        title: "Versus Fractional BD",
        body: "Internal BD is dedicated and runs under your brand. Choose it when you want a named seat representing your firm rather than shared coverage.",
      },
    ],
    problem: {
      eyebrow: "The Problem",
      title: "Standing up an internal BD seat is harder than it looks",
      body: "Most firms know they need dedicated origination. Building it in-house means recruiting, tooling, training, and managing a function that stalls the moment one person leaves.",
      points: [
        {
          title: "Recruiting and ramp",
          body: "A capable BD hire takes months to find, onboard, and make productive, and the sourcing clock is running the entire time.",
        },
        {
          title: "Tooling and data overhead",
          body: "Lists, enrichment, sequencing, CRM, and reporting all have to be bought, wired together, and maintained before the first owner is ever contacted.",
        },
        {
          title: "Single-person fragility",
          body: "When one rep owns the cadence and the relationships, a departure takes the institutional memory and the pipeline with it.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "A managed operating rhythm from day one",
      intro: "OutSearched stands up the seat, runs it to a weekly cadence, and reports against your mandate, branded as your firm throughout.",
      steps: [
        {
          title: "Mandate definition",
          body: "We translate your buy-box across industry, size, geography, ownership, and strategic fit into a precise target standard.",
        },
        {
          title: "Target universe",
          body: "We build and enrich the company and owner universe that fits the mandate, not a generic database pull.",
        },
        {
          title: "Branded outreach",
          body: "A dedicated rep runs multichannel, direct-to-owner outreach under your firm's name on a consistent cadence.",
        },
        {
          title: "Qualification",
          body: "Every responsive owner is screened against the mandate before a conversation reaches your team.",
        },
        {
          title: "Reporting and QA",
          body: "Weekly pipeline reviews, activity reporting, and quality control keep the engine accountable and visible.",
        },
        {
          title: "Handoff and support",
          body: "Qualified conversations move to your principals, with continued support through the path toward LOI.",
        },
      ],
    },
    testimonial: {
      title: "An Essential Resource for Our Firm",
      quote: "The pipeline they helped us develop has directly translated into meaningful conversations with quality targets.",
      name: "Danny Ilani",
      role: "Independent Sponsor",
    },
    faq: [
      {
        question: "What exactly is internal business development?",
        answer:
          "Internal business development is a fully dedicated sourcing function that operates under the buyer's brand. A dedicated rep is committed to your firm alone and covers proprietary direct-to-owner outreach plus broker or banker conversations tied to your mandate.",
      },
      {
        question: "Who manages the rep?",
        answer: "OutSearched manages the rep, operating cadence, data, tooling, quality control, and reporting. You get the output and visibility without managing the function day to day.",
      },
      {
        question: "Can the rep use our email domain?",
        answer: "Yes. When the engagement is structured as branded internal BD, the rep can operate on your email domain and front owner conversations as your team.",
      },
      {
        question: "How is this different from fractional business development?",
        answer:
          "Internal BD is dedicated and runs under your brand, while Fractional BD is run by our shared team under our brand. Internal BD is the better fit when you want a named seat representing your firm rather than confidential coverage.",
      },
      {
        question: "Do you charge a retainer?",
        answer:
          "Yes. A dedicated seat requires full-time staffing, data, tooling, and management, so internal BD is retainer-based, designed to come in well below the cost of building and carrying the same function internally.",
      },
    ],
  },
  {
    slug: "fractional-business-development",
    path: "/services/fractional-business-development",
    navLabel: "Fractional Business Development",
    meta: {
      path: "/services/fractional-business-development",
      title: "Fractional Business Development for PE Firms | OutSearched",
      description:
        "OutSearched runs scaled multichannel proprietary outbound under our brand for PE firms, growing deal flow without internal BD headcount.",
    },
    eyebrow: "Services / Fractional Business Development",
    h1: "Proprietary origination, run by our team, under our brand",
    lead:
      "A shared origination team running scaled, direct-to-owner outreach against your mandate without the cost or ramp of building internally.",
    definitionTitle: "Fractional business development, defined for dealmakers",
    definition:
      "Fractional BD is an outsourced origination function that builds the target universe, runs outreach, qualifies owners, and reports pipeline under the OutSearched brand.",
    operatingModel: [
      { title: "Shared team economics", body: "Get institutional sourcing output without carrying permanent headcount." },
      { title: "Confidential brand posture", body: "Outreach can stay under OutSearched until buyer identity should be introduced." },
      { title: "Mandate-specific execution", body: "Every campaign is built around your buy-box, target logic, and qualification criteria." },
    ],
    fitTitle: "Built for buyers who need proprietary flow without institutional headcount",
    fit: ["Independent sponsors", "PE firms testing a thesis", "Family offices that prefer discretion", "Corporate teams with temporary capacity gaps"],
    comparison: [
      {
        title: "Versus databases",
        body: "We run the entire sourcing motion — list building, enrichment, outreach, follow-up, and qualification — not just the list.",
      },
      {
        title: "Versus internal BD",
        body: "Faster launch and lower fixed cost. Choose Fractional BD when you want proprietary output without a dedicated seat under your brand.",
      },
      {
        title: "Versus banker flow",
        body: "Direct-to-owner outreach reaches targets before a broad sell-side process exists, so conversations start earlier and with less competition.",
      },
    ],
    problem: {
      eyebrow: "The Problem",
      title: "Proprietary deal flow requires daily execution, not a database subscription",
      body: "Most buyers know they need off-market origination. The hard part is that a real sourcing motion requires consistent execution, managed messaging, and qualified follow-up — not just a list.",
      points: [
        {
          title: "Lists do not create conversations",
          body: "A database gives you names. Getting an owner to respond requires a message, a cadence, follow-up, and a reason for the owner to engage.",
        },
        {
          title: "Internal capacity is limited",
          body: "Investment teams are already managing diligence, portfolio, LP relationships, and deal execution. Outbound sourcing competes with all of it.",
        },
        {
          title: "Headcount adds fixed cost and ramp",
          body: "Hiring an internal BD rep takes months to recruit, train, and tool. Fractional BD is live immediately and scales with the mandate.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "Scaled origination, run by our team, on your mandate",
      intro: "OutSearched builds the universe, runs multichannel outreach, qualifies every responsive owner, and reports pipeline on a weekly cadence — all under our brand.",
      steps: [
        {
          title: "Mandate definition",
          body: "We define the buy-box with you: industry, size, geography, ownership structure, and what a qualified conversation looks like.",
        },
        {
          title: "Target universe build",
          body: "We identify and enrich the companies and owners that fit the mandate — not a generic database export.",
        },
        {
          title: "Multichannel outreach",
          body: "Our team runs direct-to-owner campaigns under the OutSearched brand at a pace no single internal rep can sustain.",
        },
        {
          title: "Owner qualification",
          body: "Every responsive owner is screened for mandate fit before a conversation reaches your principals.",
        },
        {
          title: "Weekly reporting",
          body: "You receive pipeline activity, outreach volume, owner response data, and qualified opportunities on a structured weekly cadence.",
        },
        {
          title: "Warm handoff",
          body: "Qualified conversations are handed to your team with context on the owner, the company, and the conversation so far.",
        },
      ],
    },
    testimonial: {
      title: "Quick to First Deal",
      quote: "They were professional, fast, and I had a deal nearing LOI already with less than 60 days of outbound.",
      name: "CJ Jacobs",
      role: "Independent Sponsor",
    },
    faq: [
      {
        question: "What is fractional business development?",
        answer:
          "Fractional Business Development is OutSearched's shared origination team running proprietary direct-to-owner outreach for a buyer under our brand. It is designed for buyers who want institutional-grade proprietary sourcing without hiring, training, and managing an internal BD team.",
      },
      {
        question: "How quickly can outreach start?",
        answer:
          "The target universe and messaging usually begin taking shape immediately after mandate definition. There is no recruiting ramp or tooling buildout — the engine is already running.",
      },
      {
        question: "Does OutSearched speak directly with owners?",
        answer:
          "Yes. We qualify owner interest and fit before bringing an opportunity to you. Your team gets conversations that have already been screened against the mandate.",
      },
      {
        question: "How is fractional different from internal BD?",
        answer:
          "Fractional BD is run by our shared team under our brand. Internal BD is a dedicated rep operating under your brand. Fractional BD is better when you want proprietary origination output without a named seat representing your firm.",
      },
      {
        question: "Do you charge a retainer?",
        answer:
          "Yes. Fractional BD is retainer-based because it requires full-time staff, data, tooling, outreach infrastructure, and weekly management. The retainer is structured to be significantly lower than carrying an equivalent internal function.",
      },
    ],
  },
  {
    slug: "buy-side-ma-advisory",
    path: "/services/buy-side-ma-advisory",
    navLabel: "Buy-Side M&A Advisory",
    meta: {
      path: "/services/buy-side-ma-advisory",
      title: "Buy-Side M&A Advisory for Lower Middle Market | OutSearched",
      description:
        "OutSearched provides buy-side M&A advisory for LMM buyers from mandate definition through LOI negotiation, including sourcing strategy and deal structuring.",
    },
    eyebrow: "Services / Buy-Side M&A Advisory",
    h1: "In-the-market advisory, at every stage of the deal",
    lead:
      "For buyers who have a team and process but want sharper mandate definition, sourcing architecture, negotiation support, or systems guidance.",
    definitionTitle: "Buy-side advisory, defined for dealmakers",
    definition:
      "Advisory fits the buyer who runs origination internally but wants the judgment of a firm that sees deal sourcing campaigns across the lower middle market every day.",
    operatingModel: [
      { title: "Mandate definition", body: "Sharpen the buy-box, target logic, and qualification standard." },
      { title: "Sourcing architecture", body: "Improve how lists, messaging, channels, reporting, and owner qualification work together." },
      { title: "Negotiation support", body: "Support the path from first conversation through LOI and diligence." },
    ],
    fitTitle: "Built for buyers who run their own origination and want sharper architecture",
    fit: ["Existing BD teams", "Investment teams entering new sectors", "Buyers with a live opportunity needing tactical support"],
    comparison: [
      {
        title: "Advisory vs. done-for-you sourcing",
        body: "Advisory is the right fit when you run origination internally but want sharper architecture. Choose Internal or Fractional BD when you want OutSearched to run the daily outbound engine.",
      },
      {
        title: "Advisory vs. consulting generalists",
        body: "OutSearched advises on buy-side deal sourcing specifically — mandate design, outreach architecture, qualification, and the path to LOI — not broad strategy or operations.",
      },
      {
        title: "Project or ongoing",
        body: "Advisory can be scoped as a defined project (mandate definition, systems review, negotiation support) or as an ongoing relationship alongside a live sourcing program.",
      },
    ],
    problem: {
      eyebrow: "The Problem",
      title: "Most buyers have capacity. The gap is in the architecture",
      body: "Teams that already have internal BD or investment staff often struggle not with effort but with how the sourcing motion is designed — the mandate, the messaging, the qualification standard, and the handoff.",
      points: [
        {
          title: "The mandate is too broad",
          body: "A vague buy-box produces a vague target list and weak outreach. Owners can tell when a buyer has not done the work to define what they actually want.",
        },
        {
          title: "The sourcing engine is not built to scale",
          body: "Outreach that depends on one person's relationships or a single channel is fragile. The right architecture runs across data, channels, cadence, and qualification in parallel.",
        },
        {
          title: "The path from conversation to LOI is unclear",
          body: "Qualified conversations stall when the buyer does not have a clear process for advancing from initial owner interest through diligence and structure.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "In-the-market judgment at every stage of the deal",
      intro: "Advisory engagements start where the buyer is stuck — mandate definition, sourcing architecture, live negotiation — and move forward from there.",
      steps: [
        {
          title: "Diagnostic",
          body: "We review the current mandate, sourcing motion, outreach approach, CRM, and deal history to understand where the constraint actually is.",
        },
        {
          title: "Mandate sharpening",
          body: "We tighten the buy-box across industry, size, geography, ownership, and what a qualified opportunity means for this specific buyer.",
        },
        {
          title: "Sourcing architecture",
          body: "We design or improve how the target universe, messaging, channels, cadence, and qualification logic work together.",
        },
        {
          title: "Outreach and qualification review",
          body: "We review active campaigns, messaging, owner responses, and qualification decisions with the team on a structured cadence.",
        },
        {
          title: "Negotiation support",
          body: "We advise through owner conversations, deal structuring, LOI drafting, and the process decisions that shape how a buyer is perceived.",
        },
        {
          title: "Systems and handoff",
          body: "Where needed, we design the data, CRM, and workflow infrastructure that makes the sourcing motion repeatable without us.",
        },
      ],
    },
    testimonial: {
      title: "No Stone Unturned",
      quote: "Within three weeks, we were in active conversations with attractive acquisition targets. The speed, quality, and professionalism of the process stood out.",
      name: "John M.",
      role: "Individual Buyer",
    },
    faq: [
      {
        question: "What is buy-side M&A advisory?",
        answer:
          "Buy-side advisory is strategic guidance for an acquirer rather than representation of a seller. At OutSearched it covers thesis development, target identification, direct-to-owner outreach strategy, qualification, negotiation support, and deal execution guidance.",
      },
      {
        question: "Can advisory be project-based?",
        answer:
          "Yes. Advisory can be scoped as a defined project — mandate definition, sourcing system review, negotiation support on a live deal — or structured as an ongoing relationship alongside a live sourcing program.",
      },
      {
        question: "Can advisory turn into done-for-you sourcing?",
        answer:
          "Yes. Advisory often clarifies whether Internal BD or Fractional BD would help. We can transition into running the outbound engine directly once the mandate and architecture are in place.",
      },
      {
        question: "Do you help with negotiation and LOI?",
        answer:
          "Yes. OutSearched can advise through negotiation, structuring, and the path to a letter of intent — including deal terms, seller conversations, structure, and the process decisions that determine how the buyer is perceived.",
      },
      {
        question: "Do you work with buyers who already have internal BD?",
        answer:
          "Yes. Advisory is specifically designed for teams that run origination internally but want sharper mandate definition, outreach architecture, qualification standards, or deal execution support.",
      },
    ],
  },
  {
    slug: "ai-implementation",
    path: "/services/ai-implementation",
    navLabel: "AI Implementation",
    meta: {
      path: "/services/ai-implementation",
      title: "AI Implementation for Deal Sourcing | OutSearched",
      description:
        "OutSearched builds custom AI tools and automation for LMM buyers to enhance deal sourcing, outreach efficiency, and pipeline management.",
    },
    eyebrow: "Services / AI Implementation",
    h1: "AI implementation for buy-side deal sourcing",
    lead:
      "Custom systems that pull relevant sourcing data into one place, automate manual work, and give investment teams better context for decisions.",
    definitionTitle: "AI implementation for buy-side M&A, defined",
    definition:
      "AI implementation turns scattered sourcing data, CRM notes, outreach history, target attributes, and decision workflows into infrastructure your team can actually use.",
    operatingModel: [
      { title: "Data foundation", body: "Clean, connect, and structure source data so it can support real workflows." },
      { title: "Workflow automation", body: "Reduce manual research, list cleanup, qualification notes, and reporting." },
      { title: "Decision context", body: "Surface the target, mandate, and history context your team needs before outreach or review." },
    ],
    fitTitle: "Built for buyers whose sourcing is bottlenecked by data and manual work",
    fit: ["Teams with messy CRM data", "Buyers with repeated research workflows", "Investment teams that need clearer target context"],
    comparison: [
      {
        title: "Versus generic AI tools",
        body: "Off-the-shelf AI tools are built for general use. A custom implementation maps to your specific data, target criteria, CRM structure, and acquisition workflows.",
      },
      {
        title: "Versus more headcount",
        body: "Automation removes the research, list cleanup, and data-wrangling work that consumes sourcing capacity — so people focus on owner conversations and judgment calls.",
      },
      {
        title: "Versus doing nothing",
        body: "Scattered data, duplicated research, and disconnected tools are a tax on every decision your team makes. The longer it compounds, the harder it is to fix.",
      },
    ],
    problem: {
      eyebrow: "The Problem",
      title: "Most sourcing teams are bottlenecked by data, not effort",
      body: "The research is duplicated. The CRM is a mess. The target lists live in three different spreadsheets. The team is working hard — but the infrastructure is not working for them.",
      points: [
        {
          title: "Data is everywhere and nowhere",
          body: "Outreach history, target attributes, CRM notes, diligence materials, and market maps live in different tools with no single source of truth.",
        },
        {
          title: "Manual work dominates",
          body: "List cleaning, company research, owner enrichment, and pipeline reporting consume time that should go to owner conversations and deal judgment.",
        },
        {
          title: "Generic tools do not fit buy-side workflows",
          body: "AI tools built for general business use do not understand acquisition criteria, owner qualification logic, or the deal sourcing process.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "Custom systems built around how your team actually sources",
      intro: "AI Implementation starts with understanding the real workflow — then builds the data foundation, automation, and decision context that makes it faster and more repeatable.",
      steps: [
        {
          title: "Workflow audit",
          body: "We map how your team currently sources, researches, qualifies, and advances deals — finding where time is lost and where data is scattered.",
        },
        {
          title: "Data foundation",
          body: "We clean, connect, and structure the source data — CRM records, target lists, outreach history, diligence notes — so it can support real workflows.",
        },
        {
          title: "Automation design",
          body: "We design the automation layer: what gets pulled automatically, what gets flagged, and what gets routed to a person versus handled by a system.",
        },
        {
          title: "Build and integration",
          body: "We build the system against your existing tools and data sources — no rip-and-replace, no forced platform migration.",
        },
        {
          title: "Decision context",
          body: "We surface the mandate fit, owner history, outreach context, and market data your team needs before making a call or sending a message.",
        },
        {
          title: "Handoff and training",
          body: "We hand the system to your team with documentation and training, and remain available as workflows evolve.",
        },
      ],
    },
    testimonial: {
      title: "An Essential Resource for Our Firm",
      quote: "The pipeline they helped us develop has directly translated into meaningful conversations with quality targets.",
      name: "Danny Ilani",
      role: "Independent Sponsor",
    },
    faq: [
      {
        question: "What is AI implementation for deal sourcing?",
        answer:
          "AI implementation turns scattered sourcing data, CRM notes, outreach history, target attributes, and decision workflows into infrastructure your team can actually use. It is not a software subscription — it is custom implementation work scoped around your real process and data.",
      },
      {
        question: "Is this a software subscription?",
        answer:
          "No. AI Implementation is scoped implementation work — we build systems around your data, workflows, and acquisition criteria. You own what we build.",
      },
      {
        question: "Can this integrate with an existing CRM?",
        answer:
          "Yes. We design around the systems you already use, subject to the tools and data access available during scoping. We do not force a platform migration.",
      },
      {
        question: "How can AI help private equity deal sourcing?",
        answer:
          "AI can help by organizing data, surfacing patterns, improving workflows, speeding research, and giving teams better context before decisions. The value comes from connecting real sourcing data, CRM history, mandate criteria, market maps, notes, and qualification workflows.",
      },
      {
        question: "Do you help clean up messy CRM and sourcing data?",
        answer:
          "Yes. Data cleanup and restructuring is often the first step. AI Implementation can turn scattered information into a cleaner source of truth that supports real acquisition workflows.",
      },
    ],
  },
];

export const faqSections: FAQSection[] = [
  {
    title: "Core Questions",
    intro: "Foundational answers about OutSearched, who we serve, and how our work differs from traditional brokered M&A.",
    items: [
      {
        question: "What does OutSearched do?",
        answer:
          "OutSearched helps buyers source proprietary acquisition opportunities through direct-to-owner outreach, rigorous qualification, advisory, and buy-side sourcing infrastructure. Depending on the engagement, we can run outreach, place a dedicated BD function under your brand, advise your team, or build systems that make sourcing more repeatable.",
      },
      {
        question: "Who does OutSearched work with?",
        answer:
          "OutSearched works with serious, capitalized lower middle market buyers, including private equity firms, independent sponsors, corporate development teams, current business owners, search funds, family offices, and select well-capitalized individual buyers.",
      },
      {
        question: "How is OutSearched different from a broker or investment bank?",
        answer:
          "OutSearched works for the buyer, while brokers and investment banks usually represent the seller. A sell-side advisor brings a company to market and creates competition among buyers. OutSearched helps buyers reach owners directly and create proprietary conversations before a formal process exists.",
      },
      {
        question: "Do you only work with buyers?",
        answer:
          "Yes. OutSearched is focused on the buy-side. We help acquirers define what they want to buy, identify the right owners, run direct outreach, qualify fit, and build a proprietary acquisition pipeline.",
      },
      {
        question: "What market does OutSearched focus on?",
        answer:
          "OutSearched focuses on lower middle market acquisition sourcing. The lower middle market is fragmented and relationship-driven, which makes mandate definition, direct-to-owner messaging, and disciplined follow-up critical.",
      },
    ],
  },
  {
    title: "Services",
    intro: "How our service models work.",
    items: [
      {
        question: "What services does OutSearched offer?",
        answer:
          "OutSearched offers Internal Business Development, Fractional Business Development, Buy-Side M&A Advisory, and AI Implementation. Internal BD is a dedicated sourcing seat under your brand. Fractional BD is our shared origination team running proprietary outreach under our brand. Advisory sharpens strategy and process. AI Implementation builds the data and workflow systems behind stronger sourcing.",
      },
      {
        question: "What is Internal Business Development?",
        answer:
          "Internal Business Development is a fully dedicated BD function that operates under the buyer's brand. A dedicated rep is committed to your firm alone and covers proprietary direct-to-owner outreach plus broker or banker conversations tied to your mandates.",
      },
      {
        question: "What is Fractional Business Development?",
        answer:
          "Fractional Business Development is OutSearched's shared origination team running proprietary direct-to-owner outreach for a buyer under our brand. It is designed for buyers who want institutional-grade proprietary sourcing without hiring, training, and managing an internal BD team.",
      },
      {
        question: "What is Buy-Side M&A Advisory?",
        answer:
          "Buy-Side M&A Advisory is strategic guidance for buyers who want sharper mandate definition, sourcing strategy, outreach architecture, negotiation support, or system design. It helps buyers improve their own engine when they already have some internal capability.",
      },
      {
        question: "What is AI Implementation?",
        answer:
          "AI Implementation is a custom system build that connects a buyer's sourcing data, workflows, and decision process into cleaner AI-enabled infrastructure. It is not buying a generic AI tool; it is designing systems around your real process and data.",
      },
      {
        question: "What is the difference between Internal BD and Fractional BD?",
        answer:
          "Internal BD is dedicated and runs under your brand, while Fractional BD is run by our shared team under our brand. Internal BD is better when you want a named BD seat representing your firm. Fractional BD is better when you want proprietary origination without adding dedicated headcount.",
      },
      {
        question: "Do you work under our brand or your brand?",
        answer:
          "We can work either under your brand or under our brand depending on the service model. Internal Business Development runs under the client's brand. Fractional Business Development runs under OutSearched's brand. The right model depends on control, coverage, confidentiality, and visibility.",
      },
    ],
  },
  {
    title: "Buy-Side M&A Advisory",
    intro: "Buy-side advisory, consulting, and systems questions for buyers who want sharper sourcing architecture.",
    items: [
      {
        question: "What types of advisory do you do?",
        answer:
          "OutSearched advises buyers on mandate definition, market mapping, sourcing strategy, outreach architecture, negotiation, structuring, systems, and the path to LOI. We help define what to buy, where to search, how to reach owners, how to qualify targets, and how to move from conversation to actionable opportunity.",
      },
      {
        question: "What is buy-side advisory?",
        answer:
          "Buy-side advisory is strategic guidance for an acquirer rather than representation of a seller. In lower middle market M&A, it often includes thesis development, target identification, direct-to-owner outreach strategy, qualification, negotiation support, and deal execution guidance.",
      },
      {
        question: "Do you consult?",
        answer:
          "Yes. OutSearched provides consulting through Buy-Side M&A Advisory. We consult on acquisition thesis, mandate design, market mapping, sourcing strategy, direct-to-owner outreach, CRM and data workflows, negotiation, and the operating structure behind a repeatable origination program.",
      },
      {
        question: "Do you help build systems?",
        answer:
          "Yes. OutSearched helps buyers build sourcing systems, outreach architecture, data workflows, CRM structure, and AI-enabled deal sourcing infrastructure. For deeper systems work, AI Implementation creates a cleaner source of truth and workflows on top of it.",
      },
      {
        question: "Do you help with negotiation and LOI?",
        answer:
          "Yes. OutSearched can advise buyers through negotiation, structuring, and the path to LOI. Our role depends on the engagement and may include deal terms, seller conversations, structure, and the process needed to move a qualified opportunity toward a letter of intent.",
      },
    ],
  },
  {
    title: "Deal Sourcing & Proprietary Deal Flow",
    intro: "Definitions and explanations for buyers trying to understand proprietary origination.",
    items: [
      {
        question: "What is proprietary deal flow?",
        answer:
          "Proprietary deal flow is acquisition opportunity flow sourced directly by or for a buyer before a broad auction process exists. Its value is timing, access, reduced competition, and the chance to build trust before an owner is widely marketed.",
      },
      {
        question: "What is buy-side deal sourcing?",
        answer:
          "Buy-side deal sourcing is the process of identifying, contacting, qualifying, and advancing acquisition targets for a buyer. A real sourcing process starts with a clear mandate, then moves into target universe construction, market mapping, data enrichment, owner outreach, follow-up, qualification, and handoff.",
      },
      {
        question: "What is M&A deal origination?",
        answer:
          "M&A deal origination is the work of creating acquisition opportunities through relationships, market mapping, outreach, and targeted sourcing. It is different from passively reviewing brokered opportunities because it proactively creates a reason for owners to engage.",
      },
      {
        question: "What is direct-to-owner outreach?",
        answer:
          "Direct-to-owner outreach is contacting business owners directly about a potential acquisition conversation before a brokered or banker-led process exists. The outreach has to be specific, respectful, persistent, and credible.",
      },
      {
        question: "How do private equity firms get proprietary deal flow?",
        answer:
          "Private equity firms get proprietary deal flow by defining a thesis, mapping the market, building target lists, contacting owners directly, developing referral channels, and following up over time. The strongest firms build repeatable sourcing infrastructure around platform theses, add-ons, relationships, and structured outreach.",
      },
      {
        question: "How do buyers find off-market companies?",
        answer:
          "Buyers find off-market companies by mapping a market, identifying companies that fit a mandate, reaching owners directly, and building relationships before a sale process begins. Off-market sourcing requires more than a database search; it needs a reason to contact the owner and a qualification process.",
      },
      {
        question: "Is proprietary deal flow the same as off-market deal flow?",
        answer:
          "They overlap, but they are not always the same. Off-market usually means the company is not in a broad brokered sale process. Proprietary means the buyer has a sourcing or access advantage, such as timing, relationship, exclusivity, or highly targeted outreach.",
      },
      {
        question: "Why are auction deals harder for buyers?",
        answer:
          "Auction deals are harder because competition compresses the buyer's advantage and often pushes price, speed, and certainty to the center of the process. Proprietary sourcing gives buyers a chance to engage earlier and show why they are the right home for the business before price is the only differentiator.",
      },
    ],
  },
  {
    title: "Buyer Fit",
    intro: "Who we serve and how the work changes by buyer.",
    items: [
      {
        question: "Do you work with private equity firms?",
        answer:
          "Yes. OutSearched works with lower middle market private equity firms on platform and add-on acquisition sourcing. PE firms often need to run multiple theses at once while maintaining coverage across platform and add-on mandates.",
      },
      {
        question: "Do you work with independent sponsors?",
        answer:
          "Yes. OutSearched works with independent sponsors who need proprietary, LP-presentable acquisition opportunities. Proprietary sourcing can help create earlier owner access and stronger LP narratives because the deal did not arrive through the same channels every other buyer sees.",
      },
      {
        question: "Do you work with corporate development teams?",
        answer:
          "Yes. OutSearched works with corporate development teams that need strategic acquisition targets, not generic financial buyer flow. We help build named-account target lists and create owner conversations outside banker-driven timelines.",
      },
      {
        question: "Do you work with family offices?",
        answer:
          "Yes. OutSearched works with family offices that need discreet, mandate-specific direct acquisition sourcing. Family offices often care about discretion, patience, legacy, values alignment, and flexible ownership more than a traditional auction process allows.",
      },
      {
        question: "Do you work with search funds?",
        answer:
          "Yes. OutSearched works with well-qualified search funders who need qualified deal flow before search capital runs out. We help serious searchers get beyond brokered listings and into direct owner conversations that match the thesis.",
      },
      {
        question: "Do you work with individual buyers?",
        answer:
          "Yes. OutSearched works with select, well-capitalized individual buyers who are serious about acquiring, owning, and operating a business. The fit is a serious buyer with the capital, conviction, and readiness to evaluate qualified opportunities.",
      },
      {
        question: "Do you work with current business owners?",
        answer:
          "Yes. OutSearched works with current business owners who want to grow by acquisition. We help create qualified conversations without pulling the owner away from the company they already operate.",
      },
    ],
  },
  {
    title: "Process, Confidentiality & Results",
    intro: "Practical answers on qualification, confidentiality, timelines, retainers, and what a buyer should expect.",
    items: [
      {
        question: "How do you qualify acquisition targets?",
        answer:
          "We qualify acquisition targets against the buyer's mandate, including industry, size, geography, ownership profile, strategic fit, owner receptivity, and transaction relevance. The purpose is to protect the buyer's time and deliver conversations worth a principal's attention.",
      },
      {
        question: "How long does it take to see qualified conversations?",
        answer:
          "The timing depends on the mandate, market size, owner responsiveness, and service model. A narrow mandate may take longer than a broader market. We design each engagement around the mandate rather than pretending every market behaves the same way.",
      },
      {
        question: "Do you charge a retainer?",
        answer:
          "Yes. OutSearched charges a retainer because our work requires full-time staff, dedicated sourcing reps, research, outreach, qualification, and ongoing campaign management. Retainers are designed to be significantly lower than hiring a full internal sourcing function.",
      },
      {
        question: "Do you charge a success fee?",
        answer:
          "Yes. OutSearched charges a low success fee so our incentives stay aligned with the buyer's outcome. We focus on long-term relationships, repeatable acquisition programs, and qualified proprietary deal flow.",
      },
      {
        question: "Do you guarantee closed deals?",
        answer:
          "No. OutSearched does not guarantee closed deals. A closed transaction depends on buyer fit, seller motivation, valuation, financing, diligence, structure, timing, and other variables outside any sourcing firm's control.",
      },
      {
        question: "How do you protect confidentiality?",
        answer:
          "We protect confidentiality through controlled messaging, mandate-specific outreach, careful qualification, and service models that match the buyer's desired level of visibility. Some buyers want a rep under their brand; others prefer outreach under ours.",
      },
      {
        question: "What do you need from us to start?",
        answer:
          "We need a clear acquisition mandate, target criteria, buyer positioning, decision process, and enough context to understand what a qualified opportunity means for you. If the mandate is not clear yet, Advisory can help define it.",
      },
      {
        question: "Is OutSearched a database or software tool?",
        answer:
          "No. OutSearched is not a database subscription or self-serve software tool. Databases can be useful inputs, but they do not create owner trust, run follow-up, qualify fit, or move a buyer toward a real conversation.",
      },
    ],
  },
  {
    title: "AI Implementation & Systems",
    intro: "Questions for buyers thinking about AI, CRM workflows, market mapping, data cleanup, and deal sourcing systems.",
    items: [
      {
        question: "How can AI help private equity deal sourcing?",
        answer:
          "AI can help private equity deal sourcing by organizing data, surfacing patterns, improving workflows, speeding research, and giving teams better context before they make decisions. The value comes from connecting real sourcing data, CRM history, mandate criteria, market maps, notes, and workflows.",
      },
      {
        question: "Do you build AI systems for deal sourcing?",
        answer:
          "Yes. OutSearched builds custom AI-enabled systems for buy-side deal sourcing. We help buyers centralize relevant data, structure information, connect workflows, and build practical systems around sourcing, screening, underwriting context, and decision support.",
      },
      {
        question: "Can AI improve market mapping?",
        answer:
          "Yes. AI can improve market mapping when it is connected to clean data, clear mandate criteria, and a disciplined sourcing process. It can help organize markets, enrich company profiles, identify patterns, cluster targets, and speed research.",
      },
      {
        question: "Can you help clean up our CRM and sourcing data?",
        answer:
          "Yes. OutSearched can help organize sourcing data, CRM structure, workflows, and the data architecture behind a repeatable origination program. AI Implementation can turn scattered information into a cleaner source of truth.",
      },
      {
        question: "What data do you need for AI Implementation?",
        answer:
          "The data needed depends on the buyer's workflow, but it often includes CRM records, target lists, deal notes, outreach history, mandate criteria, market maps, diligence materials, and internal process documentation. We start by understanding how the team sources, reviews, and advances opportunities today.",
      },
    ],
  },
];

export const buyerHubCards = buyerPages.map((page) => ({
  title: page.navLabel,
  body: page.lead,
  label: page.path,
}));

export const serviceHubCards = servicePages.map((page) => ({
  title: page.navLabel,
  body: page.lead,
  label: page.path,
}));
