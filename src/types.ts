export interface AptitudeResult {
  interpersonal: string; // 대인관계 (중상/중간/낮음 등)
  clerical: string; // 사무처리
  analytical: string; // 분석적 사고
  preferredEnv: string; // 선호환경
  interests: string; // 흥미 분야
  rawScores?: string; // 기타 점수/텍스트
}

export interface AdditionalInfo {
  unemployedPeriod: string; // 쉬었음 기간
  jobSearchPeriod: string; // 구직활동 기간
  priorExperience: string; // 이전 취업 경험
  major: string; // 전공
  certificates: string; // 자격증
  desiredJob: string; // 희망 직무
  desiredLocation: string; // 희망 근무지역
  desiredType: string; // 희망 고용형태
  desiredWage: string; // 희망 임금
  availableTime: string; // 근무 가능 시간
  constraints: string; // 교통, 가족돌봄, 건강 등 제약요인
  nationalSupport: string; // 국민취업지원제도 참여 여부
  leapSupport: string; // 구직자 도약보장 패키지 참여 여부
  trainingHope: string; // 직업훈련 희망 여부
  psychologicalNeeded: string; // 심리안정 지원 필요 여부
}

export interface ClientIntake {
  clientName: string; // 마스킹 권장 (예: 홍*동)
  memo: string; // 상담 메모 (필수)
  testResult: AptitudeResult;
  additionalInfo: AdditionalInfo;
}

export interface RiskAnalysis {
  level: string;
  citation: string;
  reasoning: string;
  additionalVerification: string;
  notes: string;
}

export interface IndecisionType {
  typeName: string;
  scoreRange: string;
  grade: string;
  rawEvidence: string;
}

export interface IndecisionAnalysis {
  types: IndecisionType[];
  primaryType: string;
  secondaryType: string;
  reasoning: string;
  additionalVerification: string;
}

export interface AptitudeInterpretation {
  strengths: string;
  interests: string;
  environment: string;
  jobDirections: string;
  usePoints: string;
}

export interface CareerDirections {
  exploreJobs: string;
  excludeJobs: string;
  criteria: string;
  shortGoal: string;
  mediumGoal: string;
  additionalChecks: string;
}

export interface LinkageItem {
  serviceName: string;
  necessity: string;
  checklist: string;
  guidance: string;
}

export interface ActionPlan {
  exploreDirection: string;
  understandingDirection: string;
  learningDirection: string;
  psychologicalDirection: string;
}

export interface InterventionStrategy {
  priority: string;
  strategy: string;
  details: string;
}

export interface StructuredAnalysis {
  riskAnalysis: RiskAnalysis;
  indecisionAnalysis: IndecisionAnalysis;
  aptitudeInterpretation: AptitudeInterpretation;
  careerDirections: CareerDirections;
  linkages: LinkageItem[];
  actionPlan: ActionPlan;
  interventionStrategies: InterventionStrategy[];
  nextSessionQuestions: string[];
}

export interface AnalysisResponse {
  markdownContent: string;
  structuredData: StructuredAnalysis;
}

export interface CounselingHistoryItem {
  id: string;
  clientName: string;
  createdAt: string;
  intake: ClientIntake;
  analysis: AnalysisResponse;
}
