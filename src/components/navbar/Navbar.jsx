import { useState } from 'react';
import logo from '../../assets/logo-min.svg'
import burgerIcon from'../../assets/burger-menu.svg'
import { useLocation } from 'react-router-dom'

import { createItemsToBuildNavbar } from '../../data/constants'
import styles from './style.module.css'
function Navbar() {
    const items = createItemsToBuildNavbar

    const navbarItems = items.map((navbarItem, key) => {
        const location = useLocation()
        const isActive = (navbarItem.url === location.pathname) ? true : false
        return (
            <li className={styles.navbar__item} key={key} >
                <a href={navbarItem.url} 
                    data-active={isActive}
                    className={`${styles.navbar__link} capitalize`} >{navbarItem.text}</a>
            </li>
        )
    });
    const [visibility, setVisibility] = useState(false)
    function changeVisibility() {
        setVisibility((oldVisibility) => !oldVisibility)
    }
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbar__row} container`}>
                <div className={styles.navbar__head}
                    data-visible={visibility}>
                    <img src={logo} 
                        alt="Logo of website" 
                        className={styles.navbar__logo} />
                    <button className={styles.navbar__menu}
                            aria-controls='navbar__body' 
                            onClick={changeVisibility}>
                        <img src={burgerIcon} 
                            alt="Burger Icon Clickable menu" />
                    </button>
                </div>
                <div className={styles.navbar__body} 
                    id={styles.navbar__body} 
                    data-visible={visibility}>
                    <ul className={styles.navbar__list}>
                        {navbarItems}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar