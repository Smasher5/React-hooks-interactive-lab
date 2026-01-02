import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const expensive = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1e6; i++) total += i;
    return total + count;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Recalculate</button>
      <p>{expensive}</p>
    </>
  );
}
