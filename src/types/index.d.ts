import { Position } from "@/components/ToastStack";

export interface GeneralToastConfig {
  isClickToClose?: boolean;
  isAutoClose?: boolean;
  closeDelay?: number;
}

export interface ToastStackConfig extends GeneralToastConfig {
  position?: Position;
}
