import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function NavBar({onSearch, onChange,random,logout}){
    return(
        <div className={styles.nvContainer}>
            <SearchBar onSearch={onSearch} onChange={onChange} />
            <button className={styles.random} onClick={random} >RANDOM CHAR</button>
            <div className={styles.navLinks}>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/home">Home</Link>
            <Link className={styles.link} to="/favs" >Favs</Link>
            <p className={styles.link} onCLick={logout}>Logout</p>
            </div>
        </div>
    );
}