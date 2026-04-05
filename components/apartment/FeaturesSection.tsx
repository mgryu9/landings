export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "내 조건 맞춤 당첨 케이스 검색",
      desc: "가입점수·지역·세대수·무주택 기간 입력 → 유사 조건으로 당첨된 실제 케이스를 필터링해서 보여줍니다.",
    },
    {
      icon: "💬",
      title: "조건별 커뮤니티 질문·답변",
      desc: "내 청약 조건과 비슷한 사람들이 모인 그룹에서 직접 묻고 답하세요. 인맥 없어도 실전 정보를 얻을 수 있습니다.",
    },
    {
      icon: "📊",
      title: "단지별 경쟁률·당첨선 분석",
      desc: "최근 2년 내 분양 단지별 실제 당첨선과 경쟁률 데이터. 같은 지역 비슷한 단지의 흐름을 파악하세요.",
    },
    {
      icon: "📝",
      title: "당첨 전략 아카이브",
      desc: "실제 당첨자들이 제출한 전략 노트. 어떤 타입·어떤 지역·어떤 시점을 골랐는지 그 근거를 공유합니다.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            청약 당첨, 정보 싸움입니다
          </h2>
          <p className="text-gray-500">나와 같은 조건의 실제 사례가 최선의 전략입니다</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <p className="font-bold text-gray-900 mb-2">{f.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
