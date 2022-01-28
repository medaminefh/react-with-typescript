
type ButtonProps = {
    handleClick : () => void
}

function button(props:ButtonProps) {
  return <button onClick={props.handleClick}>Click Me</button>;
}

export default button;
