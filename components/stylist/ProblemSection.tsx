export default function ProblemSection() {
  const scenarios = [
    {
      quote: "3년 다니던 헤어샵 디자이너가 갑자기 이직했어요. 어디 갔는지 전혀 모르겠고 인스타도 팔로우를 안 해서...",
      from: "단골 고객 A씨",
    },
    {
      quote: "이직하면서 단골 손님들한테 알릴 방법이 없어요. 인스타 DM 보내면 실례인 것 같고, 번호를 다 아는 것도 아니고.",
      from: "헤어디자이너 B씨",
    },
    {
      quote: "10년 다닌 선생님이 독립샵 열었다는데 위치를 몰라요. 카카오헤어샵에는 아직 없고, 네이버도 없고.",
      from: "단골 고객 C씨",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            이런 경험, 한 번쯤 있지 않으세요?
          </h2>
          <p className="text-gray-500">
            담당자가 이직하면 고객도, 미용사도 서로 연락이 끊깁니다.
          </p>
        </div>

        <div className="space-y-4">
          {scenarios.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-3 text-base">
                &ldquo;{s.quote}&rdquo;
              </p>
              <p className="text-sm text-gray-400 font-medium">— {s.from}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center">
          <p className="text-rose-800 font-semibold text-lg mb-1">
            카카오헤어샵·네이버 예약은 매장 단위입니다
          </p>
          <p className="text-rose-700 text-sm leading-relaxed">
            담당자가 이직하면? 플랫폼에선 알 방법이 없습니다.<br />
            인스타를 팔로우하지 않았다면 영원히 끊깁니다.
          </p>
        </div>
      </div>
    </section>
  );
}
