import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import type { BusinessPlan, SavedPlan } from "@/lib/plan-types";

const ZIP_RE = /^\d{5}$/;

export type GenerateInput = {
  skill: string;
  zip: string;
  budget: string;
};

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = (fenced?.[1] ?? text).trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("The plan came back in an unexpected shape. Try again.");
  }
  return JSON.parse(raw.slice(start, end + 1));
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, map: (item: unknown) => T): T[] {
  return Array.isArray(v) ? v.map(map) : [];
}

function asMinutes(v: unknown, fallback = 30): number {
  if (typeof v === "number" && Number.isFinite(v)) return Math.max(5, Math.round(v));
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : fallback;
}

function stringSteps(v: unknown, fallback: string[] = []): string[] {
  const fromArray = asArray(v, (s) => asString(s)).filter(Boolean);
  if (fromArray.length) return fromArray;
  return fallback;
}

function normalizePlan(raw: unknown, zip: string): BusinessPlan {
  const p = (raw ?? {}) as Record<string, unknown>;
  const exec = (p.executiveSummary ?? {}) as Record<string, unknown>;
  const market = (p.marketValidation ?? {}) as Record<string, unknown>;
  const model = (p.businessModel ?? {}) as Record<string, unknown>;
  const customer = (p.targetCustomer ?? {}) as Record<string, unknown>;
  const growth = (p.growthStrategy ?? {}) as Record<string, unknown>;
  const brand = (p.brand ?? {}) as Record<string, unknown>;
  const ai = (p.aiPlaybook ?? {}) as Record<string, unknown>;
  const legal = (p.legal ?? {}) as Record<string, unknown>;

  return {
    title: asString(p.title, "Local business blueprint"),
    city: asString(p.city, "your city"),
    state: asString(p.state, ""),
    zip: asString(p.zip, zip),
    niche: asString(p.niche, "local service"),
    executiveSummary: {
      headline: asString(exec.headline),
      localMarketSize: asString(exec.localMarketSize),
      opportunity: asString(exec.opportunity),
    },
    marketValidation: {
      demographics: asString(market.demographics),
      pricingGaps: asString(market.pricingGaps),
      competitors: asArray(market.competitors, (c) => {
        const x = (c ?? {}) as Record<string, unknown>;
        return {
          name: asString(x.name, "Local competitor"),
          weakness: asString(x.weakness),
          pricing: asString(x.pricing),
        };
      }),
    },
    businessModel: {
      rationale: asString(model.rationale),
      tiers: asArray(model.tiers, (t) => {
        const x = (t ?? {}) as Record<string, unknown>;
        return {
          name: asString(x.name),
          price: asString(x.price),
          includes: asString(x.includes),
        };
      }),
    },
    targetCustomer: {
      persona: asString(customer.persona),
      communities: asArray(customer.communities, (x) => asString(x)),
      locations: asArray(customer.locations, (x) => asString(x)),
    },
    growthStrategy: {
      overview: asString(growth.overview),
      channels: asArray(growth.channels, (c) => {
        const x = (c ?? {}) as Record<string, unknown>;
        return {
          name: asString(x.name),
          tactic: asString(x.tactic),
          cadence: asString(x.cadence),
          firstAction: asString(x.firstAction),
        };
      }),
    },
    brand: {
      names: asArray(brand.names, (x) => asString(x)),
      taglines: asArray(brand.taglines, (x) => asString(x)),
      logoDirection: asString(brand.logoDirection),
      colors: asArray(brand.colors, (c) => {
        const x = (c ?? {}) as Record<string, unknown>;
        return {
          name: asString(x.name),
          hex: asString(x.hex, "#c9d4c4"),
          use: asString(x.use),
        };
      }),
    },
    launchTimeline: asArray(p.launchTimeline, (a) => {
      const x = (a ?? {}) as Record<string, unknown>;
      return {
        day: typeof x.day === "number" ? x.day : Number(x.day) || 0,
        action: asString(x.action),
        physical: Boolean(x.physical),
        minutes: asMinutes(x.minutes),
        where: asString(x.where),
        steps: stringSteps(x.steps),
        doneWhen: asString(x.doneWhen),
      };
    }),
    techStack: asArray(p.techStack, (t) => {
      const x = (t ?? {}) as Record<string, unknown>;
      const setup = asString(x.setup);
      return {
        tool: asString(x.tool),
        purpose: asString(x.purpose),
        cost: asString(x.cost),
        setup,
        steps: stringSteps(x.steps, setup ? [setup] : []),
      };
    }),
    aiPlaybook: {
      dailyRoutine: asString(ai.dailyRoutine),
      prompts: asArray(ai.prompts, (t) => {
        const x = (t ?? {}) as Record<string, unknown>;
        return { title: asString(x.title), prompt: asString(x.prompt) };
      }),
    },
    legal: {
      state: asString(legal.state),
      items: asArray(legal.items, (i) => {
        const x = (i ?? {}) as Record<string, unknown>;
        return {
          item: asString(x.item),
          notes: asString(x.notes),
          url: asString(x.url),
          steps: stringSteps(x.steps),
        };
      }),
    },
    nextSteps: asArray(p.nextSteps, (s) => {
      const x = (s ?? {}) as Record<string, unknown>;
      return {
        task: asString(x.task),
        due: asString(x.due),
        physical: Boolean(x.physical),
        steps: stringSteps(x.steps),
        doneWhen: asString(x.doneWhen),
      };
    }),
    implementation: asArray(p.implementation, (b) => {
      const x = (b ?? {}) as Record<string, unknown>;
      return {
        phase: asString(x.phase),
        title: asString(x.title),
        why: asString(x.why),
        minutes: asMinutes(x.minutes, 45),
        physical: Boolean(x.physical),
        steps: stringSteps(x.steps),
        script: asString(x.script),
        tools: asArray(x.tools, (s) => asString(s)).filter(Boolean),
        doneWhen: asString(x.doneWhen),
      };
    }),
  };
}

