# Eugene Koh · research portfolio

A calm, pastel portfolio site with a plain-language page for each publication, a home for lectures
and courses, and links to bioinformatic tools. It is built with [Eleventy](https://www.11ty.dev/),
which turns the simple text files in `src/` into a static website.

## Preview it on your computer

You need [Node.js](https://nodejs.org/) (already installed on this PC). In a terminal in this folder:

```bash
npm install     # first time only
npm start       # then open http://localhost:8080
```

The preview reloads by itself whenever you save a file. `npm run build` writes the finished site to `_site/`.

## Everyday edits

| I want to… | Do this |
| --- | --- |
| **Add a publication** | Copy `templates/publication.md` into `src/research/papers/`, rename it (e.g. `2027-my-paper.md`) and fill it in. It appears on the Research page and the home page automatically. |
| **Add a talk or lecture** | Copy `templates/lecture.md` into `src/teaching/lectures/`. Put slides (PDF) in `src/assets/lectures/`. A talk gets its own page once it has `slides` or a `video`. |
| **Fill in an old talk** | Open its file in `src/teaching/lectures/` and add `talk_title`, `summary`, `slides` or `video`. |
| **Add a course** | Copy `templates/course.md` into `src/teaching/courses/`. |
| **Add a tool** | Add a block to `src/_data/tools.js`. |
| **Change my bio, email or links** | Bio: `src/index.njk`. Contact details: `src/_data/site.js`. Career trail: `src/_data/journey.js`. |
| **Add a photo of me** | Save it as `src/assets/img/portrait.jpg` (square works best). |
| **Use painted images** | See `ART-PROMPTS.md`. |

Text files use **Markdown**: `**bold**`, `*italic*`, `## Heading`, `- bullet`, `[link text](https://...)`.

## Where things live

```
src/
  index.njk                 home page
  research/papers/*.md      one file per publication  ← most edits happen here
  teaching/lectures/*.md    one file per talk
  teaching/courses/*.md     one file per course
  tools/index.njk           tools page (cards come from _data/tools.js)
  _data/                    site details, research threads, tools, other publications, career trail
  _includes/                page layouts and the drawn scenes (partials/scenes.njk)
  assets/                   CSS, JavaScript, images, lecture PDFs
templates/                  blank files to copy when adding content
```

## Publishing online (free, with GitHub Pages)

1. Create a GitHub repository and push this folder to it (the `main` branch).
2. On GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site
   (see `.github/workflows/deploy.yml`). It appears at `https://<username>.github.io/<repo>/`,
   or at `https://<username>.github.io/` if the repository is named `<username>.github.io`.
4. Once it is live, put its address in `url` in `src/_data/site.js`.

### Publishing a change

In the VS Code terminal, in this folder:

```
git add .
git status                       # check the list: nothing from References/
git commit -m "Describe the change"
git push
```

The site updates about two minutes later. The **Actions** tab on GitHub shows the progress.
VS Code's Source Control panel (Ctrl+Shift+G) does the same thing with buttons: **Commit**, then **Sync Changes**.

On the free GitHub plan the repository must be public, so anyone can read these source files.
`.gitignore` keeps `References/`, `CLAUDE.md` and all Office files (`.xlsx`, `.pptx`, `.docx`) out of it.
Before each push, `git status` lists the files that will be uploaded.

### Custom domain (for example `eugenekoh.com`)

1. **Buy the domain** from a registrar such as Porkbun, Cloudflare or Namecheap. A `.com` costs about
   US$10–15 a year; check the *renewal* price, not just the first-year offer. Make sure WHOIS privacy is
   on (usually free), so your contact details stay hidden. Turn on **auto-renew** and two-factor sign-in:
   if a domain lapses, someone else can buy it and put anything on your old address.
2. **Verify it on GitHub:** your profile picture → **Settings → Pages → Add a domain**. GitHub shows
   a `TXT` record. Add it in the registrar's DNS settings, then click **Verify**.
3. **Point the domain at GitHub** in the registrar's DNS settings:

   | Type    | Host / name | Value                              |
   | ------- | ----------- | ---------------------------------- |
   | `A`     | `@`         | `185.199.108.153`                  |
   | `A`     | `@`         | `185.199.109.153`                  |
   | `A`     | `@`         | `185.199.110.153`                  |
   | `A`     | `@`         | `185.199.111.153`                  |
   | `CNAME` | `www`       | `<username>.github.io`             |

   Delete any "parking" `A` or `CNAME` records the registrar added. On Cloudflare, set these records
   to **DNS only** (grey cloud).
4. **Tell GitHub:** the repository → **Settings → Pages → Custom domain** → enter `eugenekoh.com` → **Save**.
   Once the DNS check passes, tick **Enforce HTTPS**. The certificate can take up to a day.
   No `CNAME` file is needed, because the site is published by GitHub Actions.
5. **After step 4**, set `url: "https://eugenekoh.com"` in `src/_data/site.js` and push. That push rebuilds
   the site for the new address. Until it finishes, pages on the new domain may look unstyled or have
   broken links, because they were built for `/<repo>/`. If you don't push, the same rebuild is under
   **Actions → Deploy site → Run workflow**. The old `github.io` address redirects to the new domain by itself.

## Notes

- Publication summaries were written from each paper's published abstract (PubMed / bioRxiv).
- The talk dates in `src/teaching/lectures/` use placeholder months. Only the year is shown unless you set `show_month: true`.
- All illustrations are original SVG artwork, and all motion turns off for visitors who prefer reduced motion.
