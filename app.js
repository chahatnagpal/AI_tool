/**
 * ToolNest AI - Unified Application Core
 * Interactive platform logic, search, filters, modals, functional sandboxes, and deep research pipeline
 */

// ==========================================================================
// 1. Tool Catalog Data (12 Tools across 7 Categories)
// ==========================================================================
const TOOLS_DATA = [
  {
    "id": "summarizer",
    "name": "AI Text Summarizer & Rephraser",
    "category": "Writing",
    "iconClass": "icon-writing",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>",
    "desc": "Condense long articles, whitepapers, or memos into executive summaries, bullet points, or customized tones in real time.",
    "status": "functional",
    "statusLabel": "Active Tool",
    "popular": true,
    "features": [
      "4 Output Modes",
      "Real-time Metrics",
      "Tone Transformation"
    ],
    "modalId": "modal-summarizer"
  },
  {
    "id": "prompt-enhancer",
    "name": "AI Smart Prompt Enhancer",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "desc": "Convert loose instructions into battle-tested prompts using RCAF, Chain-of-Thought, and model-specific guardrails.",
    "status": "functional",
    "statusLabel": "Active Tool",
    "popular": true,
    "features": [
      "RCAF Framework",
      "Multi-Model Rules",
      "XML Guardrails"
    ],
    "modalId": "modal-prompt"
  },
  {
    "id": "seo-generator",
    "name": "AI SEO Meta & Keyword Architect",
    "category": "SEO",
    "iconClass": "icon-seo",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/></svg>",
    "desc": "Generate high-CTR title tags, meta descriptions with character meters, live Google SERP preview, and keyword clusters.",
    "status": "functional",
    "statusLabel": "Active Tool",
    "popular": true,
    "features": [
      "Google SERP Card",
      "Character Counters",
      "Keyword Matrix"
    ],
    "modalId": "modal-seo"
  },
  {
    "id": "deep-research",
    "name": "AI Deep Research Assistant",
    "category": "Business",
    "iconClass": "icon-biz",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/><path d=\"M11 8v6M8 11h6\"/></svg>",
    "desc": "Simulate an autonomous multi-step research pipeline: web crawling, data synthesis, and comprehensive dossier compilation.",
    "status": "workflow",
    "statusLabel": "Featured Workflow",
    "popular": true,
    "features": [
      "4-Stage Pipeline",
      "Academic Citations",
      "Executive Dossier"
    ],
    "modalId": "research-section"
  },
  {
    "id": "code-explainer",
    "name": "AI Code Explainer & Reviewer",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "desc": "Inspect any code snippet to unpack time/space Big-O complexity, understand algorithms, and catch lurking edge bugs.",
    "status": "functional",
    "statusLabel": "Active Tool",
    "popular": false,
    "features": [
      "Big-O Complexity",
      "Edge Case Detection",
      "Clean Refactors"
    ],
    "modalId": "modal-code"
  },
  {
    "id": "image-studio",
    "name": "AI Image Studio & Art Director",
    "category": "Image",
    "iconClass": "icon-image",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "desc": "Generate prompt seeds, lighting directions, and compositional rules for photorealistic, cyberpunk, and 3D renders.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Aspect Ratios",
      "Lighting Presets",
      "Composition Seeds"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "video-storyboard",
    "name": "AI Video Script-to-Storyboard",
    "category": "Video",
    "iconClass": "icon-video",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"/><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"/><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"/><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"/><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"/><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"/></svg>",
    "desc": "Transform rough concepts into production-ready video scripts complete with visual scenes, camera angles, and VO timings.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Scene Breakdowns",
      "Camera Direction",
      "Audio Cues"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "pdf-matrix",
    "name": "AI Document & PDF Chat Matrix",
    "category": "PDF",
    "iconClass": "icon-pdf",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "desc": "Extract tables, verify contracts, and chat conversationally with complex PDF documents with exact page references.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Table Extraction",
      "Page Citations",
      "Contract Auditing"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "pitch-deck",
    "name": "AI Business Pitch Deck Builder",
    "category": "Business",
    "iconClass": "icon-biz",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"/><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"/></svg>",
    "desc": "Construct investor-grade 10-slide pitch outlines, problem-solution frames, market sizing (TAM/SAM), and unit economics.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "10-Slide Outline",
      "TAM Calculator",
      "Moat Articulation"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "voice-studio",
    "name": "AI Neural Voice & Speech Studio",
    "category": "Video",
    "iconClass": "icon-video",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"/><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"/></svg>",
    "desc": "Design lifelike voiceovers across 30+ accents, custom emotional cadences, and studio-grade pacing.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Voice Clones",
      "Cadence Control",
      "Waveform Preview"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "sql-architect",
    "name": "AI SQL Query & Schema Architect",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/></svg>",
    "desc": "Translate natural language instructions into high-performance SQL, indexing recommendations, and schema migrations.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Natural Language SQL",
      "Query Optimization",
      "Schema Indexes"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "polyglot-translator",
    "name": "AI Multilingual Localization Engine",
    "category": "Writing",
    "iconClass": "icon-writing",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>",
    "desc": "Culturally tuned translations that preserve brand voice, local idioms, and compliance across 50+ languages.",
    "status": "coming-soon",
    "statusLabel": "Coming Soon",
    "popular": false,
    "features": [
      "Cultural Adaptation",
      "Brand Tone Lock",
      "Idiom Mapping"
    ],
    "modalId": "modal-preview"
  },
  {
    "id": "regex-architect",
    "name": "AI Regex & Pattern Architect",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 7V4h16v3M9 20h6M12 4v16\"/></svg>",
    "desc": "Translate complex string matching intent into zero-backtracking regular expressions with automated test cases.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Zero-Backtracking",
      "Test Suite Generator",
      "Regex Explainer"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-17 03:36 AM PKT"
  },
  {
    "id": "git-synthesizer",
    "name": "AI Git Commit & Changelog Synthesizer",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7M6 9v12\"/></svg>",
    "desc": "Inspect staged git diffs to generate semantic Conventional Commits, breaking change notes, and release summaries.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Conventional Commits",
      "Diff Breakdown",
      "Release Notes"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-17 05:35 PM PKT"
  },
  {
    "id": "api-contract-validator",
    "name": "AI OpenAPI & Contract Validator",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>",
    "desc": "Audit REST, GraphQL, and gRPC endpoint contracts for breaking backward-compatibility and security vulnerabilities.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Breaking Change Check",
      "Schema Drift Audit",
      "Mock Server"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-18 02:25 AM PKT"
  },
  {
    "id": "voice-transcriber-wasm",
    "name": "AI Client-Side Voice Transcriber",
    "category": "Video",
    "iconClass": "icon-video",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/></svg>",
    "desc": "Zero-server, 100% in-browser WebAssembly audio transcription and speaker separation with local privacy.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "100% Client-Side",
      "Multi-Speaker Diarization",
      "SRT/VTT Export"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-18 05:23 PM PKT"
  },
  {
    "id": "svg-vector-optimizer",
    "name": "AI SVG Vectorizer & Path Optimizer",
    "category": "Image",
    "iconClass": "icon-image",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"/><polyline points=\"2 17 12 22 22 17\"/><polyline points=\"2 12 12 17 22 12\"/></svg>",
    "desc": "Convert raster logos and UI sketches into production-ready SVGs with reduced Bezier control points and minified code.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Bezier Simplification",
      "Asset Minifier",
      "React/JSX Component"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-19 01:56 AM PKT"
  },
  {
    "id": "cron-architect",
    "name": "AI Cron & Workflow Scheduler",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "desc": "Synthesize and debug 5-part and 6-part cron expressions with human-readable schedules and upcoming execution logs.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Human Translation",
      "Next Run Timeline",
      "Timezone Conversion"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-22 04:32 PM PKT"
  },
  {
    "id": "ui-component-generator",
    "name": "UI Component Generator",
    "category": "Developer",
    "iconClass": "icon-code",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M16 18l6-6-6-6M8 6l-6 6 6 6\"/></svg>",
    "desc": "Instantly generates production-ready React or Vue components from natural language descriptions, complete with Tailwind CSS styling and accessibility best practices.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Tailwind CSS integration",
      "TypeScript support",
      "Accessibility audit"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-22 04:44 PM PKT"
  },
  {
    "id": "brand-voice-auditor",
    "name": "Brand Voice Auditor",
    "category": "Writing",
    "iconClass": "icon-pen",
    "icon": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2v20M2 12h20\"/></svg>",
    "desc": "Analyzes your long-form content against a defined brand persona to ensure consistent tone, vocabulary, and sentiment across all marketing channels.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": [
      "Tone consistency scoring",
      "Vocabulary style matching",
      "Sentiment drift detection"
    ],
    "modalId": "modal-preview",
    "discoveredAt": "2026-11-22 04:44 PM PKT"
  }
];

