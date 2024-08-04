import { RadioGroup as RadioGroupHeadless } from "@headlessui/react";
import { useState } from "react";
import LabelWrapper from "./LabelWrapper";
import Radio from "./Radio";

function RadioGroup({
  options,
  className,
}: {
  options: string[];
  className: string;
}) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <RadioGroupHeadless
      value={selected}
      onChange={setSelected}
      className={className}
    >
      {options.map((option) => (
        <LabelWrapper key={option} text={option}>
          <Radio value={option} />
        </LabelWrapper>
      ))}
    </RadioGroupHeadless>
  );
}

export default RadioGroup;
