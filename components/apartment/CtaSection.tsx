import RegisterForm from "./RegisterForm";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          내 점수로 될 수 있는지<br />직접 물어볼 수 있는 곳
        </h2>
        <p className="text-gray-500 mb-8">
          사전 멤버 등록하면 오픈 첫날 무료로 입장할 수 있습니다
        </p>
        <div className="max-w-lg mx-auto">
          <RegisterForm source="cta" size="large" />
        </div>
      </div>
    </section>
  );
}