// Sample Pre-baked Data for Interactive Research Pipeline
const RESEARCH_PRESETS = {
  "Autonomous AI Agents in Enterprise Software (2026-2030)": {
    headline: "Autonomous Multi-Agent Architectures in Enterprise Systems (2026-2030 Horizon)",
    abstract: "A synthesis of emerging autonomous agent deployments within Fortune 500 workflows. Research demonstrates an inflection from isolated chat interfaces toward distributed orchestrations with secure execution boundaries, dynamic tool schemas, and verifiable oversight mechanisms.",
    metrics: [
      { val: "38.4% CAGR", desc: "Projected Enterprise Agent Market (2025-2030)" },
      { val: "4.2x ROI", desc: "Avg Productivity Multiple in Automated Tier-2 Ops" },
      { val: "99.2%", desc: "Synthesized Verification Confidence Score" }
    ],
    findings: [
      "Agentic protocols (e.g. Model Context Protocol and native tool sandboxing) have supplanted monolithic prompt chains, decreasing execution hallucination rates by 41%.",
      "Enterprise governance is adopting deterministic policy gates: agents generate structured execution plans that require signed cryptographic approvals prior to state-altering mutations.",
      "Latency and inference overhead have dropped by 68% year-over-year due to localized small-language routing models screening prompts before calling frontier reasoning models.",
      "Key adoption roadblock: 64% of surveyed enterprise security architects cite data perimeter isolation and non-repudiation logging as the primary gating criteria."
    ],
    sources: [
      { id: "1", title: "IEEE Transactions on Autonomous Systems: Multi-Agent Coordination at Scale", meta: "IEEE Computer Society • Nov 2025 • Dr. Elena Rostova et al." },
      { id: "2", title: "Gartner Special Report: The 2026 Enterprise Generative Automation Forecast", meta: "Gartner Research • Q1 2026 • Tech Strategy Advisory" },
      { id: "3", title: "arXiv:2511.08412 [cs.AI] - Verifiable Agent Tool Execution in Regulated Environments", meta: "DeepMind & MIT Joint Lab • Dec 2025" },
      { id: "4", title: "Enterprise Software Alliance: State of Agent Orchestration & Privacy Benchmarks", meta: "Industry Survey Report • 1,200 Enterprise CIOs • Jan 2026" }
    ]
  },
  "Next-Gen Solid State Battery Chemistry & EV Range": {
    headline: "Solid-State Electrolyte Formulations & Commercial EV Range Parity",
    abstract: "Evaluation of ceramic, sulfide, and halide solid-state electrolytes in passenger electric vehicles. Analysis examines thermal runaway prevention, C-rate fast charging under cold-weather parameters, and manufacturing roll-to-roll scaling through 2028.",
    metrics: [
      { val: "450 Wh/kg", desc: "Demonstrated Volumetric Energy Density" },
      { val: "12 Min", desc: "10% to 80% Fast-Charging Capability" },
      { val: "1,200+", desc: "Cycle Life Retention (>80% Capacity)" }
    ],
    findings: [
      "Sulfide-based electrolytes offer superior room-temperature ionic conductivity (>10 mS/cm) but require protective dry-room processing to mitigate hydrogen sulfide reactivity.",
      "Silicon-anode composites paired with thin-film solid membranes demonstrate a 70% range extension over conventional liquid ternary lithium-ion batteries.",
      "Cost curve projections forecast battery pack price reaching parity with legacy chemistries ($85/kWh) by early 2028 as gigafactories pilot continuous calendering."
    ],
    sources: [
      { id: "1", title: "Nature Energy: Interface Stability in Sulfide-Based All-Solid-State Batteries", meta: "Nature Publishing Group • Oct 2025 • Dept of Materials Science" },
      { id: "2", title: "Journal of Power Sources: Scalable Calendering of Lithium-Metal Anodes", meta: "Elsevier Research • Dec 2025 • Advanced EV Consortium" },
      { id: "3", title: "Automotive Cell Manufacturers Index: 2026 Commercial Pilot Benchmark", meta: "CleanTech Intelligence • Vol. 14, pp. 88-104" }
    ]
  },
  "Post-Quantum Cryptography & Zero-Knowledge Proofs": {
    headline: "Post-Quantum Lattice Cryptography & Succinct Zero-Knowledge Synergies",
    abstract: "Examination of NIST post-quantum standardizations (ML-KEM, ML-DSA) combined with recursive SNARK architectures to preserve privacy and tamper-evidence against quantum Shor attacks.",
    metrics: [
      { val: "Level 5", desc: "NIST Quantum Security Categorization" },
      { val: "2.4 ms", desc: "Recursive Proof Verification Latency" },
      { val: "100%", desc: "Protection Against Quantum Shor Attacks" }
    ],
    findings: [
      "Lattice-based cryptography yields robust theoretical guarantees, though public key sizes are substantially larger than classical elliptic curve cryptography (ECC).",
      "Recursive STARK proofs provide quantum-resilient cryptographic compression, reducing state proof sizes by over 85% for decentralized ledgers.",
      "Global banking systems are in the second phase of dual-signature migration to prevent retroactive decryption of intercepted historical network packets."
    ],
    sources: [
      { id: "1", title: "NIST Special Publication 800-208: Post-Quantum Cryptography Transition", meta: "National Institute of Standards and Technology • 2025" },
      { id: "2", title: "Cryptology ePrint Archive: Quantum-Safe Polynomial Commitments", meta: "International Association for Cryptologic Research (IACR) • 2026" }
    ]
  },
  "AI-Driven Molecular Folding in Oncology Drug Discovery": {
    headline: "De Novo Small-Molecule Generation & Protein-Ligand Affinity Modeling",
    abstract: "Investigation into generative diffusion models and structural co-folding algorithms accelerating kinase inhibitor design for refractory oncology targets.",
    metrics: [
      { val: "7.8x", desc: "Reduction in Hit-to-Lead Timeline" },
      { val: "1.2 nM", desc: "Synthesized Target Binding Affinity (Ki)" },
      { val: "94.6%", desc: "Predicted ADMET Desirability Score" }
    ],
    findings: [
      "All-atom co-folding models accurately predict cryptic allosteric pocket deformations upon ligand contact, solving historically undruggable KRAS-like oncogenic targets.",
      "Active-learning pipelines automatically prioritize synthesized compound candidates based on predicted metabolic clearance and blood-brain barrier permeability.",
      "Preclinical validation cycles have compressed from 24-36 months down to under 5 months across top biopharma research alliances."
    ],
    sources: [
      { id: "1", title: "Cell: Generative AI Identification of Selective Kinase Inhibitors", meta: "Cell Press • Molecular Biology Division • Nov 2025" },
      { id: "2", title: "Journal of Medicinal Chemistry: Structure-Based Lead Discovery with Diffusion Networks", meta: "American Chemical Society • Jan 2026" }
    ]
  }
};

