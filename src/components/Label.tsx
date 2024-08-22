import { Label as LabelHeadless } from "@headlessui/react";
import { textStyles } from "./typography/Text";

function Label({ children, ...delegate }: { children: string }) {
  const composeClassName = `${textStyles({ type: "body-1" })} first-letter:uppercase w-full pl-1 cursor-pointer`;
  return (
    <LabelHeadless className={composeClassName} {...delegate}>
      {children}
    </LabelHeadless>
  );
}

export default Label;
