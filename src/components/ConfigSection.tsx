import React, { ReactElement } from "react";
import Text from "./typography/Text";

function ConfigSection({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  return (
    <section className="flex flex-col gap-4 rounded-400 border border-border p-4">
      <Text as="h2" type="heading-sm">
        {title}
      </Text>
      {children}
    </section>
  );
}

export default ConfigSection;
