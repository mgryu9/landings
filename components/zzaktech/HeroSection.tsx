import RegisterForm from "./RegisterForm";
import WaitlistCounter from "./WaitlistCounter";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          사전등록 진행 중
        </div>

        {/* 헤드라인 */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          추천 코드<br />
          <span className="text-green-600">혼자 버리지 마세요</span>
        </h1>

        {/* 서브헤드 */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          앱테크 하는 사람끼리 추천 코드 나누고,<br className="hidden sm:block" />
          미션 같이 깨고, 보상 두 배로 받는 커뮤니티.<br className="hidden sm:block" />
          오픈채팅 스팸 없이, 딱 맞는 파트너와.
        </p>

        {/* 사전등록 폼 */}
        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" />
          <div className="mt-4 flex justify-center">
            <WaitlistCounter count={waitlistCount} />
          </div>
        </div>

        {/* 신뢰 요소 */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            완전 무료
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            스팸 없음
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            언제든 취소 가능
          </span>
        </div>
      </div>
    </section>
  );
}
