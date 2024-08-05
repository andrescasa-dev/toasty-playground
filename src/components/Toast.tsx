import React from "react";
import Text from "./typography/Text";
import { CircleX, Info, TriangleAlert, X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const iconDict = {
  notification: false as const,
  info: Info,
  warning: TriangleAlert,
  error: CircleX,
};

const toastStyles = cva(
  "relative w-[17rem] cursor-pointer rounded-400 border px-4 py-4 flex gap-1.5",
  {
    variants: {
      intent: {
        notification: "border-border bg-white text-text",
        info: "border-[#0973DC]/30 text-[#0973DC] bg-[#F0F8FF]",
        warning: "border-[#DC7609]/30 text-[#DC7609] bg-[#FFFCF0]",
        error: "border-[#E60000]/30 text-[#E60000] bg-[#FFF0F0]",
      },
    },
    defaultVariants: {
      intent: "notification",
    },
  },
);

export interface ToastData extends VariantProps<typeof toastStyles> {
  message?: string;
}

function Toast({ message, intent = "notification" }: ToastData) {
  const Icon = intent !== null && iconDict[intent];
  return (
    <div className={toastStyles({ intent })}>
      {Icon && <Icon strokeWidth={1.5} />}
      <X className="absolute right-2 top-2 size-4 text-inherit opacity-50" />
      <Text as="p" type={"body-1"}>
        {message}
      </Text>
    </div>
  );
}

export default Toast;
