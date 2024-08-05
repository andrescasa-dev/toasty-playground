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
  const [toastList, setToastList] = useState([
    { message: "hola mundo", id: crypto.randomUUID() } as ToastWithId,
    { message: "hola mundo", id: crypto.randomUUID() } as ToastWithId,
  ]);
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
  return {
    cleanToastStack,
    pushToast: addToast,
    toastList,
    position,
    setPosition,
  };
};

export default useToast;
