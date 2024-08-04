import Checkboxes from "./Checkbox";
import Label from "./Label";

function CheckboxLabeled({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1">
      <Checkboxes />
      <Label>{children}</Label>
    </div>
  );
}

export default CheckboxLabeled;
