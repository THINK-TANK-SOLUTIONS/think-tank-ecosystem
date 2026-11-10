export type AccentKey =
  | "sage"
  | "steel"
  | "forest"
  | "moss"
  | "clay"
  | "teal"
  | "rose"
  | "slate"
  | "blush"
  | "sand"
  | "mist";

export type VenturePlaybook = {
  minutes: number;
  physical: boolean;
  where: string;
  steps: string[];
  script: string;
  doneWhen: string;
};

/** Old slugs that should redirect to their renamed venture. */
export const legacyVentureSlugs: Record<string, string> = {
  "terrascape-oasis": "terraform-oasis",
  terraedutainment: "terraform-edutainment",
  yourspace: "privacy-pod",
};

export type Venture = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  manifesto: string;
  accent: AccentKey;
  category: string;
  revenueModel: string;
  audience: string;
  /** `price` is optional: omit it where the brief gives no pricing (renders as an offer item). */
  pricing: { name: string; price?: string; note: string }[];
  /** Primary call to action, taken from the MVB brief. */
  cta: { label: string; joinedLabel: string; note: string };
  howItWorks: { step: string; body: string }[];
  firstWeek: VenturePlaybook;
  features: { title: string; body: string }[];
  dripDay: number;
};

export const ventures: Venture[] = [
  {
    slug: "think-tank-solutions",
    name: "Think Tank Solutions AI",
    shortName: "Solutions",
    oneLiner:
      "A build studio that provisions complete, operator-grade AI operating systems for service organizations — done for you.",
    manifesto:
      "Your operation lives in one person’s head and six spreadsheets, and generic SaaS won’t encode your regulatory reality. We build backward from the documented failure modes of your industry — Failure-First Frontier Systematic Thinking — and codify the operation into a system that enforces itself. Proof is shipped: Genesis AOS encodes a 50-standard NJ DDD compliance engine with evidence-locked billing.",
    accent: "sage",
    category: "AI operating systems",
    revenueModel:
      "Done-for-you build engagements + storefront of original SOPs, workflows, and agent blueprints",
    audience:
      "Owner-operators and executive directors of 5–150 person service organizations — day habilitation providers, clinics, agencies, contractors — who tried off-the-shelf software and now pay staff to work around it.",
    pricing: [
      {
        name: "Foundry Finn",
        price: "Free",
        note: "Free plan — the entry point. Plan your launch before you build.",
      },
      {
        name: "Done-for-you build",
        note: "A complete operating system for your organization, provisioned by us. Book a build to scope it.",
      },
      {
        name: "Blueprint storefront",
        note: "Original SOPs, workflows, and agent blueprints from the engine behind Genesis AOS.",
      },
    ],
    cta: {
      label: "Book a build",
      joinedLabel: "Build requested",
      note: "Discovery call first. We scope the build against your actual compliance reality.",
    },
    howItWorks: [
      {
        step: "Map the failure modes",
        body: "We start from the documented ways operations like yours break — audits, handoffs, billing — not from a feature list.",
      },
      {
        step: "Codify the operation",
        body: "Your real standards become rules the system enforces, so the work is auditable and delegable.",
      },
      {
        step: "Deploy and hand over",
        body: "A done-for-you deployment your team runs, with the reasoning behind every rule written down.",
      },
    ],
    firstWeek: {
      minutes: 40,
      physical: false,
      where: "Calendar + a note titled “Finn routine”",
      steps: [
        "Open your calendar. Create a 30-minute event, 7 days, same time. Title it “Finn routine.” Invite only yourself.",
        "In a note, list the four jobs you repeat every week (intake, follow-up, content, billing). One line each.",
        "Paste three prompts into the same note: rewrite a caption; draft a follow-up text; turn a job photo into a Google Post.",
        "Tomorrow inside the block: take one photo, send one follow-up, check Google Business Profile. Then close the laptop.",
      ],
      script:
        "Rewrite this in my voice. Two sentences. Name the neighborhood. No hashtags over three. No ‘excited to announce.’",
      doneWhen: "seven 30-minute blocks are on the calendar and three prompts live in one note.",
    },
    features: [
      {
        title: "Failure-first design",
        body: "Built backward from industry failure modes, forward from nothing.",
      },
      {
        title: "Compliance you can audit",
        body: "Standards encoded into daily operations, not kept in a binder.",
      },
      {
        title: "Shipped proof",
        body: "Genesis AOS: a 50-standard NJ DDD compliance engine with evidence-locked billing.",
      },
    ],
    dripDay: 7,
  },
  {
    slug: "think-tank-digital",
    name: "Think Tank Digital",
    shortName: "Digital",
    oneLiner:
      "Original Foundational Canon products and installable AI-Friendly System Standard™ websites. Personalize in minutes, own for life.",
    manifesto:
      "Everything affordable is either a blank template that leaves you stranded or thin PLR filler dressed as a product. Ours is original, source-verified work — never resold purchased material. Every system ships as a complete working install with one editable config file, an AI Prompt Pack, and lifetime ownership. If updating it requires becoming a developer, we consider the design failed.",
    accent: "steel",
    category: "Digital products",
    revenueModel: "One-time purchase — no subscription",
    audience:
      "Self-directed adults rebuilding focus and discipline, and small operators — tutors, therapists, solo consultants, nonprofit coordinators — who need to look professional this week without a developer or a monthly subscription.",
    pricing: [
      { name: "Readers", price: "$9–12", note: "Foundational Canon, authored from proven books" },
      { name: "Planners", price: "$19–24", note: "Foundational Canon planners" },
      { name: "Legacy Bundles", price: "$34–39", note: "Foundational Canon bundles" },
      {
        name: "Installable systems",
        note: "ClassroomHub, Client Welcome Portal, Volunteer Hub — one config file, AI Prompt Pack, lifetime ownership",
      },
    ],
    cta: {
      label: "Get the free starter system",
      joinedLabel: "On the list",
      note: "Start with the free starter system. No subscription, ever.",
    },
    howItWorks: [
      {
        step: "Pick a ladder",
        body: "A Foundational Canon reader, planner, or bundle — or an installable website system.",
      },
      {
        step: "Personalize in minutes",
        body: "Edit one config file. The AI Prompt Pack does the rest of the wording.",
      },
      { step: "Own it for life", body: "No subscription. The files are yours." },
    ],
    firstWeek: {
      minutes: 50,
      physical: false,
      where: "A one-page Doc, then Etsy / Shopify / Gumroad drafts — not live yet",
      steps: [
        "Pick ONE local motion (a one-pager, a price menu, a review-ask card). Write the city and zip in sentence one.",
        "Swap in your name, one accent color, and two of your photos. No stock.",
        "Export PDF + PNG. Create a draft listing on the storefront you already have. Do not publish until the copy names a zip.",
        "Join this list so the next kit lands in your desk. Then print 10 of the one-pager for the street.",
      ],
      script:
        "[Service] in [neighborhood], [zip]. Three prices. Text [number]. Same-week slots. No funnel.",
      doneWhen:
        "a zip-named one-pager exists as a PDF and a draft listing, and 10 copies are printed.",
    },
    features: [
      {
        title: "Original, source-verified",
        body: "Never resold purchased material. No PLR filler.",
      },
      {
        title: "Complete working installs",
        body: "One editable config file and an AI Prompt Pack in every system.",
      },
      { title: "Lifetime ownership", body: "Buy once. No monthly rent." },
    ],
    dripDay: 3,
  },
  {
    slug: "terraform-sovereign",
    name: "TerraForm Sovereign AI",
    shortName: "TerraForm",
    oneLiner:
      "The trust layer for AI services. A marketplace of vetted providers — Certified Conductors — arranged by the Brand Symphony Arrangement Method.",
    manifesto:
      "There is no trust layer in AI services: buyers can’t verify capability, good providers can’t signal it, so everyone defaults to price and quality loses. Here, vetting is a credential, not a checkbox — Certified Conductor status is earned through a structured course and test. The Brand Symphony Arrangement Method maps your actual pain points to five defined AI agents before anyone quotes a price, so you know what you’re buying before you meet a seller.",
    accent: "forest",
    category: "Marketplace",
    revenueModel: "Two-sided marketplace",
    audience:
      "Small and mid-sized business owners, 30–55, who know they need AI implemented but can’t tell a competent operator from a hustler with a landing page. Also: skilled AI freelancers tired of racing to the bottom.",
    pricing: [
      {
        name: "For businesses",
        note: "Your pain points mapped to five defined AI agents before anyone quotes a price",
      },
      {
        name: "Certified Conductor",
        note: "For AI providers — status earned through a structured course and test",
      },
      { name: "Five portals", note: "Overture, Audience, First Chair, Maestro, and Open Score" },
    ],
    cta: {
      label: "Join the waitlist",
      joinedLabel: "On the waitlist",
      note: "Businesses and Conductors both welcome. Bookings open when the platform backend is live.",
    },
    howItWorks: [
      {
        step: "Name the pain",
        body: "Tell us what is breaking in plain language. No technical vocabulary required.",
      },
      {
        step: "Arrange the score",
        body: "The Brand Symphony Arrangement Method maps it to five defined AI agents — before any quote.",
      },
      {
        step: "Meet a Certified Conductor",
        body: "Only providers who earned the credential through the course and test.",
      },
    ],
    firstWeek: {
      minutes: 45,
      physical: true,
      where: "A one-page scope, then one complementary shop on your block",
      steps: [
        "Write the job on one page: what “done” looks like, zip, budget, and the tool you already use. Four sentences max.",
        "Join this list with that scope in the notes field (or keep it in your CRM until we open matching).",
        "Walk into one local provider you would actually hire (a web person, a bookkeeper, a washer). Ask how they scope a first job.",
        "Write their first name, price shape, and one thing they do better than a marketplace stranger.",
      ],
      script:
        "I’m hiring for [job] in [zip]. Fixed deliverable, not hourly. What’s the smallest job you’ll take, and what do you need from me on day one?",
      doneWhen:
        "a one-page scope exists, you are on the list, and one local first name is in your notes.",
    },
    features: [
      {
        title: "Vetting as a credential",
        body: "Certified Conductor status is earned, not bought.",
      },
      {
        title: "Know before you buy",
        body: "The arrangement is defined before a seller enters the room.",
      },
      {
        title: "Welcoming to the non-technical",
        body: "Five portals, one clear path from pain point to provider.",
      },
    ],
    dripDay: 5,
  },
  {
    slug: "terraform-oasis",
    name: "TerraForm Oasis AI",
    shortName: "Oasis",
    oneLiner:
      "Verified outdoor property service. Book, monitor, pay, and subscribe in one place — maintenance, seasonal retainers, pools, and large projects.",
    manifesto:
      "Premium landscaping is sold like a favor: no visibility, no proof the crew came, invoices that arrive whenever. TerraForm Oasis offers verified service, not promised service — every visit produces timestamped visual evidence tied to the invoice, and the subscription reschedules itself around weather and season without a call. You see your property whether or not you are standing on it.",
    accent: "moss",
    category: "Outdoor property services",
    revenueModel: "Maintenance subscriptions, seasonal retainers, and project engagements",
    audience:
      "Owners of high-value properties, 40–70, in affluent and second-home markets — plus the property managers and HOA boards who answer for them.",
    pricing: [
      {
        name: "Monthly maintenance plans",
        note: "Scheduled, verified, and billed without phone tag",
      },
      { name: "Seasonal retainers", note: "Rescheduled around weather and season automatically" },
      { name: "Pool service", note: "Visits documented with timestamped evidence" },
      {
        name: "Yard and hardscape projects",
        note: "Large-scale work, quoted and scheduled in one place",
      },
    ],
    cta: {
      label: "Join the estimate waitlist",
      joinedLabel: "On the waitlist",
      note: "Estimates open when booking launches. Service area to be announced.",
    },
    howItWorks: [
      {
        step: "Request an estimate",
        body: "Tell us about the property and what it needs by season.",
      },
      {
        step: "Subscribe or schedule",
        body: "A maintenance plan, a seasonal retainer, or a single project — in one place.",
      },
      { step: "Verify every visit", body: "Timestamped visual evidence tied to each invoice." },
    ],
    firstWeek: {
      minutes: 40,
      physical: true,
      where: "Your yard or a client’s, then two local crews",
      steps: [
        "Photograph the yard from the sidewalk and from the back fence. Same two angles. No filters.",
        "Write three bullets: what you want by season, the zip, and when someone can walk it.",
        "Text two local crews those photos and bullets. Ask for a number that will not change.",
        "Join this list. When matching opens, that packet is what we send — not a 14-field form.",
      ],
      script:
        "Here are two photos of the yard in [zip]. I want [job] done by [month]. What’s the number I would actually pay — not a range?",
      doneWhen:
        "two photos, three bullets, two quotes (or two non-answers), and you’re on the list.",
    },
    features: [
      {
        title: "Verified, not promised",
        body: "Every visit produces timestamped visual evidence tied to the invoice.",
      },
      {
        title: "Self-scheduling seasons",
        body: "Weather and season changes handled without a call.",
      },
      {
        title: "Built for absentee owners",
        body: "See the property whether or not you are there.",
      },
    ],
    dripDay: 8,
  },
  {
    slug: "genesis-revitalization",
    name: "Genesis Revitalization Group",
    shortName: "Genesis",
    oneLiner:
      "Day habilitation for adults with intellectual and developmental disabilities in Atlantic City, NJ — run on a system that produces the evidence.",
    manifesto:
      "Families are asked to trust without seeing the day. Coordinators place individuals with providers whose documentation collapses under monitoring. At Genesis, fifty NJ DDD monitoring standards are codified directly into daily operations with a five-business-day cure path. We do not describe our quality — the system produces the evidence. A 501(c)(3).",
    accent: "clay",
    category: "Day habilitation · 501(c)(3)",
    revenueModel: "NJ DDD day habilitation program",
    audience:
      "Support coordinators and NJ DDD case managers who refer placements, and the parents, siblings, and guardians choosing where their adult family member spends their days.",
    pricing: [
      {
        name: "Day habilitation program",
        note: "Every 15-minute service interval documented; billing locked to evidence",
      },
      { name: "Family portal", note: "Families have their own portal into the program" },
      {
        name: "Coordinator referral packet",
        note: "Program-level information for support coordination offices",
      },
    ],
    cta: {
      label: "Book a family tour",
      joinedLabel: "Tour requested",
      note: "Families: visit during program hours. Coordinators: ask for the referral packet.",
    },
    howItWorks: [
      {
        step: "Tour the program",
        body: "Visit in person during program hours. Meet staff, not only the director.",
      },
      { step: "Plan the start", body: "Coordinator and family work through intake together." },
      {
        step: "See the record",
        body: "Service is documented in 15-minute intervals; families have their own portal.",
      },
    ],
    firstWeek: {
      minutes: 60,
      physical: true,
      where: "The referring agency packet, then a visit — not a form in a tab",
      steps: [
        "Call the center. Ask for intake. Write down: hours, transportation, what to bring (ISP, insurance, ID).",
        "Ask one question: “Who signs the notes, a person or a system?” If they cannot answer, keep looking.",
        "Visit in person during program hours. Watch a meal or a group. Talk to a staff member, not only the director.",
        "If you are a family: join this list for the portal wait. If you are an agency: ask for the compliance packet PDF the same day.",
      ],
      script:
        "I’m calling about adult day services. I have the ISP. What do I bring on the first visit, and who do I talk to if a note is wrong?",
      doneWhen:
        "you have walked the floor, you know what to bring, and a named person is on your notes.",
    },
    features: [
      {
        title: "Standards in operations",
        body: "Fifty NJ DDD monitoring standards built into the daily routine, with a five-business-day cure path.",
      },
      {
        title: "Evidence-locked billing",
        body: "Billing ties to documented service, interval by interval.",
      },
      { title: "Family portal", body: "Families have their own window into the program." },
    ],
    dripDay: 6,
  },
  {
    slug: "clientflow",
    name: "ClientFlow AI",
    shortName: "ClientFlow",
    oneLiner:
      "Client operations for 2–25 person service businesses. Intake, scheduling, communication, documentation, and billing in one system — and AI that drafts the follow-up you forgot.",
    manifesto:
      "Client work leaks between a CRM you don’t use, a scheduler, a chat app, and a shared inbox. Nobody knows a client’s status without asking a person, and revenue walks out on the forgotten ones. ClientFlow was built by an operator who had to run a compliance-grade operation first, so the audit trail is native. One thread, one status, one record per client — and the AI drafts the next action instead of reporting that nothing happened.",
    accent: "teal",
    category: "SaaS · client operations",
    revenueModel: "Multi-tenant SaaS",
    audience:
      "Owners of 2–25 person service businesses — agencies, clinics, consultancies, trades — already paying for four tools and resentful about it.",
    pricing: [
      { name: "Intake + scheduling", note: "Clients land in one place, booked in the same system" },
      {
        name: "Communication + documentation",
        note: "One thread, one status, one record per client",
      },
      { name: "Billing", note: "Invoicing in the same record as the work" },
      { name: "AI follow-up", note: "Drafts the next action for you to send" },
    ],
    cta: {
      label: "Join the waitlist",
      joinedLabel: "On the waitlist",
      note: "ClientFlow is in active build. Waitlist members hear first when tenants open.",
    },
    howItWorks: [
      {
        step: "One record per client",
        body: "Intake, schedule, messages, documents, and invoices in a single tenant-isolated system.",
      },
      {
        step: "AI drafts the next action",
        body: "Follow-ups get written for you. You decide what goes out.",
      },
      {
        step: "The audit trail is native",
        body: "Every change is on the record, not bolted on later.",
      },
    ],
    firstWeek: {
      minutes: 35,
      physical: false,
      where: "ClientFlow starter, or a Sheet if you have not joined yet",
      steps: [
        "Open a Sheet with columns: Name, Where we met, Phone, Stage, Follow-up date, Notes. Stages: New / Talking / Booked / Paid.",
        "Enter every human from this week. If you do not have a phone, put the channel they used.",
        "Write one 3–4 sentence saved reply in a note titled “first reply.” Paste, then personalize the first name.",
        "Put the Sheet link on your phone home screen. Join this list. A name not in the list does not exist.",
      ],
      script:
        "Hi [name] — [your name] from [shop / neighborhood]. Good to meet you. If anyone asks about [job], you’ve got my number. I’ll check in next week either way.",
      doneWhen:
        "every name from the week is in four stages with a date, and one saved reply exists.",
    },
    features: [
      {
        title: "Replaces the duct-taped stack",
        body: "CRM, scheduler, chat, and shared inbox — one system.",
      },
      { title: "Tenant-isolated", body: "Each business has its own space." },
      { title: "Results-first AI", body: "It proposes the next step instead of just reporting." },
    ],
    dripDay: 2,
  },
  {
    slug: "ancestry-speaks",
    name: "My Ancestry Speaks",
    shortName: "Ancestry",
    oneLiner:
      "Ancestral Encounters: studio-enhanced, emotionally gripping films that bring your ancestors — or an AI rendition of them — to life.",
    manifesto:
      "Records give you names and dates, not the person. An Ancestral Encounter is built in the studio from what your family actually holds — facts, records, family input, photos, videos, and voice edits — and shaped into an encounter you will not forget. Consent comes first at every step, and the family decides what is used. This is not a DNA test. It is the story, told with care.",
    accent: "rose",
    category: "Heritage · Ancestral Encounters",
    revenueModel: "Studio-produced Ancestral Encounters",
    audience:
      "The designated keeper of a family’s history — often 35–60 — who wants the people behind the names to be seen and heard.",
    pricing: [
      {
        name: "Ancestral Encounter",
        note: "A studio-enhanced encounter with an ancestor, or an AI rendition, built from your family’s material",
      },
      {
        name: "Family input session",
        note: "Facts, records, stories, photos, videos, and voice — gathered with the family",
      },
      {
        name: "Consent-first",
        note: "Nothing is used without the family’s explicit, revocable consent",
      },
    ],
    cta: {
      label: "Join the waitlist",
      joinedLabel: "On the waitlist",
      note: "Tell us whose story you want to hear. We will reach out when the studio opens.",
    },
    howItWorks: [
      {
        step: "Gather what the family holds",
        body: "Facts, records, family input, photos, videos, and voice recordings.",
      },
      {
        step: "The studio shapes it",
        body: "Edits, voice work, and AI rendition where the family consents to it.",
      },
      { step: "The encounter", body: "A moving, studio-enhanced film your family can share." },
    ],
    firstWeek: {
      minutes: 50,
      physical: true,
      where: "A shoebox, a voice memo, one living relative",
      steps: [
        "Put every photo and paper that is not already scanned into one box. Photograph the box. That is the inventory.",
        "Call one living relative. Record 10 minutes (phone voice memo is fine). Ask: who we miss, the house, the job, the one story they tell twice.",
        "Write three facts you can source (a name, a place, a year) and one gap you will not invent.",
        "Join this list. Bring the memo and the three facts. We do not need a GEDCOM on day one.",
      ],
      script:
        "I’m trying to keep [name]’s story while we still can. Could I record ten minutes? Who we miss, the house, the job — whatever you want on the tape. I’ll send you the file.",
      doneWhen:
        "a 10-minute memo exists, three sourced facts are written down, and you are on the list.",
    },
    features: [
      {
        title: "Studio-enhanced",
        body: "Produced, edited, and finished — not an auto-generated slideshow.",
      },
      {
        title: "Built from your material",
        body: "Records, photos, videos, and family input — not DNA.",
      },
      { title: "Consent at every step", body: "Explicit and revocable. The family decides." },
    ],
    dripDay: 11,
  },
  {
    slug: "terraform-edutainment",
    name: "TerraForm EduTainment AI",
    shortName: "EduTainment",
    oneLiner:
      "The learning channel where how humans failed first is half the lesson — with a printable adventure pack for every video.",
    manifesto:
      "Kids’ educational media ends when the video does, and it presents invention as magic. We tell the failures before the success — the 1857, 1858, and 1865 cable attempts before 1866 — and every video comes with a printable adventure pack so kids learn with their hands, not just their eyes. One deeply researched topic becomes 12–15 coordinated outputs. Season one: Secret Systems That Run the Modern World.",
    accent: "slate",
    category: "Edutainment",
    revenueModel: "Printable packs, lesson packs, unit studies, and Curiosity Club membership",
    audience:
      "Parents of 5–12 year olds who want screen time they don’t feel bad about, teachers who need a lesson they can use tomorrow morning, and homeschoolers who want a complete unit study.",
    pricing: [
      { name: "Free mini adventure pack", note: "Start here — a taste of the printable packs" },
      {
        name: "Printable adventure packs",
        note: "Hands-on follow-through for every flagship video",
      },
      {
        name: "Teacher lesson packs + homeschool unit studies",
        note: "Ready to teach, organized end to end",
      },
      { name: "Curiosity Club", note: "Monthly membership" },
    ],
    cta: {
      label: "Get the free mini adventure pack",
      joinedLabel: "On the list",
      note: "Join the list and the free mini adventure pack is yours.",
    },
    howItWorks: [
      { step: "Watch the flagship video", body: "A deeply researched explainer — failures first." },
      {
        step: "Pick up the pack",
        body: "Printable adventure packs, lesson packs, or a full unit study.",
      },
      {
        step: "Learn with hands",
        body: "Build, test, and break things the way the inventors did.",
      },
    ],
    firstWeek: {
      minutes: 45,
      physical: true,
      where: "The kitchen table, then somewhere off the laptop",
      steps: [
        "Pick one mission: build, write, or fix something that exists in the house (a shelf, a paragraph, a bike).",
        "First attempt is supposed to break. Photograph the break. That photo is the lesson, not the failure.",
        "Repair it. Photograph the repair from the same spot. Two photos, one sentence: what changed.",
        "Show the two photos to one adult. Join this list for the next mission. No worksheet, no grade.",
      ],
      script:
        "We’re going to break this on purpose, then fix it. The grade is the repair. Ready in ten minutes?",
      doneWhen: "two photos (break + repair) exist and one adult has seen them.",
    },
    features: [
      { title: "Failure-first stories", body: "How humans failed is half the lesson." },
      {
        title: "Printables for every video",
        body: "Kids learn with their hands, not just their eyes.",
      },
      { title: "Quietly rigorous", body: "Every factual claim traces to a source." },
    ],
    dripDay: 10,
  },
  {
    slug: "simutrade",
    name: "SimuTrade Labs",
    shortName: "SimuTrade",
    oneLiner:
      "Education and simulation for funded-account evaluation candidates. A lab, not a signal service. Education only — not financial advice.",
    manifesto:
      "Challenge candidates fail on mechanics — daily loss limits, position sizing, consistency rules — not on market opinion. Nobody teaches the rulebook. SimuTrade Labs is a lab: a curriculum built backward from documented failure patterns, and a practice environment that mirrors evaluation rules rather than idealized conditions. We do not sell a dream; we sell repetitions under the constraints that actually eliminate people. Education only. Not financial or investment advice. Trading involves risk of loss.",
    accent: "mist",
    category: "Trader education · education only",
    revenueModel: "Education program + simulation environment",
    audience:
      "Retail traders 22–45 who have paid for at least one funded-account challenge and blown it, usually on a rule violation rather than a bad thesis.",
    pricing: [
      { name: "Curriculum", note: "Built around the specific ways candidates fail evaluations" },
      { name: "Simulation environment", note: "Rule-accurate practice conditions" },
      { name: "Drawdown discipline drills", note: "Repetitions under evaluation constraints" },
    ],
    cta: {
      label: "Join the waitlist",
      joinedLabel: "On the waitlist",
      note: "Education only. Not financial advice. No guarantee of passing any evaluation. Trading involves risk of loss.",
    },
    howItWorks: [
      {
        step: "Learn the rulebook",
        body: "Daily loss limits, position sizing, consistency rules — taught directly.",
      },
      {
        step: "Practice under the rules",
        body: "An environment that mirrors evaluation rules, not idealized conditions.",
      },
      {
        step: "Drill the discipline",
        body: "Drawdown drills built from documented failure patterns.",
      },
    ],
    firstWeek: {
      minutes: 40,
      physical: false,
      where: "A dated journal (paper or a Doc). No live money.",
      steps: [
        "Write one thesis in four lines: market, direction, why, what would prove you wrong. Date it.",
        "Do not place a real order. If you already have a paper account, log the fill you would have gotten — spread included.",
        "Next day, write what actually happened. One sentence. If you were wrong, say so in the same ink.",
        "Join this list. Bring the dated thesis. We are a lab, not a broker.",
      ],
      script:
        "Thesis for [date]: I think [market] goes [direction] because [reason]. I’m wrong if [level / event]. No money on this.",
      doneWhen: "a dated thesis and a next-day outcome sentence exist, with zero dollars at risk.",
    },
    features: [
      { title: "A lab, not a signal service", body: "No signals, no calls, no managed money." },
      { title: "Rule-accurate practice", body: "Constraints that mirror real evaluations." },
      { title: "Education only", body: "Not financial advice. Risk of loss is real." },
    ],
    dripDay: 9,
  },
  {
    slug: "privacy-pod",
    name: "Privacy-Pod",
    shortName: "Privacy-Pod",
    oneLiner:
      "Private video on hardware you own. The YouTube experience without YouTube — shared with exactly the people you choose.",
    manifesto:
      "The easy way to share video is to hand it to a company that scans it, monetizes it, recommends it to strangers, and can delete the account holding a decade of your family’s life. With Privacy-Pod, ownership is literal: the files sit on your machine, sharing is by explicit invitation, and there is no algorithm and no advertising. Nothing leaves unless you send it.",
    accent: "blush",
    category: "Private video",
    revenueModel: "Business model to be announced",
    audience:
      "Privacy-conscious parents and grandparents sharing family video without feeding an algorithm, and small organizations hosting internal training that doesn’t belong on a public platform.",
    pricing: [
      { name: "Free setup guide", note: "Start here — how to run your own private library" },
      {
        name: "Private library",
        note: "Family videos, trainings, and kids’ content on your own hardware",
      },
      {
        name: "Invite-only sharing",
        note: "Share single videos or whole channels with exactly who you choose",
      },
    ],
    cta: {
      label: "Get the free setup guide",
      joinedLabel: "On the list",
      note: "Join the list for the free setup guide.",
    },
    howItWorks: [
      { step: "Set up at home", body: "A locally hosted library on hardware you own." },
      { step: "Upload", body: "Family videos, trainings, kids’ content." },
      {
        step: "Invite",
        body: "Share a video or a whole channel with exactly the people you choose — no one else.",
      },
    ],
    firstWeek: {
      minutes: 35,
      physical: false,
      where: "YouTube Studio / the folder on your disk",
      steps: [
        "List your last five public videos as URLs in a Doc. Next to each: do you have the master file, or only the upload?",
        "Download any master you do not have (YouTube Studio → Content → Download). Put them in one folder named “mine.”",
        "Write the names of the people you actually want to share with. One line each.",
        "Join this list for the free setup guide. Your hardware, your library, invite-only sharing.",
      ],
      script:
        "I’m moving our family videos off the recommendation casino. I have the masters. Only [names] get an invite. That’s the whole brief.",
      doneWhen: "five URLs, a “mine” folder with masters, and a short invite list written down.",
    },
    features: [
      { title: "No algorithm", body: "No recommendations to strangers." },
      { title: "No advertising", body: "Your memories are not inventory." },
      { title: "Literal ownership", body: "The files sit on your machine." },
    ],
    dripDay: 4,
  },
  {
    slug: "siteforge",
    name: "SiteForge",
    shortName: "SiteForge",
    oneLiner:
      "One engine, many skins. The template engine behind the AI-Friendly System Standard™ — a working site by changing which sections are on and what the labels say.",
    manifesto:
      "Website builders sell blank canvases and monthly rent. SiteForge is one reusable architecture — navigation, hero, announcements, resources, downloads, gallery, FAQ, contact, theme settings, and one site-data.json — that ships as any product. Every improvement to the engine upgrades the whole catalog at once. Five gates govern every build: can a beginner use it, can AI update it, can it deploy fast, does it cut repetitive work, does it improve a daily workflow. Any “no” means simplify until it’s a yes.",
    accent: "sand",
    category: "Site engine",
    revenueModel: "Engine licenses + reseller partnerships",
    audience:
      "Solo operators and small organizations who need a working site this week and will never open a code editor — and the resellers and consultants who deliver client sites without hiring a developer.",
    pricing: [
      { name: "Engine license", note: "One architecture, one site-data.json, any product" },
      { name: "Reseller partner", note: "Deliver client sites without hiring a developer" },
      { name: "Skinned products", note: "ClassroomHub, Client Welcome Portal, Volunteer Hub" },
    ],
    cta: {
      label: "Join the waitlist",
      joinedLabel: "On the waitlist",
      note: "Read the docs first. We will reach out when licenses open.",
    },
    howItWorks: [
      {
        step: "Choose the sections",
        body: "Turn on what you need: hero, resources, downloads, gallery, FAQ, contact.",
      },
      { step: "Edit one file", body: "Labels and content live in a single site-data.json." },
      { step: "Deploy", body: "Fast, and updatable by AI." },
    ],
    firstWeek: {
      minutes: 40,
      physical: false,
      where: "A Google Doc published as a page, then GBP",
      steps: [
        "Create a Doc titled “[Service] in [City] [Zip].” Sentence one names the neighborhood and the zip.",
        "Three short paragraphs: who it’s for, what’s included, how to text you. Embed two of your photos.",
        "File → Share → Publish to web. Paste that URL into Google Business Profile as the website.",
        "Join this list. When SiteForge opens, this page is the brief — not a moodboard.",
      ],
      script:
        "[Service] in [neighborhood], [zip]. Text [number] for a same-week slot. That’s the whole page.",
      doneWhen:
        "a published URL exists with the city in sentence one and is set as the GBP website.",
    },
    features: [
      {
        title: "One engine, whole catalog",
        body: "Every engine improvement upgrades every product.",
      },
      { title: "Learn once", body: "Every future product feels familiar." },
      {
        title: "Five gates",
        body: "Beginner-usable, AI-updatable, fast to deploy, less repetitive work, a better daily workflow.",
      },
    ],
    dripDay: 1,
  },
];

export function getVenture(slug: string) {
  return ventures.find((v) => v.slug === slug);
}

export const accentClass: Record<AccentKey, string> = {
  sage: "bg-sage text-accent-fg",
  steel: "bg-steel text-accent-fg",
  forest: "bg-forest text-accent-fg",
  moss: "bg-moss text-accent-fg",
  clay: "bg-clay text-accent-fg",
  teal: "bg-teal text-accent-fg",
  rose: "bg-rose text-accent-fg",
  slate: "bg-slate text-accent-fg",
  blush: "bg-blush text-accent-fg",
  sand: "bg-sand text-accent-fg",
  mist: "bg-mist text-accent-fg",
};

export const accentDot: Record<AccentKey, string> = {
  sage: "bg-sage",
  steel: "bg-steel",
  forest: "bg-forest",
  moss: "bg-moss",
  clay: "bg-clay",
  teal: "bg-teal",
  rose: "bg-rose",
  slate: "bg-slate",
  blush: "bg-blush",
  sand: "bg-sand",
  mist: "bg-mist",
};
