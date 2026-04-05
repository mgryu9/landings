export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            리뷰 관리, 지금 이렇게 하고 계시죠?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { platform: "네이버 플레이스", time: "하루 1번 확인", pain: "답글 달기 귀찮음" },
            { platform: "카카오 맵", time: "2~3일에 1번", pain: "알림이 안 와서 놓침" },
            { platform: "구글 맵", time: "일주일에 1번", pain: "부정 리뷰 늦게 발견" },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-900 mb-2">{p.platform}</p>
              <p className="text-sm text-gray-500 mb-1">{p.time}</p>
              <p className="text-sm text-red-500">{p.pain}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
          <p className="font-bold text-orange-900 mb-2 text-lg">
            하루에 세 군데 들어가서 리뷰 확인하고 답글 다는 것, 일이 됩니다
          </p>
          <p className="text-orange-800 text-sm leading-relaxed">
            부정 리뷰가 올라온 걸 3일 후에 발견해서 대응이 늦은 적 있으신가요?<br />
            매일 반복되는 리뷰 답글 작업에 하루 30분 이상 쓰고 계신가요?<br />
            리뷰봇이 이 모든 것을 자동화합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
