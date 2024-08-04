import { Field } from "@headlessui/react";
import { ReactElement } from "react";
import Label from "./Label";

function LabelWrapper({
  text: labelText,
  children,
  className = "",
}: {
  text: string;
  className?: string;
  children: ReactElement;
}) {
  const composeClassName = `flex items-center gap-1 ${className}`;
  return (
    <Field className={composeClassName}>
      {children}
      <Label>{labelText}</Label>
    </Field>
  );
}

export default LabelWrapper;
