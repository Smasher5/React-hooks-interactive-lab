export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h1>React Hooks Interactive Lab</h1>
      <input
        placeholder="Search hooks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </header>
  );
}