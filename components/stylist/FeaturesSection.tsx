export default function FeaturesSection() {
  const customerFeatures = [
    {
      icon: "👤",
      title: "디자이너 개인 팔로우",
      desc: "헤어샵이 아닌 담당자 개인을 팔로우. 이직·독립해도 자동으로 새 위치를 알려드립니다.",
    },
    {
      icon: "🔔",
      title: "이직·독립 즉시 알림",
      desc: "담당자가 새 매장으로 이동하면 나에게만 먼저 알림이 옵니다. 예약 우선권 확보.",
    },
    {
      icon: "📸",
      title: "포트폴리오 & 리뷰 확인",
      desc: "담당자별 시술 사진, 고객 리뷰, 특기 시술을 한 곳에서 확인하고 선택하세요.",
    },
  ];

  const stylistFeatures = [
    {
      icon: "📣",
      title: "이직 공지 자동 발송",
      desc: "기존 단골 고객에게 이직 소식을 자동으로 전달. DM 하나하나 보낼 필요 없습니다.",
    },
    {
      icon: "🔗",
      title: "내 개인 프로필 URL",
      desc: "포트폴리오·리뷰·예약이 담긴 내 고유 URL. 인스타 바이오에 링크 하나로 끝.",
    },
    {
      icon: "📅",
      title: "예약 직접 받기",
      desc: "카카오 DM 없이 공식 채널로 예약 접수. 노쇼 방지 리마인더 자동 발송.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            고객과 미용사, 모두를 위한 플랫폼
          </h2>
          <p className="text-gray-500">헤어샵이 바뀌어도 관계는 끊어지지 않습니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-rose-50 rounded-2xl p-6 mb-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">고객용</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">내 디자이너를 잃지 마세요</h3>
            </div>
            <div className="space-y-4">
              {customerFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{f.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-purple-50 rounded-2xl p-6 mb-4">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">미용사용</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">이직해도 단골은 내 것</h3>
            </div>
            <div className="space-y-4">
              {stylistFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{f.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
