import blob from '../../assets/blob.svg'
import styles from './style.module.css'

function Hero() {
    const hero = {
        subtitle: "Cloneables for WEBFLOW",
        title: "Hero Sections webflow Cloneable template",
        description: "Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email below."
    }
    return (
        <section className={styles.hero}>
            <img src={blob}  
                className={styles.hero__bg}  
                alt="Blob background" />
            <div className="container">
                <div className={styles.hero__content}>
                    <h5 className={`${styles.hero__subtitle} uppercase`}>{hero.subtitle}</h5>
                    <h1 className={`${styles.hero__title} capitalize`}>{hero.title}</h1>
                    <p className={styles.hero__description}>{hero.description}</p>
                </div>
            </div>
        </section>
    )
}
export default Hero