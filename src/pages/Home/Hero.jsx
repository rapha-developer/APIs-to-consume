import blob from '../../assets/blob.svg'
import styles from './style.module.css'
import { heroData } from '../../data/constants'

function Hero() {
    
    return (
        <section className={styles.hero}>
            <img src={blob}  
                className={styles.hero__bg}  
                alt="Blob background" />
            <div className="container">
                <div className={styles.hero__content}>
                    <h5 className={`${styles.hero__subtitle} uppercase`}>{heroData.subtitle}</h5>
                    <h1 className={`${styles.hero__title}`}>{heroData.title}</h1>
                    <p className={styles.hero__description}>
                        {heroData.description}
                        <br />
                        <b>{heroData.short_information}</b>
                        </p>
                </div>
            </div>
        </section>
    )
}
export default Hero