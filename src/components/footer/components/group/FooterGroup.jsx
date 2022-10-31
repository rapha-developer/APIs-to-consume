
import FooterList from '../list/FooterList'
import styles from './style.module.css'
function FooterGroup(props) {
    const footerGroup = {
        title: props?.title || 'Not found title in props',
        target: props?.target || false,
        items: props?.items || []
    }
    return (
        <div className={styles.footer__group}>
            <h5 className={styles.group__title}>{footerGroup.title}</h5>
            <FooterList 
                target={footerGroup.target}
                items={footerGroup.items} 
            />
        </div>
    )
}
export default FooterGroup