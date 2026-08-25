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
  pricing: { name: string; price: string; note: string }[];
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
      "The mothership. Full AI automation, agentic systems, and workflow design for people who actually ship.",
    manifesto:
      "Most agencies sell you a stack you cannot run. We design systems you can operate in thirty minutes a day — then we get out of the way.",
    accent: "sage",
    category: "Automation & agents",
    revenueModel: "Services + licensing",
    audience: "Operators, agencies, and ambitious solopreneurs",
    pricing: [
      { name: "Blueprint", price: "Free", note: "Foundry Finn, unlimited runs" },
      { name: "Operator", price: "$49/mo", note: "Workflow design + prompt library" },
      { name: "Foundry", price: "$149/mo", note: "Agent systems, custom automations" },
    ],
    howItWorks: [
      { step: "Map the work", body: "We inventory the jobs you repeat every week — intake, follow-up, content, billing." },
      { step: "Design the agents", body: "Each job gets a prompt, a trigger, and a human checkpoint. No black boxes." },
      { step: "Run the loop", body: "Thirty minutes a day. The system does the rest. You show up in person where it counts." },
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
      { title: "Agentic workflows", body: "Multi-step agents for research, outreach, and ops — scoped, logged, reversible." },
      { title: "Local-first strategy", body: "Every play is calibrated to a zip code, not a worldwide TAM slide." },
      { title: "Organic 10X", body: "Ten channels, one daily routine. No ad spend required." },
    ],
    dripDay: 7,
  },
  {
    slug: "think-tank-digital",
    name: "Think Tank Digital",
    shortName: "Digital",
    oneLiner:
      "300+ premium digital products. Bentley quality, Honda prices. Shopify, Etsy, Gumroad — already packed.",
    manifesto:
      "Digital shelves are full of junk templates. Ours are built like products: tight copy, real use, prices people will actually pay.",
    accent: "steel",
    category: "Digital products",
    revenueModel: "Product sales",
    audience: "Creators and operators who need assets yesterday",
    pricing: [
      { name: "Single", price: "$9–$29", note: "One asset, lifetime files" },
      { name: "Collection", price: "$49", note: "A full kit for one niche" },
      { name: "Vault", price: "$19/mo", note: "Everything, updated weekly" },
    ],
    howItWorks: [
      { step: "Pick a collection", body: "Niches, not noise. Each kit is built around a real local business motion." },
      { step: "Brand it in an hour", body: "Swap colors, name, and city. The structure is already done." },
      { step: "List everywhere", body: "Files are packed for Shopify, Etsy, and Gumroad. One upload, three storefronts." },
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
      doneWhen: "a zip-named one-pager exists as a PDF and a draft listing, and 10 copies are printed.",
    },
    features: [
      { title: "Ready listings", body: "Titles, bullets, and SEO copy included — not a blank Canva file." },
      { title: "Local variants", body: "Swap the city and the offer still reads as native." },
      { title: "No bloated bundles", body: "Fewer, better products. We would rather sell 300 great ones than 3,000 fillers." },
    ],
    dripDay: 3,
  },
  {
    slug: "terraform-sovereign",
    name: "TerraForm Sovereign AI",
    shortName: "TerraForm",
    oneLiner:
      "Angi's List of the AI era. Vetted AI providers for small businesses who are tired of guessing.",
    manifesto:
      "The AI marketplace is a flea market. We only list people we would hire for our own shops — with reviews, scopes, and a price you can defend.",
    accent: "forest",
    category: "Marketplace",
    revenueModel: "Marketplace commission",
    audience: "Small businesses hiring AI help",
    pricing: [
      { name: "Browse", price: "Free", note: "Search vetted providers" },
      { name: "Hire", price: "8% fee", note: "Paid by the provider on close" },
      { name: "Featured", price: "$39/mo", note: "Provider boost in local results" },
    ],
    howItWorks: [
      { step: "Tell us the job", body: "Website, automations, content, bookkeeping — scoped in plain language." },
      { step: "Meet three vetted shops", body: "We match by zip, stack, and past work. No cold inboxes." },
      { step: "Hire with a guarantee", body: "Escrow-style milestones. If they ghost, we re-match." },
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
      doneWhen: "a one-page scope exists, you are on the list, and one local first name is in your notes.",
    },
    features: [
      { title: "Human vetting", body: "No self-serve dump of 10,000 'AI experts.' Every listing is reviewed." },
      { title: "Local matching", body: "Prefer a provider who can sit in your shop. Remote is a fallback, not a default." },
      { title: "Transparent scopes", body: "Fixed deliverables, not hourly fog." },
    ],
    dripDay: 5,
  },
  {
    slug: "terrascape-oasis",
    name: "TerraScape Oasis AI",
    shortName: "TerraScape",
    oneLiner:
      "Landscaping, pools, outdoor architecture. Vetted crews, guaranteed pricing, matched to your block.",
    manifesto:
      "Outdoor work still runs on whoever answers the phone. We put real crews, real photos, and a price you can hold them to.",
    accent: "moss",
    category: "Outdoor services",
    revenueModel: "Subscription + commission",
    audience: "Homeowners and property managers",
    pricing: [
      { name: "Homeowner", price: "Free", note: "Match + guaranteed quote" },
      { name: "Season pass", price: "$29/mo", note: "Priority crews, seasonal plans" },
      { name: "Crews", price: "6% fee", note: "On completed jobs" },
    ],
    howItWorks: [
      { step: "Show the yard", body: "Photos, zip, and what you want by season — not a 14-field form." },
      { step: "Get a locked quote", body: "Two or three vetted crews. The number you see is the number you pay." },
      { step: "Schedule like a neighbor", body: "Local crews, local windows. We track the job to done." },
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
      doneWhen: "two photos, three bullets, two quotes (or two non-answers), and you’re on the list.",
    },
    features: [
      { title: "Guaranteed pricing", body: "The quote is a contract, not a conversation starter." },
      { title: "Seasonal intelligence", body: "Pools, leaves, snow, irrigation — sequenced to your climate, not a national calendar." },
      { title: "Crew reputation", body: "Before-and-afters from the same zip, not stock photos of Tuscany." },
    ],
    dripDay: 8,
  },
  {
    slug: "genesis-revitalization",
    name: "Genesis Revitalization Group",
    shortName: "Genesis",
    oneLiner:
      "New Jersey DDD adult day center. Compliance-first, AI-augmented care that still feels like a community.",
    manifesto:
      "Care is not a growth hack. We built Genesis to pass audit, hold families, and give staff tools that reduce paperwork — not replace people.",
    accent: "clay",
    category: "Community care",
    revenueModel: "Service fees (Medicaid / Medicare)",
    audience: "Families and referring agencies in New Jersey",
    pricing: [
      { name: "Day program", price: "Medicaid", note: "NJ DDD billing, no surprise invoices" },
      { name: "Family portal", price: "Included", note: "Updates, photos, care notes" },
      { name: "Agency partners", price: "Contract", note: "Referral and compliance packets" },
    ],
    howItWorks: [
      { step: "Intake with dignity", body: "ISP-aligned, paper-light. Families are not asked to retell the story five times." },
      { step: "A real day", body: "Meals, movement, skills, and community — not a television warehouse." },
      { step: "Notes that write themselves", body: "Staff capture care; AI drafts the compliance layer. Humans sign." },
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
      doneWhen: "you have walked the floor, you know what to bring, and a named person is on your notes.",
    },
    features: [
      { title: "Compliance-first", body: "Built around NJ DDD, not bolted on after a citation." },
      { title: "AI for paperwork", body: "Progress notes, attendance, and billing packets — drafted, never auto-sent." },
      { title: "Family-visible", body: "A portal that shows the day, not a black hole between drop-off and pickup." },
    ],
    dripDay: 6,
  },
  {
    slug: "clientflow",
    name: "ClientFlow AI",
    shortName: "ClientFlow",
    oneLiner:
      "AI-powered CRM for solopreneurs. Intake, follow-ups, pipeline, and invoicing — without a sales team attached.",
    manifesto:
      "CRMs were built for 40-person sales orgs. ClientFlow is built for one person who still has to do the work.",
    accent: "teal",
    category: "SaaS / CRM",
    revenueModel: "SaaS",
    audience: "Solopreneurs and two-person shops",
    pricing: [
      { name: "Starter", price: "$0", note: "50 contacts, basic pipeline" },
      { name: "Pro", price: "$29/mo", note: "Unlimited contacts, AI follow-ups, invoicing" },
      { name: "Desk", price: "$59/mo", note: "Shared inbox + two seats" },
    ],
    howItWorks: [
      { step: "Catch the lead", body: "Forms, voicemail, Instagram DMs — they land in one queue." },
      { step: "Follow up like a human", body: "AI drafts. You send. Cadences stop the moment they reply." },
      { step: "Get paid", body: "Estimate to invoice to receipt, without exporting a CSV." },
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
      doneWhen: "every name from the week is in four stages with a date, and one saved reply exists.",
    },
    features: [
      { title: "Intake that listens", body: "A three-question form, not a 40-field monster." },
      { title: "Pipeline you can see", body: "New, talking, booked, paid. That is the whole board." },
      { title: "Invoices included", body: "No QuickBooks round-trip for a $180 job." },
    ],
    dripDay: 2,
  },
  {
    slug: "ancestry-speaks",
    name: "My Ancestry Speaks",
    shortName: "Ancestry",
    oneLiner:
      "AI-powered ancestry preservation. Genealogy data becomes a living narrative your family will actually hear.",
    manifesto:
      "Trees are not stories. We take the names, the passenger lists, the photographs, and we make them speak — in the voice of the people who lived them.",
    accent: "rose",
    category: "Heritage",
    revenueModel: "Subscription",
    audience: "Families preserving oral and archival history",
    pricing: [
      { name: "Listener", price: "Free", note: "One story, one branch" },
      { name: "Archive", price: "$12/mo", note: "Unlimited stories, voice, photos" },
      { name: "House", price: "$29/mo", note: "Shared family vault + print book" },
    ],
    howItWorks: [
      { step: "Bring what you have", body: "A GEDCOM, a shoebox of photos, or a voice memo from an aunt." },
      { step: "We write the life", body: "A narrative, not a database dump. Cited, editable, honest about gaps." },
      { step: "They speak", body: "Optional voice. Print a book. Share a private link at the reunion." },
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
      doneWhen: "a 10-minute memo exists, three sourced facts are written down, and you are on the list.",
    },
    features: [
      { title: "Living narratives", body: "Chapters, not nodes. People read them on a Sunday." },
      { title: "Source-true", body: "Every claim can be opened. We do not invent grandparents." },
      { title: "Voice optional", body: "A reading in a family voice — never a cartoon narrator." },
    ],
    dripDay: 11,
  },
  {
    slug: "terraedutainment",
    name: "TerraEduTainment AI",
    shortName: "EduTainment",
    oneLiner:
      "Family-friendly education. Failure-first thinking for the next generation — curiosity over compliance.",
    manifesto:
      "School taught people to fear being wrong. We teach the opposite: try, break it, notice, try again. That is how operators are made.",
    accent: "slate",
    category: "Education",
    revenueModel: "Subscription",
    audience: "Families and after-school programs",
    pricing: [
      { name: "Kitchen table", price: "$9/mo", note: "One learner, weekly missions" },
      { name: "Household", price: "$19/mo", note: "Up to four learners" },
      { name: "Studio", price: "$49/mo", note: "Classroom / co-op license" },
    ],
    howItWorks: [
      { step: "A weekly mission", body: "Build, write, or fix something real. No worksheet graveyard." },
      { step: "Fail on purpose", body: "The first attempt is supposed to break. The lesson is in the repair." },
      { step: "Show the work", body: "A short film, a sketch, a shop project — evidence, not a grade." },
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
      { title: "Failure-first", body: "We score recovery, not perfection." },
      { title: "Family-safe", body: "No comment sections. No stranger chat. Parents see everything." },
      { title: "Hands, not just screens", body: "Half the missions leave the laptop. That is the point." },
    ],
    dripDay: 10,
  },
  {
    slug: "simutrade",
    name: "SimuTrade Labs",
    shortName: "SimuTrade",
    oneLiner:
      "Trading simulation and analytics. Real data, zero risk. Built for universities and people who want to learn without lighting money on fire.",
    manifesto:
      "Paper trading is usually a toy. SimuTrade is a lab: real tapes, real slippage, no profit motive on your losses.",
    accent: "mist",
    category: "Markets / education",
    revenueModel: "Subscription at infrastructure cost",
    audience: "Students, universities, and self-taught traders",
    pricing: [
      { name: "Lab", price: "$9/mo", note: "Priced at infra. We are not your broker." },
      { name: "Cohort", price: "$6/seat", note: "University and club licenses" },
      { name: "Research", price: "At cost", note: "Historical + live data pipes" },
    ],
    howItWorks: [
      { step: "Pick a market", body: "Equities, futures, FX — replay or paper-live." },
      { step: "Run the book", body: "Fills include spread and slippage. No fantasy fills." },
      { step: "Review like a desk", body: "Journal, heatmaps, and a post-trade that does not flatter you." },
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
      { title: "Zero-risk capital", body: "You cannot withdraw what you never deposited." },
      { title: "Honest fills", body: "If the tape would have missed you, we miss you." },
      { title: "Classroom-ready", body: "Cohorts, assignments, and a professor view." },
    ],
    dripDay: 9,
  },
  {
    slug: "yourspace",
    name: "YourSpace",
    shortName: "YourSpace",
    oneLiner:
      "Personal YouTube. Self-hosted, locally run. Your content, your rules, no recommendation casino.",
    manifesto:
      "You do not owe a platform your archive. YourSpace is a house for video you own — hosted on infrastructure you control.",
    accent: "blush",
    category: "Video hosting",
    revenueModel: "Subscription",
    audience: "Creators who want ownership more than virality",
    pricing: [
      { name: "Porch", price: "$8/mo", note: "50 GB, custom domain" },
      { name: "House", price: "$18/mo", note: "500 GB, members, RSS" },
      { name: "Block", price: "$39/mo", note: "2 TB, team library" },
    ],
    howItWorks: [
      { step: "Bring the files", body: "Upload, or point us at a folder you already keep." },
      { step: "Your player, your site", body: "Embed anywhere. No follow-us-or-else interstitial." },
      { step: "Keep the keys", body: "Export is a button, not a support ticket." },
    ],
    firstWeek: {
      minutes: 35,
      physical: false,
      where: "YouTube Studio / the folder on your disk",
      steps: [
        "List your last five public videos as URLs in a Doc. Next to each: do you have the master file, or only the upload?",
        "Download any master you do not have (YouTube Studio → Content → Download). Put them in one folder named “mine.”",
        "Write the custom domain you want, even if you have not bought it. One line.",
        "Join this list. Export is the point. We will not be a second landlord.",
      ],
      script:
        "I’m moving the archive off the recommendation casino. I have the masters. The domain will be [name]. That’s the whole brief.",
      doneWhen: "five URLs, a “mine” folder with masters, and a domain name written down.",
    },
    features: [
      { title: "No algorithm", body: "People watch because they meant to. That is a feature." },
      { title: "Self-hosted option", body: "Run it on your box. We are a convenience, not a lock." },
      { title: "Members, not ads", body: "If you charge, you keep it. We do not run a marketplace on your back." },
    ],
    dripDay: 4,
  },
  {
    slug: "siteforge",
    name: "SiteForge",
    shortName: "SiteForge",
    oneLiner:
      "AI web app builder. Deploy to your own infra. No vendor lock-in, no $12,000 agency invoice.",
    manifesto:
      "Agencies sell you a site you cannot touch. SiteForge builds a site you can keep — code, hosting, and the keys.",
    accent: "sand",
    category: "Web builder",
    revenueModel: "Subscription",
    audience: "Operators who need a real site, not a brochure they rent",
    pricing: [
      { name: "Forge", price: "$19/mo", note: "One site, export anytime" },
      { name: "Yard", price: "$39/mo", note: "Three sites + custom domain" },
      { name: "Shop", price: "$59/mo", note: "Apps, auth, and your own database" },
    ],
    howItWorks: [
      { step: "Describe the job", body: "A landing page, a booking flow, a directory. Plain language." },
      { step: "Watch it stand up", body: "We generate the app, not a locked theme. You can read the files." },
      { step: "Deploy where you want", body: "Our hosting, or yours. Leaving is supposed to be easy." },
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
      doneWhen: "a published URL exists with the city in sentence one and is set as the GBP website.",
    },
    features: [
      { title: "Real code", body: "Export a repo. No hostage themes." },
      { title: "Anti-agency", body: "Days, not quarters. You stay in the loop." },
      { title: "Own the infra", body: "Domain, database, and deploys you can point somewhere else." },
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
