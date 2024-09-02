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
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { cleanToastStack, pushToast, setStackConfig } = useToast();

  const [msg, setMsg] = useState("");
  const [isClickToClose, setIsClickToClose] = useState(
    defaultConfig.isClickToClose,
  );
  const [isAutoClose, setIsAutoClose] = useState(defaultConfig.isAutoClose);
  const [closeDelay, setCloseDelay] = useState(defaultConfig.closeDelay);
  const [position, setPosition] = useState(defaultConfig.position);
  const [intent, setIntent] = useState("info");

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
      //@ts-expect-error ts(2322) This only happens in this playground context. adding validation could be great but unnecessary for this case
      intent: intent,
    };

    pushToast(newToast);
  };

  return (
    <main className="flex min-h-screen min-h-svh flex-col items-center justify-center gap-6 py-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 md:gap-y-9"
      >
        <section className="flex flex-col items-center gap-4">
          <Text as="h1" type="display">
            Toasty
          </Text>
          <div className="flex flex-col gap-2">
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
            <Button
              type="button"
              isFull={true}
              onClick={() =>
                pushToast({
                  intent: "info",
                  message: "This toast overwrites general config",
                  isClickToClose: true,
                  isAutoClose: false,
                })
              }
              intent="secondary"
            >
              Render Particular Toast
            </Button>
          </div>
        </section>

        <section className="grid gap-4 px-5 md:max-w-5xl md:grid-cols-2 md:self-center">
          <div className="text-gray-800 md:col-span-2">
            <Text as="p" type={"body-1"}>
              Play with the general configuration of Toasty, ensuring
              consistency. You can overwrite it with a particular toast
            </Text>
          </div>
          <ConfigSection title="Variants">
            <RadioGroup
              options={["info", "warning", "error", "notification"]}
              className="grid grid-cols-3 gap-3"
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
              className="grid grid-cols-3 gap-3"
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
            <div className="flex flex-col gap-2">
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
                  className="w-[4.3rem]"
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
        </section>
      </form>
      <div className="flex flex-col items-center gap-2">
        <a
          className="flex cursor-pointer items-center text-gray-600 underline-offset-4 hover:underline"
          href="https://www.npmjs.com/package/toasty-casa"
          target="_blank"
        >
          Documentation <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}
