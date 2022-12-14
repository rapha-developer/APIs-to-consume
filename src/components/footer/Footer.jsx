
import { createItemsToBuildFooter, createAreaHero } from '../../data/constants'
import myLogo from '../../assets/MyLogo-api.svg'
import styles from './style.module.css'
import FooterGroup from './components/group/FooterGroup';

function Footer(props) {
    const footerItems = createItemsToBuildFooter
    const footerMenus = footerItems.map((footerItem, key) => {
        return (
            <FooterGroup 
                key={key}
                target={footerItem.target}
                title={footerItem.title}
                items={footerItem.items}
            />
        );
    });
    const footer = {
        hero: props?.hero || createAreaHero.description,
        alt: 'website logo'
    }   
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__line}`}>
                <div className={styles.__row}>
                    <div className={styles.__firstColumn}>
                        <img src={myLogo}
                            className={styles.logo} 
                            alt={footer.alt} />
                        <p className={styles.footer__hero}>{footer.hero}</p>
                    </div>
                    <div className={styles.__footerColumns}>
                        {footerMenus}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer