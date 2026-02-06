import Card from "./card";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 }
];

function App() {
  return (
    <>
      <Card title="Products">
        <ul>
          {products.map(p => (
            <li key={p.id}>
              {p.name} — ${p.price}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

export default App;


