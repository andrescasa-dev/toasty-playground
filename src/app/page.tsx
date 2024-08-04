"use client";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import ConfigSection from "@/components/ConfigSection";
import Input from "@/components/Input";
import LabelWrapper from "@/components/LabelWrapper";
import Switch from "@/components/Switch";
import { ToastData } from "@/components/Toast";
import ToastStack, { ToastWithId } from "@/components/ToastStack";
import Text from "@/components/typography/Text";
import useToast from "@/hooks/useToast";
import { useState } from "react";

export default function Home() {
  const { cleanToastStack, pushToast, toastList } = useToast();
  const [msg, setMsg] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = formData.entries();

    const toastOpts: Record<string, string> = {};
    for (const [key, value] of entries) {
      toastOpts[key] = value;
    }

    const newToast = toastOpts as ToastData;

    pushToast(toastOpts);
  };

  return (
    <main className="flex h-screen items-center">
      <ToastStack stackToastData={toastList} />
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 md:gap-y-9"
      >
        <div className="flex flex-col items-center gap-4">
          <Text as="h1" type="display">
            Toasty
          </Text>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => cleanToastStack()}
              intent="secondary"
            >
              Clear All
            </Button>
            <Button type="submit" intent="primary">
              Render Toast
            </Button>
          </div>
        </div>

        <div className="grid gap-4 px-5 md:max-w-5xl md:grid-cols-2 md:self-center">
          <ConfigSection title="Variants">
            <div className="grid grid-cols-3 gap-2 gap-y-4">
              <LabelWrapper text="Info">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Warning">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Error">
                <Checkbox />
              </LabelWrapper>
            </div>
          </ConfigSection>

          <ConfigSection title="Position">
            <div className="grid grid-cols-3 gap-2 gap-y-4">
              <LabelWrapper text="Top-left">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Top">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Top-right">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Bottom-left">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Bottom">
                <Checkbox />
              </LabelWrapper>
              <LabelWrapper text="Bottom-right">
                <Checkbox />
              </LabelWrapper>
            </div>
          </ConfigSection>

          <ConfigSection title="Message">
            <Input
              name="message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Short message"
            />
          </ConfigSection>

          <ConfigSection title="Close Options">
            <div className="flex flex-col gap-4">
              <LabelWrapper text="Auto-close">
                <Switch />
              </LabelWrapper>
              <div className="flex items-center gap-1">
                <Text as="p" type="body-1">
                  Auto-close Delay:
                </Text>
                <Input placeholder="500" className="w-14" />
                <Text as="p" type="body-1">
                  ms
                </Text>
              </div>

              <LabelWrapper text="Click to close">
                <Switch />
              </LabelWrapper>
            </div>
          </ConfigSection>
        </div>
        <LabelWrapper text="Dark Mode" className="self-center">
          <Switch />
        </LabelWrapper>
      </form>
    </main>
  );
}
