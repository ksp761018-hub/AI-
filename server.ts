import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

let aiClient: GoogleGenAI | null = null;

// Lazy initialization of GoogleGenAI SDK to avoid crashing on start if GEMINI_API_KEY is missing.
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required for career analysis.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Security & Personal Information Scanner Utility
function scanAndMaskPersonalInfo(text: string): string {
  if (!text) return "";
  let masked = text;
  // Mask Email Addresses
  masked = masked.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[이메일 마스킹]");
  // Mask SSN / Resident Numbers (e.g., 981122-1234567 or 9811221234567)
  masked = masked.replace(/\d{6}-\d{7}/g, "[주민번호 비공개]");
  masked = masked.replace(/\b\d{13}\b/g, "[주민번호 비공개]");
  // Mask Mobile/Phone Numbers
  masked = masked.replace(/010[-. ]?\d{3,4}[-. ]?\d{4}/g, "[연락처 마스킹]");
  masked = masked.replace(/02[-. ]?\d{3,4}[-. ]?\d{4}/g, "[연락처 마스킹]");
  // Mask Addresses (patterns matching '시/군/구 동/읍/면 번지/아파트')
  masked = masked.replace(/[가-힣]+시\s+[가-힣]+구\s+[가-힣\d\s.-]+(\d+번지|\d+호|아파트|빌라)/g, "[주소 비공개]");
  return masked;
}

