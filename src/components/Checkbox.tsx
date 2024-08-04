"use client";
import { Checkbox as CheckboxHeadless } from "@headlessui/react";
import { Check } from "lucide-react";
import { useState } from "react";

function Checkbox() {
  const [enabled, setEnabled] = useState(false);

  return (
    <CheckboxHeadless
      checked={enabled}
      onChange={setEnabled}
      className="group block w-fit rounded-400 border border-text bg-white data-[checked]:bg-text"
    >
      <Check className="size-5 text-white opacity-0 group-data-[checked]:opacity-100" />
    </CheckboxHeadless>
  );
}

export default Checkbox;
