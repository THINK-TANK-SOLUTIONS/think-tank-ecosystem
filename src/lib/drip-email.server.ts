import { dripDays } from "@/data/drip";

type Sql = Awaited<ReturnType<typeof import("@/lib/db").getSql>>;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Send drip day 1 once per user via Resend. Only to DRIP_TEST_ALLOWLIST addresses. */
export async function sendDripDay1(sql: Sql, userId: string): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const allow = (process.env.DRIP_TEST_ALLOWLIST ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const rows = await sql<{ email: string | null; sent: string | null }>`
    SELECT u.email, d.day1_email_id AS sent
    FROM "user" u JOIN drip_status d ON d.user_id = u.id
    WHERE u.id = ${userId} LIMIT 1
  `;
  const email = rows[0]?.email?.trim().toLowerCase();
  if (!key || !email || rows[0]?.sent) return;
  if (!allow.includes(email)) {
    console.log(`[drip] day 1 skipped: ${email} not in DRIP_TEST_ALLOWLIST`);
    return;
  }
  const d = dripDays.find((x) => x.day === 1);
  if (!d) return;
  const html = `<h2>${esc(d.subject)}</h2><p>${esc(d.body)}</p><ol>${d.steps
    .map((s) => `<li>${esc(s)}</li>`)
    .join("")}</ol><p><b>Say this:</b> ${esc(d.script)}</p><p><b>Done when:</b> ${esc(d.doneWhen)}</p>`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Foundry Finn <onboarding@resend.dev>",
      to: [email],
      subject: `Day 1: ${d.subject}`,
      html,
    }),
  });
  if (!res.ok) {
    console.error(`[drip] day 1 send failed ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return;
  }
  const { id } = (await res.json()) as { id?: string };
  await sql`
    UPDATE drip_status SET day1_email_id = ${id ?? null}, day1_sent_at = now()
    WHERE user_id = ${userId}
  `;
}
