# ToolNest AI — All-in-One AI Tools Platform

> **Discover, explore and use powerful AI tools in one unified SaaS workspace.**

ToolNest AI is an automated, self-evolving SaaS platform that continuously curates and verifies cutting-edge AI and developer utility tools. Equipped with an autonomous GitHub Actions pipeline, the platform automatically researches, validates, publishes, and deploys new tools twice daily.

![Theme](https://img.shields.io/badge/Theme-Dark%20Navy%20%26%20Purple%20Gradients-6366f1)
![Autonomous Pipeline](https://img.shields.io/badge/Pipeline-Daily%2009%3A00%20%26%2018%3A00%20PKT-10b981)
![AI Verification](https://img.shields.io/badge/AI%20Research-Gemini%20Flash-06b6d4)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🤖 Autonomous GitHub Actions Automation

ToolNest AI features a self-sustaining autonomous curation and publishing pipeline:

```
┌─────────────────────────────────┐
│ GitHub Actions Cron Schedule    │
│ 09:00 AM & 06:00 PM PKT Daily   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Autonomous AI Research Agent    │
│ Gemini API + Verified Queue     │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Automated Verification Gate     │
│ Schema, Duplicate & Sanity QA   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Publish & Auto-Deploy           │
│ Commit to main & Push gh-pages  │
└─────────────────────────────────┘
```

- **Cron Schedule**: Runs twice daily at:
  - **`09:00 AM PKT`** (`04:00 UTC`)
  - **`06:00 PM PKT`** (`13:00 UTC`)
- **Manual Trigger**: Can also be triggered anytime via **Workflow Dispatch** on the [Actions tab](https://github.com/chahatnagpal/AI_tool/actions).
- **Verification Engine**: Validates tool schema, categories, character bounds, prevents duplicates, checks SVG icon markup, and logs all evaluations to `data/research_log.json`.
- **Automatic Deployment**: Automatically commits newly verified tools to `main` and syncs them to `gh-pages` for immediate live deployment.

---

## 🔐 Setting up Your Gemini API Key in GitHub Secrets

To allow the autonomous research agent to query Google Gemini:

1. Go to your repository **Settings**: [https://github.com/chahatnagpal/AI_tool/settings/secrets/actions](https://github.com/chahatnagpal/AI_tool/settings/secrets/actions)
2. Click **"New repository secret"**.
3. Set **Name**: `GEMINI_API_KEY`
4. Set **Secret**: Paste your Gemini API key.
5. Click **Add secret**.

> *Note: If no API key is set or if rate limits occur, the pipeline automatically falls back to an internal queue of verified utility tools so your scheduled deployments never fail.*

---

## ✨ Platform Features

- **Modern SaaS Aesthetics**: Deep navy and dark slate backgrounds (`#060913`, `#0a0e1c`) complemented by glowing violet, purple, and cyber-cyan gradients with frosted glass (`backdrop-filter: blur(16px)`).
- **Instant Search & Category Filtering**: Real-time search across all tools with dynamic counter updates, keyword highlight, and active filters across 7 categories:
  - **Writing**
  - **Developer**
  - **SEO**
  - **Business**
  - **Image**
  - **Video**
  - **PDF**
- **4 Fully Functional Live Tools**:
  1. **AI Text Summarizer & Rephraser**: Multi-mode summarization (Key Bullets, Executive Paragraph, ELI5, TL;DR) with tone shift transformations and character/word reduction metrics.
  2. **AI Smart Prompt Enhancer**: Converts brief prompts into structured, battle-tested prompt templates using RCAF, Chain-of-Thought, and XML guardrails.
  3. **AI SEO Meta & Keyword Architect**: Interactive Google SERP card preview, real-time character meters, high-intent keyword clustering, and Schema.org JSON-LD generation.
  4. **AI Code Explainer & Reviewer**: Analyzes syntax, breaks down algorithmic Big-O complexity (Time & Space), flags potential edge cases, and provides clean refactored alternatives.
- **Autonomous AI Deep Research Pipeline**:
  - Step 1: Input custom research topic or select pre-configured domains.
  - Step 2: Start simulated autonomous agent execution.
  - Step 3: Interactive 4-stage pipeline visualization (*Query Planning & Crawling*, *Data Extraction*, *Synthesis*, *Report Compilation*) with live status logs.
  - Step 4: Executive synthesis dossier complete with quantitative metric benchmarks, key findings, and a verified bibliography with citations.
- **Interactive Preview Sandboxes**: High-fidelity demo interfaces for upcoming features with "Coming Soon" badges and priority waitlist signups.
- **Modern Web Standards**: Native HTML5 `<dialog>` elements with backdrop containment compliant with Modern Web Guidance.

---

## 🚀 Getting Started Locally

No build step, Node server, or database installation is required.

### 1. Clone the repository
```bash
git clone https://github.com/chahatnagpal/AI_tool.git
cd AI_tool
```

### 2. Run locally
You can open `index.html` directly in any modern browser, or serve it with Python:

```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

### 3. Test the Autonomous Pipeline locally
```bash
python scripts/research_and_publish.py
```

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ai-pipeline.yml   # Twice-daily autonomous research & deploy workflow
├── data/
│   ├── tools.json            # Dynamic tool catalog database
│   └── research_log.json     # Audit logs of verified and published tools
├── scripts/
│   └── research_and_publish.py # Autonomous research, verification & publishing engine
├── index.html                # Semantic HTML5 application & accessible modal dialogs
├── styles.css                # Premium SaaS dark navy design system & responsive layout
├── app.js                    # Core platform logic & dynamic tool renderer
└── README.md                 # Project documentation
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
