import { cva, VariantProps } from "class-variance-authority";
import { CircleX, Info, TriangleAlert, X } from "lucide-react";
import { useEffect } from "react";
import Text from "./typography/Text";
import Timer from "./Timer";

const iconDict = {
  notification: false as const,
  info: Info,
  warning: TriangleAlert,
  error: CircleX,
};

const toastStyles = cva(
  "relative w-[17rem] cursor-pointer rounded-400 border px-4 py-4",
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

export interface ToastData extends VariantProps<typeof toastStyles> {
  message?: string;
  closeDelay?: number;
  handleClose?: () => void;
  isAutoClose?: boolean;
  clickToClose?: boolean;
}

export const DEFAULT_PROGRESSBAR_DURATION = 2000;

function Toast({
  message,
  intent = "notification",
  handleClose,
  closeDelay = DEFAULT_PROGRESSBAR_DURATION,
  isAutoClose = false,
  clickToClose,
}: ToastData) {
  const Icon = intent !== null && iconDict[intent];

  useEffect(() => {
    if (isAutoClose) {
      const timeOut = setTimeout(() => {
        handleClose && handleClose();
      }, closeDelay);
      return () => clearTimeout(timeOut);
    }
  }, [handleClose, closeDelay, isAutoClose]);

  return (
    <div
      className={toastStyles({ intent })}
      onClick={() => clickToClose && handleClose && handleClose()}
    >
      {clickToClose && (
        <X className="absolute right-2 top-2 size-4 text-inherit opacity-50" />
      )}

      <div className="flex gap-1">
        {Icon && <Icon strokeWidth={1.5} />}
        <Text as="p" type={"body-1"}>
          {message}
        </Text>
      </div>

      {isAutoClose && <Timer duration={closeDelay} intent={intent} />}
    </div>
  );
}

export default Toast;
