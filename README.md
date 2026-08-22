# asifahmed531.github.io

Personal academic homepage of **Asif Ahmmed Joy** — Ph.D. Candidate, Information Systems,
New Jersey Institute of Technology.

**Live site:** https://asifahmed531.github.io

## How it is built

Plain static HTML, CSS, and vanilla JavaScript. No build step, no dependencies,
no framework. GitHub Pages serves the files exactly as they sit in this repo,
so anything you edit here is live within a minute of pushing.

```
index.html              the whole homepage
404.html                not-found page
assets/style.css        all styling (light + dark themes)
assets/main.js          nav, scroll-spy, publication filter, visitor counter
assets/photo.jpg        headshot (add this file to replace the initials placeholder)
files/…CV.pdf           the CV that the CV button links to
robots.txt, sitemap.xml search-engine files
.nojekyll               tells GitHub Pages to skip Jekyll processing
```

## Everyday edits

**Add a news item** — copy the top `<li>` inside `<ul class="news">` in `index.html`
and change the date and text. Keep newest first. The `<span class="new">New</span>`
tag is optional; remove it from older entries.

**Add a publication** — copy an existing `<li class="pub">` block into the right
year group. The `data-tags` attribute drives the filter buttons:
`ar` (AR/XR/MR), `ml` (machine learning), `first` (you are first author).

**Replace the headshot** — put a square-ish photo at `assets/photo.jpg`, then in
`index.html` swap this line:

```html
<div class="photo-ph" aria-hidden="true">AJ</div>
```

for:

```html
<img class="photo" src="assets/photo.jpg" alt="Asif Ahmmed Joy">
```

**Update the CV** — replace `files/Asif_Ahmmed_Joy_CV.pdf` with the new PDF,
keeping the same filename so no links break.

**Change the "last updated" date** — bottom of `index.html`, in the footer.

## Analytics

Visitor statistics come from [GoatCounter](https://www.goatcounter.com), which is
free for personal sites and sets no cookies (so no consent banner is required).
The tracking snippet lives at the bottom of `<head>` in `index.html`.

Dashboard: https://asifjoy.goatcounter.com

## Editing without a terminal

Open any file on github.com, click the pencil icon, edit, and click
**Commit changes**. The live site updates in under a minute.