// ==========================================================================
// 2. DOM Elements & State
// ==========================================================================
let currentCategory = "all";
let currentSearchQuery = "";

// Element Selectors
const popularGrid = document.getElementById("popularGrid");
const toolsGrid = document.getElementById("toolsGrid");
const categoryTabs = document.getElementById("categoryTabs");
const toolSearchInput = document.getElementById("toolSearchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const searchTriggerBtn = document.getElementById("searchTriggerBtn");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const visibleToolsCount = document.getElementById("visibleToolsCount");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");
const toastContainer = document.getElementById("toastContainer");

// ==========================================================================
// 3. Render Popular & All Tools
// ==========================================================================
function renderPopularTools() {
  const popularTools = TOOLS_DATA.filter(t => t.popular);
  popularGrid.innerHTML = popularTools.map(tool => `
    <article class="popular-card" data-tool-id="${tool.id}" tabindex="0" role="button" aria-label="Open ${tool.name}">
      <div class="popular-card-top">
        <div class="tool-icon-box ${tool.iconClass}">
          ${tool.icon}
        </div>
        <span class="status-badge ${tool.status}">
          ${tool.statusLabel}
        </span>
      </div>
      <h3 class="popular-card-title">${tool.name}</h3>
      <p class="popular-card-desc">${tool.desc}</p>
      <div class="popular-card-footer">
        <span class="category-tag">${tool.category}</span>
        <span class="card-launch-btn">
          Open Studio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </article>
  `).join("");
}

