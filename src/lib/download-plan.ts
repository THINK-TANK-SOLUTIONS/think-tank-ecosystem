const reportStyles = `
  :root{color-scheme:light;--paper:#fcf8ef;--ink:#22221d;--muted:#4e5349;--green:#234c3e;--line:#ddd6c4;--panel:#fffdf8}
  *{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.65 system-ui,sans-serif}
  main{width:min(900px,100%);margin:auto;padding:clamp(20px,6vw,60px)}
  header{padding:1rem 0 1.5rem}h1,h2,h3{line-height:1.15;color:var(--green);font-family:Georgia,serif}
  h1{margin:.65rem 0;font-size:clamp(2.15rem,6vw,4rem)}h2{font-size:clamp(1.5rem,4vw,2.1rem);margin:.25rem 0 1rem}h3{font-size:1.2rem}
  p{margin:.55rem 0;overflow-wrap:anywhere}header p{color:var(--muted)}
  .brand{color:var(--green);font-size:.8rem;font-weight:750;text-transform:uppercase;letter-spacing:.14em}
  nav{border-block:1px solid var(--line);padding:1.1rem 0;color:var(--green)}nav ol{columns:2;margin:.35rem 0;padding-left:1.45rem}nav li{break-inside:avoid}
  a{color:var(--green);text-underline-offset:.15em;overflow-wrap:anywhere}a:focus-visible{outline:2px solid var(--green);outline-offset:3px}
  section{padding:1.8rem 0;border-bottom:1px solid var(--line);scroll-margin-top:1rem}section>p:first-child{color:#77571e;letter-spacing:.15em;font-size:.8rem;font-weight:750}
  ul,ol{padding-left:1.45rem}li{margin:.3rem 0}pre{white-space:pre-wrap;overflow-wrap:anywhere}
  blockquote{margin:.65rem 0;padding:.55rem .9rem;border-left:3px solid #8a6632;background:#f4e9d7}
  .grid{display:grid;gap:.6rem}.flex{display:flex;gap:.5rem;flex-wrap:wrap}.rounded-xl,.rounded-2xl{border-radius:.65rem;padding:.65rem .85rem;background:var(--panel);border:1px solid var(--line)}
  .font-medium{font-weight:650}.text-xs{font-size:.82rem}.uppercase{text-transform:uppercase}.line-through{text-decoration:line-through}
  .step{display:flex;align-items:baseline;gap:.65rem}.step>span:first-child{min-width:1.2em;color:var(--green);font-weight:700}
  footer{padding-top:1rem;font-size:.85rem;color:var(--muted)}
  @media(min-width:640px){[class~="sm:grid-cols-2"]{grid-template-columns:repeat(2,minmax(0,1fr))}[class~="sm:grid-cols-3"]{grid-template-columns:repeat(3,minmax(0,1fr))}}
  @media(max-width:550px){nav ol{columns:1}}
  @media print{body{background:#fff;font-size:10.5pt}main{width:100%;padding:0}h2,h3{break-after:avoid}a{color:#222}.rounded-xl,.rounded-2xl,li{break-inside:avoid}}
`;

const allowedTags = new Set([
  "article",
  "header",
  "section",
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "span",
  "ol",
  "ul",
  "li",
  "a",
  "pre",
  "code",
  "blockquote",
  "strong",
  "em",
  "br",
  "hr",
]);

export function createReportHtml(article: HTMLElement, title: string): string {
  const doc = document.implementation.createHTMLDocument(title);
  doc.documentElement.lang = "en";
  const meta = doc.createElement("meta");
  meta.setAttribute("charset", "utf-8");
  doc.head.prepend(meta);

  const viewport = doc.createElement("meta");
  viewport.name = "viewport";
  viewport.content = "width=device-width, initial-scale=1";
  doc.head.append(viewport);

  const csp = doc.createElement("meta");
  csp.httpEquiv = "Content-Security-Policy";
  csp.content =
    "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'";
  doc.head.append(csp);

  const style = doc.createElement("style");
  style.textContent = reportStyles;
  doc.head.append(style);

  function copy(node: Node): Node | null {
    if (node.nodeType === Node.TEXT_NODE) return doc.createTextNode(node.textContent ?? "");
    if (!(node instanceof HTMLElement)) return null;
    if (node.hasAttribute("data-report-controls")) return null;

    const tag = node.localName;
    if (!allowedTags.has(tag) && tag !== "button") return null;

    const result = doc.createElement(tag === "button" ? "span" : tag);
    result.className = tag === "button" ? "step" : node.className;
    if (node instanceof HTMLAnchorElement && /^https?:$/.test(node.protocol)) {
      result.setAttribute("href", node.href);
    }
    for (const child of node.childNodes) {
      const copied = copy(child);
      if (copied) result.append(copied);
    }
    if (tag === "button" && node.firstElementChild?.querySelector("svg") && result.firstChild) {
      result.firstChild.textContent = "✓";
    }
    return result;
  }

  const main = doc.createElement("main");
  const brand = doc.createElement("p");
  brand.className = "brand";
  brand.textContent = "Foundry Finn · Think Tank Solutions AI";
  main.append(brand);

  const report = copy(article);
  if (!(report instanceof HTMLElement)) throw new Error("Report content is unavailable.");

  const navigation = doc.createElement("nav");
  navigation.setAttribute("aria-label", "Report sections");
  const label = doc.createElement("strong");
  label.textContent = "Contents";
  const list = doc.createElement("ol");
  navigation.append(label, list);

  for (const [index, section] of Array.from(report.querySelectorAll("section")).entries()) {
    section.id = `section-${index + 1}`;
    const item = doc.createElement("li");
    const link = doc.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = section.querySelector("h2")?.textContent || `Section ${index + 1}`;
    item.append(link);
    list.append(item);
  }

  const firstSection = report.querySelector("section");
  if (firstSection) firstSection.before(navigation);
  main.append(report);

  const footer = doc.createElement("footer");
  footer.textContent = "This report is yours to save and share.";
  main.append(footer);
  doc.body.append(main);
  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

export function downloadPlan(article: HTMLElement, title: string) {
  const html = createReportHtml(article, title);
  const slug = title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
  const url = URL.createObjectURL(new Blob([html], { type: "text/html;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `foundry-finn-${slug || "report"}.html`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
