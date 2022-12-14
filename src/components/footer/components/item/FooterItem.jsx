
import { useLocation } from 'react-router-dom'
import styles from './style.module.css'
function FooterItem(props) {
    const location = useLocation()
    const footerItem = {
        url: props?.url || '',
        target: (props.hasTarget && props.hasTarget === true) ? '_blank' : '',
        label: props?.label || 'Not found label in props'
    }
    const isActive = (location.pathname === footerItem.url) ? true : false

    return (
        <li className={styles.footer__item}>
            <a href={footerItem.url} 
                target={footerItem.target}
                data-active={isActive}
                className={styles.footer__link}>{footerItem.label}</a>
        </li>
    )
}
export default FooterItem