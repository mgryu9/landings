"use client";

import Script from "next/script";
import { useEffect } from "react";

interface MetaPixelProps {
  pixelId: string;
}

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    // PageView 이벤트: 클라이언트 사이드 네비게이션 시 중복 방지
    if (typeof window !== "undefined" && (window as Window & { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq!("track", "PageView");
    }
  }, []);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
