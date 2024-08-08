import { RadioGroup as RadioGroupHeadless } from "@headlessui/react";
import LabelWrapper from "./LabelWrapper";
import Radio from "./Radio";

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupHeadless> {
  options: string[];
}

function RadioGroup({ options, ...delegate }: RadioGroupProps) {
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
