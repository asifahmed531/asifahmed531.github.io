# asifahmmedjoy.github.io

Personal academic homepage of **Asif Ahmmed Joy** — Ph.D. Candidate, Information Systems,
New Jersey Institute of Technology.

**Live site:** https://asifahmmedjoy.github.io

## How it is built

Plain static HTML, CSS, and vanilla JavaScript. No build step at serve time, no dependencies,
no framework. GitHub Pages serves the files exactly as they sit in this repo, so anything you
edit here is live within a minute of pushing.

```
index.html          Home — photo, intro, recent news, research, selected papers
about.html          Full bio, education (both advisors), experience, memberships
news.html           Full news archive
research.html       The four projects (each tile opens its own page), tools, funding
publications.html   All 10 papers with publisher links, DOIs and free PDFs
papers/             One visual summary page per paper
projects/           One page per research project, tying its papers together
teaching.html       Courses taught
contact.html        Contact details and CV download
404.html            Not-found page
assets/style.css    All styling (light theme)
assets/main.js      Nav, publication filter, photo fallback, visitor counter
assets/photo.jpg    Headshot
files/…CV.pdf       The CV that the CV link points to
robots.txt, sitemap.xml, .nojekyll
```

## Everyday edits

**Add a news item** — copy the top `<li>` inside `<ul class="news">` in `news.html`
(and, if you want it on the front page, in `index.html`). Keep newest first.
The `<span class="new">New</span>` tag is optional.

**Add a publication** — copy an existing `<li class="pub">` block into the right year group
in `publications.html`. The `data-tags` attribute drives the filter buttons:
`ar` (AR/XR/MR), `ml` (machine learning), `first` (you are first author).

**Add a paper or project page** — copy the closest existing file in `papers/` or `projects/`
and edit it, then add a `<li>` link on `publications.html` or a tile on `research.html`,
and a `<url>` entry in `sitemap.xml`.

**Replace the headshot** — drop a new square-ish photo at `assets/photo.jpg`.
If the file is missing the page falls back to an "AJ" placeholder automatically.

**Update the CV** — replace `files/Asif_Ahmmed_Joy_CV.pdf`, keeping the filename.

**Change the "last updated" date** — the footer at the bottom of each page.

## A project that is built but not published

The dissertation project page (`aware-virtual-humans-in-mixed-reality.html`) is finished
but deliberately kept off the site while the work is unfinished. It is **not** in this repo —
it sits in `_site-drafts/projects/` next to the site folder on the local machine, so nothing
about it is served or browsable here.

Its tile is still in `research.html` and `index.html`, commented out and marked
`HIDDEN PROJECT`. To publish it again:

1. Copy `_site-drafts/projects/aware-virtual-humans-in-mixed-reality.html` into `projects/`.
2. In `research.html` and `index.html`, delete the `<!-- ===== HIDDEN PROJECT` opener and
   its `===== end hidden project ===== -->` closer so the tile becomes live markup again.
3. Add a `<url>` entry for the page back into `sitemap.xml`.
4. On `index.html`, decide whether to keep three cards or drop the mixed-methods one.

## Analytics

Visitor statistics come from [GoatCounter](https://www.goatcounter.com) — free for personal
sites, sets no cookies, so no consent banner is required. The snippet sits at the bottom of
`<head>` on every page.

Dashboard: **https://asifahmmedjoy.goatcounter.com**

## Editing without a terminal

Open any file on github.com, click the pencil icon, edit, and click **Commit changes**.
The live site updates in under a minute.
