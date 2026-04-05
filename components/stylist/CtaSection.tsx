import RegisterForm from "./RegisterForm";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          그 선생님, 어디 갔는지<br />이제 바로 알 수 있어요
        </h2>
        <p className="text-gray-500 mb-8">
          사전등록하면 오픈 첫날 초대장을 보내드립니다
        </p>
        <div className="max-w-lg mx-auto">
          <RegisterForm source="cta" size="large" />
        </div>
      </div>
    </section>
  );
}
