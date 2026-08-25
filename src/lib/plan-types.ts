export type PlanCompetitor = {
  name: string;
  weakness: string;
  pricing: string;
};

export type PlanTier = {
  name: string;
  price: string;
  includes: string;
};

export type PlanChannel = {
  name: string;
  tactic: string;
  cadence: string;
  firstAction: string;
};

export type PlanBrandColor = {
  name: string;
  hex: string;
  use: string;
};

export type LaunchAction = {
  day: number;
  action: string;
  physical: boolean;
  minutes: number;
  where: string;
  steps: string[];
  doneWhen: string;
};

export type TechItem = {
  tool: string;
  purpose: string;
  cost: string;
  setup: string;
  steps: string[];
};

export type PromptTemplate = {
  title: string;
  prompt: string;
};

export type LegalItem = {
  item: string;
  notes: string;
  url: string;
  steps: string[];
};

export type NextStep = {
  task: string;
  due: string;
  physical: boolean;
  steps: string[];
  doneWhen: string;
};

export type ImplementationPlaybook = {
  phase: string;
  title: string;
  why: string;
  minutes: number;
  physical: boolean;
  steps: string[];
  script: string;
  tools: string[];
  doneWhen: string;
};

export type BusinessPlan = {
  title: string;
  city: string;
  state: string;
  zip: string;
  niche: string;
  executiveSummary: {
    headline: string;
    localMarketSize: string;
    opportunity: string;
  };
  marketValidation: {
    demographics: string;
    competitors: PlanCompetitor[];
    pricingGaps: string;
  };
  businessModel: {
    rationale: string;
    tiers: PlanTier[];
  };
  targetCustomer: {
    persona: string;
    communities: string[];
    locations: string[];
  };
  growthStrategy: {
    overview: string;
    channels: PlanChannel[];
  };
  brand: {
    names: string[];
    taglines: string[];
    colors: PlanBrandColor[];
    logoDirection: string;
  };
  launchTimeline: LaunchAction[];
  techStack: TechItem[];
  aiPlaybook: {
    dailyRoutine: string;
    prompts: PromptTemplate[];
  };
  legal: {
    state: string;
    items: LegalItem[];
  };
  nextSteps: NextStep[];
  implementation: ImplementationPlaybook[];
};

export type SavedPlan = {
  id: number;
  title: string;
  skill: string;
  zip: string;
  budget: string;
  city: string | null;
  state: string | null;
  niche: string | null;
  createdAt: string;
  plan: BusinessPlan;
};
