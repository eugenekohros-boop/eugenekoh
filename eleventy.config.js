import { HtmlBasePlugin } from "@11ty/eleventy";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const ME = "Koh E";

const escapeHtml = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// "Peh LH" -> { last: "Peh", initials: ["L", "H"], star: "" }
function parseAuthor(a) {
  const star = a.trim().endsWith("*") ? "*" : "";
  const clean = a.trim().replace(/\*$/, "");
  const parts = clean.split(" ");
  const ini = parts.length > 1 ? parts.pop() : "";
  return { last: parts.join(" "), initials: ini.split(""), star };
}
const splitAuthors = (s = "") => s.split(",").map((a) => a.trim()).filter(Boolean);

function apaAuthors(s) {
  const list = splitAuthors(s).map((a) => {
    const p = parseAuthor(a);
    return `${p.last}, ${p.initials.map((i) => i + ".").join(" ")}${p.star}`;
  });
  if (list.length <= 1) return list.join("");
  return list.slice(0, -1).join(", ") + ", & " + list[list.length - 1];
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets/");

  /* ---------- Collections ---------- */
  const newestFirst = (a, b) => b.date - a.date;
  eleventyConfig.addCollection("publications", (api) =>
    api.getFilteredByGlob("src/research/papers/*.md").sort(newestFirst)
  );
  eleventyConfig.addCollection("lectures", (api) =>
    api.getFilteredByGlob("src/teaching/lectures/*.md").sort(newestFirst)
  );
  eleventyConfig.addCollection("courses", (api) =>
    api.getFilteredByGlob("src/teaching/courses/*.md").sort(newestFirst)
  );

  /* ---------- Filters ---------- */
  eleventyConfig.addFilter("year", (d) => new Date(d).getUTCFullYear());
  eleventyConfig.addFilter("monthYear", (d) => {
    const x = new Date(d);
    return `${MONTHS[x.getUTCMonth()]} ${x.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("limit", (arr = [], n) => arr.slice(0, n));
  eleventyConfig.addFilter("where", (arr = [], key, value) =>
    arr.filter((item) => key.split(".").reduce((o, k) => (o ? o[k] : undefined), item) === value)
  );

  // Bold my name in an author list. Input is PubMed-style: "Koh E, Peh LH, Mutwil M"
  eleventyConfig.addFilter("highlightMe", (authors = "") =>
    splitAuthors(authors)
      .map((a) => (a.replace(/\*$/, "") === ME ? `<strong class="me">${escapeHtml(a)}</strong>` : escapeHtml(a)))
      .join(", ")
  );

  // Other papers in the same research thread
  eleventyConfig.addFilter("related", (pubs = [], url, thread, n = 3) =>
    pubs.filter((p) => p.url !== url && p.data.thread === thread).slice(0, n)
  );

  // Group items by year (newest first) -> [{ year, items }]
  eleventyConfig.addFilter("groupByYear", (items = []) => {
    const groups = new Map();
    for (const item of items) {
      const y = new Date(item.date).getUTCFullYear();
      if (!groups.has(y)) groups.set(y, []);
      groups.get(y).push(item);
    }
    return [...groups.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => ({ year, items }));
  });

  // Year used in citations: the issue year (`cite_year`) when it differs from the online date.
  const citeYear = (d) => d.cite_year || new Date(d.date).getUTCFullYear();

  // Citation in APA style (plain text)
  eleventyConfig.addFilter("apa", (d) => {
    const y = citeYear(d);
    let s = `${apaAuthors(d.authors)} (${y}). ${d.title.replace(/\.$/, "")}. ${d.journal}`;
    if (d.volume) s += `, ${d.volume}${d.issue ? `(${d.issue})` : ""}`;
    if (d.pages) s += `, ${d.pages}`;
    s += ".";
    if (d.doi) s += ` https://doi.org/${d.doi}`;
    return s;
  });

  // Citation as BibTeX
  eleventyConfig.addFilter("bibtex", (d) => {
    const y = citeYear(d);
    const first = parseAuthor(splitAuthors(d.authors)[0] || "Anon");
    const word = (d.title.match(/[A-Za-z]{4,}/) || ["paper"])[0].toLowerCase();
    const key = `${first.last.toLowerCase().replace(/[^a-z]/g, "")}${y}${word}`;
    const authors = splitAuthors(d.authors)
      .map((a) => {
        const p = parseAuthor(a);
        return `${p.last}, ${p.initials.map((i) => i + ".").join(" ")}`;
      })
      .join(" and ");
    const fields = [
      ["title", `{${d.title.replace(/\.$/, "")}}`],
      ["author", authors],
      [d.preprint_only ? "howpublished" : "journal", d.journal],
      ["year", y],
      ["volume", d.volume],
      ["number", d.issue],
      ["pages", d.pages],
      ["doi", d.doi],
    ].filter(([, v]) => v);
    const body = fields.map(([k, v]) => `  ${k.padEnd(7)} = {${v}}`).join(",\n");
    return `@${d.preprint_only ? "misc" : "article"}{${key},\n${body}\n}`;
  });

  // Turn a YouTube / Vimeo link into an embeddable URL (or null)
  eleventyConfig.addFilter("videoEmbed", (url = "") => {
    let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    if (m) return `https://www.youtube-nocookie.com/embed/${m[1]}`;
    m = url.match(/vimeo\.com\/(\d+)/);
    if (m) return `https://player.vimeo.com/video/${m[1]}`;
    return null;
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Set automatically by the GitHub Pages workflow when the site lives at /<repo-name>/
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
