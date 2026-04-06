"use client";

import { useState } from "react";

const faqs = [
  {
    q: "어떤 학부모가 사용할 수 있나요?",
    a: "유치원, 어린이집에 다니는 자녀를 둔 학부모라면 누구나 이용할 수 있어요. 입학을 앞두고 정보를 찾고 계신 분들도 환영합니다.",
  },
  {
    q: "익명이 정말 보장되나요?",
    a: "네. 커뮤니티 활동은 닉네임으로만 표시되며, 실명이나 소속 유치원이 공개되지 않아요. 솔직한 의견을 안심하고 나눌 수 있어요.",
  },
  {
    q: "사용료가 있나요?",
    a: "완전 무료입니다. 사전등록자에게는 오픈 후 프리미엄 기능도 무료로 제공할 예정이에요.",
  },
  {
    q: "언제 오픈하나요?",
    a: "현재 사전등록 단계이며, 충분한 학부모가 모이는 대로 서비스를 오픈할 예정이에요. 오픈 시 등록하신 이메일로 가장 먼저 알려드려요.",
  },
  {
    q: "특정 유치원 후기가 없으면 어떻게 하나요?",
    a: "아직 후기가 없는 유치원이라면 직접 첫 번째 후기를 남길 수 있어요. 커뮤니티가 커질수록 정보도 풍부해집니다.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            자주 묻는 질문
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-yellow-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-3 bg-yellow-50 hover:bg-yellow-100 transition"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span className="text-yellow-500 shrink-0 text-lg font-bold">
                  {openIdx === i ? "−" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
