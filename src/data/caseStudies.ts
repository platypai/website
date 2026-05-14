// Strategic case-study programs.
// We deliberately roll component engagements up into a small number of unified
// value propositions. Each program is what a senior buyer evaluates — not a
// task-level deliverable. Individual engagements are listed inside.

export interface ProgramEngagement {
  title: string;
  sector: string;
  headline: string;
}

export interface CaseStudyProgram {
  id: string;
  title: string;
  tagline: string;
  categoryLabel: string;
  categoryId: string;        // maps to a siteContent category for color theming
  tags: string[];
  brief: string;             // 2-3 sentence strategic narrative
  challenge: string;         // common challenge across the engagements
  approach: string[];        // strategic moves (not task lists)
  outcome: string[];         // strategic outcomes
  expertRole: string;
  aiRole: string;
  engagements: ProgramEngagement[];
}

export const caseStudyPrograms: CaseStudyProgram[] = [
  {
    id: "credential-transformation",
    title: "Legacy Curriculum → Applied Credential",
    tagline: "Turn dense legacy training into role-aware credential pathways at AI speed, under expert governance.",
    categoryLabel: "Learning Strategy & Design",
    categoryId: "learning-strategy",
    tags: ["Curriculum", "Credentialing", "AI Authoring"],
    brief: "Enterprises sit on thousands of hours of legacy training that no one applies. We rebuild those libraries into structured, role-aware credential pathways — combining expert-defined capability logic with AI-accelerated authoring and validated assessment.",
    challenge: "Across regulated industries — financial services, healthcare, compliance auditing — clients had vast catalogues of training that were dense, theoretical, and disconnected from the actual decisions people made on the job. They needed credentials, not content libraries; and they needed them at a velocity their L&D teams could not produce manually.",
    approach: [
      "Anchored design in a capability map tied to real role decisions, not topic taxonomies.",
      "Built AI-assisted extraction, structuring, and authoring pipelines against source content.",
      "Set instructional standards, scoring rubrics, and reviewer gates that every AI draft must pass.",
      "Layered formative checks, applied scenarios, and capstone assessments to make mastery measurable."
    ],
    outcome: [
      "Authoring throughput accelerated by an order of magnitude vs. prior baselines.",
      "Coherent, audited credential pathways replaced ad-hoc course catalogues.",
      "Standards coverage became visible and reportable per learner.",
      "Reusable pipelines now power ongoing refresh cycles."
    ],
    expertRole: "Defines capability logic, instructional standards, assessment validity, and final editorial sign-off.",
    aiRole: "Accelerates source analysis, structural drafting, item generation, and cross-content consistency.",
    engagements: [
      {
        title: "AI-Accelerated Finance Learning Transformation",
        sector: "Financial Services",
        headline: "Static curriculum reborn as an applied credential pathway."
      },
      {
        title: "Healthcare Workforce Curriculum Blueprint",
        sector: "Healthcare",
        headline: "Single-source-of-truth blueprint across clinical, operational, and supervisory tracks."
      },
      {
        title: "Compliance Auditor Standards Mastery",
        sector: "Regulated Industry",
        headline: "Standards documentation converted to structured microlearning with measurable mastery."
      }
    ]
  },

  {
    id: "validated-assessment",
    title: "Validated Assessment & Profiling at Scale",
    tagline: "Defensible, expert-governed assessment intelligence — from item banks to behavioral profiles.",
    categoryLabel: "Assessment & Diagnostics",
    categoryId: "learning-strategy",
    tags: ["Assessment", "Profiling", "Validation"],
    brief: "Off-the-shelf AI generation produces items that don't pass psychometric scrutiny. We design end-to-end pipelines that combine expert-defined constructs and rubrics with AI scale, so assessment is defensible, validated, and useful for development — not just measurement theater.",
    challenge: "Clients across enterprise L&D, EdTech, and workforce development needed assessments that scaled, but couldn't sacrifice validity. Manual authoring couldn't keep pace; ungoverned AI generation produced items that failed expert review and personalized reports that read like horoscopes.",
    approach: [
      "Anchored each system in an expert-validated construct or capability model.",
      "Built blueprint-driven generation with explicit coverage, difficulty, and cognitive-level targets.",
      "Layered automated quality screens for stem clarity, distractor quality, and bias.",
      "Routed flagged items and edge-case profiles to expert reviewers with structured rubrics."
    ],
    outcome: [
      "Validated item banks produced in days rather than weeks.",
      "Behavioral profiling scaled to thousands of users without sacrificing depth.",
      "First-pass review acceptance lifted with every cycle as decisions fed back into the model.",
      "Reusable pipelines now power multiple downstream assessment products."
    ],
    expertRole: "Defines constructs, blueprints, scoring logic, and review rubrics.",
    aiRole: "Generates, screens, scores, and synthesizes — within expert-set quality gates.",
    engagements: [
      {
        title: "Adaptive Leadership Assessment",
        sector: "Enterprise L&D",
        headline: "Human-designed behavioral constructs, AI-powered scoring and narrative profiles."
      },
      {
        title: "AI-Based Assessment Item Generation",
        sector: "EdTech",
        headline: "Source content to validated item banks via expert-governed pipeline."
      },
      {
        title: "Career Profiling Diagnostic System",
        sector: "Workforce Development",
        headline: "Adaptive diagnostic that produces personalized, actionable pathway recommendations."
      }
    ]
  },

  {
    id: "decision-rehearsal",
    title: "Decision Rehearsal & Simulation",
    tagline: "Practice judgment, not procedure — branching, conversational, and immersive environments that scale.",
    categoryLabel: "Simulation & Intelligent Interfaces",
    categoryId: "enablement-apps",
    tags: ["Simulation", "Conversational AI", "Decision-Making"],
    brief: "Procedural recall is not the same as judgment under pressure. We design rehearsal environments — VR, branching scenarios, conversational AI — that let people practice the decisions that actually matter, with feedback grounded in real-world standards rather than chatbot praise.",
    challenge: "Clinical procedures, school leadership decisions, and behavior change conversations all required practice. Live drills and one-to-one coaching couldn't scale; generic AI tools sacrificed clinical or pedagogical integrity. The client need was the same: scalable rehearsal that didn't erode the standard of practice.",
    approach: [
      "Mapped each domain to decision points, tensions, and consequences — not just step sequences.",
      "Co-developed scenarios and patient/leader archetypes with senior practitioners.",
      "Engineered branching logic and conversational paths inside expert-defined guardrails.",
      "Aligned feedback to validated frameworks (clinical, leadership, behavior change) rather than free-form critique."
    ],
    outcome: [
      "Learners rehearsed authentic, high-stakes decisions in safe, repeatable environments.",
      "Reduced reliance on costly in-person simulation and one-to-one coaching slots.",
      "Behavioral telemetry now informs targeted coaching at scale.",
      "Scenario libraries continue expanding without proportional authoring cost."
    ],
    expertRole: "Sets realism criteria, decision tensions, guardrails, and feedback rubrics.",
    aiRole: "Runs branching logic, generates scenario variants, and produces grounded adaptive feedback.",
    engagements: [
      {
        title: "VR Emergency Care Simulation",
        sector: "Healthcare",
        headline: "Clinical procedures translated into immersive practice with consequence logic."
      },
      {
        title: "Decision Rehearsal for School Leaders",
        sector: "K-12 Education",
        headline: "Scenario-based PD that scales judgment practice across districts."
      },
      {
        title: "Conversational AI for Healthcare Behavior Change",
        sector: "Healthcare",
        headline: "Bounded, clinically aligned interface for rehearsing evidence-based conversations."
      }
    ]
  },

  {
    id: "knowledge-operations",
    title: "From Scattered Knowledge to Usable Intelligence",
    tagline: "Trustworthy, role-aware knowledge systems that power both people and downstream AI products.",
    categoryLabel: "Knowledge & Content Operations",
    categoryId: "enterprise-knowledge",
    tags: ["Knowledge Hub", "RAG", "Documentation"],
    brief: "Knowledge is fragmented across drives, wikis, manuals, and team channels. Generic AI assistants hallucinate; search returns noise. We design role-aware knowledge systems — validated sources, governed retrieval, and operational pipelines — that work for both frontline users and the AI products built on top.",
    challenge: "Enterprises and technical workforces had thick manuals and sprawling repositories but no fast, trustworthy way to find the right answer for the situation in front of them. Time-to-answer mattered; reading time didn't. They needed a foundation that AI could be trusted to build on.",
    approach: [
      "Defined the knowledge model, source-trust rules, and role-relevance logic with subject-matter leads.",
      "Built validated source bases and RAG retrieval layers with strict citation discipline.",
      "Designed role-aware surfacing so the right people see the right knowledge first.",
      "Stood up MoE-style content operations: specialized agents for ingestion, summarization, and review, under expert governance."
    ],
    outcome: [
      "Knowledge became navigable, trustworthy, and role-aware across functions.",
      "Time-to-answer reduced meaningfully for frontline and technical users.",
      "Documentation became living rather than locked inside PDFs.",
      "Foundation in place for downstream AI products to inherit, not rebuild."
    ],
    expertRole: "Defines trust model, taxonomy, governance cadence, completeness standards, and user journey logic.",
    aiRole: "Powers ingestion, retrieval, summarization, and role-aware surfacing under those standards.",
    engagements: [
      {
        title: "Smart Enterprise Knowledge Hub",
        sector: "Enterprise",
        headline: "RAG-grounded retrieval with role-aware personalization and MoE-style content ops."
      },
      {
        title: "Technical Microlearning for Automotive Troubleshooting",
        sector: "Automotive",
        headline: "Fragmented service docs converted to symptom-to-procedure microlearning, usable at the bay."
      }
    ]
  }
];
