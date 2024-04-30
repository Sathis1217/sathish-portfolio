import React, { useState } from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';


 const Navbar = () => {
    const [menuopen, setMenuopen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menubtn}
                    src={menuopen ? getImageUrl("nav/closeicon.png") : getImageUrl("nav/menu.png")}
                    alt="menu-button"
                    onClick={() => setMenuopen(!menuopen)}
                />
                <ul className={`${styles.menuitems} ${menuopen && styles.menuopen}`}
                    onClick={()=>setMenuopen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;