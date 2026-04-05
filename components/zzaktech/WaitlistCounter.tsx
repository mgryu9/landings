interface WaitlistCounterProps {
  count: number;
}

export default function WaitlistCounter({ count }: WaitlistCounterProps) {
  // 카운트에 약간의 시드값을 더해 초기 숫자를 자연스럽게 표시
  const displayCount = count + 12;

  return (
    <p className="text-sm text-green-700 font-medium">
      현재{" "}
      <span className="font-bold text-green-800">{displayCount.toLocaleString()}</span>
      명이 대기 중 — 오픈 시 이메일로 알려드립니다
    </p>
  );
}
