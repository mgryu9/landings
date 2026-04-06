"use client";

import { useState } from "react";

interface RegisterFormProps {
  source?: string;
  onSuccess?: () => void;
  size?: "default" | "large";
}

export default function RegisterForm({
  source,
  onSuccess,
  size = "default",
}: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "duplicate"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      // Meta Pixel Lead 이벤트
      type FbqWindow = Window & { fbq?: (...args: unknown[]) => void };
      if (typeof window !== "undefined" && (window as FbqWindow).fbq) {
        (window as FbqWindow).fbq!("track", "Lead", {
          content_name: "kindergarten",
        });
      }

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          project: "kindergarten",
          source,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        onSuccess?.();
      } else if (res.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "오류가 발생했습니다.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-yellow-800 font-bold text-lg">사전등록 완료!</p>
        <p className="text-yellow-700 text-sm mt-1">
          오픈 첫날 이메일로 초대장을 보내드릴게요.
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="rounded-2xl bg-orange-50 border border-orange-200 p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-orange-800 font-bold text-lg">
          이미 등록된 이메일이에요
        </p>
        <p className="text-orange-700 text-sm mt-1">
          오픈 시 꼭 알려드릴게요. 기다려주셔서 감사합니다!
        </p>
      </div>
    );
  }

  const isLarge = size === "large";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력하세요"
          required
          className={`flex-1 rounded-xl border border-yellow-200 bg-white px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ${
            isLarge ? "py-4 text-base" : "py-3 text-sm"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full sm:w-auto whitespace-nowrap rounded-xl bg-yellow-400 text-yellow-900 font-bold hover:bg-yellow-500 active:bg-yellow-600 disabled:opacity-60 transition ${
            isLarge ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
          }`}
        >
          {status === "loading" ? "등록 중..." : "사전등록하기 (무료)"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
