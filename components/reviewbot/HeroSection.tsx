import RegisterForm from "./RegisterForm";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
          14일 무료 체험 모집 중
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          네이버·카카오·구글 리뷰,<br />
          <span className="text-orange-500">세 군데서 따로 관리하고 계세요?</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          모든 리뷰를 한 화면에서 보고,<br className="hidden sm:block" />
          AI가 답글 초안까지 써드립니다.<br className="hidden sm:block" />
          부정 리뷰는 올라오는 즉시 알림을 보내드려요.
        </p>

        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" />
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              현재 <span className="font-semibold text-orange-600">{waitlistCount.toLocaleString()}명</span>의 원장님이 대기 중
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            14일 무료 체험
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            카드 없이 시작
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            설치 5분이면 끝
          </span>
        </div>
      </div>
    </section>
  );
}
