import type { BusinessPlan } from "@/lib/plan-types";

/** Public sample so anyone can read click-by-click implementation before generating. */
export const samplePlan: BusinessPlan = {
  title: "Passyunk Pressure — South Philadelphia exterior wash",
  city: "Philadelphia",
  state: "Pennsylvania",
  zip: "19148",
  niche: "Residential & storefront pressure washing",
  executiveSummary: {
    headline:
      "A one-van wash shop for East Passyunk, Girard Estate, and Pennsport row homes — booked by text, not by ads.",
    localMarketSize:
      "ZIP 19148 is dense South Philadelphia row-home stock (roughly 40k residents, median household income in the mid-$50ks). A conservative take: 8,000 owner-occupied facades and 600 storefronts within a 15-minute walk. At 12 jobs/week × $180 average ticket, a solo operator clears ~$8–10k/month before soap and diesel — without leaving the zip.",
    opportunity:
      "National vans (House Washerz, Rolling Suds, Eclipse) sell citywide and look like stock photos. Neighbors still hire whoever the block group tags. A named local with a complete Google listing, a real face, and a one-pager on three counters wins the street that the $400 Angi leads never reach.",
  },
  marketValidation: {
    demographics:
      "East Passyunk / Girard Estate / Pennsport: owner-occupiers 30–65, mixed Italian-American long-timers and newer professional households. Housing is brick and masonry — perfect for soft-wash, not a 4000 PSI tourist act. Storefronts on East Passyunk Avenue want Sunday-morning clean glass and sidewalks before brunch.",
    pricingGaps:
      "Citywide quotes run $250–$450 for a full facade and are slow to book. Nobody on the 19148 map publishes a same-week $129 walkway / $219 facade menu. That is the hole: transparent local prices, text-to-book, photos of THIS block.",
    competitors: [
      {
        name: "House Washerz Power Washing",
        weakness: "Citywide brand, thin local photos, no street-level presence on Passyunk.",
        pricing: "Quote-only, typically $250+",
      },
      {
        name: "Rolling Suds of South Philadelphia",
        weakness: "Franchise voice. Neighbors cannot name a person.",
        pricing: "Package pricing, not zip-specific",
      },
      {
        name: "City PressWash (2541 S 9th St)",
        weakness: "Local, but the listing is a phone number. Few recent photos, no menu.",
        pricing: "Call for price",
      },
      {
        name: "J&J Power Wash / Eclipse Soft Wash",
        weakness: "Cover Greater Philly and South Jersey. You will not see them on Wolf Street.",
        pricing: "Premium / quote-driven",
      },
    ],
  },
  businessModel: {
    rationale:
      "Three named offers, no hourly fog. Price to 19148 incomes: a walkway a neighbor will text about tonight, a facade they can compare to the $400 citywide vans, and a storefront weekly that pays the soap bill.",
    tiers: [
      {
        name: "Walkway",
        price: "$129",
        includes: "Front steps + walk + splash zone. Same-week slot. Photo after.",
      },
      {
        name: "Facade",
        price: "$219",
        includes: "Front brick/masonry + stoop + sidewalk to the curb. 19148 row homes.",
      },
      {
        name: "Storefront week",
        price: "$89/wk",
        includes: "Glass, sidewalk, gum. Sunday or Monday before open. 8-week minimum.",
      },
    ],
  },
  targetCustomer: {
    persona:
      "Maria, 52, owns a 19148 row home on a block with a group chat. She already asked the chat ‘anyone know a washer?’ twice this spring. She will text a number if the photo looks like her street, not a mansion in Chestnut Hill.",
    communities: [
      "East Passyunk Crossing civic / Facebook group",
      "Pennsport neighbors",
      "Girard Estate residents association",
      "East Passyunk Avenue Business Improvement District merchants",
      "South Philly moms / buy-sell groups",
    ],
    locations: [
      "East Passyunk Avenue between Tasker and McKean",
      "Singo’s / Stogie Joe’s / local coffee — merchant counters",
      "Capitolo Playground Saturday mornings",
      "Acme at Broad & Snyder parking lot (van photo, not flyering cars)",
      "Woolford / Moyamensing residential blocks at 10:00–11:30",
    ],
  },
  growthStrategy: {
    overview:
      "Ten organic channels. Zero ad spend. The person who walks East Passyunk with a one-pager beats the 500 who bought Angi leads. AI drafts; you still leave the house.",
    channels: [
      {
        name: "Google Business Profile",
        tactic: "The map listing is the storefront. Photos of 19148 brick, not stock skyline.",
        cadence: "1 post + 2 photos / week; reply to every review same day",
        firstAction:
          "Open business.google.com. Add ‘Passyunk Pressure’, category Pressure washing service, service area 19148 + 19147 + 19145. No fake storefront.",
      },
      {
        name: "Nextdoor 19148",
        tactic: "One true job photo. Caption names the street. No hashtags.",
        cadence: "2 posts / week, morning",
        firstAction:
          "Claim the business page for your neighborhood. Radius = 19148 plus the two touching zips. Post the van or kit today.",
      },
      {
        name: "East Passyunk Crossing Facebook group",
        tactic: "Introduce as a resident first. Offer only when someone asks.",
        cadence: "5 genuine comments / week, 1 helpful post / month",
        firstAction:
          "Join East Passyunk Crossing and two buy/sell groups. Comment on five posts as a neighbor. No links.",
      },
      {
        name: "Instagram",
        tactic: "Same face as GBP. Vertical job photos. Zip in bio.",
        cadence: "1 post / day for 11 days, then 4 / week",
        firstAction:
          "Switch to Professional. Username = the GBP name. Bio: ‘Facade & walkway wash · 19148 · text [number]’.",
      },
      {
        name: "Facebook Page",
        tactic: "Mirror Instagram. Join groups as a person, post as the Page only on the Page.",
        cadence: "Same as Instagram via Meta Business Suite",
        firstAction:
          "Create a Page (not a profile). Same name, same photo, same about sentence as GBP.",
      },
      {
        name: "Merchant counters",
        tactic: "One-pager on three complementary counters (detailer, realtor, florist).",
        cadence: "Walk in weekly; refresh flyers every 14 days",
        firstAction:
          "Print 10 letter-size one-pagers today. Pick three shops on East Passyunk. Walk in 10:00–11:30.",
      },
      {
        name: "Block-group chat / SMS",
        tactic: "One person who already knows the work texts two neighbors. No blast list.",
        cadence: "Ask one customer per finished job",
        firstAction:
          "Text the last person you helped: ‘If anyone on the block needs the walk done, they can text this number. $20 off for you if they book.’",
      },
      {
        name: "Service page (SiteForge or Google Doc)",
        tactic: "One URL. City in sentence one. Two of your photos. Text-to-book.",
        cadence: "Update photos weekly",
        firstAction:
          "Create a Doc titled ‘Pressure washing in South Philadelphia 19148’. First sentence names the neighborhood. Publish to web.",
      },
      {
        name: "Google reviews",
        tactic: "Ask in person after the photo. Two sentences is enough.",
        cadence: "Ask every paid job; never buy reviews",
        firstAction:
          "Text one person who already saw the work. Send the GBP short link. Do it before you put the phone down.",
      },
      {
        name: "Chamber / BID",
        tactic: "East Passyunk Avenue BID and the South Philadelphia chamber — show up, do not spray-mail.",
        cadence: "One meeting / month once you have 5 photos",
        firstAction:
          "Find the East Passyunk Avenue BID contact page. Email one sentence: you wash storefronts Sunday morning. Ask who takes merchant intros.",
      },
    ],
  },
  brand: {
    names: ["Passyunk Pressure", "19148 Wash Co.", "Stoop & Curb"],
    taglines: [
      "South Philly brick. Same-week slots.",
      "The van on your block.",
      "Walkway to curb. Text to book.",
    ],
    colors: [
      { name: "Brick wet", hex: "#5c4033", use: "Wordmark, van lettering" },
      { name: "Stoop linen", hex: "#e7e1d6", use: "One-pager ground" },
      { name: "Curb sage", hex: "#c9d4c4", use: "Accent, check marks" },
      { name: "Night iron", hex: "#121214", use: "Type on paper" },
    ],
    logoDirection:
      "A tight wordmark in a grotesque (Space Grotesk / similar). No spray-gun clip art. Optional small stoop line-drawing, one weight, no gradients.",
  },
  launchTimeline: [
    {
      day: 1,
      action: "Prove the name is free, then file it.",
      physical: false,
      minutes: 40,
      where: "https://file.dos.pa.gov — Pennsylvania Department of State",
      steps: [
        "Open file.dos.pa.gov. Search business entities for ‘Passyunk Pressure’ and two backups. Screenshot the available result.",
        "Search the same name as a .com. If it is under $15, buy it. If not, take PassyunkPressure.com or 19148Wash.com. One domain. Not five.",
        "Start a Pennsylvania LLC (or a Philadelphia DBA if the budget is under $500). Pay the fee. Save the confirmation PDF in a folder named ‘legal’.",
      ],
      doneWhen: "the folder holds a name-search screenshot, a domain receipt, and a PA filing confirmation.",
    },
    {
      day: 2,
      action: "EIN and a real checking account.",
      physical: true,
      minutes: 75,
      where: "IRS EIN Assistant, then a 19148 credit union or community bank",
      steps: [
        "Go to irs.gov, search ‘Apply for an Employer Identification Number (EIN) online,’ complete the Assistant (one owner, no employees). Save the letter.",
        "Walk into a local credit union or community bank with the EIN letter, the PA filing, and a photo ID.",
        "Open a free business checking account. Photograph the debit card. Put it in the same folder.",
      ],
      doneWhen: "the folder holds the EIN letter and a photo of the business debit card.",
    },
    {
      day: 3,
      action: "Put the shop on the map.",
      physical: true,
      minutes: 50,
      where: "business.google.com, then outside with the phone camera",
      steps: [
        "Open business.google.com. Add the legal or DBA name, category Pressure washing service, service-area zips 19148 / 19147 / 19145 — not a fake storefront.",
        "Add the phone you answer. Hours you will keep. First sentence of the description: ‘Pressure washing in 19148 — facades, walkways, and storefronts.’",
        "Photograph the van or kit, a close-up of brick, the block, and your face. Upload 8–12. Cover = best work photo. Profile = your face.",
        "Turn on Messaging. Add the three prices. Create one Google Post: two sentences + a photo + ‘Text this number.’",
      ],
      doneWhen: "the listing shows hours, a real phone, 8+ of your photos, and one post.",
    },
    {
      day: 4,
      action: "Stand up Instagram, Facebook Page, and Nextdoor.",
      physical: false,
      minutes: 45,
      where: "Instagram, Facebook Pages, Nextdoor",
      steps: [
        "Instagram Professional. Username = GBP name. Bio: one-line offer + 19148 + phone. Same face photo.",
        "Facebook Page (not a profile). Same name, photo, about. Join East Passyunk Crossing, a buy/sell group, and a small-business group. Do not pitch yet.",
        "Nextdoor: claim the business page. Radius = this zip plus two touching zips. Paste the same one-line offer into all three bios.",
      ],
      doneWhen: "all three surfaces show the same name, face, and one-line offer.",
    },
    {
      day: 5,
      action: "Post one true photo.",
      physical: true,
      minutes: 35,
      where: "The actual job, van, or stoop — then all three channels",
      steps: [
        "Take one horizontal photo (Google / Facebook) and one vertical (Instagram) of real brick or the kit. No logo mockup.",
        "Caption in notes first: sentence 1 = what + where (‘Walkway on Wolf Street, 19148’). Sentence 2 = who + ask (‘South Philly houses — text [number] for a same-week slot’).",
        "Post the same words to Instagram, the Facebook Page, and Nextdoor. Then comment on five local posts as a person. No links.",
      ],
      doneWhen: "the same true photo is live on all three channels with 19148 in the caption.",
    },
    {
      day: 6,
      action: "Print the one-pager.",
      physical: true,
      minutes: 40,
      where: "A one-page Doc, then a library / pharmacy printer",
      steps: [
        "One letter-size page: name, one-line offer, three prices, phone, Google short link, ‘19148’. No stock photography.",
        "Print 10 copies. Put them in a folder. Put the folder in the van or backpack.",
        "Write three complementary shops on paper before you leave (detailer, realtor, florist / cafe on East Passyunk).",
      ],
      doneWhen: "10 one-pagers exist and three addresses are written down.",
    },
    {
      day: 7,
      action: "Walk into three businesses.",
      physical: true,
      minutes: 90,
      where: "East Passyunk Avenue, 10:00–11:30 or 2:00–3:30",
      steps: [
        "Walk in. Ask for the owner or manager by role. Hands free of the phone. Leave two flyers.",
        "Before you start the car, write: shop name, person’s first name, what they said, follow-up date (tomorrow).",
        "Same day, send the thank-you text. One sentence + your name + the thing you left. No PDF.",
      ],
      doneWhen: "three first names, three shop names, and three thank-you texts are in your notes.",
    },
    {
      day: 8,
      action: "Catch every name in a list.",
      physical: false,
      minutes: 40,
      where: "ClientFlow starter, or a Sheet: Name / Where / Phone / Stage / Follow-up / Notes",
      steps: [
        "Stages are only New / Talking / Booked / Paid. Enter the reviewer, the three shops, anyone who commented or texted.",
        "Set a follow-up date on each row. Shop contacts: tomorrow. Reviewer: a week after they post.",
        "Write one 3–4 sentence saved reply. Title the note ‘first reply.’ Paste, then personalize first name and street.",
      ],
      doneWhen: "every name from the week is in the pipeline with a date, and one saved reply exists.",
    },
    {
      day: 9,
      action: "Stock a week of true captions.",
      physical: false,
      minutes: 50,
      where: "Notes app + Meta Business Suite (free)",
      steps: [
        "List seven true things you can photograph: a tool, a street, a before/after, a receipt, the van, a finished edge, your hands.",
        "Write two-sentence captions in the day-5 shape. Zip or street in every one. Schedule IG + Facebook at 11:00 local. Nextdoor by hand.",
        "Save three prompts: rewrite a caption; draft a follow-up from a CRM row; turn a job photo into a Google Post.",
      ],
      doneWhen: "seven captions exist, seven posts are scheduled, three prompts are saved.",
    },
    {
      day: 10,
      action: "Publish one service page and lock the NAP.",
      physical: false,
      minutes: 45,
      where: "GBP + Instagram + Facebook + Nextdoor + the page",
      steps: [
        "Write Name / Address-or-Serving-19148 / Phone on paper. Make all five surfaces match that paper.",
        "Service page first sentence: ‘Pressure washing in East Passyunk, 19148.’ Three short paragraphs + two of your photos + three neighbor FAQs.",
        "Set that page as the GBP website. Publish a Google Post to it. Search ‘pressure washing East Passyunk’ incognito and screenshot the baseline.",
      ],
      doneWhen: "NAP matches in five places and one service page exists with the city in sentence one.",
    },
    {
      day: 11,
      action: "Launch a one-sentence referral.",
      physical: true,
      minutes: 40,
      where: "CRM + the three shops from day 7",
      steps: [
        "Pick one offer you can deliver: ‘$20 off for you when a neighbor books.’ Write it in one sentence a stranger could repeat.",
        "Add that sentence to the one-pager (reprint 5) and the saved reply. Text everyone in Talking or Paid. No codes.",
        "Walk back into the three shops. Leave two new flyers. Say the sentence out loud. Add a ‘Referred by’ column in the CRM.",
      ],
      doneWhen: "the sentence is on the flyer, in the saved reply, in the texts, and on three counters.",
    },
    {
      day: 12,
      action: "Write the four numbers without flinching.",
      physical: false,
      minutes: 25,
      where: "GBP Insights, Instagram Professional, CRM, day-7 notes",
      steps: [
        "GBP: views and calls (or direction requests) for 7 days. Empty = write 0.",
        "Instagram reach and DMs. CRM counts: New / Talking / Booked / Paid. Margin: how many of the three shops replied.",
        "One sentence: ‘Next week I will do more of ___ because ___ moved.’ If nothing moved: ‘I will walk into three new shops and post daily.’",
      ],
      doneWhen: "a single note holds the numbers and one sentence about next week.",
    },
    {
      day: 13,
      action: "Second street round — three new shops.",
      physical: true,
      minutes: 80,
      where: "The same corridor as day 7, next three complementary doors",
      steps: [
        "Print 10 more one-pagers if you are out. Write three NEW addresses before you leave.",
        "Same script as day 7. New first names in the CRM before you leave the curb.",
        "Follow up yesterday’s shops with the saved reply if they have not answered.",
      ],
      doneWhen: "three new first names are in the CRM and yesterday’s shops have a follow-up.",
    },
    {
      day: 14,
      action: "You are live. Put the 30-minute routine on the calendar.",
      physical: true,
      minutes: 40,
      where: "Calendar, CRM, one person who should hear the story",
      steps: [
        "Create a 30-minute event, 7 days, same time. Title: ‘Finn routine.’ Sub-tasks: one photo, one follow-up, one GBP check.",
        "Send five CRM follow-ups using the saved reply. Personalize first name and one detail.",
        "Tell one person in two sentences: ‘I registered, I put the shop on Google, I walked into six businesses, I have a list.’ Ask who else should hear it.",
      ],
      doneWhen: "seven 30-minute blocks are on the calendar, five follow-ups are sent, and one person has heard the story.",
    },
  ],
  techStack: [
    {
      tool: "Google Business Profile",
      purpose: "The map listing. Highest-leverage free asset.",
      cost: "$0",
      setup: "business.google.com → Add your business → service area 19148.",
      steps: [
        "Open business.google.com and sign in with a Gmail you will keep.",
        "Click Add your business. Category: Pressure washing service. Service area, not a fake address.",
        "Add phone, hours, 8 photos, one post. Turn Messaging on.",
      ],
    },
    {
      tool: "Google Docs / SiteForge",
      purpose: "One service page you own.",
      cost: "$0 / $19/mo later",
      setup: "Doc titled with the city and zip. File → Share → Publish to web.",
      steps: [
        "Create a Doc named ‘Pressure washing in South Philadelphia 19148’.",
        "Sentence one names East Passyunk and the zip. Paste two of your photos.",
        "File → Share → Publish to web. Paste the link into GBP as the website.",
      ],
    },
    {
      tool: "ClientFlow starter (or one Sheet)",
      purpose: "Names, stages, follow-up dates.",
      cost: "$0",
      setup: "Columns: Name, Where, Phone, Stage, Follow-up, Notes. Stages: New/Talking/Booked/Paid.",
      steps: [
        "Open a Sheet or ClientFlow starter.",
        "Header row: Name / Where we met / Phone / Stage / Follow-up date / Notes / Referred by.",
        "Put the link on your phone home screen. A name not in the list does not exist.",
      ],
    },
    {
      tool: "Meta Business Suite",
      purpose: "Schedule Instagram + Facebook together. Free.",
      cost: "$0",
      setup: "business.facebook.com → Create post → schedule 11:00 local.",
      steps: [
        "Open business.facebook.com with the Page you created.",
        "Connect the Instagram professional account.",
        "Create post → schedule 11:00 local, one per day for the week.",
      ],
    },
    {
      tool: "IRS EIN Assistant",
      purpose: "Federal tax ID. Required for the bank.",
      cost: "$0",
      setup: "irs.gov → Apply for an EIN online → EIN Assistant.",
      steps: [
        "Search IRS.gov for ‘Apply for an Employer Identification Number (EIN) online’.",
        "Complete the Assistant: one owner, no employees, PA address.",
        "Save the confirmation letter in the legal folder.",
      ],
    },
    {
      tool: "Foundry Finn prompts",
      purpose: "Thirty-minute daily drafts. You still send them.",
      cost: "$0",
      setup: "Save the three prompts from day 9 in a note titled ‘Finn routine’.",
      steps: [
        "Create a note titled ‘Finn routine’.",
        "Paste the three prompts (caption, follow-up, Google Post).",
        "Open it at the calendar block. Edit until it sounds like you. Then send.",
      ],
    },
  ],
  aiPlaybook: {
    dailyRoutine:
      "Thirty minutes, same time, seven days. (1) One true photo. (2) One CRM follow-up using the saved reply. (3) One GBP check — hours, messages, a reply to anything new. AI drafts the caption and the text. You take the photo and you send.",
    prompts: [
      {
        title: "Caption rewrite",
        prompt:
          "Rewrite in a calm local voice. Two sentences. Put East Passyunk or 19148 in sentence one. End with a text-to-[number] ask. No hashtags, no emojis, no ‘we’re thrilled.’",
      },
      {
        title: "Follow-up text",
        prompt:
          "Draft a 3-sentence follow-up to [name] who I met at [shop] on [day]. Mention the one-pager I left. No pitch deck. Offer to wash a storefront Sunday morning if they ever need it.",
      },
      {
        title: "Google Post",
        prompt:
          "Turn this job photo into a Google Business Post. Two sentences. Name the street. Include the Walkway $129 / Facade $219 menu. Ask them to text, not call, unless they prefer.",
      },
      {
        title: "Review ask",
        prompt:
          "One text asking [name] for a two-sentence Google review. Mention the actual street we washed. Include the short link. Totally fine if not.",
      },
    ],
  },
  legal: {
    state: "Pennsylvania",
    items: [
      {
        item: "Pennsylvania LLC (or Philadelphia DBA / trade name)",
        notes:
          "File online with the Department of State. A DBA is cheaper if you are testing under $500; an LLC is the liability shield once you are on roofs and sidewalks.",
        url: "https://file.dos.pa.gov/",
        steps: [
          "Open file.dos.pa.gov and create an account.",
          "Search the entity name. If available, start a new LLC filing (or register a fictitious name).",
          "Pay the fee by card. Download the stamped confirmation into the legal folder.",
        ],
      },
      {
        item: "IRS Employer Identification Number",
        notes: "Free. Do not pay a third-party ‘EIN service.’ The only page is IRS.gov.",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
        steps: [
          "Open the official IRS EIN Assistant (linked).",
          "Legal structure = the thing you filed yesterday. Responsible party = you. No employees.",
          "Submit. Save the confirmation letter PDF the same hour.",
        ],
      },
      {
        item: "Philadelphia Commercial Activity License",
        notes:
          "Required to do business in the City of Philadelphia, even as a one-person shop working out of a van.",
        url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/get-a-commercial-activity-license/",
        steps: [
          "Open the City page. Start the Commercial Activity License application.",
          "Use the EIN and the PA filing. Business location = your home or the registered agent address — not a fake storefront.",
          "Pay the city fee. Save the license PDF. Carry a photo of it in the van.",
        ],
      },
      {
        item: "PA sales tax license (if you sell taxable extras) + general liability",
        notes:
          "Labor-only washing is often treated differently than selling product. Ask the PA Department of Revenue. Insurance: a $1M general-liability policy from a local broker — walk in, do not buy a banner ad.",
        url: "https://mypath.pa.gov/",
        steps: [
          "Open mypath.pa.gov. Search ‘sales tax license’ and read whether your mix of labor vs product is taxable.",
          "If yes, register. If no, screenshot the guidance and keep it in the legal folder.",
          "Walk into a neighborhood insurance broker with the EIN letter. Ask for a $1M GL policy for a mobile washer. Get a certificate of insurance the same week.",
        ],
      },
    ],
  },
  nextSteps: [
    {
      task: "Name search + PA filing",
      due: "Day 1",
      physical: false,
      steps: [
        "file.dos.pa.gov entity search.",
        "Buy one domain.",
        "File LLC or DBA. Save the PDF.",
      ],
      doneWhen: "confirmation PDF is in the legal folder.",
    },
    {
      task: "EIN + business checking",
      due: "Day 2",
      physical: true,
      steps: [
        "IRS EIN Assistant.",
        "Walk into a credit union with the letter and ID.",
        "Photograph the debit card.",
      ],
      doneWhen: "EIN letter and card photo exist.",
    },
    {
      task: "Google Business Profile live",
      due: "Day 3",
      physical: true,
      steps: [
        "Add the listing as a service-area business.",
        "Upload 8–12 local photos.",
        "One Google Post + Messaging on.",
      ],
      doneWhen: "a neighbor can find you on the map.",
    },
    {
      task: "Three channels matching",
      due: "Day 4",
      physical: false,
      steps: [
        "Instagram Professional.",
        "Facebook Page + three local groups.",
        "Nextdoor business page.",
      ],
      doneWhen: "same name, face, and offer on all three.",
    },
    {
      task: "First true post",
      due: "Day 5",
      physical: true,
      steps: [
        "Photograph real brick or the kit.",
        "Caption names 19148.",
        "Post to all three. Comment on five local posts.",
      ],
      doneWhen: "the photo is live and you have spoken as a person.",
    },
    {
      task: "Three merchant visits",
      due: "Day 7",
      physical: true,
      steps: [
        "Print 10 one-pagers.",
        "Walk East Passyunk 10:00–11:30.",
        "Thank-you texts the same day.",
      ],
      doneWhen: "three first names are in the notes.",
    },
    {
      task: "CRM with every name",
      due: "Day 8",
      physical: false,
      steps: [
        "Sheet or ClientFlow. Four stages only.",
        "Enter days 1–7.",
        "Write the saved reply.",
      ],
      doneWhen: "a name not in the list does not exist.",
    },
    {
      task: "Service page + NAP lock",
      due: "Day 10",
      physical: false,
      steps: [
        "NAP on paper, then five surfaces.",
        "Publish the 19148 service page.",
        "Incognito screenshot of the search.",
      ],
      doneWhen: "city is in sentence one and NAP matches.",
    },
    {
      task: "Referral sentence in the wild",
      due: "Day 11",
      physical: true,
      steps: [
        "One sentence a stranger can repeat.",
        "Text Talking/Paid.",
        "Leave flyers at the three shops.",
      ],
      doneWhen: "the sentence is on paper, in texts, and on three counters.",
    },
    {
      task: "Calendar the 30-minute loop",
      due: "Day 14",
      physical: true,
      steps: [
        "Seven repeating 30-minute blocks.",
        "Five CRM follow-ups.",
        "Tell one person the two-sentence story.",
      ],
      doneWhen: "you are live and the loop is on the calendar.",
    },
  ],
  implementation: [
    {
      phase: "Legal & banking",
      title: "Get a real name on a real piece of paper",
      why: "A plan in a tab is a hobby. The filing, the EIN, and the debit card turn the rest of this into a schedule.",
      minutes: 90,
      physical: true,
      steps: [
        "Open file.dos.pa.gov. Search ‘Passyunk Pressure’ and two backups. Screenshot available.",
        "Buy one matching domain if it is under $15.",
        "File the PA LLC (or Philadelphia DBA). Save the confirmation PDF.",
        "IRS.gov EIN Assistant — one owner, no employees. Save the letter.",
        "Walk into a 19148-area credit union with the letter, the filing, and a photo ID. Open free business checking.",
      ],
      script:
        "I’m opening a local service business, one owner, no employees yet. I have the EIN confirmation and the state filing. I need a free business checking account and a debit card today.",
      tools: ["file.dos.pa.gov", "IRS EIN Assistant", "local credit union"],
      doneWhen:
        "a folder holds the name search, domain receipt, PA confirmation, EIN letter, and a photo of the business debit card.",
    },
    {
      phase: "Google presence",
      title: "Make the map tell the truth",
      why: "Local work is won on the map. A complete GBP with photos of this block is the highest-leverage free asset you will build this month.",
      minutes: 50,
      physical: true,
      steps: [
        "business.google.com → Add your business → Pressure washing service → service area 19148 / 19147 / 19145.",
        "Phone you answer. Hours you keep. Description sentence one names 19148.",
        "Go outside. 8–12 photos: kit, brick, block, face. Cover = work. Profile = face.",
        "Messaging on. Three prices on the services list. One Google Post: two sentences + photo + ‘Text this number.’",
        "Text one person who already knows the work and ask for two sentences on the review link.",
      ],
      script:
        "Hey — I filed the business yesterday and the Google listing is up. If I send you the review link, would you write two sentences about the work I did at your place? Totally fine if not.",
      tools: ["Google Business Profile", "your camera"],
      doneWhen:
        "the listing shows hours, a real phone, 8+ of your photos, one post, and a review request is in someone’s texts.",
    },
    {
      phase: "First three channels",
      title: "Same name, same face, same one-line offer",
      why: "The 10X model only works if the first three exist and match. Consistency is the brand until the brand is famous.",
      minutes: 45,
      physical: false,
      steps: [
        "Instagram → Professional. Username = GBP name. Bio: offer + 19148 + phone.",
        "Facebook → create a Page. Same name, photo, about. Join three local groups as a resident.",
        "Nextdoor → claim the business page. Radius = this zip plus two touching zips.",
        "Write the one-line offer on paper: ‘Facade & walkway wash for 19148 — text [number].’ Paste it into all three bios.",
        "Save the three logins in a note titled ‘channels.’ Do not post the offer in groups today.",
      ],
      script:
        "Hi neighbors — I live in East Passyunk and I just opened a small wash shop. Not selling in this post. If you ever need a facade or a walkway, I’m around.",
      tools: ["Instagram", "Facebook Pages", "Nextdoor"],
      doneWhen: "Instagram, Facebook Page, and Nextdoor all show the same name, face, and one-line offer.",
    },
    {
      phase: "First in-person round",
      title: "Walk East Passyunk with a one-pager",
      why: "Physical presence beats 500 online applications. Three first names are worth more than a funnel.",
      minutes: 90,
      physical: true,
      steps: [
        "One letter-size page: name, offer, three prices, phone, Google short link, 19148. Print 10.",
        "Write three complementary shops (detailer, realtor, florist/cafe) and their addresses before you leave.",
        "Walk in 10:00–11:30. Ask for the owner or manager by role. Leave two flyers. Phone in the pocket.",
        "On the curb: shop name, first name, what they said, follow-up tomorrow.",
        "Thank-you text the same day. One sentence. No PDF.",
      ],
      script:
        "Hi — I’m [name]. I run Passyunk Pressure here in 19148. I printed a one-pager; I’m not pitching a meeting. If a customer ever asks, you have my number. What’s your name?",
      tools: ["printer", "notes app", "your shoes"],
      doneWhen: "three first names, three shop names, and three thank-you texts are in your notes.",
    },
    {
      phase: "First paid job",
      title: "Quote it, do it, photograph it, ask",
      why: "A paid job with a photo and a review request is the whole engine. Everything else is setup.",
      minutes: 120,
      physical: true,
      steps: [
        "Text two people who already know the work with the Walkway $129 / Facade $219 menu and two same-week slots.",
        "When someone says yes, confirm: address, parking, water spigot, the price in writing, the time.",
        "Do the job. Before/after from the same spot. Horizontal + vertical. Do not leave until the photos exist.",
        "On the stoop, send the Google review link. Two sentences is enough.",
        "Same day: post the after photo on all three channels with the street name. Log the job as Paid in the CRM.",
      ],
      script:
        "I have Tuesday morning or Thursday afternoon this week for a walkway at $129 or a facade at $219. If that works, text me the address and I’ll walk the job the same day I come.",
      tools: ["CRM", "GBP short link", "camera"],
      doneWhen: "money is in the business account, photos exist, a review was asked, and Paid is checked.",
    },
    {
      phase: "Weekly operating rhythm",
      title: "Thirty minutes a day, then go outside",
      why: "Eleven days is enough to exist. The compounding is a boring loop: photo, follow-up, map, street.",
      minutes: 30,
      physical: true,
      steps: [
        "Calendar: 30-minute event, 7 days, same time, titled ‘Finn routine.’ Invite only yourself.",
        "Inside the block: one photo, one CRM follow-up (paste saved reply, personalize first name), one GBP check.",
        "Twice a week, after the block: walk into one new complementary shop on the same corridor.",
        "Friday: write GBP views/calls, IG DMs, CRM counts. One sentence about next week.",
        "Join only the Think Tank list that matches the bottleneck (SiteForge if no page, ClientFlow if the list is a mess). Then close the laptop.",
      ],
      script:
        "I spent two weeks making this real — name, Google, six shops, a list. I’m live in 19148. Who do you know that already complains about a dirty facade?",
      tools: ["calendar", "CRM", "GBP Insights", "Think Tank ventures"],
      doneWhen:
        "seven 30-minute blocks are on the calendar and last week’s numbers live in one note.",
    },
  ],
};

export const SAMPLE_PLAN_META = {
  skill: "Pressure washing",
  zip: "19148",
  budget: "Under $500",
};