function renderAllTools() {
  const filtered = TOOLS_DATA.filter(tool => {
    const matchesCat = currentCategory === "all" || tool.category.toLowerCase() === currentCategory.toLowerCase();
    const query = currentSearchQuery.trim().toLowerCase();
    const matchesQuery = !query || 
      tool.name.toLowerCase().includes(query) || 
      tool.desc.toLowerCase().includes(query) || 
      tool.category.toLowerCase().includes(query) ||
      tool.features.some(f => f.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  visibleToolsCount.textContent = filtered.length;

  if (filtered.length === 0) {
    toolsGrid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  toolsGrid.innerHTML = filtered.map(tool => `
    <article class="tool-card" data-tool-id="${tool.id}" tabindex="0" role="button" aria-label="Explore ${tool.name}">
      <div class="tool-card-header">
        <div class="tool-icon-box ${tool.iconClass}">
          ${tool.icon}
        </div>
        <span class="status-badge ${tool.status}">
          ${tool.statusLabel}
        </span>
      </div>

      <h3 class="tool-card-title">${tool.name}</h3>
      <p class="tool-card-desc">${tool.desc}</p>

      <div class="tool-feature-chips">
        ${tool.features.map(f => `<span class="feature-chip">${f}</span>`).join("")}
      </div>

      <div class="tool-card-bottom">
        <span class="category-tag">${tool.category}</span>
        <span class="tool-open-action">
          Launch
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </article>
  `).join("");
}

// Update category tab badge numbers
function updateCategoryCounters() {
  const counts = { all: TOOLS_DATA.length };
  TOOLS_DATA.forEach(t => {
    counts[t.category] = (counts[t.category] || 0) + 1;
  });
  
  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  }
}

// ==========================================================================
// 4. Modal Management (Compliant with Modern Web Guidance)
// ==========================================================================
function openToolModal(toolId) {
  const tool = TOOLS_DATA.find(t => t.id === toolId);
  if (!tool) return;

  if (tool.id === "deep-research") {
    // Scroll smoothly to the research workflow section
    const target = document.getElementById("research");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      showToast("Scrolled to Autonomous Deep Research Workflow");
    }
    return;
  }

  // If it's one of the 4 live functional tools, open its dedicated modal
  if (tool.id === "summarizer") {
    const dialog = document.getElementById("modal-summarizer");
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
    return;
  }

  if (tool.id === "prompt-enhancer") {
    const dialog = document.getElementById("modal-prompt");
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
    return;
  }

  if (tool.id === "seo-generator") {
    const dialog = document.getElementById("modal-seo");
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
    return;
  }

  if (tool.id === "code-explainer") {
    const dialog = document.getElementById("modal-code");
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
    return;
  }

  // Otherwise, open the rich interactive preview modal
  openPreviewModal(tool);
}

// Generate specialized preview UI for non-functional/coming soon tools
function openPreviewModal(tool) {
  const modal = document.getElementById("modal-preview");
  const titleEl = document.getElementById("modal-preview-title");
  const badgeEl = document.getElementById("previewBadge");
  const iconBox = document.getElementById("previewIconBox");
  const bodyEl = document.getElementById("previewModalBody");

  titleEl.textContent = tool.name;
  badgeEl.textContent = tool.statusLabel;
  badgeEl.className = `modal-badge ${tool.status}`;
  iconBox.className = `tool-badge-icon ${tool.iconClass}`;
  iconBox.innerHTML = tool.icon;

  let specificPreviewMarkup = "";

  if (tool.id === "image-studio") {
    specificPreviewMarkup = `
      <div class="preview-interactive-sandbox">
        <h4 style="margin-bottom:0.75rem; color:#fff;">Interactive Studio Simulation</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
          <div>
            <label style="font-size:0.8rem; color:#94a3b8; display:block; margin-bottom:0.35rem;">Art Direction Style</label>
            <select class="form-select-sm" style="width:100%;" id="imageStyleSelect">
              <option>Cinematic Photorealism (Arri Alexa 65mm)</option>
              <option>Cyberpunk Neo-Tokyo Neon</option>
              <option>Surrealist 3D Glassmorphism</option>
              <option>Studio Product Rendering (Octane)</option>
            </select>
          </div>
          <div>
            <label style="font-size:0.8rem; color:#94a3b8; display:block; margin-bottom:0.35rem;">Aspect Ratio</label>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn-preset-pill active" style="flex:1;">16:9 Cinema</button>
              <button class="btn-preset-pill" style="flex:1;">1:1 Square</button>
              <button class="btn-preset-pill" style="flex:1;">9:16 Vertical</button>
            </div>
          </div>
        </div>
        <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:1.25rem; text-align:center;">
          <div style="width:100%; height:160px; background:linear-gradient(135deg, rgba(236,72,153,0.2), rgba(99,102,241,0.25)); border-radius:6px; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px dashed rgba(255,255,255,0.15);">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span style="font-size:0.85rem; color:#f8fafc; margin-top:0.5rem; font-weight:600;">Neural Latent Canvas (Simulated Demo Preview)</span>
            <span style="font-size:0.75rem; color:#94a3b8;">High-fidelity diffusion synthesis pipeline queued</span>
          </div>
        </div>
      </div>
    `;
  } else if (tool.id === "video-storyboard") {
    specificPreviewMarkup = `
      <div class="preview-interactive-sandbox">
        <h4 style="margin-bottom:0.75rem; color:#fff;">Scene & Script Breakdown Engine</h4>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div style="background:rgba(255,255,255,0.03); padding:0.85rem; border-radius:6px; border-left:3px solid #f59e0b;">
            <strong style="color:#fbbf24; font-size:0.85rem;">Scene 01 • Hook (0:00 - 0:04)</strong>
            <p style="font-size:0.8rem; color:#cbd5e1; margin-top:0.25rem;">Camera: Extreme close-up tracking shot on sleek glass device. VO: "What if every AI model worked in perfect unison?"</p>
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:0.85rem; border-radius:6px; border-left:3px solid #6366f1;">
            <strong style="color:#818cf8; font-size:0.85rem;">Scene 02 • Value Prop (0:04 - 0:15)</strong>
            <p style="font-size:0.8rem; color:#cbd5e1; margin-top:0.25rem;">Camera: Smooth 360 orbit reveal. Multi-agent flowcharts pulse in luminescent neon blue.</p>
          </div>
        </div>
      </div>
    `;
  } else if (tool.id === "pdf-matrix") {
    specificPreviewMarkup = `
      <div class="preview-interactive-sandbox">
        <h4 style="margin-bottom:0.75rem; color:#fff;">Document Intelligence & Table Parser</h4>
        <div style="border:1px dashed rgba(239,68,68,0.4); border-radius:8px; padding:1.25rem; text-align:center; background:rgba(239,68,68,0.05); margin-bottom:1rem;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <p style="font-size:0.85rem; color:#fff; font-weight:600; margin-top:0.35rem;">Sample Document Loaded: <em>Enterprise_SaaS_Contract_v4.pdf</em></p>
          <span style="font-size:0.75rem; color:#94a3b8;">48 Pages • 14 Tables • SOC2 Verified</span>
        </div>
        <div style="font-size:0.85rem; color:#cbd5e1; background:rgba(0,0,0,0.3); padding:0.85rem; border-radius:6px;">
          <strong style="color:#34d399;">Sample Citation Query:</strong> "What are the early termination penalties under Section 14.2?"<br>
          <span style="color:#94a3b8; font-size:0.8rem; display:block; margin-top:0.35rem;">Extracted Clause (Page 28): Notice period is 30 calendar days with zero pro-rata fee forfeit.</span>
        </div>
      </div>
    `;
  } else if (tool.id === "pitch-deck") {
    specificPreviewMarkup = `
      <div class="preview-interactive-sandbox">
        <h4 style="margin-bottom:0.75rem; color:#fff;">10-Slide Investor Architecture</h4>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.75rem; font-size:0.8rem;">
          <div style="background:rgba(255,255,255,0.03); padding:0.65rem; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#38bdf8;">1. The Problem</strong>: $14B lost annually to fragmented enterprise AI tool switching.
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:0.65rem; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#38bdf8;">2. The Solution</strong>: ToolNest unified zero-latency orchestration platform.
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:0.65rem; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#38bdf8;">3. Market Sizing</strong>: $52B TAM across Fortune 2000 technical workforces.
          </div>
          <div style="background:rgba(255,255,255,0.03); padding:0.65rem; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#38bdf8;">4. Defensible Moat</strong>: Proprietary cross-domain tool cache & privacy guarantees.
          </div>
        </div>
      </div>
    `;
  } else {
    specificPreviewMarkup = `
      <div class="preview-interactive-sandbox">
        <h4 style="margin-bottom:0.5rem; color:#fff;">Preview Sandbox Environment</h4>
        <p style="font-size:0.875rem; color:#cbd5e1; margin-bottom:1rem;">
          This tool interface is currently in preview simulation mode. Connect to early beta access to run live inference on our distributed cluster.
        </p>
        <div style="background:rgba(0,0,0,0.35); padding:1rem; border-radius:6px; font-family:var(--font-mono); font-size:0.8rem; color:#38bdf8;">
          // API Endpoint: /v2/${tool.id}/simulate<br>
          // Ready for Enterprise Sandbox Demonstration
        </div>
      </div>
    `;
  }

  bodyEl.innerHTML = `
    <div class="preview-modal-layout">
      <div class="preview-hero-banner">
        <div>
          <h3 style="font-size:1.15rem; color:#ffffff; margin-bottom:0.25rem;">${tool.name}</h3>
          <p style="font-size:0.85rem; color:#cbd5e1;">${tool.desc}</p>
        </div>
        <div style="text-align:right;">
          <span class="status-badge ${tool.status}">${tool.statusLabel}</span>
        </div>
      </div>

      ${specificPreviewMarkup}

      <div class="coming-soon-cta-box">
        <div>
          <h4 style="font-size:0.95rem; color:#ffffff; margin-bottom:0.2rem;">Get Notified on Launch</h4>
          <p style="font-size:0.825rem; color:#cbd5e1;">Join 14,000+ engineers waiting for production rollout of this tool.</p>
        </div>
        <div class="waitlist-input-row">
          <input type="email" id="waitlistEmail" placeholder="your@email.com" class="form-input" style="width:200px; padding:0.45rem 0.75rem;">
          <button type="button" class="btn btn-sm btn-gradient" id="waitlistSubmitBtn">Notify Me</button>
        </div>
      </div>
    </div>
  `;

  // Bind waitlist button
  const waitlistBtn = document.getElementById("waitlistSubmitBtn");
  if (waitlistBtn) {
    waitlistBtn.addEventListener("click", () => {
      const emailInput = document.getElementById("waitlistEmail");
      if (emailInput && emailInput.value.includes("@")) {
        showToast(`Added ${emailInput.value} to ${tool.name} priority waitlist!`);
        emailInput.value = "";
      } else {
        showToast("Please enter a valid email address.", "error");
      }
    });
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
  }
}

// ==========================================================================
// 5. Functional Tool 1: AI Text Summarizer & Rephraser
// ==========================================================================
function initSummarizerTool() {
  const input = document.getElementById("summarizerInput");
  const wordCount = document.getElementById("summarizerWordCount");
  const modeSelect = document.getElementById("summarizerMode");
  const toneSelect = document.getElementById("summarizerTone");
  const runBtn = document.getElementById("runSummarizerBtn");
  const output = document.getElementById("summarizerOutput");
  const copyBtn = document.getElementById("copySummarizerBtn");
  const reductionBadge = document.getElementById("summarizerReductionBadge");

  // Sample data presets
  const SAMPLES = {
    tech: `Artificial intelligence agentic systems represent a paradigm shift from reactive chatbots to proactive autonomous workflows. Rather than simply responding to single prompt inputs, modern agent orchestrations leverage tool execution APIs, dynamic memory retention, and iterative plan-and-solve loops. According to recent benchmark surveys, enterprise adoption of agentic pipelines increased by 142% over the trailing twelve months. However, architectural bottlenecks persist around context window degradation, non-deterministic API side effects, and state verification. Organizations that implement strict deterministic boundary controls and validation layers report 3.5x higher reliability in deployment.`,
    business: `During the third fiscal quarter, our software subscription revenue expanded to $48.2 million, representing an increase of 28% year-over-year. Net retention rate stood firmly at 119%, driven by enterprise account expansions and adoption of our automated AI analytics tier. Gross margin expanded by 180 basis points to 78.4%. Operating expenses grew moderately as we invested in infrastructure optimization, resulting in adjusted EBITDA profitability for the second consecutive quarter. Looking into the fourth quarter, guidance remains optimistic with full-year revenue projected between $192 million and $196 million.`,
    ai: `The Model Context Protocol (MCP) and function-calling schemas allow large models to interact with isolated databases, external code interpreters, and third-party web services. By abstracting the transport layer into secure JSON-RPC streams, autonomous assistants can safely invoke read and write actions while preserving system sandboxing. This eliminates the risk of prompt injection executing unauthorized destructive operations on host file systems. Enterprise compliance frameworks now mandate fine-grained permission tokens for any autonomous agent interacting with production cloud infrastructure.`
  };

  // Preset buttons
  document.querySelectorAll('.btn-preset-pill[data-target="summarizer"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.sample;
      if (SAMPLES[key]) {
        input.value = SAMPLES[key];
        updateCounters();
        executeSummarizer();
      }
    });
  });

  function updateCounters() {
    const text = input.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = text.length;
    wordCount.textContent = `${words} words • ${chars} chars`;
  }

  input.addEventListener("input", updateCounters);

  function executeSummarizer() {
    const text = input.value.trim();
    if (!text) {
      showToast("Please enter or paste text to summarize.", "error");
      return;
    }

    const mode = modeSelect.value;
    const tone = toneSelect.value;
    const originalWords = text.split(/\s+/).length;

    // Simulated intelligent transformation engine
    let resultText = "";
    let summaryWords = 0;

    if (mode === "tldr") {
      resultText = `<strong>TL;DR:</strong> ${
        text.includes("revenue") 
          ? "Q3 revenue grew 28% YoY to $48.2M with strong 119% net retention and expanding EBITDA margins."
          : text.includes("Protocol") 
            ? "MCP standardizes secure agent tool invocation through isolated JSON-RPC sandboxes, preventing destructive host exploits."
            : "Agentic AI is rapidly shifting from reactive chat to autonomous multi-step tool execution with strict enterprise boundary validation."
      }`;
    } else if (mode === "eli5") {
      resultText = `
        <h4 style="color:#38bdf8; margin-bottom:0.5rem; font-size:1rem;">Explanation in Plain English:</h4>
        <p style="margin-bottom:0.75rem;">Imagine instead of just answering questions like a smart encyclopedia, the AI is given its own hands and tools so it can actually perform chores for you step-by-step.</p>
        <p>Before it touches anything important, it checks with safety rules to make sure it doesn't break anything or do something unexpected!</p>
      `;
    } else if (mode === "bullet") {
      resultText = `
        <h4 style="color:#c7d2fe; margin-bottom:0.6rem; font-size:0.95rem;">Key Takeaways (${tone.toUpperCase()}):</h4>
        <ul style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem;">
          <li><strong>Autonomous Inflection:</strong> Organizations are graduating from simple chatbots to proactive tool-executing agent swarms.</li>
          <li><strong>Quantifiable Efficiency:</strong> Deployments report up to 142% adoption increases and 3.5x reliability improvements when deterministic gates are enforced.</li>
          <li><strong>Security First:</strong> Context isolation and non-repudiation logging remain the foundational pillars for production readiness.</li>
        </ul>
      `;
    } else {
      // Executive Paragraph
      resultText = `
        <h4 style="color:#c7d2fe; margin-bottom:0.5rem; font-size:0.95rem;">Executive Synthesis (${tone}):</h4>
        <p style="line-height:1.65;">
          ${text.slice(0, 180)}... Rapid architectural adoption across enterprise workflows highlights the transition toward automated tool invocation. By pairing high-reasoning frontier models with deterministic verification controls, engineering teams are achieving significant operational multiples while maintaining strict compliance boundaries.
        </p>
      `;
    }

    output.innerHTML = resultText;
    copyBtn.disabled = false;

    // Calculate reduction
    const plainGenerated = output.textContent.trim();
    summaryWords = plainGenerated.split(/\s+/).length;
    const reduction = Math.max(15, Math.min(85, Math.round((1 - summaryWords / originalWords) * 100)));
    reductionBadge.textContent = `${reduction}% Shorter`;
    reductionBadge.hidden = false;

    showToast("Summary generated successfully!");
  }

  runBtn.addEventListener("click", executeSummarizer);

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText).then(() => {
      showToast("Summary copied to clipboard!");
    });
  });
}

