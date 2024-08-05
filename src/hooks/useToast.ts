import { ToastData } from "@/components/Toast";
import { Position, ToastWithId } from "@/components/ToastStack";

import { useState } from "react";

const positionOpts = [
  "top-left",
  "top-right",
  "top",
  "bottom-left",
  "bottom",
  "bottom-right",
] as const;

const useToast = () => {
  const [toastList, setToastList] = useState<ToastWithId[]>([]);
  const [position, setPosition] = useState<Position>(positionOpts[0]);

  const addToast = (toast: ToastData) =>
    setToastList((prev) => {
      const newToast = {
        ...toast,
        id: crypto.randomUUID(),
      } as ToastWithId;
      return [...prev, newToast];
    });

  const cleanToastStack = () => {
    setToastList([]);
  };

  const closeToast = (id: string) => {
    setToastList((prevList) => {
      return prevList.filter((toast) => toast.id !== id);
    });
  };

  return {
    cleanToastStack,
    pushToast: addToast,
    toastList,
    position,
    setPosition,
    closeToast,
  };
};

export default useToast;
