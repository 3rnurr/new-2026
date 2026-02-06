import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <h1>Check the console</h1>;
}

export default App;
