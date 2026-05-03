# TrueMind

Therapy that meets you where you are. Product website for TrueMind — connecting people across Pakistan with licensed therapists through a private, app-first experience.

**Live site:** https://furqan1pk.github.io/truemind/

## What's here

A static, multi-page marketing site rendered with React + Babel-in-browser, with a Three.js 3D breathing orb in the hero. No build step — every file in this repo is served as-is by GitHub Pages.

- `index.html` — home (Editorial hero with the 3D orb)
- `index-modern.html` — alternate "modern confident" home direction
- `how-it-works.html`, `for-therapists.html`, `pricing.html`, `about.html`, `faq.html`, `download.html`, `contact.html`
- `styles.css` — Direction A: warm & human (sage + terracotta on warm cream)
- `styles-modern.css` — Direction B accents
- `*.jsx` — React components compiled in the browser by Babel standalone
- `three-orb.jsx` — Three.js 3D orb (wireframe icosahedron + particle halo + terracotta ring)

## Stack

- React 18 (UMD, production build)
- Babel standalone (in-browser JSX compile — fine for prototype, not ideal for scale)
- Three.js r160 (UMD)
- Inter, Fraunces, Noto Nastaliq Urdu via Google Fonts

## Local preview

Any static server works:

```sh
npx serve . -p 4203
# then open http://localhost:4203
```

## Languages

EN ↔ اردو toggle in the nav (Noto Nastaliq Urdu, RTL).

## Crisis support

If you are in immediate danger, please call **1166 (Pakistan)** or your local emergency line.
