"use client";
import { Switch as SwitchHeadless } from "@headlessui/react";

import { useState } from "react";

function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchHeadless
      checked={enabled}
      onChange={setEnabled}
      className="rounded-full group inline-flex h-5 w-9 items-center border border-primary bg-white transition data-[checked]:bg-primary"
    >
      <span className="rounded-full size-3 translate-x-1 bg-primary transition group-data-[checked]:translate-x-5 group-data-[checked]:bg-white" />
    </SwitchHeadless>
  );
}

export default Switch;
