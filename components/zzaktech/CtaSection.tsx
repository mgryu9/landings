import RegisterForm from "./RegisterForm";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-green-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          추천 코드, 더 이상 혼자 버리지 마세요
        </h2>
        <p className="text-green-100 text-lg mb-8 leading-relaxed">
          짝테크가 오픈하면 가장 먼저 알려드릴게요.<br />
          사전등록자에게는 프리미엄 기능을 무료로 드립니다.
        </p>
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <RegisterForm source="cta_bottom" size="large" />
            <p className="text-gray-400 text-xs mt-3 text-center">
              무료 · 스팸 없음 · 언제든 취소 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
