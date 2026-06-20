import { ClientIntake } from "../types";

export interface SampleCase {
  id: string;
  title: string;
  badge: string;
  color: string;
  description: string;
  intake: ClientIntake;
}

export const sampleCases: SampleCase[] = [
  {
    id: "case-standard",
    title: "사례 1: 진로 미결정 청년 (정보 부족형)",
    badge: "일반 사례 (위험도 낮음)",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    description: "무슨 일을 할 수 있을지 잘 모르겠고 자격증 및 직무 정보 부족으로 자신감이 결여된 일반 구직단념성 구직자.",
    intake: {
      clientName: "김*우",
      memo: "대학 졸업 후 8개월 동안 특별한 구직활동 없이 보내왔습니다. 전공은 행정학이지만 공무원 준비를 중도에 포기한 이후 무슨 일을 새로 시작해야 할지 전혀 갈피를 잡지 못하고 있어요. 지원을 하려 해도 합격할 것이라는 확신이 없고, 실제 기업의 직무환경이나 업무방식이 무엇인지 구직 정보가 너무나 부족합니다. 면접 대처나 지원서 작성에도 자신이 없어 번번이 구직활동을 내일로만 미루고 미뤄둔 상태입니다.",
      testResult: {
        interpersonal: "중간 (대인관계 조율력 보통)",
        clerical: "중상 (문서 파악 및 사무처리 강점)",
        analytical: "중상 (종합 분석력 우수)",
        preferredEnv: "안정적이고 절차가 명확하게 통제 가능한 사무환경",
        interests: "안정형, 유치관리, 규칙 준수형 업무"
      },
      additionalInfo: {
        unemployedPeriod: "8개월",
        jobSearchPeriod: "구직 노력 거의 없음",
        priorExperience: "단기 대학 행정조교 아르바이트 3개월",
        major: "공공행정학",
        certificates: "컴퓨터활용능력 2급 보유",
        desiredJob: "일반 사무직 또는 총무지원",
        desiredLocation: "서울 전 지역 및 경기도 인근",
        desiredType: "상관없음",
        desiredWage: "연봉 2,800만원 이상",
        availableTime: "09:00 ~ 18:00 (협의 가능)",
        constraints: "출퇴근이 양호한 대중교통 인근 선호",
        nationalSupport: "미참여 (상담 후 연계 검토 희망)",
        leapSupport: "참여 희망",
        trainingHope: "사무자동화 및 직무 기술 교육 등 훈련 수강 희망",
        psychologicalNeeded: "필요없음"
      }
    }
  },
  {
    id: "case-high-risk",
    title: "사례 2: 만성 피로 및 관계 단절 청년 (고위험 탐지)",
    badge: "고위험군 (위험도 보통~높음)",
    color: "bg-red-50 text-red-700 border-red-200",
    description: "반복적인 구직 실패로 인한 심각한 우울감, 불면증 및 사회적 고립 징후를 보이며 무기력증에 빠져 있는 청년 사례.",
    intake: {
      clientName: "이*민",
      memo: "지난 1년 넘게 여러 번 서류와 면접에서 탈락하고 나니 이제는 더 이상 무언가를 시도할 힘도 의욕도 완전히 소진되었습니다. 사람들을 만나는 것도 너무 창피해서 연락을 일절 끊고 몇 달 동안 방 밖으로 외출하지 않고 고립되어 지내고 있습니다. 밤에는 잠을 전혀 이룰 수 없고 낮엔 하루 종일 수면 부족으로 멍하고, 밥 맛도 전혀 없어서 끼니를 거르는 일이 잦습니다. 요즘 들어 삶에 아무런 가치도 없고 그냥 모든 것을 그만 정리해 버리고 쉬고 싶다는 생각이 머릿속을 맴돕니다. 구직활동은커녕 상담에 참여하러 오는 것도 버거운 상황이에요.",
      testResult: {
        interpersonal: "낮음 (관계 기피 및 회피 경향)",
        clerical: "낮음 (주의집중력 저하 상태)",
        analytical: "중간 (체계적 판단 흐려짐)",
        preferredEnv: "혼자 일하고 비대면 중심의 자율적 환경 선호",
        interests: "관심 분야 없음 (전반적 흥미 흥미 상실)"
      },
      additionalInfo: {
        unemployedPeriod: "1년 4개월",
        jobSearchPeriod: "이전 1년 간 적극적이었으나 현재 전면 중단",
        priorExperience: "의류 매장 단순 판매 단순 아르바이트 5개월",
        major: "환경공학",
        certificates: "없음(합격 자격증 전무)",
        desiredJob: "없음 (결정 포기 상태)",
        desiredLocation: "상관없음 (교통 편리 지대)",
        desiredType: "임시직 또는 계약직 환영",
        desiredWage: "상관없음",
        availableTime: "불규칙 (수면 불균형 심함)",
        constraints: "대인기피 수준의 심리 부채 및 극심한 불안",
        nationalSupport: "신청 검토 필요",
        leapSupport: "보류 필요 (심리 안정 최우선)",
        trainingHope: "보류 필요",
        psychologicalNeeded: "매우 필요 (유관 정신건강 센터 연계 강력 권장)"
      }
    }
  },
  {
    id: "case-constraints",
    title: "사례 3: 가족 돌봄 청년 (외적제약 및 장기공백형)",
    badge: "외적제약 복합형 (위험도 보통)",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    description: "치매 노모 병간호 및 연로한 부모 부양으로 인해 근무 시간의 원거리 제약이 심하고 장기 경력 단절이 공존하는 사례.",
    intake: {
      clientName: "박*아",
      memo: "전문대를 졸업한 직후 편찮으신 어머님을 직접 간병하고 부양해야 해서 외부에 제대로 취업 준비를 하기가 어려웠습니다. 현재 공백만 벌써 3년이 넘었습니다. 틈틈이 자격증을 따보았으나 실질적인 경력이 전무한 상태입니다. 지금이라도 일을 구하고 싶지만 수시로 병원에 모시고 다녀야 하거나 주기적으로 가사 간병을 분담해야 해서 야간 근무나 늦은 잔업, 원거리 통근은 절대 불가능합니다. 오직 집에서 편도 30분 이내며 시간 외 가동이 없는 규칙적인 단시간 일자리 혹은 고정 주간직 위주로 구해야 하는 제약이 있습니다.",
      testResult: {
        interpersonal: "우수 (의사소통 및 정서적 지지 강점)",
        clerical: "중상 (행정 기획 및 정밀 기재 성향)",
        analytical: "중간 (체계성 우수)",
        preferredEnv: "근무 교대가 없고 교통 연결이 유용한 사무실 또는 보건환경",
        interests: "사무지원, 의료지원, 돌봄행정 선호"
      },
      additionalInfo: {
        unemployedPeriod: "3년 2개월",
        jobSearchPeriod: "비정기적 (3년 내 장기 일자리 중단)",
        priorExperience: "노인복지관 단기 행정 지원 실습 2개월",
        major: "사회복지학 전공",
        certificates: "사회복지사 2급, 운전면허 1종 보통",
        desiredJob: "복지시설 사무원 혹은 사회복지 담당지원 행정",
        desiredLocation: "인천광역시 남동구 일대 (자택 주변 3~5km 이내)",
        desiredType: "파트타임 계약직 혹은 유연근무 정규직",
        desiredWage: "월 180~200만원 수준 희망 (돌봄 비용 고려 수수료 보충)",
        availableTime: "10:00 ~ 17:00 (초과잔업 불가)",
        constraints: "가족 돌봄 및 휠체어 이동 지원 필요로 간헐적 연차/조퇴 필요 가능성",
        nationalSupport: "미정 (참여요건 확인 희망)",
        leapSupport: "희망",
        trainingHope: "훈련 필요성 적음 (보유 자격 및 역량 활성화 희망)",
        psychologicalNeeded: "보통 (돌봄 지속에 따른 탈진 가능성 재평가 필요)"
      }
    }
  }
];
