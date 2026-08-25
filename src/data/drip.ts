import { getVenture } from "./ventures";

export type DripDay = {
  day: number;
  subject: string;
  reminder: string;
  physical: boolean;
  body: string;
  minutes: number;
  where: string;
  steps: string[];
  script: string;
  doneWhen: string;
  checklist: string[];
  ventureSlug: string;
};

export const dripDays: DripDay[] = [
  {
    day: 1,
    subject: "Register the business. Today.",
    reminder: "File the name. Get the EIN. Put the papers in a folder.",
    physical: true,
    minutes: 75,
    where: "Secretary of State business search, then IRS.gov EIN Assistant, then a credit union",
    body: "A plan that stays in a tab is a hobby. Walk into the county clerk, or file online if your state allows it, and get a real name on a real piece of paper. That one act turns the rest of this sequence from advice into a schedule.",
    steps: [
      "Open your state’s Secretary of State business-entity search. Type the working name. If it is taken, add the neighborhood or the craft (“Passyunk Pressure,” “Fishtown Bookkeeping”). Screenshot the “available” result.",
      "Search the same name as a .com (or a clean .ai). If it is under $15, buy it. If not, take the .com of the geographic variant. Do not sit on five domains.",
      "File the entity: LLC articles of organization if you want a liability shield; a county DBA / trade name if the budget is under $500 and you are testing. Pay the fee. Save the confirmation PDF.",
      "Go to IRS.gov, search “Apply for an Employer Identification Number (EIN) online,” and complete the EIN Assistant (about 10 minutes, no employees, sole owner). Save the confirmation letter.",
      "Walk into a local credit union or community bank with the EIN letter, the filing receipt, and a photo ID. Open a free business checking account. Photograph the debit card and put it in the same folder as the PDFs.",
    ],
    script:
      "I’m opening a local service business, one owner, no employees yet. I have the EIN confirmation and the state filing. I need a free business checking account and a debit card today.",
    doneWhen:
      "a folder (paper or Drive) holds the name search, domain receipt, filing confirmation, EIN letter, and a photo of the business debit card.",
    checklist: [
      "Name is free in the state and as a domain",
      "LLC or DBA filed",
      "EIN confirmation saved",
      "Business checking open",
    ],
    ventureSlug: "siteforge",
  },
  {
    day: 2,
    subject: "Google already thinks you exist. Prove it.",
    reminder: "Set up your Google Business Profile before you post anything else.",
    physical: true,
    minutes: 50,
    where: "business.google.com, then outside with a phone camera",
    body: "Local work is won on the map. A complete GBP with photos of the actual shop, the actual van, the actual face — that is the highest-leverage free asset you will build this month.",
    steps: [
      "Open business.google.com. Sign in with a Gmail you will keep. Click “Manage now” / “Add your business.” Enter the legal or DBA name from day 1, the real category (the thing a neighbor would type), and the service-area zip — not a fake storefront if you do not have one.",
      "Add the phone you actually answer. Hours you will keep. The city and zip in the description’s first sentence: “Pressure washing in 19148 — houses, walkways, and storefronts.”",
      "Go outside. Photograph: the van or kit, a close-up of the work, the block, and your face. No stock. Upload 8–12 photos. Set the best work photo as the cover, your face as the profile.",
      "Turn on Messaging. Add the services list with the prices you will actually quote. Create one Google Post: two sentences + a photo + “Text this number.”",
      "Text one person who already knows the work: “Google is going to email you a review link. Two sentences is enough. Thank you.” Send it before you put the phone down.",
    ],
    script:
      "Hey — I filed the business yesterday and the Google listing is up. If I send you the review link, would you write two sentences about the work I did at your place? Totally fine if not.",
    doneWhen:
      "the listing shows hours, a real phone, 8+ of your photos, one post, and a review request is in someone’s texts.",
    checklist: [
      "GBP created or claimed",
      "Hours, service area, real phone",
      "8–12 local photos",
      "One review asked for",
    ],
    ventureSlug: "clientflow",
  },
  {
    day: 3,
    subject: "Three channels. Not ten yet.",
    reminder: "Stand up Instagram, Facebook, and one neighborhood surface.",
    physical: false,
    minutes: 45,
    where: "Instagram, Facebook Pages, Nextdoor (or Marketplace)",
    body: "The 10X model only works if the first three exist. Open the accounts. Use the same name, the same photo, the same one-line offer. Consistency is the brand until the brand is famous.",
    steps: [
      "Instagram: switch to a Professional account. Username = the GBP name, no extra underscores. Bio: one-line offer + zip + the same phone. Profile photo = the GBP face photo. Link in bio = the Google listing or the site if you have one.",
      "Facebook: create a Page (not a profile). Same name, same photo, same about sentence. Under Settings, add the phone and the service city. Join three local groups — neighborhood, buy/sell, small business. Do not post the offer yet. Introduce yourself as a resident.",
      "Nextdoor: claim the business page for your neighborhood, or create a Marketplace profile using the same photo. Set the service radius to your zip plus the two touching zips.",
      "Write the one-line offer on paper: “[Service] for [neighborhood] — [proof or price]. Text [number].” Paste it into all three bios. If it does not fit, cut words, not the zip.",
      "Save the three logins in one notes file named “channels.” Tomorrow you will post. Today they just have to exist and match.",
    ],
    script:
      "Hi neighbors — I live in [neighborhood] and I just opened a small [service] shop. Not selling in this post. If you ever need [job], I’m around. Name’s [name].",
    doneWhen:
      "Instagram, Facebook Page, and Nextdoor (or Marketplace) all show the same name, face, and one-line offer.",
    checklist: [
      "Instagram professional account",
      "Facebook page + 3 local groups",
      "Nextdoor or Marketplace profile",
      "Same one-line offer everywhere",
    ],
    ventureSlug: "think-tank-digital",
  },
  {
    day: 4,
    subject: "Post something true.",
    reminder: "One piece of content today. A photo of the work, a sentence of proof.",
    physical: true,
    minutes: 35,
    where: "The actual job, van, or kitchen table — then all three channels",
    body: "Do not wait for a content calendar. Take a photo of the actual job, the actual setup, the actual street. Write two sentences. Publish. The algorithm is not the customer. The neighbor is.",
    steps: [
      "Stand where the work happens. Take one horizontal photo (for Google / Facebook) and one vertical (for Instagram). The subject is the work or the street, not a logo mockup.",
      "Write the caption in notes first, not in the app: sentence 1 = what you did and where (“Finished a walkway on Wolf Street, 19148”). Sentence 2 = who it’s for + the ask (“Houses in South Philly — text [number] for a same-week slot”).",
      "Post the photo + caption to Instagram, the Facebook Page, and Nextdoor/Marketplace. Same words. Do not resize into a carousel of quotes.",
      "On Facebook, leave the Page. Go into the three groups as yourself. Comment on five local posts — a recommendation, a welcome, a “I know a guy for that” only if you are that guy. No links.",
      "Reply to every comment within an hour. If nobody comments, text the photo to two people who already like you and ask them to comment as humans.",
    ],
    script:
      "Finished a [job] on [street] this morning. [Neighborhood] houses — I have two slots this week. Text [number] and I’ll walk the job the same day.",
    doneWhen:
      "the same true photo is live on all three channels with the zip in the caption, and you have commented on five local posts as a person.",
    checklist: [
      "Photograph one real thing",
      "Caption names the zip or street",
      "Posted to all three channels",
      "Five local comments as a person",
    ],
    ventureSlug: "yourspace",
  },
  {
    day: 5,
    subject: "Walk into three businesses.",
    reminder: "Physical presence beats 500 online applications.",
    physical: true,
    minutes: 90,
    where: "Printer, then three complementary shops within 10 minutes of your zip",
    body: "Print a one-pager. Put on shoes. Introduce yourself to three businesses that sit next to your customer. Leave the paper. Get a name. Follow up tomorrow. This is the whole game.",
    steps: [
      "On one letter-size page: name, one-line offer, three bullets of proof, the phone, the Google short link, and the neighborhood. No stock photography. Print 10 copies at a library, pharmacy, or home printer.",
      "Pick three complementary businesses — the ones whose customers already need you (a detailer if you wash, a realtor if you stage, a salon if you do lashes). Write the three addresses before you leave.",
      "Walk in between 10:00 and 11:30 or 2:00 and 3:30. Ask for the owner or manager by role, not “whoever.” Hands free of the phone. Leave two flyers.",
      "Before you start the car, write in your notes: shop name, person’s first name, what they actually said, and the follow-up date (tomorrow).",
      "Same day, send the thank-you text. Do not attach a PDF. One sentence + your name + the thing you left.",
    ],
    script:
      "Hi — I’m [name]. I run [offer] here in [neighborhood]. I printed a one-pager; I’m not pitching a meeting. If a customer ever asks, you have my number. What’s your name?",
    doneWhen:
      "three first names, three shop names, and three thank-you texts are in your notes — not just flyers on a counter.",
    checklist: [
      "10 one-pagers printed",
      "Three complementary shops visited",
      "First names written down",
      "Thank-you texts sent the same day",
    ],
    ventureSlug: "terraform-sovereign",
  },
  {
    day: 6,
    subject: "Catch the names.",
    reminder: "Stand up the free CRM. Every name from this week goes in it.",
    physical: false,
    minutes: 40,
    where: "ClientFlow starter (or a single Google Sheet if you have not joined yet)",
    body: "A notebook is a start. A list you can follow up from is a business. Put every person you met, every commenter, every email into the pipeline. If it is not in the list, it did not happen.",
    steps: [
      "Open ClientFlow on the free starter, or a Sheet with columns: Name, Where we met, Phone, Stage, Follow-up date, Notes. Stages are only: New / Talking / Booked / Paid.",
      "Enter every human from days 1–5: the review person, the three shop contacts, anyone who commented, anyone who texted. If you do not have a phone, put the channel they used.",
      "Set a follow-up date on each row. Shop contacts: tomorrow. Reviewer: a week after they post. Commenters: do not follow up unless they asked.",
      "Write one saved reply you will actually send, 3–4 sentences, in the voice you used on day 5. Save it as a note titled “first reply.” You will paste, then personalize the first name and the street.",
      "Put the CRM or Sheet link on your phone’s home screen. The rule from today: a name that is not in the list does not exist.",
    ],
    script:
      "Hi [name] — [your name] from [shop / neighborhood]. Good to meet you Tuesday. If anyone asks about [job], you’ve got my number. I’ll check in next week either way.",
    doneWhen:
      "every name from the week is in New/Talking/Booked/Paid with a date, and one saved reply lives in your notes.",
    checklist: [
      "Pipeline: New / Talking / Booked / Paid",
      "Every name from days 1–5 entered",
      "Follow-up date on each",
      "One saved reply written",
    ],
    ventureSlug: "genesis-revitalization",
  },
  {
    day: 7,
    subject: "A week of content, in one sitting.",
    reminder: "Draft seven posts. Schedule them. Then go outside.",
    physical: false,
    minutes: 50,
    where: "Notes app + Instagram / Facebook scheduling (Meta Business Suite is free)",
    body: "AI is for the draft, not the voice. Generate a week. Edit until it sounds like you. Schedule. The thirty-minute daily routine starts tomorrow — today you stock the pantry.",
    steps: [
      "List seven true things you can photograph this week: a tool, a street, a before/after, a receipt, a truck, a finished edge, your hands. If you do not have seven jobs, photograph the kit and the block. Truth beats volume.",
      "For each, write a two-sentence caption in the day-4 shape (what + where, then who + ask). Put the zip or a street name in every one. Paste into a note titled “week 1.”",
      "If you use Finn / Grok to draft, paste this: “Rewrite in my voice. Two sentences. Name the neighborhood. No hashtags over three. No ‘excited to announce.’” Then cut anything you would not say out loud.",
      "Schedule all seven in Meta Business Suite (Facebook + Instagram together) at 11:00 local, one per day. Nextdoor you will post the same morning by hand — it does not like scheduled filler.",
      "Save three prompts in the same note: (1) rewrite a caption, (2) draft a follow-up text from a CRM row, (3) turn a job photo into a Google Post. You will reuse them for thirty minutes a day, starting tomorrow.",
    ],
    script:
      "Rewrite this in a calm local voice. Two sentences. Put [neighborhood] in sentence one. End with a text-to-[number] ask. No hashtags, no emojis, no ‘we’re thrilled.’",
    doneWhen:
      "seven captions exist, seven posts are scheduled, and three prompts are saved where you will find them tomorrow.",
    checklist: [
      "7 photo + caption drafts",
      "Each names a street or zip",
      "Scheduled on IG + Facebook",
      "3 reusable prompts saved",
    ],
    ventureSlug: "think-tank-solutions",
  },
  {
    day: 8,
    subject: "Make the map tell the truth.",
    reminder: "Local SEO is photos, NAP consistency, and one real page per service.",
    physical: false,
    minutes: 45,
    where: "GBP, Instagram, Facebook, and your site (SiteForge or a Google Doc published as a page)",
    body: "Same name, same address, same phone — everywhere. A service page for the thing you actually sell. A photo of the block, not a stock skyline. That is local SEO. The rest is folklore.",
    steps: [
      "Write the NAP on paper: Name, Address (or “Serving [zip]”), Phone. Open GBP, Instagram, Facebook, Nextdoor, and the site. Make all five match that paper. Fix any extra words in the name.",
      "Create one service page (SiteForge, or a Google Doc titled “[Service] in [City] [Zip]”). First sentence: “[Service] in [neighborhood], [zip].” Then three short paragraphs: who it’s for, what’s included, how to text you. Embed two of your photos.",
      "Add three FAQs a neighbor would ask (“Do you come to [neighborhood]?” “What’s the smallest job?” “How fast can you start?”). Answer in one sentence each.",
      "In GBP, add that page as the website. Publish a Google Post linking to it. Ask the day-2 reviewer for a second review if they already wrote one — or ask a second person if they did not.",
      "Search Google for “[service] [neighborhood]” in an incognito window. Screenshot whatever appears. You will not rank today. You now have a baseline.",
    ],
    script:
      "Quick one — if you already wrote a Google review, thank you. A second sentence about the neighborhood helps more than people think. Here’s the link again: [short link].",
    doneWhen:
      "NAP matches in five places, one service page exists with the city in sentence one, and you have an incognito screenshot of the search.",
    checklist: [
      "NAP identical everywhere",
      "One service page with the city in sentence one",
      "Three neighbor FAQs",
      "Second review asked",
    ],
    ventureSlug: "terrascape-oasis",
  },
  {
    day: 9,
    subject: "Give people a reason to send you people.",
    reminder: "Launch a referral that a real person can explain in one sentence.",
    physical: true,
    minutes: 40,
    where: "CRM + the three shops from day 5",
    body: "$20 off, a free add-on, a handwritten thank-you — pick one. Tell the three businesses you walked into. Tell the people already in the CRM. Referrals are a conversation, not a software feature.",
    steps: [
      "Pick one offer you can actually deliver: “$20 off for you when a neighbor books,” or “I wash the extra walkway free,” or a handwritten note plus a $10 coffee card. Write it in one sentence a stranger could repeat.",
      "Add that sentence to the one-pager (reprint 5) and to the saved reply from day 6. Same words both places.",
      "Text everyone in Talking or Paid: the sentence + “no code, just tell me their name.” Do not send it to people who only commented.",
      "Walk back into the three shops from day 5. Leave two new flyers. Say the sentence out loud. If the person from Tuesday is not there, say it to whoever is at the counter and write that name down too.",
      "In the CRM, add a field or column “Referred by.” The first time someone sends you a person, you fill it in the same hour and send the thank-you you promised.",
    ],
    script:
      "If you send me a neighbor and they book, you get [offer]. No app, no code — just text me their name. I’m leaving two extra flyers at the counter.",
    doneWhen:
      "the one-sentence offer is on the flyer, in the saved reply, in the CRM texts, and on three counters.",
    checklist: [
      "One-sentence referral offer",
      "Added to flyer + saved reply",
      "Texted to people who already said yes",
      "Five cards left at day-5 shops",
    ],
    ventureSlug: "simutrade",
  },
  {
    day: 10,
    subject: "Look at the numbers without flinching.",
    reminder: "Profile views, calls, DMs, walk-ins. Four numbers. Write them down.",
    physical: false,
    minutes: 25,
    where: "GBP Insights, Instagram Professional dashboard, CRM, your notes from day 5",
    body: "If you cannot see the funnel, you will start buying ads to soothe the anxiety. Do not. Write the four numbers. Keep what moved. Kill what did not. Tomorrow you go live anyway.",
    steps: [
      "GBP Insights: write down views and calls (or direction requests) for the last 7 days. If Insights is empty, write “0” — that is still a number.",
      "Instagram Professional dashboard: reach and DMs. Facebook Page: reach. One line each. Do not screenshot vanity graphs.",
      "CRM: count New, Talking, Booked, Paid. Write the four counts. If Paid is 0, that is the honest starting line, not a failure.",
      "Walk-ins / street: how many of the three shops replied, even “not now.” Write that as a fifth tally in the margin.",
      "One sentence in the same note: “Next week I will do more of ___ because ___ moved.” If nothing moved, the sentence is “I will walk into three new shops and post daily.” Put the note where you will see it Monday.",
    ],
    script: "",
    doneWhen:
      "a single note holds GBP views/calls, IG reach/DMs, CRM counts, and one sentence about next week.",
    checklist: [
      "GBP views and calls written down",
      "Instagram reach and DMs",
      "CRM: new / talking / booked / paid",
      "One sentence for next week",
    ],
    ventureSlug: "terraedutainment",
  },
  {
    day: 11,
    subject: "You are live. Here is what is next.",
    reminder: "The plan is a starting gun. Keep the thirty-minute routine. Keep walking in.",
    physical: true,
    minutes: 40,
    where: "Calendar, CRM, one new shop on the same corridor as day 5",
    body: "Eleven days is enough to exist. It is not enough to be known. Keep the GBP fresh. Keep the list warm. Keep showing up on the block. The compounding starts now — and the rest of the Think Tank is here when a tool would help.",
    steps: [
      "Open your calendar. Create a 30-minute event, 7 days, same time (early, before jobs). Title: “Finn routine.” Sub-tasks: one photo, one follow-up, one GBP check. Invite only yourself.",
      "Send five CRM follow-ups using the saved reply. Personalize the first name and one detail from your notes. Mark the date you will follow up next. Do not write a new essay per person.",
      "Walk into one new complementary business on the same corridor as day 5. Same script. New first name in the CRM before you leave the curb.",
      "Tell one person the story in two sentences: “I registered, I put the shop on Google, I walked into three businesses, I have a list.” Not a pitch. A fact. Ask them who else should hear it.",
      "Open the Think Tank venture that matches the bottleneck (SiteForge if you still have no page, ClientFlow if the list is a mess, Solutions if the 30 minutes has no prompts). Join that list only. Then close the laptop.",
    ],
    script:
      "I spent eleven days making this real — name, Google, three shops, a list. I’m live in [neighborhood]. Who do you know that already complains about [problem]?",
    doneWhen:
      "seven 30-minute blocks are on the calendar, five follow-ups are sent, one new shop is in the CRM, and one person has heard the story.",
    checklist: [
      "Seven 30-minute blocks on the calendar",
      "One new shop this week",
      "Five CRM follow-ups sent",
      "The story told to one person",
    ],
    ventureSlug: "ancestry-speaks",
  },
];

export function dripForDay(day: number) {
  return dripDays.find((d) => d.day === day);
}

export function dripVenture(day: DripDay) {
  return getVenture(day.ventureSlug);
}
