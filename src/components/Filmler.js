import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function Filmler() {
  const [filmler, setFilmler] = useState([]);
  const [open, setOpen] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        setFilmler(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, []);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  if (!filmler) {
    return <h3>Yükleniyor ...</h3>;
  }
  return (
    <div className="Container">
      {filmler.map((film) => (
        <div className="filmBilgileri" key={film.episode_id}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">{film.title}</AccordionHeader>
              <AccordionBody accordionId="2">
                <p>Episode: {film.episode_id}.</p>
                <p>Opening Crawl:{film.opening_crawl}</p>
                <p>Director:{film.director}</p>
                <p>Producer:{film.producer}</p>
                <p>Release Date:{film.release_date}</p>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
