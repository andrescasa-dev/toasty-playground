"use client";
import { ToastData } from "@/components/Toast";
import ToastStack, { Position, ToastWithId } from "@/components/ToastStack";
import { createContext, ReactNode, useState } from "react";

interface ToastContextValue {
  cleanToastStack: () => void;
  pushToast: (toast: ToastData) => void;
  setStackConfig: (config: StackConfig) => void;
}

type StackConfig = {
  position?: Position;
  isClickToClose?: boolean;
  isAutoClose?: boolean;
  closeDelay?: number;
};

const positionOpts = [
  "top-left",
  "top-right",
  "top",
  "bottom-left",
  "bottom",
  "bottom-right",
] as const;

export const ToastContext = createContext<ToastContextValue | null>(null);

function ToastProvider({ children }: { children: ReactNode }) {
  const [toastList, setToastList] = useState<ToastWithId[]>([]);
  const [stackConfig, setStackConfig] = useState<StackConfig>({
    position: positionOpts[0],
  });

  const pushToast = (toast: ToastData) =>
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

  const value: ToastContextValue = {
    cleanToastStack,
    pushToast,
    setStackConfig,
  };

  return (
    <ToastContext.Provider value={value}>
      <ToastStack
        stackToastData={toastList}
        position={stackConfig.position}
        isClickToClose={stackConfig.isClickToClose}
        isAutoClose={stackConfig.isAutoClose}
        closeDelay={stackConfig.closeDelay}
        closeToast={closeToast}
      />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
