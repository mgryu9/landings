export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            청약 정보, 지금은 이렇게 흩어져 있습니다
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { platform: "청약홈", problem: "공고 정보는 있는데 전략이 없음", icon: "🏛" },
            { platform: "네이버 카페", problem: "정보 많지만 내 조건 맞는 케이스 찾기 어려움", icon: "☕" },
            { platform: "블라인드/카톡", problem: "인맥 안에서만 도는 정보, 접근 불가", icon: "💬" },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <span className="text-2xl block mb-2">{p.icon}</span>
              <p className="font-bold text-gray-900 mb-2">{p.platform}</p>
              <p className="text-sm text-red-500 leading-snug">{p.problem}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">이런 질문, 어디서 물어보셨나요?</h3>
          <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">Q.</span>가점 62점, 3인 가구, 성남 거주. 어디 넣으면 당첨 가능성 있을까요?</li>
            <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">Q.</span>투기과열지구 vs 조정지역, 내 점수에서는 어디가 유리한가요?</li>
            <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">Q.</span>비슷한 점수로 당첨된 사람이 실제로 어떤 단지를 어떻게 선택했는지 알고 싶어요</li>
          </ul>
          <p className="mt-4 text-sm text-emerald-700 font-medium">
            청약홈과 부동산 커뮤니티 어디에도 나에게 딱 맞는 답이 없습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
