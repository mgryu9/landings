import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "리뷰봇 - 네이버·카카오·구글 리뷰 한 곳에서, AI가 답글까지",
  description:
    "소상공인을 위한 리뷰 통합 관리 서비스. 모든 리뷰를 한 화면에서 보고 AI가 답글 초안 생성. 부정 리뷰 즉시 알림.",
  openGraph: {
    title: "리뷰봇 - 리뷰 관리, 이제 하루 5분으로 줄이세요",
    description:
      "네이버·카카오·구글 리뷰를 한 곳에서. AI 답글 초안, 부정 리뷰 즉시 알림. 14일 무료.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "리뷰봇 - 리뷰 관리, 이제 하루 5분으로 줄이세요",
    description: "네이버·카카오·구글 리뷰를 한 곳에서. AI 답글 초안, 부정 리뷰 즉시 알림.",
  },
};

export default function ReviewbotLayout({
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
