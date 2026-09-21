# The Learning Atelier — Website

A single, self-contained static HTML file (index.html). No build step, no
dependencies to install — it can be opened directly in a browser or deployed
as-is to any static host.

## What's inside
- Interactive 3D hero (Reception / Play & Discover scenes, built with Three.js,
  loaded from a CDN — requires an internet connection to view)
- Real facility photos, logo, and copy from tla.one
- "Where curious minds get their hands busy" section with your table/chair
  photo and leaf-shaped callouts
- "Request a Tour" button opens a pre-filled email to hello@tla.one (no backend
  form — there's nowhere for a real form submission to go yet)

## Deploying via GitHub + Vercel
1. Create a new GitHub repository (e.g. `tla-website`).
2. Upload `index.html` to it (GitHub's web "Upload files" button works fine —
   no command line needed).
3. In Vercel: Add New → Project → import that repo. Leave the framework
   preset as "Other" and deploy.
4. Preview on the free `*.vercel.app` URL Vercel gives you.
5. When you're happy, point your domain (tla.one) at this new Vercel project
   under Settings → Domains (and remove it from wherever it currently points).

## Notes
- This is a single landing page — it does not have separate About/Programs/
  Contact pages behind the nav links (those are anchor links within this page).
- Any future edits mean changing this file directly and re-deploying.
