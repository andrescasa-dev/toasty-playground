import Checkbox from "@/components/Checkbox";
import Switch from "@/components/Switch";
import LabelWrapper from "@/components/LabelWrapper";

export default function Home() {
  return (
    <main>
      <LabelWrapper text="Hola">
        <Switch />
      </LabelWrapper>
      <LabelWrapper text="Hola">
        <Checkbox />
      </LabelWrapper>
    </main>
  );
}
