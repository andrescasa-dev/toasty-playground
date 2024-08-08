function Timer({ duration }: { duration: number }) {
  console.log("timer duration", duration);
  return (
    <div
      className="animate-trackingProgress mt-1 h-1 w-full rounded-400 bg-black"
      role="progressbar"
      style={{ animationDuration: `${duration}ms` }}
    />
  );
}

export default Timer;