// API endpoint for executing the counselor diagnostic helper
app.post("/api/analyze", async (req, res) => {
  try {
    const { memo, testResult, additionalInfo } = req.body;

    if (!memo) {
      return res.status(400).json({ error: "상담 메모는 필수 입력 항목입니다." });
    }

    // Pre-mask personal information in inputs before sending to Gemini to guarantee privacy
    const maskedMemo = scanAndMaskPersonalInfo(memo);
    const maskedAdditional = additionalInfo ? scanAndMaskPersonalInfo(JSON.stringify(additionalInfo)) : "";
    const maskedResult = testResult ? scanAndMaskPersonalInfo(JSON.stringify(testResult)) : "";

    const ai = getGeminiClient();

    const systemInstruction = `당신은 고용센터 직업상담사의 업무를 지원하는 전문 "AI 진로설계 상담지원 시스템"이다.
상담사가 입력한 상담 메모와 적성검사 결과, 추가정보를 바탕으로 다음 1~8단계 분석을 수행하여 상담 참고용 객관적 분석 보고서를 생성하라.

중요 원칙 및 준수사항:
1. 의학적·심리학적 진단을 수행하지 않는다. (예: '우울증', 'ADHD' 같은 명칭 단정 금지)
2. 상담 메모에 없는 내용을 자의적으로 추론, 유추하거나 없는 사실(실명, 임의의 자격증이나 구체적 학원명 등)을 임의생성하지 않는다. 정보가 부재할 경우 반드시 "[추가 확인 필요]" 혹은 "[직접 근거 없음]" 이라고 명기한다.
3. 개인정보(실명, 연락처, 주소, 이메일, 주민등록번호, 생년월일 등)은 출력하지 않으며, 만약 인용문에 나타날 경우 반드시 "[개인정보 비공개]" 또는 "[마스킹]" 처리하라.
4. 모든 판단 결과는 객관적·중립적 문체로 작성해야 하며, 구직자에 대해 단정적이거나 편견 및 낙인을 줄 수 있는 비하적 표현은 일절 금지한다.
5. '진로미결정 유형 판단'에서 각 미결정 유형 점수는 단일 점수숫자(예: 85점)로 절대 나타내지 말고, 오직 점수구간(80~100 / 높음, 60~79 / 중간, 40~59 / 낮음, 0~39 / 매우 낮음)으로만 평가하고 판단해야 한다.
6. 위험신호 평가는 낮음 / 보통 / 높음(일반) / 높음(즉각적 위기 가능성) / 직접 근거 없음 중 하나로 명확히 판정해야 하며, 위험도가 '보통' 이상인 경우 다음 회기에 재평가가 필요함을 상담사 참고사항에 포함시키고 8단계에서 상태 변화 확인 질문을 필수 작성한다. 또한, '높음' 등급은 반드시 "정신건강 전문기관 연계 검토 필요" 문구를, '즉각적 위기 가능성'은 추가로 "즉시 대면 확인 또는 위기개입 절차 우선 검토 필요"를 완벽히 기재하라.
7. 고용서비스 연계 제안 시(구직자 도약보장 패키지, 국민취업지원제도, 국민내일배움카드 등), 실질적인 수당이나 자격 대상 여부를 확인하기 위해 "상담 시 확인 필요" 또는 "참여요건 확인 필요" 등을 필수 수반해야 한다.
8. 채용공고 연계 제안이나 추천은 절대 포함하지 마라. (채용공고 연계 제외 버전임)
`;

    const userPrompt = `
[입력 데이터]
1) 상담 메모:
${maskedMemo}

2) 적성 및 진로검사 결과:
${maskedResult}

3) 추가 정보:
${maskedAdditional}

위 입력을 기반으로 가이드라인에 명시된 8단계 분석을 수행하고, JSON 형식으로 맞춰 반환해주십시오. 
"markdownContent" 필드에는 고요하고 완성도 높은 한국어 공공 지원 보고서 스타일로 Section 5의 완벽한 8가지 구성 양식(1. 위험신호 검토, 2. 진로미결정 유형 분석, 3. 강점·적성 해석, 4. 진로설계 방향, 5. 고용서비스 연계 안내, 6. 다음 단계 실행계획, 7. 상담 개입전략 제안, 8. 다음 상담 질문 제안)에 입각하여 작성한 마크다운을 넣어주십시오.

"structuredData" 필드에는 UI 시각화 및 인터랙티브 제어에 활용할 수 있도록 정해진 스키마의 각 필드 데이터들을 충실히 채워주십시오.
`;

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        markdownContent: {
          type: Type.STRING,
          description: "Section 5에 가이드된 1~8단계 완성 마크다운 리포트(한국어)"
        },
        structuredData: {
          type: Type.OBJECT,
          properties: {
            riskAnalysis: {
              type: Type.OBJECT,
              properties: {
                level: { type: Type.STRING, description: "낮음 / 보통 / 높음(일반) / 높음(즉각적 위기 가능성) / 직접 근거 없음 중 판정된 결과" },
                citation: { type: Type.STRING, description: "직접 인용 문장 (개인정보 마스킹 필수)" },
                reasoning: { type: Type.STRING, description: "위험도 판정 핵심 판단 사유" },
                additionalVerification: { type: Type.STRING, description: "위험도 관련 추가 확인 필요 사항" },
                notes: { type: Type.STRING, description: "상담사 참고사항 및 행동 기준 (특정 핵심 필수구문 포함 필수)" }
              },
              required: ["level", "citation", "reasoning", "additionalVerification", "notes"]
            },
            indecisionAnalysis: {
              type: Type.OBJECT,
              properties: {
                types: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      typeName: { type: Type.STRING, description: "유형명" },
                      scoreRange: { type: Type.STRING, description: "우점 점수구간 (80~100, 60~79, 40~59, 0~39 중 하나)" },
                      grade: { type: Type.STRING, description: "등급 (높음, 중간, 낮음, 매우 낮음 중 하나)" },
                      rawEvidence: { type: Type.STRING, description: "상담 메모 상의 직접 인용 근거 혹은 무증거인 경우 '직접 근거 없음'" }
                    },
                    required: ["typeName", "scoreRange", "grade", "rawEvidence"]
                  }
                },
                primaryType: { type: Type.STRING, description: "주유형 명칭" },
                secondaryType: { type: Type.STRING, description: "보조유형 명칭" },
                reasoning: { type: Type.STRING, description: "유형 판단 사유 및 판정 기준 설명" },
                additionalVerification: { type: Type.STRING, description: "추가 확인 필요 사항" }
              },
              required: ["types", "primaryType", "secondaryType", "reasoning", "additionalVerification"]
            },
            aptitudeInterpretation: {
              type: Type.OBJECT,
              properties: {
                strengths: { type: Type.STRING, description: "강점 설명 (2~4문장)" },
                interests: { type: Type.STRING, description: "흥미 분야 설명 (2~4문장)" },
                environment: { type: Type.STRING, description: "선호 업무 환경 설명 (2~4문장)" },
                jobDirections: { type: Type.STRING, description: "적합 직무 방향 대안 (2~4문장)" },
                usePoints: { type: Type.STRING, description: "상담사가 활용할 임상 상담 포인트 (2~4문장)" }
              },
              required: ["strengths", "interests", "environment", "jobDirections", "usePoints"]
            },
            careerDirections: {
              type: Type.OBJECT,
              properties: {
                exploreJobs: { type: Type.STRING, description: "우선 탐색 직무군" },
                excludeJobs: { type: Type.STRING, description: "제외 또는 보류가 필요한 직무조건" },
                criteria: { type: Type.STRING, description: "구직자가 소중히 여기는 직무 선택 기준" },
                shortGoal: { type: Type.STRING, description: "단기적 목표안" },
                mediumGoal: { type: Type.STRING, description: "중기적 캐리어 목표안" },
                additionalChecks: { type: Type.STRING, description: "상담 과정 중 추가적 규명 필요 요소" }
              },
              required: ["exploreJobs", "excludeJobs", "criteria", "shortGoal", "mediumGoal", "additionalChecks"]
            },
            linkages: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  serviceName: { type: Type.STRING, description: "연계 고용서비스 명칭 (구직자 도약보장 패키지, 국민취업지원제도 등)" },
                  necessity: { type: Type.STRING, description: "연계 지원 필요성 기술" },
                  checklist: { type: Type.STRING, description: "자격 및 운영 기준 등 상담사 사전 확인 필요 요건" },
                  guidance: { type: Type.STRING, description: "실제 상담용 안내 멘트 문구 (상담 시 확인 필요 표시 필수)" }
                },
                required: ["serviceName", "necessity", "checklist", "guidance"]
              }
            },
            actionPlan: {
              type: Type.OBJECT,
              properties: {
                exploreDirection: { type: Type.STRING, description: "6-1. 진로탐색 방향 점검 결과 및 간결 요약" },
                understandingDirection: { type: Type.STRING, description: "6-2. 자기이해·직무탐색 보완 방향 점검 및 내용 요약" },
                learningDirection: { type: Type.STRING, description: "6-3. 훈련·역량개발 방향 점검 및 내용 요약" },
                psychologicalDirection: { type: Type.STRING, description: "6-4. 심리·동기 지원 방향 점검 및 내용 요약" }
              },
              required: ["exploreDirection", "understandingDirection", "learningDirection", "psychologicalDirection"]
            },
            interventionStrategies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  priority: { type: Type.STRING, description: "순위 (예: '우선순위 1')" },
                  strategy: { type: Type.STRING, description: "전략 제목" },
                  details: { type: Type.STRING, description: "구체적 행동 지침 및 상담 실행 전략" }
                },
                required: ["priority", "strategy", "details"]
              }
            },
            nextSessionQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "다음 회기용 심층 개방형 개어 및 질문들 (3~5개)"
            }
          },
          required: [
            "riskAnalysis",
            "indecisionAnalysis",
            "aptitudeInterpretation",
            "careerDirections",
            "linkages",
            "actionPlan",
            "interventionStrategies",
            "nextSessionQuestions"
          ]
        }
      },
      required: ["markdownContent", "structuredData"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
        temperature: 0.1, // more deterministic reasoning based on prompt rules
      }
    });

    const resultText = response.text?.trim() || "{}";
    const data = JSON.parse(resultText);
    res.json(data);

  } catch (error: any) {
    console.error("Analysis Error:", error);
    res.status(500).json({ error: error.message || "분석 과정 중 네트워크 에러가 발생했습니다." });
  }
});

// Configure Vite or Static Asset delivery
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI Career Support server booting on port ${PORT}`);
  });
}

startServer();
