import Label from "./Label";
import Switch from "./Switch";

function SwitchLabeled({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1">
      <Switch />
      <Label>{children}</Label>
    </div>
  );
}

export default SwitchLabeled;
