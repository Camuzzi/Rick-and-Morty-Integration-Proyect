import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";

export default function Detail() {

    const {detailId} = useParams();

    const [character,setCharacter] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              if (char.name) {
                setCharacter(char);
              } else {
                window.alert("No hay personajes con ese ID");
              }
            })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
        {character.name && <p><b>Nombre:</b>{character.name}</p>}
        {character.status && <p><b>Estado:</b>{character.status}</p>}
        {character.specie && <p><b>Especie:</b>{character.specie}</p>}
        {character.gender && <p><b>Género:</b>{character.gender}</p>}
        {character.origin && <p><b>Origen:</b>{character.origin}</p>}
         <img   src={character.image} alt={character.name} />
         <Link to="/home">
            <button>VOLVER</button>
         </Link>
        </div>
    );
}