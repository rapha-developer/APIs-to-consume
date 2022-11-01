import rickAndMortyBgMin from '../../../assets/RickAndMortyBgMin.png'
import yellowEllipseSvg from '../../../assets/Ellipse yellow.svg'
import ellipseCircleSvg from '../../../assets/Ellipse circle.svg'
import styles from './style.module.css'

function RickHero() {
    const rickHero = {
        title: 'Rick & Morty API',
        description: 'Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto, Morty, um adolescente não tão brilhante quanto o avô.'
    }
    return (
        <section className={styles.heroSection} 
                id="rick-hero-section-id">
            <div className="container">
                <div className={styles.__row}>
                    <div className="col">
                    <img src={rickAndMortyBgMin} 
                        className={styles.image}
                        alt="Rick and Morty poster of season five"
                    />
                    </div>
                    <div className="col">
                        <div className={styles.rickHero__info}>
                            <h1 className={styles.rickHero__title}>
                                {rickHero.title}
                            </h1>
                            <p className={styles.rickHero__description}>
                                {rickHero.description}
                            </p>
                            <span className={styles.rickHero__Svg}>
                                <img src={yellowEllipseSvg}
                                className={styles.homeCircleSvg}
                                alt="Yellow Circle" />
                                <img src={ellipseCircleSvg}
                                className={styles.ellipseCircle}
                                alt="Red circle" />
                            </span>
                        </div>
                </div>
                </div>
            </div>

        </section>
    )
}
export default RickHero