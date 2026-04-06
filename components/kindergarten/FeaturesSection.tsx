const features = [
  {
    emoji: "💼",
    title: "구인구직",
    desc: "유치원·어린이집 채용공고와 구직 정보를 한눈에. 지역별로 딱 맞는 자리를 찾아보세요.",
    tag: "핵심 기능",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    emoji: "📚",
    title: "수업자료 공유",
    desc: "누리과정 수업자료를 선생님들끼리 자유롭게 나누세요. 직접 만든 자료를 공유하고 피드백도 받아요.",
    tag: "인기",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "💬",
    title: "선생님 커뮤니티",
    desc: "같은 고민, 같은 현장의 선생님들과 솔직하게 이야기 나눠요. 아는 사람 없어도 괜찮아요.",
    tag: "익명 보장",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "🗺️",
    title: "지역별 유치원 정보",
    desc: "우리 지역 유치원·어린이집 정보 모아보기. 원 분위기, 원장님 스타일까지 선생님 시각으로 공유해요.",
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
            선생님이 진짜 원하던 커뮤니티
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            눈치 보지 않고, 솔직하게, 같은 현장의 선생님들끼리
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
