import axios from "axios";
import { response } from "msw";
import React from "react";
import { useState, useEffect } from "react";
import Karakter from "./components/Karakter.js";

const App = () => {
  const [karakterler, setKarakterler] = useState();
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=")
      .then((response) => {
        setKarakterler(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, []);

  return (
    <div className="App">
      <Karakter karakterler={karakterler} />
    </div>
  );
};
export default App;
