"use client";

import Button from "@/components/Button";
import ConfigSection from "@/components/ConfigSection";
import Input from "@/components/Input";
import LabelWrapper from "@/components/LabelWrapper";
import RadioGroup from "@/components/RadioGroup";
import Switch from "@/components/Switch";
import { PersonalizedToastConfig } from "@/components/Toast";
import { defaultConfig } from "@/components/ToastProvider";
import Text from "@/components/typography/Text";
import useToast from "@/hooks/useToast";
import { useEffect, useState } from "react";

export default function Home() {
  const { cleanToastStack, pushToast, setStackConfig } = useToast();

  const [msg, setMsg] = useState("some message");
  const [isClickToClose, setIsClickToClose] = useState(
    defaultConfig.isClickToClose,
  );
  const [isAutoClose, setIsAutoClose] = useState(defaultConfig.isAutoClose);
  const [closeDelay, setCloseDelay] = useState(defaultConfig.closeDelay);
  const [position, setPosition] = useState(defaultConfig.position);
  const [intent, setIntent] = useState("notification");

  useEffect(() => {
    setStackConfig({
      isClickToClose: isClickToClose,
      position,
      isAutoClose,
      closeDelay,
    });
  }, [isClickToClose, position, setStackConfig, isAutoClose, closeDelay]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newToast: PersonalizedToastConfig = {
      message: msg,
      //@ts-expect-error Type validation here is not necessary, because this error only occurs in this playground context, the final user won't use Toasty like in this sandbox
      intent: intent,
    };
    setMsg("");

    pushToast(newToast);
  };

  return (
    <main className="flex h-screen flex-col items-center gap-6">
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
              value={intent}
              onChange={setIntent}
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
                  placeholder={String(defaultConfig.closeDelay)}
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
      </form>
      <div className="flex gap-2">
        <LabelWrapper text="Dark Mode" className="self-center">
          <Switch />
        </LabelWrapper>
        <Button
          onClick={() =>
            pushToast({
              intent: "info",
              message: "This toast overwrites general config",
              isClickToClose: true,
              isAutoClose: false,
            })
          }
          intent="primary"
        >
          Personalized Toast
        </Button>
      </div>
    </main>
  );
}
