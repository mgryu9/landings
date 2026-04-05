"use client";

import { useState } from "react";

const faqs = [
  {
    q: "고객이 이용하려면 비용이 드나요?",
    a: "고객 이용은 완전 무료입니다. 디자이너 팔로우, 알림 수신, 포트폴리오 열람 모두 무료로 제공됩니다.",
  },
  {
    q: "미용사만 가입할 수 있나요?",
    a: "현재 베타 버전은 헤어 미용사/디자이너를 우선 지원합니다. 이후 네일, PT 트레이너, 왁싱 등으로 확장할 예정입니다.",
  },
  {
    q: "기존 단골 고객 정보는 어떻게 불러오나요?",
    a: "미용사가 서비스에 가입하면 기존 고객에게 팔로우 초대 링크를 보낼 수 있습니다. 고객이 링크를 통해 팔로우하면 자동으로 연결됩니다.",
  },
  {
    q: "개인정보는 안전한가요?",
    a: "이메일 주소만 수집하며, 제3자에게 절대 제공하지 않습니다. 언제든 수신 거부 및 탈퇴가 가능합니다.",
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
