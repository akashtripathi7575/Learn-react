import Axios from "axios";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Provider from "./Provider";
import Button from "./Button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: True,
      },
    },
  });
  return (
    <div className="App">
      <QueryClinetProvider></QueryClinetProvider>
    </div>
  );
}
// ?. only try to access the name of this object if this object is not null
export default App;

// link is like the anchor tag of jsx


// in other jsx like Home.jsx then import here as { Home } from "./Home"; 
/*
react query code 
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  conost {data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
      return Axios.get("https://catfact.ninja/facts").then((res) => {res.data});
    });

    if(isLoading) {
        return <h1> Loading... </h1>;
    }

    return (
    <h1>
    This is the home page <p>{catData?.fact}(this tells that not shows the value till the value is not null)</p>
    <button onClick={refetch}>Update Data</button>
    </h1>
    );
// there is no state required here in react query which is helpul bcz with states we have to remove the strict mode that shows the value 2 times
  return <h1> This is the home page </h1>;

  //QueryClient have 2 feature queries (CRUD) and mutation(CUD) 
 */
