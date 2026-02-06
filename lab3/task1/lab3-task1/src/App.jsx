import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        Toggle Text
      </button>

      {visible && <p>This text is visible</p>}
    </>
  );
}

export default App;

