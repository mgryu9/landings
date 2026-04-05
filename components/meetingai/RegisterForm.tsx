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
      type FbqWindow = Window & { fbq?: (...args: unknown[]) => void };
      if (typeof window !== "undefined" && (window as FbqWindow).fbq) {
        (window as FbqWindow).fbq!("track", "Lead", { content_name: "meetingai" });
      }

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), project: "meetingai", source }),
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
      <div className="rounded-xl bg-violet-50 border border-violet-200 p-6 text-center">
        <p className="text-violet-800 font-semibold text-lg">베타 무료 체험 신청 완료!</p>
        <p className="text-violet-700 text-sm mt-1">
          오픈 첫날 체험 링크를 이메일로 보내드릴게요.
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 text-center">
        <p className="text-amber-800 font-semibold text-lg">이미 등록된 이메일이에요</p>
        <p className="text-amber-700 text-sm mt-1">오픈 시 꼭 알려드릴게요!</p>
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
          className={`flex-1 rounded-xl border border-gray-200 bg-white px-4 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition ${
            isLarge ? "py-4 text-base" : "py-3 text-sm"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full sm:w-auto whitespace-nowrap rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 active:bg-violet-800 disabled:opacity-60 transition ${
            isLarge ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
          }`}
        >
          {status === "loading" ? "등록 중..." : "베타 무료 체험 신청하기"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
