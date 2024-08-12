import { cva, VariantProps } from "class-variance-authority";

const timerStyles = cva(
  "mt-1 h-1 w-full animate-trackingProgress rounded-400",
  {
    variants: {
      intent: {
        warning: "bg-warning/50",
        error: "bg-error/50",
        info: "bg-info/50",
        notification: "bg-primary/50",
      },
    },
    defaultVariants: {
      intent: "notification",
    },
  },
);

interface TimerProps extends VariantProps<typeof timerStyles> {
  duration: number;
}

function Timer({ duration, intent }: TimerProps) {
  return (
    <div
      className={timerStyles({ intent: intent })}
      role="progressbar"
      style={{ animationDuration: `${duration}ms` }}
    />
  );
}

export default Timer;
