import { RadioGroup as RadioGroupHeadless } from "@headlessui/react";
import LabelWrapper from "./LabelWrapper";
import Radio from "./Radio";

function RadioGroup({ options, ...delegate }: { options: string[] }) {
  return (
    <RadioGroupHeadless {...delegate}>
      {options.map((option) => (
        <LabelWrapper key={option} text={option}>
          <Radio value={option} />
        </LabelWrapper>
      ))}
    </RadioGroupHeadless>
  );
}

export default RadioGroup;
