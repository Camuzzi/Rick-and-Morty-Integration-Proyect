import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   const {character, onClose} = props;
   return (
      <div className={styles.divCard}>
         <button className={styles.Boton} onClick={() => onClose(character.id)}>X</button>
         <Link to={`/detail/${character.id}`}>
            <h2 className={styles.Nombre}>{character.name}</h2>    
         </Link>
         <h2 className={styles.Especie}>{character.species}</h2>
         <h2 className={styles.Genero}>{character.gender}</h2>
         <img  className={styles.Imagen} src={character.image} alt={character.name} />
      </div>
   );
}
