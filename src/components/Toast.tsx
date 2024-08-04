import React from "react";
import Text from "./typography/Text";
import { X } from "lucide-react";

export type ToastData = { message?: string };

function Toast({ message }: ToastData) {
  return (
    <div className="relative w-[17rem] cursor-pointer rounded-400 border border-border bg-white px-4 py-4">
      <X className="absolute right-2 top-2 size-4 text-border" />
      <Text as="p" type={"body-1"}>
        {message}
      </Text>
    </div>
  );
}

export default Toast;
