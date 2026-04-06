import RegisterForm from "./RegisterForm";
import WaitlistCounter from "./WaitlistCounter";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse inline-block" />
          사전등록 진행 중
        </div>

        {/* 헤드라인 */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          우리 아이 유치원<br />
          <span className="text-yellow-500">정보 혼자 찾지 마세요</span>
        </h1>

        {/* 서브헤드 */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          같은 유치원 학부모끼리 솔직한 정보를 나누는 커뮤니티.<br className="hidden sm:block" />
          입학 준비부터 원비, 선생님 평판까지<br className="hidden sm:block" />
          아는 사람만 알던 정보를 이제 함께 공유해요.
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
          {["완전 무료", "익명 보장", "언제든 취소 가능"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
