import Text from "./typography/Text";

function Label({ children, ...delegation }: { children: string }) {
  return (
    <Text as="label" type="body-1" {...delegation}>
      {children}
    </Text>
  );
}

export default Label;
