
import FooterItem from '../item/FooterItem'
import styles from './style.module.css'
function FooterList(props) {
    const footerList = {
        target: props.target,
        items: props?.items || []
    }

    const footer__items = footerList.items.map((footerItem, key) => {
        return (
            <FooterItem 
                key={key}
                hasTarget={footerList.target}
                url={footerItem.url}
                label={footerItem.label}
            />
        )
    });
    return (
        <ul className={styles.footer__list}>
            {footer__items}
        </ul>
    )
}
export default FooterList