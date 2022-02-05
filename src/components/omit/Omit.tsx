type ButtonProps = {
  value: string;
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function Test({ value, children }: ButtonProps) {
  return <button className={`hi ${value}`}>{children}</button>;
}

export default Test;
