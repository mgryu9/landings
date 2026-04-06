const problems = [
  {
    emoji: "😰",
    title: "입학 준비, 뭘 챙겨야 할지 모르겠어요",
    desc: "준비물 목록, 입학 전 체크리스트, 적응 기간 팁... 처음이라 아무것도 모르는데 물어볼 곳이 없어요.",
  },
  {
    emoji: "🤐",
    title: "원비가 적당한 건지 비교할 수가 없어요",
    desc: "다른 유치원은 얼마인지, 특별활동비가 과한 건지 알 방법이 없어요. 눈치만 보다가 그냥 냅니다.",
  },
  {
    emoji: "😤",
    title: "학부모 단톡방엔 눈치 보여서 못 물어봐요",
    desc: "정말 궁금한 건 선생님 평판, 원 운영 방식인데... 단톡방에선 절대 못 물어보잖아요.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
            학부모들의 공통 고민
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
