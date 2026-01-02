import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>{text}</p>
    </>
  );
}
