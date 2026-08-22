# asifahmed531.github.io

Personal academic homepage of **Asif Ahmmed Joy** — Ph.D. Candidate, Information Systems,
New Jersey Institute of Technology.

**Live site:** https://asifahmed531.github.io

## How it is built

Plain static HTML, CSS, and vanilla JavaScript. No build step at serve time, no dependencies,
no framework. GitHub Pages serves the files exactly as they sit in this repo, so anything you
edit here is live within a minute of pushing.

```
index.html          Home — photo, intro, recent news, research, selected papers
about.html          Full bio, education (both advisors), experience, memberships
news.html           Full news archive
research.html       Research threads, tools & methods, funding
publications.html   All 9 papers with publisher links, DOIs and free PDFs
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

**Replace the headshot** — drop a new square-ish photo at `assets/photo.jpg`.
If the file is missing the page falls back to an "AJ" placeholder automatically.

**Update the CV** — replace `files/Asif_Ahmmed_Joy_CV.pdf`, keeping the filename.

**Change the "last updated" date** — the footer at the bottom of each page.

## Analytics

Visitor statistics come from [GoatCounter](https://www.goatcounter.com) — free for personal
sites, sets no cookies, so no consent banner is required. The snippet sits at the bottom of
`<head>` on every page.

Dashboard: **https://asifahmmedjoy.goatcounter.com**

## Editing without a terminal

Open any file on github.com, click the pencil icon, edit, and click **Commit changes**.
The live site updates in under a minute.
