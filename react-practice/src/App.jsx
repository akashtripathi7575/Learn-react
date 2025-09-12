import "./App.css";
import { Person } from "./Person";
// * means all things in a particular library

function App() {
  
  return (
    <div className="App">
      <Person 
      name = "akash tripathi"
      email = "akash@gmail.com"
      age = {21}
      />
    </div>
  );
}
export default App;
