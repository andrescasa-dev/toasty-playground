import { Switch as SwitchHeadless } from "@headlessui/react";

import { useState } from "react";

function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchHeadless
      checked={enabled}
      onChange={setEnabled}
      className="rounded-full group inline-flex h-6 w-11 items-center bg-gray-200 transition data-[checked]:bg-blue-600"
    >
      <span className="rounded-full size-4 translate-x-1 bg-white transition group-data-[checked]:translate-x-6" />
    </SwitchHeadless>
  );
}

export default Switch;
