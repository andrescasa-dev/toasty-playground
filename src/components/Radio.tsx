"use client";
import { Radio as RadioHeadless } from "@headlessui/react";
import { Check } from "lucide-react";

function Radio({ value }: { value: string }) {
  return (
    <RadioHeadless
      value={value}
      className="group block w-fit rounded-200 border-2 border-text bg-white data-[checked]:bg-text"
    >
      <Check className="size-5 text-white opacity-0 group-data-[checked]:opacity-100" />
    </RadioHeadless>
  );
}

export default Radio;
