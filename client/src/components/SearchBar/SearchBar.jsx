import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch,onChange}) {
   return (
      <div className={styles.divContainer}>
         <input className={styles.searchInput} placeholder="Buscar por id..." type='search' onChange={onChange} />
      <button className={styles.searchButton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
