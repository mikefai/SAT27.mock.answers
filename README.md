# SAT Practice Test 10 — Answer Key

A standalone answer key and step-by-step explanation site for SAT Practice Test 10 (digital format): 4 modules, 120 questions.

All 120 answers were checked against the official College Board answer explanations for Practice Test 10. The walkthroughs are written independently to teach the reasoning.

## What's included
- **Answer key** for Reading and Writing Modules 1–2 and Math Modules 1–2
- **Paper-test scorer**: type your answers next to the key and get instant right/wrong marks and totals (optionally hide the key while entering). Entries are saved in your browser only.
- **Step-by-step explanation for every question**, plus:
  - why the correct answer works
  - why each wrong choice is wrong (with your pick highlighted)
  - common mistakes on the math grid-in questions
  - key vocabulary and a one-line takeaway
- **Full question recap** inside each explanation, with graphs and tables redrawn as SVG
- Filters by module, skill area, or "questions I missed"; search; deep links such as `#math1-27`
- Print-friendly (all explanations expand when printing), light/dark mode, mobile friendly

## Run locally
```bash
python -m http.server 8766
```
Then open http://localhost:8766.

## Structure
- `index.html` — page shell
- `css/styles.css` — shared design tokens and components; `css/answers.css` — answer-key layout
- `js/answers.js` — key tables, scorer, filters, explanation cards
- `js/figures.js` — SVG graph and table builders
- `data/rw1.js`, `data/rw2.js`, `data/math1.js`, `data/math2.js` — questions, answers, explanations
- `data/rw-steps.js` — step-by-step walkthroughs for the Reading and Writing questions
