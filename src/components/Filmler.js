import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Filmler(props) {
  const { filmler } = props;
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="ContainerFilmler">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Filmler</AccordionHeader>
          <AccordionBody accordionId="1">
            {filmler &&
              filmler.map((film) => (
                <div className="filmler">
                  {" "}
                  <p>{filmler}</p>{" "}
                </div>
              ))}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
