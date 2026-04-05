import RegisterForm from "./RegisterForm";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          지금 신청하면 14일 무료로<br />리뷰봇을 경험해보세요
        </h2>
        <p className="text-gray-500 mb-8">
          카드 정보 없이 이메일만으로 체험 신청 가능합니다
        </p>
        <div className="max-w-lg mx-auto">
          <RegisterForm source="cta" size="large" />
        </div>
      </div>
    </section>
  );
}
