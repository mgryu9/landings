export default function ProblemSection() {
  const stats = [
    { number: "평균 12%", label: "협상 안 한 사람 vs 한 사람의 연봉 차이", color: "text-blue-600" },
    { number: "연 400만원+", label: "첫 연봉 차이가 3년간 누적되면", color: "text-blue-600" },
    { number: "73%", label: "협상 시도 시 성공하는 비율 (Salary.com)", color: "text-blue-600" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            연봉 협상 안 하면 손해입니다
          </h2>
          <p className="text-gray-500">
            모르면 회사가 부르는 대로 받습니다. 알면 내가 부를 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <p className={`text-3xl font-bold mb-2 ${s.color}`}>{s.number}</p>
              <p className="text-sm text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">이런 고민, 하셨나요?</h3>
          <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-400 mt-0.5">•</span>얼마를 불러야 적정한지 기준이 없다</li>
            <li className="flex gap-2"><span className="text-blue-400 mt-0.5">•</span>협상하다가 오퍼 취소될까봐 무섭다</li>
            <li className="flex gap-2"><span className="text-blue-400 mt-0.5">•</span>내 직군 시장 연봉이 얼마인지 정확히 모른다</li>
            <li className="flex gap-2"><span className="text-blue-400 mt-0.5">•</span>합격하고 나서 뭘 어떻게 말해야 할지 모르겠다</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
