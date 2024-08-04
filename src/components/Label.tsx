import { Label as LabelHeadless } from "@headlessui/react";
import { textStyles } from "./typography/Text";

function Label({ children, ...delegate }: { children: string }) {
  return (
    <LabelHeadless className={textStyles({ type: "body-1" })} {...delegate}>
      {children}
    </LabelHeadless>
  );
}

export default Label;