// ==========================================================================
// 6. Functional Tool 2: AI Smart Prompt Enhancer
// ==========================================================================
function initPromptTool() {
  const input = document.getElementById("promptInput");
  const targetModel = document.getElementById("promptTargetModel");
  const framework = document.getElementById("promptFramework");
  const runBtn = document.getElementById("runPromptBtn");
  const output = document.getElementById("promptOutput");
  const copyBtn = document.getElementById("copyPromptBtn");

  const SAMPLES = {
    email: "Write a cold sales outreach email to B2B founders about our autonomous AI data labeling software.",
    code: "Refactor this React hook that fetches user profile data and handles loading, error, and cache invalidation.",
    strategy: "Create a 90-day go-to-market strategy for launching a developer API tool in the fintech compliance sector."
  };

  document.querySelectorAll('.btn-preset-pill[data-target="prompt"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.sample;
      if (SAMPLES[key]) {
        input.value = SAMPLES[key];
        executePromptEnhance();
      }
    });
  });

  function executePromptEnhance() {
    const raw = input.value.trim();
    if (!raw) {
      showToast("Please enter a basic prompt to enhance.", "error");
      return;
    }

    const model = targetModel.value;
    const fw = framework.value;

    let enhanced = "";

    if (model === "claude") {
      enhanced = `<system>
You are an elite principal engineer and expert prompt strategist. Adhere strictly to the requested schema.
</system>

<context>
The user needs a high-fidelity solution for: "${raw}".
Target Framework: ${fw.toUpperCase()}
</context>

<instructions>
1. Deconstruct the primary objective into atomic requirements.
2. Provide concrete implementation steps before presenting the final output.
3. Identify edge cases, fail-safes, and non-obvious pitfalls.
4. Output cleanly formatted results inside structured tags.
</instructions>

<constraints>
- Maintain high information density; eliminate filler adjectives and pleasantries.
- Provide executable, production-ready syntax without placeholders.
- If assumptions are required, explicitly declare them in a separate <assumptions> block.
</constraints>

<output_format>
Provide your final deliverable structured with:
1. Executive Rationale
2. Core Implementation
3. Verification Checklist
</output_format>`;
    } else {
      enhanced = `### ROLE & OBJECTIVE
You are an expert strategic advisor specializing in: "${raw}". Your goal is to produce an authoritative, actionable, and production-ready deliverable.

### CONTEXT & SCOPE
- Primary Task: ${raw}
- Engineering Framework: ${fw === 'rcaf' ? 'RCAF (Role, Context, Action, Format)' : fw === 'cot' ? 'Chain-of-Thought Decomposition' : 'Strict Constraints & Guardrails'}
- Intended Audience: High-performance operators, technical leads, and decision-makers.

### STEP-BY-STEP EXECUTION PROTOCOL
1. **Analysis & Strategy**: Analyze prerequisites and define clear success metrics.
2. **Implementation**: Produce the exact deliverable adhering to modern industry standards.
3. **Guardrails & Edge Cases**: Detail common failure modes and exact remediation paths.

### CONSTRAINTS & TONE
- Voice: Authoritative, crisp, precise, and immediately applicable.
- Avoid generic marketing fluff; ground all statements in empirical best practices.
- Output formatting: Use markdown headings, bulleted breakdowns, and structured code blocks where applicable.`;
    }

    output.textContent = enhanced;
    copyBtn.disabled = false;
    showToast("Prompt successfully enhanced!");
  }

  runBtn.addEventListener("click", executePromptEnhance);

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.textContent).then(() => {
      showToast("Optimized prompt copied to clipboard!");
    });
  });
}

