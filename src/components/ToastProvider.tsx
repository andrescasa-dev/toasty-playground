"use client";
import { ToastData } from "@/components/Toast";
import ToastStack from "@/components/ToastStack";
import { ToastyConfig } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface ToastContextValue {
  cleanToastStack: () => void;
  pushToast: (toast: ToastData) => void;
  setStackConfig: (config: ToastyConfig) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const DefaultToasty: ToastyConfig = {
  position: "bottom-right",
  isClickToClose: true,
  isAutoClose: true,
  closeDelay: 2000,
};

function ToastProvider({ children }: { children: ReactNode }) {
  const [toastList, setToastList] = useState<ToastData[]>([]);
  const [stackConfig, setStackConfig] = useState(DefaultToasty);

  const pushToast = (toast: Partial<ToastData>) =>
    setToastList((prev) => {
      const newToast = {
        id: crypto.randomUUID(),
        ...toast,
      } as ToastData; //I need the user the use a Partial Toast config, but for Toasty all toast args are required.
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
        position={stackConfig.position}
        isClickToClose={stackConfig.isClickToClose}
        isAutoClose={stackConfig.isAutoClose}
        closeDelay={stackConfig.closeDelay}
        stackToastData={toastList}
        closeToast={closeToast}
      />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
