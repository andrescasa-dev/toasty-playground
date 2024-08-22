import { cva, VariantProps } from "class-variance-authority";
import { CircleX, Info, TriangleAlert, X } from "lucide-react";
import { useEffect } from "react";
import { GeneralToastConfig } from "../types/index";
import Timer from "./Timer";

const iconDict = {
  notification: false as const,
  info: Info,
  warning: TriangleAlert,
  error: CircleX,
};

const toastStyles = cva(
  "relative min-w-[17rem] max-w-[22rem] w-fit cursor-pointer rounded-400 border pl-4 pr-8 py-4",
  {
    variants: {
      intent: {
        notification: "border-border bg-white text-text",
        info: "border-info/30 text-info bg-[#F0F8FF]",
        warning: "border-warning/30 text-warning bg-[#FFFCF0]",
        error: "border-error/30 text-error bg-[#FFF0F0]",
      },
    },
    defaultVariants: {
      intent: "notification",
    },
  },
);

export interface PersonalizedToastConfig
  extends VariantProps<typeof toastStyles>,
    GeneralToastConfig {
  message?: string;
}

export interface ToastDataWithID extends PersonalizedToastConfig {
  id: string;
}

interface ToastProps extends PersonalizedToastConfig {
  handleClose?: () => void;
}

function Toast({
  isClickToClose,
  closeDelay,
  isAutoClose,
  message,
  intent = "notification",
  handleClose,
}: ToastProps) {
  const Icon = intent !== null && iconDict[intent];

  useEffect(() => {
    if (isAutoClose) {
      const timeOut = setTimeout(() => {
        if (handleClose) handleClose();
      }, closeDelay);
      return () => clearTimeout(timeOut);
    }
    //I don't pass into the dependency array the handleClose because in toast stack i'm creating a new declaration each time
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeDelay, isAutoClose]);

  return (
    <div
      className={toastStyles({ intent })}
      onClick={() => isClickToClose && handleClose && handleClose()}
    >
      {isClickToClose && (
        <X className="absolute right-2 top-2 size-4 text-inherit opacity-50" />
      )}

      <div className="flex gap-1">
        {Icon && <Icon strokeWidth={1.5} />}
        <p className="text-sm md:text-base">{message}</p>
      </div>

      {isAutoClose && <Timer duration={closeDelay!} intent={intent} />}
    </div>
  );
}

export default Toast;
