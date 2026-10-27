# Showcase Upload & Customization Guide

Welcome to your modern portfolio, Soumya! This website is built with **React JS** and a **bespoke Vanilla CSS Design System** (no generic templates, strictly no emojis, high-contrast dark theme, and high-performance typography).

The site is currently running live at:
**http://localhost:3000/**

---

## 1. How to Add or Update Showcase Items One by One

Your showcase projects are stored in:
`src/data/portfolioData.js` -> `initialProjects`

Each project follows this clean structure:

```javascript
{
  id: "proj-custom-1",
  title: "Your Project Title Here",
  category: "figma", // Choose: 'figma' | 'react' | 'shopify' | 'frontend'
  categoryLabel: "Figma Design", // Label shown on the card
  featured: true,
  tagline: "One sentence summarizing the project and value delivered.",
  client: "Client Name / Industry",
  year: "2024",
  role: "Lead UI/UX Architect",
  metrics: "+22% Checkout Conversion Rate", // Any key metric
  tags: ["Figma Tokens", "Design System", "Auto Layout", "WCAG 2.1"],
  overview: "Detailed project scope description...",
  problem: "The business challenge or usability pain point before this project...",
  solution: "Your design approach, technical architecture, and execution...",
  deliverables: [
    "Master Figma Component Library",
    "Design Token Variables",
    "Interactive Prototype"
  ],
  liveUrl: "https://your-live-site.com",     // Optional: set to null if none
  figmaUrl: "https://figma.com/@yourfile",   // Optional: set to null if none
  githubUrl: null                           // Optional: set to null if none
}
```

### Supported Showcase Categories:
- `figma` -> Appears under **Figma Design**
- `react` -> Appears under **React Project**
- `shopify` -> Appears under **Shopify Project**
- `frontend` -> Appears under **Frontend & Web**

---

## 2. Interactive "+ Add Showcase Item" Modal

You can also test adding showcase items directly in the browser!
1. Open the website at `http://localhost:3000/`.
2. Scroll to the bottom of the **Featured Showcase Works** section.
3. Click the **"+ Add Showcase Item"** button.
4. Fill in your project details.
5. You can click **"Copy Code for portfolioData.js"** to immediately get the exact JSON formatted for your file, or click **"Add To Live Showcase"** to test it right on the page.

---

## 3. Project Structure

```
portfolio/
├── index.html                   # SEO tags, Plus Jakarta Sans & JetBrains Mono fonts
├── vite.config.js               # Vite config
├── package.json                 # React 18 & Lucide icons
├── SHOWCASE_GUIDE.md            # This guide
└── src/
    ├── data/
    │   └── portfolioData.js     # All CV information, achievements, projects, and skills
    ├── components/
    │   ├── Navbar.jsx           # Floating glass header with active section tracking
    │   ├── Hero.jsx             # Headline, CV stats badges, stack rail
    │   ├── Showcase.jsx         # Category filter tabs, search, project cards
    │   ├── ProjectModal.jsx     # Full Case Study modal (challenge, solution, deliverables)
    │   ├── AddProjectModal.jsx  # Interactive builder for uploading items one-by-one
    │   ├── Experience.jsx       # Career timeline (Codeclouds, DL Tech, GoldenLion, SM Infotel)
    │   ├── SkillsMatrix.jsx     # Categorized skill bars (Design, Frontend, Shopify, AI)
    │   ├── AwardsEducation.jsx  # Best Performance Award (2024), Degrees & 8+ Certifications
    │   ├── Contact.jsx          # Quick-copy email/phone and inquiry form
    │   ├── ResumeModal.jsx      # Printable full CV modal
    │   ├── Icons.jsx            # Custom SVG brand icons (Figma, GitHub, LinkedIn)
    │   └── Footer.jsx           # Clean footer with back-to-top button
    ├── App.jsx                  # Main application orchestrator
    ├── index.css                # Bespoke modern CSS design system tokens
    └── main.jsx                 # React root mount
```

---

## 4. Building for Production

To build the static production bundle:
```bash
npm run build
```
This generates the optimized `dist/` directory ready for deployment to Vercel, Netlify, or GitHub Pages.
