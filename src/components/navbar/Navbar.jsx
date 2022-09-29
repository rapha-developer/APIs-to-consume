import logo from '../../assets/logo-min.svg'
import burgerIcon from'../../assets/burger-menu.svg'

import styles from './style.module.css'
import { useState } from 'react';

function Navbar() {
    const items = [
        {
            text: 'home',
            url: '#'
        },
        {
            text: 'service',
            url: '#'
        },
        {
            text: 'project',
            url: '#'
        },
        {
            text: 'blog',
            url: '#'
        },
        {
            text: 'contact',
            url: '#'
        },
    ];
    const navbarItems = items.map((navbarItem, key) => {
        return (
            <li className={styles.navbar__item} key={key} >
                <a href={navbarItem.url} 
                    className={`${styles.navbar__link} capitalize`} >{navbarItem.text}</a>
            </li>
        )
    });
    const [visibility, setVisibility] = useState(false)
    function changeVisibility() {
        setVisibility((oldVisibility) => !oldVisibility)
        console.log(visibility)
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