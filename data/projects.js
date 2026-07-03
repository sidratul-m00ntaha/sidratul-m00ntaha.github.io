// ============================================================
// PROJECTS — add a new project = add one object to this array.
// Set  featured: true  on at most one project to give it the
// big spotlight card. Newest first is a good habit.
// Fields: title, blurb, points (optional bullets), tech[],
//         github, live (optional), year
// ============================================================
window.DATA = window.DATA || {};

window.DATA.projects = [
  {
    featured: true,
    title: "SmartRoute AI",
    year: "2026",
    blurb:
      "An intelligent LLM cost optimizer. Describe your AI task in plain English and it recommends the cheapest suitable model — with real cost comparisons across 35 models from 6 providers, plus a ready-to-run code snippet.",
    points: [
      "Signature Smart Route strategy: blends a cheap primary model with a stronger escalation model — the blended cost beats any single model",
      "4-step pipeline: Gemini-powered task classification (with offline fallback) → token estimation → cost ranking → provider-aware code generation",
      "Interactive Plotly charts: monthly cost comparison and cost-vs-quality best-value analysis",
    ],
    tech: ["Python", "Streamlit", "Gemini API", "Plotly", "tiktoken"],
    github: "https://github.com/sidratul-m00ntaha/SmartRouteAI",
    live: "",
  },
  {
    title: "NeuralNoodles — CHiPSAL 2026",
    year: "2026",
    blurb:
      "Late-Fusion Multimodal Stacking for Nepali meme sentiment classification. Combined TF-IDF, SentenceTransformer and EfficientNet-B0 pipelines with 5-fold OOF stacking — ranked 6th in the CHiPSAL 2026 Shared Task; paper accepted at LREC 2026.",
    tech: ["PyTorch", "Transformers", "EfficientNet", "scikit-learn"],
    github: "https://github.com/sidratul-m00ntaha/NeuralNoodles-CHiPSAL-2026",
  },
  {
    title: "One-Day Job Board",
    year: "2026",
    blurb:
      "A micro-gig marketplace for university students to discover and complete short-term campus jobs — with AI-powered job recommendations, skill-based matching, and institutional-email-verified authentication.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/sidratul-m00ntaha/One-Day-Job",
  },
  {
    title: "Diabetes Risk Ensemble",
    year: "2026",
    blurb:
      "Domain-driven ensemble ML framework for multi-class diabetes risk prediction and clinical decision support.",
    tech: ["Python", "scikit-learn", "Ensemble ML"],
    github: "https://github.com/sidratul-m00ntaha/diabetes-risk-ensemble",
  },
  {
    title: "Global Weather Classification",
    year: "2025",
    blurb:
      "Leakage-safe, imbalance-aware ML pipeline classifying global weather from 90,000+ meteorological records with mutual-information-driven feature selection — 92.8% accuracy with XGBoost. Published at IEEE WIECON-ECE 2025.",
    tech: ["XGBoost", "CatBoost", "Feature Engineering"],
    github: "https://github.com/sidratul-m00ntaha/weather-classification-ml",
  },
  {
    title: "Energy Dashboard",
    year: "2026",
    blurb:
      "Interactive dashboard visualizing energy consumption patterns and trends.",
    tech: ["JavaScript", "Data Viz"],
    github: "https://github.com/sidratul-m00ntaha/energy-dashboard",
  },
];
