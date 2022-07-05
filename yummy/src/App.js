import React from "react";
//components
import Popular from "./components/Popular";
import Vegan from "./components/Vegan";

function App() {
  return (
    <div className="App">
      <h1>Yummy</h1>
      <Popular />
      <Vegan />
    </div>
  );
}

export default App;