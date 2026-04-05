import RegisterForm from "./RegisterForm";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
          사전 멤버 모집 중
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          내 청약 점수로<br />
          <span className="text-emerald-600">어디를 넣어야 당첨될까요?</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          나와 같은 점수·지역·세대수 조건으로 당첨된 사람들이<br className="hidden sm:block" />
          어떤 전략을 썼는지 직접 물어보세요.<br className="hidden sm:block" />
          블라인드·네이버 카페 정보를 체계적으로 모았습니다.
        </p>

        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" />
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              현재 <span className="font-semibold text-emerald-600">{waitlistCount.toLocaleString()}명</span>이 대기 중
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            완전 무료 입장
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            실제 당첨 케이스
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            익명 커뮤니티
          </span>
        </div>
      </div>
    </section>
  );
}
