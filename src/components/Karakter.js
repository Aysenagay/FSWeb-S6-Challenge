import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const Karakter = () => {
  const [karakterler, setKarakterler] = useState([]);
  const [open, setOpen] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setKarakterler(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, []);

  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  if (!karakterler) {
    return <h3>Yükleniyor ...</h3>;
  }
  return (
    <div>
      {karakterler.map((karakter) => (
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">{karakter.name}</AccordionHeader>
            <AccordionBody accordionId="2">
              <p>Cinsiyet: {karakter.gender}</p>
              <p>Doğum tarihi: {karakter.birth_year}</p>
              <p>Boy: {karakter.height}</p>
              <p>Kilo: {karakter.mass}</p>
              <p>Saç rengi: {karakter.hair_color}</p>
              <p>Göz rengi: {karakter.eye_color}</p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Karakter;
