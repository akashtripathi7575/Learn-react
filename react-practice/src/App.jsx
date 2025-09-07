import Axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import {Navbar} from './Navbar';

function App() {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>
    </Router>

  </div>;
}
// ?. only try to access the name of this object if this object is not null
export default App;

// link is like the anchor tag of jsx
