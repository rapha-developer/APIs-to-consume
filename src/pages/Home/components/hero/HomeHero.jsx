
import AreaHero from './components/area/AreaHero'
import BackgroundHero from './components/background/BackgroundHero'
import styles from './style.module.css'
function HomeHero(props) {
    return (
        <section className={styles.homeHero}
                id='home-hero-id'>
            <div className="container">
                <div className={styles.homeHero__row}>
                    <AreaHero 
                        title={props.title}
                        description={props.description}
                        button__text={props.button__text}
                    />
                    <BackgroundHero />
                </div>
            </div>
        </section>
    )
}
export default HomeHero