# Project brief: Nirjara Poptani, academic personal site and portfolio

> Place this file in the project root. Claude Code should read it before making any change.

## 0. Ground rules for Claude Code

- **Read `AGENTS.md` first.** This project uses Next.js 16.3. Before writing code, read the relevant guides in `node_modules/next/dist/docs/01-app/` (metadata, json-ld, redirects, sitemap and robots conventions). Heed deprecation notices. Do not rely on memory of Next APIs.
- **Do not commit or push** unless asked. Make changes in the working tree and list every file you touched.
- **Never publish drafts, ungraded coursework, unpublished manuscripts or student work.** See section 5.
- **Never add a file to `/public` that is meant to be restricted.** Anything in `/public` is publicly fetchable by URL.
- **Keep copy in British English.** Keep the name exactly **Nirjara Poptani** everywhere (site, metadata, CV, JSON-LD, footer).
- **Do not invent facts.** Where this brief has a `[PLACEHOLDER]`, leave the placeholder visible and list it in the final summary. Do not guess venues, dates, grades or affiliations.

## 1. Purpose and audience

Turn the existing copywriting and editing portfolio into a **clean editorial academic site**. The site should work as a personal academic home page, a CV, and an archive of the writing and editing work.

Research identity:

> Research in Indian literary and media narratives: disability, aesthetics, caste and decolonial critique.
> Interdisciplinary social sciences and literary studies.
> MA English Literature, Fergusson College.

Primary visitors, in priority order:
1. Supervisors and research leads checking fit with their work.
2. Internship and research-assistant recruiters scanning for skills and output.
3. PhD and admissions committees verifying writing and identity.
4. Journal editors and reviewers checking the author's identity.
5. Writing and editing clients (served, but lowest priority).

The homepage should answer in ten seconds: who this is, what the research is, what proof exists, and how to get in touch.

**Tone:** scholarly, precise, warm, never salesy. Remove "mine sells", "Let's create impact" and "Every word carries significance".

## 2. Research identity (use this copy as the starting point)

