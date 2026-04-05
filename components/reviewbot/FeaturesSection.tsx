export default function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "리뷰 통합 대시보드",
      desc: "네이버·카카오·구글 세 플랫폼의 리뷰를 한 화면에서. 최신순·별점순·미답변순으로 정렬.",
    },
    {
      icon: "🤖",
      title: "AI 답글 초안 자동 생성",
      desc: "리뷰 내용을 AI가 읽고 자연스러운 답글 초안을 생성합니다. 수정 후 원클릭 게시.",
    },
    {
      icon: "🚨",
      title: "부정 리뷰 즉시 알림",
      desc: "별점 3점 이하 리뷰가 올라오면 카카오톡·문자로 즉시 알림. 빠른 대응으로 손실 최소화.",
    },
    {
      icon: "📈",
      title: "리뷰 통계 리포트",
      desc: "월별 별점 추이, 많이 언급된 키워드, 긍정·부정 비율을 시각화. 내 매장 평판을 한눈에.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            리뷰봇이 하는 일
          </h2>
          <p className="text-gray-500">원장님은 매장 운영에만 집중하세요</p>
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

        <div className="mt-8 bg-orange-600 rounded-2xl p-6 text-white text-center">
          <p className="font-bold text-xl mb-1">월 14,900원</p>
          <p className="text-orange-100 text-sm">카드 한 장 결제로 리뷰 관리 시간 월 15시간 절약</p>
        </div>
      </div>
    </section>
  );
}
