// import styles from "./Card.module.css";
// import { Link } from "react-router-dom";

// export default function Card(props) {
//    const {character, onClose} = props;
//    return (
//       <div className={styles.divCard}>
//          <button className={styles.Boton} onClick={() => onClose(character.id)}>X</button>
//          <Link to={`/detail/${character.id}`}>
//             <h2 className={styles.Nombre}>{character.name}</h2>    
//          </Link>
//          <h2 className={styles.Especie}>{character.species}</h2>
//          <h2 className={styles.Genero}>{character.gender}</h2>
//          <img  className={styles.Imagen} src={character.image} alt={character.name} />
//       </div>
//    );
// }

import styles from "./Card.module.css";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {addFavorite, removeFavorite} from "../../redux/actions";

function Card(props) {
   const navigate = useNavigate();
   const {character, onClose, addFavorite, removeFavorite, favorites} = props;
   const [closeBtn, setCloseBtn] = useState(true);
   const [fav, setFav] = useState(false);

   useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, []);
  
    useEffect(() => {
      favorites.forEach((fav) => {
        if (fav.id === character.id) {
          setFav(true);
        }
      });
    }, [favorites]);
  
    function navigateHandler() {
      navigate(`/detail/${character.id}`);
    }
  
    function favoriteHandler(character) {
      if (!fav) {
        addFavorite(character);
        setFav(true);
      } else {
        removeFavorite(character);
        setFav(false);
      }
    }

   return (
      <div className={styles.divCard}>
         {closeBtn ?(
         <button 
            className={styles.Boton} 
            onClick={() => onClose(character.id)}
            >X</button>
            ): null }
         {fav ? (
          <button onClick={() => favoriteHandler(character.id)}>❤️</button>
        ) : (
          <button onClick={() => favoriteHandler(character)}>🤍</button>
        )}     
         <h2 className={styles.Nombre} onClick={navigateHandler} >{character.name}</h2>    
         <h2 className={styles.Especie}>{character.species}</h2>
         <h2 className={styles.Genero}>{character.gender}</h2>
         <img  className={styles.Imagen} src={character.image} alt={character.name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFavorite: (character) => dispatch(addFavorite(character)),
 
     removeFavorite: (id) => dispatch(removeFavorite(id)),
   };
 };
 
 const mapStateToProps = (state) => {
   return {
     favorites: state.favorites,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);