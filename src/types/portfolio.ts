export type ProjectSlug =
  | 'roadvision-ai'
  | 'datalens-global'
  | 'rooted-food-platform'
  | 'blume-research'
  | 'aether-weather'
  | 'newsmag-intelligence'
  | 'omniword-studio'
  | 'rigwise-pc-recommender'
  | 'resucraft-pro'
  | 'juixer-archive';

export type ProjectDomain =
  | 'AI & Computer Vision'
  | 'Data & Analytics'
  | 'Backend & Microservices'
  | 'Frontend & Web UX'
  | 'Published Research';

export type InteractiveDemoType =
  | 'roadvision-inspector'
  | 'datalens-governance'
  | 'rooted-schema-kpi'
  | 'blume-benchmark'
  | 'aether-dsa-lab'
  | 'architecture-overview';

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
  verified: boolean;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  layer: 'client' | 'gateway' | 'service' | 'data' | 'external';
  portOrTech?: string;
}

export interface ArchitectureFlowStep {
  step: string;
  from: string;
  to: string;
  protocol: string;
  description: string;
}

export interface TechDecision {
  technology: string;
  category: string;
  rationale: string;
}

export interface EngineeringChallenge {
  title: string;
  symptomOrConstraint: string;
  engineeringSolution: string;
  outcome: string;
}

export interface ProjectRoadmapItem {
  feature: string;
  status: 'Implemented' | 'Planned Next Step';
  notes: string;
}

export interface ProjectCaseStudy {
  problem: {
    headline: string;
    context: string;
    painPoints: string[];
  };
  solution: {
    headline: string;
    summary: string;
    keyCapabilities: string[];
  };
  architecture: {
    patternName: string;
    summary: string;
    nodes: ArchitectureNode[];
    flows: ArchitectureFlowStep[];
  };
  technologyDecisions: TechDecision[];
  engineeringChallenges: EngineeringChallenge[];
  results: {
    summary: string;
    metrics: ProjectMetric[];
  };
  limitationsAndNextSteps: {
    limitations: string[];
    roadmap: ProjectRoadmapItem[];
  };
  sdlc?: SdlcPhaseNote[];
  systemDesign?: SystemDesignNotes;
  algorithms?: DataStructureSpec[];
}

export interface SdlcPhaseNote {
  phase:
    | 'Requirements'
    | 'Design'
    | 'Implementation'
    | 'Testing'
    | 'CI/CD'
    | 'Deployment'
    | 'Monitoring'
    | 'Maintenance';
  summary: string;
  status: 'Done' | 'Designed only' | 'Simulated' | 'Not applicable';
}

export interface ServiceSpec {
  name: string;
  responsibility: string;
  ownsData: string;
  exposes: string;
  techStack: string;
}

export interface SystemDesignNotes {
  requirements: {
    functional: string[];
    nonFunctional: string[];
  };
  dataModel: string;
  apiDesign: string[];
  scaling: string[];
  failureHandling: string[];
  tradeoffs: {
    decision: string;
    chosen: string;
    rejected: string;
    reason: string;
  }[];
  services?: ServiceSpec[];
}

export interface Project {
  slug: ProjectSlug;
  order: number;
  featured: boolean;
  featuredRank?: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  primaryDomain: ProjectDomain;
  domains: ProjectDomain[];
  tags: string[];
  statusBadge: string;
  accentColor: 'indigo' | 'cyan' | 'emerald' | 'violet' | 'amber';
  interactiveDemoType: InteractiveDemoType;
  links: {
    github: string;
    liveDemo?: string;
    secondaryDemo?: string;
    secondaryDemoLabel?: string;
    paperUrl?: string;
    paperPdfUrl?: string;
  };
  heroMetrics: ProjectMetric[];
  caseStudy: ProjectCaseStudy;
}

export type SkillDomainId =
  | 'ai-cv-dl'
  | 'backend-enterprise'
  | 'data-dbms-analytics'
  | 'frontend-interactive'
  | 'devops-quality'
  | 'mba-strategy-pm';

export interface SkillItem {
  name: string;
  roleContext: string;
  appliedInProjects?: ProjectSlug[];
  appliedInExperience?: string[];
  isCoreHighlight?: boolean;
}

export interface SkillCategory {
  id: SkillDomainId;
  title: string;
  subtitle: string;
  iconName: string;
  accent: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  category: 'experience' | 'education' | 'leadership';
  roleOrDegree: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  link?: { label: string; url: string };
}

export interface ModelBenchmarkRow {
  model: string;
  roleInStudy: string;
  precision: number;
  mAP50: number;
  mAP50_95: number;
  fpsCpuOrEdge: number;
  smallObjectCapability: 'Low' | 'Moderate' | 'High' | 'Very High';
  verdict: string;
}

export interface ResearchPublication {
  id: string;
  uin: string;
  issn: string;
  title: string;
  shortTitle: string;
  authors: string[];
  journal: string;
  volumeIssue: string;
  date: string;
  publicationUrl: string;
  pdfDownloadUrl: string;
  abstract: string;
  researchQuestion: string;
  datasetDetails: string;
  methodologySteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  benchmarks: ModelBenchmarkRow[];
  keyFindings: string[];
  limitations: string[];
}

export interface DataStructureSpec {
  requirement: string;
  structure: string;
  typescriptSignature: string;
  complexity: string;
  rationale: string;
}