function outputText(body: Record<string, unknown>): string {
  if (typeof body.output_text === "string" && body.output_text.trim()) {
    return body.output_text;
  }
  const output = body.output;
  if (Array.isArray(output)) {
    const chunks: string[] = [];
    for (const item of output) {
      const rec = item as Record<string, unknown>;
      if (rec.type === "message" && Array.isArray(rec.content)) {
        for (const part of rec.content) {
          const p = part as Record<string, unknown>;
          if (typeof p.text === "string") chunks.push(p.text);
        }
      }
    }
    if (chunks.length) return chunks.join("\n");
  }
  const choices = body.choices as { message?: { content?: string } }[] | undefined;
  if (choices?.[0]?.message?.content) return choices[0].message.content;
  throw new Error("Empty response from the model.");
}

const SYSTEM = `You are Foundry Finn, the Super Agent of Think Tank Solutions AI.
Philosophy: For The People. Not The Gurus. Organic only. $0 ad spend. Local first.
The person who shows up physically wins over the 500 who just applied online.
Freemium everything. Tech stack may only use FREE or freemium tools (nothing over $50/mo).

Use live web search. Ground EVERY claim in the user's ZIP code: city, county, state,
median household income, named local competitors (real businesses), real Facebook groups,
real neighborhoods, real physical places (chambers, libraries, coffee shops, rec centers),
and the REAL government URLs for that state (Secretary of State, licensing board, IRS EIN).
If a fact cannot be verified, say so — never invent a competitor name or a fake URL.

This plan must be executable by a tired person on a Tuesday. Vague advice is a failure.
Every action names: where to go (URL or street), what to click or say, what to bring,
how many minutes, and what "done" looks like.
steps are commands: "Open X. Click Y. Type Z." Never slogans. Never "consider" or "you might."

Return ONLY a JSON object (no markdown) with this exact shape:
{
  "title": string,
  "city": string,
  "state": string,
  "zip": string,
  "niche": string,
  "executiveSummary": { "headline": string, "localMarketSize": string, "opportunity": string },
  "marketValidation": {
    "demographics": string,
    "competitors": [{ "name": string, "weakness": string, "pricing": string }],
    "pricingGaps": string
  },
  "businessModel": {
    "rationale": string,
    "tiers": [{ "name": string, "price": string, "includes": string }]
  },
  "targetCustomer": {
    "persona": string,
    "communities": string[],
    "locations": string[]
  },
  "growthStrategy": {
    "overview": string,
    "channels": [{ "name": string, "tactic": string, "cadence": string, "firstAction": string }]
  },
  "brand": {
    "names": string[],
    "taglines": string[],
    "colors": [{ "name": string, "hex": string, "use": string }],
    "logoDirection": string
  },
  "launchTimeline": [{
    "day": number,
    "action": string,
    "physical": boolean,
    "minutes": number,
    "where": string,
    "steps": string[],
    "doneWhen": string
  }],
  "techStack": [{ "tool": string, "purpose": string, "cost": string, "setup": string, "steps": string[] }],
  "aiPlaybook": {
    "dailyRoutine": string,
    "prompts": [{ "title": string, "prompt": string }]
  },
  "legal": {
    "state": string,
    "items": [{ "item": string, "notes": string, "url": string, "steps": string[] }]
  },
  "nextSteps": [{
    "task": string,
    "due": string,
    "physical": boolean,
    "steps": string[],
    "doneWhen": string
  }],
  "implementation": [{
    "phase": string,
    "title": string,
    "why": string,
    "minutes": number,
    "physical": boolean,
    "steps": string[],
    "script": string,
    "tools": string[],
    "doneWhen": string
  }]
}

Hard rules:
- Exactly 3 pricing tiers calibrated to local income.
- Exactly 10 organic channels. firstAction is the ONE thing to do today on that channel (named group, named setting, exact caption shape). No paid ads.
- launchTimeline: 14 days. At least 5 physical:true. Each day has 3-5 steps, a minutes estimate, a where (URL or place), and doneWhen.
- nextSteps: 8-12 tasks. At least 30% physical. due as "Day N". Each has 3-5 steps and doneWhen.
- implementation: EXACTLY 6 playbooks in this order:
  1) Legal & banking  2) Google presence  3) First three channels
  4) First in-person round  5) First paid job  6) Weekly operating rhythm
  Each has 4-7 steps. steps are commands: "Open X. Click Y. Type Z." Not slogans.
  script is a 2-4 sentence thing to say or send; empty string if none.
- legal items: state-specific LLC/EIN/permits/insurance/sales tax. url is the real page. steps are the clicks.
- techStack setup is a one-line summary. techStack.steps are the first 3-5 clicks to be live on the free tier.
- brand.colors: 3-4 hex colors, restrained, not purple/gold neon.
- Keep strings tight. No emoji. No guru language. No "consider" or "you might want to."`;

