import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";

export default function Detail() {

    const {detailId} = useParams();

    const [character,setCharacter] = useState({
      name: "",
      status: "",
      specie: "",
      gender: "",
      origin: "",
      image: "",
    });

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name: char.name,
                status: char.status,
                specie: char.specie,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
              });
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
        {character.name && <p><b>Estado:</b>{character.status}</p>}
        {character.name && <p><b>Especie:</b>{character.specie}</p>}
        {character.name && <p><b>Género:</b>{character.gender}</p>}
        {character.name && <p><b>Origen:</b>{character.origin}</p>}
         <img   src={character.image} alt={character.name} />
         <Link to="/home">
            <button>VOLVER</button>
         </Link>
        </div>
    );
}