// ==========================================================================
// 7. Functional Tool 3: AI SEO Meta & Keyword Architect
// ==========================================================================
function initSeoTool() {
  const topicInput = document.getElementById("seoTopicInput");
  const audienceSelect = document.getElementById("seoTargetAudience");
  const brandInput = document.getElementById("seoBrandName");
  const runBtn = document.getElementById("runSeoBtn");
  const output = document.getElementById("seoOutput");
  const copyBtn = document.getElementById("copySeoBtn");

  const SAMPLES = {
    saas: "Next-gen AI customer service automation platform with omni-channel ticket resolution",
    coffee: "Artisan single-origin whole bean coffee subscription delivered fresh roasted weekly",
    cyber: "Automated SOC 2 and ISO 27001 continuous compliance monitoring software for startups"
  };

  document.querySelectorAll('.btn-preset-pill[data-target="seo"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.sample;
      if (SAMPLES[key]) {
        topicInput.value = SAMPLES[key];
        executeSeo();
      }
    });
  });

  function executeSeo() {
    const topic = topicInput.value.trim();
    if (!topic) {
      showToast("Please enter a page topic or product description.", "error");
      return;
    }

    const brand = brandInput.value.trim() || "ToolNest AI";
    const audience = audienceSelect.value;

    // Generate optimized Title & Description
    let title = "";
    let metaDesc = "";
    let keywords = [];

    if (topic.toLowerCase().includes("coffee")) {
      title = `Artisan Single-Origin Coffee Subscription | Fresh Roasted | ${brand}`;
      metaDesc = `Discover hand-roasted specialty whole bean coffee delivered to your doorstep weekly. Direct-trade beans, flexible plans, and 100% satisfaction guarantee.`;
      keywords = ["single origin coffee", "specialty coffee subscription", "fresh roasted beans", "direct trade coffee delivery", "whole bean coffee club"];
    } else if (topic.toLowerCase().includes("soc") || topic.toLowerCase().includes("compliance")) {
      title = `Automated SOC 2 & ISO 27001 Compliance Software | Fast Audits | ${brand}`;
      metaDesc = `Accelerate SOC 2, ISO 27001, and HIPAA certification with automated evidence collection and 100+ cloud integrations. Book a demo today.`;
      keywords = ["automated soc 2 compliance", "iso 27001 software", "continuous compliance platform", "audit automation tool", "startup cloud security"];
    } else {
      title = `AI Customer Service & Omni-Channel Automation Platform | ${brand}`;
      metaDesc = `Resolve up to 70% of customer support tickets instantly with intelligent multi-agent AI. Seamlessly integrates with Zendesk, Salesforce, and Slack.`;
      keywords = ["ai customer support software", "omni channel ticket automation", "customer service ai agent", "automated support platform", "helpdesk ai chatbot"];
    }

    const titleLength = title.length;
    const descLength = metaDesc.length;

    output.innerHTML = `
      <!-- Google SERP Card -->
      <div class="serp-preview-card">
        <div class="serp-url-row">
          <span class="serp-favicon"></span>
          <span>https://www.example.com/${brand.toLowerCase().replace(/\s+/g, '-')}/platform</span>
        </div>
        <div class="serp-title">${title}</div>
        <div class="serp-snippet">${metaDesc}</div>
      </div>

      <!-- Character Count Meters -->
      <div class="meta-meter">
        <span>Title Tag Length: <strong>${titleLength} / 60 characters</strong></span>
        <span class="${titleLength <= 60 ? 'meter-good' : 'meter-warn'}">${titleLength <= 60 ? '✓ Optimal SERP Display' : '⚠ Truncation Possible'}</span>
      </div>
      <div class="meta-meter" style="margin-bottom:1rem;">
        <span>Meta Description Length: <strong>${descLength} / 160 characters</strong></span>
        <span class="${descLength <= 160 ? 'meter-good' : 'meter-warn'}">${descLength <= 160 ? '✓ Optimal SERP Display' : '⚠ Truncation Possible'}</span>
      </div>

      <!-- Keyword Clusters -->
      <h4 style="font-size:0.875rem; color:#fff; margin-bottom:0.35rem;">High-Intent Target Keyword Cluster:</h4>
      <div class="keyword-cloud">
        ${keywords.map(kw => `<span class="kw-pill"># ${kw}</span>`).join("")}
      </div>

      <!-- Schema JSON-LD Snippet -->
      <h4 style="font-size:0.875rem; color:#fff; margin:1rem 0 0.35rem;">Structured Schema.org Metadata:</h4>
      <pre style="background:rgba(0,0,0,0.5); padding:0.75rem; border-radius:6px; font-family:var(--font-mono); font-size:0.75rem; color:#38bdf8; overflow-x:auto;"><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "${brand}",
  "applicationCategory": "BusinessApplication",
  "description": "${metaDesc}"
}
&lt;/script&gt;</code></pre>
    `;

    copyBtn.disabled = false;
    showToast("SEO Metadata and SERP Preview generated!");
  }

  runBtn.addEventListener("click", executeSeo);

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText).then(() => {
      showToast("SEO Metadata copied to clipboard!");
    });
  });
}

// ==========================================================================
// 8. Functional Tool 4: AI Code Explainer & Reviewer
// ==========================================================================
function initCodeTool() {
  const input = document.getElementById("codeInput");
  const langSelect = document.getElementById("codeLanguageSelect");
  const runBtn = document.getElementById("runCodeBtn");
  const output = document.getElementById("codeOutput");
  const copyBtn = document.getElementById("copyCodeBtn");

  const SAMPLES = {
    fibonacci: `function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}`,
    debounce: `function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
    sql: `SELECT 
  user_id,
  order_date,
  total_amount,
  SUM(total_amount) OVER (
    PARTITION BY user_id 
    ORDER BY order_date 
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) as running_spend
FROM customer_orders;`
  };

  document.querySelectorAll('.btn-preset-pill[data-target="code"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.sample;
      if (SAMPLES[key]) {
        input.value = SAMPLES[key];
        if (key === "sql") langSelect.value = "sql";
        else langSelect.value = "javascript";
        executeCodeAnalysis();
      }
    });
  });

  function executeCodeAnalysis() {
    const code = input.value.trim();
    if (!code) {
      showToast("Please paste code to analyze.", "error");
      return;
    }

    let complexity = "O(N) Time • O(N) Space";
    let summary = "";
    let reviewNotes = [];

    if (code.includes("debounce")) {
      complexity = "O(1) Time • O(1) Memory Overhead";
      summary = "High-order function implementing the Debounce pattern to limit rate of execution.";
      reviewNotes = [
        "Closure retains <code>timeout</code> reference cleanly across subsequent invocations.",
        "Edge case: Does not currently expose a <code>.cancel()</code> or <code>.flush()</code> method for component unmounting.",
        "Ensure <code>this</code> context binding is preserved if used on class methods (consider arrow function or explicit bind)."
      ];
    } else if (code.includes("PARTITION BY") || code.includes("SELECT")) {
      complexity = "O(N log N) Sorting • O(N) Temporary Table Buffer";
      summary = "SQL Window Function calculating a cumulative running total grouped per customer.";
      reviewNotes = [
        "<code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> avoids framing ambiguities with peer ties.",
        "Index optimization recommendation: Composite index on <code>(user_id, order_date, total_amount)</code> will enable index-only index scans without sorting disk overhead."
      ];
    } else {
      complexity = "O(N) Time • O(N) Call Stack & Memo Cache";
      summary = "Top-down Dynamic Programming approach computing the N-th Fibonacci number with Memoization.";
      reviewNotes = [
        "Reduces naive exponential complexity O(2^N) down to linear O(N) by caching repeated sub-problems in a dictionary.",
        "Edge check: Large N values (>10,000) may exceed JavaScript's maximum call stack limit; iterative bottom-up approach is recommended for arbitrary precision."
      ];
    }

    output.innerHTML = `
      <div style="background:rgba(99,102,241,0.15); border:1px solid rgba(99,102,241,0.3); border-radius:6px; padding:0.75rem 1rem; margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.85rem; color:#fff; font-weight:600;">Algorithmic Complexity:</span>
        <span style="font-family:var(--font-mono); font-size:0.85rem; color:#38bdf8; font-weight:700;">${complexity}</span>
      </div>

      <h4 style="font-size:0.9rem; color:#fff; margin-bottom:0.35rem;">Architectural Breakdown</h4>
      <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1rem;">${summary}</p>

      <h4 style="font-size:0.9rem; color:#fff; margin-bottom:0.35rem;">Code Review & Edge Cases</h4>
      <ul style="padding-left:1.25rem; font-size:0.825rem; color:#cbd5e1; display:flex; flex-direction:column; gap:0.45rem;">
        ${reviewNotes.map(n => `<li>${n}</li>`).join("")}
      </ul>
    `;

    copyBtn.disabled = false;
    showToast("Code explanation completed!");
  }

  runBtn.addEventListener("click", executeCodeAnalysis);

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText).then(() => {
      showToast("Code audit copied to clipboard!");
    });
  });
}

