import { cva, VariantProps } from "class-variance-authority";

export const textStyles = cva("", {
  variants: {
    type: {
      display: "font-semibold capitalize text-5xl md:text-[3.78rem]",
      "heading-sm": "text-base font-semibold capitalize",
      "body-1": "text-sm md:text-base",
      button: "text-base font-medium",
    },
  },
});

// declaring the type for the props, and adding the props of the cva styles
export interface TextProps extends VariantProps<typeof textStyles> {
  as: keyof JSX.IntrinsicElements;
  children?: string;
}

const Text = ({ as: Tag, children, type, ...delegate }: TextProps) => {
  return (
    <Tag {...delegate} className={textStyles({ type })}>
      {children}
    </Tag>
  );
};

export default Text;