async function callOpenAICompatible(baseUrl: string, user: string): Promise<string> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.AI_API_KEY) headers.Authorization = `Bearer ${process.env.AI_API_KEY}`;
  const res = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: process.env.AI_MODEL || "openai",
      temperature: 0.4,
      max_tokens: 8000,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: `${user}\nOutput minified JSON on one line, no indentation.` },
      ],
    }),
  });
  if (!res.ok) throw new Error(`AI API error ${res.status}`);
  return outputText((await res.json()) as Record<string, unknown>);
}

async function callFinn(skill: string, zip: string, budget: string): Promise<BusinessPlan> {
  const apiKey = process.env.XAI_API_KEY;
  const baseUrl = process.env.AI_BASE_URL;
  if (!apiKey && !baseUrl) {
    throw new Error("AI is not available in this environment.");
  }

  const user = `Build the 11-section local business blueprint with specific implementation steps.
Skill / interest: ${skill}
ZIP code: ${zip}
Startup budget: ${budget}

Search the live web for this ZIP: city name, demographics, income, competing businesses in this niche, Facebook groups, chambers, typical local pricing, and the official state filing / licensing URLs. Then produce the JSON. A tired person should be able to execute each step without guessing. Every steps array is click-by-click.`;

  if (baseUrl) {
    try {
      return normalizePlan(extractJson(await callOpenAICompatible(baseUrl, user)), zip);
    } catch (err) {
      if (!apiKey) throw err;
    }
  }

  const res = await fetch("https://api.x.ai/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      instructions: SYSTEM,
      input: user,
      tools: [{ type: "web_search" }],
      max_output_tokens: 10000,
    }),
  });

  if (!res.ok) {
    const fallback = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.4,
        max_tokens: 8000,
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: user },
        ],
      }),
    });
    if (!fallback.ok) {
      throw new Error(`xAI API error ${fallback.status}`);
    }
    const body = (await fallback.json()) as Record<string, unknown>;
    const text = outputText(body);
    return normalizePlan(extractJson(text), zip);
  }

  const body = (await res.json()) as Record<string, unknown>;
  const text = outputText(body);
  return normalizePlan(extractJson(text), zip);
}

