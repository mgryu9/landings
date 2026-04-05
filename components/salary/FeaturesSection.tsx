export default function FeaturesSection() {
  const features = [
    {
      step: "01",
      title: "내 시장 연봉 확인",
      desc: "직군·연차·기술스택·지역을 입력하면 최신 시장 연봉 범위(최소/중간/상위 25%)를 알려드립니다. 블라인드·잡코리아 대비 실시간으로 업데이트됩니다.",
    },
    {
      step: "02",
      title: "협상 스크립트 받기",
      desc: "실제로 협상 성공한 사람들이 제출한 스크립트를 직군별로 제공합니다. '현재 00만원인데, 00만원을 희망합니다'가 아닌 근거 있는 협상 문구를 받으세요.",
    },
    {
      step: "03",
      title: "합격자 후기 커뮤니티",
      desc: "같은 직군, 비슷한 연차의 사람이 어느 회사에서 얼마 받고 들어갔는지 익명으로 공유합니다. 내 케이스와 비슷한 사례를 찾아 전략을 세우세요.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            3단계로 연봉 협상을 끝냅니다
          </h2>
        </div>

        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                {f.step}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">{f.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
