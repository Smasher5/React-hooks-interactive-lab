import { useState } from "react";
export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(v => !v)];
}