function rowToSaved(row: Record<string, unknown>): SavedPlan {
  const planRaw = row.plan_json ?? row.plan;
  const parsed =
    typeof planRaw === "string" ? JSON.parse(planRaw) : planRaw;
  return {
    id: Number(row.id),
    title: asString(row.title),
    skill: asString(row.skill),
    zip: asString(row.zip),
    budget: asString(row.budget),
    city: row.city == null ? null : asString(row.city),
    state: row.state == null ? null : asString(row.state),
    niche: row.niche == null ? null : asString(row.niche),
    createdAt: asString(row.created_at ?? row.createdAt),
    plan: normalizePlan(parsed, asString(row.zip)),
  };
}

export const generatePlan = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown): GenerateInput => {
    const v = (input ?? {}) as GenerateInput;
    const skill = (v.skill ?? "").trim();
    const zip = (v.zip ?? "").trim();
    const budget = (v.budget ?? "").trim();
    if (skill.length < 3) throw new Error("Tell Finn what you’re good at.");
    if (!ZIP_RE.test(zip)) throw new Error("Use a 5-digit US zip.");
    if (!budget) throw new Error("Pick a startup budget.");
    return { skill, zip, budget };
  })
  .handler(async ({ data, context }) => {
    const userId = context.userId;
    const sql = await getSql();
    const existing = await sql<{ n: string }>`
      SELECT COUNT(*)::text AS n FROM business_plans WHERE user_id = ${userId}
    `;
    const n = Number(existing[0]?.n ?? 0);
    if (n >= 20) {
      throw new Error("Twenty plans is enough for now. Open one you already have.");
    }

    const plan = await callFinn(data.skill, data.zip, data.budget);
    const inserted = await sql<Record<string, unknown>>`
      INSERT INTO business_plans (user_id, skill, zip, budget, title, city, state, niche, plan_json)
      VALUES (
        ${userId},
        ${data.skill},
        ${data.zip},
        ${data.budget},
        ${plan.title},
        ${plan.city},
        ${plan.state},
        ${plan.niche},
        ${JSON.stringify(plan)}
      )
      RETURNING id, title, skill, zip, budget, city, state, niche, created_at, plan_json
    `;
    const row = inserted[0];
    if (!row) throw new Error("Could not save the plan.");

    await sql`
      INSERT INTO drip_status (user_id, plan_id, current_day)
      VALUES (${userId}, ${Number(row.id)}, 1)
      ON CONFLICT (user_id) DO UPDATE SET plan_id = EXCLUDED.plan_id
    `;

    return rowToSaved(row);
  });

export const listPlans = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    const rows = await sql<Record<string, unknown>>`
      SELECT id, title, skill, zip, budget, city, state, niche, created_at, plan_json
      FROM business_plans
      WHERE user_id = ${context.userId}
      ORDER BY created_at DESC
    `;
    return rows.map(rowToSaved);
  });

