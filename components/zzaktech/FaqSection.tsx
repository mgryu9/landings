"use client";

import { useState } from "react";

const faqs = [
  {
    question: "지금 당장 사용할 수 있나요?",
    answer:
      "아직 개발 중입니다. 사전등록하시면 오픈 첫날 이메일로 초대장을 보내드립니다. 사전등록자에게는 프리미엄 기능을 무료로 제공할 예정입니다.",
  },
  {
    question: "추천 코드를 공유하면 진짜 보상을 받을 수 있나요?",
    answer:
      "네. 기존 오픈채팅방과 달리, 짝테크는 코드를 쓴 사람과 준 사람 모두 보상을 받았는지 확인하는 시스템을 구축합니다. 먹튀 유저는 자동으로 매칭에서 제외됩니다.",
  },
  {
    question: "어떤 앱을 지원하나요?",
    answer:
      "토스, 캐시워크, 네이버페이, 카카오페이, 리브메이트 등 추천 코드가 있는 모든 앱을 지원할 예정입니다. 사전등록 시 원하는 앱을 제안해주시면 우선 지원합니다.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">
            자주 묻는 질문
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">FAQ</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
