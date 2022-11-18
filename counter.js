import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <h1>{count}</h1>
      </div>
      <div className="btn">
        <button
          onClick={() => setCount(count + 1)}
          style={{ fontSize: "30px", marginRight: "30px" }}
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ fontSize: "30px" }}
        >
          -
        </button>
      </div>
    </div>
  );
}
