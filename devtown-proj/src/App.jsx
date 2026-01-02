import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import hookList from "./data/hooks";

export default function App() {
  const [selectedHook, setSelectedHook] = useState(hookList[0]);
  const [search, setSearch] = useState("");

  const filteredHooks = hookList.map(day => ({
    ...day,
    hooks: day.hooks.filter(h =>
      h.name.toLowerCase().includes(search.toLowerCase())
    )
  }));

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <div className="layout">
        <Sidebar
          hookGroups={filteredHooks}
          onSelect={setSelectedHook}
        />
        <MainPanel hook={selectedHook} />
      </div>
    </div>
  );
}