export default function Sidebar({ hookGroups, onSelect }) {
  return (
    <aside className="sidebar">
      {hookGroups.map(group => (
        <div key={group.day}>
          <h3>{group.day}</h3>
          {group.hooks.map(hook => (
            <button
              key={hook.name}
              onClick={() => onSelect(hook)}
            >
              {hook.name}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}