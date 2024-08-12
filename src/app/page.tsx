"use client";

import Button from "@/components/Button";
import ConfigSection from "@/components/ConfigSection";
import Input from "@/components/Input";
import LabelWrapper from "@/components/LabelWrapper";
import RadioGroup from "@/components/RadioGroup";
import Switch from "@/components/Switch";
import { DEFAULT_PROGRESSBAR_DURATION, ToastData } from "@/components/Toast";
import { Position } from "@/components/ToastStack";
import Text from "@/components/typography/Text";
import useToast from "@/hooks/useToast";
import { useEffect, useState } from "react";

export default function Home() {
  const { cleanToastStack, pushToast, setStackConfig } = useToast();

  const [msg, setMsg] = useState("some message");
  const [isClickToClose, setIsClickToClose] = useState(false);
  const [isAutoClose, setIsAutoClose] = useState(false);
  const [closeDelay, setCloseDelay] = useState(DEFAULT_PROGRESSBAR_DURATION);
  const [position, setPosition] = useState<Position>("bottom-right");

  useEffect(() => {
    setStackConfig({ isClickToClose, position, isAutoClose, closeDelay });
  }, [isClickToClose, position, setStackConfig, isAutoClose, closeDelay]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = formData.entries();

    const toastOpts: Record<string, string | Boolean> = {};
    for (const [key, value] of entries) {
      if (key !== "position" && key !== "clickToClose") {
        if (value === "true" || value === "false") {
          toastOpts[key] = Boolean(value);
        } else {
          if (value) toastOpts[key] = value as string; //if value is falsy do not include in the final obj, otherwise the default arg of component won't work, '' is falsy but not nullish
        }
      }
    }

    const newToast = toastOpts as ToastData;
    pushToast(toastOpts);
  };

  return (
    <main className="flex h-screen items-center">
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
              options={["info", "warning", "error", "notification"]}
              className="grid grid-cols-3 gap-2 gap-y-4"
              name="intent"
            />
          </ConfigSection>
          <ConfigSection title="Position">
            <RadioGroup
              name="position"
              value={position}
              onChange={setPosition}
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
              required
              name="message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Short message"
            />
          </ConfigSection>
          <ConfigSection title="Close Options">
            <div className="flex flex-col gap-4">
              <LabelWrapper text="Auto-close">
                <Switch
                  name="autoClose"
                  checked={isAutoClose}
                  onChange={setIsAutoClose}
                />
              </LabelWrapper>
              <div className="flex items-center gap-1">
                <Text as="p" type="body-1">
                  Auto-close Delay:
                </Text>
                <Input
                  onChange={(e) => setCloseDelay(Number(e.target.value))}
                  type="number"
                  name="closeDelay"
                  placeholder="2000"
                  className="w-16"
                />
                <Text as="p" type="body-1">
                  ms
                </Text>
              </div>

              <LabelWrapper text="Click to close">
                <Switch
                  checked={isClickToClose}
                  onChange={setIsClickToClose}
                  name="clickToClose"
                />
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
