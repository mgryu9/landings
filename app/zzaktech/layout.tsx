import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "짝테크 - 추천 코드 나누고 보상 두 배로",
  description:
    "앱테크 하는 사람끼리 추천 코드 나누고, 미션 같이 깨고, 보상 두 배로. 오픈채팅 스팸 없이 딱 맞는 파트너와.",
  openGraph: {
    title: "짝테크 - 추천 코드 혼자 버리지 마세요",
    description:
      "앱테크 추천 코드 & 미션 파트너 매칭 커뮤니티. 지금 사전등록하세요.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "짝테크 - 추천 코드 혼자 버리지 마세요",
    description:
      "앱테크 추천 코드 & 미션 파트너 매칭 커뮤니티. 지금 사전등록하세요.",
  },
};

export default function ZzaktechLayout({
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
