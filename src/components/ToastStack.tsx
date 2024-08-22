import { GeneralToastConfig } from "../types/index";
import { cva, VariantProps } from "class-variance-authority";
import Toast, { ToastDataWithID } from "./Toast";
import clsx from "clsx";

const toastStackStyles = cva("fixed z-[1000]", {
  variants: {
    position: {
      "top-left": "left-2 top-2 ",
      top: "left-1/2 top-2 -translate-x-1/2",
      "top-right": "right-2 top-2 ",
      "bottom-left": "left-2 bottom-2 ",
      bottom: "left-1/2 -translate-x-1/2 bottom-2",
      "bottom-right": "right-2 bottom-2 ",
    },
  },
});

export type Position = VariantProps<typeof toastStackStyles>["position"];

interface ToastStackProps
  extends VariantProps<typeof toastStackStyles>,
    GeneralToastConfig {
  stackToastData: ToastDataWithID[];
  closeToast: (id: string) => void;
}

function ToastStack({
  stackToastData = [],
  closeToast,
  position,
  isClickToClose: defaultIsClickToClose,
  isAutoClose: defaultIsAutoClose,
  closeDelay: defaultCloseDelay,
}: ToastStackProps) {
  return (
    <div className={toastStackStyles({ position })}>
      <div
        className={clsx("flex flex-col gap-1", {
          "items-end": position === "top-right" || position === "bottom-right",
          "items-center": position === "top" || position === "bottom",
        })}
      >
        {stackToastData.map(({ id, ...userToast }) => (
          <Toast
            isClickToClose={defaultIsClickToClose}
            isAutoClose={defaultIsAutoClose}
            closeDelay={defaultCloseDelay}
            {...userToast} // this is the personalize config of a particular toast, so it always must rewrite the more general config of the toastStack
            key={id}
            handleClose={() => closeToast(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastStack;
