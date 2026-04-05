import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "핸즈 - 내 헤어디자이너, 이직해도 바로 찾으세요",
  description:
    "헤어샵이 아닌 미용사 개인을 팔로우. 이직·독립해도 바로 알림 받고 예약하세요.",
  openGraph: {
    title: "핸즈 - 내 헤어디자이너, 이직했는데 어디 갔는지 아세요?",
    description:
      "미용사 개인을 팔로우하고, 어디로 가든 바로 알림 받으세요. 지금 사전등록.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "핸즈 - 내 헤어디자이너, 이직해도 바로 찾으세요",
    description:
      "미용사 개인을 팔로우하고, 어디로 가든 바로 알림 받으세요.",
  },
};

export default function StylistLayout({
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
