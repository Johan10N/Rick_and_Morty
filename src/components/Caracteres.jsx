
import { useState } from "react";
import MydModalWithGrid from "./Model";
import Button from 'react-bootstrap/Button';

function Caracteres({ character }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
    <div>
      <br></br>
   
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Detalle
      </Button>
      <MydModalWithGrid  show={modalShow} onHide={() => setModalShow(false)} 
      Episodios={character.episode.length} especie={character.species} vida={character.status}
      nombre={character.name}/>       
   
    </div>
    </div>
  );
}

export default Caracteres;
