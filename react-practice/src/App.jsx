import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <button
        onClick={() => {
          fetchCatFact();
        }}
      >
        Generate Cat Fact
      </button>
      <p>{catFact || "loading..."}</p>
    </div>
  );
}

export default App;
