import { useEffect, useState } from "react";

function Timer({ timeMs }: { timeMs: number }) {
  const countDownRate = timeMs * 0.02;
  const [value, setValue] = useState(timeMs);
  useEffect(() => {
    //@ts-ignore
    let idTimer: Timeout;
    if (value > 0) {
      idTimer = setTimeout(() => {
        setValue((prev) => prev - countDownRate);
      }, countDownRate);
    }
    return () => clearTimeout(idTimer);
  }, [value, timeMs, countDownRate]);
  return (
    <input type="range" min="0" max={timeMs} value={value} className="w-full" />
  );
}

export default Timer;
