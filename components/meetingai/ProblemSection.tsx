export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            회의 후 30분, 매번 낭비하고 있습니다
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
          <p className="text-sm text-gray-400 mb-3 font-medium">일반적인 회의 후 시나리오</p>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-400 font-mono">14:30</span>
              <span>회의 종료. 회의록 파일 열기</span>
            </div>
            <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-400 font-mono">14:45</span>
              <span>회의록에서 액션아이템 찾아서 따로 정리 시작</span>
            </div>
            <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
              <span className="text-gray-400 font-mono">15:00</span>
              <span className="text-yellow-800">담당자 이름 헷갈려서 슬랙 다시 확인</span>
            </div>
            <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
              <span className="text-gray-400 font-mono">15:10</span>
              <span className="text-red-700">Notion에 옮기고 담당자 멘션하고 기한 설정... 완료</span>
            </div>
          </div>
          <p className="mt-4 text-center text-violet-700 font-semibold">총 40분 소요. 매주 반복.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: "주 3회", label: "평균 회의 횟수 (직장인)" },
            { num: "30분", label: "회의 후 정리에 쓰는 시간" },
            { num: "월 6시간", label: "회의록 정리에만 사라지는 시간" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
              <p className="text-2xl font-bold text-violet-600 mb-1">{s.num}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