**Research themes** (keep these as written; they are the author's own):

- **01 Disability in Indian narratives.** Disability in Indian narratives, and Indian aesthetics across literary and media texts.
- **02 Decolonial critique.** Decolonial studies and the ideological critique of Eurocentric criticism, offering an alternative for understanding texts.
- **03 Alternate histories of caste.** An alternate history of caste and social structures in India.

Use "Indian aesthetics" and "Indian narratives" exactly as they appear. Do not expand them into claims the author has not made.

**Positioning line** (for the hero, editable): "Research in Indian literary and media narratives, from disability and aesthetics to caste and decolonial critique."

**Availability line:** "Open to research internships and research-assistant roles from [START DATE]." Leave as a placeholder if no date is given.

## 3. Information architecture

| Route | Purpose | Notes |
|---|---|---|
| `/` | Home | Research-led hero, themes, selected writing, contact strip |
| `/about` | Bio and education | New. Longer bio, Fergusson College MA, background |
| `/research` | Research themes and projects | New. Three themes, project cards, methods |
| `/research/[slug]` | Project page | New. Only for projects with status `ongoing` or `published` |
| `/publications` | Publications list | New. Filter by status |
| `/publications/[slug]` | Publication page | Only for `published`. Under-review items stay on the list only |
| `/writing` | Writing and editing index | Renamed from `/work` |
| `/writing/essays` | Analytical and critical essays | New. See section 5 for what can be shown |
| `/writing/chaakri` | Case study | Moved from `/work/chaakri` |
| `/writing/ivy-prep` | Case study | Moved from `/work/ivy-prep` |
| `/writing/xap` | Case study | Moved from `/work/xap` |
| `/writing#esteem-social-digest` | Section | Keep the anchor ID |
| `/writing#sane-creative-studio` | Section, under "Earlier roles" | Collapsed by default |
| `/writing#editing` | Editing support section | Replaces `/services` |
| `/cv` | CV (HTML) with PDF download | Replaces the resume page |
| `/contact` | Contact | Enquiry-type selector |

**Navigation (six items):** About · Research · Publications · Writing · CV · Contact. The name in the top-left links to `/`. Mobile uses the existing drawer.

**Footer:** email, ORCID, Google Scholar, LinkedIn, CV, Contact, status line, copyright.

### Redirects (in `next.config.ts`, permanent)

```
/work            -> /writing
/work/:slug*     -> /writing/:slug*
/services        -> /writing
/Nirjara-Poptani-Resume.pdf -> /cv.pdf   (keep the PDF file available at /cv.pdf)
```

Test every redirect with `curl -I` after building.

## 4. Content retention: nothing is deleted

Move or reframe content. Do not remove it.

| Existing | New location | Treatment |
|---|---|---|
| Hero "A writer who edits, and an editor who writes." | Home, secondary line under the name | Keep |
| About para 1 ("…I've spent four years making sure mine sells…") | `/about` | Rewrite in scholarly tone. Keep the idea of knowing where to cut and add |
| About para 2 (Literature grad, learning language by writing) | `/about` | Keep as origin story, linked to the research themes |
| Chaakri case study | `/writing/chaakri` | Keep body. **Fix the "76%" claim**: it is not supported by the case study page (which gives 3,809 accounts reached, 6,045 views, 254 likes, and so on). Either remove the 76% line everywhere or show its baseline and period. Add subtitle: "Brand voice and content strategy for an NGO-run ethical brand" |
| Ivy Prep case study | `/writing/ivy-prep` | Keep, reframed around academic writing process. **Do not reproduce any student's essay text or identify students.** |
| XAP case study and magazine PDFs | `/writing/xap` | Keep. These are published, so they can stay |
| Esteem / Peter Pan | `/writing#esteem-social-digest` | Keep. Reframe as close textual editing |
| Sane Creative Studio | `/writing#sane-creative-studio`, "Earlier roles" | Demote, collapsed |
| Seven services | `/writing#editing` | Lead with Academic and Application Editing, Copyediting, Content Strategy. Group Copywriting, Scriptwriting and Social Media under "Earlier commercial work" |
| Resume PDF | `/cv` | Build an HTML CV. Keep the PDF as a download |
| Footer "Let's create impact" | Replace | Use the availability line |
| Services and Work nav items | Replace | Use the six-item nav in section 3 |

## 5. Publication states: the core rule

Store every item in a typed content file with an explicit `status`:

```ts
type Status = "published" | "under-review" | "in-preparation" | "ongoing" | "restricted";
```

Rendering rules:

- **`published`**: full card, DOI or PDF link if permitted, Scholar `citation_*` meta tags, included in the sitemap.
- **`under-review`**: listed on `/publications` only. Show a status chip "Under review", the field and keywords, and a one-line research question. **Do not name the venue** unless the author confirms it may be named. **No abstract** unless the venue's policy allows it. **No PDF and no `citation_pdf_url`.** Show a "Request manuscript" button that opens `/contact` with the enquiry type set to "Request manuscript". Copy: "Manuscript under review. Available on request."
- **`in-preparation`** and **`restricted`**: never shown on public routes and excluded from the sitemap. Hold them in a private file only if the author asks.
- **`ongoing`**: shown on `/research` with the question and methods, no findings.

### Essays (`/writing/essays`)

- The essays are analytical and critical work from several institutions. The author has confirmed they may be used as publication material anywhere. **Do not publish drafts or ungraded work** unless the author states the essay is final and graded.
- **Decision required (default set to option A):**
  - **A. Excerpts on the site, full text on request (default).** Show about 100–200 words of the argument, the research question, a method note, the institution, course and year, and the line "Full text available on request."
  - **B. Full text on the site.** Choose this only after the author confirms the essay is not going to a journal. Publishing it openly is generally treated as prior publication, and many journals reject submissions that have already appeared online. Some editors also check for this.
- Record the choice per essay in the content file as `publicFullText: true | false`. Default `false`.
- Essays may not be stored under `/public` unless `publicFullText` is `true`. Full texts for `false` essays are sent by email on request.
- Institution name is shown for each essay. Omit the grade. Include the course code only if the author asks.

## 6. Design system: "clean editorial, blues retained"

### Direction

A quiet, editorial site with the feel of a university press or a well-set journal. Generous whitespace, a strong serif for display, a readable sans for body, thin hairline rules, numbered sections, and citation-style lists. Blues stay as the identity. The background becomes lighter so the page reads as paper, with the original mist blue kept for bands and cards.

### Colour tokens (replace the current `:root` values in `app/globals.css`)

```css
:root {
  /* Paper and blues */
  --paper: #F4F7FA;        /* new page background: lighter, editorial, still blue-tinted */
  --mist: #E8EEF3;         /* old background, now for bands, cards and the CV table */
  --steel: #8FB4CE;        /* featured cards and highlight blocks, unchanged */
  --navy: #153347;         /* primary text and headings, unchanged */
  --ink-soft: rgb(21 51 71 / 0.80); /* body text on paper */
  --rule: rgb(21 51 71 / 0.12);     /* hairlines */

  /* Accents */
  --slate: #46637D;        /* links and text accents, darkened from #5C7C99 for contrast */
  --slate-tint: #5C7C99;   /* decorative use only, not for small text */
  --brass: #B8894F;        /* decorative only: rules, icons, large marks */
  --brass-text: #8A6230;   /* any brass used as text or a link */

  /* Dark band */
  --deep: #1B2733;         /* dark section background, unchanged */
  --ivory: #EDEAE1;        /* text on the dark band, unchanged */
}
```

Approximate contrast ratios (my calculations from the hex values; verify with WebAIM before launch):
- Navy `#153347` on `#F4F7FA`: about 12:1. Pass.
- Body text at 80% navy on `#F4F7FA`: about 9:1. Pass.
- `#46637D` on `#F4F7FA`: about 5.5:1. Pass for normal text.
- `#8A6230` on `#F4F7FA`: about 4.6:1. Pass for normal text. Use only for text and links.
- Old `#B8894F` on `#E8EEF3`: about 2.7:1. **Fails.** Do not use it for text.
- Old `#5C7C99` on `#E8EEF3`: about 3.7:1. **Fails for small text.**

Dark mode is not required. If added later, define it on `:root` and check contrast again.

### Typography

- **Display:** Fraunces, variable, optical size and softness axes as configured. Headings at generous sizes, weight 500–600. Use italic for the theme questions.
- **Body and UI:** Work Sans at 16–18px, line height 1.6–1.7, measure capped at about 65 characters.
- **Labels:** Work Sans, 12px, uppercase, letter-spacing 0.12em, colour `--slate`. Used for section kickers such as "01 Research".
- **Citation lists:** Work Sans with hanging indents. Titles in Fraunces italic.

### Layout

- 12-column grid, max width about 1120px for home and CV, about 720px for reading text.
- Sections separated by hairline rules (`--rule`), not boxes.
- Section numbers as small labels: 01, 02, 03.
- Cards: `--mist` or `--paper` with a 1px `--rule` border, 4px radius at most. Featured cards use `--steel`.
- Dark band (`--deep`, `--ivory` text) only once per page: the closing contact strip.

### Components to build or change

- **`StatusChip`.** Published: solid `--navy`, `--paper` text. Under review: outline `--brass-text`, text `--brass-text`. In preparation: dashed `--slate`. Ongoing: solid `--slate`, `--paper` text. Always show the text label.
- **`ResearchTheme`.** Number label (01), question-led heading in Fraunces italic, one short paragraph, method tags.
- **`PublicationItem`.** Citation style: authors (the author's name in bold), year, title, venue or status, then the chip. Hanging indent. Filter by status at the top.
- **`ProjectCard`.** Status chip, one-line question, method tags, link to project page.
- **`EssayCard`.** Course and year as a label, the research question as heading, excerpt in a pull-quote style, "Full text on request" line.
- **`CVLayout`.** Two columns on desktop: dates in a narrow left column, content on the right. Single column on mobile. Print stylesheet hides nav and footer.
- **`RequestButton`.** Links to `/contact?type=manuscript`.
- **`EnquirySelect`.** Options: Research collaboration; Internship or RA enquiry; Request manuscript; Editing enquiry; Other.
- **Hero.** Name as plain H1 in Fraunces. Positioning line below. Availability chip. Two CTAs: "Read my research" and "Download CV". The existing typewriter may stay but must not be the only rendered H1 text.

### Home page structure (top to bottom)

1. Hero: name, positioning line, availability chip, CTAs.
2. `01 Research`: three theme blocks.
3. `02 Publications`: two most recent items with status chips.
4. `03 Writing and editing`: three cards (Ivy Prep, XAP, Essays).
5. Contact strip (the one dark band): email, ORCID, Google Scholar, LinkedIn, CV.
6. Footer.

### Motion

Keep gentle fades only. Respect `prefers-reduced-motion`, as the existing typewriter does.

### Accessibility

- One H1 per page. Logical heading order.
- Every interactive element reachable by keyboard, with a visible focus ring in `--slate`.
- Status is always conveyed by text, not colour alone.
- Images have meaningful alt text. The portrait alt text is "Portrait of Nirjara Poptani".
- Form fields have labels, and errors are announced.

## 7. Metadata, structured data and discovery

Follow the Next.js 16 docs in `node_modules`. The approach is:

1. **`lib/site.ts`** holds the single source for `name`, `url`, `description`, `email`, and `sameAs`:
   - `url`: `https://portfolio-nirjara.vercel.app` for now. The domain will change later, so the whole site must depend on this one value. Do not hard-code the domain anywhere else.
   - LinkedIn: `https://linkedin.com/in/nirjarap`
   - ORCID and Google Scholar: not created yet. Set them to `null` in `lib/site.ts`. When a value is `null`, do not render the link in the nav, footer, contact strip or `sameAs`. Never output an empty or placeholder link. The author will add the URLs later, and the links then appear automatically.
2. **Root `app/layout.tsx` metadata:** `metadataBase`, `title: { default: "Nirjara Poptani", template: "%s — Nirjara Poptani" }`, the new description, `alternates.canonical: "/"`, `robots: { index: true, follow: true }`, `openGraph` (type `website`, `locale: "en_GB"`), and `verification.google` from `[SEARCH CONSOLE TOKEN]`. Child pages set plain `title` strings, because the template applies only to child routes.
3. **Each page** exports its own `metadata` with a unique `title`, a unique `description`, and `alternates.canonical`. The current site repeats one description everywhere; remove that.
4. **Person JSON-LD** on the home page: `@type: Person`, `name`, `url`, `jobTitle: "MA English Literature candidate"` (confirm wording), `affiliation: "Fergusson College"` (confirm), `knowsAbout` with the three themes, `sameAs` with the profile URLs. Escape `<` as `<`, as the docs show.
5. **Publication pages** (`/publications/[slug]`, published only) use `generateMetadata` with `other: { citation_title, citation_author (array), citation_publication_date, citation_journal_title, citation_pdf_url }`. Check Google Scholar's current guidelines for the date format.
6. **`app/sitemap.ts`** lists public routes and published items only. Exclude `under-review`, `in-preparation`, `restricted`, and `/writing/essays` if the essays are withheld.
7. **`app/robots.ts`** allows crawling and points to the sitemap.
8. **`/cv`** carries its own metadata and a `Person` reference.

Validate with the Schema Markup Validator and check the rendered `<head>` for each route.

## 8. Content to write (first pass; the author will edit)

- **Home hero:** name, positioning line (section 2).
- **Home research block:** the three themes, each with a 2–3 sentence question-led paragraph. Draft these from the author's stated areas only. Do not add methods or findings that are not confirmed.
- **About:** three short paragraphs: current study (MA English Literature, Fergusson College), the research interests, and the path into writing and editing. Mark any unverified detail as `[CONFIRM]`.
- **Writing index intro:** one paragraph explaining that the section holds communication and editorial work, with the essays as academic writing.
- **Essay excerpts:** placeholders until the author provides them: `[ESSAY 1 TITLE]`, `[COURSE, YEAR]`, `[RESEARCH QUESTION]`, `[EXCERPT ~150 WORDS]`, `[METHOD NOTE]`.
- **Publications:** if none are shareable yet, the page shows an empty-state line and the under-review section is built from placeholders: `[MANUSCRIPT TITLE]`, `[FIELD]`, `[KEYWORDS]`, `[RESEARCH QUESTION]`.

## 9. Acceptance criteria

- The homepage reads as a researcher's profile in under ten seconds, with the three themes visible above the fold on desktop.
- The palette retains the blues, the background is lighter, and all text passes WCAG AA.
- Every old URL in section 3 returns a 301 to its new location. `curl -I` confirms each one.
- The sitemap contains no under-review, in-preparation, restricted or essay-draft routes.
- No file meant to be restricted exists in `/public`.
- No student's essay text appears anywhere on the site.
- The 76% claim is removed or sourced.
- Each page has a unique title and description. The rendered HTML has one H1 per page.
- The CV prints on one or two A4 pages with nav and footer hidden.
- Lighthouse on mobile: accessibility at least 95, no console errors.

## 10. Build order

1. Read `AGENTS.md` and the relevant Next docs. Report what you found.
2. Design tokens in `globals.css` and the status and layout components.
3. `lib/site.ts`, content files, and the typed `status` model.
4. Routes: home, about, research, publications, writing (index, essays, case studies), CV, contact.
5. Redirects in `next.config.ts`.
6. Metadata, JSON-LD, sitemap and robots.
7. QA against section 9.
8. Summary: files changed, placeholders still open, and any decision that needs the author.

## 11. Open placeholders

Resolved:
- Domain: stays on Vercel (`https://portfolio-nirjara.vercel.app`) until the author switches. Change `url` in `lib/site.ts` only.
- Essay permissions: the essays may be used for publication anywhere. The remaining choice is per essay, excerpts or full text (section 5).

Still open:
- `[ORCID URL]` and `[SCHOLAR URL]`: not created yet. Leave as `null` until they exist (section 7).
- `[SEARCH CONSOLE TOKEN]`: set up when the site is verified. Leave the `verification` field out until then.
- `[START DATE]` for the availability line.
- Confirmation of the MA wording, the Fergusson College affiliation and the job title for JSON-LD.
- Essay excerpts and the per-essay `publicFullText` decision (section 5).
- Publication details, if any become shareable (section 5).
- Email address for the contact strip, confirmed as the one to publish.
