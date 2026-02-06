const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function App() {
  return (
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>

      <main>
        <p>This layout uses React Fragments.</p>

        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <p>Total: {items.length} items</p>
      </main>

      <footer>
        <p>© 2026</p>
      </footer>
    </>
  );
}

export default App;

