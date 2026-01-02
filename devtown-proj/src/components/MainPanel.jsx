export default function MainPanel({ hook }) {
  if (!hook) {
    return (
      <main className="main">
        <p>Select a hook from the sidebar 👈</p>
      </main>
    );
  }

  if (!hook.component) {
    return (
      <main className="main">
        <p>Error: Hook component not found</p>
      </main>
    );
  }

  const Demo = hook.component;

  return (
    <main className="main">
      <h2>{hook.name}</h2>
      <p>{hook.description}</p>
      <Demo />
    </main>
  );
}