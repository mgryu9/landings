"use client";

import { useState } from "react";

const faqs = [
  {
    q: "어떤 리뷰 플랫폼을 지원하나요?",
    a: "네이버 플레이스, 카카오 맵, 구글 맵을 지원합니다. 추후 배달의민족, 쿠팡이츠 등 배달 플랫폼도 추가할 예정입니다.",
  },
  {
    q: "설치가 어렵지 않나요?",
    a: "각 플랫폼 계정을 연동하면 끝입니다. 코딩이나 기술 지식이 전혀 필요 없습니다. 5분이면 설정 완료됩니다.",
  },
  {
    q: "AI가 쓴 답글이 어색하지 않나요?",
    a: "매장 톤앤매너를 학습해서 개인화된 답글을 생성합니다. 초안을 그대로 쓰셔도 되고, 수정 후 게시하셔도 됩니다.",
  },
  {
    q: "14일 이후 자동 결제되나요?",
    a: "체험 신청 시 카드 정보를 요구하지 않습니다. 14일 후 계속 쓰고 싶으시면 그때 결제하시면 됩니다.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-900"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="text-gray-400 ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
