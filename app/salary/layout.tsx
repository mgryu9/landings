import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "연봉핏 - 이직 연봉 협상, 얼마를 불러야 할지 모르겠다면",
  description:
    "직군·연차·기술스택으로 시장 연봉 무료 조회 + 실제 합격자 협상 스크립트. 연봉 협상 한 번이 연간 수백만원 차이입니다.",
  openGraph: {
    title: "연봉핏 - 이직 연봉 협상, 얼마를 불러야 할지 모르겠다면",
    description:
      "직군·연차로 시장 연봉 무료 조회. 실제 협상 성공 스크립트 제공. 지금 사전등록.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "연봉핏 - 이직 연봉 협상, 얼마를 불러야 할지 모르겠다면",
    description: "직군·연차로 시장 연봉 무료 조회. 실제 협상 성공 스크립트 제공.",
  },
};

export default function SalaryLayout({
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
