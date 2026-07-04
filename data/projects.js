// ============================================================
// PROJECTS — add a new project = add one object to this array.
//   featured: true      → big spotlight card (at most one)
//   home: true          → also shown on the homepage grid
//   category            → groups projects on the Projects page
// Fields: title, blurb, points (optional bullets), tech[],
//         github, live (optional), year, category
// ============================================================
window.DATA = window.DATA || {};

window.DATA.projectCategories = [
  "AI & Machine Learning",
  "Development",
  "Algorithms & Creative",
];

window.DATA.projects = [
  {
    featured: true,
    title: "SmartRoute AI",
    year: "2026",
    category: "AI & Machine Learning",
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
    home: true,
    title: "NeuralNoodles — CHiPSAL 2026",
    year: "2026",
    category: "AI & Machine Learning",
    blurb:
      "Late-Fusion Multimodal Stacking for Nepali meme sentiment analysis. Combined textual, semantic and visual pipelines (TF-IDF, SentenceTransformer, EfficientNet-B0) with 5-fold OOF stacking — Macro F1 0.5045, ranked 6th internationally; paper accepted at LREC-COLING 2026.",
    tech: ["PyTorch", "Transformers", "EfficientNet", "scikit-learn"],
    github: "https://github.com/sidratul-m00ntaha/NeuralNoodles-CHiPSAL-2026",
  },
  {
    home: true,
    title: "One-Day Job Board",
    year: "2026",
    category: "Development",
    blurb:
      "A micro-gig marketplace for university students to discover and complete short-term campus jobs — AI-powered job recommendations, skill-based matching, and institutional-email-verified authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/sidratul-m00ntaha/One-Day-Job",
  },
  {
    title: "Global Weather Classification",
    year: "2025",
    category: "AI & Machine Learning",
    blurb:
      "Leakage-safe, imbalance-aware ML pipeline classifying global weather from 90,000+ records and 40+ meteorological features. Evaluated 10+ models with mutual-information feature selection — XGBoost reached 92.8% accuracy / 0.991 ROC-AUC. Published at IEEE WIECON-ECE 2025.",
    tech: ["XGBoost", "CatBoost", "scikit-learn", "Feature Engineering"],
    github: "https://github.com/sidratul-m00ntaha/weather-classification-ml",
  },
  {
    title: "Diabetes Risk Ensemble",
    year: "2026",
    category: "AI & Machine Learning",
    blurb:
      "Multi-class diabetes risk prediction from 6,000 patient records and 17 clinical features. Compared 9 supervised algorithms and built Voting/Stacking ensembles reaching 91%+ accuracy.",
    tech: ["Python", "scikit-learn", "Ensemble ML"],
    github: "https://github.com/sidratul-m00ntaha/diabetes-risk-ensemble",
  },
  {
    title: "Maternal Health Risk Prediction",
    year: "2026",
    category: "AI & Machine Learning",
    blurb:
      "Multi-class classification system predicting maternal health risk levels, improved with ensemble methods and hyperparameter tuning, with baseline-vs-tuned model comparison.",
    tech: ["Python", "scikit-learn", "Ensemble ML"],
    github: "",
  },
  {
    title: "Rainfall Prediction",
    year: "2025",
    category: "AI & Machine Learning",
    blurb:
      "Rainfall prediction on real-world weather datasets comparing Logistic Regression, Decision Tree, Random Forest, SVM and KNN — evaluated with cross-validation and learning curves.",
    tech: ["Python", "scikit-learn"],
    github: "https://github.com/sidratul-m00ntaha/Rainfall-Prediction-ML",
  },
  {
    title: "Libra Jewelry",
    year: "2025",
    category: "Development",
    blurb:
      "Client-based e-commerce platform (USA) for jewelry with authentication, product browsing, cart management, and secure SSLCommerz payment integration.",
    tech: ["Django", "SQLite", "Bootstrap"],
    github: "https://github.com/sidratul-m00ntaha/LibraJewelry",
  },
  {
    title: "Mentor–Mentee Scheduling System",
    year: "2025",
    category: "Development",
    blurb:
      "Scheduling system matching mentors and mentees based on preferences and availability — React frontend with SQL database design.",
    tech: ["React", "SQL"],
    github: "https://github.com/sidratul-m00ntaha/JAVA-Mentor-Mentee-Scheduling-System",
  },
  {
    title: "Hall Room Allocation System",
    year: "2025",
    category: "Development",
    blurb:
      "Terminal-based hostel room allocation for CUET halls: student and provost panels, authentication, and approval workflows over a lightweight file-based database.",
    tech: ["Bash", "Linux CLI"],
    github: "https://github.com/sidratul-m00ntaha/Hall-Room-Allocation",
  },
  {
    title: "Energy Dashboard",
    year: "2026",
    category: "Development",
    blurb: "Interactive dashboard visualizing energy consumption patterns and trends.",
    tech: ["JavaScript", "Data Viz"],
    github: "https://github.com/sidratul-m00ntaha/energy-dashboard",
  },
  {
    title: "DSA GUI Applications",
    year: "2025",
    category: "Algorithms & Creative",
    blurb:
      "GUI applications — Cash Flow Minimizer and a Snake Game — applying greedy algorithms, graphs, heaps and event-driven programming with beginner-friendly visualization.",
    tech: ["Python", "Tkinter", "Graphs & Greedy"],
    github: "https://github.com/sidratul-m00ntaha/DSA-Projects",
  },
  {
    title: "Graphic Design Work",
    year: "2025",
    category: "Algorithms & Creative",
    blurb:
      "Eid card for CUET Islamic Ilm Seeker Society, logo submission for CUET CSE Fest 2025, and the official calendar for IEEE CUET Student Branch.",
    tech: ["Adobe Illustrator", "Canva"],
    github: "",
  },
];