// ==========================================================================
// 9. AI Deep Research Workflow Engine
// ==========================================================================
function initResearchWorkflow() {
  const topicInput = document.getElementById("researchTopicInput");
  const startBtn = document.getElementById("startResearchBtn");
  const pipelinePanel = document.getElementById("researchPipelinePanel");
  const activeTopicText = document.getElementById("activeTopicText");
  const pipelineProgressBar = document.getElementById("pipelineProgressBar");
  const pipelinePercent = document.getElementById("pipelinePercent");
  const pipelineStatusBadge = document.getElementById("pipelineStatusBadge");
  const reportPanel = document.getElementById("researchReportPanel");
  const reportBodyContent = document.getElementById("reportBodyContent");
  const copyReportBtn = document.getElementById("copyReportBtn");
  const rerunResearchBtn = document.getElementById("rerunResearchBtn");
  const reportTimeEl = document.getElementById("reportGeneratedTime");

  // Preset topic buttons
  document.querySelectorAll(".preset-topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".preset-topic-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      topicInput.value = btn.dataset.topic;
    });
  });

  let animationTimer = null;

  function runPipeline() {
    const topic = topicInput.value.trim() || "Autonomous AI Agents in Enterprise Software (2026-2030)";
    activeTopicText.textContent = topic;

    // Reset UI
    if (animationTimer) clearInterval(animationTimer);
    pipelinePanel.hidden = false;
    reportPanel.hidden = true;
    pipelineProgressBar.style.width = "0%";
    pipelinePercent.textContent = "0%";
    pipelineStatusBadge.textContent = "Initializing Agents";

    // Reset step cards
    for (let i = 1; i <= 4; i++) {
      const card = document.getElementById(`stepCard-${i}`);
      const tag = document.getElementById(`stepTag-${i}`);
      const logs = document.getElementById(`stepLogs-${i}`);
      if (card) card.className = "step-card";
      if (tag) tag.textContent = "Queued";
      if (logs) logs.hidden = true;
    }

    // Scroll slightly so the user sees the pipeline activate
    pipelinePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Multi-stage timed animation
    let currentStep = 1;
    let progress = 0;

    const stages = [
      { step: 1, name: "Crawling Verified Sources...", pct: 25, log: "Query vectors launched across IEEE, Gartner, arXiv. 18 relevant nodes indexed." },
      { step: 2, name: "Extracting Empirical Metrics...", pct: 50, log: "Parsing quantitative benchmarks & architectural schemas across 4 key clusters." },
      { step: 3, name: "Synthesizing Core Thesis...", pct: 75, log: "Reconciling domain contradictions and establishing consensus model." },
      { step: 4, name: "Compiling Executive Report...", pct: 100, log: "Formatting citations, indexing bibliography, and producing executive dossier." }
    ];

    function activateStep(stageIndex) {
      if (stageIndex >= stages.length) {
        finishPipeline(topic);
        return;
      }

      const stage = stages[stageIndex];
      const card = document.getElementById(`stepCard-${stage.step}`);
      const tag = document.getElementById(`stepTag-${stage.step}`);
      const logs = document.getElementById(`stepLogs-${stage.step}`);

      if (card) card.classList.add("active");
      if (tag) tag.textContent = "In Progress";
      if (logs) {
        logs.hidden = false;
        logs.innerHTML = `<code>${stage.log}</code>`;
      }

      pipelineStatusBadge.textContent = stage.name;
      pipelineProgressBar.style.width = `${stage.pct}%`;
      pipelinePercent.textContent = `${stage.pct}%`;

      // Complete previous steps
      if (stageIndex > 0) {
        const prevStep = stages[stageIndex - 1].step;
        const prevCard = document.getElementById(`stepCard-${prevStep}`);
        const prevTag = document.getElementById(`stepTag-${prevStep}`);
        if (prevCard) {
          prevCard.classList.remove("active");
          prevCard.classList.add("complete");
        }
        if (prevTag) prevTag.textContent = "Complete ✓";
      }

      // Progress to next stage after slight delay for visual satisfaction
      setTimeout(() => {
        activateStep(stageIndex + 1);
      }, 700);
    }

    activateStep(0);
  }

  function finishPipeline(topic) {
    const card4 = document.getElementById("stepCard-4");
    const tag4 = document.getElementById("stepTag-4");
    if (card4) {
      card4.classList.remove("active");
      card4.classList.add("complete");
    }
    if (tag4) tag4.textContent = "Complete ✓";

    pipelineStatusBadge.textContent = "Synthesis Complete";
    showToast("Autonomous research completed successfully!");

    // Render Report
    const reportData = RESEARCH_PRESETS[topic] || {
      headline: `Executive Deep Research Synthesis: ${topic}`,
      abstract: `A multi-agent synthesized report exploring ${topic}. Findings consolidate primary academic literature, industry filings, and quantitative forecast data.`,
      metrics: [
        { val: "98.4%", desc: "Synthesized Reliability Factor" },
        { val: "14 Sources", desc: "Cross-Indexed Literature References" },
        { val: "Sub-Second", desc: "Agent Latency Consensus" }
      ],
      findings: [
        `Market velocity within ${topic} has outpaced historical benchmarks by 2.4x over the recent period.`,
        `Adoption curves indicate rapid transition toward distributed, client-isolated systems with zero-trust credentials.`,
        `Primary regulatory and security friction centers on standardized verification and deterministic audit trails.`
      ],
      sources: [
        { id: "1", title: `Global Research Dossier: ${topic} Fundamentals`, meta: "Academic Research Consortium • 2026" },
        { id: "2", title: "Enterprise Technology Benchmark & Security Guidelines", meta: "International Tech Standards Board • 2025" }
      ]
    };

    renderReport(reportData);
    reportPanel.hidden = false;
    reportTimeEl.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    reportPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderReport(data) {
    reportBodyContent.innerHTML = `
      <div class="report-title-block">
        <h3 class="report-headline">${data.headline}</h3>
      </div>

      <div class="report-abstract">
        <strong>Abstract & Scope:</strong> ${data.abstract}
      </div>

      <h4 class="report-section-heading">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Key Quantitative Benchmarks
      </h4>
      <div class="report-stats-grid">
        ${data.metrics.map(m => `
          <div class="stat-metric-card">
            <span class="stat-metric-val">${m.val}</span>
            <span class="stat-metric-desc">${m.desc}</span>
          </div>
        `).join("")}
      </div>

      <h4 class="report-section-heading">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        Strategic Findings & Inferences
      </h4>
      <ul class="report-keypoints-list">
        ${data.findings.map((f, idx) => `
          <li class="report-keypoint-item">
            <span class="keypoint-bullet">[${idx + 1}]</span>
            <span>${f}</span>
          </li>
        `).join("")}
      </ul>

      <h4 class="report-section-heading">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        Verified Bibliography & Citations (${data.sources.length} sources)
      </h4>
      <div class="sources-grid">
        ${data.sources.map(s => `
          <div class="source-item">
            <span class="source-index">[${s.id}]</span>
            <div class="source-details">
              <div class="source-title">${s.title}</div>
              <div class="source-meta">${s.meta}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  startBtn.addEventListener("click", runPipeline);

  copyReportBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(reportBodyContent.innerText).then(() => {
      showToast("Full research report copied to clipboard!");
    });
  });

  rerunResearchBtn.addEventListener("click", () => {
    reportPanel.hidden = true;
    pipelinePanel.hidden = true;
    topicInput.focus();
    topicInput.scrollIntoView({ behavior: "smooth" });
  });
}

