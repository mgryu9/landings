const problems = [
  {
    emoji: "😔",
    title: "구인구직 정보가 너무 흩어져 있어요",
    desc: "채용공고는 이 사이트, 구직은 저 카페, 연락은 또 따로... 유치원·어린이집 일자리 정보를 한곳에서 볼 수 없어요.",
  },
  {
    emoji: "🤐",
    title: "선생님끼리 솔직하게 얘기할 공간이 없어요",
    desc: "원장님 눈치, 동료 눈치... 현장의 고민을 털어놓을 수 있는 선생님 전용 익명 공간이 필요해요.",
  },
  {
    emoji: "😩",
    title: "수업자료 매번 처음부터 만들기 지쳐요",
    desc: "누리과정 자료, 계절별 활동지, 부모 안내문... 잘 만들어진 자료가 있어도 공유할 방법이 없어요.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
            선생님들의 공통 고민
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            이런 경험, 있지 않으신가요?
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm border border-orange-100"
            >
              <span className="text-3xl shrink-0">{p.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
