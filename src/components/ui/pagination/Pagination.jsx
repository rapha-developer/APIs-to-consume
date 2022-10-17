
import { useEffect, useState } from 'react';
import styles from './style.module.css'
function Pagination(props) {
    const [navigationItems, setNavigationItems] = useState(generateNavigationItems(props.numberOfPages))

    useEffect(() => {
        setNavigationItems(generateNavigationItems(props.numberOfPages))
    }, [props.numberOfPages])
    function generateNavigationItems(numberMax) {
        const firstItem = 1;
        const navigation__items = [] 
        for(let navIterator = firstItem; 
                navIterator <= numberMax; 
                navIterator++) {
            const isFirstActive = (navIterator === firstItem) ? true : false
            
            navigation__items.push({
                text: navIterator,
                isActive: isFirstActive
            });
        }
        return navigation__items
    }
    function handleClick(event) {
        const { name } = event.target
        setNavigationItems(prevNavItems => prevNavItems.map(navItem => {
            return navItem.text === parseInt(name) ?
            {...navItem, isActive: true} :
            {...navItem, isActive: false}
        }));
        props.collectPaginationItem(name)
    }
    const nav__items = navigationItems.map((navItem, key) => {
        return (
            <li className="page__item" key={key}>
                <a 
                    name={navItem.text}
                    onClick={event => handleClick(event)}
                    data-active={navItem.isActive}
                    className={styles.page__link}>
                    {navItem.text}
                </a>
            </li>
        )
    });
    return(
        <nav className={styles.nav__pagination}>
            <ul className={styles.pagination__list}>
                {nav__items}
            </ul>
        </nav>
    )
}
export default Pagination