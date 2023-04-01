import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Filmler from "./Filmler.js";

const ContainerKarakterler = styled.div`
  width: 40vw;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 5px;
  font-family: Georgia, serif;
  font-size: 1.2em;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  margin: auto;
  padding: 10px;
  color: #333;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const KarakterBilgileri = styled.div`
  padding: 10px;
  color: #333;
  background-color: #f2f2f2;
`;

export default function Karakter(props) {
  const [karakterler, setKarakterler] = useState();
  const [open, setOpen] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response.data);
        setKarakterler(response.data);
      })
      .catch((error) => {
        console.log("Error!" + error);
      });
  }, []);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <ContainerKarakterler>
      {karakterler ? (
        karakterler.map((karakter) => (
          <KarakterBilgileri>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">{karakter.name}</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>height : {karakter.height}</p>
                  <p>mass : {karakter.mass}</p>
                  <p>hair_color : {karakter.hair_color}</p>
                  <p>skin_color :{karakter.skin_color}</p>
                  <p>eye_color :{karakter.eye_color}</p>
                  <p>birth_year :{karakter.birth_year}</p>
                  <p>gender :{karakter.gender}</p>
                  <p>homeworld :{karakter.homeworld}</p>
                  <Filmler filmler={karakter.films} />
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </KarakterBilgileri>
        ))
      ) : (
        <h3>Yükleniyor...</h3>
      )}
    </ContainerKarakterler>
  );
}
