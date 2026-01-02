import { useState } from "react";
import usePrevious from "../../hooks/usePrevious";

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p>Now: {count} | Before: {prev}</p>
    </>
  );
}
