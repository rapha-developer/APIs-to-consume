import { useState } from 'react'
import logo from '../../assets/logo.svg'
import burger from '../../assets/burger-menu.svg'
import styles from './style.module.css'
import { items } from '../../data/constants'

function Navbar() {
    
    const navbar__items = items.map((menuItem, key) => {
        return (
            <li className={styles.navbar__item} key={key}>
                <a href={menuItem.url} 
                    className={styles.navbar__link}>{menuItem.name}</a>
            </li>
        )
    });
    const [visibility, setVisibility] = useState(false);
    function changeVisibility() {
        setVisibility((oldVisibility) => !oldVisibility)
    }
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navbar__row}>
                    <div className={`col ${styles.navbar__header}`} 
                        data-visible={visibility}
                        onClick={changeVisibility}>
                        <img src={logo} 
                            className={styles.navbar__logo}
                            alt="Logo example" />
                        <div className={styles.navbar__menu}>
                            <button className={styles.navbar__bar} 
                                    aria-controls='navbar__content'>
                                <img src={burger} 
                                    className={styles.navbar__iconBar}
                                    alt="Icon Bar to open or close items" />
                            </button>
                        </div>
                    </div>
                    <div className={`col ${styles.navbar__content}`}
                        id={styles.navbar__content} 
                        data-visible={visibility}>
                        <ul className={styles.navbar__list}>
                            {navbar__items}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar