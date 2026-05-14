export interface ActionableNode {
  id: string;
  label: string;
  microBlurb: string;
  expandedBlurb: string;
  whatAIDoes: string;
  whatExpertsDo: string;
  ctaText: string;
  proofCases?: string[];
}

export interface PrimaryCategory {
  id: string;
  label: string;
  blurb: string;
  nodes: ActionableNode[];
}

export const siteContent = {
  hero: {
    headline: "Human Expertise. AI Amplified.",
    subheadline: "PlatypAI transforms senior learning and design expertise into scalable AI-native systems, from curriculum architecture and knowledge hubs to bespoke apps and enterprise workflow design.",
    support: "Explore the map to see what we build, how it works, and where your need fits.",
    centerLabel: "Expert-led systems for learning, knowledge, and AI enablement"
  },
  categories: [
    {
      id: "learning-strategy",
      label: "Learning Strategy and Design",
      blurb: "Expert-led design of curriculum systems, learning architectures, assessment models, and capability pathways.",
      nodes: [
        {
          id: "curriculum-architecture",
          label: "Curriculum Architecture",
          microBlurb: "Design the learning system before building the assets.",
          expandedBlurb: "Build structured curriculum systems around capabilities, roles, progression, and business context.",
          whatAIDoes: "Speeds source analysis, content extraction, structure proposals, and first-pass architecture options.",
          whatExpertsDo: "Define capability logic, sequencing, modality balance, instructional standards, and design quality.",
          ctaText: "Explore Curriculum Architecture",
          proofCases: [
            "From Static Curriculum to Applied Credential: AI-Accelerated Finance Learning Transformation",
            "Healthcare Workforce Curriculum Blueprint",
            "Compliance Auditor Training: Standards Mastery Through Structured Microlearning and Application"
          ]
        },
        {
          id: "learning-experience",
          label: "Learning Experience Strategy",
          microBlurb: "Shape the journey, not just the course.",
          expandedBlurb: "Design how learning unfolds across formats, practice moments, reinforcement, and user context.",
          whatAIDoes: "Helps model pathways, content clusters, experience variants, and draft intervention structures.",
          whatExpertsDo: "Decide how learning should feel, unfold, and perform across contexts and constraints.",
          ctaText: "See Experience Strategy"
        },
        {
          id: "assessment-design",
          label: "Assessment Design",
          microBlurb: "Measure what matters in practice.",
          expandedBlurb: "Build diagnostic, formative, and summative assessment models tied to real performance and decisions.",
          whatAIDoes: "Assists with item drafting, categorization, blueprint mapping, and analysis patterns.",
          whatExpertsDo: "Define constructs, scoring logic, realism, validity expectations, and decision use.",
          ctaText: "View Assessment Design",
          proofCases: [
            "Adaptive Leadership Assessment: Human-Designed, AI-Powered Behavioral Profiling",
            "AI-Based Assessment Generation: From Source Content to Validated Item Banks"
          ]
        },
        {
          id: "prototype-learning",
          label: "Prototype Learning Design",
          microBlurb: "Make the approach visible early.",
          expandedBlurb: "Use rapid prototypes and proof-of-concepts to align stakeholders before full production.",
          whatAIDoes: "Generates prototype variants, initial story structures, draft flows, and mock content.",
          whatExpertsDo: "Determine what to prototype, what fidelity is needed, and what the prototype must prove.",
          ctaText: "Visit Prototype Lab"
        },
        {
          id: "simulation-ready",
          label: "Simulation-Ready Design",
          microBlurb: "Design for decisions, not passive content.",
          expandedBlurb: "Create scenario structures, branching logic, and realism criteria for simulation-led learning.",
          whatAIDoes: "Supports branching drafts, consequence logic, scenario variation, and feedback scaffolding.",
          whatExpertsDo: "Set realism criteria, decision tensions, learning intent, and behavioral consequences.",
          ctaText: "Explore Simulation Design",
          proofCases: [
            "VR Emergency Care Simulation: Translating Clinical Procedures into Immersive Practice"
          ]
        }
      ]
    },
    {
      id: "enablement-apps",
      label: "Custom Learning Enablement Apps",
      blurb: "Bespoke applications and enablement platforms that embed expert-defined learning logic, guided practice, and AI-supported interaction.",
      nodes: [
        {
          id: "diagnostic-apps",
          label: "Diagnostic Apps",
          microBlurb: "Turn evaluation into a usable application.",
          expandedBlurb: "Build custom tools that identify readiness, gaps, strengths, or maturity patterns by role or use case.",
          whatAIDoes: "Powers dynamic scoring, structured questioning, adaptive routing, and results synthesis.",
          whatExpertsDo: "Define diagnostic dimensions, decision rules, reporting meaning, and interpretation thresholds.",
          ctaText: "See Diagnostic Apps",
          proofCases: [
            "Career Profiling Diagnostic System"
          ]
        },
        {
          id: "simulation-platforms",
          label: "Simulation Platforms",
          microBlurb: "Build practice environments with consequences.",
          expandedBlurb: "Create realistic business and learning simulations that let users rehearse judgment in context.",
          whatAIDoes: "Runs branching logic, dynamic responses, scenario retrieval, and consequence feedback.",
          whatExpertsDo: "Design the scenario architecture, decision realism, coaching standards, and pedagogic intent.",
          ctaText: "View Simulation Platforms",
          proofCases: [
            "Decision Rehearsal for School Leaders: Scenario-Based PD at Scale"
          ]
        },
        {
          id: "guided-apps",
          label: "Guided Learning Apps",
          microBlurb: "Support learning in the flow of work.",
          expandedBlurb: "Build apps that guide performance, reflection, capability-building, or task execution in context.",
          whatAIDoes: "Supports real-time prompts, decision assistance, contextual retrieval, and personalization logic.",
          whatExpertsDo: "Decide where support should guide, teach, assess, or reinforce actual work.",
          ctaText: "Explore Guided Apps"
        },
        {
          id: "enablement-platforms",
          label: "Enablement Platforms",
          microBlurb: "Bring journeys, tools, and resources together.",
          expandedBlurb: "Create role-based enablement platforms that combine learning, diagnostics, knowledge, and support.",
          whatAIDoes: "Connects content, workflows, user states, retrieval systems, and adaptive pathways.",
          whatExpertsDo: "Shape platform logic, user roles, journey structures, and instructional coherence.",
          ctaText: "See Enablement Platforms"
        },
        {
          id: "intelligent-interfaces",
          label: "Intelligent Interfaces",
          microBlurb: "Design better interfaces than \"just a chatbot.\"",
          expandedBlurb: "Build purposeful AI-enabled interfaces that guide, retrieve, respond, and support within clear boundaries.",
          whatAIDoes: "Handles interaction, retrieval, smart summaries, response shaping, and adaptive flow.",
          whatExpertsDo: "Define intent boundaries, user guidance, validation behavior, and learning usefulness.",
          ctaText: "View Interface Concepts",
          proofCases: [
            "Conversational AI for Healthcare Behavior Change Training"
          ]
        }
      ]
    },
    {
      id: "publishing-workflows",
      label: "Accelerated Content Publishing",
      blurb: "Expert-governed workflows that turn complex source inputs into structured, high-quality learning and business outputs at scale.",
      nodes: [
        {
          id: "learning-pipelines",
          label: "Learning Content Pipelines",
          microBlurb: "Publish high-quality learning outputs at scale.",
          expandedBlurb: "Convert complex source inputs into structured learning assets through expert-governed workflows.",
          whatAIDoes: "Extracts, structures, drafts, rewrites, tags, and formats content at scale.",
          whatExpertsDo: "Set templates, tone, instructional quality rules, and review criteria.",
          ctaText: "Explore Learning Pipelines"
        },
        {
          id: "documentation-pipelines",
          label: "Documentation Pipelines",
          microBlurb: "Turn complexity into usable documentation.",
          expandedBlurb: "Build workflows that convert fragmented source inputs into manuals, SOP-style content, and operational guides.",
          whatAIDoes: "Converts raw or fragmented inputs into standardized documentation drafts.",
          whatExpertsDo: "Define taxonomy, structural logic, completeness standards, and usability requirements.",
          ctaText: "See Documentation Workflows",
          proofCases: [
            "Technical Microlearning for Automotive Troubleshooting"
          ]
        },
        {
          id: "knowledge-publishing",
          label: "Knowledge-to-Publishing",
          microBlurb: "Move from structured knowledge to repeatable output.",
          expandedBlurb: "Use curated knowledge systems as the source layer for publishing across formats and audiences.",
          whatAIDoes: "Pulls from structured repositories, summarizes source clusters, and drafts reusable outputs.",
          whatExpertsDo: "Determine source trust, output logic, audience fit, and final editorial shape.",
          ctaText: "View Publishing Systems"
        },
        {
          id: "multi-format-conversion",
          label: "Multi-Format Conversion",
          microBlurb: "Convert once, publish many ways.",
          expandedBlurb: "Transform a trusted source base into slides, guides, scripts, job aids, and related formats.",
          whatAIDoes: "Handles cross-format transformation, first-pass redrafting, and output templating.",
          whatExpertsDo: "Define what should change by format and what must remain consistent.",
          ctaText: "Explore Format Conversion"
        },
        {
          id: "review-qa",
          label: "Review and QA",
          microBlurb: "Scale without losing quality.",
          expandedBlurb: "Build review structures that preserve consistency, instructional integrity, and trust across large output volumes.",
          whatAIDoes: "Flags issues, checks structure, supports comparisons, and enforces workflow consistency.",
          whatExpertsDo: "Create standards, judgment rubrics, review gates, and exception rules.",
          ctaText: "See QA Architecture"
        }
      ]
    },
    {
      id: "enterprise-knowledge",
      label: "Enterprise Knowledge Solutions",
      blurb: "Curated, structured, role-aware knowledge systems that support retrieval, learning, performance support, and downstream AI applications.",
      nodes: [
        {
          id: "knowledge-databases",
          label: "Knowledge Databases",
          microBlurb: "Turn scattered information into a usable knowledge base.",
          expandedBlurb: "Structure, tag, and organize diffused knowledge into curated repositories that can support learning and performance.",
          whatAIDoes: "Supports ingestion, extraction, organization, semantic structuring, and metadata enrichment.",
          whatExpertsDo: "Define the knowledge model, boundaries, taxonomy, and validation rules.",
          ctaText: "Explore Knowledge Databases"
        },
        {
          id: "rag-systems",
          label: "RAG Systems",
          microBlurb: "Build knowledge that AI can trust.",
          expandedBlurb: "Create validated source bases and retrieval structures ready to power grounded AI experiences.",
          whatAIDoes: "Organizes source chunks, retrieval layers, grounding logic, and access patterns.",
          whatExpertsDo: "Decide what is trustworthy, what gets surfaced, and what the retrieval system should optimize for.",
          ctaText: "See RAG Systems"
        },
        {
          id: "knowledge-platforms",
          label: "Knowledge Platforms",
          microBlurb: "Make knowledge navigable, not just stored.",
          expandedBlurb: "Build user-facing experiences that help people search, browse, and use complex information effectively.",
          whatAIDoes: "Enables summaries, smart retrieval, search experiences, filtering, and contextual surfacing.",
          whatExpertsDo: "Shape the user journey, browse logic, role relevance, and knowledge utility.",
          ctaText: "View Knowledge Platforms",
          proofCases: [
            "Smart Knowledge Hub: RAG, Personalization, and MoE-Style Content Operations"
          ]
        },
        {
          id: "role-based-knowledge",
          label: "Role-Based Knowledge",
          microBlurb: "Show the right knowledge to the right people.",
          expandedBlurb: "Tailor access, prioritization, and pathways based on role, context, seniority, or need.",
          whatAIDoes: "Filters, prioritizes, and retrieves knowledge based on role-aware logic.",
          whatExpertsDo: "Define role models, information relevance, and what each audience should see first.",
          ctaText: "Explore Role-Based Views"
        },
        {
          id: "knowledge-governance",
          label: "Knowledge Governance",
          microBlurb: "Keep knowledge trustworthy over time.",
          expandedBlurb: "Define the rules that govern what enters, stays, changes, or gets trusted in the system.",
          whatAIDoes: "Supports lifecycle workflows, update flags, audit trails, and structured maintenance prompts.",
          whatExpertsDo: "Set source trust rules, update protocols, review responsibilities, and governance cadence.",
          ctaText: "See Governance Model"
        }
      ]
    },
    {
      id: "ai-consulting",
      label: "AI Adoption Consulting",
      blurb: "Strategic consulting to help organizations identify, prioritize, govern, and scale AI across learning, knowledge, and enablement functions.",
      nodes: [
        {
          id: "opportunity-mapping",
          label: "Opportunity Mapping",
          microBlurb: "Find the real use cases worth pursuing.",
          expandedBlurb: "Identify where AI can create meaningful value across learning, knowledge, and enablement work.",
          whatAIDoes: "Supports pattern analysis, use-case clustering, and initial feasibility framing.",
          whatExpertsDo: "Diagnose opportunity quality, define practical use cases, and filter out noise.",
          ctaText: "Explore Opportunity Mapping"
        },
        {
          id: "ai-roadmaps",
          label: "AI Roadmaps",
          microBlurb: "Turn ambition into a phased plan.",
          expandedBlurb: "Build practical roadmaps for AI adoption across learning and knowledge ecosystems.",
          whatAIDoes: "Models scenarios, sequencing options, and possible pilot paths.",
          whatExpertsDo: "Set priorities, governance logic, build-vs-buy choices, and adoption sequencing.",
          ctaText: "View AI Roadmaps"
        },
        {
          id: "workflow-transformation",
          label: "Workflow Transformation",
          microBlurb: "Redesign how expert work gets done.",
          expandedBlurb: "Rebuild learning, content, and knowledge workflows around expert-first AI amplification.",
          whatAIDoes: "Helps map tasks, automate candidate steps, and model new process structures.",
          whatExpertsDo: "Identify where expertise must originate, where judgment must stay, and how workflows should be rebuilt.",
          ctaText: "Explore Workflow Transformation"
        },
        {
          id: "trust-design",
          label: "Trust Design",
          microBlurb: "Build AI systems that can be trusted.",
          expandedBlurb: "Define the governance, validation, confidentiality, and control structures needed for responsible AI deployment.",
          whatAIDoes: "Supports controlled environments, bounded tool choices, and technical safeguards.",
          whatExpertsDo: "Define acceptable use, review structures, risk thresholds, and deployment posture.",
          ctaText: "See Trust Architecture"
        },
        {
          id: "pilot-advisory",
          label: "Pilot Advisory",
          microBlurb: "Start with the right first move.",
          expandedBlurb: "Help organizations choose, scope, and evaluate pilots before scaling into larger systems.",
          whatAIDoes: "Assists with pilot patterns, prototype framing, and success-metric options.",
          whatExpertsDo: "Decide what should be tested first, what success means, and how to evaluate next steps.",
          ctaText: "Plan a Pilot"
        }
      ]
    }
  ],
  crossCutting: [
    {
      id: "experts-in-the-loop",
      label: "Experts-in-the-Loop",
      description: "PlatypAI does not add human review at the end; it starts with expert logic, standards, and judgment."
    },
    {
      id: "ai-without-compromise",
      label: "AI Without Compromise",
      description: "Match each solution to the right trust model, operating environment, and security posture."
    },
    {
      id: "agentic-workflows",
      label: "Agentic Workflows",
      description: "Build multi-step AI systems around expert methods."
    }
  ]
};
