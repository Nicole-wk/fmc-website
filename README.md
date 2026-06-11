# FMC Website — Professional Redesign Mockup

A static HTML/CSS/JS mockup of the redesigned Ferroelectric Memory Company website.
Inspired by the navigation structure of Arm (arm.com) while keeping the full FMC brand identity.

## Files

```
/
├── index.html          Homepage
├── technology.html     Technology page
├── news.html           News & Insights page
├── about.html          About FMC page
├── careers.html        Careers page
├── contact.html        Contact page
├── css/
│   └── styles.css      Shared design system
├── js/
│   └── main.js         Navigation, tabs, interactions
└── README.md           This file
```

## How to Run

1. Download or unzip the folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No server, build step, or internet connection required — all fonts load from Google Fonts.

> Tip: for the best experience use a desktop browser at 1280px+ width to see the mega menus.

## Design System

| Token | Value |
|---|---|
| Background dark | `#0B1511` |
| Card background | `#111C17` |
| Section background | `#0e1a14` |
| Primary green | `#56B686` |
| Light green | `#7BDCB5` |
| Accent green | `#00D084` |
| Primary text | `#F0F4F2` |
| Muted text | `#6B8C7A` |
| Border | `rgba(86,182,134,0.15)` |
| Font | Inter (Google Fonts) |

## Pages Overview

- **Homepage** — Hero, value pillars, DRAM+/CACHE+ cards, Applications, News preview, About preview, Careers CTA, Footer
- **Technology** — How FMC Memory Works, Key Benefits, Architecture diagram (1T1C), DRAM+ & CACHE+ solution cards, Resources, CTA
- **News & Insights** — Hero, 5-tab navigation, Featured story, Filter bar, Article grid, Industry Mentions, Newsletter
- **About FMC** — Redefining memory for the AI era, Company overview, Leadership Team, Board of Directors, Industry Advisors, Timeline, Locations, CTA
- **Careers** — Build the Future of Memory, Life at FMC, Why Join Us, Departments, Open Positions, Hiring Process, Talent Network CTA
- **Contact** — Contact pathways (6 cards), Contact form, Sidebar info, Office locations

## Navigation Features

- Sticky header with backdrop blur on scroll
- Mega menus on Technology and About FMC
- Dropdown menus on Applications and News & Insights
- Active page highlighting
- Mobile hamburger menu
- Keyboard accessible (tab + Enter)
