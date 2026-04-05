import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "청약핏 - 내 청약 점수로 어디를 넣어야 당첨될까요?",
  description:
    "나와 같은 가입점수·지역·세대수 조건으로 당첨된 실제 케이스를 공유하는 커뮤니티. 블라인드 정보를 체계적으로 모았습니다.",
  openGraph: {
    title: "청약핏 - 내 점수로 어디 넣으면 될까? 같은 조건 당첨자에게 물어보세요",
    description:
      "가입점수·지역·세대수 조건 기반 청약 당첨 케이스 커뮤니티. 무료 입장.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "청약핏 - 내 점수로 어디 넣으면 될까?",
    description: "가입점수·지역·세대수 조건 기반 청약 당첨 케이스 커뮤니티.",
  },
};

export default function ApartmentLayout({
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
