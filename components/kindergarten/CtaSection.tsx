import RegisterForm from "./RegisterForm";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-5xl mb-4">🌻</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          우리 아이 유치원 정보<br />이제 함께 찾아요
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
          사전등록하시면 오픈 첫날 이메일로 초대장을 보내드려요.<br />
          초기 회원에게는 프리미엄 기능도 무료로 드립니다.
        </p>
        <RegisterForm source="cta_bottom" size="large" />
      </div>
    </section>
  );
}
