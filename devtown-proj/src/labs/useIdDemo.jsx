import { useId } from "react";

export default function UseIdDemo() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} />
    </>
  );
}
