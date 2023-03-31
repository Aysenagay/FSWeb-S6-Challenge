import React from "react";
import Karakter from "./components/Karakter.js";
import Filmler from "./components/Filmler.js";

const App = () => {
  return (
    <div className="App">
      <h1>KARAKTERLER</h1>
      <Karakter />
      <h1>FİLMLER</h1>
      <Filmler />
    </div>
  );
};

export default App;
