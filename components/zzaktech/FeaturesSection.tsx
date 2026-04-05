const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "코드 매칭",
    subtitle: "1:1 추천 코드 교환",
    description:
      "내가 쓸 코드와 내 코드를 원하는 사람을 자동 매칭합니다. 서로 코드를 써줘야 둘 다 보상을 받는 구조라 이탈 없이 완료됩니다.",
    highlights: ["토스", "캐시워크", "네이버페이", "카카오페이", "리브메이트"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "미션 파트너",
    subtitle: "함께 깨는 미션",
    description:
      "걷기 미션, 광고 보기, 출석 체크 등 혼자 완료하기 어려운 미션을 파트너와 함께 깹니다. 완료 확인 시스템으로 먹튀를 원천 차단합니다.",
    highlights: ["걷기 미션", "광고 시청", "출석 체크", "친구 초대"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "앱테크 피드",
    subtitle: "검증된 정보만 모아서",
    description:
      "지금 가장 많이 버는 앱 랭킹, 신규 가입 보너스 이벤트, 커뮤니티가 직접 검증한 이달의 추천 앱이 한곳에 모입니다.",
    highlights: ["실시간 랭킹", "이벤트 알림", "커뮤니티 검증"],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">
            핵심 기능
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            짝테크가 해결합니다
          </h2>
          <p className="text-gray-600 text-lg">
            흩어진 채널을 하나로. 스팸 없이, 딱 맞는 파트너와.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-green-100"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                {feature.subtitle}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
