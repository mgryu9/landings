export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            회의록 붙여넣기 → 30초 후 완료
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {[
            {
              icon: "📋",
              title: "액션아이템 자동 추출",
              desc: "회의록 텍스트에서 담당자·기한·할일 3가지를 자동으로 뽑아냅니다. '김과장이 다음 주까지 기획안 검토' 같은 내용도 정확히.",
            },
            {
              icon: "📤",
              title: "Notion·Slack 즉시 전송",
              desc: "추출된 액션아이템을 Notion 페이지 또는 Slack 채널로 원클릭 전송. 담당자 멘션까지 자동.",
            },
            {
              icon: "📝",
              title: "회의록 요약본 생성",
              desc: "긴 회의록을 참석 안 한 팀원도 2분 만에 파악할 수 있는 요약본으로 자동 변환.",
            },
            {
              icon: "🔔",
              title: "기한 리마인더",
              desc: "액션아이템 기한 전날, 담당자에게 자동 리마인더. '잊어버렸어요'는 이제 없습니다.",
            },
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <p className="font-bold text-gray-900 mb-2">{f.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-violet-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-bold text-lg">월 9,900원으로 무제한 사용</p>
              <p className="text-violet-200 text-sm">베타 기간 중 완전 무료. 팀 단위 요금제도 준비 중.</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-3xl font-bold">무료</p>
              <p className="text-violet-200 text-xs">베타 기간 한정</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
