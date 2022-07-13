import React from "react";
import { BrowserRouter } from "react-router-dom";
//components
import Pages from "./pages/Pages";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <h1 className="logo">Yummy</h1>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;