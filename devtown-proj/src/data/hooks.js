import UseStateDemo from "../labs/useStateDemo";
import UseEffectDemo from "../labs/useEffectDemo";
import UseRefDemo from "../labs/useRefDemo";
import UseIdDemo from "../labs/useIdDemo";
import UseMemoDemo from "../labs/useMemoDemo";
import UseCallbackDemo from "../labs/useCallbackDemo";
import UseContextDemo from "../labs/useContextDemo";
import UseReducerDemo from "../labs/useReducerDemo";
import UseToggleDemo from "../labs/custom/useToggleDemo";
import UseInputDemo from "../labs/custom/useInputDemo";
import UseDebounceDemo from "../labs/custom/useDebounceDemo";
import UsePreviousDemo from "../labs/custom/usePreviousDemo";

export default [
  {
    day: "Day 1 – Core",
    hooks: [
      { name: "useState", component: UseStateDemo, description: "Manage component state." },
      { name: "useEffect", component: UseEffectDemo, description: "Handle side effects." },
      { name: "useRef", component: UseRefDemo, description: "Persist values without re-render." },
      { name: "useId", component: UseIdDemo, description: "Generate accessible IDs." }
    ]
  },
  {
    day: "Day 2 – Performance",
    hooks: [
      { name: "useMemo", component: UseMemoDemo, description: "Cache expensive calculations." },
      { name: "useCallback", component: UseCallbackDemo, description: "Memoize functions." },
      { name: "useContext", component: UseContextDemo, description: "Avoid prop drilling." },
      { name: "useReducer", component: UseReducerDemo, description: "Complex state logic." }
    ]
  },
  {
    day: "Day 3 – Custom Hooks",
    hooks: [
      { name: "useToggle", component: UseToggleDemo, description: "Toggle boolean state." },
      { name: "useInput", component: UseInputDemo, description: "Control input state." },
      { name: "useDebounce", component: UseDebounceDemo, description: "Delay value updates." },
      { name: "usePrevious", component: UsePreviousDemo, description: "Track previous value." }
    ]
  }
];