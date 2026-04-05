"use client";

import { useState } from "react";

const faqs = [
  {
    q: "연봉 조회는 정말 무료인가요?",
    a: "기본 연봉 범위 조회는 완전 무료입니다. 협상 코칭 세션(1:1)은 유료이며, 베타 사전등록자에게는 할인 혜택을 드립니다.",
  },
  {
    q: "어떤 직군을 지원하나요?",
    a: "초기에는 IT/소프트웨어, 마케팅, 기획/PM, 디자인 직군을 우선 지원합니다. 이후 금융, 법무, 컨설팅 등으로 확장 예정입니다.",
  },
  {
    q: "연봉 데이터는 얼마나 최신인가요?",
    a: "커뮤니티 제출 데이터를 기반으로 하며, 최근 6개월 내 이직/입사 케이스를 우선 반영합니다. 잡코리아·블라인드 공개 데이터도 보조 활용합니다.",
  },
  {
    q: "스크립트가 정말 효과가 있나요?",
    a: "실제 협상 성공 케이스에서 추출한 문구입니다. 스크립트 자체보다 '근거 있는 숫자를 제시하는 방법'을 익히는 것이 핵심입니다.",
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
