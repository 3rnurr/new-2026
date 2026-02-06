import { useState } from "react";
import "./App.css";

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>

      <p className={isHighlighted ? "highlight" : ""}>
        This is a paragraph
      </p>
    </>
  );
}

export default App;