// ==========================================================================
// 10. Contact Form & Feedback Handling
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formStatusAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const nameErr = document.getElementById("nameError");
    const emailErr = document.getElementById("emailError");
    const msgErr = document.getElementById("messageError");

    let isValid = true;

    nameErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";

    if (!name) {
      nameErr.textContent = "Please enter your name.";
      isValid = false;
    }

    if (!email || !email.includes("@")) {
      emailErr.textContent = "Please enter a valid work email.";
      isValid = false;
    }

    if (!message) {
      msgErr.textContent = "Please enter your message.";
      isValid = false;
    }

    if (!isValid) return;

    // Simulate instant successful submission
    const submitBtn = document.getElementById("contactSubmitBtn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Transmitting...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Message Sent</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      `;

      alertBox.className = "form-status-alert success";
      alertBox.hidden = false;
      alertBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <div>
          <strong>Thank you, ${name}!</strong> Your inquiry has been received. Our solutions architecture team will get in touch shortly.
        </div>
      `;

      showToast("Message sent to ToolNest team!");
      form.reset();
    }, 600);
  });
}

// ==========================================================================
// 11. Search & Filter Handlers
// ==========================================================================
function initSearchAndFilters() {
  // Category tabs
  categoryTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".category-tab");
    if (!tab) return;

    document.querySelectorAll(".category-tab").forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    currentCategory = tab.dataset.category;
    renderAllTools();
  });

  // Search input
  toolSearchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    searchClearBtn.hidden = !currentSearchQuery;
    renderAllTools();
  });

  // Clear button
  searchClearBtn.addEventListener("click", () => {
    toolSearchInput.value = "";
    currentSearchQuery = "";
    searchClearBtn.hidden = true;
    renderAllTools();
    toolSearchInput.focus();
  });

  // Search action button
  searchTriggerBtn.addEventListener("click", () => {
    const toolsSection = document.getElementById("tools");
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Quick chips
  document.querySelectorAll(".tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query;
      toolSearchInput.value = q;
      currentSearchQuery = q;
      searchClearBtn.hidden = false;
      renderAllTools();
      const toolsSection = document.getElementById("tools");
      if (toolsSection) toolsSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Reset filters button in empty state
  resetFiltersBtn.addEventListener("click", () => {
    currentSearchQuery = "";
    toolSearchInput.value = "";
    searchClearBtn.hidden = true;
    currentCategory = "all";

    document.querySelectorAll(".category-tab").forEach(t => {
      const isAll = t.dataset.category === "all";
      t.classList.toggle("active", isAll);
      t.setAttribute("aria-selected", isAll ? "true" : "false");
    });

    renderAllTools();
  });

  // Footer category links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      const tab = document.querySelector(`.category-tab[data-category="${cat}"]`);
      if (tab) tab.click();
      document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==========================================================================
// 12. Global Click Delegation for Tool Cards
// ==========================================================================
function initCardClickListeners() {
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".tool-card, .popular-card");
    if (!card) return;

    const toolId = card.dataset.toolId;
    if (toolId) {
      openToolModal(toolId);
    }
  });

  // Keyboard accessibility (Enter or Space)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.classList.contains("tool-card") || activeEl.classList.contains("popular-card"))) {
        e.preventDefault();
        const toolId = activeEl.dataset.toolId;
        if (toolId) openToolModal(toolId);
      }
    }
  });
}

// ==========================================================================
// 13. Mobile Menu Navigation
// ==========================================================================
function initMobileMenu() {
  mobileMenuToggle.addEventListener("click", () => {
    const expanded = mobileMenuToggle.getAttribute("aria-expanded") === "true";
    mobileMenuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });

  // Close when clicking a link inside mobile drawer
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// ==========================================================================
// 14. Toast Notification Utility
// ==========================================================================
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const iconSvg = type === "error"
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 15. Application Bootstrapper
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderPopularTools();
  renderAllTools();
  updateCategoryCounters();
  initSearchAndFilters();
  initCardClickListeners();
  initSummarizerTool();
  initPromptTool();
  initSeoTool();
  initCodeTool();
  initResearchWorkflow();
  initContactForm();
  initMobileMenu();

  // Close dialog on backdrop click according to modern-web-guidance
  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("click", (e) => {
      // If clicked on backdrop (target is the dialog itself, not its inner content)
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });
});
