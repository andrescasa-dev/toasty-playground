import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("text-base", {
  variants: {
    type: {
      "heading-sm": "font-semibold capitalize",
      "body-1": "text-sm md:text-base",
      button: "font-medium",
    },
  },
});

// declaring the type for the props, and adding the props of the cva styles
export interface TextProps extends VariantProps<typeof textStyles> {
  as: keyof JSX.IntrinsicElements;
  children: string;
}

const Text = ({ as: Tag, children, type, ...delegate }: TextProps) => {
  return (
    <Tag {...delegate} className={textStyles({ type })}>
      {children}
    </Tag>
  );
};

export default Text;
