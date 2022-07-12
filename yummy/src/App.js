import React from "react";
//components
import Pages from "./pages/Pages";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <h1 className="logo">Yummy</h1>
      <Category />
      <Pages />
    </div>
  );
}

export default App;