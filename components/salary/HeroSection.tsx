import RegisterForm from "./RegisterForm";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
          베타 대기자 모집 중
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          이직 연봉 협상,<br />
          <span className="text-blue-600">얼마를 불러야 할지 모르겠다면</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          내 직군·연차·기술스택으로 시장 연봉을 확인하고<br className="hidden sm:block" />
          실제 합격자가 쓴 협상 스크립트를 바로 받으세요.<br className="hidden sm:block" />
          연봉 협상 한 번이 연간 수백만원 차이입니다.
        </p>

        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" />
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              현재 <span className="font-semibold text-blue-600">{waitlistCount.toLocaleString()}명</span>이 대기 중
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            연봉 조회 무료
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            실제 협상 스크립트 제공
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            합격자 후기 커뮤니티
          </span>
        </div>
      </div>
    </section>
  );
}
