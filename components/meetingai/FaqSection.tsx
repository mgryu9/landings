"use client";

import { useState } from "react";

const faqs = [
  {
    q: "어떤 포맷의 회의록도 되나요?",
    a: "텍스트로 된 회의록이라면 형식에 상관없이 처리합니다. 카카오톡 대화록, Notion 페이지 텍스트, 워드 파일 복사 등 모두 가능합니다.",
  },
  {
    q: "Notion·Slack 외 다른 툴도 연동되나요?",
    a: "초기 버전에서는 Notion과 Slack을 우선 지원합니다. 추후 Jira, Asana, Teams 등을 추가할 예정입니다.",
  },
  {
    q: "회의록 내용이 외부로 유출될 수 있나요?",
    a: "처리 후 서버에 저장하지 않습니다. 연결된 Notion·Slack 외에는 데이터가 전송되지 않습니다.",
  },
  {
    q: "팀 전체가 함께 쓸 수 있나요?",
    a: "팀 요금제를 준비 중입니다. 베타 사전등록자 중 팀 단위 신청자는 오픈 시 팀 요금제 우선 체험 혜택을 드립니다.",
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
