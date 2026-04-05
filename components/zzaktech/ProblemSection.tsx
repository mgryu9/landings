const problems = [
  {
    emoji: "😔",
    title: "추천 코드를 쓰지 못하고 버린다",
    description:
      "친구한테 부탁하기 민망하고, SNS에 올려봐도 반응이 없어요. 유효기간 지나서 그냥 날리는 코드가 한두 개가 아닙니다.",
  },
  {
    emoji: "🤦",
    title: "오픈채팅은 스팸과 봇이 너무 많다",
    description:
      "앱테크 오픈채팅방에 가면 같은 코드가 수십 번 올라오고, 코드 써줬는데 보상을 안 주고 잠수 타는 경우도 있어요.",
  },
  {
    emoji: "😤",
    title: "미션 파트너 찾기가 너무 힘들다",
    description:
      '"토스 친구 걷기 10,000보 같이 할 분~" 올려도 묵묵부답. 미션을 완료하려면 파트너가 필요한데 마땅한 채널이 없어요.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">
            공감하시나요?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            지금 이런 상황 아닌가요?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:bg-green-50 transition"
            >
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-base">
            국내 앱테크 앱 사용자 <span className="font-bold text-gray-700">수백만 명</span> 중,
            추천 코드를 전문으로 연결해주는 서비스는{" "}
            <span className="font-bold text-red-500">0개</span>입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
