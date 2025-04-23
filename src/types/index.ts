export type UserRole = 'freelancer' | 'entrepreneur' | 'team' | 'creator' | '';

export type WorkCategory = 'design' | 'development' | 'writing' | 'marketing' | 'other';

export type Tool = {
  id: string;
  name: string;
  icon: string;
  selected?: boolean;
};

export type TrackingGoal = 'subscription' | 'usage' | 'unused' | 'suggestions';

export type OnboardingData = {
  role: UserRole;
  workCategories: WorkCategory[];
  country: string;
  tools: Tool[];
  goals: TrackingGoal[];
};