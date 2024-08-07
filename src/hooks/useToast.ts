import { ToastContext } from "@/components/ToastProvider";
import { useContext } from "react";

function useToast() {
  const contextValue = useContext(ToastContext);

  if (contextValue === null) {
    throw new Error("useToast have to be used inside the ToastProvider");
  } else {
    return contextValue;
  }
}

export default useToast;
