// Type definitions for the application

export interface WheelEntry {
  id: string;
  label: string;
  color: string;
}

export interface WheelState {
  entries: WheelEntry[];
  result: string | null;
  results?: string[]; // History of results
  isSpinning: boolean;
  wheelName?: string;
  description?: string;
}

export interface SharedWheel {
  id: string;
  entries: WheelEntry[];
  result?: string;
  wheelName?: string;
  description?: string;
  isPublic: boolean;
  shareCount: number;
  createdAt: string;
  hasBeenShared: boolean;
  entryCount: number;
  hasMeaningfulContent: boolean;
  isTestWheel: boolean;
}

export interface UseCasePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  useCase: string;
  context: string;
  benefits: string[];
  steps: string[];
  relatedUseCases: string[];
  relatedFeatures: string[];
}

export interface FeaturePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  featureName: string;
  featureDescription: string;
  benefits: string[];
  howItWorks: string[];
  useCases: string[];
  comparisonPoints: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

export interface PageMetadata {
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  canonical: string;
  robots?: "index, follow" | "noindex, follow" | "noindex, nofollow";
}

