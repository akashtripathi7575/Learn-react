import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

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
      <input
        placeholder="enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {predictedAge?.name} </h1>
      <h1>Predicted Age: {predictedAge?.age} </h1>
      <h1>Count: {predictedAge?.count} </h1>
    </div>
  );
}
// ?. only try to access the name of this object if this object is not null
export default App;
