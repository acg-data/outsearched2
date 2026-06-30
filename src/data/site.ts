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
  icon?: string;
}

export interface EngagementCard {
  icon: string;
  title: string;
  body: string;
  link?: string;
}

export interface EngagementBonus {
  icon: string;
  title: string;
  body: string;
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
  heroTitle: string;
  heroGoldLine: string;
  lead: string;
  heroImageUrl: string;
  trustLabel: string;
  trustLogos: string[];
  whatWeDoHeading: string;
  whatWeDoBody: string;
  featureCards: ServiceFeatureCard[];
  builtForEyebrow: string;
  builtForHeading: string;
  builtForBody: string;
  builtForChecklist: string[];
  vsLeft: ServiceComparison;
  vsRight: ServiceComparison;
  engagementEyebrow: string;
  engagementHeading: string;
  engagementCards: EngagementCard[];
  engagementBonus?: EngagementBonus;
  provenImpactHeading: string;
  provenImpactBody: string;
  stats: Stat[];
  approachEyebrow: string;
  approachItems: string[];
  approachImageUrl: string;
  approachQuote: string;
  faq: FAQItem[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaBody: string;
  ctaImageUrl: string;
}

export interface ServiceFeatureCard {
  icon: string;
  title: string;
  body: string;
}

export interface ServiceComparison {
  title: string;
  items: string[];
}

export interface ServicePageContent {
  slug: string;
  path: string;
  navLabel: string;
  meta: PageMeta;
  eyebrow: string;
  heroTitle: string;
  heroGoldLine: string;
  lead: string;
  whatWeDoHeading: string;
  whatWeDoBody: string;
  featureCards: ServiceFeatureCard[];
  builtForHeading: string;
  builtForBody: string;
  builtForChecklist: string[];
  vsLeft: ServiceComparison;
  vsRight: ServiceComparison;
  engagementEyebrow: string;
  chooseModelHeading: string;
  engagementCards: EngagementCard[];
  engagementBonus?: EngagementBonus;
  provenImpactHeading: string;
  provenImpactBody: string;
  serviceStats: Stat[];
  setupTitle: string;
  setup: string[];
  setupQuote: string;
  proofImageUrl: string;
  faq: FAQItem[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaBody: string;
  heroImageUrl: string;
  ctaImageUrl: string;
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
    eyebrow: "LMM Private Equity",
    heroTitle: "Source. Diligence. Invest. Scale. Repeat.",
    heroGoldLine: "Invest. Scale.",
    lead: "We partner with LMM private equity firms to find better deals, perform rigorous diligence, and build value where it matters most.",
    heroImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by PE Firms",
    trustLogos: ["Wintrust", "KROLL", "KROLL", "Houlihan Lokey", "Lazard"],
    whatWeDoHeading: "Full-cycle support for lower middle market investors.",
    whatWeDoBody: "From proprietary deal sourcing to deep diligence and post-acquisition value creation support—we become an extension of your investment team.",
    featureCards: [
      { icon: "Search", title: "Proprietary Deal Sourcing", body: "Access to our curated networks and research engine to surface high-quality opportunities." },
      { icon: "FileText", title: "Target Screening & Research", body: "Data-driven screening and industry research to identify the right investment targets." },
      { icon: "BarChart2", title: "Due Diligence Support", body: "Deep financial, commercial, operational and market diligence to reduce risk and increase conviction." },
      { icon: "TrendingUp", title: "Value Creation Planning", body: "100-day plans and strategies to unlock value and drive portfolio company growth." },
      { icon: "Users", title: "Exit Readiness Support", body: "Position your portfolio companies for optimal exits and premium valuations." },
    ],
    builtForEyebrow: "Built for LMM Private Equity",
    builtForHeading: "Why PE firms choose us as their deal partner.",
    builtForBody: "We combine deep market intelligence, proprietary outreach, and hands-on execution to give you a sustainable investment edge.",
    builtForChecklist: [
      "Exclusive deal flow",
      "Lower competition",
      "Better diligence, lower risk",
      "Faster execution",
      "Stronger portfolio outcomes",
    ],
    vsLeft: {
      title: "Versus Traditional Sourcing",
      items: ["Limited, over-crowded deal flow", "Reactive, not proactive", "Time-consuming processes", "Fragmented data", "Inconsistent quality"],
    },
    vsRight: {
      title: "Versus Other Providers",
      items: ["We work as your partner", "Deep LMM focus", "Proprietary intelligence", "Execution-oriented", "Aligned with your goals"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Flexible partnership. Aligned with your investment strategy.",
    engagementCards: [
      { icon: "Search", title: "Deal Sourcing Partnership", body: "Ongoing proprietary deal flow aligned to your thesis." },
      { icon: "FileText", title: "Due Diligence Support", body: "On-demand or end-to-end diligence for smarter investment decisions." },
      { icon: "TrendingUp", title: "Platform Value Creation", body: "Post-close support to improve operations and drive growth." },
      { icon: "Users", title: "Special Situations & Turnarounds", body: "Hands-on support for complex situations and value recovery." },
    ],
    engagementBonus: {
      icon: "TrendingUp",
      title: "We integrate seamlessly with your team and processes.",
      body: "Discreet. Professional. Results-driven.",
    },
    provenImpactHeading: "Delivering results that move the needle.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Deal flow influenced", detail: "Across multiple industries and geographies.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Platforms supported", detail: "From majority investments to add-on acquisitions.", icon: "Users" },
      { value: "20%+", label: "Value uplift", detail: "Average EBITDA improvement in portfolio companies.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Thesis-aligned deal sourcing",
      "Independent and objective diligence",
      "Actionable insights and recommendations",
      "Partner-level execution",
      "Long-term partnership mindset",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Strategic Investments. Measurable Impact.",
    faq: [
      { question: "What makes your deal flow different?", answer: "We combine proprietary outreach, deep market intelligence, and curated research to deliver differentiated deal flow. Our team acts as an extension of yours—aligned with your thesis and focused on opportunities you won't find through traditional channels." },
      { question: "How do you ensure deal quality?", answer: "Every opportunity goes through a structured qualification process. We evaluate strategic fit, financial profile, management quality, and transaction readiness before presenting opportunities to your team." },
      { question: "Can you support our due diligence end-to-end?", answer: "Yes. We provide comprehensive diligence support—financial, commercial, operational, and market—so you can move with conviction and reduce risk throughout the investment process." },
      { question: "How do you support value creation post-close?", answer: "We offer 100-day planning, operational improvement initiatives, and ongoing value creation support to help portfolio companies achieve their full potential after acquisition." },
      { question: "What is your typical engagement model?", answer: "We offer flexible models including deal sourcing partnerships, on-demand diligence support, platform value creation, and special situations advisory. The right structure depends on your investment strategy." },
    ],
    ctaEyebrow: "Ready to Invest Smarter?",
    ctaHeading: "Let's build stronger portfolio companies—together.",
    ctaBody: "We help LMM private equity firms find the right deals, mitigate risk, and create lasting value.",
    ctaImageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Independent Sponsors",
    heroTitle: "Your deal. Your fund. Our execution. Built for you.",
    heroGoldLine: "Our execution.",
    lead: "We partner with independent sponsors to source, diligence, and close exceptional businesses—faster and with greater certainty.",
    heroImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by Sponsors",
    trustLogos: ["Wintrust", "KROLL", "KROLL", "Houlihan Lokey", "Lazard"],
    whatWeDoHeading: "End-to-end support for independent sponsors.",
    whatWeDoBody: "We act as your extended team—helping you find, evaluate, and close the right platform so you can create long-term value and build a track record investors trust.",
    featureCards: [
      { icon: "Search", title: "Deal Sourcing", body: "Proprietary outreach and off-market channels to find the right opportunities." },
      { icon: "FileText", title: "Screening & Assessment", body: "We quickly identify, evaluate, and prioritize high-potential opportunities." },
      { icon: "BarChart2", title: "Due Diligence", body: "Operational, financial, commercial, and market diligence to de-risk your investment." },
      { icon: "Handshake", title: "Deal Support", body: "Negotiation support, term sheet review, and process management." },
      { icon: "TrendingUp", title: "Post-Close Support", body: "100-day planning, value creation, and execution guidance." },
    ],
    builtForEyebrow: "Built for Independent Sponsors",
    builtForHeading: "Why sponsors partner with us.",
    builtForBody: "We understand the unique challenges you face and help you move faster, smarter, and with more confidence.",
    builtForChecklist: [
      "No internal team? We've got you.",
      "Flexible support, when you need it.",
      "Deep experience across industries.",
      "Aligned with your goals.",
      "Built to win.",
    ],
    vsLeft: {
      title: "Versus Doing It Alone",
      items: ["Time-consuming sourcing", "Limited deal access", "Fewer data points", "Higher execution risk", "Steep learning curve"],
    },
    vsRight: {
      title: "Versus Traditional Firms",
      items: ["More partner-level attention", "Cost-effective model", "Founder-friendly approach", "Greater flexibility", "Long-term partnership"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Tailored support. Every step of the way.",
    engagementCards: [
      { icon: "Search", title: "Deal Sourcing Partnership", body: "Ongoing sourcing support to build your deal pipeline." },
      { icon: "FileText", title: "Deal Evaluation Support", body: "Research and diligence support to help you make confident decisions." },
      { icon: "Handshake", title: "Deal Execution Support", body: "End-to-end support through negotiation and closing." },
      { icon: "TrendingUp", title: "Value Creation Partnership", body: "Hands-on support post-close to drive results." },
    ],
    engagementBonus: {
      icon: "UserRound",
      title: "Your success is our priority.",
      body: "Discreet. Independent. Results-driven.",
    },
    provenImpactHeading: "Results that help you build your track record.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Capital deployed", detail: "Across multiple sponsors and industries.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Sponsors supported", detail: "Helping first-time and experienced sponsors win better deals.", icon: "Users" },
      { value: "20%+", label: "Value creation", detail: "Average EBITDA improvement across portfolio companies.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Sponsor-first mindset",
      "Independent and objective",
      "Deep research and insights",
      "Actionable recommendations",
      "Execution-focused partnership",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Founder-Focused. Outcome-Driven.",
    faq: [
      { question: "How is your model different from an investment bank?", answer: "Investment banks typically represent sellers. We work exclusively for the buyer—sourcing proprietary deals, running diligence, and supporting execution. Our incentives are aligned with your success." },
      { question: "What types of businesses do you help us acquire?", answer: "We focus on lower middle-market businesses across a range of industries. The right target depends on your thesis, capital structure, and operational experience." },
      { question: "Do you take equity or success fees?", answer: "Our engagement models are designed to be transparent and aligned with your economics. We discuss fee structures during our initial strategy call." },
      { question: "How involved can you be in execution?", answer: "As involved as you need—from sourcing and screening all the way through diligence, negotiation, and post-close value creation planning." },
      { question: "Can you help after we close the deal?", answer: "Yes. We offer post-close support including 100-day planning, operational improvement initiatives, and ongoing value creation guidance." },
    ],
    ctaEyebrow: "Ready to Build Your Fund?",
    ctaHeading: "Find the right business. Build lasting value.",
    ctaBody: "We help independent sponsors source and close the right platform—so you can build your fund and your legacy.",
    ctaImageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Search Funds",
    heroTitle: "Find the right business. Close with confidence.",
    heroGoldLine: "Close with confidence.",
    lead: "We partner with search fund entrepreneurs to source, evaluate, and close the right acquisition—faster and with less risk.",
    heroImageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by Searchers",
    trustLogos: ["Stanford", "INSEAD", "Harvard Business School", "Rice", "Northwestern Kellogg"],
    whatWeDoHeading: "End-to-end support for search fund entrepreneurs.",
    whatWeDoBody: "We act as your extended team—helping you source off-market opportunities, evaluate targets, connect with the right people, and get to close with conviction.",
    featureCards: [
      { icon: "Search", title: "Deal Sourcing", body: "Proprietary outreach and network to find off-market, founder-considering businesses." },
      { icon: "FileText", title: "Screening & Qualification", body: "We qualify, evaluate, and prioritize the best-fit opportunities for your criteria." },
      { icon: "BarChart2", title: "Due Diligence Support", body: "Financial, operational, and market due diligence to reduce risk and build conviction." },
      { icon: "Handshake", title: "Owner Engagement", body: "Warm introductions, relationship building, and negotiation support." },
      { icon: "ClipboardCheck", title: "Closing Support", body: "Structuring guidance, LOI to close support, and transition planning." },
    ],
    builtForEyebrow: "Built for Searchers",
    builtForHeading: "Why searchers choose us.",
    builtForBody: "We understand the search journey because we've supported dozens of searchers from the first call to closing day.",
    builtForChecklist: [
      "Searcher-first mindset",
      "Deep network & proprietary deal flow",
      "Practical advice from experience",
      "Flexible, on-demand support",
      "Aligned with your goals",
    ],
    vsLeft: {
      title: "Versus Doing It Alone",
      items: ["Limited network reach", "Harder to get meetings", "Time-consuming process", "Higher uncertainty", "Slower to close"],
    },
    vsRight: {
      title: "Versus Traditional Brokers",
      items: ["Not seller-focused", "Limited off-market access", "Less flexible engagement", "One-size-fits-all approach", "Higher fees"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Support that adapts to your search.",
    engagementCards: [
      { icon: "Search", title: "Search Partner", body: "End-to-end support through the full search process." },
      { icon: "Clock", title: "Sourcing Subscription", body: "Ongoing deal flow and outreach every month." },
      { icon: "FileText", title: "Diligence Support", body: "Deep-dive support on targets you're evaluating." },
      { icon: "Handshake", title: "Close Support Package", body: "Negotiation, closing, and transition support." },
    ],
    engagementBonus: {
      icon: "UserRound",
      title: "Your search. Our support. Better outcomes.",
      body: "More opportunities. Less risk. Stronger businesses.",
    },
    provenImpactHeading: "Real results for search fund entrepreneurs.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Enterprise value supported", detail: "Across multiple searchers and funds.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Searchers supported", detail: "Across leading schools and search communities.", icon: "Users" },
      { value: "20%+", label: "Faster time to close", detail: "Reduced average time from search to LOI.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Searcher-first, always",
      "Independent and objective",
      "Data-driven evaluation",
      "Actionable insights",
      "Long-term partnership mindset",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    approachQuote: "The Right Business Today. Lasting Value Tomorrow.",
    faq: [
      { question: "Do you take equity in the search fund?", answer: "Our standard model does not require equity participation. We offer fee-based engagements designed to align with search fund economics." },
      { question: "How do you source off-market opportunities?", answer: "We combine proprietary outreach, deep industry networks, and data-driven targeting to identify business owners who may be considering a transition but haven't engaged a broker." },
      { question: "What stages of the search do you support?", answer: "We support searchers across the full lifecycle—from thesis refinement and target identification through owner engagement, diligence, and closing support." },
      { question: "How do you get paid?", answer: "We offer flexible engagement models including retainer-based partnerships and project-based support. We discuss the right structure during our initial call." },
      { question: "Can you help with SBA financing or lenders?", answer: "While we don't provide financing directly, we have relationships with SBA lenders and can help connect you with the right capital partners for your acquisition." },
    ],
    ctaEyebrow: "Ready to Start Your Search?",
    ctaHeading: "Find the right business. Build your future.",
    ctaBody: "We help search fund entrepreneurs find and close exceptional businesses—so you can build something that lasts.",
    ctaImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Family Offices",
    heroTitle: "Preserve wealth. Create impact. Build legacies.",
    heroGoldLine: "Create impact.",
    lead: "We support family offices with sourcing, diligence, and execution—so you can invest with clarity and conviction.",
    heroImageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by Family Offices",
    trustLogos: ["Campden Wealth", "Aurora Family Office", "Longview Capital", "Northridge Family Office"],
    whatWeDoHeading: "Private investments, managed with precision.",
    whatWeDoBody: "We act as your extended investment team—sourcing opportunities, running rigorous diligence, and supporting execution across private markets.",
    featureCards: [
      { icon: "Search", title: "Deal Sourcing", body: "Access proprietary deal flow across private markets and geographies." },
      { icon: "FileText", title: "Due Diligence", body: "Financial, operational, legal and commercial due diligence you can rely on." },
      { icon: "BarChart2", title: "Investment Analysis", body: "Data-driven analysis to identify strong risk-adjusted opportunities." },
      { icon: "Handshake", title: "Execution Support", body: "Negotiation, structuring and deal execution with your best interests in mind." },
      { icon: "TrendingUp", title: "Portfolio Support", body: "Help with value creation, reporting and ongoing portfolio monitoring." },
    ],
    builtForEyebrow: "Built for Family Offices",
    builtForHeading: "Why leading family offices partner with us.",
    builtForBody: "We bring an operator's mindset and an investor's discipline.",
    builtForChecklist: [
      "Aligned with your long-term vision",
      "Unbiased and independent",
      "Institutional process",
      "Confidential and discreet",
      "Built for multi-generational impact",
    ],
    vsLeft: {
      title: "Versus Doing It Alone",
      items: ["Limited reach and bandwidth", "Higher risk of oversight", "Slower deal process", "Inconsistent pipeline", "Resource intensive"],
    },
    vsRight: {
      title: "Versus Traditional Advisors",
      items: ["More personalized attention", "Unbiased, not product-driven", "Flexible engagement", "Deeper execution support", "True partnership mindset"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Engagements that fit your strategy. On your terms.",
    engagementCards: [
      { icon: "Search", title: "Deal Sourcing Subscription", body: "Continuous pipeline of curated investment opportunities." },
      { icon: "FileText", title: "Project-Based Advisory", body: "Support for specific mandates, themes or transactions." },
      { icon: "BarChart2", title: "Diligence Support", body: "Deep-dive diligence on opportunities you are evaluating." },
      { icon: "TrendingUp", title: "Ongoing Portfolio Support", body: "Help monitor performance and drive long-term value." },
    ],
    engagementBonus: {
      icon: "UserRound",
      title: "Your legacy. Our focus.",
      body: "We help you make better investments—and build a lasting legacy.",
    },
    provenImpactHeading: "Consistent results. Aligned with your goals.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Capital deployed", detail: "Across multiple family offices and strategies.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Family offices served", detail: "Across diverse strategies and investment theses.", icon: "Users" },
      { value: "20%+", label: "Value creation", detail: "Average EBITDA improvement across portfolio companies.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Understand your goals and investment thesis",
      "Source differentiated opportunities",
      "Run rigorous, independent diligence",
      "Deliver clear recommendations",
      "Support execution and portfolio value creation",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Thoughtful Investments. Lasting Legacies.",
    faq: [
      { question: "How do you ensure confidentiality?", answer: "Discretion is fundamental to how we operate. We use confidential outreach methods, NDAs where appropriate, and never disclose your identity without explicit permission." },
      { question: "What types of investments do you help with?", answer: "We support direct investments in private companies across the lower middle market—from platform acquisitions to add-on opportunities and co-investment partnerships." },
      { question: "Can you work alongside our existing advisors?", answer: "Yes. We complement your existing advisory relationships by providing dedicated sourcing, diligence, and execution support without conflicting with other mandates." },
      { question: "How do you source proprietary opportunities?", answer: "We combine proprietary outreach, deep industry networks, and data-driven targeting to identify business owners who may be considering a transition—often before any formal process exists." },
      { question: "What is your typical engagement model?", answer: "We offer flexible models including retainer-based sourcing subscriptions, project-based advisory, and ongoing portfolio support. The right structure depends on your goals and investment cadence." },
    ],
    ctaEyebrow: "Ready to Invest for Generations?",
    ctaHeading: "Better investments. Stronger legacy.",
    ctaBody: "We help family offices find exceptional opportunities, reduce risk, and build lasting value for generations to come.",
    ctaImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Corporate Development",
    heroTitle: "Strategic growth. Smarter partnerships. Stronger outcomes.",
    heroGoldLine: "Smarter partnerships.",
    lead: "We partner with corporate development teams to build pipelines, identify the right opportunities, and drive strategic growth—faster.",
    heroImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by Corporate Development Teams",
    trustLogos: ["Microsoft", "Google", "AWS", "IBM", "Salesforce", "Siemens"],
    whatWeDoHeading: "End-to-end support for corporate development teams.",
    whatWeDoBody: "We act as your external CD engine—sourcing opportunities, driving outreach, and delivering insights so your team can focus on evaluation and execution.",
    featureCards: [
      { icon: "Search", title: "Opportunity Sourcing", body: "Identify high-potential targets aligned with your strategy and growth priorities." },
      { icon: "FileText", title: "Market & Target Research", body: "Deep research on industries, companies, and trends to inform better decisions." },
      { icon: "Users", title: "Outreach & Engagement", body: "Multi-channel outreach that opens doors and creates meaningful conversations." },
      { icon: "Handshake", title: "Partnership Development", body: "Build relationships that lead to strategic partnerships, investments, or acquisitions." },
      { icon: "BarChart2", title: "Reporting & Insights", body: "Clear reporting and actionable insights to support your pipeline and leadership." },
    ],
    builtForEyebrow: "Built for Corporate Development",
    builtForHeading: "Why leading companies choose us.",
    builtForBody: "We integrate with your strategy and processes to deliver measurable impact.",
    builtForChecklist: [
      "Aligned with your strategic priorities",
      "Executive-level mindset and execution",
      "High-quality pipelines, not just volume",
      "Faster cycles, better outcomes",
      "Flexible engagement, on your terms",
    ],
    vsLeft: {
      title: "Versus Doing It In-House",
      items: ["Limited bandwidth", "Higher opportunity cost", "Slower pipeline development", "Resource constraints", "Competing internal priorities"],
    },
    vsRight: {
      title: "Versus Traditional Sourcers",
      items: ["We work under your brand", "Strategic, not just tactical", "Higher relevance & quality", "Built for long-term impact", "Integrated, not detached"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Engagements that adapt to your goals. Your way.",
    engagementCards: [
      { icon: "UserRound", title: "Dedicated CD Seat", body: "An embedded resource dedicated to your pipeline and goals." },
      { icon: "FileText", title: "Project-Based Support", body: "Targeted support for specific initiatives or mandates." },
      { icon: "Clock", title: "Ongoing Pipeline Support", body: "Continuous pipeline generation and market engagement." },
      { icon: "BarChart2", title: "Research & Advisory", body: "Deep research and insights to support decision-making." },
    ],
    engagementBonus: {
      icon: "TrendingUp",
      title: "We become an extension of your team.",
      body: "Discreet. Professional. Results-driven.",
    },
    provenImpactHeading: "Real results. Real impact.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Pipeline influenced", detail: "Across multiple industries and geographies.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Active mandates", detail: "Supporting corporate development teams across the globe.", icon: "Users" },
      { value: "20%+", label: "Faster pipeline growth", detail: "Average improvement in opportunity velocity and conversion.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Understand your strategy and growth objectives",
      "Identify and prioritize the right opportunities",
      "Engage decision-makers and build relationships",
      "Deliver insights, meetings, and a qualified pipeline",
      "Support evaluation and drive outcomes",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Strategy. Execution. Growth.",
    faq: [
      { question: "What types of opportunities do you help us find?", answer: "We help identify strategic acquisition targets, partnership opportunities, and investment prospects aligned with your corporate growth strategy—across industries and geographies." },
      { question: "How do you ensure alignment with our strategy?", answer: "We start by deeply understanding your strategic priorities, growth objectives, and evaluation criteria. Every opportunity we surface is mapped to your specific goals." },
      { question: "How do you handle confidentiality?", answer: "Confidentiality is built into our process. We use discreet outreach methods, NDAs where appropriate, and never disclose your identity without explicit permission." },
      { question: "Can you work with our existing tools and processes?", answer: "Yes. We integrate with your existing CRM, reporting workflows, and internal processes so there's no disruption to how your team operates." },
      { question: "What is your typical engagement model?", answer: "We offer flexible models including dedicated CD seats, project-based support, ongoing pipeline engagement, and research advisory. The right structure depends on your goals." },
    ],
    ctaEyebrow: "Ready to Accelerate Growth?",
    ctaHeading: "Build a stronger pipeline. Drive long-term value.",
    ctaBody: "We help corporate development teams find the right opportunities, build strategic relationships, and drive meaningful growth.",
    ctaImageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "current-business-owners",
    path: "/who-we-serve/current-business-owners",
    navLabel: "Current Business Owners",
    meta: {
      path: "/who-we-serve/current-business-owners",
      title: "Advisory for Business Owners | OutSearched",
      description:
        "OutSearched helps business owners grow, optimize, or prepare for exit—with strategic advisory, M&A support, and hands-on execution.",
    },
    eyebrow: "Current Business Owners",
    heroTitle: "You've built the business. Let's build what's next.",
    heroGoldLine: "Let's build what's next.",
    lead: "We help business owners grow, optimize, or prepare for exit—so you can maximize value and create lasting impact.",
    heroImageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by Business Owners",
    trustLogos: ["Parker", "Best Western", "Tate & Lyle", "Mac Tools", "Caliber Collision"],
    whatWeDoHeading: "End-to-end support for where you are—and where you want to go.",
    whatWeDoBody: "We act as your extended team—bringing clarity, strategy, and execution to help you grow, streamline operations, and achieve your personal and financial goals.",
    featureCards: [
      { icon: "BarChart2", title: "Strategic Growth", body: "Identify opportunities and build a clear plan to grow revenue and market share." },
      { icon: "Settings", title: "Operations Optimization", body: "Streamline processes, improve margins, and increase efficiency across your business." },
      { icon: "TrendingUp", title: "Financial Performance", body: "Enhance profitability, cash flow, and KPI tracking for better decision-making." },
      { icon: "FileText", title: "Exit Planning", body: "Prepare your business for a successful sale or transition on your terms." },
      { icon: "Handshake", title: "M&A Advisory", body: "Evaluate opportunities, negotiate deals, and maximize value in buy or sell-side deals." },
    ],
    builtForEyebrow: "Built for Business Owners",
    builtForHeading: "Why owners partner with us.",
    builtForBody: "We bring a founder's mindset, operator experience, and investor perspective to every engagement.",
    builtForChecklist: [
      "Practical, owner-focused approach",
      "Confidential and trusted partnership",
      "Objective, data-driven insights",
      "Access to capital and strategic buyers",
      "Aligned with your long-term vision",
    ],
    vsLeft: {
      title: "Versus Doing It Alone",
      items: ["Limited perspective", "Resource constraints", "Emotional decision-making", "Slower progress", "Missed opportunities"],
    },
    vsRight: {
      title: "Versus Traditional Advisors",
      items: ["More responsive & agile", "Hands-on execution", "Flexible engagement", "Transparent communication", "Outcome-driven focus"],
    },
    engagementEyebrow: "Flexible Engagement Models",
    engagementHeading: "Support that fits your business. Your goals.",
    engagementCards: [
      { icon: "UserRound", title: "Fractional Leadership", body: "Senior-level guidance without the full-time commitment." },
      { icon: "FileText", title: "Project-Based Engagements", body: "Focused support for specific initiatives and challenges." },
      { icon: "TrendingUp", title: "Growth Programs", body: "Structured plans to scale and improve value." },
      { icon: "ClipboardCheck", title: "Exit Readiness", body: "Build value and prepare for a smooth transition." },
      { icon: "Handshake", title: "M&A Transactions", body: "End-to-end advisory on buying or selling a business." },
    ],
    engagementBonus: {
      icon: "UserRound",
      title: "Your business. Your legacy. Let's build what's next.",
      body: "Strategy. Execution. Results.",
    },
    provenImpactHeading: "Real results. Stronger businesses. Higher value.",
    provenImpactBody: "",
    stats: [
      { value: "$500M+", label: "Transaction value advised on", detail: "Across multiple industries.", icon: "Flag" },
      { value: "52x", label: "Meetings generated", detail: "Average increase in qualified meetings within 90 days.", icon: "BarChart2" },
      { value: "30+", label: "Industries served", detail: "Deep experience across a wide range of sectors.", icon: "Users" },
      { value: "20%+", label: "Value improvement", detail: "Average EBITDA improvement across portfolio companies.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Understand your goals and options",
      "Analyze opportunities and risks",
      "Build a clear, actionable plan",
      "Execute with precision and urgency",
      "Deliver measurable results",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Built by You. Built for What's Next.",
    faq: [
      { question: "How can you help my business grow?", answer: "We help identify growth opportunities, build strategic plans, optimize operations, and execute initiatives that drive revenue, margin, and market share improvement." },
      { question: "What industries do you work with?", answer: "We work across a broad range of industries in the lower middle market. Our approach adapts to your specific sector, competitive dynamics, and growth stage." },
      { question: "Do you only work with businesses looking to sell?", answer: "No. We support owners at every stage—whether you want to grow, optimize, prepare for exit, or explore acquisitions. The engagement is shaped around your goals." },
      { question: "How do you charge for your services?", answer: "We offer flexible engagement models including retainer-based advisory, project-based support, and success-based structures. We discuss the right fit during our initial call." },
      { question: "How do we get started?", answer: "Book a strategy call. We'll discuss where your business is today, where you want to go, and how OutSearched can help you get there." },
    ],
    ctaEyebrow: "Ready for What's Next?",
    ctaHeading: "Let's create your next chapter of growth and success.",
    ctaBody: "Whether you want to grow, optimize, or exit, we'll help you make the right moves with confidence.",
    ctaImageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Individual Buyers",
    heroTitle: "Build stronger pipelines. Back better businesses. Drive lasting value.",
    heroGoldLine: "Drive lasting value.",
    lead: "We partner with lower middle-market private equity firms to source proprietary deals, engage management teams, and build value creation plans that drive results.",
    heroImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    trustLabel: "Trusted by PE Firms",
    trustLogos: ["Wind Point Partners", "BainCapital", "Genstar", "AKKR", "LLR Partners"],
    whatWeDoHeading: "Lower middle-market focus. Institutional execution.",
    whatWeDoBody: "We act as an extension of your investment team—sourcing opportunities, running outreach, and delivering actionable intelligence that feeds your deal funnel and strengthens your thesis.",
    featureCards: [
      { icon: "Settings", title: "Deal Sourcing", body: "Proprietary sourcing across sectors and channels to surface high-quality opportunities." },
      { icon: "Users", title: "Management Outreach & Engagement", body: "Connect with management teams and build relationships that create access." },
      { icon: "BarChart2", title: "Market & Company Intelligence", body: "Deep research and insights to support smarter investment decisions." },
      { icon: "TrendingUp", title: "Value Creation Support", body: "Operational insights and initiatives to accelerate growth and margin improvement." },
      { icon: "Handshake", title: "Transaction Support", body: "From diligence to close—we help you stay focused and move efficiently." },
    ],
    builtForEyebrow: "Built for Individual Buyers",
    builtForHeading: "We think like investors. We execute like operators.",
    builtForBody: "Our team combines investment acumen with BD execution to deliver differentiated outcomes.",
    builtForChecklist: [
      "Deep LMM ecosystem and relationships",
      "Thematic, sector, and platform expertise",
      "Proprietary outreach and data",
      "Aligned with your investment strategy",
      "Built for long-term partnerships",
    ],
    vsLeft: {
      title: "Versus Doing It In-House",
      items: ["No recruiting delays", "Lower total cost", "Immediate bandwidth", "Scalable on demand", "Focus your internal team"],
    },
    vsRight: {
      title: "Versus Traditional Sourcers",
      items: ["Work as part of your team", "More strategic, less transactional", "Aligned with your thesis", "Higher-quality opportunities", "Built for long-term wins"],
    },
    engagementEyebrow: "Choose Your Engagement",
    engagementHeading: "Flexible engagement. Aligned with your investment strategy.",
    engagementCards: [
      { icon: "Search", title: "Platform / Thesis Sourcing", body: "Ongoing sourcing aligned to your sector focus and investment criteria." },
      { icon: "Users", title: "Add-On Opportunities", body: "Targeted sourcing for add-on acquisitions and bolt-on opportunities." },
      { icon: "Handshake", title: "Strategic Partner Engagement", body: "End-to-end BD support across the investment lifecycle." },
    ],
    engagementBonus: {
      icon: "TrendingUp",
      title: "Your success is our mandate.",
      body: "We are committed to helping you build stronger portfolios and drive exceptional returns.",
    },
    provenImpactHeading: "Results that move the needle.",
    provenImpactBody: "We deliver measurable impact for PE firms focused on the lower middle market.",
    stats: [
      { value: "$500M+", label: "Pipeline generated", detail: "Across multiple sectors and geographies.", icon: "Flag" },
      { value: "52x", label: "Meetings set", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "60+", label: "Active campaigns", detail: "Multi-channel outreach that fuels your deal funnel consistently.", icon: "Users" },
      { value: "Proprietary Edge", label: "", detail: "Deep relationships and proprietary intelligence you won't find in a database.", icon: "TrendingUp" },
    ],
    approachEyebrow: "Our Approach",
    approachItems: [
      "Understand your thesis and criteria",
      "Map the market and identify targets",
      "Engage management and build relationships",
      "Qualify opportunities and deliver insights",
      "Support diligence and drive to close",
    ],
    approachImageUrl: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=900&q=80",
    approachQuote: "Focus. Execute. Create Value.",
    faq: [
      { question: "How is your LMM PE sourcing different?", answer: "We combine proprietary outreach, deep LMM relationships, and institutional-grade research to deliver differentiated deal flow. Our team acts as an extension of yours—aligned with your thesis and focused on opportunities you won't find through traditional channels." },
      { question: "What sectors and geographies do you cover?", answer: "We cover a broad range of sectors across the lower middle market, with particular depth in business services, healthcare services, industrial, and technology-enabled services. Geographically, we focus on North America." },
      { question: "How do you qualify opportunities?", answer: "Every opportunity goes through a structured qualification process that evaluates strategic fit, financial profile, management quality, and transaction readiness against your specific investment criteria." },
      { question: "Can you support our existing portfolio companies?", answer: "Yes. We run targeted add-on sourcing campaigns for portfolio companies, helping identify and engage bolt-on acquisition targets that strengthen your existing platforms." },
      { question: "How do we get started?", answer: "Book a strategy call. We'll discuss your thesis, current sourcing approach, and where OutSearched can add the most value. From there, we define the mandate and launch outreach." },
    ],
    ctaEyebrow: "Ready to Build?",
    ctaHeading: "Let's build your next great investment.",
    ctaBody: "We'll help you source better deals, evaluate with confidence, and create value that lasts.",
    ctaImageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Internal Business Development",
    heroTitle: "An internal BD extension of your team, under your brand.",
    heroGoldLine: "extension of your team,",
    lead: "We embed as your Internal Business Development rep—executing outreach, generating qualified meetings, and building your pipeline.",
    whatWeDoHeading: "We operate as your internal resource—focused on results.",
    whatWeDoBody:
      "We embed with your firm as an internal resource focused on your growth. We do the outbound, build the pipeline, and create qualified opportunities—under your brand.",
    featureCards: [
      { icon: "UserRound", title: "Dedicated seat", body: "A full-time BD rep dedicated to your firm, your goals, your pipeline." },
      { icon: "BarChart2", title: "Managed pipeline", body: "Outreach, follow-up, and tracking—so your calendar stays full where they are." },
      { icon: "Globe", title: "Full-channel coverage", body: "Email, LinkedIn, calls, events, and more. We meet prospects where they are." },
      { icon: "ShieldCheck", title: "You stay in control", body: "We operate under your brand, with your messaging, and your standards." },
    ],
    builtForHeading: "Built for firms that want a named BD seat without building one.",
    builtForBody: "We integrate seamlessly with your team, tools, and process.",
    builtForChecklist: [
      "Hit the market faster without the hire",
      "Scale your outreach and stay consistent",
      "Focus your team on high-value meetings",
      "Improve win rates with a stronger funnel",
    ],
    vsLeft: {
      title: "Versus Internal Hire",
      items: ["No recruiting delays or HR lift", "Lower cost, more flexibility", "Immediate impact", "No long-term overhead"],
    },
    vsRight: {
      title: "Versus Agencies",
      items: ["We work under your brand", "Strategic, not just tactical", "Aligned with your goals", "Built for long-term wins"],
    },
    engagementEyebrow: "Choose Your Model",
    chooseModelHeading: "Flexible engagement. Real results. Your choice.",
    engagementCards: [
      { icon: "Clock", title: "Fractional Business Development", body: "Part-time support with big-time impact. Perfect for lean teams or new initiatives.", link: "/services/fractional-business-development" },
      { icon: "Handshake", title: "Buy-Side M&A Advisory", body: "Dedicated BD support for advisors focused on middle-market and higher-value deals.", link: "/services/buy-side-ma-advisory" },
      { icon: "Zap", title: "AI Implementation", body: "End-to-end BD execution. We build, run, and optimize your pipeline.", link: "/services/ai-implementation" },
    ],
    provenImpactHeading: "Real impact. Real results.",
    provenImpactBody: "We help dealmakers grow their pipeline, their brand, and their bottom line.",
    serviceStats: [
      { value: "$500M+", label: "Pipeline generated", detail: "Across multiple client engagements over the past 24 months.", icon: "Flag" },
      { value: "52x", label: "Meetings set", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "+60", label: "Active BD campaigns at any given time", detail: "Multi-channel outreach that fills your funnel consistently.", icon: "Users" },
    ],
    setupTitle: "Typical Setup",
    setup: ["Works like an internal team member", "Follows your process", "Drives your results"],
    setupQuote: "Your team. Our expertise. Shared success.",
    proofImageUrl: "/assets/services/internal-bd-proof.webp",
    faq: [
      {
        question: "Who manages the rep?",
        answer:
          "OutSearched manages the rep day-to-day, including hiring, training, outreach cadence, reporting, and performance. You stay focused on deals while we run the sourcing engine.",
      },
      {
        question: "Can the rep use our email domain?",
        answer:
          "Yes. When the engagement is structured as Internal BD, the rep can operate under your domain, your signature, and your brand so every touchpoint looks like your team.",
      },
    ],
    ctaEyebrow: "Ready to Grow?",
    ctaHeading: "Let's build your pipeline together.",
    ctaBody:
      "A stronger pipeline starts here. We'll build your outreach engine so you can focus on what you do best—closing deals and leading your firm.",
    heroImageUrl: "/assets/services/internal-bd-hero.webp",
    ctaImageUrl: "/assets/services/internal-bd-cta.webp",
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
    eyebrow: "Fractional Business Development",
    heroTitle: "Senior BD expertise, fractionally. Results that scale.",
    heroGoldLine: "fractionally.",
    lead: "Get a senior-level Business Development resource without the cost or commitment of a full-time hire. We plug in, build your pipeline, and drive real outcomes.",
    whatWeDoHeading: "Strategic execution. Seamless integration.",
    whatWeDoBody:
      "We embed as a fractional BD resource focused on your goals—handling outreach, follow-up, and pipeline management under your brand.",
    featureCards: [
      { icon: "Clock", title: "Dedicated bandwidth", body: "Senior BD firepower, part-time or custom hours aligned with your needs." },
      { icon: "BarChart2", title: "Managed pipeline", body: "Outreach, follow-up, and tracking—so your calendar stays full with qualified meetings." },
      { icon: "Globe", title: "Multi-channel outreach", body: "Email, LinkedIn, calls, events, and more. We reach the right people, consistently." },
      { icon: "ShieldCheck", title: "You stay in control", body: "We operate under your brand, with your messaging, and your standards." },
    ],
    builtForHeading: "High impact without the overhead.",
    builtForBody: "We integrate seamlessly with your team, tools, and process.",
    builtForChecklist: [
      "Immediate leverage for your team",
      "Scale your pipeline efficiently",
      "Focus your time on high-value activities",
      "Flexible engagement, measurable ROI",
    ],
    vsLeft: {
      title: "Versus Full-Time Hire",
      items: ["No recruiting delays", "Lower total cost", "Immediate impact", "No long-term overhead"],
    },
    vsRight: {
      title: "Versus Agencies",
      items: ["Works under your brand", "More strategic, not just tactical", "Aligned with your goals", "Built for long-term wins"],
    },
    engagementEyebrow: "Choose Your Model",
    chooseModelHeading: "Flexible engagement. Real results. Your choice.",
    engagementCards: [
      { icon: "UserRound", title: "Internal Business Development", body: "A dedicated BD seat that works like part of your internal team.", link: "/services/internal-business-development" },
      { icon: "Handshake", title: "Buy-Side M&A Advisory", body: "Dedicated BD support for advisors focused on middle-market and higher-value deals.", link: "/services/buy-side-ma-advisory" },
      { icon: "Zap", title: "AI Implementation", body: "End-to-end BD execution. We build, run, and optimize your pipeline.", link: "/services/ai-implementation" },
    ],
    provenImpactHeading: "Fractional. Focused. Measurable.",
    provenImpactBody:
      "We deliver the same outcomes you expect from a full-time BD hire—without the overhead or long ramp.",
    serviceStats: [
      { value: "$500M+", label: "Pipeline generated", detail: "Across multiple client engagements over the past 24 months.", icon: "Flag" },
      { value: "52x", label: "Meetings set", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "+60", label: "Active BD campaigns at any given time", detail: "Multi-channel outreach that fills your funnel consistently.", icon: "Users" },
    ],
    setupTitle: "Typical Setup",
    setup: [
      "Fractional engagement, full accountability",
      "Works like part of your team",
      "Follows your process and ICP",
      "Drives pipeline and measurable results",
    ],
    setupQuote: "Your team. Our expertise. Shared success.",
    proofImageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    faq: [
      {
        question: "How does fractional BD differ from internal hiring?",
        answer:
          "Fractional BD gives you senior BD expertise and immediate output without the recruiting ramp, training period, or long-term employment commitment. You get results from day one.",
      },
      {
        question: "What does a typical engagement look like?",
        answer:
          "We start with mandate definition and target universe build, then move into active outreach within the first week. You get weekly pipeline reports and qualified meeting handoffs throughout.",
      },
      {
        question: "Can you work with our existing tools and CRM?",
        answer:
          "Yes. We integrate with the tools you already use—including your CRM, email platform, and reporting workflows—so there's no disruption to your existing process.",
      },
      {
        question: "How soon will we see results?",
        answer:
          "Most clients see qualified meetings within the first 30-60 days, depending on mandate complexity and target market responsiveness.",
      },
    ],
    ctaEyebrow: "Ready to Grow?",
    ctaHeading: "Leverage senior BD expertise—without the full-time cost.",
    ctaBody: "We become your fractional BD partner and help you build a stronger pipeline, faster.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    ctaImageUrl:
      "https://images.unsplash.com/photo-1526628953301-3cd2fa946fc0?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "Buy-Side M&A Advisory",
    heroTitle: "Find the right deals. Do the right diligence. Close with confidence.",
    heroGoldLine: "Do the right diligence.",
    lead: "We act as your buy-side partner—sourcing opportunities, running deep diligence, and helping you win the right deals at the right terms.",
    whatWeDoHeading: "End-to-end buy-side support that de-risks every decision.",
    whatWeDoBody:
      "We don't just find deals—we evaluate, validate, and help you secure the right opportunities for long-term value creation.",
    featureCards: [
      { icon: "Search", title: "Deal Sourcing", body: "We find off-market and on-market opportunities aligned with your criteria." },
      { icon: "SlidersHorizontal", title: "Target Screening", body: "Smart filtering and initial assessments to shortlist the best-fit opportunities." },
      { icon: "FileText", title: "Due Diligence", body: "Financial, operational, commercial, and risk diligence that uncovers what matters." },
      { icon: "TrendingUp", title: "Valuation & Deal Structuring", body: "Independent valuation and optimal deal structure advice." },
      { icon: "Handshake", title: "Negotiation Support", body: "Strategic support through term sheet to closing." },
    ],
    builtForHeading: "Why buyers choose us as their M&A partner.",
    builtForBody:
      "We combine dealmaking experience with deep research and execution excellence to give you an unfair advantage.",
    builtForChecklist: [
      "Access to proprietary deal flow",
      "Deep, data-driven diligence",
      "Experienced M&A professionals",
      "Aligned with your investment goals",
      "Built for long-term partnerships",
    ],
    vsLeft: {
      title: "Versus Doing It Yourself",
      items: ["Time-consuming sourcing", "Limited market access", "Diligence gaps", "Execution risk", "Opportunity cost"],
    },
    vsRight: {
      title: "Versus Traditional Advisors",
      items: ["Generic mandates", "High fees, misaligned", "Less hands-on execution", "Slower timelines", "Less flexible engagement"],
    },
    engagementEyebrow: "Choose Your Engagement",
    chooseModelHeading: "Flexible engagement. Aligned with your investment strategy.",
    engagementCards: [
      { icon: "Search", title: "Deal Sourcing Partnership", body: "We find and qualify deals that match your investment thesis." },
      { icon: "Users", title: "Diligence Partner", body: "We run deep diligence so you can make confident investment decisions." },
      { icon: "Handshake", title: "End-to-End Buy-Side Advisory", body: "We manage the entire buy-side process from sourcing to closing." },
    ],
    engagementBonus: {
      icon: "TrendingUp",
      title: "Value Creation Support",
      body: "Post-acquisition integration planning and execution support to maximize returns.",
    },
    provenImpactHeading: "Results that drive stronger portfolios.",
    provenImpactBody: "We help buyers build better businesses through better decisions.",
    serviceStats: [
      { value: "$500M+", label: "Pipeline evaluated", detail: "Across multiple industries and geographies.", icon: "Flag" },
      { value: "52x", label: "Meetings set", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "+60", label: "Active mandates", detail: "Across search, diligence, and buy-side advisory engagements.", icon: "Users" },
    ],
    setupTitle: "Our Approach",
    setup: [
      "Buyer-first mindset",
      "Independent and objective",
      "Deep research, real insights",
      "Discipline in process, focus on value",
    ],
    setupQuote: "Better decisions. Stronger businesses.",
    proofImageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    faq: [
      {
        question: "What types of companies do you help us acquire?",
        answer:
          "We work across a wide range of industries and company types—from owner-operated businesses in the lower middle market to mid-sized companies with institutional backing. The fit depends on your thesis and criteria.",
      },
      {
        question: "Do you only work with private companies?",
        answer:
          "Primarily yes. We focus on privately held companies where direct-to-owner conversations can create a proprietary advantage before a broad sale process exists.",
      },
      {
        question: "How involved are you in the negotiation process?",
        answer:
          "Highly involved. We support buyers from initial conversation through LOI—including structuring, seller management, and deal term strategy. Our role is to protect your interests and keep the deal moving.",
      },
      {
        question: "Can you support add-on acquisitions?",
        answer:
          "Yes. Add-on acquisition sourcing is one of our core service areas. We run targeted outreach for bolt-on mandates that fit an existing platform's strategic criteria.",
      },
    ],
    ctaEyebrow: "Ready to Acquire?",
    ctaHeading: "Let's find and close the right deals—together.",
    ctaBody: "Our buy-side advisory helps you build stronger businesses and create lasting value.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    ctaImageUrl:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80",
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
    eyebrow: "AI Implementation",
    heroTitle: "Smarter systems. Better decisions. Real impact.",
    heroGoldLine: "Better decisions.",
    lead: "We help dealmakers and investment firms implement AI solutions that automate work, surface insights, and give you a competitive edge.",
    whatWeDoHeading: "AI solutions designed for dealmakers.",
    whatWeDoBody:
      "We plan, build, and integrate AI solutions that fit your workflow—so your team saves time, reduces manual work, and makes better decisions, faster.",
    featureCards: [
      { icon: "Zap", title: "Process Automation", body: "Automate repetitive tasks and workflows to save hours every week." },
      { icon: "BarChart2", title: "Data & Insights", body: "Turn your data into actionable insights with AI-powered analytics." },
      { icon: "Brain", title: "Research & Intelligence", body: "Faster research, smarter summaries, and deeper market & company intelligence." },
      { icon: "MessageSquare", title: "Content & Comms", body: "AI-assisted drafting, summaries, and communications that stay on-brand." },
      { icon: "Link2", title: "Seamless Integration", body: "We integrate AI into your existing tools and systems—without disruption." },
    ],
    builtForHeading: "AI that works for your team—not the other way around.",
    builtForBody: "We focus on practical AI that drives results, not experiments.",
    builtForChecklist: [
      "Tailored to your workflows",
      "Secure and data-responsible",
      "Measurable ROI from day one",
      "Training and ongoing support",
      "Built for long-term adoption",
    ],
    vsLeft: {
      title: "Versus DIY AI Tools",
      items: ["Time-consuming setup", "Steep learning curve", "Hard to integrate", "Limited results", "No ongoing support"],
    },
    vsRight: {
      title: "Versus Generic Solutions",
      items: ["Not built for dealmakers", "One-size-fits-all approach", "Limited customization", "Poor adoption", "Short-term impact"],
    },
    engagementEyebrow: "Choose Your Engagement",
    chooseModelHeading: "Flexible engagement. Scalable solutions. Your choice.",
    engagementCards: [
      { icon: "ClipboardCheck", title: "AI Readiness Assessment", body: "Evaluate opportunities, identify high-impact use cases, and build your AI roadmap." },
      { icon: "Brain", title: "Custom AI Implementation", body: "We design, build, and integrate AI solutions tailored to your goals and systems." },
      { icon: "Settings", title: "Ongoing Optimization & Support", body: "We monitor, optimize, and evolve your AI systems for continuous improvement." },
    ],
    engagementBonus: {
      icon: "Rocket",
      title: "From strategy to execution—and beyond.",
      body: "We don't just implement AI. We make it work for your business.",
    },
    provenImpactHeading: "AI that delivers measurable results.",
    provenImpactBody: "We help firms unlock efficiency, reduce costs, and drive better outcomes with AI.",
    serviceStats: [
      { value: "$500M+", label: "Pipeline influenced", detail: "Across multiple clients and engagements.", icon: "Users" },
      { value: "52x", label: "Meetings set", detail: "Average increase in qualified meetings within the first 90 days.", icon: "BarChart2" },
      { value: "60+", label: "AI automations deployed", detail: "From research to reporting and outreach.", icon: "Clock" },
      { value: "30–70%", label: "Time saved", detail: "On repetitive tasks across client workflows.", icon: "TrendingUp" },
    ],
    setupTitle: "Our Approach",
    setup: [
      "Understand your goals and workflows",
      "Identify high-impact AI opportunities",
      "Build and integrate the right solution",
      "Test, train, and optimize for adoption",
      "Deliver measurable results",
    ],
    setupQuote: "Smarter systems. Better outcomes.",
    proofImageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    faq: [
      {
        question: "What types of AI solutions do you implement?",
        answer:
          "We implement AI across sourcing workflows, CRM automation, research intelligence, document analysis, outreach personalization, and pipeline reporting. Each solution is custom-built for your specific use case.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Project timelines vary by scope, but most engagements move from discovery to live deployment within 4-12 weeks. We start with a focused build and expand from there.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We take data security seriously. All implementations follow best practices for access control, encryption, and data handling. We work within your existing security framework.",
      },
      {
        question: "Do you provide training and support?",
        answer:
          "Yes. Every implementation includes team training and ongoing support to ensure adoption. We stay involved until your team is confident and the system is delivering results.",
      },
    ],
    ctaEyebrow: "Ready to Innovate?",
    ctaHeading: "Let's implement AI that drives real results.",
    ctaBody:
      "We'll help you identify opportunities, implement the right solutions, and unlock the full potential of AI for your firm.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    ctaImageUrl:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=80",
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
