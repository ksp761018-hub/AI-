import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  LayoutGrid, 
  Layers, 
  HelpCircle, 
  Briefcase, 
  Award,
  CheckCircle,
  FileText
} from "lucide-react";
import { SampleCase } from "../data/sampleCases";

interface LandingPageProps {
  sampleCases: SampleCase[];
  onStartWorkspace: () => void;
  onSelectCaseAndStart: (caseObj: SampleCase) => void;
}

export default function LandingPage({ 
  sampleCases, 
  onStartWorkspace, 
  onSelectCaseAndStart 
}: LandingPageProps) {
  return (
    <div id="landing_container" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Premium Sleek Navigation Header */}
      <header className="min-h-16 sm:h-20 border-b border-slate-800/80 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-0 sticky top-0 bg-slate-950/90 backdrop-blur-md z-50 gap-3 sm:gap-0">
        <div className="flex items-center gap-2.5 min-w-0 self-start sm:self-auto">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
            <Sparkles className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-white flex flex-wrap items-center gap-1.5 leading-snug">
              <span>AI 진로설계 상담지원</span>
              <span className="text-[8px] sm:text-[10px] bg-indigo-500/20 text-indigo-300 font-semibold px-2 py-0.5 rounded-md border border-indigo-500/30 shrink-0">v2.1 Standard</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] text-slate-400 truncate">고용노동부 가이드 융합형 직업상담 보조 스위트</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={onStartWorkspace}
            className="hidden md:flex hover:text-white text-slate-300 text-xs font-semibold px-3 py-2 transition-all cursor-pointer"
          >
            기능 소개
          </button>
          <button
            onClick={onStartWorkspace}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 cursor-pointer"
          >
            <span>업무 데스크 입장</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Banner Section */}
        <section className="relative pt-16 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          {/* Subtle Decorative Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-medium mb-6 hover:border-slate-600 transition-colors">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>신뢰할 수 있는 전임상담사용 AI 파트너</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight md:leading-tight">
            보이지 않던 걱정과 역량을 한눈에,<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-teal-300 bg-clip-text text-transparent">
              과학적으로 접근하는 현명한 진로설계
            </span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
            내담자가 남긴 소중한 텍스트에서 보이지 않는 무기력, 자해 징후, 정서적 위축을 즉시 감지합니다. 
            진로미결정 요인의 과학적 6개 분야 점수화 분석과 맞춤 실행계획을 제공하여 상담의 성장을 완벽히 서포트합니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <button
              onClick={onStartWorkspace}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 hover:shadow-xl shadow-indigo-600/20 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              신규 진단 데스크 시작하기
            </button>
            <a
              href="#simulation-hub"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>실제 검증용 데모 체험하기</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl border-y border-slate-800/80 py-8 text-left bg-slate-900/50 backdrop-blur-xs px-6 rounded-2xl">
            <div>
              <p className="text-2xl md:text-3xl font-black text-indigo-400 tracking-tight font-mono">100%</p>
              <p className="text-xs text-slate-400 mt-1">개인 식별정보 전용 필터링</p>
              <p className="text-[10px] text-slate-500 mt-0.5">안심 자동 마스킹 세이프티 가드</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight font-mono">8단계</p>
              <p className="text-xs text-slate-400 mt-1">공공 가이드 분석 프로세스</p>
              <p className="text-[10px] text-slate-500 mt-0.5">위험 탐지부터 차기 개방형 질문까지</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-teal-400 tracking-tight font-mono">6대</p>
              <p className="text-xs text-slate-400 mt-1">적합 진산 미결정 범주 지표</p>
              <p className="text-[10px] text-slate-500 mt-0.5">장기공백, 가치혼돈 구간 판정</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-purple-400 tracking-tight font-mono">1.25초</p>
              <p className="text-xs text-slate-400 mt-1">평균 종합 리포트 출력</p>
              <p className="text-[10px] text-slate-500 mt-0.5">실시간 다차원 정밀 연산 적용</p>
            </div>
          </div>
        </section>

        {/* Unique Selling Points / Bento Grid Feature Highlights */}
        <section className="bg-slate-950/60 py-20 px-6 md:px-12 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center md:text-left mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">FEATURES & EXCELLENCE</span>
                <h3 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
                  오직 직업상담사를 위한 전문 기능 사양
                </h3>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed text-left">
                상담사의 주관적 임상 시야와 직업 심리검사 지표를 과학적으로 병합하여 내담자에 관한 완벽한 로드맵 종합 검토서를 추천합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 border border-red-500/20 mb-4 group-hover:scale-110 transition-all">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white mb-2">01. 정밀 자해·위험신호 실시간 탐지</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  관계 회폐, 장기 칩거, 무기력, 자해 멘트 등 은둔 단념 상태를 지능적으로 스크리닝하여 상담사 전용 조기 개입 가이드를 처방합니다.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 group">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 border border-teal-500/20 mb-4 group-hover:scale-110 transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white mb-2">02. 실시간 안심 개인정보 스크러버</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  주민등록번호, 생년월일, 성명, 휴대전화 등 실수로 입력될 수 있는 모든 개인 식별 인자를 로컬 브라우저 단에서 100% 필터링 마스킹합니다.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 group">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 border border-indigo-500/20 mb-4 group-hover:scale-110 transition-all">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white mb-2">03. 진로미결정 6대 지표 스코어링</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  임의 수치 왜곡을 원천 배제하고 80~100점 등 공공 오차 구간 판정을 도입해 정보결핍, 외적제약 등 구인장벽을 명징하게 비교합니다.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 group">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/20 mb-4 group-hover:scale-110 transition-all">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white mb-2">04. 국민취업지원제도 등 최적 연계안</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  구직자 도약보장 패키지, 국민내일배움카드 요건을 체크하고 직접 활용가능한 구절의 공감형 정책 안내 멘트를 실시간 산출합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulation Interactive Hub Section */}
        <section id="simulation-hub" className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-slate-800/40">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">ACTIVE TRIAL HUBS</span>
            <h3 className="text-2.5xl md:text-3.5xl font-extrabold text-white tracking-tight">
              실제 현장검증 시뮬레이션 케이스 선택하기
            </h3>
            <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
              고용센터 현장에서 가장 빈번하게 발생하는 3개 표준 청년 군집군입니다.<br />
              원하는 사례를 선택 시, 실시간 AI 진단 데스크로 즉시 자동 완성 대입되어 진로 로드맵이 가동됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sampleCases.map((cs) => {
              const isHighRisk = cs.id === "case-high-risk";
              const isConstraints = cs.id === "case-constraints";
              
              return (
                <div 
                  key={cs.id}
                  className="bg-slate-950/40 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                        isHighRisk 
                          ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                          : isConstraints 
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {cs.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">CLIENT_REPRESENT</span>
                    </div>

                    <h4 className="font-extrabold text-base text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                      {cs.title}
                    </h4>

                    {/* Memo extract with beautiful layout */}
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 text-[11px] text-slate-400 italic font-normal text-left leading-relaxed mb-4 line-clamp-4">
                      "{cs.intake.memo}"
                    </div>

                    {/* Miniature factors */}
                    <div className="space-y-1.5 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">소지 자격증 및 강점:</span>
                        <span className="text-slate-300 truncate max-w-[150px]">{cs.intake.additionalInfo.certificates || "소지 자격 전무"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">선호 업무 환경:</span>
                        <span className="text-slate-300 truncate max-w-[150px]">{cs.intake.testResult.preferredEnv}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => onSelectCaseAndStart(cs)}
                      className="w-full bg-slate-900 group-hover:bg-indigo-600 group-hover:text-white border border-slate-800/80 group-hover:border-indigo-500 text-slate-300 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>이 케이스 대입하여 진단 실행</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Core Values Detail Section */}
        <section className="bg-slate-950/30 py-20 px-6 md:px-12 border-t border-slate-800/40 text-left">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Institutional standard design</span>
              <h3 className="text-2.5xl md:text-3.5xl font-black text-white tracking-tight mt-2 pb-5 border-b border-slate-800/80 leading-snug">
                고용기관 기준에 철저히 수렴하는 신뢰성 설계
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mt-5">
                본 시스템은 무조건적인 추천이나 채용공고 연계의 과대평가, 혹은 대자적 정신 감정 오류를 원천 차단한 상담사용 순수 보조 도구입니다. 
                신뢰할 수 있고 균형 잡힌 다차원 분석만을 직조하여 전달합니다.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">내담자의 동기부여를 증진하는 4대 카테고리 행동 계획 배포</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">전송 전 데이터의 로컬 개인 정보 스크리닝 기능 100% 가동</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">질문 유도 폐쇄형 상담 극복을 위한 개방형 사후 질문 자동 구성</p>
                </div>
              </div>
            </div>

            {/* Simulated Desktop Preview Card */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
              <div className="absolute top-2.5 left-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <p className="text-center text-[10.5px] text-slate-500 font-mono mb-4 border-b border-slate-800 pb-2">AI CAREER ANALYTIC WORKSTATION PREVIEW</p>
              
              <div className="space-y-4 text-xs font-normal">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                  <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">1단계. 위험신호 검토 결과</p>
                  <p className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    은둔 단념 극복을 위한 심리 안정 최우선 개입 제안
                  </p>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                  <p className="text-[10px] text-teal-400 font-bold uppercase mb-1">2단계. 진로미결정 유형 가중 분포</p>
                  <div className="flex justify-between items-center text-[11px] mb-1">
                    <span className="text-slate-300">정보부족형 (취업 시장 지식 부족)</span>
                    <span className="font-bold text-white font-mono">80~100 (높음)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                  <p className="text-[10px] text-purple-400 font-bold uppercase mb-1">8단계. 2회차 상담 탐색 질문 배포</p>
                  <p className="text-[11.5px] italic text-slate-300">
                    "대학 조교 행정 이력에서 가장 자존감을 회복했던 과업 순간은 언제였나요?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Landing Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-6 md:px-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-semibold text-slate-350">AI CAREER DESIGN ASSIST</span>
          </div>
          <p className="text-center font-normal text-[11px]">
            ※ 본 시스템은 고용센터 직업상담사에 특화된 보조 연산 도구이며 공식적 결정권은 상담관 고유 권한입니다.
          </p>
          <p className="font-mono text-[10px] text-slate-600">
            SECURED DATABASE & TRUSTED INTERACTION // ksp761018
          </p>
        </div>
      </footer>
    </div>
  );
}
