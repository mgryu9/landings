import Link from "next/link";

const services = [
  {
    href: "/stylist",
    name: "핸즈",
    desc: "내 미용사 팔로우 & 이직 알림",
    emoji: "✂️",
    color: "bg-rose-50 hover:bg-rose-100 border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    href: "/kindergarten",
    name: "키즈커넥트",
    desc: "유치원 학부모 커뮤니티",
    emoji: "🧸",
    color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    href: "/salary",
    name: "연봉핏",
    desc: "이직 연봉 협상 도우미",
    emoji: "💰",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    href: "/reviewbot",
    name: "리뷰봇",
    desc: "소상공인 리뷰 통합 관리 자동화",
    emoji: "⭐",
    color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    href: "/meetingai",
    name: "미팅AI",
    desc: "회의록 액션아이템 자동 추출",
    emoji: "📝",
    color: "bg-violet-50 hover:bg-violet-100 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    href: "/apartment",
    name: "청약핏",
    desc: "청약 당첨 전략 커뮤니티",
    emoji: "🏠",
    color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    href: "/zzaktech",
    name: "짝테크",
    desc: "앱테크 함께하는 짝꿍 매칭",
    emoji: "📱",
    color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            관심 있는 서비스에 신청해주세요
          </h1>
          <p className="text-gray-500 text-sm">
            출시 전 사전 등록 — 가장 먼저 알려드릴게요
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`flex items-center gap-4 border rounded-xl px-5 py-4 transition-colors cursor-pointer ${s.color}`}
            >
              <span className="text-2xl">{s.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{s.name}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${s.badge}`}>
                사전신청
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
