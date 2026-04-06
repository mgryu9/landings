const features = [
  {
    emoji: "🏫",
    title: "유치원별 솔직한 후기",
    desc: "입학 전 꼭 알아야 할 정보들. 원비, 특별활동, 선생님 분위기까지 실제 학부모가 쓴 후기를 확인하세요.",
    tag: "핵심 기능",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    emoji: "📋",
    title: "입학 준비 체크리스트",
    desc: "입학 1개월 전부터 첫날까지 단계별 준비 가이드. 선배 학부모들이 직접 만든 검증된 리스트예요.",
    tag: "인기",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "💬",
    title: "익명 학부모 커뮤니티",
    desc: "단톡방에서 못 물어보는 질문들을 여기서. 익명이라 솔직하게, 같은 고민을 가진 학부모와 연결돼요.",
    tag: "익명 보장",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "🗺️",
    title: "지역별 유치원 정보",
    desc: "우리 동네 유치원 모아보기. 국공립/사립/어린이집 비교, 대기 상황, 입학 시즌 공지까지 한눈에.",
    tag: "지역 맞춤",
    tagColor: "bg-green-100 text-green-700",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-2">
            주요 기능
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            학부모가 진짜 원하던 커뮤니티
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            눈치 보지 않고, 솔직하게, 같은 처지의 학부모끼리
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{f.emoji}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.tagColor}`}>
                  {f.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
