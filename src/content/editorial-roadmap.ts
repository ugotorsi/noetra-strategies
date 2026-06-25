export type EditorialCluster =
  | "strategic-intelligence"
  | "legal-tech-ai-assisted-analysis"
  | "compliance-operational-risk"
  | "corporate-institutional-advisory";

export type EditorialRoadmapItem = {
  cluster: EditorialCluster;
  titleIt: string;
  titleEn: string;
  slugIt: string;
  slugEn: string;
  primaryTopic: string;
  seoIntent: string;
  targetReader: string;
  priority: "high" | "medium" | "low";
  editorialNotes: string;
  relatedPublishedInsightSlugs: {
    it: string[];
    en: string[];
  };
};

// Internal roadmap only: content planning for future publication.
export const editorialRoadmap: EditorialRoadmapItem[] = [
  {
    cluster: "strategic-intelligence",
    titleIt: "Decision governance per board in scenari multi-stakeholder",
    titleEn: "Board decision governance in multi-stakeholder scenarios",
    slugIt: "decision-governance-board-scenari-multi-stakeholder",
    slugEn: "board-decision-governance-multi-stakeholder-scenarios",
    primaryTopic: "Decision Governance",
    seoIntent: "Intercettare query executive su governance decisionale in contesti complessi.",
    targetReader: "Board members, general counsel, strategic advisors",
    priority: "high",
    editorialNotes: "Focus su framework pratici, check-list di escalation e accountability trail.",
    relatedPublishedInsightSlugs: {
      it: ["intelligenza-strategica-decisioni-complesse"],
      en: ["strategic-intelligence-complex-decisions"],
    },
  },
  {
    cluster: "strategic-intelligence",
    titleIt: "Mandati complessi: come evitare disallineamenti tra analisi ed execution",
    titleEn: "Complex mandates: preventing gaps between analysis and execution",
    slugIt: "mandati-complessi-allineamento-analisi-execution",
    slugEn: "complex-mandates-analysis-execution-alignment",
    primaryTopic: "Execution Governance",
    seoIntent: "Posizionarsi su intenti legati a execution strategy e orchestration.",
    targetReader: "COO, PMO strategist, transformation leads",
    priority: "high",
    editorialNotes: "Includere matrice decisionale e indicatori di continuita operativa.",
    relatedPublishedInsightSlugs: {
      it: ["intelligenza-strategica-decisioni-complesse"],
      en: ["strategic-intelligence-complex-decisions"],
    },
  },
  {
    cluster: "strategic-intelligence",
    titleIt: "Signal intelligence per anticipare escalation regolatorie",
    titleEn: "Signal intelligence to anticipate regulatory escalation",
    slugIt: "signal-intelligence-anticipare-escalation-regolatorie",
    slugEn: "signal-intelligence-anticipate-regulatory-escalation",
    primaryTopic: "Signal Intelligence",
    seoIntent: "Catturare traffico su early-warning governance e regulatory monitoring.",
    targetReader: "Risk managers, regulatory affairs, institutional advisors",
    priority: "medium",
    editorialNotes: "Taglio operativo con esempi di trigger e protocolli di risposta.",
    relatedPublishedInsightSlugs: {
      it: ["compliance-operational-intelligence-governo-rischio-documenti-decisioni"],
      en: ["compliance-operational-intelligence-governing-risk-documents-decisions"],
    },
  },
  {
    cluster: "legal-tech-ai-assisted-analysis",
    titleIt: "AI-assisted analysis: standard di supervisione nei workflow legali",
    titleEn: "AI-assisted analysis: supervision standards for legal workflows",
    slugIt: "ai-assisted-analysis-standard-supervisione-workflow-legali",
    slugEn: "ai-assisted-analysis-supervision-standards-legal-workflows",
    primaryTopic: "AI Governance in Legal Workflows",
    seoIntent: "Rispondere a query su human oversight e AI governance in legal-tech.",
    targetReader: "Legal ops leads, legal-tech managers, compliance counsel",
    priority: "high",
    editorialNotes: "Evidenziare soglie di confidenza, eccezioni e auditability.",
    relatedPublishedInsightSlugs: {
      it: ["legal-tech-ai-analysis-contesti-regolatori-contenziosi"],
      en: ["legal-tech-ai-assisted-analysis-regulatory-complex-litigation"],
    },
  },
  {
    cluster: "legal-tech-ai-assisted-analysis",
    titleIt: "Evidence governance: tassonomie e timeline difendibili",
    titleEn: "Evidence governance: defensible taxonomy and timeline design",
    slugIt: "evidence-governance-tassonomie-timeline-difendibili",
    slugEn: "evidence-governance-defensible-taxonomy-timeline-design",
    primaryTopic: "Evidence Governance",
    seoIntent: "Presidiare ricerche su document governance e litigation readiness.",
    targetReader: "Litigation teams, forensic analysts, legal project managers",
    priority: "high",
    editorialNotes: "Inserire blueprint di architettura documentale e ruoli di validazione.",
    relatedPublishedInsightSlugs: {
      it: ["legal-tech-ai-analysis-contesti-regolatori-contenziosi"],
      en: ["legal-tech-ai-assisted-analysis-regulatory-complex-litigation"],
    },
  },
  {
    cluster: "legal-tech-ai-assisted-analysis",
    titleIt: "Legal-tech stack: criteri di selezione per contesti regolati",
    titleEn: "Legal-tech stack: selection criteria for regulated environments",
    slugIt: "legal-tech-stack-criteri-selezione-contesti-regolati",
    slugEn: "legal-tech-stack-selection-criteria-regulated-environments",
    primaryTopic: "Legal-Tech Stack Strategy",
    seoIntent: "Intercettare intenti comparativi su piattaforme legal-tech per enterprise.",
    targetReader: "CIO, legal innovation leads, procurement governance",
    priority: "medium",
    editorialNotes: "Matrice buy-vs-build e criteri compliance-by-design.",
    relatedPublishedInsightSlugs: {
      it: ["legal-tech-ai-analysis-contesti-regolatori-contenziosi"],
      en: ["legal-tech-ai-assisted-analysis-regulatory-complex-litigation"],
    },
  },
  {
    cluster: "compliance-operational-risk",
    titleIt: "Dal controllo formale al presidio continuo del rischio operativo",
    titleEn: "From formal control to continuous operational risk oversight",
    slugIt: "controllo-formale-presidio-continuo-rischio-operativo",
    slugEn: "formal-control-continuous-operational-risk-oversight",
    primaryTopic: "Operational Risk Governance",
    seoIntent: "Posizionarsi su query legate a continuous compliance e risk intelligence.",
    targetReader: "Compliance officers, risk committee members, COO",
    priority: "high",
    editorialNotes: "Approccio a indicatori leading/lagging e policy escalation.",
    relatedPublishedInsightSlugs: {
      it: ["compliance-operational-intelligence-governo-rischio-documenti-decisioni"],
      en: ["compliance-operational-intelligence-governing-risk-documents-decisions"],
    },
  },
  {
    cluster: "compliance-operational-risk",
    titleIt: "Decision continuity: protocollo operativo per crisi regolatorie",
    titleEn: "Decision continuity: operating protocol for regulatory crises",
    slugIt: "decision-continuity-protocollo-operativo-crisi-regolatorie",
    slugEn: "decision-continuity-operating-protocol-regulatory-crises",
    primaryTopic: "Decision Continuity",
    seoIntent: "Coprire intenti su crisis governance e resilienza decisionale.",
    targetReader: "Executive committees, crisis managers, legal leadership",
    priority: "medium",
    editorialNotes: "Includere modello di command-room e update cadence.",
    relatedPublishedInsightSlugs: {
      it: ["compliance-operational-intelligence-governo-rischio-documenti-decisioni"],
      en: ["compliance-operational-intelligence-governing-risk-documents-decisions"],
    },
  },
  {
    cluster: "compliance-operational-risk",
    titleIt: "Compliance intelligence: KPI utili per il top management",
    titleEn: "Compliance intelligence: KPIs that matter for top management",
    slugIt: "compliance-intelligence-kpi-top-management",
    slugEn: "compliance-intelligence-kpis-top-management",
    primaryTopic: "Compliance Intelligence",
    seoIntent: "Attirare query executive su KPI di compliance e governance.",
    targetReader: "CEOs, board secretaries, compliance strategists",
    priority: "medium",
    editorialNotes: "Confrontare KPI volumetrici vs KPI decisionali orientati all'azione.",
    relatedPublishedInsightSlugs: {
      it: ["compliance-operational-intelligence-governo-rischio-documenti-decisioni"],
      en: ["compliance-operational-intelligence-governing-risk-documents-decisions"],
    },
  },
  {
    cluster: "corporate-institutional-advisory",
    titleIt: "Advisory istituzionale: struttura di mandato e accountability",
    titleEn: "Institutional advisory: mandate structure and accountability",
    slugIt: "advisory-istituzionale-struttura-mandato-accountability",
    slugEn: "institutional-advisory-mandate-structure-accountability",
    primaryTopic: "Institutional Advisory Governance",
    seoIntent: "Rafforzare authority su institutional advisory e mandate governance.",
    targetReader: "Institutional investors, legal directors, strategic committees",
    priority: "high",
    editorialNotes: "Esplicitare ruoli, dipendenze e logiche di reporting executive.",
    relatedPublishedInsightSlugs: {
      it: ["intelligenza-strategica-decisioni-complesse"],
      en: ["strategic-intelligence-complex-decisions"],
    },
  },
  {
    cluster: "corporate-institutional-advisory",
    titleIt: "M&A e contesti regolatori: orchestrazione multidisciplinare",
    titleEn: "M&A in regulated contexts: multidisciplinary orchestration",
    slugIt: "m-a-contesti-regolatori-orchestrazione-multidisciplinare",
    slugEn: "m-and-a-regulated-contexts-multidisciplinary-orchestration",
    primaryTopic: "Corporate Transaction Governance",
    seoIntent: "Intercettare traffico su M&A governance e regulatory integration.",
    targetReader: "Corporate development leaders, M&A legal teams, CFO advisors",
    priority: "medium",
    editorialNotes: "Concentrarsi su sequenza decisionale e rischi di integrazione.",
    relatedPublishedInsightSlugs: {
      it: [
        "intelligenza-strategica-decisioni-complesse",
        "legal-tech-ai-analysis-contesti-regolatori-contenziosi",
      ],
      en: [
        "strategic-intelligence-complex-decisions",
        "legal-tech-ai-assisted-analysis-regulatory-complex-litigation",
      ],
    },
  },
  {
    cluster: "corporate-institutional-advisory",
    titleIt: "Interfaccia istituzioni-impresa: governance della comunicazione critica",
    titleEn: "Institution-enterprise interface: critical communication governance",
    slugIt: "interfaccia-istituzioni-impresa-governance-comunicazione-critica",
    slugEn: "institution-enterprise-interface-critical-communication-governance",
    primaryTopic: "Institutional Communication Governance",
    seoIntent: "Coprire query su reputational risk e institutional communication strategy.",
    targetReader: "General counsel, public affairs leads, executive advisors",
    priority: "low",
    editorialNotes: "Taglio istituzionale, no PR generiche; includere governance protocol.",
    relatedPublishedInsightSlugs: {
      it: ["compliance-operational-intelligence-governo-rischio-documenti-decisioni"],
      en: ["compliance-operational-intelligence-governing-risk-documents-decisions"],
    },
  },
];
