import RegisterForm from "./RegisterForm";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
          사전등록 진행 중
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          내 헤어디자이너,<br />
          <span className="text-rose-500">이직했는데 어디 갔는지 아세요?</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          미용사 개인을 팔로우하고,<br className="hidden sm:block" />
          어디로 가든 바로 알림 받으세요.<br className="hidden sm:block" />
          헤어샵이 아니라, 그 선생님한테 가는 거잖아요.
        </p>

        <div className="max-w-lg mx-auto">
          <RegisterForm source="hero" size="large" role="customer" />
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              현재 <span className="font-semibold text-rose-600">{waitlistCount.toLocaleString()}명</span>이 대기 중
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            완전 무료
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            스팸 없음
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            언제든 취소 가능
          </span>
        </div>
      </div>
    </section>
  );
}
