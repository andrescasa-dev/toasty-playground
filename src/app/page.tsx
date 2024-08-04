"use client";

import Button from "@/components/Button";
import ConfigSection from "@/components/ConfigSection";
import Input from "@/components/Input";
import LabelWrapper from "@/components/LabelWrapper";
import RadioGroup from "@/components/RadioGroup";
import Switch from "@/components/Switch";
import { ToastData } from "@/components/Toast";
import ToastStack from "@/components/ToastStack";
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

    const toastOpts: Record<string, string | Boolean> = {};
    for (const [key, value] of entries) {
      if (value === "true") {
        toastOpts[key] = Boolean(value);
      } else {
        toastOpts[key] = value as string;
      }
    }

    const newToast = toastOpts as ToastData;
    console.log(newToast);
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
            <RadioGroup
              options={["info", "warning", "error"]}
              className="grid grid-cols-3 gap-2 gap-y-4"
            />
          </ConfigSection>

          <ConfigSection title="Position">
            <RadioGroup
              options={[
                "top-left",
                "top",
                "top-right",
                "bottom-left",
                "bottom",
                "bottom-right",
              ]}
              className="grid grid-cols-3 gap-2 gap-y-4"
            />
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
                <Switch name="autoClose" />
              </LabelWrapper>
              <div className="flex items-center gap-1">
                <Text as="p" type="body-1">
                  Auto-close Delay:
                </Text>
                <Input
                  name="autoCloseDelay"
                  placeholder="500"
                  className="w-14"
                />
                <Text as="p" type="body-1">
                  ms
                </Text>
              </div>

              <LabelWrapper text="Click to close">
                <Switch name="clickToClose" />
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
