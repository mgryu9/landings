import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "미팅AI - 회의록 붙여넣으면 액션아이템 30초 만에 정리",
  description:
    "회의록 텍스트를 붙여넣으면 담당자·기한·할일을 자동 추출. Notion·Slack으로 즉시 전송. 회의 후 30분 낭비 없애세요.",
  openGraph: {
    title: "미팅AI - 회의는 끝났는데 그래서 누가 뭘 해야 해?",
    description: "회의록 붙여넣기 → 30초 후 액션아이템 완료. Notion·Slack 즉시 전송.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "미팅AI - 회의는 끝났는데 그래서 누가 뭘 해야 해?",
    description: "회의록 붙여넣기 → 30초 후 액션아이템 완료. Notion·Slack 즉시 전송.",
  },
};

export default function MeetingAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      {children}
      <Analytics />
      {pixelId && <MetaPixel pixelId={pixelId} />}
    </>
  );
}
