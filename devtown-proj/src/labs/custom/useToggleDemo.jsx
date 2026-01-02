import useToggle from "../../hooks/useToggle";

export default function UseToggleDemo() {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}
