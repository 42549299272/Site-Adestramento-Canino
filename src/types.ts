export interface PromiseItem {
  id: string;
  title: string;
  promiseQuote: string;
  pain: string;
  solution: string;
  actionSummary: string;
  badge: string;
}

export interface ModuleWeek {
  week: number;
  title: string;
  description: string;
  topics: string[];
  keyOutcome: string;
  exerciseTime: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  originalPrice: string;
  description: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  dogName: string;
  dogBreed: string;
  dogAge: string;
  beforeProblem: string;
  afterResult: string;
  quote: string;
  daysToResult: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
