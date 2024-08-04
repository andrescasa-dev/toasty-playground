import { Field } from "@headlessui/react";
import { ReactElement } from "react";
import Label from "./Label";

function LabelWrapper({
  text: labelText,
  children,
}: {
  text: string;
  children: ReactElement;
}) {
  return (
    <Field className="flex items-center gap-1">
      {children}
      <Label>{labelText}</Label>
    </Field>
  );
}

export default LabelWrapper;
