import { cva, VariantProps } from "class-variance-authority";
import Text from "./typography/Text";

const buttonStyles = cva("rounded-400 inline-block px-3 py-2 cursor-pointer", {
  variants: {
    intent: {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary:
        "bg-secondary text-text border-[#C9C9C9] hover:bg-secondary/90",
    },
    isFull: {
      true: "w-full",
    },
  },
});

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: string;
}

function Button({ children, intent, isFull }: ButtonProps) {
  return (
    <div className={buttonStyles({ intent, isFull })}>
      <Text as="p" type="button">
        {children}
      </Text>
    </div>
  );
}

export default Button;
