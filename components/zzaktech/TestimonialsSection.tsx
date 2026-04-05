const testimonials = [
  {
    quote:
      "저처럼 추천 코드 못 쓰고 버리는 분들 많잖아요. 친구한테 부탁하기 민망하고, 오픈채팅방은 너무 지저분해서. 딱 맞는 사람이랑 바로 연결되는 서비스가 있으면 진짜 좋겠다 싶었어요.",
    author: "앱테크 2년차 직장인",
    detail: "토스·캐시워크·리브메이트 동시 사용",
  },
  {
    quote:
      "오픈채팅 들어가면 스팸이 너무 많아서 진짜 매칭이 되는 건지도 모르겠고, 코드 써줬는데 잠수 타는 사람도 있고. 믿고 쓸 수 있는 플랫폼이 필요했어요.",
    author: "앱테크 파워유저",
    detail: "월 20만원 이상 앱테크 수익",
  },
  {
    quote:
      "걷기 미션 파트너 구하려고 카페에 글 올렸더니 반응이 하나도 없더라고요. 앱별로 미션 파트너를 바로 찾을 수 있는 곳이 있으면 진짜 편할 것 같아요.",
    author: "30대 직장인",
    detail: "캐시워크·토스 걷기 미션 활용 중",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">
            실제 목소리
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            앱테크 유저들이 말합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              {/* 인용 부호 */}
              <div className="text-green-400 text-4xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {item.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-sm">
                  {item.author}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
