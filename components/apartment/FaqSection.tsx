"use client";

import { useState } from "react";

const faqs = [
  {
    q: "수도권 외 지역도 다루나요?",
    a: "수도권을 우선 지원하지만 5대 광역시(부산·대구·인천·광주·대전) 케이스도 수집 중입니다. 지역별 케이스가 쌓이는 순서대로 개방합니다.",
  },
  {
    q: "당첨 케이스 정보는 어떻게 수집하나요?",
    a: "커뮤니티 멤버가 자발적으로 제출한 당첨 후기를 검수 후 등록합니다. 제출자는 포인트를 받고, 포인트로 심층 분석 자료를 열람할 수 있습니다.",
  },
  {
    q: "무료로 이용할 수 있나요?",
    a: "기본 커뮤니티 접근 및 케이스 열람은 무료입니다. 전문가 1:1 상담 연결과 특정 단지 심층 분석 리포트는 유료(건당 또는 멤버십)입니다.",
  },
  {
    q: "청약 투자 조언도 해주나요?",
    a: "투자 추천이나 수익 보장은 하지 않습니다. 실제 케이스 공유와 조건 기반 정보 제공이 목적입니다. 중요한 결정은 반드시 전문가와 상담하세요.",
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
