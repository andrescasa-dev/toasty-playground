export interface ToastStackConfig {
  isClickToClose: boolean;
  isAutoClose: boolean;
  closeDelay: number;
}

export interface ToastyConfig extends ToastStackConfig {
  position: Position;
}
