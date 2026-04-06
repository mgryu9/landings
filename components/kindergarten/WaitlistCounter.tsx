interface WaitlistCounterProps {
  count: number;
}

export default function WaitlistCounter({ count }: WaitlistCounterProps) {
  const displayCount = Math.max(count, 0);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span className="flex -space-x-2">
        {["bg-yellow-400", "bg-orange-400", "bg-pink-400"].map((color, i) => (
          <span
            key={i}
            className={`inline-block w-7 h-7 rounded-full border-2 border-white ${color}`}
          />
        ))}
      </span>
      <span>
        <span className="font-semibold text-gray-700">
          {displayCount > 0 ? `${displayCount.toLocaleString()}명` : "학부모들이"}
        </span>
        {" "}이미 사전등록했어요
      </span>
    </div>
  );
}
