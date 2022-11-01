
import pocketMonsterBgPng from '../../../assets/PocketMonstersBg.png'
import HeroWithForm from '../components/hero-form/HeroWithForm'
import styles from './style.module.css'
function ExploreItems(props) {
    const explorePokeHero = {
        title: props?.title || 'Explore and search on PokeAPI',
        description: props?.description || "All the Pokémon items you'll ever need in one place, easily accessible through a modern RESTful API.",
        type: props?.type || 'medicine'
    }
    return (
        <section className={styles.exploreItems} 
                id="explore-item-id">
            <div className="container">
                <div className={styles.__row}>
                    <div className={`__col ${styles.__columnMain}`}>
                        <HeroWithForm 
                            title={explorePokeHero.title}
                            description={explorePokeHero.description}
                            type={explorePokeHero.type}
                            collectResponse={props.collectResponse}
                        />
                    </div>
                    <div className="__col">
                        <img src={pocketMonsterBgPng}
                            className=''
                            alt="bulbasaur, charmander, squirtle playing on a game boy" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExploreItems