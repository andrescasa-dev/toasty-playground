import { useEffect, useState } from "react";

function Timer({ timeMs: targetTime }: { timeMs: number }) {
  const countDownRate = targetTime * 0.02;
  const [value, setValue] = useState(targetTime);
  useEffect(() => {
    //@ts-ignore
    let idTimer: Timeout;
    if (value > 0) {
      idTimer = setTimeout(() => {
        setValue((prev) => prev - countDownRate);
      }, countDownRate);
    }
    return () => clearTimeout(idTimer);
  }, [value, targetTime, countDownRate]);
  return (
    <input
      type="range"
      min="0"
      max={targetTime}
      value={value}
      className="w-full"
    />
  );
}

export default Timer;
