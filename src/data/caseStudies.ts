// Real case studies from the PlatypAI Brochure v2.
// Each card shows a headline metric; the modal explains the system behind it.

export interface CaseStudyProgram {
  id: string;
  title: string;
  tagline: string;
  domain: string;            // e.g., "Information Security"
  sectorDetail: string;      // full descriptor from the brochure
  categoryLabel: string;
  categoryId: string;
  tags: string[];
  metric: string;            // headline number, e.g., "80%"
  metricLabel: string;       // what the number describes
  accent: 'teal' | 'pink';
  brief: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  expertRole: string;
  aiRole: string;
}

export const caseStudyPrograms: CaseStudyProgram[] = [
  {
    id: "enterprise-knowledge-transformation",
    title: "Enterprise Knowledge Transformation",
    tagline: "AI-assisted extraction, restructuring, and tagging across enterprise documentation.",
    domain: "Information Security",
    sectorDetail: "Information security certification knowledge management and training.",
    categoryLabel: "Knowledge Operations",
    categoryId: "enterprise-knowledge",
    tags: ["RAG", "Knowledge Architecture", "Curriculum"],
    metric: "80%",
    metricLabel: "Reduction in curriculum development time",
    accent: "teal",
    brief: "Turned a sprawling information-security knowledge base into a curated, AI-ready foundation that powered training, certification, and downstream tooling — and collapsed curriculum development time by 80%.",
    challenge: "The client held dense, fragmented information-security documentation that had to feed both certification training and operational knowledge management. Manual restructuring would have taken months. Generic AI summarization couldn't preserve technical fidelity.",
    approach: [
      "Built an expert-defined knowledge model and tagging taxonomy for security domains.",
      "Used AI to extract, restructure, and metadata-tag the source corpus at scale.",
      "Layered expert audits on the AI output before any content was promoted into the training catalog.",
      "Wired the curated knowledge into both the learning experience and a downstream RAG layer."
    ],
    outcome: [
      "80% reduction in curriculum development time vs. prior baseline.",
      "Single curated knowledge base now powers both training and operational queries.",
      "Reusable pipeline maintains the knowledge base as standards evolve."
    ],
    expertRole: "Defined the knowledge model, taxonomy, audit rubrics, and final training quality gates.",
    aiRole: "Extracted, restructured, and tagged the source documentation under expert guardrails."
  },

  {
    id: "sales-enablement-prototype",
    title: "Sales Enablement AI Prototype",
    tagline: "High-design AI product prototype with workflow logic, content intelligence, and UX direction.",
    domain: "Investment Management",
    sectorDetail: "Investment management tech sales simulations with real-time coaching.",
    categoryLabel: "Application Prototype",
    categoryId: "enablement-apps",
    tags: ["Prototype", "Sales Enablement", "Coaching"],
    metric: "4 weeks",
    metricLabel: "From idea to secure prototype",
    accent: "pink",
    brief: "Translated a sales enablement vision into a high-fidelity, secure AI prototype with real-time coaching, content intelligence, and a designed UX — all in four weeks.",
    challenge: "An investment-management client wanted to see how AI could change tech sales conversations, but a generic chatbot wouldn't survive contact with real product complexity. They needed a credible, secure, demo-ready prototype to align stakeholders.",
    approach: [
      "Co-designed scenario archetypes and coaching logic with sales leaders.",
      "Engineered workflow logic and content intelligence under bounded AI behavior.",
      "Layered UX direction so the prototype communicated the product story end-to-end.",
      "Operated inside a secure-mode pipeline appropriate for the financial domain."
    ],
    outcome: [
      "Idea → working, secure prototype in 4 weeks.",
      "Real-time coaching simulator credibly modeled high-stakes sales conversations.",
      "Prototype became the alignment artifact across product, sales, and exec stakeholders."
    ],
    expertRole: "Set scenario realism, coaching standards, security posture, and UX intent.",
    aiRole: "Powered scenario response, real-time coaching prompts, and content intelligence."
  },

  {
    id: "adaptive-leadership-simulation",
    title: "Adaptive Leadership Simulation",
    tagline: "Multi-stage scenario engine with scoring, feedback, and expert-calibrated outcomes.",
    domain: "Education Leadership",
    sectorDetail: "School leadership and administration simulations and training.",
    categoryLabel: "Simulation Platform",
    categoryId: "enablement-apps",
    tags: ["Simulation", "Leadership", "Adaptive"],
    metric: "5K+",
    metricLabel: "Global learners standardised",
    accent: "teal",
    brief: "Scaled scenario-based leadership development to over 5,000 learners worldwide via a multi-stage simulation engine with expert-calibrated scoring and feedback.",
    challenge: "School leadership development relied on workshops and case discussions that couldn't standardize quality across districts and geographies. The client needed scenario-based PD that scaled judgment practice without diluting the standard of practice.",
    approach: [
      "Co-developed scenarios with veteran school leaders and administrators.",
      "Built a multi-stage scenario engine with branching, scoring, and adaptive feedback.",
      "Calibrated outcomes against leadership standards via expert review.",
      "Layered analytics so districts could surface common patterns and target coaching."
    ],
    outcome: [
      "Standardized leadership PD across 5,000+ learners worldwide.",
      "Districts gained pattern-level insight to focus coaching investment.",
      "Scenario library continues expanding without proportional authoring cost."
    ],
    expertRole: "Designed scenarios, scoring logic, and coaching standards aligned to leadership rubrics.",
    aiRole: "Ran branching logic, scoring, and feedback generation inside expert-set guardrails."
  },

  {
    id: "ai-content-production",
    title: "AI Content Production Engine",
    tagline: "Repeatable AI workflows with expert review, templates, and multi-format output.",
    domain: "Legal IP",
    sectorDetail: "Legal intellectual property content for books, training, and digital resources.",
    categoryLabel: "Content Pipeline",
    categoryId: "publishing-workflows",
    tags: ["Pipeline", "Multi-format", "Editorial"],
    metric: "8×",
    metricLabel: "Throughput vs. manual drafting",
    accent: "pink",
    brief: "Built a repeatable, expert-audited AI content production engine that multiplied multi-format publishing throughput by 8× for a legal IP client.",
    challenge: "A legal IP publisher needed to ship books, training assets, and digital resources from the same source authority — at a velocity manual drafting could not match — without diluting editorial standards or legal accuracy.",
    approach: [
      "Modeled templates, tone, and editorial standards with subject-matter editors.",
      "Built AI pipelines for first-pass drafting, restructuring, and multi-format conversion.",
      "Layered expert review gates with rubrics tuned for legal accuracy.",
      "Set up retrieval-grounded generation against the curated source authority."
    ],
    outcome: [
      "8× throughput uplift vs. prior manual baseline.",
      "Single source authority feeding books, training, and digital outputs consistently.",
      "Editorial standards held while velocity scaled."
    ],
    expertRole: "Defined editorial tone, templates, legal-accuracy rubrics, and review gates.",
    aiRole: "Drafted, restructured, and reformatted content against expert templates and the source authority."
  },

  {
    id: "custom-knowledge-tooling",
    title: "Custom Knowledge Workflow Tooling",
    tagline: "Structured knowledge workflows with AI-assisted interfaces for reuse and retrieval.",
    domain: "Fintech",
    sectorDetail: "Memory banks and RAGs capturing fintech enterprise knowledge.",
    categoryLabel: "Knowledge Tooling",
    categoryId: "enterprise-knowledge",
    tags: ["RAG", "Memory Banks", "Retrieval"],
    metric: "60%",
    metricLabel: "Less information retrieval time",
    accent: "teal",
    brief: "Stood up custom knowledge workflow tooling — memory banks plus RAG retrieval, surfaced through AI-assisted interfaces — that cut information retrieval time by 60% for a fintech enterprise.",
    challenge: "Critical fintech knowledge was diffused across people, drives, and tools. Frontline and back-office teams burned cycles tracking down the same information again and again. Search returned noise; chatbots couldn't be trusted with regulated content.",
    approach: [
      "Mapped the knowledge model and high-value retrieval paths with subject leads.",
      "Built memory banks and RAG layers grounded in validated sources, with strict citation discipline.",
      "Designed AI-assisted retrieval and reuse interfaces tuned to the workflow context.",
      "Layered governance so updates and revisions propagated cleanly through the system."
    ],
    outcome: [
      "60% reduction in information retrieval time.",
      "Knowledge reuse became default rather than rediscovery.",
      "Foundation in place for downstream regulated-content AI products."
    ],
    expertRole: "Defined trust model, taxonomy, governance, and retrieval interface intent.",
    aiRole: "Powered retrieval, summarization, and reuse interfaces against validated source bases."
  }
];
