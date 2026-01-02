import { useRef, useEffect, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();
  const prev = useRef("");
  const [value, setValue] = useState("");

  useEffect(() => {
    prev.current = value;
  }, [value]);

  return (
    <>
      <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <p>Previous: {prev.current}</p>
    </>
  );
}
