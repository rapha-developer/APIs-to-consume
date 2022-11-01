
import AreaHero from './components/area/AreaHero'
import BackgroundHero from './components/background/BackgroundHero'
import styles from './style.module.css'
function HomeHero(props) {
    const heroData = {
        title: props?.title,
        description: props?.description,
    }
    return (
        <section className={styles.homeHero}
                id='home-hero-id'>
            <div className="container">
                <div className={styles.homeHero__row}>
                    <AreaHero 
                        title={heroData.title}
                        description={heroData.description}
                    />
                    <BackgroundHero />
                </div>
            </div>
        </section>
    )
}
export default HomeHero