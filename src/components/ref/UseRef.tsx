import { useRef, useEffect } from "react";

function UseRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}

export default UseRef;
