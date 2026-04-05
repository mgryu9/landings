import RegisterForm from "./RegisterForm";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-violet-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse inline-block" />
          베타 대기자 모집 중
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          회의는 끝났는데<br />
          <span className="text-violet-600">&ldquo;그래서 누가 뭘 해야 해?&rdquo;</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          회의록을 붙여넣으면<br className="hidden sm:block" />
          담당자·기한·할일을 30초 만에 정리해드립니다.<br className="hidden sm:block" />
          Notion·Slack으로 바로 보낼 수 있어요.
        </p>

        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" />
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              현재 <span className="font-semibold text-violet-600">{waitlistCount.toLocaleString()}명</span>이 대기 중
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            월 5회 무료
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Notion·Slack 연동
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            설치 필요 없음
          </span>
        </div>
      </div>
    </section>
  );
}
