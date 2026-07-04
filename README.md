# Sidratul Muntaha — Portfolio ✨

Personal portfolio: bold, data-driven, zero build tools. Pure HTML/CSS/JS — every
piece of content lives in `data/*.js`, so updating the site never means touching
layout code.

## Structure

```
portfolio/
├── index.html          # page shell — section containers only
├── css/style.css       # all styling (design tokens at the top in :root)
├── js/render.js        # renders every section from the data files
└── data/               # ✏️ EDIT THESE to update the site
    ├── profile.js      # name, headline, about, traits, links, ticker words
    ├── projects.js     # projects (set featured: true for the spotlight card)
    ├── achievements.js # publications & awards
    ├── experience.js   # work experience
    ├── skills.js       # skill groups + education
    └── blog.js         # blog posts (empty = friendly "coming soon" card)
```

## How to add things later

| I want to… | Do this |
|---|---|
| Add a project | Add one object to the array in `data/projects.js` |
| Spotlight a different project | Move `featured: true` to it |
| Add an award / paper | Add one object to `data/achievements.js` |
| Add a job / internship | Add one object to `data/experience.js` |
| Publish a blog post | Add one object to `data/blog.js` (see the comment in that file) |
| Add a skill | Add a string in `data/skills.js` |
| Add design work | Drop a web-sized image (≤1200px, ≤500KB) in `assets/designs/` + add one object to `data/designs.js` |
| Change colors / fonts | Edit the `:root` variables at the top of `css/style.css` |

No rebuild step — save the file, refresh the browser.

## Run locally

Just open `index.html` in a browser. (No server needed — there's no `fetch`.)

## Deploy to GitHub Pages

1. Create a repo named `sidratul-m00ntaha.github.io` on GitHub.
2. Push this folder to it (branch `main`).
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → `main` / root.
4. Site goes live at **https://sidratul-m00ntaha.github.io** within a minute.

Any later content change = edit a data file, commit, push. Done.
