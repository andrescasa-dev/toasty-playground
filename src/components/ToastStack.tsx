import { cva, VariantProps } from "class-variance-authority";
import Toast, { ToastData } from "./Toast";

const toastStackStyles = cva("fixed z-[1000]", {
  variants: {
    position: {
      "top-left": "left-2 top-2",
      top: "left-1/2 top-2 -translate-x-1/2",
      "top-right": "right-2 top-2",
      "bottom-left": "left-2 bottom-2",
      bottom: "left-1/2 -translate-x-1/2 bottom-2",
      "bottom-right": "right-2 bottom-2",
    },
  },
});

export interface ToastWithId extends ToastData {
  id: string;
}

export type Position = VariantProps<typeof toastStackStyles>["position"];

interface ToastStackProps extends VariantProps<typeof toastStackStyles> {
  stackToastData: ToastWithId[];
  closeToast: (id: string) => void;
}

function ToastStack({
  stackToastData = [],
  position = "top-left",
  closeToast,
}: ToastStackProps) {
  return (
    <div className={toastStackStyles({ position })}>
      <div className="flex flex-col gap-1">
        {stackToastData.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            handleClose={() => closeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastStack;
