import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar({onSearch, onChange,random}){
    return(
        <div className={styles.nvContainer}>
            <SearchBar onSearch={onSearch} onChange={onChange} />
            <button className={styles.random} onClick={random} >RANDOM CHAR</button>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
}