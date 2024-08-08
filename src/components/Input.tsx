import { Input as InputHeadless } from "@headlessui/react";
import React from "react";

// extending the props from the native HTML input (It allow to use for example placeholder)
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

function Input({ className = "", ...delegate }: InputProps) {
  const composeClassName = `rounded-400 border border-border px-1.5 py-2 text-base data-[focus]:bg-gray-100 ${className}`;
  return (
    <InputHeadless type="text" className={composeClassName} {...delegate} />
  );
}
export default Input;
