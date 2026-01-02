import useInput from "../../hooks/useInput";

export default function UseInputDemo() {
  const input = useInput();
  return <input {...input} placeholder="Type..." />;
}
