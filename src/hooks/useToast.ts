import { ToastData } from "@/components/Toast";
import { ToastWithId } from "@/components/ToastStack";
import { useState } from "react";

const useToast = () => {
  const [toastList, setToastList] = useState([
    { message: "hola mundo", id: crypto.randomUUID() } as ToastWithId,
    { message: "hola mundo", id: crypto.randomUUID() } as ToastWithId,
  ]);

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
  return { cleanToastStack, pushToast: addToast, toastList };
};

export default useToast;
