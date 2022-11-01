import pocketMonsterBgPng from '../../../assets/PocketMonstersBg.png'
import GenerationForm from '../components/generation/GenerationForm'
import styles from './style.module.css'
function HeroPokemon(props) {
    const PokeAPI = {
        title: 'PokeAPI',
        description: "All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API."
    }

    return (
        <section className={styles.heroPokemon} 
                id="hero-pokemon-id">
            <div className="container">
                <div className={styles.__row}>
                    <div className={`__col ${styles.__columnMain}`}>
                        <div className={styles.heroPokemon__info}>
                            <h1 className={styles.heroPokemon__title}>{PokeAPI.title}</h1>
                            <p className={styles.heroPokemon__description}>{PokeAPI.description}</p>
                            <GenerationForm 
                                collectPokemon={props.collectResponse}
                            />
                        </div>
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
export default HeroPokemon