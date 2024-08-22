"use client";
import { PersonalizedToastConfig, ToastDataWithID } from "@/components/Toast";
import ToastStack from "@/components/ToastStack";
import { ToastStackConfig } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface ToastContextValue {
  cleanToastStack: () => void;
  pushToast: (toast: PersonalizedToastConfig) => void;
  setStackConfig: (config: ToastStackConfig) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const defaultConfig: ToastStackConfig = {
  position: "bottom-right",
  isClickToClose: true,
  isAutoClose: true,
  closeDelay: 2000,
};

interface ToastProviderProps extends ToastStackConfig {
  children: ReactNode;
}

function ToastProvider({ children, ...userConfig }: ToastProviderProps) {
  const [toastList, setToastList] = useState<ToastDataWithID[]>([]);
  const [stackConfig, setStackConfig] = useState<ToastStackConfig>({
    ...defaultConfig,
    ...userConfig,
  });

  const pushToast: ToastContextValue["pushToast"] = (toast) =>
    setToastList((prev) => {
      const newToast = {
        id: crypto.randomUUID(),
        ...toast,
      };
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
