import React from "react";
import Text from "./typography/Text";
import { X } from "lucide-react";

function Toast() {
  return (
    <div className="fixed inset-0 p-2">
      <div className="relative w-[17rem] rounded-400 border border-border bg-white px-4 py-4">
        <X className="absolute right-2 top-2 size-4 text-border" />
        <Text as="p" type={"body-1"}>
          Toast
        </Text>
      </div>
    </div>
  );
}

export default Toast;
