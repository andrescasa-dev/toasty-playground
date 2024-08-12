import { cva, VariantProps } from "class-variance-authority";
import Toast, { ToastData } from "./Toast";
import { ToastStackConfig } from "@/types";

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

export type Position = VariantProps<typeof toastStackStyles>["position"];

interface ToastStackProps
  extends VariantProps<typeof toastStackStyles>,
    ToastStackConfig {
  stackToastData: ToastData[];
  closeToast: (id: string) => void;
}

function ToastStack({
  stackToastData = [],
  closeToast,
  position,
  isClickToClose,
  isAutoClose,
  closeDelay,
}: ToastStackProps) {
  return (
    <div className={toastStackStyles({ position })}>
      <div className="flex flex-col gap-1">
        {stackToastData.map((toast) => (
          <Toast
            key={toast.id}
            // @ts-expect-error:ts(2783) ts don't know that the toast config is a partial type for the user, But for the dependency is a Required type
            isClickToClose={isClickToClose}
            // @ts-expect-error:ts(2783) ts don't know that the toast config is a partial type for the user, But for the dependency is a Required type
            isAutoClose={isAutoClose}
            // @ts-expect-error:ts(2783) ts don't know that the toast config is a partial type for the user, But for the dependency is a Required type
            closeDelay={closeDelay}
            {...toast} // this is the personalize config of a particular toast, so it always must rewrite the more general config of the toastStack
            handleClose={() => closeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastStack;
