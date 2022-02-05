type ButtonProps = {
  handleClick: () => void;
};

type CustomBtnProps = {
  variant: string;
} & React.ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return <button onClick={props.handleClick}>Click Me</button>;
}

export const CustomBtn = ({ variant, children, ...rest }: CustomBtnProps) => {
  return (
    <button className={`btn ${variant}`} {...rest}>
      {children}
    </button>
  );
};