export const getPlan = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((input: unknown) => {
    const id = typeof input === "number" ? input : Number((input as { id?: number })?.id);
    if (!Number.isFinite(id)) throw new Error("Missing plan.");
    return id;
  })
  .handler(async ({ data, context }) => {
    const sql = await getSql();
    const rows = await sql<Record<string, unknown>>`
      SELECT id, title, skill, zip, budget, city, state, niche, created_at, plan_json
      FROM business_plans
      WHERE id = ${data} AND user_id = ${context.userId}
      LIMIT 1
    `;
    const row = rows[0];
    if (!row) return null;
    return rowToSaved(row);
  });

export type DripState = {
  currentDay: number;
  planId: number | null;
  doneDays: number[];
};

export const getDrip = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<DripState | null> => {
    const sql = await getSql();
    const status = await sql<{ current_day: number; plan_id: number | null }>`
      SELECT current_day, plan_id FROM drip_status WHERE user_id = ${context.userId} LIMIT 1
    `;
    if (!status[0]) return null;
    const done = await sql<{ day: number }>`
      SELECT day FROM drip_completions WHERE user_id = ${context.userId} ORDER BY day
    `;
    return {
      currentDay: status[0].current_day,
      planId: status[0].plan_id,
      doneDays: done.map((d) => d.day),
    };
  });

export const completeDripDay = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => {
    const day = typeof input === "number" ? input : Number((input as { day?: number })?.day);
    if (!Number.isInteger(day) || day < 1 || day > 11) throw new Error("Invalid day.");
    return day;
  })
  .handler(async ({ data, context }): Promise<DripState> => {
    const sql = await getSql();
    const status = await sql<{ current_day: number; plan_id: number | null }>`
      SELECT current_day, plan_id FROM drip_status WHERE user_id = ${context.userId} LIMIT 1
    `;
    if (!status[0]) throw new Error("Generate a plan first. The sequence starts there.");
    if (data !== status[0].current_day) {
      throw new Error(`Do day ${status[0].current_day} first.`);
    }
    await sql`
      INSERT INTO drip_completions (user_id, day)
      VALUES (${context.userId}, ${data})
      ON CONFLICT (user_id, day) DO NOTHING
    `;
    const nextDay = data >= 11 ? 11 : data + 1;
    const completed = data >= 11;
    await sql`
      UPDATE drip_status
      SET current_day = ${nextDay}, completed = ${completed}
      WHERE user_id = ${context.userId}
    `;
    const done = await sql<{ day: number }>`
      SELECT day FROM drip_completions WHERE user_id = ${context.userId} ORDER BY day
    `;
    return {
      currentDay: nextDay,
      planId: status[0].plan_id,
      doneDays: done.map((d) => d.day),
    };
  });

export const listVentureSignups = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    const rows = await sql<{ venture_slug: string }>`
      SELECT venture_slug FROM venture_signups WHERE user_id = ${context.userId} ORDER BY created_at
    `;
    return rows.map((r) => r.venture_slug);
  });

export const toggleVentureSignup = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => {
    const slug = typeof input === "string" ? input : asString((input as { slug?: string })?.slug);
    if (!slug) throw new Error("Missing venture.");
    return slug;
  })
  .handler(async ({ data, context }) => {
    const sql = await getSql();
    const existing = await sql<{ venture_slug: string }>`
      SELECT venture_slug FROM venture_signups
      WHERE user_id = ${context.userId} AND venture_slug = ${data}
      LIMIT 1
    `;
    if (existing[0]) {
      await sql`
        DELETE FROM venture_signups WHERE user_id = ${context.userId} AND venture_slug = ${data}
      `;
      return { joined: false };
    }
    await sql`
      INSERT INTO venture_signups (user_id, venture_slug) VALUES (${context.userId}, ${data})
    `;
    return { joined: true };
  });
