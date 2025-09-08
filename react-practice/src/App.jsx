import Axios from "axios";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import  Provider  from "./Provider";
import  Button  from "./Button";

function App() {
  return (
    <div className="App">
      <Provider>
        <div>
          <h1>Themed App</h1>
          <Button />
        </div>
      </Provider>
    </div>
  );
}
// ?. only try to access the name of this object if this object is not null
export default App;

// link is like the anchor tag of jsx
